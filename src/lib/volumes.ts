/**
 * THE PHASE™ · VOLUME DATA
 * Single source of truth for all 5 volumes.
 * Powers volume cards, individual pages, JSON-LD, sitemap, and AffiliateStrip targeting.
 */

export type Component = {
  number: string;
  title: string;
  summary: string;
};

export type Stat = {
  value: string;        // big number/percentage, e.g. "70%" or "4" or "47"
  description: string;  // short body of the stat in sentence form
};

export type Volume = {
  slug: string;
  number: number;
  letter: 'P' | 'H' | 'A' | 'S' | 'E';
  numeral: 'I' | 'II' | 'III' | 'IV' | 'V';
  title: string;
  fullTitle: string;
  tagline: string;
  resetMantra: string;
  description: string;
  longDescription: string;
  /** Stat that appears under each PHASE letter on the homepage acronym + can be shown on volume pages. */
  stat: Stat;
  components: Component[];
  pullQuotes: string[];
  whoFor: string[];
  whoNotFor: string[];
  pdfPages: number;
  price: number;
  anchorPrice: number;
  stripePriceId: string;
  stripeAnchorPriceId: string;
  ogImage: string;
  coverImage: string;
  publishedAt: string;
  updatedAt: string;
  hasAffiliates: boolean;
};

