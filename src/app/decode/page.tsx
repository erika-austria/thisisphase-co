import Link from 'next/link';
import type { Metadata } from 'next';
import { DECODE } from '@/lib/volumes';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { STRIPE_LINKS } from '@/lib/stripe';
import { MagazineMasthead } from '@/components/MagazineMasthead';
import { PullQuote } from '@/components/PullQuote';
import { StripeButton } from '@/components/StripeButton';
import { TrustSignalsBar } from '@/components/TrustSignalsBar';
import { ProductViewTracker } from '@/components/ProductViewTracker';

export const metadata: Metadata = buildMetadata({
  title: 'Decode Your Symptoms · A Science-Backed Reset · $19',
  description: DECODE.description,
  path: '/decode',
  ogImage: DECODE.ogImage,
  type: 'product',
});

export default function DecodePage() {
  return (
    <>
      <ProductViewTracker contentId="decode" contentName="Decode Your Symptoms" value={17} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Product',
              '@id': 'https://thisisphase.co/decode/#product',
              name: DECODE.title,
              description: DECODE.description,
              image: `https://thisisphase.co${DECODE.ogImage}`,
              brand: { '@type': 'Brand', name: 'The PHASE™' },
              category: 'Digital Workbook · Science-Backed · Women\'s Health',
              offers: {
                '@type': 'Offer',
                url: 'https://thisisphase.co/decode',
                priceCurrency: 'USD',
                price: DECODE.price.toString(),
                availability: 'https://schema.org/InStock',
              },
            },
            breadcrumbSchema([
              { name: 'The PHASE', url: 'https://thisisphase.co' },
              { name: DECODE.title, url: 'https://thisisphase.co/decode' },
            ]),
          ]),
        }}
      />

      <MagazineMasthead
        issue="THE PHASE™ · DECODE"
        topics={['SCIENCE-BACKED', '9 CHAPTERS', 'TRACK + RESET']}
        publishingNote={`${DECODE.pdfPages} PAGES · DIGITAL`}
      />

      <section className="max-w-content mx-auto px-6 pt-16 md:pt-20 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="eyebrow text-xs mb-4">RESERVED COMPANION</p>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-6">
            Self-care is not soft. <span className="italic text-pink">It is strategy.</span>
          </h1>
          <p className="text-lg md:text-xl text-ink/80 leading-relaxed mb-8">
            Decode Your Symptoms is the 11-page science-backed companion. Nine chapters. Real exercises. Track-what-shifts framing. Build a routine that fits the woman you are becoming.
          </p>
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-serif text-5xl text-ink">${DECODE.price}</span>
            <span className="font-serif italic text-xl text-ink/60">11 pages · digital</span>
          </div>
          <StripeButton href={STRIPE_LINKS.decode} label="Buy Decode Your Symptoms" variant="primary" />
        </div>

        <div className="bg-cream-alt rounded-sm border border-rule p-10 bracket-pink">
          <p className="eyebrow eyebrow-with-dot text-xs mb-6">WHAT'S INSIDE</p>
          <ul className="space-y-4 text-lg leading-relaxed text-ink/80">
            <li className="flex gap-3"><span className="text-pink-deep">●</span> Nine chapters of science-backed reset</li>
            <li className="flex gap-3"><span className="text-pink-deep">●</span> Decode what your body is actually saying</li>
            <li className="flex gap-3"><span className="text-pink-deep">●</span> Build a self-care plan that fits your life</li>
            <li className="flex gap-3"><span className="text-pink-deep">●</span> Track-what-shifts exercises</li>
            <li className="flex gap-3"><span className="text-pink-deep">●</span> Companion to Vol. II (Hormones)</li>
          </ul>
        </div>
      </section>

      <PullQuote variant="manifesto" attribution="DECODE YOUR SYMPTOMS · 2026">
        Your body is not broken.
        <br />
        <span className="italic text-pink">It is asking for different inputs.</span>
      </PullQuote>

      {/* Trust signals · added Fri May 15 PM per WTF framework */}
      <TrustSignalsBar variant="cream" />

      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="eyebrow text-xs mb-3 text-pink">WHO THIS IS FOR</p>
        <h2 className="font-serif text-4xl mb-6">If you have done the research and need the structure.</h2>
        <div className="space-y-6 text-lg leading-relaxed text-ink/80">
          <p>
            Menopause changes everything. The food that used to fuel you. The sleep that used to restore you. The pace that used to feel doable.
          </p>
          <p>
            This is the action layer underneath the Vol II Hormones decisions. Once you have the lab work and the doctor conversation, this is what you do every morning.
          </p>
        </div>
      </section>

      <section className="bg-navy text-cream py-20 px-6 text-center">
        <p className="eyebrow eyebrow-pink text-xs mb-3">YOUR NEXT MOVE</p>
        <h2 className="font-serif text-4xl md:text-5xl mb-6">
          Decode Your Symptoms · <span className="italic text-pink">${DECODE.price}</span>
        </h2>
        <StripeButton href={STRIPE_LINKS.decode} label="Buy · $19" variant="pink" />
        <p className="mt-6 text-sm text-cream/60">
          Pairs perfectly with <Link href="/vol/hormones" className="text-pink hover:underline">Vol. II · Hormones</Link>.
        </p>
      </section>
    </>
  );
}
