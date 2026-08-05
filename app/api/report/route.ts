/**
 * POST /api/report
 *
 * Receives State of Reinvention 2026 lead captures from the /report landing page
 * and the § 01 report block on the home page.
 *
 * Scope:
 *   1. Validates email
 *   2. Sends the Day 0 delivery email instantly via Resend (PDF + read-online link)
 *   3. Schedules the Day 3 "which room did you land in" nudge via Resend `scheduled_at`
 *   4. Adds the contact to Resend Contacts, tagged funnel=state-of-reinvention
 *   5. Fires Meta Conversions API Lead server-side, deduped against the client-side
 *      Pixel via the eventId returned in the response body
 *   6. Returns 200 with { eventId, downloadUrl } so the client can reveal the download
 *      immediately and fire its own Lead event
 *
 * Mirrors /api/clarity. Same env vars, no new ones required:
 *   - RESEND_API_KEY, RESEND_FROM
 *   - META_CAPI_ACCESS_TOKEN, NEXT_PUBLIC_META_PIXEL_ID(_SECONDARY), META_CAPI_TEST_EVENT_CODE
 *   - REPORT_PDF_URL (optional · point at Vercel Blob instead of /public)
 */

import { NextRequest, NextResponse } from 'next/server';
import {
  buildReportDeliveryEmail,
  buildReportNudgeEmail,
  REPORT_PDF_URL,
} from '@/lib/report-emails';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

async function sendViaResend(opts: {
  apiKey: string;
  from: string;
  to: string;
  subject: string;
  html: string;
  text: string;
  tags?: Array<{ name: string; value: string }>;
  /** ISO 8601 timestamp · if set, Resend schedules instead of sending immediately. */
  scheduledAt?: string;
}): Promise<{ ok: boolean; status: number; body: string }> {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
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

async function addToResendContacts(opts: {
  apiKey: string;
  email: string;
  source: string;
}): Promise<{ ok: boolean; status: number; body: string }> {
  const sourceTag = (opts.source || 'unknown')
    .toLowerCase()
    .replace(/[^a-z0-9\-_]/g, '-')
    .slice(0, 48);

  const res = await fetch('https://api.resend.com/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${opts.apiKey}`,
    },
    body: JSON.stringify({
      email: opts.email,
      firstName: 'Reinvention Report Lead',
      unsubscribed: false,
      properties: {
        funnel: 'state-of-reinvention',
        lead_source: sourceTag,
        signup_date: new Date().toISOString().slice(0, 10),
        signup_stage: 'day-0',
      },
    }),
  });
  const body = await res.text();
  // Resend returns 409 if the contact already exists · treat as success.
  const ok = res.ok || res.status === 409 || body.toLowerCase().includes('already exists');
  return { ok, status: res.status, body };
}

