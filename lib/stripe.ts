/**
 * STRIPE CHECKOUT INTEGRATION
 * Direct Stripe Checkout links via Payment Links (no server needed for v1).
 *
 * 🚨 CRITICAL FIX · May 19 PM 2026 · URLs were shifted by 2 positions vs actual Stripe products
 * (Stripe URLs map to creation order · Decode + Journal created May 7 BEFORE Vols).
 * Verified by Erika in Stripe Dashboard. URL _eEo01 charges Decode $19. _eEo02 charges Journal $19.
 * Every BUY button on the site was routing customers to the wrong product before this fix.
 * Audit prior purchases via Stripe dashboard · contact mis-charged customers + refund/redeliver.
 */

export const STRIPE_LINKS = {
  // _eEo03 · charges Vol I Perimenopause $27 (created May 7 5:58 PM)
  vol1: 'https://buy.stripe.com/eVqeVd8dE2BAb6rfhLeEo03',
  // _eEo04 · charges Vol II Hormones $27 (created May 7 6:00 PM)
  vol2: 'https://buy.stripe.com/8x27sL3Xo7VUgqLb1veEo04',
  // _eEo05 · charges Vol III Architecture $27 (created May 7 6:01 PM)
  vol3: 'https://buy.stripe.com/dRmdR965wdge8Yj3z3eEo05',
  // _eEo06 · charges Vol IV Self-trust $27 (created May 7 6:02 PM)
  vol4: 'https://buy.stripe.com/cNibJ1fG6fom6Qb4D7eEo06',
  // _eEo07 · charges Vol V Execution $27 (created May 7 6:03 PM)
  vol5: 'https://buy.stripe.com/8x2dR91Pg8ZYb6r7PjeEo07',
  // _eEo08 · charges The Series · All Five Volumes $97 (created May 7 6:04 PM)
  series: 'https://buy.stripe.com/28EeVd51sfom8YjedHeEo08',
  // _eEo02 · charges Reflections Journal $19 (created May 7 5:51 PM)
  journal: 'https://buy.stripe.com/3cI4gz1Pgb866Qb9XreEo02',
  // _eEo01 · charges Decode Your Symptoms $19 standalone (created May 7 5:50 PM)
  decode: 'https://buy.stripe.com/6oU7sL0Lc3FE3DZd9DeEo01',
  // _eEo0b · charges Complete the PHASE™ Series UPGRADE $70 (created Thu May 21 PM 2026)
  // For EXISTING customers ONLY · use in post-purchase /thanks + Day 14+ cross-sell emails.
  // NEVER link from public site cold traffic · public Series URL is _eEo08 ($97 direct).
  // Pricing logic: Vol $27 already paid + $70 upgrade = $97 same as Series direct · no double-charge.
  seriesUpgrade: 'https://buy.stripe.com/6oU4gzdxY3FE0rN5HbeEo0b',
} as const;

/**
 * Product metadata lookup keyed by Stripe Payment Link URL.
 * Used by StripeButton to attach item_id + price to GA4 + Meta conversion events.
 * Prices match actual Stripe Payment Link charged amounts (verified May 19 PM 2026).
 */
export const STRIPE_LINK_PRODUCTS: Record<string, { key: string; price: number }> = {
  [STRIPE_LINKS.vol1]: { key: 'vol1', price: 27 },
  [STRIPE_LINKS.vol2]: { key: 'vol2', price: 27 },
  [STRIPE_LINKS.vol3]: { key: 'vol3', price: 27 },
  [STRIPE_LINKS.vol4]: { key: 'vol4', price: 27 },
  [STRIPE_LINKS.vol5]: { key: 'vol5', price: 27 },
  [STRIPE_LINKS.series]: { key: 'series', price: 97 },
  [STRIPE_LINKS.journal]: { key: 'journal', price: 19 },
  [STRIPE_LINKS.decode]: { key: 'decode', price: 19 },
  // Series UPGRADE · same key as series for fulfillment, $70 charged price for existing customer upgrade
  [STRIPE_LINKS.seriesUpgrade]: { key: 'series', price: 70 },
};

/**
 * Look up product metadata for a Stripe Payment Link href.
 * Returns null for non-Stripe hrefs (e.g. internal /community links).
 */
export function lookupStripeProduct(href: string): { key: string; price: number } | null {
  return STRIPE_LINK_PRODUCTS[href] ?? null;
}

/**
 * Get the Stripe checkout link for a volume.
 * @param slug · the volume slug (perimenopause, hormones, architecture, self-trust, execution)
 * @param tier · 'entry' returns the individual $27 volume link · 'anchor' returns the $97 Series upsell link
 */
export function getStripeLinkForVolume(
  slug: string,
  tier: 'entry' | 'anchor' = 'entry'
): string {
  if (tier === 'anchor') return STRIPE_LINKS.series;
  const key = `vol${slug === 'perimenopause' ? '1' : slug === 'hormones' ? '2' : slug === 'architecture' ? '3' : slug === 'self-trust' ? '4' : '5'}` as keyof typeof STRIPE_LINKS;
  return STRIPE_LINKS[key] ?? '#';
}

// Affiliate links (kept here for centralized maintenance)
export const AFFILIATE_LINKS = {
  joiAndBlokes: 'https://joiandblokes.com/?rid=003UI00000gvOFcYAM',
  amazonStorefront: 'https://www.amazon.com/shop/erikahanafin',
  amazonHormoneStack: 'https://www.amazon.com/shop/erikahanafin/list/2CW7UN8D55AN3?ref_=aip_sf_list_spv_ofs_mixed_d',
};
