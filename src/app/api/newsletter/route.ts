import { NextResponse } from 'next/server';

/**
 * /api/newsletter · email capture (REAL, no longer a stub)
 *
 * Persists the email to Resend Contacts so it is an owned, exportable,
 * broadcast-able list, then (for non-checkout signups) sends a short welcome.
 *
 * Accepts JSON body: { email, firstName?, source?, product? }
 *   - source "checkout" (from the buy-button gate) is captured but NOT auto-welcomed,
 *     because those people receive the purchase/recovery emails instead.
 *   - any other source (e.g. the founding-cohort form) gets the immediate welcome.
 *
 * Mirrors the proven Resend pattern in /api/clarity. Single-audience workspace
 * model, so no audience id is required. If RESEND_AUDIENCE_ID is set, it is used.
 */

async function addToResendContacts(opts: {
  apiKey: string;
  email: string;
  firstName?: string;
  source: string;
  product?: string;
}): Promise<{ ok: boolean; status: number; body: string }> {
  const sourceTag = (opts.source || 'newsletter')
    .toLowerCase()
    .replace(/[^a-z0-9\-_]/g, '-')
    .slice(0, 48);
  const productTag = (opts.product || '')
    .toLowerCase()
    .replace(/[^a-z0-9\-_]/g, '-')
    .slice(0, 48);

  const isCheckout = sourceTag.startsWith('checkout');
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  const url = audienceId
    ? `https://api.resend.com/audiences/${audienceId}/contacts`
    : 'https://api.resend.com/contacts';

  // Cap the request so a slow Resend never stalls a checkout redirect.
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 4000);
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${opts.apiKey}`,
      },
      body: JSON.stringify({
        email: opts.email,
        firstName:
          opts.firstName ||
          (isCheckout ? 'Checkout Lead' : 'MOMumental Subscriber'),
        unsubscribed: false,
        properties: {
          funnel: isCheckout ? 'checkout-capture' : 'newsletter',
          lead_source: sourceTag,
          ...(productTag && { product_interest: productTag }),
          signup_date: new Date().toISOString().slice(0, 10),
          signup_stage: 'day-0',
        },
      }),
      signal: controller.signal,
    });
    const body = await res.text();
    // Resend returns 409 if the contact already exists · treat as success.
    const ok =
      res.ok ||
      res.status === 409 ||
      body.toLowerCase().includes('already exists');
    return { ok, status: res.status, body };
  } finally {
    clearTimeout(timer);
  }
}

async function sendWelcomeEmail(opts: {
  apiKey: string;
  from: string;
  email: string;
}): Promise<boolean> {
  const html = `<!DOCTYPE html><html><body style="margin:0;background:#F7F5F2;font-family:Georgia,'Times New Roman',serif;color:#0F172A;">
    <div style="max-width:560px;margin:0 auto;padding:40px 28px;">
      <p style="font-size:0.72rem;letter-spacing:0.14em;text-transform:uppercase;color:#E93C8F;margin:0 0 18px;">MOMumental Reinvention</p>
      <h1 style="font-size:1.75rem;line-height:1.25;margin:0 0 18px;">You are in.</h1>
      <p style="font-size:1rem;line-height:1.6;color:#334155;margin:0 0 16px;">
        You just joined the women rebuilding everything that matters at once. The body, the family, the voice, the work.
        This is the whole season, and you do not have to do it alone.
      </p>
      <p style="font-size:1rem;line-height:1.6;color:#334155;margin:0 0 16px;">
        Watch your inbox. What I send is the real thing: the body-truth, the frameworks, and the tools I built from inside the wreckage.
        No fluff, no funnels.
      </p>
      <p style="font-size:1.05rem;line-height:1.6;font-style:italic;color:#0F172A;margin:0 0 24px;">
        You are not falling apart. You are becoming MOMumental.
      </p>
      <p style="font-size:0.95rem;line-height:1.6;color:#334155;margin:0;">Erika<br/>
        <span style="color:#94A3B8;font-size:0.82rem;">Founder, MOMumental Moments&reg;</span>
      </p>
    </div>
  </body></html>`;

  const text = [
    'You are in.',
    '',
    'You just joined the women rebuilding everything that matters at once. The body, the family, the voice, the work. This is the whole season, and you do not have to do it alone.',
    '',
    'Watch your inbox. What I send is the real thing: the body-truth, the frameworks, and the tools I built from inside the wreckage. No fluff, no funnels.',
    '',
    'You are not falling apart. You are becoming MOMumental.',
    '',
    'Erika',
    'Founder, MOMumental Moments (R)',
  ].join('\n');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${opts.apiKey}`,
    },
    body: JSON.stringify({
      from: opts.from,
      to: opts.email,
      subject: 'You are in. Welcome to the rebuild.',
      html,
      text,
    }),
  });
  return res.ok;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = (body?.email ?? '').trim();
    const firstName = ((body?.firstName ?? '').trim() as string) || undefined;
    const source = ((body?.source ?? 'newsletter').trim() as string) || 'newsletter';
    const product = ((body?.product ?? '').trim() as string) || undefined;

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    const from =
      process.env.RESEND_FROM ||
      'Erika · MOMumental Moments® <info@momumentalmoments.co>';

    if (!resendKey) {
      // Never hard-fail the UX (checkout must still proceed) but make the gap loud.
      console.error('RESEND_API_KEY not set · /api/newsletter · email NOT stored:', email);
      return NextResponse.json({ success: true, stored: false });
    }

    // Persist the contact. Awaited so it is saved before the client redirects to Stripe.
    const added = await addToResendContacts({
      apiKey: resendKey,
      email,
      firstName,
      source,
      product,
    }).catch((e) => {
      console.error('[newsletter] contact add exception', e);
      return { ok: false, status: 0, body: String(e) };
    });

    console.log(
      `[newsletter] ${email} · source=${source}${product ? ` · product=${product}` : ''} · stored=${added.ok} (status ${added.status})`,
    );

    // Immediate welcome only for non-checkout signups (buyers get purchase emails).
    if (!source.toLowerCase().startsWith('checkout')) {
      sendWelcomeEmail({ apiKey: resendKey, from, email }).catch((e) =>
        console.error('[newsletter] welcome send exception', e),
      );
    }

    return NextResponse.json({ success: true, stored: added.ok });
  } catch (err) {
    console.error('[newsletter error]', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
