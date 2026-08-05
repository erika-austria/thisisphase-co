import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { STRIPE_LINKS } from '@/lib/stripe';
import { MagazineMasthead } from '@/components/MagazineMasthead';
import { EmailCapture } from '@/components/EmailCapture';
import { StripeButton } from '@/components/StripeButton';

export const metadata: Metadata = buildMetadata({
  title: 'Community · The PHASE™',
  description: 'Weekly notes from Erika, the full PHASE™ Series, and two companion deep-dives. The body-truth conversation that should have started at 38.',
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
        topics={['WEEKLY NOTES', 'THE SERIES', 'COMPANIONS']}
        publishingNote="STAY CLOSE"
      />

      <section className="max-w-3xl mx-auto px-6 pt-20 pb-12 text-center">
        <p className="eyebrow text-xs mb-6 text-pink">STAY CLOSE</p>
        <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-6">
          For the women rebuilding <span className="italic text-pink">everything that matters</span>.
        </h1>
        <p className="text-lg md:text-xl text-navy/80 leading-relaxed">
          Weekly notes from the front lines of perimenopause, hormones, and reinvention. Built around the PHASE™ method. No fluff. No funnels. Just the body-truth.
        </p>
      </section>

      <section className="max-w-content mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <article className="bg-cream-alt rounded-sm border border-navy/10 p-10 flex flex-col">
          <p className="eyebrow text-xs mb-3 text-pink">FREE</p>
          <h2 className="font-serif text-3xl mb-4">Weekly notes by email.</h2>
          <p className="text-navy/70 leading-relaxed mb-6">
            Practical body-truth in your inbox. No more than once a week. Unsubscribe any time.
          </p>
          <ul className="space-y-2 text-navy/80 mb-6 flex-grow">
            <li className="flex gap-2"><span className="text-pink">●</span> Pull quotes you can screenshot</li>
            <li className="flex gap-2"><span className="text-pink">●</span> Lab questions to bring to your next appointment</li>
            <li className="flex gap-2"><span className="text-pink">●</span> Reset mantras before the week starts</li>
          </ul>
          <p className="text-xs text-navy/50 italic mt-auto">Sign up below.</p>
        </article>

        <article className="bg-navy text-cream rounded-sm p-10 bracket-pink flex flex-col">
          <p className="eyebrow eyebrow-pink text-xs mb-3">$97 THE SERIES</p>
          <h2 className="font-serif text-3xl mb-4">All five volumes.</h2>
          <p className="text-cream/80 leading-relaxed mb-6">
            The full PHASE™ Series. Five volumes covering perimenopause, hormones, daily architecture, self-trust, and execution. Yours forever.
          </p>
          <ul className="space-y-2 text-cream/90 mb-8 flex-grow">
            <li className="flex gap-2"><span className="text-pink">●</span> Vol. I · Perimenopause</li>
            <li className="flex gap-2"><span className="text-pink">●</span> Vol. II · Hormones</li>
            <li className="flex gap-2"><span className="text-pink">●</span> Vol. III · Architecture</li>
            <li className="flex gap-2"><span className="text-pink">●</span> Vol. IV · Self-trust</li>
            <li className="flex gap-2"><span className="text-pink">●</span> Vol. V · Execution</li>
          </ul>
          <div className="mt-auto">
            <StripeButton href={STRIPE_LINKS.series} label="Get the Series · $97" variant="pink" />
            <p className="mt-4 text-xs text-cream/60">
              Want a deeper companion? <Link href="/journal" className="text-pink hover:underline">The Journal</Link> or <Link href="/decode" className="text-pink hover:underline">Decode Your Symptoms</Link>, $19 each.
            </p>
          </div>
        </article>
      </section>

      <EmailCapture variant="default" />
    </>
  );
}
