'use client';

/**
 * PurchaseTracker · client component that fires GA4 + Meta Pixel Purchase events
 * once when the /thanks page loads after a successful Stripe checkout.
 *
 * Reads the session_id query param (set by Stripe Payment Link redirect:
 *   https://thisisphase.co/thanks?session_id={CHECKOUT_SESSION_ID}).
 *
 * Deduplicates via sessionStorage so a page refresh doesn't double-fire.
 * eventID matches the Stripe session_id so Meta dedupes against the server-side
 * CAPI event fired from the Stripe webhook (higher-trust signal wins).
 */

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function PurchaseTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const sessionId = searchParams.get('session_id');
    const dedupeKey = `phase_purchase_${sessionId ?? 'no-session'}`;

    try {
      if (sessionStorage.getItem(dedupeKey)) return;
      sessionStorage.setItem(dedupeKey, '1');
    } catch {}

    const eventId = sessionId || `thx_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;

    // Read the pending-purchase context StripeButton stashed before redirect.
    // Window: 60 minutes (covers slow checkouts, expires stale data).
    let pendingValue: number | null = null;
    let pendingKey: string | null = null;
    try {
      const raw = sessionStorage.getItem('phase_pending_purchase');
      if (raw) {
        const parsed = JSON.parse(raw) as { key?: string; value?: number | null; ts?: number };
        const ageMs = parsed.ts ? Date.now() - parsed.ts : Infinity;
        if (ageMs < 60 * 60 * 1000) {
          pendingValue = typeof parsed.value === 'number' ? parsed.value : null;
          pendingKey = typeof parsed.key === 'string' ? parsed.key : null;
        }
        sessionStorage.removeItem('phase_pending_purchase');
      }
    } catch {}

    try {
      window.gtag?.('event', 'purchase', {
        transaction_id: eventId,
        currency: 'USD',
        ...(pendingValue !== null && { value: pendingValue }),
        ...(pendingKey && {
          items: [{ item_id: pendingKey, item_name: pendingKey, ...(pendingValue !== null && { price: pendingValue }) }],
        }),
      });
    } catch {}

    try {
      window.fbq?.(
        'track',
        'Purchase',
        {
          currency: 'USD',
          content_type: 'product',
          ...(pendingValue !== null && { value: pendingValue }),
          ...(pendingKey && { content_ids: [pendingKey] }),
        },
        { eventID: eventId },
      );
    } catch {}
  }, [searchParams]);

  return null;
}
