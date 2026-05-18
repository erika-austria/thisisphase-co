/**
 * POST /api/clarity
 *
 * Receives Clarity Starter Kit lead capture submissions from /clarity landing page.
 *
 * Scope:
 *   1. Validates email
 *   2. Fires Meta Conversions API (CAPI) Lead event server-side · dedupes against
 *      client-side Pixel via eventID returned in response body
 *   3. Sends the Day 0 delivery email instantly via Resend
 *   4. Schedules 3 follow-ups via Resend's `scheduled_at` parameter:
 *        Day 2 · "What you might have missed in the Kit" + soft Vol. I tease
 *        Day 4 · Founder story · "I almost gave up at year three" · nurse practitioner moment
 *        Day 7 · Direct offer · Vol. I or The Series
 *   5. Returns 200 OK with eventId for client-side Meta Lead event firing
 *
 * Env vars required (set in Vercel · thisisphase-co project):
 *   - RESEND_API_KEY                       (re_... from resend.com)
 *   - RESEND_FROM                          (e.g. "Erika · MOMumental Moments® <info@momumentalmoments.co>")
 *   - META_CAPI_ACCESS_TOKEN               (from Meta Events Manager → Settings → Conversions API)
 *   - NEXT_PUBLIC_META_PIXEL_ID            (already set · empire-wide master Pixel ID)
 *   - NEXT_PUBLIC_META_PIXEL_ID_SECONDARY  (already set · PHASE-specific Pixel ID)
 *   - META_CAPI_TEST_EVENT_CODE            (optional · for Meta Test Events validation)
 *
 * Pixel Lead event fires CLIENT-SIDE in ClarityForm.tsx after this returns 200,
 * with the eventId returned here for CAPI dedup (mirrors purchase tracking pattern).
 */

import { NextRequest, NextResponse } from "next/server";
import {
  buildClarityDeliveryEmail,
  buildClarityNudgeEmail,
  buildClarityStoryEmail,
  buildClarityOfferEmail,
} from "@/lib/clarity-emails";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// ─── Resend send helper (mirrors stripe-webhook pattern) ────────────────

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

// ─── Meta Conversions API · server-side Lead event ───────────────────────
//
// Fires Lead to one or both configured Pixels (primary + optional secondary).
// Dedupes against client-side Pixel via event_id matching the eventId returned
// to ClarityForm in the response body.
// Email is SHA-256 hashed lowercase per Meta CAPI spec.
// TODO: extract sha256Hex + sendMetaCapi helpers to src/lib/meta-capi.ts after launch.

