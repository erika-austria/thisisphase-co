/**
 * Analytics + Retargeting Configuration
 *
 * Set these env variables in Vercel project settings:
 *   NEXT_PUBLIC_GA4_ID = G-XXXXXXXXXX
 *   NEXT_PUBLIC_META_PIXEL_ID = 1234567890123456
 *   NEXT_PUBLIC_TIKTOK_PIXEL_ID = (optional)
 *
 * Tomorrow's task · drop these IDs into Vercel env, redeploy.
 */

export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID ?? '';
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? '';
export const TIKTOK_PIXEL_ID = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID ?? '';

export const HAS_GA4 = Boolean(GA4_ID);
export const HAS_META = Boolean(META_PIXEL_ID);
export const HAS_TIKTOK = Boolean(TIKTOK_PIXEL_ID);

/**
 * Track a custom event across all configured platforms.
 * Useful for Buy button clicks, scroll-depth, video plays, etc.
 */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;

  // GA4
  if (HAS_GA4 && (window as { gtag?: (...args: unknown[]) => void }).gtag) {
    (window as { gtag: (...args: unknown[]) => void }).gtag('event', name, params ?? {});
  }

  // Meta Pixel
  if (HAS_META && (window as { fbq?: (...args: unknown[]) => void }).fbq) {
    (window as { fbq: (...args: unknown[]) => void }).fbq('trackCustom', name, params ?? {});
  }

  // TikTok Pixel
  if (HAS_TIKTOK && (window as { ttq?: { track: (...args: unknown[]) => void } }).ttq) {
    (window as { ttq: { track: (...args: unknown[]) => void } }).ttq.track(name, params ?? {});
  }
}

/**
 * Track a Stripe checkout button click (lead intent signal).
 */
export function trackBuyClick(productSlug: string, price: number) {
  trackEvent('begin_checkout', {
    currency: 'USD',
    value: price,
    items: [{ item_id: productSlug, item_name: productSlug, price }],
  });
}
