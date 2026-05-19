'use client';

/**
 * ProductViewTracker · client component that fires Meta Pixel ViewContent +
 * GA4 view_item events when a product page mounts.
 *
 * Drop into any product page (/series, /decode, /vol/[slug], /journal):
 *
 *   <ProductViewTracker contentId="series" value={97} contentName="The PHASE Series" />
 *
 * Why this matters for Meta Ads:
 *   · Builds the "viewed product X" retargeting audience pool
 *   · Lets ad campaigns optimize for ViewContent → InitiateCheckout → Purchase
 *   · Critical signal that you have buying-intent visitors, not just PageView traffic
 *
 * Mirrors the dedupe pattern of PurchaseTracker.tsx · uses sessionStorage to
 * prevent double-fire if user navigates back to the same page in the same tab.
 */

import { useEffect } from 'react';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

type ProductViewTrackerProps = {
  contentId: string; // e.g., 'series', 'decode', 'vol1'
  contentName: string; // e.g., 'The PHASE Series'
  value?: number; // e.g., 97 (in dollars)
  currency?: string; // defaults to 'USD'
};

export function ProductViewTracker({
  contentId,
  contentName,
  value,
  currency = 'USD',
}: ProductViewTrackerProps) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Dedupe per-tab so back-button doesn't double-fire
    const dedupeKey = `phase_view_${contentId}`;
    try {
      if (sessionStorage.getItem(dedupeKey)) return;
      sessionStorage.setItem(dedupeKey, '1');
    } catch {}

    // Fire Meta Pixel ViewContent · builds retargeting audience pool
    try {
      window.fbq?.('track', 'ViewContent', {
        content_ids: [contentId],
        content_name: contentName,
        content_type: 'product',
        currency,
        ...(typeof value === 'number' && { value }),
      });
    } catch {}

    // Fire GA4 view_item · parity with Meta event
    try {
      window.gtag?.('event', 'view_item', {
        currency,
        ...(typeof value === 'number' && { value }),
        items: [
          {
            item_id: contentId,
            item_name: contentName,
            ...(typeof value === 'number' && { price: value }),
          },
        ],
      });
    } catch {}
  }, [contentId, contentName, value, currency]);

  return null;
}
