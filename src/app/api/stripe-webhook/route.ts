/**
 * POST /api/stripe-webhook
 *
 * Receives Stripe webhook events for thisisphase.co Payment Links.
 *
 * Scope: handles `checkout.session.completed`.
 *   1. Verifies the request signature using STRIPE_WEBHOOK_SECRET
 *   2. Identifies the purchased product (metadata first, then amount fallback)
 *   3. Sends the Day 0 delivery email instantly via Resend
 *   4. Schedules 4 follow-ups via Resend's `scheduled_at` parameter:
 *        Day 0 + 30 min · Substack invite
 *        Day 3          · pure personal check-in (no selling, no CTA)
 *        Day 7          · cross-sell / Series upgrade offer
 *        Day 14         · keystone essay + paid Substack pitch
 *   5. Returns 200 OK to acknowledge the event
 *
 * Env vars required (set in Vercel · thisisphase-co project):
 *   - STRIPE_WEBHOOK_SECRET   (from Stripe → Developers → Webhooks → reveal)
 *   - RESEND_API_KEY          (re_... from resend.com)
 *   - RESEND_FROM             (e.g. "Erika Hanafin Austria <hello@erikahanafin.com>")
 *
 * Stripe webhook setup steps (do once after deploy):
 *   1. Stripe dashboard → Developers → Webhooks → Add endpoint
 *   2. URL: https://thisisphase.co/api/stripe-webhook
 *   3. Events: select `checkout.session.completed`
 *   4. Save · copy signing secret · paste into Vercel STRIPE_WEBHOOK_SECRET
 *   5. For each Payment Link in Stripe → Edit → Metadata, add:
 *        product=vol1  (or vol2, vol3, vol4, vol5, series, journal, decode)
 *      This makes product identification 100% reliable instead of amount-based fallback.
 */

import { NextRequest, NextResponse } from "next/server";
import { identifyProduct, PRODUCTS } from "@/lib/products";
import {
  buildDeliveryEmail,
  buildSubstackInviteEmail,
  buildCheckInEmail,
  buildOfferEmail,
  buildKeystoneEmail,
} from "@/lib/purchase-emails";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// ─── Stripe signature verification (no SDK · use Web Crypto) ──────────────

