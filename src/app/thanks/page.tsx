import { Suspense } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { MagazineMasthead } from '@/components/MagazineMasthead';
import { PurchaseTracker } from '@/components/PurchaseTracker';
import { STRIPE_LINKS } from '@/lib/stripe';

export const metadata: Metadata = buildMetadata({
  title: 'You\'re in.',
  description: 'Thank you for joining The PHASE™. Check your inbox for your digital workbook.',
  path: '/thanks',
  noIndex: true,
});

export default function ThanksPage() {
  return (
    <>
      {/* Fires GA4 + Meta Pixel Purchase events once on load (deduped by sessionStorage). */}
      <Suspense fallback={null}>
        <PurchaseTracker />
      </Suspense>

      <MagazineMasthead
        issue="THE PHASE™"
        topics={['CONFIRMATION']}
        publishingNote="WELCOME"
      />

      <section className="max-w-3xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="eyebrow text-xs mb-6 text-pink">CONFIRMED</p>
        <h1 className="font-serif text-6xl md:text-7xl leading-tight mb-8">
          You&apos;re <span className="italic text-pink">in</span>.
        </h1>
        <p className="text-lg md:text-xl text-navy/80 leading-relaxed mb-12 max-w-2xl mx-auto">
          Your PHASE™ workbook is on its way to your inbox. If you do not see it within 5 minutes, check spam or email <a href="mailto:erika@erikahanafin.com" className="text-pink hover:underline">erika@erikahanafin.com</a>.
        </p>

        <div className="bg-cream-alt rounded-sm border border-navy/10 p-10 text-left mb-12">
          <p className="eyebrow text-xs mb-4 text-pink">WHAT HAPPENS NEXT</p>
          <ol className="space-y-4 text-navy/80 leading-relaxed">
            <li className="flex gap-3">
              <span className="font-serif text-pink text-2xl flex-shrink-0">01</span>
              <span>Your PDF lands in your inbox within 5 minutes. Save it. Print it if you want. Use it.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-serif text-pink text-2xl flex-shrink-0">02</span>
              <span>If you bought The Series, all five volumes arrive in one welcome email.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-serif text-pink text-2xl flex-shrink-0">03</span>
              <span>Tag <a href="https://www.instagram.com/thisisphaseco" className="text-pink hover:underline">@thisisphaseco</a> when you post a screenshot. I want to see what lands.</span>
            </li>
          </ol>
        </div>

        {/* Post-purchase CTAs · Series upgrade ($70 customer-only price) + Substack subscribe direct.
            Updated Thu May 21 PM 2026:
            · "Complete the Series" → $70 upgrade Stripe Payment Link (was /series at $97 · wrong tier for existing customers)
              Per locked pricing rule: existing buyers get Series upgrade at $70 ($97 minus $27 already paid)
            · "Subscribe to Substack" → direct subscribe URL (was /community explainer page · friction removed) */}
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={STRIPE_LINKS.seriesUpgrade}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Complete the Series · $70 →
          </a>
          <a
            href="https://www.momumentalreinvention.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Subscribe to the Substack →
          </a>
        </div>
        <p className="text-sm text-navy/60 mt-4 italic">
          You already paid for one Volume. The Series upgrade is $70 for all five (vs $97 public price).
        </p>
      </section>
    </>
  );
}
