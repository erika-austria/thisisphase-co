·/**
 * STRIPE CHECKOUT INTEGRATION
 * Direct Stripe Checkout links via Payment Links (no server needed for v1).
 * Replace placeholder URLs once products are created in Stripe dashboard.
 */

const STRIPE_BASE = 'https://buy.stripe.com';

export const STRIPE_LINKS = {
  vol1: 'https://buy.stripe.com/6oU7sL0Lc3FE3DZd9DeEo01',
  vol2: 'https://buy.stripe.com/3cI4gz1Pgb866Qb9XreEo02',
  vol3: 'https://buy.stripe.com/eVqeVd8dE2BAb6rfhLeEo03',
  vol4: 'https://buy.stripe.com/8x27sL3Xo7VUgqLb1veEo04',
  vol5: 'https://buy.stripe.com/dRmdR965wdge8Yj3z3eEo05',
  series: 'https://buy.stripe.com/cNibJ1fG6fom6Qb4D7eEo06',
  journal: 'https://buy.stripe.com/8x2dR91Pg8ZYb6r7PjeEo07',
  decode: 'https://buy.stripe.com/28EeVd51sfom8YjedHeEo08',
} as const;

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
