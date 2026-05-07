/**
 * STRIPE CHECKOUT INTEGRATION
 * Direct Stripe Checkout links via Payment Links (no server needed for v1).
 * Replace placeholder URLs once products are created in Stripe dashboard.
 */

const STRIPE_BASE = 'https://buy.stripe.com';

export const STRIPE_LINKS = {
  vol1: 'https://buy.stripe.com/REPLACE_WITH_VOL1_LINK',
  vol1_anchor: 'https://buy.stripe.com/REPLACE_WITH_VOL1_ANCHOR_LINK',
  vol2: 'https://buy.stripe.com/REPLACE_WITH_VOL2_LINK',
  vol2_anchor: 'https://buy.stripe.com/REPLACE_WITH_VOL2_ANCHOR_LINK',
  vol3: 'https://buy.stripe.com/REPLACE_WITH_VOL3_LINK',
  vol3_anchor: 'https://buy.stripe.com/REPLACE_WITH_VOL3_ANCHOR_LINK',
  vol4: 'https://buy.stripe.com/REPLACE_WITH_VOL4_LINK',
  vol4_anchor: 'https://buy.stripe.com/REPLACE_WITH_VOL4_ANCHOR_LINK',
  vol5: 'https://buy.stripe.com/REPLACE_WITH_VOL5_LINK',
  vol5_anchor: 'https://buy.stripe.com/REPLACE_WITH_VOL5_ANCHOR_LINK',
  series: 'https://buy.stripe.com/REPLACE_WITH_SERIES_LINK',
  lifetime: 'https://buy.stripe.com/REPLACE_WITH_LIFETIME_LINK',
} as const;

export function getStripeLinkForVolume(slug: string, tier: 'entry' | 'anchor' = 'entry'): string {
  const key = `vol${slug === 'perimenopause' ? '1' : slug === 'hormones' ? '2' : slug === 'architecture' ? '3' : slug === 'self-trust' ? '4' : '5'}${tier === 'anchor' ? '_anchor' : ''}` as keyof typeof STRIPE_LINKS;
  return STRIPE_LINKS[key] ?? '#';
}

// Affiliate links (kept here for centralized maintenance)
export const AFFILIATE_LINKS = {
  joiAndBlokes: 'https://joiandblokes.com/?rid=003UI00000gvOFcYAM',
  amazonStorefront: 'https://www.amazon.com/shop/erikahanafin',
  amazonHormoneStack: 'https://www.amazon.com/shop/erikahanafin/list/2CW7UN8D55AN3?ref_=aip_sf_list_spv_ofs_mixed_d',
};
