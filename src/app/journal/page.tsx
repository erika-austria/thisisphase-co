import Link from 'next/link';
import type { Metadata } from 'next';
import { JOURNAL } from '@/lib/volumes';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, journalProductSchema } from '@/lib/schema';
import { STRIPE_LINKS } from '@/lib/stripe';
import { MagazineMasthead } from '@/components/MagazineMasthead';
import { PullQuote } from '@/components/PullQuote';
import { StripeButton } from '@/components/StripeButton';

export const metadata: Metadata = buildMetadata({
  title: 'Reflections Through the PHASEs · The Journal · $19',
  description: JOURNAL.description,
  path: '/journal',
  ogImage: JOURNAL.ogImage,
  type: 'product',
});

export default function JournalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            journalProductSchema(),
            breadcrumbSchema([
              { name: 'The PHASE', url: 'https://thisisphase.co' },
              { name: JOURNAL.title, url: 'https://thisisphase.co/journal' },
            ]),
          ]),
        }}
      />

      <MagazineMasthead
        issue="THE PHASE™ · THE JOURNAL"
        topics={['EMOTIONAL COMPANION', 'GRIEF + IDENTITY', 'GUIDED PROMPTS']}
        publishingNote={`${JOURNAL.pdfPages} PAGES · DIGITAL`}
      />

      <section className="max-w-content mx-auto px-6 pt-16 md:pt-20 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="eyebrow text-xs mb-4">RESERVED COMPANION</p>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-6">
            A space to <span className="italic text-pink">feel it</span>, not fix it.
          </h1>
          <p className="text-lg md:text-xl text-ink/80 leading-relaxed mb-8">
            Reflections Through the PHASEs is the 14-page guided journal for the emotional terrain underneath the hot flashes. Grief. Identity shifts. The part of menopause nobody warned you about.
          </p>
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-serif text-5xl text-ink">${JOURNAL.price}</span>
            <span className="font-serif italic text-xl text-ink/60">14 pages · digital</span>
          </div>
          <StripeButton href={STRIPE_LINKS.journal} label="Buy the Journal" variant="primary" />
        </div>

        <div className="bg-cream-alt rounded-sm border border-rule p-10 bracket-pink">
          <p className="eyebrow eyebrow-with-dot text-xs mb-6">WHAT THE JOURNAL OFFERS</p>
          <ul className="space-y-4 text-lg leading-relaxed text-ink/80">
            <li className="flex gap-3"><span className="text-pink-deep">●</span> Prompts that pause you long enough to hear yourself</li>
            <li className="flex gap-3"><span className="text-pink-deep">●</span> Space to process grief, identity shifts, and change</li>
            <li className="flex gap-3"><span className="text-pink-deep">●</span> A pacing tool that moves at your speed, not the calendar's</li>
            <li className="flex gap-3"><span className="text-pink-deep">●</span> Companion to Vol. I (Perimenopause) and Vol. IV (Self-trust)</li>
          </ul>
        </div>
      </section>

      <PullQuote variant="manifesto" attribution="THE JOURNAL · 2026">
        Grief is not linear.
        <br />
        It ebbs and flows.
        <br />
        <span className="italic text-pink">This journal moves at your pace.</span>
      </PullQuote>

      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="eyebrow text-xs mb-3 text-pink">WHO THIS IS FOR</p>
        <h2 className="font-serif text-4xl mb-6">If you have been holding it together. This is permission.</h2>
        <div className="space-y-6 text-lg leading-relaxed text-ink/80">
          <p>
            Some women want a workbook. Frameworks, decision trees, things to track. The volumes are for that.
          </p>
          <p>
            Some women want a place to put the rest of it. The grief that does not fit on a chart. The identity that is shifting before you can name it. The part of menopause that is not symptoms · it is becoming.
          </p>
          <p>
            This journal is for that.
          </p>
        </div>
      </section>

      <section className="bg-navy text-cream py-20 px-6 text-center">
        <p className="eyebrow eyebrow-pink text-xs mb-3">YOUR NEXT MOVE</p>
        <h2 className="font-serif text-4xl md:text-5xl mb-6">
          Reflections Journal · <span className="italic text-pink">${JOURNAL.price}</span>
        </h2>
        <StripeButton href={STRIPE_LINKS.journal} label="Buy the Journal" variant="pink" />
        <p className="mt-6 text-sm text-cream/60">
          Or start with <Link href="/series" className="text-pink hover:underline">The Series at $97</Link>.
        </p>
      </section>
    </>
  );
}
