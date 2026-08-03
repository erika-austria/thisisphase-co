'use client';

/**
 * StripeButton · buy button with a one-step email gate before Stripe checkout.
 *
 * Flow on click (for real Stripe payment links only):
 *   1. Open a small modal asking for the buyer's email.
 *   2. POST it to /api/newsletter (source "checkout") so it is saved to Resend
 *      even if they abandon Stripe. This is what makes future abandons recoverable.
 *   3. Fire GA4 begin_checkout + Meta InitiateCheckout, stash pending purchase.
 *   4. Redirect to the Stripe Payment Link with ?prefilled_email= so the email
 *      is already filled in on Stripe (keeps checkout friction low).
 *
 * Internal (non-Stripe) links pass straight through with tracking only.
 * Props are unchanged, so no page that uses <StripeButton> needs editing.
 */

import Link from 'next/link';
import { useState } from 'react';
import { lookupStripeProduct } from '@/lib/stripe';

type StripeButtonProps = {
  href: string;
  label: string;
  productKey?: string;
  price?: number;
  variant?: 'primary' | 'pink' | 'secondary';
  className?: string;
};

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function StripeButton({
  href,
  label,
  productKey,
  price,
  variant = 'primary',
  className = '',
}: StripeButtonProps) {
  const cls =
    variant === 'pink'
      ? 'btn-pink'
      : variant === 'secondary'
        ? 'btn-secondary'
        : 'btn-primary';

  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [busy, setBusy] = useState(false);

  const lookup = lookupStripeProduct(href);
  const item_id = productKey ?? lookup?.key ?? 'unknown';
  const value = typeof price === 'number' ? price : lookup?.price;

  // Only gate genuine Stripe checkout links. Internal links behave normally.
  const isStripe =
    href.includes('buy.stripe.com') ||
    href.includes('checkout.stripe.com') ||
    Boolean(lookup);

  function fireTracking() {
    if (typeof window === 'undefined') return;
    try {
      sessionStorage.setItem(
        'phase_pending_purchase',
        JSON.stringify({ key: item_id, value: value ?? null, ts: Date.now() }),
      );
    } catch {}
    try {
      window.gtag?.('event', 'begin_checkout', {
        currency: 'USD',
        ...(value !== undefined && { value }),
        items: [
          {
            item_id,
            item_name: item_id,
            ...(value !== undefined && { price: value }),
          },
        ],
      });
    } catch {}
    try {
      window.fbq?.('track', 'InitiateCheckout', {
        content_ids: [item_id],
        content_type: 'product',
        currency: 'USD',
        ...(value !== undefined && { value }),
      });
    } catch {}
  }

  function goToStripe(prefillEmail?: string) {
    fireTracking();
    let url = href;
    if (prefillEmail) {
      const sep = href.includes('?') ? '&' : '?';
      url = `${href}${sep}prefilled_email=${encodeURIComponent(prefillEmail)}`;
    }
    if (typeof window !== 'undefined') window.location.href = url;
  }

  function handleClick(e: React.MouseEvent) {
    if (!isStripe) {
      fireTracking();
      return; // let the internal Link navigate normally
    }
    e.preventDefault();
    setEmail('');
    setBusy(false);
    setOpen(true);
  }

  async function handleProceed(e: React.FormEvent) {
    e.preventDefault();
    const clean = email.trim();
    if (!clean || !clean.includes('@')) return;
    setBusy(true);

    // Save the lead first (with a client-side cap so a slow save never traps a buyer).
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 6000);
    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: clean, source: 'checkout', product: item_id }),
        signal: controller.signal,
      });
    } catch {
      // Never block the sale on a capture failure.
    } finally {
      clearTimeout(timer);
    }

    goToStripe(clean);
  }

  return (
    <>
      <Link
        href={href}
        className={`${cls} ${className}`}
        onClick={handleClick}
        target={isStripe ? undefined : '_blank'}
        rel="noopener noreferrer"
      >
        {label}
      </Link>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => !busy && setOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(15,23,42,0.6)',
            padding: '1rem',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#ffffff',
              borderRadius: '10px',
              maxWidth: '420px',
              width: '100%',
              padding: '2rem',
              boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
            }}
          >
            <p
              style={{
                fontSize: '0.72rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--pink, #E93C8F)',
                margin: '0 0 0.5rem',
              }}
            >
              One step to checkout
            </p>
            <h3
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: '1.5rem',
                lineHeight: 1.2,
                color: '#0F172A',
                margin: '0 0 0.5rem',
              }}
            >
              Where should we send your access and receipt?
            </h3>
            <p
              style={{
                fontSize: '0.9rem',
                lineHeight: 1.5,
                color: '#475569',
                margin: '0 0 1.25rem',
              }}
            >
              Enter your email and you will go straight to secure Stripe checkout
              with it already filled in.
            </p>
            <form onSubmit={handleProceed}>
              <label htmlFor={`phase-gate-email-${item_id}`} style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
                Email address
              </label>
              <input
                id={`phase-gate-email-${item_id}`}
                type="email"
                required
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                disabled={busy}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  border: '1px solid #cbd5e1',
                  borderRadius: '6px',
                  fontSize: '0.95rem',
                  marginBottom: '0.85rem',
                  boxSizing: 'border-box',
                }}
              />
              <button
                type="submit"
                disabled={busy}
                className="btn-pink"
                style={{ width: '100%', opacity: busy ? 0.6 : 1, cursor: busy ? 'default' : 'pointer' }}
              >
                {busy ? 'Taking you to checkout…' : 'Continue to secure checkout →'}
              </button>
            </form>
            <p
              style={{
                fontSize: '0.72rem',
                color: '#94a3b8',
                textAlign: 'center',
                margin: '0.85rem 0 0',
              }}
            >
              Secure payment by Stripe. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
