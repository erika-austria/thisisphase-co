import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { MagazineMasthead } from '@/components/MagazineMasthead';

export const metadata: Metadata = buildMetadata({
  title: 'You\'re in.',
  description: 'Thank you for joining The PHASE™. Check your inbox for your digital workbook.',
  path: '/thanks',
  noIndex: true,
});

export default function ThanksPage() {
  return (
    <>
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
              <span>If you bought The Series or Lifetime Pass, all volumes arrive in one welcome email.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-serif text-pink text-2xl flex-shrink-0">03</span>
              <span>Tag <a href="https://www.instagram.com/thisisphaseco" className="text-pink hover:underline">@thisisphaseco</a> when you post a screenshot. I want to see what lands.</span>
            </li>
          </ol>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/series" className="btn-primary">See the full series →</Link>
          <Link href="/community" className="btn-secondary">Join the community →</Link>
        </div>
      </section>
    </>
  );
}
