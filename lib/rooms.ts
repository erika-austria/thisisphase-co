/**
 * THE FOUR ROOMS · /body, /family, /voice, /work
 *
 * The home page sells the house. These four pages sell the room a woman is
 * actually standing in. Single source of truth for the room landing pages,
 * their nav entries, sitemap rows, and JSON-LD.
 *
 * Product facts are pulled from the registries that already exist rather than
 * restated here: VOLUMES for the Body and Voice tools, PRODUCTS for the Family
 * and Work tools. The only prices written by hand are flagged below.
 *
 * Every stat quoted on a room page is cited in State of Reinvention 2026
 * (see /report and page 15 of the report for the numbered sources).
 */

import { PRODUCTS } from './products';
import { SERIES, VOLUMES } from './volumes';

export const LIBRARY_URL = 'https://www.momumentalreinvention.com/p/the-library';

/**
 * The Co-Parenting Power Method® is $97. Confirmed by Erika, Aug 5 2026, which
 * settles a conflict where the home page, llms.txt, and the brand canon all
 * showed $47 while src/lib/products.ts and the live Stripe link charged $97.
 * The home page and llms.txt were corrected in the same commit. Every surface
 * that shows this price reads it from here.
 */
const COPARENTING_DISPLAY_PRICE = 97;

export type RoomTool = {
  name: string;
  note: string;
  price: number;
  href: string;
  /** true when href is a raw Stripe Payment Link · renders through StripeButton's email gate */
  stripe?: boolean;
  productKey?: string;
};

export type RoomFaq = { question: string; answer: string };

export type Room = {
  slug: 'body' | 'family' | 'voice' | 'work';
  numeral: 'I' | 'II' | 'III' | 'IV';
  name: string;
  /** h1 · the word after the break renders in pink italic */
  headline: [string, string];
  tagline: string;
  /** the italic pull line from the home page card */
  moment: string;
  /** the letter tile that stands in for room photography */
  letter: 'B' | 'F' | 'V' | 'W';
  tint: 'pink' | 'navy';
  intro: string[];
  /** cited figures from State of Reinvention 2026 */
  evidence: Array<{ n: string; line: string }>;
  toolsIntro: string;
  tools: RoomTool[];
  inside: Array<{ n: string; title: string; line: string }>;
  whoFor: string[];
  whoNot: string[];
  faqs: RoomFaq[];
  metaTitle: string;
  metaDescription: string;
};

const VOL = (slug: string) => {
  const v = VOLUMES.find((x) => x.slug === slug);
  if (!v) throw new Error(`unknown volume: ${slug}`);
  return v;
};

