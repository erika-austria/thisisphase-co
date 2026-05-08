/**
 * Product registry · maps each Stripe product to delivery + email data.
 *
 * This is the single source of truth for the post-purchase delivery system.
 * Update PDF_URL constants once PDFs are uploaded to Vercel Blob.
 *
 * Webhook identifies the product by:
 *   1. session.metadata.product (preferred · set in Stripe Payment Link metadata)
 *   2. line_items[0].amount_total fallback (works for unique-priced products)
 *   3. line_items[0].description text match (last resort)
 */

export type ProductKey =
  | "vol1"
  | "vol2"
  | "vol3"
  | "vol4"
  | "vol5"
  | "series"
  | "journal"
  | "decode";

export type Product = {
  key: ProductKey;
  name: string;
  fullTitle: string;
  pillar: "body-truth" | "architecture" | "companion";
  price: number; // dollars
  pdfUrl: string; // Vercel Blob URL · update after upload
  pdfFilename: string;
  // Cross-sell offer for Day 7 follow-up email
  crossSellKey: ProductKey | null;
  crossSellPitch: string;
};

// ────────────────────────────────────────────────────────────────────────────
// PDF URLs · UPDATE THESE after uploading to Vercel Blob
// Pattern: https://blob.vercel-storage.com/[hash]/[filename].pdf
// ────────────────────────────────────────────────────────────────────────────

const PDF_BASE = "https://thisisphase.co/pdfs"; // placeholder · move to Vercel Blob in production

export const PRODUCTS: Record<ProductKey, Product> = {
  vol1: {
    key: "vol1",
    name: "Vol. I · Perimenopause",
    fullTitle: "The PHASE™ · Vol. I · Perimenopause",
    pillar: "body-truth",
    price: 27,
    pdfUrl: `${PDF_BASE}/the-phase-vol-1-perimenopause.pdf`,
    pdfFilename: "The-PHASE-Vol-I-Perimenopause.pdf",
    crossSellKey: "vol2",
    crossSellPitch:
      "If Vol. I gave you the map, Vol. II gives you the chemistry · Hormones is the next chapter.",
  },
  vol2: {
    key: "vol2",
    name: "Vol. II · Hormones",
    fullTitle: "The PHASE™ · Vol. II · Hormones",
    pillar: "body-truth",
    price: 27,
    pdfUrl: `${PDF_BASE}/the-phase-vol-2-hormones.pdf`,
    pdfFilename: "The-PHASE-Vol-II-Hormones.pdf",
    crossSellKey: "vol3",
    crossSellPitch:
      "Now that you have the chemistry · Vol. III is the daily architecture that holds it.",
  },
  vol3: {
    key: "vol3",
    name: "Vol. III · Architecture",
    fullTitle: "The PHASE™ · Vol. III · Architecture",
    pillar: "body-truth",
    price: 27,
    pdfUrl: `${PDF_BASE}/the-phase-vol-3-architecture.pdf`,
    pdfFilename: "The-PHASE-Vol-III-Architecture.pdf",
    crossSellKey: "journal",
    crossSellPitch:
      "Daily architecture is the doing. The Reflections Journal is the space to feel what comes up underneath. $19.",
  },
  vol4: {
    key: "vol4",
    name: "Vol. IV · Self-trust",
    fullTitle: "The PHASE™ · Vol. IV · Self-trust",
    pillar: "body-truth",
    price: 27,
    pdfUrl: `${PDF_BASE}/the-phase-vol-4-self-trust.pdf`,
    pdfFilename: "The-PHASE-Vol-IV-Self-trust.pdf",
    crossSellKey: "decode",
    crossSellPitch:
      "Self-trust is the inner work. Decode Your Symptoms is the worksheet system that turns it into action. $19.",
  },
  vol5: {
    key: "vol5",
    name: "Vol. V · Execution",
    fullTitle: "The PHASE™ · Vol. V · Execution",
    pillar: "body-truth",
    price: 27,
    pdfUrl: `${PDF_BASE}/the-phase-vol-5-execution.pdf`,
    pdfFilename: "The-PHASE-Vol-V-Execution.pdf",
    crossSellKey: "journal",
    crossSellPitch:
      "Now that you are executing · the Reflections Journal is for the moments execution alone is not enough.",
  },
  series: {
    key: "series",
    name: "The PHASE™ Series",
    fullTitle: "The PHASE™ · The Series · All Five Volumes",
    pillar: "body-truth",
    price: 97,
    pdfUrl: `${PDF_BASE}/the-phase-series-bundle.zip`, // bundles all 5 vols
    pdfFilename: "The-PHASE-Series-All-Five-Volumes.zip",
    crossSellKey: "journal",
    crossSellPitch:
      "You have the full Series. The Reflections Journal + Decode Your Symptoms are the two companions that keep the work alive after you read it. $19 each.",
  },
  journal: {
    key: "journal",
    name: "The Reflections Journal",
    fullTitle: "The Reflections Journal · The Emotional Companion",
    pillar: "companion",
    price: 19,
    pdfUrl: `${PDF_BASE}/reflections-journal.pdf`,
    pdfFilename: "The-Reflections-Journal.pdf",
    crossSellKey: "vol1",
    crossSellPitch:
      "If the Journal opened the feeling, Vol. I of The PHASE™ is the body-truth map underneath it. $27.",
  },
  decode: {
    key: "decode",
    name: "Decode Your Symptoms",
    fullTitle: "Decode Your Symptoms · The Action Companion",
    pillar: "companion",
    price: 19,
    pdfUrl: `${PDF_BASE}/decode-your-symptoms.pdf`,
    pdfFilename: "Decode-Your-Symptoms.pdf",
    crossSellKey: "vol1",
    crossSellPitch:
      "If Decode gave you the worksheet · Vol. I of The PHASE™ is the full body-truth context. $27.",
  },
};

/**
 * Identify the product key from a Stripe checkout session.
 * Tries metadata first, then amount lookup, then description match.
 */
export function identifyProduct(session: {
  metadata?: Record<string, string> | null;
  amount_total?: number | null;
  line_items?: { data?: Array<{ description?: string | null }> };
}): ProductKey | null {
  // 1. Preferred · session metadata.product (set in Stripe Payment Link metadata)
  const metaKey = session.metadata?.product as ProductKey | undefined;
  if (metaKey && metaKey in PRODUCTS) return metaKey;

  // 2. Fallback · amount lookup
  const amountCents = session.amount_total ?? 0;
  if (amountCents === 9700) return "series";
  // $27 and $19 are ambiguous · need line_items description match below
  if (amountCents === 1900) {
    const desc = session.line_items?.data?.[0]?.description?.toLowerCase() ?? "";
    if (desc.includes("decode")) return "decode";
    if (desc.includes("journal") || desc.includes("reflection")) return "journal";
    return null;
  }
  if (amountCents === 2700) {
    const desc = session.line_items?.data?.[0]?.description?.toLowerCase() ?? "";
    if (desc.includes("perimenopause")) return "vol1";
    if (desc.includes("hormones")) return "vol2";
    if (desc.includes("architecture")) return "vol3";
    if (desc.includes("self-trust") || desc.includes("self trust")) return "vol4";
    if (desc.includes("execution")) return "vol5";
    return null;
  }

  return null;
}
