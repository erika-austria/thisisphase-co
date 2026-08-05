'use client';

import { useState } from 'react';

export function EmailCapture({ variant = 'default' }: { variant?: 'default' | 'inline' }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('submitting');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (!res.ok) throw new Error('Network error');
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-pink-soft border border-pink/30 rounded-sm p-6 text-center">
        <p className="font-serif text-2xl text-pink-deep mb-2">You&apos;re in.</p>
        <p className="text-navy/70 text-sm">Check your inbox for the welcome note.</p>
      </div>
    );
  }

  return (
    <section className={variant === 'default' ? 'bg-navy text-cream py-20 px-6' : 'py-12 px-6'}>
      <div className="max-w-2xl mx-auto text-center">
        <p className={`eyebrow text-xs mb-3 ${variant === 'default' ? 'eyebrow-pink' : 'text-pink'}`}>
          THE FOUNDING COHORT
        </p>
        <h2 className="font-serif text-3xl md:text-5xl mb-4">
          Join the women rebuilding everything that matters.
        </h2>
        <p className={`text-base md:text-lg mb-8 max-w-xl mx-auto ${variant === 'default' ? 'text-cream/80' : 'text-navy/70'}`}>
          Weekly notes from the front lines of perimenopause, hormones, and reinvention. No fluff. No funnels. Just the body-truth.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <label htmlFor="email" className="sr-only">Email address</label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            disabled={status === 'submitting'}
            className={`flex-1 px-4 py-3 border rounded-sm font-sans text-sm ${
              variant === 'default'
                ? 'bg-cream/10 border-cream/30 text-cream placeholder:text-cream/50 focus:bg-cream focus:text-navy'
                : 'bg-cream-alt border-navy/20 text-navy placeholder:text-navy/40'
            }`}
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="btn-pink disabled:opacity-50"
          >
            {status === 'submitting' ? 'Joining…' : 'Join →'}
          </button>
        </form>

        {status === 'error' && (
          <p className="text-pink text-sm mt-4">Something went wrong. Try again or email erika@erikahanafin.com.</p>
        )}
      </div>
    </section>
  );
}