export const ROOMS: Room[] = [
  // ───────────────────────────────────────────────────────── BODY
  {
    slug: 'body',
    numeral: 'I',
    name: 'Body',
    headline: ['The room where you stop', 'being dismissed.'],
    tagline: 'The map you should have been handed at 38',
    moment: 'Test, do not guess. This is the conversation I had to fight for at forty-two.',
    letter: 'B',
    tint: 'pink',
    intro: [
      'Four years of being told it was stress. Four years of leaving an appointment with nothing written down. The Body room is the one I built first, because it is the one I needed first.',
      'Five volumes. Perimenopause, hormones, the daily architecture, self-trust, and execution. Each one is a short editorial workbook you can actually finish, with the language to walk into your next appointment prepared instead of apologizing.',
    ],
    evidence: [
      { n: '87%', line: 'of women never seek care for perimenopause symptoms.' },
      { n: '11-12%', line: 'begin perimenopause before age 41.' },
      { n: '$26.6B', line: 'is the annual US cost of untreated menopause symptoms.' },
    ],
    toolsIntro: 'Start with the volume that matches the week you are having.',
    tools: [
      ...VOLUMES.map((v) => ({
        name: v.fullTitle,
        note: v.tagline,
        price: v.price,
        href: `/vol/${v.slug}`,
      })),
      {
        name: SERIES.title,
        note: `All five volumes. Saves $${SERIES.savings}.`,
        price: SERIES.price,
        href: '/series',
      },
    ],
    inside: [
      {
        n: '01',
        title: 'The symptom decoder',
        line: 'The page that names what you have been calling nothing. Written to be read the week before an appointment.',
      },
      {
        n: '02',
        title: 'The weekly tracker',
        line: 'Patterns instead of crisis management. The record that makes a clinician conversation go differently.',
      },
      {
        n: '03',
        title: 'The hormone primer',
        line: 'What is moving, why it is moving, and which numbers are worth asking for by name.',
      },
      {
        n: '04',
        title: 'The PHASE Pattern',
        line: 'The reflection that maps where you actually are in the season, not where a chart says you should be.',
      },
    ],
    whoFor: [
      'You are somewhere between 35 and 50 and something changed that no one will name.',
      'You have been told you are stressed, tired, or fine, more than twice.',
      'You want the words before the appointment, not after it.',
    ],
    whoNot: [
      'You want a protocol, a supplement stack, or a prescription. This is not that and cannot be.',
      'You want medical advice. Every volume is educational work from a certified holistic health coach.',
    ],
    faqs: [
      {
        question: 'Is this medical advice?',
        answer:
          'No. The PHASE™ is educational content from an IIN-certified holistic health coach. It is built to make your conversation with a clinician better, not to replace it. Always consult your provider before changing medications, supplements, or treatment.',
      },
      {
        question: 'Which volume should I start with?',
        answer:
          'Vol. I · Perimenopause if you are still trying to name the season. Vol. II · Hormones if you already have labs and want to read them. If you know you want all five, the Series is $97 and saves $38.',
      },
      {
        question: 'What do I actually receive?',
        answer:
          'A PDF, immediately, by email. Printable, reusable, yours forever. Each volume runs 9 to 10 pages of editorial workbook, not a 200-page textbook you will never open.',
      },
    ],
    metaTitle: 'The Body Room · Perimenopause, Hormones, and the Rebuild',
    metaDescription:
      'The Body room of The PHASE™. Five editorial workbooks on perimenopause, hormones, daily architecture, self-trust, and execution. $27 each, all five for $97. By Erika Hanafin Austria.',
  },

  // ───────────────────────────────────────────────────────── FAMILY
  {
    slug: 'family',
    numeral: 'II',
    name: 'Family',
    headline: ['The room where the house', 'becomes two houses.'],
    tagline: 'The playbook for the two-house rebuild',
    moment: 'Twenty scripts already written, for the messages you dread sending.',
    letter: 'F',
    tint: 'navy',
    intro: [
      'The split is a phase. The blend is a phase. The Sunday night message you rewrite for an hour before you send it is a phase. None of them come with a manual.',
      'The Family room is the architecture for the part nobody hands you: what you say, how you say it, and how you protect your kids and yourself while the house reorganizes around all of you.',
    ],
    evidence: [
      { n: '69%', line: 'of divorces are initiated by women.' },
      { n: '45%', line: 'is how far a woman\'s standard of living drops after a gray divorce. For men it is 21%.' },
      { n: '71%', line: 'of household cognitive labor is managed by mothers.' },
    ],
    toolsIntro: 'The framework first. The weekly redistribution second.',
    tools: [
      {
        name: 'The Co-Parenting Power Method®',
        note: 'Twenty scripts already written for the messages you dread sending, plus the framework underneath them.',
        price: COPARENTING_DISPLAY_PRICE,
        href: LIBRARY_URL,
      },
      {
        name: PRODUCTS.mentalloaddetox.name,
        note: 'The invisible load checklist. Move three things off your plate this week, then do it again next week.',
        price: PRODUCTS.mentalloaddetox.price,
        href: PRODUCTS.mentalloaddetox.purchaseUrl ?? LIBRARY_URL,
        stripe: Boolean(PRODUCTS.mentalloaddetox.purchaseUrl),
        productKey: PRODUCTS.mentalloaddetox.key,
      },
    ],
    inside: [
      {
        n: '01',
        title: 'The twenty scripts',
        line: 'Already written, for the messages you dread. Schedule changes, money, the escalation you do not want to have.',
      },
      {
        n: '02',
        title: 'The two-house calendar',
        line: 'The logistics layer, so the handoff stops being a negotiation every single week.',
      },
      {
        n: '03',
        title: 'The kids first filter',
        line: 'The question you run a message through before you send it, when you are the one who is angry.',
      },
      {
        n: '04',
        title: 'The invisible load audit',
        line: 'Naming the work no one sees, which is the only way any of it moves off your plate.',
      },
    ],
    whoFor: [
      'You are separating, divorcing, or already co-parenting across two houses.',
      'You are blending a family and the rules keep getting written on the fly.',
      'You are the one holding the schedule, the school forms, and the emotional weather.',
    ],
    whoNot: [
      'You need legal advice. This is a communication and logistics framework, not counsel.',
      'You are looking for a way to win against your co-parent. That is not what this is for.',
    ],
    faqs: [
      {
        question: 'Is this legal advice?',
        answer:
          'No. The Co-Parenting Power Method® is a communication and logistics framework. It does not replace an attorney, a mediator, or a therapist, and it is not written to be used as evidence.',
      },
      {
        question: 'Does this work if my co-parent will not cooperate?',
        answer:
          'The scripts are written for exactly that case. You cannot control the reply. You can control what you send, how often you send it, and how much of your week it takes from you.',
      },
      {
        question: 'Where does checkout happen?',
        answer:
          'The Family room routes through the MOMumental Reinvention library, which is the canonical home for the Method and for the Complete Library.',
      },
    ],
    metaTitle: 'The Family Room · The Co-Parenting Power Method®',
    metaDescription:
      'The Family room of The PHASE™. The Co-Parenting Power Method®, twenty scripts for the messages you dread sending, plus the Mental Load Detox. For the two-house rebuild. By Erika Hanafin Austria.',
  },

  // ───────────────────────────────────────────────────────── VOICE
  {
    slug: 'voice',
    numeral: 'III',
    name: 'Voice',
    headline: ['The room where you stop', 'talking yourself out of it.'],
    tagline: 'Coming back to your own knowing',
    moment: 'The thing I stopped apologizing for was my knowing.',
    letter: 'V',
    tint: 'pink',
    intro: [
      'You knew about the body before the labs confirmed it. You knew about the marriage before anyone said it out loud. You knew about the work before you had the language for it. And every time, someone with more confidence than information talked you out of it.',
      'The Voice room is the work of getting that back. Not louder. Just yours again.',
    ],
    evidence: [
      {
        n: '4x',
        line: 'more likely to die over ten years, for women who self-silenced in conflict. Framingham Offspring Study.',
      },
      { n: '68%', line: 'of women report burnout, against 42% of men.' },
      {
        n: '25.8%',
        line: 'of mothers rate their mental health as excellent, down from 38.4% in 2016.',
      },
    ],
    toolsIntro: 'One volume, and it is the one readers write back about most.',
    tools: [
      {
        name: VOL('self-trust').fullTitle,
        note: VOL('self-trust').tagline,
        price: VOL('self-trust').price,
        href: '/vol/self-trust',
      },
    ],
    inside: [
      {
        n: '01',
        title: 'What have I been pretending not to know',
        line: 'The prompt the whole volume turns on. Most readers stop on this page the first time.',
      },
      {
        n: '02',
        title: 'The dismissal inventory',
        line: 'Every time you were talked out of your own read, written down. Patterns show up fast.',
      },
      {
        n: '03',
        title: 'The self-trust mantra',
        line: 'I trust my body. I trust my voice. I trust my pace. Short enough to actually use.',
      },
      {
        n: '04',
        title: 'The pace question',
        line: 'Whose timeline are you running on, and what happens to the work when you take it back.',
      },
    ],
    whoFor: [
      'You keep overriding your own read and calling it being reasonable.',
      'You have been the calm one for so long you cannot find the loud one.',
      'You want the language back before you need it in a room that matters.',
    ],
    whoNot: [
      'You want affirmations. This one asks harder questions than that.',
      'You want therapy. This is reflective work, not clinical care.',
    ],
    faqs: [
      {
        question: 'Do I need the other volumes first?',
        answer:
          'No. Vol. IV stands alone. Plenty of readers start here because the voice is what broke first, then work backward into the body.',
      },
      {
        question: 'What is actually in it?',
        answer:
          'A 9-page editorial workbook of prompts and frameworks on self-trust after a season of being dismissed. PDF, printable, yours forever, $27.',
      },
      {
        question: 'Is this the same as the podcast?',
        answer:
          'No. The podcast and the Tuesday letters are free. Vol. IV is the workbook version of the same territory, built to be written in.',
      },
    ],
    metaTitle: 'The Voice Room · Self-Trust and Confidence',
    metaDescription:
      'The Voice room of The PHASE™. Vol. IV · Self-trust, the workbook for coming back to your own knowing after a season of being dismissed. $27. By Erika Hanafin Austria.',
  },

  // ───────────────────────────────────────────────────────── WORK
  {
    slug: 'work',
    numeral: 'IV',
    name: 'Work',
    headline: ['The room where you run it', 'like an operator.'],
    tagline: 'Run your life the way an operator would',
    moment: 'Operators, the good ones, run things on frameworks. Not on willpower.',
    letter: 'W',
    tint: 'navy',
    intro: [
      'I ran a company through the worst year of my personal life. Not on discipline. On frameworks, because willpower is the first thing a hard season takes.',
      'The Work room is the operator layer: the planning, the money, and the profit systems I used when I had four boys, a body in revolt, and a business that still had to make payroll.',
    ],
    evidence: [
      { n: '61.8¢', line: 'is what mothers earn per father\'s dollar. For Latina mothers it is 42.7¢.' },
      { n: '2.3%', line: 'of venture capital goes to all-women teams. For women of color it is roughly 1%.' },
      { n: '39.2%', line: 'of US businesses are women-owned, generating $3.3T in revenue.' },
    ],
    toolsIntro: 'Seven tools, $17 each. Take the one that fixes this week.',
    tools: (
      [
        'musthaveframeworks',
        'visitiontoaction',
        'thegoaltracker',
        'thefinanceplanner',
        'stressfreefinances',
        'theproductivitytoolkit',
        'ultimateguidetobalanceandgrowth',
      ] as const
    ).map((key) => {
      const p = PRODUCTS[key];
      return {
        name: p.name,
        note: p.fullTitle.split(' · ')[1] ?? p.fullTitle,
        price: p.price,
        href: p.purchaseUrl ?? LIBRARY_URL,
        stripe: Boolean(p.purchaseUrl),
        productKey: p.key,
      };
    }),
    inside: [
      {
        n: '01',
        title: 'Vision to action',
        line: 'The ladder from why, to vision, to goals, to the one thing you do on Monday morning.',
      },
      {
        n: '02',
        title: 'Three goals, tracked',
        line: 'Not twelve. Three, with the tracking that makes them survive a bad month.',
      },
      {
        n: '03',
        title: 'The profit frameworks',
        line: 'Seven systems for making the business pay you back without adding hours you do not have.',
      },
      {
        n: '04',
        title: 'The money dashboard',
        line: 'The year at a glance. Income, expenses, profit, goals, in one place you will actually open.',
      },
    ],
    whoFor: [
      'You are building or running something while the rest of your life is being rebuilt.',
      'You are busy in a way that is not producing anything, and you know the difference.',
      'You want systems, not motivation.',
    ],
    whoNot: [
      'You want a coaching program. These are working documents, not a container.',
      'You want financial or tax advice. These are planning frameworks, not counsel.',
    ],
    faqs: [
      {
        question: 'Do I need a business for these to be useful?',
        answer:
          'No. The planning and money tools work on a household as well as a P&L. The profit frameworks are the ones that assume you are selling something.',
      },
      {
        question: 'Do I have to buy all seven?',
        answer:
          'No, and you should not. Take the one that fixes this week. Every tool is $17 and stands alone. The Complete Library is the answer if more than one room applies to your life.',
      },
      {
        question: 'What format are they?',
        answer:
          'PDFs, delivered by email at checkout. Printable, reusable, yours forever.',
      },
    ],
    metaTitle: 'The Work Room · Frameworks for the Operator Rebuild',
    metaDescription:
      'The Work room of The PHASE™. Seven operator tools for planning, money, and profitability, $17 each. Built by a former CEO rebuilding everything at once. By Erika Hanafin Austria.',
  },
];

export function getRoom(slug: string): Room | undefined {
  return ROOMS.find((r) => r.slug === slug);
}