async function verifyStripeSignature(
  payload: string,
  sigHeader: string,
  secret: string,
  toleranceSeconds = 300
): Promise<boolean> {
  // Stripe-Signature header format: t=TIMESTAMP,v1=SIG[,v1=SIG2,...]
  const parts = sigHeader.split(",").reduce<Record<string, string[]>>((acc, p) => {
    const [k, v] = p.split("=");
    if (!k || !v) return acc;
    acc[k] = acc[k] || [];
    acc[k].push(v);
    return acc;
  }, {});

  const ts = parts["t"]?.[0];
  const sigs = parts["v1"] ?? [];
  if (!ts || sigs.length === 0) return false;

  // Tolerance check
  const now = Math.floor(Date.now() / 1000);
  if (Math.abs(now - parseInt(ts, 10)) > toleranceSeconds) return false;

  const signedPayload = `${ts}.${payload}`;
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sigBuf = await crypto.subtle.sign("HMAC", key, enc.encode(signedPayload));
  const expected = Array.from(new Uint8Array(sigBuf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  // Constant-time comparison
  return sigs.some((s) => timingSafeEqualHex(s, expected));
}

function timingSafeEqualHex(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

// ─── Resend send helper ───────────────────────────────────────────────────

async function sendViaResend(opts: {
  apiKey: string;
  from: string;
  to: string;
  subject: string;
  html: string;
  text: string;
  tags?: Array<{ name: string; value: string }>;
  /** ISO 8601 timestamp · if set, Resend schedules instead of sending immediately. Max 30 days future. */
  scheduledAt?: string;
}): Promise<{ ok: boolean; status: number; body: string }> {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${opts.apiKey}`,
    },
    body: JSON.stringify({
      from: opts.from,
      to: [opts.to],
      subject: opts.subject,
      html: opts.html,
      text: opts.text,
      tags: opts.tags,
      ...(opts.scheduledAt ? { scheduled_at: opts.scheduledAt } : {}),
    }),
  });
  const body = await res.text();
  return { ok: res.ok, status: res.status, body };
}

/** Build an ISO 8601 timestamp `minutes` from now. */
function offsetFromNow(minutes: number): string {
  return new Date(Date.now() + minutes * 60 * 1000).toISOString();
}

// ─── Stripe session expansion · fetch line_items if needed ─────────────────

async function fetchSessionLineItems(
  sessionId: string,
  stripeKey: string
): Promise<{ data?: Array<{ description?: string | null }> } | null> {
  if (!stripeKey) return null;
  const res = await fetch(
    `https://api.stripe.com/v1/checkout/sessions/${sessionId}/line_items?limit=10`,
    { headers: { Authorization: `Bearer ${stripeKey}` } }
  );
  if (!res.ok) return null;
  return res.json();
}

// ─── Main handler ────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const resendKey = process.env.RESEND_API_KEY;
  const resendFrom =
    process.env.RESEND_FROM || "Erika Hanafin Austria <hello@erikahanafin.com>";
  const stripeKey = process.env.STRIPE_SECRET_KEY; // optional · enables line_items expansion

  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET not set");
    return NextResponse.json({ error: "webhook not configured" }, { status: 503 });
  }
  if (!resendKey) {
    console.error("RESEND_API_KEY not set");
    return NextResponse.json({ error: "email service not configured" }, { status: 503 });
  }

  const sigHeader = req.headers.get("stripe-signature");
  if (!sigHeader) {
    return NextResponse.json({ error: "missing signature" }, { status: 400 });
  }

  const payload = await req.text();
  const valid = await verifyStripeSignature(payload, sigHeader, webhookSecret);
  if (!valid) {
    console.error("Stripe signature verification failed");
    return NextResponse.json({ error: "invalid signature" }, { status: 401 });
  }

  let event: { type: string; data: { object: Record<string, unknown> } };
  try {
    event = JSON.parse(payload);
  } catch {
    return NextResponse.json({ error: "invalid JSON" }, { status: 400 });
  }

  // Only handle checkout.session.completed in V1
  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ ok: true, ignored: event.type });
  }

  const session = event.data.object as {
    id: string;
    customer_email?: string | null;
    customer_details?: { email?: string | null };
    metadata?: Record<string, string> | null;
    amount_total?: number | null;
    line_items?: { data?: Array<{ description?: string | null }> };
  };

  const customerEmail = session.customer_email || session.customer_details?.email;
  if (!customerEmail) {
    console.error("No customer email on session", session.id);
    return NextResponse.json({ ok: true, warning: "no customer email" });
  }

  // Fetch line_items if not present (Payment Links sessions usually omit them)
  let sessionWithLineItems = session;
  if (!session.line_items?.data && stripeKey) {
    const lineItems = await fetchSessionLineItems(session.id, stripeKey);
    if (lineItems) {
      sessionWithLineItems = { ...session, line_items: lineItems };
    }
  }

  const productKey = identifyProduct(sessionWithLineItems);
  if (!productKey) {
    console.error("Could not identify product for session", session.id, {
      amount: session.amount_total,
      metadata: session.metadata,
    });
    // Send Erika an admin alert so she can manually fulfill
    await sendViaResend({
      apiKey: resendKey,
      from: resendFrom,
      to: "erika@erikahanafin.com",
      subject: `[ALERT] Stripe purchase · could not identify product · session ${session.id}`,
      html: `<p>Stripe session ${session.id} completed but the product could not be identified.</p><p>Customer: ${customerEmail}</p><p>Amount: ${session.amount_total}</p><p>Metadata: ${JSON.stringify(session.metadata)}</p><p>Action: manually fulfill and add product= metadata to the Stripe Payment Link.</p>`,
      text: `Stripe session ${session.id} completed but product not identified. Customer: ${customerEmail}. Amount: ${session.amount_total}. Manually fulfill.`,
    });
    return NextResponse.json({ ok: true, warning: "product not identified" });
  }

  const product = PRODUCTS[productKey];

  // ─── Build all 5 emails in the sequence ────────────────────────────────
  // Day 0 instant: delivery
  // Day 0 + 30 min: Substack invite
  // Day 3: personal check-in (no selling)
  // Day 7: cross-sell / Series upgrade offer
  // Day 14: keystone essay + paid Substack
  const sequence = [
    {
      stage: "day-0-delivery",
      scheduledAt: undefined as string | undefined,
      email: buildDeliveryEmail(productKey, customerEmail),
    },
    {
      stage: "day-0-substack-invite",
      scheduledAt: offsetFromNow(30),
      email: buildSubstackInviteEmail(productKey, customerEmail),
    },
    {
      stage: "day-3-checkin",
      scheduledAt: offsetFromNow(60 * 24 * 3),
      email: buildCheckInEmail(productKey, customerEmail),
    },
    {
      stage: "day-7-offer",
      scheduledAt: offsetFromNow(60 * 24 * 7),
      email: buildOfferEmail(productKey, customerEmail),
    },
    {
      stage: "day-14-keystone",
      scheduledAt: offsetFromNow(60 * 24 * 14),
      email: buildKeystoneEmail(productKey, customerEmail),
    },
  ];

  // Dispatch all 5 to Resend in parallel · Day 0 sends immediately, others are scheduled.
  const results = await Promise.all(
    sequence.map((item) =>
      sendViaResend({
        apiKey: resendKey,
        from: resendFrom,
        to: customerEmail,
        subject: item.email.subject,
        html: item.email.html,
        text: item.email.text,
        scheduledAt: item.scheduledAt,
        tags: [
          { name: "source", value: "stripe-purchase" },
          { name: "product", value: productKey },
          { name: "pillar", value: product.pillar },
          { name: "stage", value: item.stage },
        ],
      }).then((r) => ({ stage: item.stage, ...r }))
    )
  );

  const deliveryResult = results.find((r) => r.stage === "day-0-delivery");
  const failed = results.filter((r) => !r.ok);

  // Hard-fail only if the Day 0 delivery email failed · that is the one the customer is waiting on.
  if (deliveryResult && !deliveryResult.ok) {
    console.error("Day 0 delivery send failed", deliveryResult.status, deliveryResult.body);
    return NextResponse.json(
      { error: "delivery email send failed", details: deliveryResult.body },
      { status: 500 }
    );
  }

  // Soft-log any scheduled-email failures · the delivery already shipped so the customer is taken care of.
  if (failed.length > 0) {
    console.error(
      "Some scheduled emails failed to enqueue",
      failed.map((f) => ({ stage: f.stage, status: f.status, body: f.body }))
    );
  }

  console.log(
    `Purchase sequence dispatched · ${productKey} · ${customerEmail} · session ${session.id} · ` +
      `${results.length - failed.length}/${results.length} ok`
  );

  return NextResponse.json({
    ok: true,
    product: productKey,
    email: customerEmail,
    sequence: results.map((r) => ({ stage: r.stage, ok: r.ok, status: r.status })),
  });
}
