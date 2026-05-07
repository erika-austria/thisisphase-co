import Link from 'next/link';
import type { Metadata } from 'next';
import { LIFETIME } from '@/lib/volumes';
import { buildMetadata } from '@/lib/seo';
import { lifetimeProductSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import { STRIPE_LINKS } from '@/lib/stripe';
import { MagazineMasthead } from '@/components/MagazineMasthead';
import { PhaseAcronym } from '@/components/PhaseAcronym';
import { PullQuote } from '@/components/PullQuote';
import { StripeButton } from '@/components/StripeButton';

export const metadata: Metadata = buildMetadata({
  title: 'Lifetime Pass · $197',
  description: 'The PHASE™ Lifetime Pass. All five volumes plus every future update plus founding-cohort community access for life. From MOMumental Moments®.',
  path: '/lifetime',
  ogImage: '/og/lifetime.jpg',
  type: 'product',
});

const FAQS = [
  { question: 'What is included in the Lifetime Pass?', answer: 'All five PHASE™ volumes (Perimenopause, Hormones, Architecture, Self-trust, Execution), plus every future update Erika ever publishes, plus founding-cohort community access for the life of the brand.' },
  { question: 'What does "lifetime" mean?', answer: 'For as long as The PHASE™ exists, you have access. One payment. No subscription.' },
  { question: 'What happens if Erika publishes Vol. VI or new bonus content?', answer: 'You get it automatically. Every future volume, every bonus chapter, every update is included.' },
  { question: 'What does community access include?', answer: 'A private founding-cohort space, monthly Lives with Erika, and direct access to ask questions about the PHASE™ frameworks. Details locked in once the cohort opens.' },
  { question: 'Why is this different from The Series?', answer: 'The Series ($97) gets you the five current volumes. The Lifetime Pass ($197) gets you everything plus future content plus community.' },
];

export default function LifetimePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            lifetimeProductSchema(),
            breadcrumbSchema([
              { name: 'The PHASE', url: 'https://thisisphase.co' },
              { name: 'Lifetime Pass', url: 'https://thisisphase.co/lifetime' },
            ]),
            faqSchema(FAQS),
          ]),
        }}
      />

      <MagazineMasthead
        issue="THE PHASE™ · LIFETIME PASS"
        topics={['ALL VOLUMES', 'FUTURE UPDATES', 'COMMUNITY']}
        publishingNote="ONE PAYMENT · KEPT FOREVER"
      />

      <section className="max-w-content mx-auto px-6 pt-16 md:pt-20 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="eyebrow text-xs mb-4 text-pink">ALL IN. FOREVER.</p>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-6">
            One payment.
            <br />
            <span className="italic text-pink">Kept forever.</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-navy/80 mb-8 max-w-xl">
            Every volume. Every future update. Founding-cohort community access for the life of the brand.
          </p>
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-serif text-6xl text-navy">${LIFETIME.price}</span>
            <span className="font-serif italic text-2xl text-pink">one time</span>
          </div>
          <StripeButton href={STRIPE_LINKS.lifetime} label="Get Lifetime Access" variant="pink" />
        </div>

        <div className="bg-navy text-cream rounded-sm p-10 bracket-pink">
          <p className="eyebrow eyebrow-pink text-xs mb-6">WHAT YOU GET</p>
          <ul className="space-y-4 text-lg leading-relaxed">
            <li className="flex gap-3"><span className="text-pink">●</span> All five volumes (P · H · A · S · E)</li>
            <li className="flex gap-3"><span className="text-pink">●</span> Every future PHASE™ release · Vol. VI and beyond</li>
            <li className="flex gap-3"><span className="text-pink">●</span> Coaching prompts on every volume</li>
            <li className="flex gap-3"><span className="text-pink">●</span> Audio companions (when published)</li>
            <li className="flex gap-3"><span className="text-pink">●</span> Founding-cohort community access</li>
            <li className="flex gap-3"><span className="text-pink">●</span> Monthly Lives with Erika (TBA)</li>
            <li className="flex gap-3"><span className="text-pink">●</span> No subscription. No recurring charges.</li>
          </ul>
        </div>
      </section>

      <PullQuote variant="manifesto" attribution="LIFETIME PASS · 2026">
        For the woman who decided
        <br />
        <span className="italic text-pink">she is in this for the rebuild</span>.
      </PullQuote>

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

      <section className="bg-navy text-cream py-20 px-6 text-center">
        <p className="eyebrow eyebrow-pink text-xs mb-3">YOUR DECISION</p>
        <h2 className="font-serif text-4xl md:text-6xl mb-6">
          Lifetime Pass · <span className="italic text-pink">$197</span>
        </h2>
        <StripeButton href={STRIPE_LINKS.lifetime} label="Get Lifetime Access" variant="pink" />
        <p className="mt-6 text-sm text-cream/60">
          Want just the five volumes? <Link href="/series" className="text-pink hover:underline">Get The Series at $97 →</Link>
        </p>
      </section>
    </>
  );
}
