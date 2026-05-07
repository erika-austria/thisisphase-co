import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { MagazineMasthead } from '@/components/MagazineMasthead';
import { EmailCapture } from '@/components/EmailCapture';

export const metadata: Metadata = buildMetadata({
  title: 'Community · The PHASE™ Founding Cohort',
  description: 'Join the founding cohort of women rebuilding everything that matters. Weekly notes, community access, and the body-truth conversation that should have started at 38.',
  path: '/community',
  ogImage: '/og/community.jpg',
});

export default function CommunityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'The PHASE', url: 'https://thisisphase.co' },
              { name: 'Community', url: 'https://thisisphase.co/community' },
            ])
          ),
        }}
      />

      <MagazineMasthead
        issue="THE PHASE™ · COMMUNITY"
        topics={['FOUNDING COHORT', 'WEEKLY NOTES']}
        publishingNote="OPEN ENROLLMENT"
      />

      <section className="max-w-3xl mx-auto px-6 pt-20 pb-12 text-center">
        <p className="eyebrow text-xs mb-6 text-pink">JOIN THE FOUNDING COHORT</p>
        <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-6">
          The first 100 women rebuilding <span className="italic text-pink">everything that matters</span>.
        </h1>
        <p className="text-lg md:text-xl text-navy/80 leading-relaxed">
          Weekly notes from the front lines of perimenopause, hormones, and reinvention. Built around the PHASE™ method. No fluff. No funnels. Just the body-truth.
        </p>
      </section>

      <section className="max-w-content mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <article className="bg-cream-alt rounded-sm border border-navy/10 p-10">
          <p className="eyebrow text-xs mb-3 text-pink">FREE</p>
          <h2 className="font-serif text-3xl mb-4">Weekly notes by email.</h2>
          <p className="text-navy/70 leading-relaxed mb-6">
            Practical body-truth in your inbox. No more than once a week. Unsubscribe any time.
          </p>
          <ul className="space-y-2 text-navy/80 mb-6">
            <li className="flex gap-2"><span className="text-pink">●</span> Pull quotes you can screenshot</li>
            <li className="flex gap-2"><span className="text-pink">●</span> Lab questions to bring to your next appointment</li>
            <li className="flex gap-2"><span className="text-pink">●</span> Reset mantras before the week starts</li>
          </ul>
        </article>

        <article className="bg-navy text-cream rounded-sm p-10 bracket-pink">
          <p className="eyebrow eyebrow-pink text-xs mb-3">$197 LIFETIME PASS</p>
          <h2 className="font-serif text-3xl mb-4">Founding cohort access.</h2>
          <p className="text-cream/80 leading-relaxed mb-6">
            All five volumes. Every future update. Private community. Monthly Lives. One payment, kept forever.
          </p>
          <ul className="space-y-2 text-cream/90 mb-8">
            <li className="flex gap-2"><span className="text-pink">●</span> All five PHASE™ volumes</li>
            <li className="flex gap-2"><span className="text-pink">●</span> Every future release · Vol. VI and beyond</li>
            <li className="flex gap-2"><span className="text-pink">●</span> Founding-cohort community space</li>
            <li className="flex gap-2"><span className="text-pink">●</span> Monthly Lives with Erika (TBA)</li>
          </ul>
          <Link href="/lifetime" className="btn-pink">Get Lifetime Access →</Link>
        </article>
      </section>

      <EmailCapture variant="default" />
    </>
  );
}
