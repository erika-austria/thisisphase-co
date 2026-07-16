/**
 * POST /api/stripe-webhook
 *
 * Receives Stripe webhook events for thisisphase.co Payment Links.
 *
 * Scope: handles `checkout.session.completed`.
 *   1. Verifies the request signature using STRIPE_WEBHOOK_SECRET
 *   2. Identifies the purchased product (metadata first, then amount fallback)
 *   3. Fires Meta Conversions API (CAPI) Purchase event server-side · dedupes
 *      against client-side Pixel via eventID = Stripe session.id
 *   4. Sends the Day 0 delivery email instantly via Resend
 *   5. Schedules 4 follow-ups via Resend's `scheduled_at` parameter:
 *        Day 0 + 30 min · Substack invite
 *        Day 3          · pure personal check-in (no selling, no CTA)
 *        Day 7          · cross-sell / Series upgrade offer
 *        Day 14         · keystone essay + paid Substack pitch
 *   6. Returns 200 OK to acknowledge the event
 *
 * SPECIAL BRANCH · Complete Library ($228 Founding cohort)
 *   Handled inline at the top of the POST handler BEFORE the standard product
 *   registry check. Sends buyer 18 direct blob download links + alerts Erika.
 *   Real Clerk portal at thisisphase.co/library replaces this shortly.
 */

