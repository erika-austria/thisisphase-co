import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { VOLUMES, getVolume, getRelatedVolumes } from '@/lib/volumes';
import { buildMetadata } from '@/lib/seo';
import { volumeProductSchema, breadcrumbSchema } from '@/lib/schema';
import { getStripeLinkForVolume, STRIPE_LINKS } from '@/lib/stripe';
import { MagazineMasthead } from '@/components/MagazineMasthead';
import { VolumeCard } from '@/components/VolumeCard';
import { PullQuote } from '@/components/PullQuote';
import { AffiliateStrip } from '@/components/AffiliateStrip';
import { StripeButton } from '@/components/StripeButton';

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return VOLUMES.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const volume = getVolume(slug);
  if (!volume) return {};
  return buildMetadata({
    title: volume.fullTitle,
    description: volume.description,
    path: `/vol/${volume.slug}`,
    ogImage: volume.ogImage,
    type: 'product',
    publishedTime: volume.publishedAt,
    modifiedTime: volume.updatedAt,
  });
}

export default async function VolumePage({ params }: Params) {
  const { slug } = await params;
  const volume = getVolume(slug);
  if (!volume) notFound();

  const related = getRelatedVolumes(volume.slug, 2);
  const stripeUrl = getStripeLinkForVolume(volume.slug, 'entry');
  const anchorUrl = getStripeLinkForVolume(volume.slug, 'anchor');

  return (
    <>
      {/* Per-page JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            volumeProductSchema(volume),
            breadcrumbSchema([
              { name: 'The PHASE', url: 'https://thisisphase.co' },
              { name: volume.fullTitle, url: `https://thisisphase.co/vol/${volume.slug}` },
            ]),
          ]),
        }}
      />

      {/* Masthead */}
      <MagazineMasthead
        issue={`THE PHASE™ · VOL. ${volume.numeral}`}
        topics={[volume.title.toUpperCase()]}
        publishingNote={`${volume.pdfPages} PAGES · DIGITAL`}
      />

      {/* Hero */}
      <section className="max-w-content mx-auto px-6 pt-16 md:pt-20 pb-16 grid md:grid-cols-5 gap-12 items-center">
        {/* Cover · CSS-rendered editorial */}
        <div className="md:col-span-2">
          <div
            className="aspect-[4/5] relative overflow-hidden border border-ink/10"
            style={{
              backgroundColor:
                volume.letter === 'P' ? '#fff9f1'
                : volume.letter === 'H' ? '#fce7f7'
                : volume.letter === 'A' ? '#f1e8da'
                : volume.letter === 'S' ? '#fbd7f1'
                : '#e8dec9',
            }}
          >
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink/50">The PHASE™</span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink/50">VOL. {volume.numeral}</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="font-serif italic leading-none"
                style={{
                  fontSize: 'clamp(10rem, 22vw, 18rem)',
                  color: volume.letter === 'A' ? '#1a1410' : volume.letter === 'S' ? '#1d2f3d' : '#c95cb0',
                  fontWeight: 500,
                  letterSpacing: '-0.04em',
                }}
              >
                {volume.letter}
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-center">
              <p className="font-serif text-xl text-ink/80 italic">{volume.title}</p>
            </div>
          </div>
        </div>

        {/* Headline + buy */}
        <div className="md:col-span-3">
          <p className="eyebrow text-xs mb-4">
            <span className="text-pink font-bold mr-2">{volume.letter}</span>
            VOL. {volume.numeral} · {volume.title.toUpperCase()}
          </p>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-6">
            {volume.title}.
          </h1>
          <p className="font-serif italic text-2xl md:text-3xl text-pink mb-8 leading-snug">
            {volume.tagline}
          </p>
          <p className="text-lg leading-relaxed text-navy/80 mb-10 max-w-2xl">
            {volume.longDescription}
          </p>

          {/* Buy buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            <StripeButton
              href={stripeUrl}
              label={`Buy Vol. ${volume.numeral} · Entry`}
              price={volume.price}
              variant="primary"
            />
            <StripeButton
              href={anchorUrl}
              label="With coaching prompts"
              price={volume.anchorPrice}
              variant="secondary"
            />
          </div>
          <p className="text-sm text-navy/60">
            Or get all five for <Link href="/series" className="text-pink hover:underline">$97 (saves $38)</Link>.
          </p>
        </div>
      </section>

      {/* Reset Mantra · pull quote */}
      <PullQuote variant="manifesto" attribution={`RESET MANTRA · VOL. ${volume.numeral}`}>
        {volume.resetMantra}
      </PullQuote>

      {/* What's inside · components grid */}
      <section className="max-w-content mx-auto px-6 py-20" aria-labelledby="components-heading">
        <div className="text-center mb-12">
          <p className="eyebrow text-xs mb-3">WHAT&apos;S INSIDE</p>
          <h2 id="components-heading" className="font-serif text-4xl md:text-5xl">
            {volume.components.length} components. <span className="italic text-pink">One body-truth.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {volume.components.map((c) => (
            <article key={c.number} className="border-l-2 border-pink/30 pl-6">
              <p className="eyebrow text-xs text-pink mb-2">COMPONENT {c.number}</p>
              <h3 className="font-serif text-2xl mb-2">{c.title}</h3>
              <p className="text-navy/70 leading-relaxed">{c.summary}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Affiliate strip · MOVED UP per Erika's framework · only on Hormones */}
      {volume.hasAffiliates && <AffiliateStrip variant="hormones" />}

      {/* Pull quotes from the volume */}
      <section className="bg-cream-alt py-20 px-6" aria-labelledby="quotes-heading">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow text-xs mb-3 text-center">SCREENSHOT-BAIT</p>
          <h2 id="quotes-heading" className="font-serif text-3xl md:text-4xl text-center mb-12">
            Lines from inside.
          </h2>
          <div className="space-y-12">
            {volume.pullQuotes.slice(0, 4).map((q, i) => (
              <PullQuote key={i} variant="default" attribution={`VOL. ${volume.numeral}`}>
                {q}
              </PullQuote>
            ))}
          </div>
        </div>
      </section>

      {/* Who this is for · two-column */}
      <section className="max-w-content mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <div>
          <p className="eyebrow text-xs mb-3 text-pink">WHO THIS IS FOR</p>
          <h3 className="font-serif text-3xl mb-6">If any of these are you, this volume is for you.</h3>
          <ul className="space-y-3">
            {volume.whoFor.map((item, i) => (
              <li key={i} className="flex gap-3 text-navy/80 leading-relaxed">
                <span className="text-pink mt-1.5">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-xs mb-3 text-navy/60">WHO THIS IS NOT FOR</p>
          <h3 className="font-serif text-3xl mb-6">Skip this volume if any of these describe you.</h3>
          <ul className="space-y-3">
            {volume.whoNotFor.map((item, i) => (
              <li key={i} className="flex gap-3 text-navy/60 leading-relaxed">
                <span className="text-navy/40 mt-1.5">○</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sticky-style buy bar */}
      <section className="bg-navy text-cream py-16 px-6 text-center">
        <p className="eyebrow eyebrow-pink text-xs mb-3">YOUR NEXT MOVE</p>
        <h2 className="font-serif text-4xl md:text-5xl mb-6">
          Vol. {volume.numeral} · <span className="italic text-pink">${volume.price}</span>
        </h2>
        <div className="flex flex-wrap gap-3 justify-center">
          <StripeButton href={stripeUrl} label={`Buy Vol. ${volume.numeral}`} variant="pink" />
          <Link href="/series" className="btn-secondary border-cream text-cream hover:bg-cream hover:text-navy">
            Or all five for $97 →
          </Link>
        </div>
      </section>

      {/* Related volumes */}
      <section className="max-w-content mx-auto px-6 py-20" aria-labelledby="related-heading">
        <p className="eyebrow text-xs mb-3 text-center">CONTINUE THE SERIES</p>
        <h2 id="related-heading" className="font-serif text-3xl md:text-4xl text-center mb-12">
          You might also need these.
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {related.map((v) => (
            <VolumeCard key={v.slug} volume={v} />
          ))}
        </div>
      </section>
    </>
  );
}
