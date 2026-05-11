'use client';

/**
 * StripeButton · client component that fires conversion-tracking events
 * before navigating to Stripe checkout.
 *
 * Fires:
 *   - GA4 `begin_checkout` event (item_id, item_name, value, currency)
 *   - Meta Pixel `InitiateCheckout` event (content_ids, value, currency)
 */

import Link from 'next/link';
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
  const cls = variant === 'pink' ? 'btn-pink' : variant === 'secondary' ? 'btn-secondary' : 'btn-primary';

  function handleClick() {
    if (typeof window === 'undefined') return;

    const lookup = lookupStripeProduct(href);
    const item_id = productKey ?? lookup?.key ?? 'unknown';
    const value = typeof price === 'number' ? price : lookup?.price;

    try {
      window.gtag?.('event', 'begin_checkout', {
        currency: 'USD',
        ...(value !== undefined && { value }),
        items: [{ item_id, item_name: item_id, ...(value !== undefined && { price: value }) }],
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

  return (
    <Link
      href={href}
      className={`${cls} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      {label}
    </Link>
  );
}
