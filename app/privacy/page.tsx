import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { MagazineMasthead } from '@/components/MagazineMasthead';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'How The PHASE™ collects, uses, and protects your information.',
  path: '/privacy',
  ogImage: '/og/legal.jpg',
});

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'The PHASE', url: 'https://thisisphase.co' },
              { name: 'Privacy', url: 'https://thisisphase.co/privacy' },
            ])
          ),
        }}
      />

      <MagazineMasthead
        issue="THE PHASE™ · PRIVACY POLICY"
        topics={['YOUR DATA · YOUR RIGHTS']}
        publishingNote="LAST UPDATED 2026-05-08"
      />

      <article className="max-w-3xl mx-auto px-6 py-20">
        <p className="eyebrow text-xs mb-6 text-pink">YOUR DATA</p>
        <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-12">
          Privacy Policy.
        </h1>

        <div className="space-y-6 text-navy/80 leading-relaxed text-lg">
          <p>
            This Privacy Policy describes how MOMumental Moments® (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;The PHASE™&rdquo;) collects, uses, and protects information when you visit thisisphase.co or purchase from us.
          </p>

          <h2 className="font-serif text-3xl mt-12 mb-4">1. What we collect</h2>
          <p><strong>Information you provide directly:</strong></p>
          <ul className="space-y-2 list-disc list-inside ml-4">
            <li>Email address (newsletter signup, purchase delivery)</li>
            <li>Payment information (collected and processed by Stripe; we do not store full payment details)</li>
            <li>Any voluntary information you send via email or contact form</li>
          </ul>
          <p className="mt-4"><strong>Information collected automatically:</strong></p>
          <ul className="space-y-2 list-disc list-inside ml-4">
            <li>Anonymized analytics: page views, referrer URLs, device type, browser, approximate location (country/region only)</li>
            <li>Cookies for essential site functionality</li>
          </ul>

          <h2 className="font-serif text-3xl mt-12 mb-4">2. How we use it</h2>
          <ul className="space-y-2 list-disc list-inside ml-4">
            <li>Deliver purchased PDFs and transactional receipts</li>
            <li>Send newsletter content (only if you opted in)</li>
            <li>Improve site content, layout, and performance</li>
            <li>Comply with legal, tax, and accounting obligations</li>
          </ul>

          <h2 className="font-serif text-3xl mt-12 mb-4">3. What we do NOT do</h2>
          <ul className="space-y-2 list-disc list-inside ml-4">
            <li>We do not sell your information.</li>
            <li>We do not rent your information.</li>
            <li>We do not share your email with third-party advertisers.</li>
            <li>We do not run advertising retargeting pixels.</li>
            <li>We do not engage in cross-site tracking beyond essential first-party analytics.</li>
          </ul>

          <h2 className="font-serif text-3xl mt-12 mb-4">4. Third-party processors</h2>
          <p>
            We use industry-standard service providers to operate the site: Stripe (payments), Vercel (hosting), our newsletter provider (email delivery), and a privacy-respecting analytics provider. Each processes data subject to its own privacy policy and our data processing agreements.
          </p>

          <h2 className="font-serif text-3xl mt-12 mb-4">5. Your rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. To make a request, email <a href="mailto:erika@erikahanafin.com" className="text-pink hover:underline">erika@erikahanafin.com</a>. We respond within 30 days.
          </p>
          <p>
            You may unsubscribe from our newsletter at any time using the unsubscribe link in any email.
          </p>
          <p>
            Note: purchase records may be retained for tax and legal compliance as required by U.S. law.
          </p>

          <h2 className="font-serif text-3xl mt-12 mb-4">6. Children</h2>
          <p>
            The PHASE™ is intended for adults 18 and older. We do not knowingly collect information from minors. If we learn we have collected information from a minor, we will delete it.
          </p>

          <h2 className="font-serif text-3xl mt-12 mb-4">7. Changes</h2>
          <p>
            We may update this Privacy Policy occasionally. The &ldquo;Last Updated&rdquo; date at the top reflects the most recent version. Continued use of thisisphase.co after changes indicates acceptance.
          </p>

          <h2 className="font-serif text-3xl mt-12 mb-4">8. Contact</h2>
          <p>
            Questions, concerns, or requests: <a href="mailto:erika@erikahanafin.com" className="text-pink hover:underline">erika@erikahanafin.com</a>
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-navy/20">
          <p className="eyebrow text-xs mb-3">RELATED</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/faq" className="btn-secondary">FAQ →</Link>
            <Link href="/disclaimer" className="btn-secondary">Medical Disclaimer →</Link>
            <Link href="/terms" className="btn-secondary">Terms →</Link>
          </div>
        </div>
      </article>
    </>
  );
}
