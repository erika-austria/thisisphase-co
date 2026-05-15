import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { faqSchema, breadcrumbSchema } from '@/lib/schema';
import { MagazineMasthead } from '@/components/MagazineMasthead';
import { PullQuote } from '@/components/PullQuote';
import { ClarityForm } from '@/components/ClarityForm';

/**
 * /clarity · The Clarity Starter Kit lead funnel landing page.
 *
 * This page is the cold-acquisition entry point for The PHASE™ funnel.
 *   1. Visitor arrives from Meta Ad / IG bio / Substack referral
 *   2. Trades email for the free Clarity Starter Kit PDF
 *   3. Enters 4-email Resend nurture: Day 0 delivery → Day 2 nudge → Day 4 founder story → Day 7 Vol. I or Series offer
 *   4. Pixel Lead event fires (with eventID for CAPI dedup)
 *   5. Becomes a warm-audience retargeting candidate for Direct Sale ads
 *
 * Voice firewall: NEON, no em dashes, sister tone, period-driven cadence.
 * Conversion architecture: 3 above-the-fold CTAs, mid-page CTA, final CTA.
 * Trust signals: founder credentials, social proof placeholder, 3-step "what happens next".
 *
 * NOT indexed by search engines (lead funnel pages should not show in SERP).
 */

export const metadata: Metadata = buildMetadata({
  title: 'The Clarity Starter Kit · Free',
  description: 'A free 9-page workbook to give you language for what your body has been trying to say. From The PHASE™. By Erika Hanafin Austria.',
  path: '/clarity',
  ogImage: '/og/clarity.jpg',
  noIndex: true, // lead funnel pages should not be indexed
});

const FAQS = [
  {
    question: 'Is the Clarity Starter Kit really free?',
    answer:
      'Yes. The Kit is yours when you enter your email. No credit card. No catch. Just the work.',
  },
  {
    question: 'What is in the Kit?',
    answer:
      'A 9-page guided workbook: Symptom Decoder preview, weekly tracker, pattern decoder, and the language you need to walk into your next clinician conversation prepared. Designed for the woman in perimenopause who has been told for years she is "just stressed."',
  },
  {
    question: 'Will I get spammed?',
    answer:
      'No. After the Kit lands in your inbox, you will get three follow-up notes from me over the next week. After that, you can choose to stay on the list for Tuesday essays or unsubscribe. No marketing automation that hounds you.',
  },
  {
    question: 'How is this different from buying Vol. I?',
    answer:
      'The Kit is the doorway. Vol. I is the room. The Kit gives you the language. Vol. I gives you the full Symptom Decoder, weekly tracker designed for clinician conversations, and the Pattern Decoder framework. The Kit is free. Vol. I is $27.',
  },
  {
    question: 'Is this medical advice?',
    answer:
      'No. The PHASE™ is educational content from a certified holistic health coach. Always consult your healthcare provider before making changes to medications, supplements, or treatment protocols.',
  },
];