export const VOLUMES: Volume[] = [
  {
    slug: 'perimenopause',
    number: 1,
    letter: 'P',
    numeral: 'I',
    title: 'Perimenopause',
    fullTitle: 'Vol. I · Perimenopause',
    tagline: 'The map you should have been handed at 38.',
    resetMantra: 'I am not in a phase. I am in The PHASE.',
    description: 'Vol. I of The PHASE™ series. The map of perimenopause for women who feel dismissed. Symptom decoder, weekly tracker, hormone primer, and the PHASE Pattern reflection. From MOMumental Moments®.',
    longDescription: 'You are not failing at stress. You are not too young. You are not making it up. You are in The PHASE. This volume is the body-truth your provider should have handed you at 38. The hormone primer, the symptom decoder, the weekly tracker, and the PHASE Pattern reflection that maps where you actually are. Built by a woman who spent four years being told it was cortisol.',
    stat: {
      value: '70%',
      description: 'of women have symptoms before menopause is even diagnosed.',
    },
    components: [
      { number: '01', title: 'The Journey', summary: 'Understanding the three stages of menopause and where you are in the arc.' },
      { number: '02', title: 'Estrogen · The Conductor', summary: 'How estrogen orchestrates everything, and what happens when it drops.' },
      { number: '03', title: 'Symptom Decoder', summary: 'Physical symptoms and the invisible cognitive + emotional ones nobody warns you about.' },
      { number: '04', title: 'Weekly Tracker', summary: 'Seven-day symptom log to bring to your next appointment.' },
      { number: '05', title: 'PHASE Pattern', summary: 'A four-quadrant reflection that names your specific pattern in 90 seconds.' },
    ],
    pullQuotes: [
      'I am not in a phase. I am in The PHASE.',
      'You are not failing. Your hormones are shifting.',
      'We map the symptoms, decode the hormones, and end the gaslighting.',
    ],
    whoFor: [
      'Women 35 to 55 noticing changes they cannot explain',
      'Women dismissed by providers who said "you are too young"',
      'High-functioning women who suspect this is more than stress',
      'Anyone who wants to walk into the next appointment with data',
    ],
    whoNotFor: [
      'Women looking for a quick-fix protocol (this is education, not prescription)',
      'Anyone seeking a replacement for medical care',
    ],
    pdfPages: 9,
    price: 27,
    anchorPrice: 47,
    stripePriceId: 'price_vol1_27',
    stripeAnchorPriceId: 'price_vol1_anchor_47',
    ogImage: '/og/vol-perimenopause.jpg',
    coverImage: '/volumes/vol-1-cover.png',
    publishedAt: '2026-05-08',
    updatedAt: '2026-05-08',
    hasAffiliates: false,
  },
  {
    slug: 'hormones',
    number: 2,
    letter: 'H',
    numeral: 'II',
    title: 'Hormones',
    fullTitle: 'Vol. II · Hormones',
    tagline: 'The conversation you should have been handed at 38, not had to fight for at 42.',
    resetMantra: 'My body is not a problem to solve. It is a partner to listen to.',
    description: 'Vol. II of The PHASE™ series. The HRT decision tree, hormone testing 101, doctor conversation script, HRT real-talk, and 12-week tracker. Built from four years of being dismissed and the nurse practitioner who finally listened. From MOMumental Moments®.',
    longDescription: 'I spent four years thinking I was failing at stress. It was always my hormones. This is the volume that took me five years and four doctors to write for myself. The hormone cast (who does what when they decline). The HRT Decision Tree (the framework I wish I had walking into the appointment). Hormone testing 101 (DUTCH, blood panels, saliva, what each one tells you). The doctor conversation script. The HRT real-talk (what it fixes, what it doesn\'t, what nobody warns you about). A 12-week tracker for after you start. Plus my actual supplement stack.',
    stat: {
      value: '4 years',
      description: 'average dismissed before perimenopause gets diagnosed.',
    },
    components: [
      { number: '01', title: 'The Hormone Cast', summary: 'Estrogen, progesterone, testosterone, thyroid, cortisol. Who does what when they shift.' },
      { number: '02', title: 'The HRT Decision Tree', summary: 'Seven-step decision framework for walking into the HRT conversation prepared.' },
      { number: '03', title: 'Hormone Testing 101', summary: 'Blood panels, DUTCH test, saliva. Which one tells you what.' },
      { number: '04', title: 'The Doctor Conversation', summary: 'Verbatim script: what to bring, what to ask, what to walk out with.' },
      { number: '05', title: 'HRT Real-Talk', summary: 'What HRT fixes, what it does not, what nobody warns you about.' },
      { number: '06', title: '12-Week Hormone Tracker', summary: 'Weekly check-ins on seven symptoms for the first 12 weeks of any new protocol.' },
    ],
    pullQuotes: [
      'I spent four years thinking I was failing at stress.',
      'My doctor said cortisol. I believed her. I ordered moisture-wicking pajamas and powered through.',
      'Your hormones are not optimized for how you\'re living and functioning. We need to support your body instead of forcing you to push through.',
      'My body is not a problem to solve. It is a partner to listen to.',
      'The hormones don\'t ask permission. Neither should you.',
      'You are not asking permission. You are asking for a partner. If the provider does not partner, find another one.',
      'Hormones are not a one-and-done event. They\'re a relationship.',
      'Test, don\'t guess. Advocate, don\'t apologize. Track, don\'t tolerate.',
    ],
    whoFor: [
      'Women considering HRT and unsure where to start',
      'Women who have been dismissed by multiple providers',
      'Women who want the actual lab list to bring to an appointment',
      'Anyone navigating the Joi + Blokes Health telehealth route or local provider search',
    ],
    whoNotFor: [
      'Women already on a protocol they trust (you can still use the tracker)',
      'Anyone seeking specific dosing recommendations (consult your provider)',
    ],
    pdfPages: 10,
    price: 27,
    anchorPrice: 47,
    stripePriceId: 'price_vol2_27',
    stripeAnchorPriceId: 'price_vol2_anchor_47',
    ogImage: '/og/vol-hormones.jpg',
    coverImage: '/volumes/vol-2-cover.png',
    publishedAt: '2026-05-08',
    updatedAt: '2026-05-08',
    hasAffiliates: true,
  },
  {
    slug: 'architecture',
    number: 3,
    letter: 'A',
    numeral: 'III',
    title: 'Architecture',
    fullTitle: 'Vol. III · Architecture',
    tagline: 'Daily architecture for overloaded women.',
    resetMantra: 'Clarity can be soft. I am moving forward.',
    description: 'Vol. III of The PHASE™ series. Five days of architecture practice: clear your head, the mental load map, toleration detox, boundaries in your voice, and choose your moment. Anchored by one daily self-care template. From MOMumental Moments®.',
    longDescription: 'You are not broken. You are overloaded. This volume rebuilds the architecture of an overstacked life into something that holds. Five days, five practices: name the overload, map the mental load, release one toleration, write a boundary script, choose the one moment that matters. Daily reflection prompts. A reusable self-care template you can keep using forever.',
    stat: {
      value: '47',
      description: 'open mental tabs. Average for women running a household at 42.',
    },
    components: [
      { number: '01', title: 'Clear Your Head · Day One', summary: 'Overload Inventory: name everything currently living in your brain.' },
      { number: '02', title: 'Mental Load Map · Day Two', summary: 'List the invisible tasks that no one acknowledges but you carry every day.' },
      { number: '03', title: 'Toleration Detox · Day Three', summary: 'Choose one quiet leak in your energy and release it today.' },
      { number: '04', title: 'Boundaries in Your Voice · Day Four', summary: 'A "say it like you" script. Clean. Kind. Clear.' },
      { number: '05', title: 'Choose Your Moment · Day Five', summary: 'Pick ONE thing that matters most this week. Write it down. Place it where you see it.' },
      { number: '06', title: 'Daily Self-Care Template', summary: 'Pause. Breathe. Recharge. One template you reuse forever.' },
    ],
    pullQuotes: [
      'Clarity can be soft. I am moving forward.',
      'You are not broken. You are overloaded.',
      'What am I constantly responsible for that no one acknowledges?',
      'Clarity does not come from doing more. It comes from choosing.',
    ],
    whoFor: [
      'Women carrying invisible mental load they cannot name',
      'Anyone whose calendar runs them instead of the other way around',
      'Mothers of school-age kids drowning in family logistics',
      'Anyone ready to release one toleration that has been costing them',
    ],
    whoNotFor: [
      'Anyone looking for productivity hacks or "more in less time" frameworks',
    ],
    pdfPages: 9,
    price: 27,
    anchorPrice: 47,
    stripePriceId: 'price_vol3_27',
    stripeAnchorPriceId: 'price_vol3_anchor_47',
    ogImage: '/og/vol-architecture.jpg',
    coverImage: '/volumes/vol-3-cover.png',
    publishedAt: '2026-05-08',
    updatedAt: '2026-05-08',
    hasAffiliates: false,
  },
  {
    slug: 'self-trust',
    number: 4,
    letter: 'S',
    numeral: 'IV',
    title: 'Self-trust',
    fullTitle: 'Vol. IV · Self-trust',
    tagline: 'Coming back to your own voice.',
    resetMantra: 'I trust my body. I trust my voice. I trust my pace.',
    description: 'Vol. IV of The PHASE™ series. Five days of self-trust practice: hear yourself, name what you want, trust your no, track the wins, anchor in identity. Anchored by a reusable daily reflection template. From MOMumental Moments®.',
    longDescription: 'Self-trust is not a vibe. It is a practice. Five days that rebuild the conversation you have with yourself. Three pauses today. Five "I want" sentences. A permission slip you sign and treat as binding. Today\'s receipts. The kind of woman you are becoming. Daily reflection. Hear. Name. Honor. Anchor.',
    stat: {
      value: '75%',
      description: 'of women feel less like themselves in perimenopause.',
    },
    components: [
      { number: '01', title: 'Hear Yourself · Day One', summary: 'Three 60-second pauses. Notice the truthful answer. Write what lands.' },
      { number: '02', title: 'Name It · Day Two', summary: 'Five "I want" sentences. Desire is data. Don\'t filter.' },
      { number: '03', title: 'Trust Your No · Day Three', summary: 'Write yourself one Permission Slip. Sign it. Treat it as binding.' },
      { number: '04', title: 'Track the Wins · Day Four', summary: 'List three small wins from today. Receipts only. The brain remembers what it isn\'t doing well unless you teach it otherwise.' },
      { number: '05', title: 'Anchor in Identity · Day Five', summary: 'Finish: "I am the kind of woman who…" Three ways. Read it tomorrow before your phone.' },
      { number: '06', title: 'Daily Reflection Template', summary: 'Hear. Name. Honor. Anchor. One template, used daily.' },
    ],
    pullQuotes: [
      'I trust my body. I trust my voice. I trust my pace.',
      'What have I been pretending not to know?',
      'Self-trust starts with the willingness to hear yourself.',
      'You can\'t trust yourself when you won\'t name what you want.',
    ],
    whoFor: [
      'Women who second-guess decisions they already know are right',
      'High-achievers who lost touch with their own desires',
      'Anyone rebuilding identity after a major life shift',
    ],
    whoNotFor: [
      'Anyone seeking external validation frameworks',
    ],
    pdfPages: 9,
    price: 27,
    anchorPrice: 47,
    stripePriceId: 'price_vol4_27',
    stripeAnchorPriceId: 'price_vol4_anchor_47',
    ogImage: '/og/vol-self-trust.jpg',
    coverImage: '/volumes/vol-4-cover.png',
    publishedAt: '2026-05-08',
    updatedAt: '2026-05-08',
    hasAffiliates: false,
  },
  {
    slug: 'execution',
    number: 5,
    letter: 'E',
    numeral: 'V',
    title: 'Execution',
    fullTitle: 'Vol. V · Execution',
    tagline: 'From thinking to doing.',
    resetMantra: 'I execute on the next right thing.',
    description: 'Vol. V of The PHASE™ series. Five days of execution practice: reset your rhythm, fuel your body, move with intention, sleep like it matters, choose the next right thing. Built for women who already know what to do and need a structure that keeps them doing it.',
    longDescription: 'You already know what to do. This volume builds the structure that keeps you doing it. Five days of grounded action: reset blood sugar and cortisol, fuel for the body you actually live in, move with intention, sleep like it matters, and choose the next right thing on repeat. The execution layer that converts knowledge into pattern.',
    stat: {
      value: '3 days',
      description: 'to reset blood sugar + cortisol. Feel the shift.',
    },
    components: [
      { number: '01', title: 'Reset Your Rhythm · Day One', summary: 'Balance blood sugar and reduce cortisol spikes. Three small things. Today only.' },
      { number: '02', title: 'Fuel Your Body · Day Two', summary: 'Protein, fiber, hydration. The non-negotiable foundations of perimenopause fueling.' },
      { number: '03', title: 'Move with Intention · Day Three', summary: 'Strength, walking, mobility. Movement that supports hormones, not punishes them.' },
      { number: '04', title: 'Sleep Like It Matters · Day Four', summary: 'The four sleep levers most women miss. Light. Temperature. Cortisol. Routine.' },
      { number: '05', title: 'Choose the Next Right Thing · Day Five', summary: 'The decision filter that turns good intentions into Tuesday afternoon action.' },
      { number: '06', title: 'Daily Execution Template', summary: 'Rhythm. Fuel. Movement. Sleep. Decision. The reusable five-line check-in.' },
    ],
    pullQuotes: [
      'I execute on the next right thing.',
      'You already know what to do. This is the structure that keeps you doing it.',
      'Execution is the love language of the woman who is becoming.',
    ],
    whoFor: [
      'Women who research everything but struggle to implement',
      'Anyone ready to convert knowledge into Tuesday-afternoon habit',
      'High-information women who need a structure, not more information',
    ],
    whoNotFor: [
      'Anyone earlier in the journey who needs the body-truth foundation first (start with Vol. I)',
    ],
    pdfPages: 9,
    price: 27,
    anchorPrice: 47,
    stripePriceId: 'price_vol5_27',
    stripeAnchorPriceId: 'price_vol5_anchor_47',
    ogImage: '/og/vol-execution.jpg',
    coverImage: '/volumes/vol-5-cover.png',
    publishedAt: '2026-05-08',
    updatedAt: '2026-05-08',
    hasAffiliates: false,
  },
];