async function sha256Hex(input: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(input));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
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

  const body: Record<string, unknown> = {
    data: [
      {
        event_name: 'Lead',
        event_time: opts.eventTimeSec,
        event_id: opts.eventId,
        action_source: 'website',
        event_source_url: opts.eventSourceUrl,
        user_data: {
          em: [hashedEmail],
          ...(opts.clientIp ? { client_ip_address: opts.clientIp } : {}),
          ...(opts.userAgent ? { client_user_agent: opts.userAgent } : {}),
        },
        custom_data: {
          content_name: 'State of Reinvention 2026',
          content_category: 'lead-magnet',
          ...(opts.source ? { lead_source: opts.source } : {}),
        },
      },
    ],
    ...(opts.testEventCode ? { test_event_code: opts.testEventCode } : {}),
  };

  const url = `https://graph.facebook.com/v18.0/${opts.pixelId}/events?access_token=${encodeURIComponent(
    opts.accessToken,
  )}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const respBody = await res.text();
  return { ok: res.ok, status: res.status, body: respBody };
}

export async function POST(req: NextRequest) {
  const resendKey = process.env.RESEND_API_KEY;
  const resendFrom =
    process.env.RESEND_FROM || 'Erika · MOMumental Moments® <info@momumentalmoments.co>';

  let body: { email?: string; source?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'invalid JSON' }, { status: 400 });
  }

  const email = (body.email ?? '').trim().toLowerCase();
  if (!email || !email.includes('@') || email.length > 254) {
    return NextResponse.json({ error: 'invalid email' }, { status: 400 });
  }

  const source = (body.source ?? 'report-page').trim().slice(0, 64);
  const eventId = `lead_${Date.now()}_${Math.random().toString(36).slice(2, 12)}`;

  // The report is a free read. If Resend is not configured we still hand over the
  // download rather than holding the reader hostage to our own misconfiguration.
  if (!resendKey) {
    console.error('RESEND_API_KEY not set · /api/report · lead NOT stored:', email);
    return NextResponse.json({
      success: true,
      stored: false,
      eventId,
      downloadUrl: REPORT_PDF_URL,
    });
  }

  // ─── Meta CAPI Lead · fire-and-forget, deduped client-side via eventId ──
  const capiToken = process.env.META_CAPI_ACCESS_TOKEN;
  const capiPrimaryPixel = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const capiSecondaryPixel = process.env.NEXT_PUBLIC_META_PIXEL_ID_SECONDARY;
  const capiTestCode = process.env.META_CAPI_TEST_EVENT_CODE;
  if (capiToken && (capiPrimaryPixel || capiSecondaryPixel)) {
    const clientIp =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      null;
    const userAgent = req.headers.get('user-agent') || null;
    const pixelIds = [capiPrimaryPixel, capiSecondaryPixel].filter(Boolean) as string[];

    Promise.allSettled(
      pixelIds.map((pixelId) =>
        sendMetaCapiLead({
          pixelId,
          accessToken: capiToken,
          eventId,
          eventTimeSec: Math.floor(Date.now() / 1000),
          eventSourceUrl: 'https://thephase.co/report',
          email,
          clientIp,
          userAgent,
          source,
          testEventCode: capiTestCode || null,
        }),
      ),
    ).then((results) => {
      results.forEach((r, i) => {
        const pixelId = pixelIds[i];
        if (r.status === 'fulfilled' && r.value.ok) {
          console.log(`Meta CAPI Lead sent · report · pixel ${pixelId} · eventId ${eventId}`);
        } else {
          const detail = r.status === 'fulfilled' ? r.value.body : String(r.reason);
          console.error(`Meta CAPI Lead failed · report · pixel ${pixelId} · ${detail}`);
        }
      });
    });
  }

  // ─── Day 0 delivery + Day 3 nudge ──────────────────────────────────────
  const sequence = [
    {
      stage: 'day-0-report-delivery',
      scheduledAt: undefined as string | undefined,
      email: buildReportDeliveryEmail(email),
    },
    {
      stage: 'day-3-report-nudge',
      scheduledAt: offsetFromNow(60 * 24 * 3),
      email: buildReportNudgeEmail(email),
    },
  ];

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
          { name: 'source', value: 'report-lead' },
          { name: 'lead_source', value: source },
          { name: 'stage', value: item.stage },
          { name: 'event_id', value: eventId },
        ],
      }).then((r) => ({ stage: item.stage, ...r })),
    ),
  );

  const delivery = results.find((r) => r.stage === 'day-0-report-delivery');
  const failed = results.filter((r) => !r.ok);

  if (failed.length > 0) {
    console.error(
      'Some report emails failed',
      failed.map((f) => ({ stage: f.stage, status: f.status, body: f.body })),
    );
  }

  console.log(
    `Report lead dispatched · ${email} · source=${source} · eventId=${eventId} · ` +
      `${results.length - failed.length}/${results.length} ok`,
  );

  // ─── Owned-database write · fire-and-forget ────────────────────────────
  addToResendContacts({ apiKey: resendKey, email, source })
    .then((r) => {
      if (r.ok) {
        console.log(`Resend Contact add · report · ${email} · status=${r.status}`);
      } else {
        console.error(`Resend Contact add FAILED · report · ${email} · ${r.status} · ${r.body}`);
      }
    })
    .catch((e) => console.error(`Resend Contact add EXCEPTION · report · ${email} · ${e}`));

  // The download is always returned. A failed delivery email should never cost the
  // reader the report she just asked for · the client reveals the link either way.
  return NextResponse.json({
    success: true,
    stored: true,
    emailed: Boolean(delivery?.ok),
    eventId,
    downloadUrl: REPORT_PDF_URL,
  });
}
