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
  // ─── Body-Truth · The PHASE™ universe (existing) ───
  | "vol1"
  | "vol2"
  | "vol3"
  | "vol4"
  | "vol5"
  | "series"
  | "journal"
  | "decode"
  // ─── Family pillar (added Fri May 29 2026) ───
  | "mentalloaddetox"
  | "coparentingpowermethod"
  // ─── Operator pillar · Business + Finance (added Fri May 29 2026) ───
  | "thegoaltracker"
  | "visitiontoaction"
  | "thefinanceplanner"
  | "theproductivitytoolkit"
  | "stressfreefinances"
  | "ultimateguidetobalanceandgrowth"
  | "musthaveframeworks";

export type Product = {
  key: ProductKey;
  name: string;
  fullTitle: string;
  pillar: "body-truth" | "architecture" | "companion" | "family" | "operator";
  price: number; // dollars
  pdfUrl: string; // Vercel Blob URL · update after upload
  pdfFilename: string;
  // Stripe Payment Link URL · used in cross-sell emails. Optional · existing PHASE™
  // products fall back to thisisphase.co landing pages if not set.
  purchaseUrl?: string;
  // Cross-sell offer for Day 7 follow-up email
  crossSellKey: ProductKey | null;
  crossSellPitch: string;
};

// ────────────────────────────────────────────────────────────────────────────
// PDF URLs · Vercel Blob (public) · store thisisphase-co-blob · IAD1 region
// Updated Friday May 8 · all 8 PDFs uploaded · canonical URLs locked
// ────────────────────────────────────────────────────────────────────────────