import { NextRequest, NextResponse } from "next/server";
import { identifyProduct, PRODUCTS } from "@/lib/products";
import {
  buildDeliveryEmail,
  buildSubstackInviteEmail,
  buildCheckInEmail,
  buildOfferEmail,
  buildKeystoneEmail,
  buildCartRecoverySoftEmail,
  buildCartRecoveryPainEmail,
  buildCartRecoveryFinalEmail,
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

function offsetFromNow(minutes: number): string {
  return new Date(Date.now() + minutes * 60 * 1000).toISOString();
}

// ─── Meta Conversions API · server-side Purchase event ───────────────────

async function sha256Hex(input: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(input));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function sendMetaCapiPurchase(opts: {
  pixelId: string;
  accessToken: string;
  eventId: string;
  eventTimeSec: number;
  eventSourceUrl: string;
  email: string;
  clientIp?: string | null;
  userAgent?: string | null;
  value?: number | null;
  currency: string;
  contentIds?: string[];
  testEventCode?: string | null;
}): Promise<{ ok: boolean; status: number; body: string }> {
  const hashedEmail = await sha256Hex(opts.email.trim().toLowerCase());

  const eventPayload: Record<string, unknown> = {
    event_name: "Purchase",
    event_time: opts.eventTimeSec,
    event_id: opts.eventId,
    action_source: "website",
    event_source_url: opts.eventSourceUrl,
    user_data: {
      em: [hashedEmail],
      ...(opts.clientIp ? { client_ip_address: opts.clientIp } : {}),
      ...(opts.userAgent ? { client_user_agent: opts.userAgent } : {}),
    },
    custom_data: {
      currency: opts.currency,
      ...(typeof opts.value === "number" ? { value: opts.value } : {}),
      ...(opts.contentIds?.length
        ? { content_ids: opts.contentIds, content_type: "product" }
        : {}),
    },
  };

  const body: Record<string, unknown> = {
    data: [eventPayload],
    ...(opts.testEventCode ? { test_event_code: opts.testEventCode } : {}),
  };

  const url = `https://graph.facebook.com/v18.0/${opts.pixelId}/events?access_token=${encodeURIComponent(
    opts.accessToken,
  )}`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const respBody = await res.text();
  return { ok: res.ok, status: res.status, body: respBody };
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

// ─── Complete Library delivery (Founding cohort · $228) ────────────────────

const BLOB_BASE = "https://dpo02ztmhn6nty5u.public.blob.vercel-storage.com";

const COMPLETE_LIBRARY_LINKS: Array<{ title: string; url: string }> = [
  { title: "The PHASE™ Vol. I · Perimenopause", url: `${BLOB_BASE}/the-phase-vol-1-perimenopause.pdf` },
  { title: "The PHASE™ Vol. II · Hormones", url: `${BLOB_BASE}/the-phase-vol-2-hormones.pdf` },
  { title: "The PHASE™ Vol. III · Architecture", url: `${BLOB_BASE}/the-phase-vol-3-architecture.pdf` },
  { title: "The PHASE™ Vol. IV · Self-trust", url: `${BLOB_BASE}/the-phase-vol-4-self-trust.pdf` },
  { title: "The PHASE™ Vol. V · Execution", url: `${BLOB_BASE}/the-phase-vol-5-execution.pdf` },
  { title: "The PHASE™ Series · All Five (bundle .zip)", url: `${BLOB_BASE}/the-phase-series-all-five.zip` },
  { title: "Co-Parenting Power Method® Workbook", url: `${BLOB_BASE}/coparenting-power-method.pdf` },
  { title: "The Ultimate Guide to Balance & Growth", url: `${BLOB_BASE}/balance-and-growth.pdf` },
  { title: "The Must-Have Frameworks for Profitability", url: `${BLOB_BASE}/frameworks-for-profitability.pdf` },
  { title: "The Mental Load Detox", url: `${BLOB_BASE}/mental-load-detox.pdf` },
  { title: "The Smart Woman's Guide to Stress-Free Finances", url: `${BLOB_BASE}/stress-free-finances.pdf` },
  { title: "The Clarity Starter Kit", url: `${BLOB_BASE}/the-clarity-starter-kit.pdf` },
  { title: "The Finance Planner", url: `${BLOB_BASE}/the-finance-planner.pdf` },
  { title: "The Goal Tracker", url: `${BLOB_BASE}/the-goal-tracker.pdf` },
  { title: "The Productivity Toolkit", url: `${BLOB_BASE}/the-productivity-toolkit.pdf` },
  { title: "Vision-to-Action Planning Guide", url: `${BLOB_BASE}/vision-to-action-planning-guide.pdf` },
  { title: "Reflections Through the PHASEs · Journal", url: `${BLOB_BASE}/reflections-journal.pdf` },
  { title: "Decode Your Symptoms · A Science-Backed Reset", url: `${BLOB_BASE}/decode-your-symptoms.pdf` },
];

async function handleCompleteLibraryDelivery(
  session: {
    id: string;
    customer_details?: { name?: string | null; email?: string | null };
  },
  customerEmail: string,
  resendKey: string,
  resendFrom: string
): Promise<NextResponse> {
  const firstName = session.customer_details?.name?.split(" ")[0] || "there";
  const fullName = session.customer_details?.name || customerEmail;

  const linksHtml = COMPLETE_LIBRARY_LINKS.map(
    (l) => `<li style="margin: 8px 0;"><a href="${l.url}" style="color: #e91e63; text-decoration: none;">${l.title}</a></li>`
  ).join("\n");

  const linksText = COMPLETE_LIBRARY_LINKS.map((l) => `• ${l.title}\n  ${l.url}`).join("\n\n");

  const welcomeHtml = `
<div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #222; line-height: 1.6;">
  <p>Hi ${firstName},</p>
  <p>You are officially in the Founding cohort of The Complete Library.</p>
  <p>Which means every workbook I have built to make midlife reinvention survivable is now yours. The five PHASE™ volumes. The Co-Parenting Power Method® workbook. Every individual workbook I have released. All of it. Yours. Forever.</p>
  <p><strong>Your library, below.</strong> Bookmark this email. Every link is a direct download.</p>
  <ul style="list-style: none; padding: 0;">
${linksHtml}
  </ul>
  <p style="margin-top: 32px;"><strong>A real note.</strong></p>
  <p>You are not late. You are not behind. You are exactly on time.</p>
  <p>The Complete Library is not a course. It is not homework. It is a set of tools that you open when you need them, put down when you do not, and return to when the body-truth part of this rebuild asks for language.</p>
  <p>I only made this for people who are actually rebuilding. If you ever need me, reply to this email. Every reply reaches me directly.</p>
  <p>Welcome to Founding.</p>
  <p style="margin-top: 24px;">
    MOMumentally,<br />
    <strong>Erika Hanafin Austria</strong><br />
    Founder, MOMumental Moments®<br />
    Publisher, MOMumental Reinvention
  </p>
  <p style="margin-top: 32px; font-size: 12px; color: #888;">
    Order confirmation: ${session.id}<br />
    A dedicated Founding cohort portal at thisisphase.co/library is launching this week. When it goes live you will receive a magic-link login.
  </p>
</div>
`;

  const welcomeText = `Hi ${firstName},

You are officially in the Founding cohort of The Complete Library.

Which means every workbook I have built to make midlife reinvention survivable is now yours. The five PHASE volumes. The Co-Parenting Power Method workbook. Every individual workbook I have released. All of it. Yours. Forever.

Your library, below. Bookmark this email. Every link is a direct download.

${linksText}

A real note.

You are not late. You are not behind. You are exactly on time.

The Complete Library is not a course. It is not homework. It is a set of tools that you open when you need them, put down when you do not, and return to when the body-truth part of this rebuild asks for language.

I only made this for people who are actually rebuilding. If you ever need me, reply to this email. Every reply reaches me directly.

Welcome to Founding.

MOMumentally,
Erika Hanafin Austria
Founder, MOMumental Moments
Publisher, MOMumental Reinvention

Order confirmation: ${session.id}
A dedicated Founding cohort portal at thisisphase.co/library is launching this week. When it goes live you will receive a magic-link login.`;

  const buyerSend = await sendViaResend({
    apiKey: resendKey,
    from: resendFrom,
    to: customerEmail,
    subject: "You are IN. Founding cohort. Welcome home.",
    html: welcomeHtml,
    text: welcomeText,
    tags: [
      { name: "source", value: "stripe-purchase" },
      { name: "product", value: "complete-library" },
      { name: "tier", value: "founding-cohort" },
      { name: "stage", value: "founding-day-0-delivery" },
    ],
  });

  await sendViaResend({
    apiKey: resendKey,
    from: resendFrom,
    to: "erika@erikahanafin.com",
    subject: `🎉 NEW FOUNDING SALE · ${fullName} · $228`,
    html: `<p><strong>${fullName}</strong> (${customerEmail}) just joined the Founding cohort.</p><p>Amount: $228.00 USD<br/>Session: ${session.id}<br/>Delivery email sent: ${buyerSend.ok ? "✅ YES" : "❌ FAILED · manually send"}</p><p>They just got instant access to the full library via direct download links. When Clerk portal is live, you will magic-link them in.</p>`,
    text: `NEW FOUNDING SALE\n\n${fullName} (${customerEmail}) just joined the Founding cohort.\n\nAmount: $228.00 USD\nSession: ${session.id}\nDelivery email sent: ${buyerSend.ok ? "YES" : "FAILED · manually send"}`,
  });

  if (!buyerSend.ok) {
    console.error("Founding delivery email failed", buyerSend.status, buyerSend.body);
    return NextResponse.json(
      { error: "founding delivery failed", details: buyerSend.body },
      { status: 500 }
    );
  }

  console.log(`Complete Library delivery sent · ${customerEmail} · session ${session.id}`);
  return NextResponse.json({ ok: true, product: "complete-library", email: customerEmail });
}

// ─── Main handler ────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const resendKey = process.env.RESEND_API_KEY;
  const resendFrom =
    process.env.RESEND_FROM || "Erika · MOMumental Moments® <info@momumentalmoments.co>";
  const stripeKey = process.env.STRIPE_SECRET_KEY;

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

  if (event.type === "checkout.session.expired") {
    return handleCheckoutExpired(event, resendKey, resendFrom);
  }
  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ ok: true, ignored: event.type });
  }

  const session = event.data.object as {
    id: string;
    customer_email?: string | null;
    customer_details?: { email?: string | null; name?: string | null };
    metadata?: Record<string, string> | null;
    amount_total?: number | null;
    line_items?: { data?: Array<{ description?: string | null }> };
  };

  const customerEmail = session.customer_email || session.customer_details?.email;
  if (!customerEmail) {
    console.error("No customer email on session", session.id);
    return NextResponse.json({ ok: true, warning: "no customer email" });
  }

  // ─── COMPLETE LIBRARY BRANCH (Founding cohort $228) ───────────────────
  // Handled BEFORE the standard product registry check because this SKU is
  // not in @/lib/products. Delivers direct blob download links + admin alert.
  if (session.metadata?.product === "complete-library") {
    return handleCompleteLibraryDelivery(session, customerEmail, resendKey, resendFrom);
  }
  // ─── END COMPLETE LIBRARY BRANCH ──────────────────────────────────────

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

  const capiToken = process.env.META_CAPI_ACCESS_TOKEN;
  const capiPrimaryPixel = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const capiSecondaryPixel = process.env.NEXT_PUBLIC_META_PIXEL_ID_SECONDARY;
  const capiTestCode = process.env.META_CAPI_TEST_EVENT_CODE;
  if (capiToken && (capiPrimaryPixel || capiSecondaryPixel)) {
    const valueDollars =
      typeof session.amount_total === "number" ? session.amount_total / 100 : null;
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      null;
    const userAgent = req.headers.get("user-agent") || null;
    const pixelIds = [capiPrimaryPixel, capiSecondaryPixel].filter(Boolean) as string[];

    const capiResults = await Promise.allSettled(
      pixelIds.map((pixelId) =>
        sendMetaCapiPurchase({
          pixelId,
          accessToken: capiToken,
          eventId: session.id,
          eventTimeSec: Math.floor(Date.now() / 1000),
          eventSourceUrl: `https://thisisphase.co/thanks?session_id=${session.id}`,
          email: customerEmail,
          clientIp,
          userAgent,
          value: valueDollars,
          currency: "USD",
          contentIds: [productKey],
          testEventCode: capiTestCode || null,
        }),
      ),
    );

    capiResults.forEach((r, i) => {
      const pixelId = pixelIds[i];
      if (r.status === "fulfilled" && r.value.ok) {
        console.log(`Meta CAPI Purchase sent · pixel ${pixelId} · session ${session.id}`);
      } else {
        const detail = r.status === "fulfilled" ? r.value.body : String(r.reason);
        console.error(`Meta CAPI Purchase failed · pixel ${pixelId} · ${detail}`);
      }
    });
  } else if (!capiToken) {
    console.warn(
      "META_CAPI_ACCESS_TOKEN not set · skipping server-side Purchase event · client-side Pixel only",
    );
  }

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

  if (deliveryResult && !deliveryResult.ok) {
    console.error("Day 0 delivery send failed", deliveryResult.status, deliveryResult.body);
    return NextResponse.json(
      { error: "delivery email send failed", details: deliveryResult.body },
      { status: 500 }
    );
  }

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

