import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { MagazineMasthead } from '@/components/MagazineMasthead';

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Use',
  description: 'Terms of use for thisisphase.co and The PHASE™ products.',
  path: '/terms',
  ogImage: '/og/legal.jpg',
});

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'The PHASE', url: 'https://thisisphase.co' },
              { name: 'Terms', url: 'https://thisisphase.co/terms' },
            ])
          ),
        }}
      />

      <MagazineMasthead
        issue="THE PHASE™ · TERMS OF USE"
        topics={['LICENSE · IP · LIABILITY']}
        publishingNote="LAST UPDATED 2026-05-08"
      />

      <article className="max-w-3xl mx-auto px-6 py-20">
        <p className="eyebrow text-xs mb-6 text-pink">FINE PRINT</p>
        <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-12">
          Terms of Use.
        </h1>

        <div className="space-y-6 text-navy/80 leading-relaxed text-lg">
          <p>
            By using thisisphase.co or purchasing from us, you agree to these Terms of Use. Read them carefully.
          </p>

          <h2 className="font-serif text-3xl mt-12 mb-4">1. License to use</h2>
          <p>
            Each PHASE™ volume purchase grants you a personal, non-exclusive, non-transferable license to access and use the digital workbook for your own personal use. You may not redistribute, resell, post publicly, or share login credentials. Each purchase is for one user.
          </p>

          <h2 className="font-serif text-3xl mt-12 mb-4">2. Intellectual property</h2>
          <p>
            All content on thisisphase.co and within The PHASE™ workbooks (text, graphics, frameworks, mantras, decision trees, templates) is the intellectual property of MOMumental Moments®. The PHASE™ and MOMumental Moments® are trademarks of MOMumental Moments®.
          </p>
          <p>
            Brief quotation for personal, non-commercial use with attribution is permitted. Commercial use, framework licensing, and republication require written permission.
          </p>

          <h2 className="font-serif text-3xl mt-12 mb-4">3. Refunds</h2>
          <p>
            Because PHASE™ volumes are digital products delivered immediately, all sales are final. No refunds. If you experience a delivery problem, contact <a href="mailto:erika@erikahanafin.com" className="text-pink hover:underline">erika@erikahanafin.com</a>.
          </p>

          <h2 className="font-serif text-3xl mt-12 mb-4">4. Educational content only</h2>
          <p>
            See <Link href="/disclaimer" className="text-pink hover:underline">Medical Disclaimer</Link>. The PHASE™ is educational, not medical advice. Always consult your licensed healthcare provider.
          </p>

          <h2 className="font-serif text-3xl mt-12 mb-4">5. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, MOMumental Moments®, Erika Hanafin Austria, and any affiliated parties are not liable for any direct, indirect, incidental, consequential, or punitive damages arising from use of this website, the PHASE™ workbooks, or any related content.
          </p>

          <h2 className="font-serif text-3xl mt-12 mb-4">6. Affiliate links</h2>
          <p>
            This site contains affiliate links. As an Amazon Associate we earn from qualifying purchases. JOi + Blokes referrals may result in compensation. We only recommend products and services we personally use.
          </p>

          <h2 className="font-serif text-3xl mt-12 mb-4">7. Changes</h2>
          <p>
            We may update these Terms occasionally. Continued use of the site after changes indicates acceptance.
          </p>

          <h2 className="font-serif text-3xl mt-12 mb-4">8. Governing law</h2>
          <p>
            These Terms are governed by the laws of the Commonwealth of Virginia, United States, without regard to conflict of law principles.
          </p>

          <h2 className="font-serif text-3xl mt-12 mb-4">9. Contact</h2>
          <p>
            <a href="mailto:erika@erikahanafin.com" className="text-pink hover:underline">erika@erikahanafin.com</a>
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-navy/20">
          <p className="eyebrow text-xs mb-3">RELATED</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/faq" className="btn-secondary">FAQ →</Link>
            <Link href="/disclaimer" className="btn-secondary">Medical Disclaimer →</Link>
            <Link href="/privacy" className="btn-secondary">Privacy →</Link>
          </div>
        </div>
      </article>
    </>
  );
}
