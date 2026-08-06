'use client';

/**
 * ReportForm · email capture for State of Reinvention 2026.
 *
 * On successful submit:
 *   1. Server (/api/report) sends the Day 0 delivery email and schedules the Day 3 nudge
 *   2. Client reveals the download immediately, so the reader never waits on an inbox
 *   3. Client fires GA4 `generate_lead` and Meta Pixel `Lead` (eventID from the server, for CAPI dedup)
 *
 * Mirrors ClarityForm so behavior stays consistent across the two lead funnels.
 */

import { useState } from 'react';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

const FALLBACK_PDF = '/report/state-of-reinvention-2026.pdf';

type ReportFormProps = {
  variant?: 'cream' | 'navy';
  source?: string;
  buttonLabel?: string;
};

export function ReportForm({
  variant = 'cream',
  source = 'report-page',
  buttonLabel = 'Send me the report →',
}: ReportFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errMsg, setErrMsg] = useState('');
  const [downloadUrl, setDownloadUrl] = useState(FALLBACK_PDF);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setStatus('submitting');
    setErrMsg('');

    try {
      const res = await fetch('/api/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase(), source }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || 'Network error');
      }

      const data = (await res.json()) as { eventId?: string; downloadUrl?: string };
      if (data.downloadUrl) setDownloadUrl(data.downloadUrl);

      try {
        window.gtag?.('event', 'generate_lead', {
          currency: 'USD',
          value: 5,
          lead_source: source,
        });
      } catch {}

      try {
        window.fbq?.(
          'track',
          'Lead',
          {
            content_name: 'State of Reinvention 2026',
            content_category: 'lead-magnet',
            currency: 'USD',
            value: 5,
          },
          data.eventId ? { eventID: data.eventId } : undefined,
        );
      } catch {}

      setStatus('success');
      setEmail('');
    } catch (err) {
      console.error('[report submit error]', err);
      setStatus('error');
      setErrMsg(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  if (status === 'success') {
    return (
      <div className={`rep-done ${variant === 'navy' ? 'on-navy' : ''}`}>
        <p className="rep-done-eyebrow">The report is yours</p>
        <p className="rep-done-head">
          Download it <em>now</em>.
        </p>
        <div className="rep-done-cta">
          <a
            className="pbtn pbtn-pink"
            href={downloadUrl}
            download="State-of-Reinvention-2026.pdf"
          >
            Download the PDF <span className="ar">→</span>
          </a>
        </div>
        <p className="rep-done-note">
          A copy is on its way to your inbox from <em>info@momumentalmoments.co</em>, so you can find
          it again later.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`rep-form ${variant === 'navy' ? 'on-navy' : ''}`}>
      <label htmlFor={`report-email-${source}`} className="sr-only">
        Email address
      </label>
      <input
        id={`report-email-${source}`}
        name="email"
        type="email"
        required
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        disabled={status === 'submitting'}
      />
      <button type="submit" className="pbtn pbtn-pink" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : buttonLabel}
      </button>
      {status === 'error' && (
        <p className="rep-form-err" role="alert">
          {errMsg || 'Something went wrong. Try again or email info@momumentalmoments.co.'}
        </p>
      )}
    </form>
  );
}