export const SERIES = {
  slug: 'series',
  title: 'The PHASE™ Series · All Five Volumes',
  tagline: 'P + H + A + S + E. Saves $38. Most popular.',
  description: 'All five volumes of The PHASE™ series. Perimenopause, Hormones, Architecture, Self-trust, Execution. Saves $38 vs. individual volumes. From MOMumental Moments®.',
  price: 97,
  savings: 38,
  stripePriceId: 'price_series_97',
  ogImage: '/og/series.jpg',
};

export const JOURNAL = {
  slug: 'journal',
  title: 'Reflections Through the PHASEs · The Journal',
  fullTitle: 'Reflections Through the PHASEs · A Guided Menopause Journal',
  tagline: 'A space to feel it, not fix it.',
  resetMantra: 'Grief is not linear. It ebbs and flows. This journal moves at my pace.',
  description: 'Reflections Through the PHASEs · A 14-page guided journal for the emotional terrain underneath the hot flashes. Grief, identity shifts, and the part of menopause nobody warned you about. From MOMumental Moments®.',
  longDescription: 'Menopause is a transition, not a problem. This journal is a companion for the emotional terrain underneath the hot flashes and brain fog. Prompts that pause you long enough to hear yourself. Space to process grief, identity shifts, and change. Move at your own pace. Skip what does not fit. Return when you are ready. Built for the woman who needs a place to feel it before she fixes it.',
  price: 17,
  stripePriceId: 'price_journal_19',
  pdfPages: 14,
  ogImage: '/og/journal.jpg',
};