async function sha256Hex(input: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(input));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function sendMetaCapiLead(opts: {
  pixelId: string;
  accessToken: string;
  eventId: string;
  eventTimeSec: number;
  eventSourceUrl: string;
  email: string;
  clientIp?: string | null;
  userAgent?: string | null;
  source?: string;
  testEventCode?: string | null;
}): Promise<{ ok: boolean; status: number; body: string }> {
  const hashedEmail = await sha256Hex(opts.email.trim().toLowerCase());

  const eventPayload: Record<string, unknown> = {
    event_name: "Lead",
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
      content_name: "Clarity Starter Kit",
      content_category: "lead-magnet",
      ...(opts.source ? { lead_source: opts.source } : {}),
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

// ─── Main handler ────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const resendKey = process.env.RESEND_API_KEY;
  const resendFrom =
    process.env.RESEND_FROM || "Erika · MOMumental Moments® <info@momumentalmoments.co>";

  if (!resendKey) {
    console.error("RESEND_API_KEY not set · /api/clarity");
    return NextResponse.json(
      { error: "email service not configured" },
      { status: 503 }
    );
  }

  let body: { email?: string; source?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid JSON" }, { status: 400 });
  }

  const email = (body.email ?? "").trim().toLowerCase();
  if (!email || !email.includes("@") || email.length > 254) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }

  // Generate eventId for Pixel CAPI dedup
  const eventId = `lead_${Date.now()}_${Math.random().toString(36).slice(2, 12)}`;
  const source = (body.source ?? "clarity-page").trim().slice(0, 64);

  // ─── Fire Meta CAPI Lead server-side (fire-and-forget, in parallel with emails) ──
  // Dedupes against client-side Pixel in ClarityForm via event_id matching eventId returned below.
  // Fires to primary + secondary Pixels if both configured.
  const capiToken = process.env.META_CAPI_ACCESS_TOKEN;
  const capiPrimaryPixel = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const capiSecondaryPixel = process.env.NEXT_PUBLIC_META_PIXEL_ID_SECONDARY;
  const capiTestCode = process.env.META_CAPI_TEST_EVENT_CODE;
  if (capiToken && (capiPrimaryPixel || capiSecondaryPixel)) {
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      null;
    const userAgent = req.headers.get("user-agent") || null;
    const pixelIds = [capiPrimaryPixel, capiSecondaryPixel].filter(Boolean) as string[];

    // Fire in parallel without awaiting · don't block lead capture on CAPI latency
    Promise.allSettled(
      pixelIds.map((pixelId) =>
        sendMetaCapiLead({
          pixelId,
          accessToken: capiToken,
          eventId,
          eventTimeSec: Math.floor(Date.now() / 1000),
          eventSourceUrl: "https://thisisphase.co/clarity",
          email,
          clientIp,
          userAgent,
          source,
          testEventCode: capiTestCode || null,
        }),
      ),
    ).then((capiResults) => {
      capiResults.forEach((r, i) => {
        const pixelId = pixelIds[i];
        if (r.status === "fulfilled" && r.value.ok) {
          console.log(`Meta CAPI Lead sent · pixel ${pixelId} · eventId ${eventId}`);
        } else {
          const detail = r.status === "fulfilled" ? r.value.body : String(r.reason);
          console.error(`Meta CAPI Lead failed · pixel ${pixelId} · ${detail}`);
        }
      });
    });
  } else if (!capiToken) {
    console.warn(
      "META_CAPI_ACCESS_TOKEN not set · skipping server-side Lead event · client-side Pixel only",
    );
  }

  // ─── Build all 4 emails in the sequence ────────────────────────────────
  // Day 0 instant: Clarity Kit delivery
  // Day 2: "What you might have missed" nudge + soft Vol. I tease
  // Day 4: Founder story · 4 years dismissed · nurse practitioner moment
  // Day 7: Direct offer · Vol. I or Series
  const sequence = [
    {
      stage: "day-0-clarity-delivery",
      scheduledAt: undefined as string | undefined,
      email: buildClarityDeliveryEmail(email),
    },
    {
      stage: "day-2-clarity-nudge",
      scheduledAt: offsetFromNow(60 * 24 * 2),
      email: buildClarityNudgeEmail(email),
    },
    {
      stage: "day-4-clarity-story",
      scheduledAt: offsetFromNow(60 * 24 * 4),
      email: buildClarityStoryEmail(email),
    },
    {
      stage: "day-7-clarity-offer",
      scheduledAt: offsetFromNow(60 * 24 * 7),
      email: buildClarityOfferEmail(email),
    },
  ];

  // Dispatch all 4 to Resend in parallel · Day 0 sends immediately, others are scheduled.
  const results = await Promise.all(
    sequence.map((item) =>
      sendViaResend({
        apiKey: resendKey,
        from: resendFrom,
        to: email,
        subject: item.email.subject,
        html: item.email.html,
        text: item.email.text,
        scheduledAt: item.scheduledAt,
        tags: [
          { name: "source", value: "clarity-lead" },
          { name: "lead_source", value: source },
          { name: "stage", value: item.stage },
          { name: "event_id", value: eventId },
        ],
      }).then((r) => ({ stage: item.stage, ...r }))
    )
  );

  const deliveryResult = results.find(
    (r) => r.stage === "day-0-clarity-delivery"
  );
  const failed = results.filter((r) => !r.ok);

  // Hard-fail only if the Day 0 delivery email failed · that is the one the lead is waiting on.
  if (deliveryResult && !deliveryResult.ok) {
    console.error(
      "Day 0 Clarity delivery send failed",
      deliveryResult.status,
      deliveryResult.body
    );
    return NextResponse.json(
      {
        error: "delivery email send failed",
        details: deliveryResult.body,
      },
      { status: 500 }
    );
  }

  // Soft-log any scheduled-email failures · the delivery already shipped.
  if (failed.length > 0) {
    console.error(
      "Some scheduled Clarity emails failed to enqueue",
      failed.map((f) => ({ stage: f.stage, status: f.status, body: f.body }))
    );
  }

  console.log(
    `Clarity lead sequence dispatched · ${email} · source=${source} · eventId=${eventId} · ` +
      `${results.length - failed.length}/${results.length} ok`
  );

  // Return eventId so the client can fire Meta Lead event with matching eventID for CAPI dedup
  return NextResponse.json({
    success: true,
    eventId,
    sequence: results.map((r) => ({ stage: r.stage, ok: r.ok, status: r.status })),
  });
}