export default function ClarityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: 'The PHASE', url: 'https://thisisphase.co' },
              { name: 'The Clarity Starter Kit', url: 'https://thisisphase.co/clarity' },
            ]),
            faqSchema(FAQS),
          ]),
        }}
      />

      <MagazineMasthead
        issue="THE PHASE™ · CLARITY STARTER KIT"
        topics={['FREE', 'PERIMENOPAUSE', 'BODY-TRUTH']}
        publishingNote="STARTS HERE"
      />

      {/* ─── HERO · above-the-fold ─── */}
      <section className="max-w-content mx-auto px-6 pt-16 md:pt-20 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="eyebrow text-xs mb-4 text-pink">FREE · 9-PAGE WORKBOOK</p>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-6">
            You are not <span className="italic text-pink">imagining</span> this.
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-navy/80 mb-8 max-w-xl">
            The Clarity Starter Kit gives you language for what your body has been trying to say. So your next doctor conversation goes differently than the last four.
          </p>
          <div className="mb-3">
            <ClarityForm variant="inline" source="hero" buttonLabel="Send me the Kit →" />
          </div>
          <p className="text-xs text-navy/50 italic mt-3">
            No credit card. PDF lands in your inbox in under 5 minutes.
          </p>
        </div>

        <div className="bg-cream-alt rounded-sm border border-navy/10 p-10 bracket-pink">
          <p className="eyebrow eyebrow-with-dot text-xs mb-6">WHAT IS INSIDE</p>
          <ul className="space-y-4 text-navy/80">
            <li className="flex gap-3">
              <span className="font-serif text-pink text-2xl flex-shrink-0 leading-none">01</span>
              <span><strong className="text-navy">Symptom Decoder preview</strong> · the page that usually surprises women the most</span>
            </li>
            <li className="flex gap-3">
              <span className="font-serif text-pink text-2xl flex-shrink-0 leading-none">02</span>
              <span><strong className="text-navy">Weekly tracker</strong> · the framework for spotting patterns instead of crisis-managing symptoms</span>
            </li>
            <li className="flex gap-3">
              <span className="font-serif text-pink text-2xl flex-shrink-0 leading-none">03</span>
              <span><strong className="text-navy">Clinician conversation script</strong> · the words for walking in prepared instead of dismissed</span>
            </li>
            <li className="flex gap-3">
              <span className="font-serif text-pink text-2xl flex-shrink-0 leading-none">04</span>
              <span><strong className="text-navy">9 pages</strong> · printable, reusable, yours forever</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ─── THE PROBLEM (manifesto) ─── */}
      <PullQuote variant="manifesto" attribution="THE PHASE™ MANIFESTO">
        I lost four years to vague unease.
        <br />
        <span className="italic">You should not have to lose that long.</span>
      </PullQuote>

      {/* ─── FOUNDER STORY ─── */}
      <section className="max-w-content mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="eyebrow text-xs mb-4 text-pink">FROM THE FOUNDER</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
            I almost gave up at <span className="italic text-pink">year three</span>.
          </h2>
          <div className="space-y-5 text-navy/80 leading-relaxed text-lg">
            <p>
              Three years of "you are stressed." Three years of "have you tried sleep?" Three years of doctors who looked at my chart for 90 seconds and told me I was fine.
            </p>
            <p>
              I was not fine. My body knew it. My family knew it. The mirror knew it.
            </p>
            <p>
              Year four, a nurse practitioner sat with me for over an hour. Asked questions. Connected dots. Took notes seriously. At one point she looked at me and said:
            </p>
            <p className="font-serif italic text-2xl text-pink leading-snug pt-2">
              "You are not imagining this."
            </p>
            <p>
              Six words.
            </p>
            <p>
              That sentence is why The PHASE™ exists. The Clarity Starter Kit is the first part of that conversation. The conversation you should have been handed at 38, not had to fight for at 42.
            </p>
          </div>
        </div>

        <div className="bg-navy text-cream rounded-sm p-10 bracket-pink md:sticky md:top-24">
          <p className="eyebrow eyebrow-pink text-xs mb-4">CREDENTIALS</p>
          <h3 className="font-serif text-3xl mb-6">
            By <span className="italic text-pink">Erika Hanafin Austria</span>.
          </h3>
          <ul className="space-y-4 text-cream/80 text-base">
            <li className="border-b border-cream/15 pb-4">
              <span className="block text-pink eyebrow text-xs mb-1">FOUNDER</span>
              MOMumental Moments<sup>&reg;</sup>
            </li>
            <li className="border-b border-cream/15 pb-4">
              <span className="block text-pink eyebrow text-xs mb-1">PUBLISHER</span>
              MOMumental Reinvention · 50K+ readers
            </li>
            <li className="border-b border-cream/15 pb-4">
              <span className="block text-pink eyebrow text-xs mb-1">CO-FOUNDER</span>
              NEON ID
            </li>
            <li className="border-b border-cream/15 pb-4">
              <span className="block text-pink eyebrow text-xs mb-1">CERTIFIED</span>
              Holistic Health Coach · Institute for Integrative Nutrition
            </li>
            <li>
              <span className="block text-pink eyebrow text-xs mb-1">RECOGNITION</span>
              2x Top 50 Women Leaders · Virginia
            </li>
          </ul>
        </div>
      </section>

      {/* ─── MID-PAGE EMAIL CAPTURE ─── */}
      <section className="bg-pink-soft py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow text-xs mb-3 text-pink-deep">START WHERE I STARTED</p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy mb-4">
            The Kit is yours.
          </h2>
          <p className="text-navy/70 mb-8 max-w-md mx-auto">
            A 9-page workbook to give you language for what your body has been trying to say. Free. Yours forever.
          </p>
          <ClarityForm variant="inline" source="mid-page" buttonLabel="Send me the Kit →" />
          <p className="text-xs text-navy/50 italic mt-4">
            No credit card. PDF lands in your inbox in under 5 minutes.
          </p>
        </div>
      </section>

      {/* ─── WHAT HAPPENS NEXT (3-step) ─── */}
      <section className="max-w-content mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="eyebrow text-xs mb-3">WHAT HAPPENS NEXT</p>
          <h2 className="font-serif text-4xl md:text-5xl">
            Three things. <span className="italic text-pink">Then it is yours.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-cream-alt rounded-sm border border-navy/10 p-8">
            <p className="font-serif text-pink text-5xl mb-4 leading-none">01</p>
            <h3 className="font-serif text-2xl text-navy mb-3">The Kit lands.</h3>
            <p className="text-navy/70 leading-relaxed">
              In your inbox in under 5 minutes. PDF download. Save it. Print it. Use it. Yours forever.
            </p>
          </div>

          <div className="bg-cream-alt rounded-sm border border-navy/10 p-8">
            <p className="font-serif text-pink text-5xl mb-4 leading-none">02</p>
            <h3 className="font-serif text-2xl text-navy mb-3">Three notes from me.</h3>
            <p className="text-navy/70 leading-relaxed">
              Over the next week. The story behind the Kit, what to do with it, and what comes next if you want to go deeper.
            </p>
          </div>

          <div className="bg-cream-alt rounded-sm border border-navy/10 p-8">
            <p className="font-serif text-pink text-5xl mb-4 leading-none">03</p>
            <h3 className="font-serif text-2xl text-navy mb-3">You decide.</h3>
            <p className="text-navy/70 leading-relaxed">
              Stay for Tuesday essays. Step into Vol. I. Or just keep the Kit and use it. The work waits. No pressure either way.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-cream-alt py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="eyebrow text-xs mb-3 text-center">QUESTIONS</p>
          <h2 className="font-serif text-4xl text-center mb-12">FAQ.</h2>
          <dl className="space-y-8">
            {FAQS.map((f, i) => (
              <div key={i} className="border-b border-navy/10 pb-6">
                <dt className="font-serif text-xl mb-2">{f.question}</dt>
                <dd className="text-navy/70 leading-relaxed">{f.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-navy text-cream py-20 px-6 text-center">
        <p className="eyebrow eyebrow-pink text-xs mb-3">LAST CHANCE</p>
        <h2 className="font-serif text-4xl md:text-6xl mb-6">
          The Kit is yours. <span className="italic text-pink">Free.</span>
        </h2>
        <p className="text-cream/80 mb-8 max-w-md mx-auto">
          The first part of the conversation you should have been handed years ago.
        </p>
        <div className="max-w-md mx-auto">
          <ClarityForm variant="inline" source="footer" buttonLabel="Send me the Kit →" />
        </div>
        <p className="mt-8 text-sm text-cream/60">
          Or skip the Kit and go straight to <Link href="/series" className="text-pink hover:underline">The Series ($97)</Link> or <Link href="/vol/perimenopause" className="text-pink hover:underline">Vol. I ($27)</Link>.
        </p>
      </section>
    </>
  );
}