export const DECODE = {
  slug: 'decode',
  title: 'Decode Your Symptoms',
  fullTitle: 'Decode Your Symptoms · A Science-Backed Reset',
  tagline: 'Self-care is not soft. It is strategy.',
  resetMantra: 'My body is not broken. It is asking for different inputs.',
  description: 'Decode Your Symptoms · An 11-page science-backed companion workbook to understand what your body is saying, build a self-care plan that fits your life, and navigate menopause with science behind you. From MOMumental Moments®.',
  longDescription: 'Menopause changes everything. The food that used to fuel you. The sleep that used to restore you. The pace that used to feel doable. Your body is not broken. It is asking for different inputs. This workbook is your action companion: nine chapters, real exercises, track-what-shifts framing. Adjust what does not work. Build a routine that fits the woman you are becoming.',
  price: 17,
  stripePriceId: 'price_decode_19',
  pdfPages: 11,
  ogImage: '/og/decode.jpg',
};

export const CLARITY_KIT = {
  slug: 'clarity',
  title: 'The Clarity Starter Kit',
  fullTitle: 'The Clarity Starter Kit · A Free Reset for the Burned-Out Builder',
  tagline: 'You are not broken. You are burned out.',
  description: 'A 7-page free reset for the burned-out builder. 12 minutes. A gentle moment of clarity for moms who are doing it all and ready to come back to themselves. From MOMumental Moments®.',
  pdfPages: 7,
  isFree: true,
};

// Helpers
export function getVolume(slug: string): Volume | undefined {
  return VOLUMES.find((v) => v.slug === slug);
}

export function getRelatedVolumes(slug: string, limit = 2): Volume[] {
  return VOLUMES.filter((v) => v.slug !== slug).slice(0, limit);
}