const PDF_BASE = "https://dpo02ztmhn6nty5u.public.blob.vercel-storage.com";

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
    pdfUrl: `${PDF_BASE}/the-phase-series-all-five.zip`,
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
    price: 17,
    pdfUrl: `${PDF_BASE}/decode-your-symptoms.pdf`,
    pdfFilename: "Decode-Your-Symptoms.pdf",
    crossSellKey: "vol1",
    crossSellPitch:
      "If Decode gave you the worksheet · Vol. I of The PHASE™ is the full body-truth context. $27.",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // FAMILY PILLAR · added Fri May 29 2026
  // ──────────────────────────────────────────────────────────────────────────

  mentalloaddetox: {
    key: "mentalloaddetox",
    name: "The Mental Load Detox",
    fullTitle: "The Mental Load Detox · The Invisible Load Checklist",
    pillar: "family",
    price: 17,
    pdfUrl: `${PDF_BASE}/mental-load-detox.pdf`,
    pdfFilename: "The-Mental-Load-Detox.pdf",
    purchaseUrl: "https://buy.stripe.com/8x2fZh1Pg6RQcav9XreEo0e",
    crossSellKey: "coparentingpowermethod",
    crossSellPitch:
      "You named the invisible load. The Co-Parenting Power Method® is the architecture for the conversation that has to happen next. The framework for protecting your kids and yourself through everything that follows. $97.",
  },

  coparentingpowermethod: {
    key: "coparentingpowermethod",
    name: "The Co-Parenting Power Method®",
    fullTitle: "The Co-Parenting Power Method® · The Family Reinvention Framework",
    pillar: "family",
    price: 97,
    // NOTE: Co-Parenting Power Method® PDF location TBD · update once uploaded to Vercel Blob
    pdfUrl: `${PDF_BASE}/coparenting-power-method.pdf`,
    pdfFilename: "The-Co-Parenting-Power-Method.pdf",
    purchaseUrl: "https://buy.stripe.com/00w28r8dEa423DZedHeEo00",
    crossSellKey: "mentalloaddetox",
    crossSellPitch:
      "Now the daily redistribution. The Mental Load Detox is the worksheet for moving three things off your plate this week, every week. $17.",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // OPERATOR PILLAR · Business + Finance · added Fri May 29 2026
  // ──────────────────────────────────────────────────────────────────────────

  thegoaltracker: {
    key: "thegoaltracker",
    name: "The Goal Tracker",
    fullTitle: "The Goal Tracker · Three Goals That Actually Get Done",
    pillar: "operator",
    price: 17,
    pdfUrl: `${PDF_BASE}/the-goal-tracker.pdf`,
    pdfFilename: "The-Goal-Tracker.pdf",
    purchaseUrl: "https://buy.stripe.com/eVq9AT1Pg2BA6Qb5HbeEo0f",
    crossSellKey: "visitiontoaction",
    crossSellPitch:
      "You picked three. Now zoom out. Vision-to-Action is the ladder from why to vision to goals to the one thing you do on Monday. The map your three goals plug into. $17.",
  },

  visitiontoaction: {
    key: "visitiontoaction",
    name: "Vision-to-Action Planning Guide",
    fullTitle: "Vision-to-Action Planning Guide · From Chaos to Clarity",
    pillar: "operator",
    price: 17,
    pdfUrl: `${PDF_BASE}/vision-to-action-planning-guide.pdf`,
    pdfFilename: "Vision-to-Action-Planning-Guide.pdf",
    purchaseUrl: "https://buy.stripe.com/14A3cvgKaccab6r2uZeEo0g",
    crossSellKey: "musthaveframeworks",
    crossSellPitch:
      "You have the plan. Now make it profitable. The Must-Have Frameworks for Profitability is seven proven systems to maximize profit without working longer hours. Busy is not the same as building. $17.",
  },

  thefinanceplanner: {
    key: "thefinanceplanner",
    name: "The Finance Planner",
    fullTitle: "The Finance Planner · The Year At A Glance",
    pillar: "operator",
    price: 17,
    pdfUrl: `${PDF_BASE}/the-finance-planner.pdf`,
    pdfFilename: "The-Finance-Planner.pdf",
    purchaseUrl: "https://buy.stripe.com/dRmdR9bpQfom0rNglPeEo0h",
    crossSellKey: "stressfreefinances",
    crossSellPitch:
      "You have the system. Now rewrite the story underneath it. The Smart Woman's Guide to Stress-Free Finances is the mindset work that makes the planner stick. $17.",
  },

  theproductivitytoolkit: {
    key: "theproductivitytoolkit",
    name: "The Productivity Toolkit",
    fullTitle: "The Productivity Toolkit · For the Parent-Operator",
    pillar: "operator",
    price: 17,
    pdfUrl: `${PDF_BASE}/the-productivity-toolkit.pdf`,
    pdfFilename: "The-Productivity-Toolkit.pdf",
    purchaseUrl: "https://buy.stripe.com/dRm7sL65w4JI5M7d9DeEo0i",
    crossSellKey: "ultimateguidetobalanceandgrowth",
    crossSellPitch:
      "You have the focus. Now scale the work without losing the moments. The Ultimate Guide to Balance & Growth is five strategies for the woman growing two lives at once. $17.",
  },

  stressfreefinances: {
    key: "stressfreefinances",
    name: "The Smart Woman's Guide to Stress-Free Finances",
    fullTitle: "The Smart Woman's Guide to Stress-Free Finances · Five Simple Money Moves",
    pillar: "operator",
    price: 17,
    pdfUrl: `${PDF_BASE}/stress-free-finances.pdf`,
    pdfFilename: "Stress-Free-Finances.pdf",
    purchaseUrl: "https://buy.stripe.com/eVq8wP2Tk8ZY7Uf4D7eEo0j",
    crossSellKey: "thefinanceplanner",
    crossSellPitch:
      "You rewrote the money story. Now use the planner to live it. The Finance Planner is the dashboard that tracks the year, sees the months, and turns avoidance into clarity. $17.",
  },

  ultimateguidetobalanceandgrowth: {
    key: "ultimateguidetobalanceandgrowth",
    name: "The Ultimate Guide to Balance & Growth",
    fullTitle: "The Ultimate Guide to Balance & Growth · Scale With Purpose and Heart",
    pillar: "operator",
    price: 17,
    pdfUrl: `${PDF_BASE}/balance-and-growth.pdf`,
    pdfFilename: "The-Ultimate-Guide-to-Balance-and-Growth.pdf",
    purchaseUrl: "https://buy.stripe.com/14AdR9fG67VU6Qb7PjeEo0k",
    crossSellKey: "musthaveframeworks",
    crossSellPitch:
      "You have the balance. Now turn the work into profit. The Must-Have Frameworks for Profitability is seven proven systems for the operator who wants the business to pay her back. $17.",
  },

  musthaveframeworks: {
    key: "musthaveframeworks",
    name: "The Must-Have Frameworks for Profitability",
    fullTitle: "The Must-Have Frameworks for Profitability · Seven Frameworks",
    pillar: "operator",
    price: 17,
    pdfUrl: `${PDF_BASE}/frameworks-for-profitability.pdf`,
    pdfFilename: "Frameworks-for-Profitability.pdf",
    purchaseUrl: "https://buy.stripe.com/8x24gz2Tk6RQgqL7PjeEo0l",
    crossSellKey: "thefinanceplanner",
    crossSellPitch:
      "You have the seven frameworks. Now plug the profit into a planner that actually tracks it. The Finance Planner closes the loop · income, expenses, profit, goals. $17.",
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
  if (amountCents === 9700) {
    // $97 ambiguous · could be PHASE™ Series or Co-Parenting Power Method®
    const desc = session.line_items?.data?.[0]?.description?.toLowerCase() ?? "";
    if (desc.includes("co-parenting") || desc.includes("coparenting") || desc.includes("power method"))
      return "coparentingpowermethod";
    return "series";
  }
  if (amountCents === 7500) return "series"; // Kit Graduate special pricing on Series
  // $17 is now used by 8 products · need line_items description match
  if (amountCents === 1700) {
    const desc = session.line_items?.data?.[0]?.description?.toLowerCase() ?? "";
    if (desc.includes("decode")) return "decode";
    if (desc.includes("mental load") || desc.includes("invisible load"))
      return "mentalloaddetox";
    if (desc.includes("goal tracker")) return "thegoaltracker";
    if (desc.includes("vision-to-action") || desc.includes("vision to action"))
      return "visitiontoaction";
    if (desc.includes("finance planner")) return "thefinanceplanner";
    if (desc.includes("productivity toolkit")) return "theproductivitytoolkit";
    if (desc.includes("stress-free") || desc.includes("stress free"))
      return "stressfreefinances";
    if (desc.includes("balance") && desc.includes("growth"))
      return "ultimateguidetobalanceandgrowth";
    if (desc.includes("frameworks") || desc.includes("profitability"))
      return "musthaveframeworks";
    return null;
  }
  // $19 ambiguous · journal or decode (legacy pricing)
  if (amountCents === 1900) {
    const desc = session.line_items?.data?.[0]?.description?.toLowerCase() ?? "";
    if (desc.includes("decode")) return "decode";
    if (desc.includes("journal") || desc.includes("reflection")) return "journal";
    return null;
  }
  // $27 ambiguous · PHASE™ Vols I-V or Reflections Journal
  if (amountCents === 2700) {
    const desc = session.line_items?.data?.[0]?.description?.toLowerCase() ?? "";
    if (desc.includes("perimenopause")) return "vol1";
    if (desc.includes("hormones")) return "vol2";
    if (desc.includes("architecture")) return "vol3";
    if (desc.includes("self-trust") || desc.includes("self trust")) return "vol4";
    if (desc.includes("execution")) return "vol5";
    if (desc.includes("journal") || desc.includes("reflection")) return "journal";
    return null;
  }

  return null;
}