// ─── checkout.session.expired · abandoned cart recovery ───────────────────

async function handleCheckoutExpired(
  event: { type: string; data: { object: Record<string, unknown> } },
  resendKey: string,
  resendFrom: string
): Promise<NextResponse> {
  const session = event.data.object as {
    id: string;
    customer_email?: string | null;
    customer_details?: { email?: string | null };
    metadata?: Record<string, string> | null;
    amount_total?: number | null;
  };

  const customerEmail = session.customer_email || session.customer_details?.email;
  if (!customerEmail) {
    console.log(
      `Cart abandon · session ${session.id} · no customer_email · skipping recovery sequence`
    );
    return NextResponse.json({ ok: true, skipped: "no_customer_email" });
  }

  const productKey = (session.metadata?.product as string | undefined) || "vol1";
  const validProductKey =
    productKey in PRODUCTS ? (productKey as keyof typeof PRODUCTS) : "vol1";

  const sequence = [
    {
      stage: "abandoned-1hr-soft",
      scheduledAt: offsetFromNow(60),
      email: buildCartRecoverySoftEmail(validProductKey, customerEmail),
    },
    {
      stage: "abandoned-24hr-pain",
      scheduledAt: offsetFromNow(60 * 24),
      email: buildCartRecoveryPainEmail(validProductKey, customerEmail),
    },
    {
      stage: "abandoned-72hr-final",
      scheduledAt: offsetFromNow(60 * 72),
      email: buildCartRecoveryFinalEmail(validProductKey, customerEmail),
    },
  ];

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
          { name: "source", value: "stripe-cart-abandoned" },
          { name: "product", value: validProductKey },
          { name: "stage", value: item.stage },
        ],
      }).then((r) => ({ stage: item.stage, ...r }))
    )
  );

  const failed = results.filter((r) => !r.ok);
  if (failed.length > 0) {
    console.error(
      "Some cart recovery emails failed to enqueue",
      failed.map((f) => ({ stage: f.stage, status: f.status, body: f.body }))
    );
  }

  console.log(
    `Cart abandon recovery dispatched · ${validProductKey} · ${customerEmail} · session ${session.id} · ` +
    `${results.length - failed.length}/${results.length} ok`
  );

  return NextResponse.json({
    ok: true,
    flow: "cart-abandoned",
    product: validProductKey,
    email: customerEmail,
    sequence: results.map((r) => ({ stage: r.stage, ok: r.ok, status: r.status })),
  });
}
