'use client';

/**
 * ClarityForm · email capture form for the Clarity Starter Kit lead funnel.
 *
 * On successful submit:
 *   1. Server (/api/clarity) sends Day 0 PDF + schedules Day 2/4/7 nurture
 *   2. Client fires GA4 `generate_lead` event
 *   3. Client fires Meta Pixel `Lead` event with eventID for CAPI dedup
 *
 * Mirrors the architecture of EmailCapture + StripeButton + PurchaseTracker
 * so behavior is consistent with the rest of the site.
 */

import { useState } from 'react';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

type ClarityFormProps = {
  variant?: 'default' | 'inline' | 'navy';
  source?: string;
  buttonLabel?: string;
};

export function ClarityForm({
  variant = 'default',
  source = 'clarity-page',
  buttonLabel = 'Send me the Kit →',
}: ClarityFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errMsg, setErrMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setStatus('submitting');
    setErrMsg('');

    try {
      const res = await fetch('/api/clarity', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase(), source }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || 'Network error');
      }

      const data = (await res.json()) as { success?: boolean; eventId?: string };
      const eventId = data.eventId;

      // Fire GA4 generate_lead event
      try {
        window.gtag?.('event', 'generate_lead', {
          currency: 'USD',
          value: 5, // assigned lead value · standard lead-gen accounting
          lead_source: source,
        });
      } catch {}

      // Fire Meta Pixel Lead event with eventID for CAPI dedup
      // (mirrors the Purchase event pattern from PurchaseTracker.tsx)
      try {
        window.fbq?.(
          'track',
          'Lead',
          {
            content_name: 'Clarity Starter Kit',
            content_category: 'lead-magnet',
            currency: 'USD',
            value: 5,
          },
          eventId ? { eventID: eventId } : undefined,
        );
      } catch {}

      setStatus('success');
      setEmail('');
    } catch (err) {
      console.error('[clarity submit error]', err);
      setStatus('error');
      setErrMsg(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  const wrap = variant === 'navy'
    ? 'bg-navy text-cream py-20 px-6'
    : variant === 'inline'
      ? 'py-0'
      : 'py-12 px-6';

  if (status === 'success') {
    return (
      <section className={wrap}>
        <div className="max-w-xl mx-auto bg-pink-soft border border-pink/30 rounded-sm p-8 text-center">
          <p className={`eyebrow text-xs mb-3 ${variant === 'navy' ? 'eyebrow-pink' : 'text-pink'}`}>
            CHECK YOUR INBOX
          </p>
          <p className="font-serif text-3xl text-navy mb-3">
            You&apos;re <span className="italic text-pink">in</span>.
          </p>
          <p className="text-navy/70 text-sm mb-2">
            Your Clarity Starter Kit is on the way from <em>info@momumentalmoments.co</em>.
          </p>
          <p className="text-navy/60 text-xs italic">
            If you do not see it within 5 minutes, check spam or email{' '}
            <a href="mailto:info@momumentalmoments.co" className="text-pink hover:underline">
              info@momumentalmoments.co
            </a>.
          </p>
        </div>

        {/* Secondary CTA · Substack subscribe · post-conversion cross-promotion */}
        <div className="max-w-xl mx-auto mt-6 text-center">
          <p className="eyebrow text-xs text-pink mb-3">
            WHILE YOU WAIT
          </p>
          <p className="font-serif text-xl text-navy mb-3">
            Free essays drop every Tuesday at <em>MOMumental Reinvention</em>.
          </p>
          <p className="text-navy/70 text-sm mb-4">
            Long-form body-truth essays for the woman walking out of her fourth doctor&apos;s office.
          </p>
          <a
            href="https://www.momumentalreinvention.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-navy text-navy hover:bg-navy hover:text-cream transition font-mono text-xs uppercase tracking-[0.18em]"
          >
            Subscribe in one click &rarr;
          </a>
        </div>
      </section>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${variant === 'inline' ? 'max-w-lg' : 'max-w-md mx-auto'}`}>
      <label htmlFor="clarity-email" className="sr-only">Email address</label>
      <input
        id="clarity-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        disabled={status === 'submitting'}
        className={`flex-1 px-4 py-3 border rounded-sm font-sans text-sm ${
          variant === 'navy'
            ? 'bg-cream/10 border-cream/30 text-cream placeholder:text-cream/50 focus:bg-cream focus:text-navy'
            : 'bg-cream-alt border-navy/20 text-navy placeholder:text-navy/40'
        }`}
      />
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-pink disabled:opacity-50"
      >
        {status === 'submitting' ? 'Sending…' : buttonLabel}
      </button>

      {status === 'error' && (
        <p className={`text-sm mt-2 sm:mt-0 sm:absolute sm:translate-y-12 ${variant === 'navy' ? 'text-pink' : 'text-pink-deep'}`}>
          {errMsg || 'Something went wrong. Try again or email info@momumentalmoments.co.'}
        </p>
      )}
    </form>
  );
}
