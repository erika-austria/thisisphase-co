import Link from 'next/link';
import type { Metadata } from 'next';
import { VOLUMES, SERIES, JOURNAL, DECODE } from '@/lib/volumes';
import { buildMetadata } from '@/lib/seo';
import { allVolumesItemListSchema, bundleProductSchema, journalProductSchema } from '@/lib/schema';
import { STRIPE_LINKS } from '@/lib/stripe';
import { MagazineMasthead } from '@/components/MagazineMasthead';
import { PhaseAcronym } from '@/components/PhaseAcronym';
import { VolumeCard } from '@/components/VolumeCard';
import { PullQuote } from '@/components/PullQuote';
import { AffiliateStrip } from '@/components/AffiliateStrip';
import { EmailCapture } from '@/components/EmailCapture';
import { StripeButton } from '@/components/StripeButton';

export const metadata: Metadata = buildMetadata({
  title: 'The PHASE™ · Five-Volume Women\'s Reinvention Series',
  description: 'Five volumes. One body-truth. The map of perimenopause, hormones, daily architecture, self-trust, and execution. Built for women who walked out of their fourth doctor\'s office with no answers. From MOMumental Moments®.',
  path: '/',
  ogImage: '/og/home.jpg',
});

export default function HomePage() {
  return (
    <>
      {/* Page-specific JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            allVolumesItemListSchema(),
            bundleProductSchema(),
            journalProductSchema(),
          ]),
        }}
      />

      {/* Magazine masthead */}
      <MagazineMasthead
        issue="VOL. I · NO. 01"
        topics={['REINVENTION', 'HORMONES', 'MIDLIFE BODY-TRUTH']}
        publishingNote="LAUNCHING MAY 8 · 2026"
      />

      {/* Hero */}
      <section className="max-w-content mx-auto px-6 pt-16 md:pt-24 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow text-xs mb-4">FROM MOMUMENTAL MOMENTS®</p>
            <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-6">
              You are not in a phase.
              <br />
              You are in <span className="italic text-pink">The PHASE</span>
              <sup className="text-2xl">™</sup>.
            </h1>
            <p className="text-lg md:text-xl text-navy/80 leading-relaxed mb-10 max-w-xl">
              Five volumes. One body-truth. Built for the woman who walked out of her fourth doctor&apos;s office with no answers.
            </p>
            <div className="flex flex-wrap gap-3">
              <StripeButton
                href={STRIPE_LINKS.series}
                label="Buy the Series"
                price={97}
                variant="primary"
              />
              <Link href="/series" className="btn-secondary">
                Read more →
              </Link>
            </div>
            <p className="text-sm text-navy/50 mt-6 italic">
              Or buy any volume individually for $27. Lifetime pass $197.
            </p>
          </div>

          {/* Hero visual · acronym block */}
          <div className="bg-cream-alt rounded-sm border border-navy/10 p-10 md:p-12 bracket-pink">
            <p className="eyebrow eyebrow-with-dot text-xs mb-6">THE ACRONYM</p>
            <PhaseAcronym variant="stacked" linked={true} />
            <p className="font-serif italic text-navy/60 mt-8 text-sm">
              Click any letter to read the volume.
            </p>
          </div>
        </div>
      </section>

      {/* Manifesto block */}
      <PullQuote variant="manifesto" attribution="THE PHASE™ MANIFESTO · 2026">
        Test, don&apos;t guess.
        <br />
        Advocate, don&apos;t apologize.
        <br />
        Track, don&apos;t tolerate.
      </PullQuote>

      {/* Volume grid */}
      <section className="max-w-content mx-auto px-6 py-24" aria-labelledby="volumes-heading">
        <div className="text-center mb-14">
          <p className="eyebrow text-xs mb-3">THE FIVE VOLUMES</p>
          <h2 id="volumes-heading" className="font-serif text-4xl md:text-5xl mb-4">
            Each one stands alone.
            <br />
            <span className="italic text-pink">Together they rebuild everything.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {VOLUMES.map((v) => (
            <VolumeCard key={v.slug} volume={v} />
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="font-serif italic text-2xl text-navy/70 mb-2">
            Or take all five.
          </p>
          <p className="text-sm text-navy/60 mb-6">P + H + A + S + E. Saves $38.</p>
          <StripeButton
            href={STRIPE_LINKS.series}
            label="Get the Series"
            price={SERIES.price}
            variant="pink"
          />
        </div>
      </section>

      {/* Affiliate strip · MOVED UP per Erika's framework */}
      <AffiliateStrip />

      {/* Series bundle · standalone hero card */}
      <section className="max-w-content mx-auto px-6 py-16" aria-labelledby="series-heading">
        <div className="relative bg-cream-alt rounded-sm border-2 border-pink p-10 md:p-14 text-center max-w-3xl mx-auto">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink text-cream eyebrow text-xs px-3 py-1 whitespace-nowrap">
            MOST POPULAR
          </span>
          <p className="eyebrow eyebrow-with-dot text-xs mb-3">ALL FIVE VOLUMES</p>
          <h2 id="series-heading" className="font-serif text-4xl md:text-5xl mb-4">
            The Series · <span className="italic text-pink">$97</span>
          </h2>
          <p className="text-navy/70 mb-2 text-lg">P + H + A + S + E.</p>
          <p className="text-navy/70 mb-8">All five volumes. All daily templates. All frameworks. Saves $38.</p>
          <StripeButton href={STRIPE_LINKS.series} label="Buy the Series" variant="primary" />
        </div>
      </section>

      {/* Companion deep-dives · Journal + Decode */}
      <section className="max-w-content mx-auto px-6 py-16" aria-labelledby="companions-heading">
        <div className="text-center mb-12">
          <p className="eyebrow text-xs mb-3">THE COMPANIONS</p>
          <h2 id="companions-heading" className="font-serif text-4xl md:text-5xl">
            Two deep-dives. <span className="italic text-pink">For when one volume is not enough.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Reflections Journal · emotional companion */}
          <div className="bg-cream-alt rounded-sm border border-rule p-10 flex flex-col">
            <p className="eyebrow eyebrow-with-dot text-xs mb-3">EMOTIONAL COMPANION</p>
            <h3 className="font-serif text-3xl md:text-4xl mb-3">
              The Journal · <span className="italic text-pink">$19</span>
            </h3>
            <p className="font-serif italic text-pink mb-4">A space to feel it, not fix it.</p>
            <p className="text-ink/70 mb-6 flex-grow leading-relaxed">
              Reflections Through the PHASEs. 14 pages of guided prompts for the grief, identity shifts, and emotional terrain underneath the hot flashes. Move at your own pace.
            </p>
            <div className="flex items-center justify-between mt-auto">
              <Link href="/journal" className="text-sm text-pink-deep hover:underline font-semibold">
                Read more →
              </Link>
              <StripeButton href={STRIPE_LINKS.journal} label="Buy · $19" variant="primary" />
            </div>
          </div>

          {/* Decode Your Symptoms · action companion */}
          <div className="bg-cream-alt rounded-sm border border-rule p-10 flex flex-col">
            <p className="eyebrow eyebrow-with-dot text-xs mb-3">ACTION COMPANION</p>
            <h3 className="font-serif text-3xl md:text-4xl mb-3">
              Decode Your Symptoms · <span className="italic text-pink">$19</span>
            </h3>
            <p className="font-serif italic text-pink mb-4">Self-care is not soft. It is strategy.</p>
            <p className="text-ink/70 mb-6 flex-grow leading-relaxed">
              An 11-page science-backed companion. Nine chapters. Real exercises. Track-what-shifts framing. Build a routine that fits the woman you are becoming.
            </p>
            <div className="flex items-center justify-between mt-auto">
              <Link href="/decode" className="text-sm text-pink-deep hover:underline font-semibold">
                Read more →
              </Link>
              <StripeButton href={STRIPE_LINKS.decode} label="Buy · $19" variant="primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Email capture */}
      <EmailCapture variant="default" />

      {/* About preview */}
      <section className="max-w-content mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="eyebrow text-xs mb-3">FROM THE FOUNDER</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            I built this because <span className="italic text-pink">no one else did</span>.
          </h2>
          <p className="text-lg leading-relaxed text-navy/80 mb-4">
            I spent four years thinking I was failing at stress. I saw four different doctors. I tried every supplement. I optimized everything.
          </p>
          <p className="text-lg leading-relaxed text-navy/80 mb-6">
            Then a nurse practitioner finally listened. The PHASE™ is the conversation you should have been handed at 38, not had to fight for at 42.
          </p>
          <Link href="/about" className="btn-secondary">
            Read the full story →
          </Link>
        </div>

        <PullQuote variant="default" attribution="ERIKA HANAFIN AUSTRIA">
          My body is not a problem to solve. It is a partner to listen to.
        </PullQuote>
      </section>
    </>
  );
}
