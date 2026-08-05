import Link from 'next/link';
import type { Metadata } from 'next';
import { VOLUMES, SERIES } from '@/lib/volumes';
import { buildMetadata } from '@/lib/seo';
import { bundleProductSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import { STRIPE_LINKS } from '@/lib/stripe';
import { MagazineMasthead } from '@/components/MagazineMasthead';
import { PhaseAcronym } from '@/components/PhaseAcronym';
import { VolumeCard } from '@/components/VolumeCard';
import { PullQuote } from '@/components/PullQuote';
import { StripeButton } from '@/components/StripeButton';

export const metadata: Metadata = buildMetadata({
  title: 'The Series · All Five Volumes · $97',
  description: 'All five volumes of The PHASE™. Perimenopause, Hormones, Architecture, Self-trust, Execution. Saves $38 vs. individual volumes. From MOMumental Moments®.',
  path: '/series',
  ogImage: '/og/series.jpg',
  type: 'product',
});

const FAQS = [
  { question: 'What do I get with The Series?', answer: 'All five volumes of The PHASE™ as digital PDF workbooks. Perimenopause (Vol. I), Hormones (Vol. II), Architecture (Vol. III), Self-trust (Vol. IV), and Execution (Vol. V). Delivered to your inbox immediately after purchase.' },
  { question: 'How is the Series different from buying volumes individually?', answer: 'The Series bundles all five volumes at the lowest combined price. Same volumes, same digital format, just bundled into one drop.' },
  { question: 'Is this medical advice?', answer: 'No. The PHASE™ is educational content from a certified holistic health coach. Always consult your healthcare provider before making changes to medications, supplements, or treatment protocols.' },
  { question: 'How long do I have access?', answer: 'Forever. The PDFs are yours to keep, print, and reference whenever you need them.' },
  { question: 'Are there companion products?', answer: 'Yes. The Reflections Journal is the emotional companion. Decode Your Symptoms is the action companion with worksheets. Both pair beautifully with The Series.' },
  { question: 'Can I share with my sister or friend?', answer: 'Each purchase is for personal use. If you want to gift it, please buy a second copy.' },
];

export default function SeriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            bundleProductSchema(),
            breadcrumbSchema([
              { name: 'The PHASE', url: 'https://thisisphase.co' },
              { name: 'The Series', url: 'https://thisisphase.co/series' },
            ]),
            faqSchema(FAQS),
          ]),
        }}
      />

      <MagazineMasthead
        issue="THE PHASE™ · THE SERIES"
        topics={['ALL FIVE VOLUMES']}
        publishingNote="MOST POPULAR"
      />

      <section className="max-w-content mx-auto px-6 pt-16 md:pt-20 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="eyebrow text-xs mb-4 text-pink">ALL FIVE VOLUMES · ONE PRICE</p>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-6">
            P + H + A + S + E.
            <br />
            <span className="italic text-pink">Take all five.</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-navy/80 mb-8 max-w-xl">
            The full PHASE™ kit. Five volumes. All daily templates. All frameworks. Every reset mantra. Every pull quote. Every receipt.
          </p>
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-serif text-6xl text-navy">${SERIES.price}</span>
            <span className="font-serif italic text-2xl text-pink">saves $38</span>
          </div>
          <StripeButton href={STRIPE_LINKS.series} label="Get the Series" variant="primary" />
        </div>

        <div className="bg-cream-alt rounded-sm border border-navy/10 p-10 bracket-pink">
          <p className="eyebrow eyebrow-with-dot text-xs mb-6">WHAT&apos;S INSIDE</p>
          <PhaseAcronym variant="stacked" />
          <p className="font-serif italic text-navy/60 mt-8 text-sm">
            Plus daily templates, frameworks, pull quotes, and a reusable PHASE Pattern reflection.
          </p>
        </div>
      </section>

      <PullQuote variant="manifesto" attribution="THE PHASE™ MANIFESTO">
        Five volumes.
        <br />
        One body-truth.
        <br />
        <span className="italic">Take all of it.</span>
      </PullQuote>

      <section className="max-w-content mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="eyebrow text-xs mb-3">EVERY VOLUME, INCLUDED</p>
          <h2 className="font-serif text-4xl md:text-5xl">The five-volume kit.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {VOLUMES.map((v) => (
            <VolumeCard key={v.slug} volume={v} />
          ))}
        </div>
      </section>

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
        <p className="eyebrow eyebrow-pink text-xs mb-3">LAST CALL</p>
        <h2 className="font-serif text-4xl md:text-6xl mb-6">
          Take all five. <span className="italic text-pink">$97.</span>
        </h2>
        <p className="text-cream/80 mb-8 max-w-md mx-auto">Saves $38. Most popular. Yours forever.</p>
        <StripeButton href={STRIPE_LINKS.series} label="Get the Series" variant="pink" />
        <p className="mt-6 text-sm text-cream/60">
          Want a deeper companion? <Link href="/journal" className="text-pink hover:underline">The Journal</Link> or <Link href="/decode" className="text-pink hover:underline">Decode Your Symptoms</Link>.
        </p>
      </section>
    </>
  );
}
