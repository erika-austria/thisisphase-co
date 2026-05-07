import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';
import { MagazineMasthead } from '@/components/MagazineMasthead';

export const metadata: Metadata = buildMetadata({
  title: 'FAQ · Compliance, refunds, access, and the fine print',
  description: 'Everything you need to know about The PHASE™. Medical disclaimers, affiliate disclosures, refund policy, access terms, and privacy. From MOMumental Moments®.',
  path: '/faq',
  ogImage: '/og/faq.jpg',
});

type FAQItem = { question: string; answer: string };
type FAQSection = { id: string; title: string; eyebrow: string; items: FAQItem[] };

const SECTIONS: FAQSection[] = [
  {
    id: 'medical',
    title: 'Medical disclaimers + scope',
    eyebrow: 'NOT MEDICAL ADVICE',
    items: [
      {
        question: 'Is The PHASE™ medical advice?',
        answer: 'No. The PHASE™ is educational content from a certified holistic health coach. It is not medical advice, diagnosis, or treatment. Always consult your licensed healthcare provider before making changes to medications, supplements, hormone protocols, or any treatment plan. Nothing on this site or in any volume should be interpreted as a substitute for professional medical care.',
      },
      {
        question: 'What are Erika\'s credentials?',
        answer: 'Erika Hanafin Austria is an IIN Certified Holistic Health Coach (Institute for Integrative Nutrition). She is not a medical doctor (MD), doctor of osteopathy (DO), nurse practitioner, physician assistant, registered dietitian, or licensed therapist. She does not diagnose, treat, cure, or prevent any disease.',
      },
      {
        question: 'Will The PHASE™ tell me what hormones to take or what dose?',
        answer: 'No. The PHASE™ teaches you how to ask the right questions and have informed conversations with your healthcare provider. Specific dosing, prescription decisions, and protocol design are exclusively the domain of your licensed medical provider.',
      },
      {
        question: 'I have a medical condition. Can I use The PHASE™?',
        answer: 'Always discuss any new educational resource, supplement, or lifestyle change with your treating physician, especially if you have an existing medical condition, are pregnant or breastfeeding, are taking medications, or have a history of breast cancer, blood clots, liver disease, or hormone-sensitive conditions. The PHASE™ does not screen for individual medical contraindications.',
      },
      {
        question: 'Is The PHASE™ appropriate for minors?',
        answer: 'No. The PHASE™ is intended for women age 18 and older. Content addresses perimenopause, hormone replacement therapy, and adult health decisions.',
      },
    ],
  },
  {
    id: 'affiliates',
    title: 'Affiliate disclosures',
    eyebrow: 'FTC COMPLIANT',
    items: [
      {
        question: 'Are there affiliate links on this site?',
        answer: 'Yes. The PHASE™ uses affiliate links for two partners: JOi + Blokes Health (telehealth hormone optimization) and Amazon Associates (the My Hormone Stack idea list at amazon.com/shop/erikahanafin). When you click an affiliate link and purchase, Erika may earn a commission at no additional cost to you. In some cases (JOi + Blokes Health), you receive a discount when using her referral link.',
      },
      {
        question: 'Why does The PHASE™ recommend JOi + Blokes Health?',
        answer: 'Erika personally uses telehealth as one path to hormone care. JOi + Blokes Health is featured because it is a national platform with board-certified providers, full panels, and customizable HRT protocols. Her referral code (003UI00000gvOFcYAM) gives readers $50 off their first order. The recommendation is editorial, not paid placement. She would recommend it whether the affiliate program existed or not.',
      },
      {
        question: 'Why does The PHASE™ link to an Amazon storefront?',
        answer: 'The Amazon storefront (amazon.com/shop/erikahanafin) curates the actual supplements Erika takes. The "My Hormone Stack" idea list is included in Vol. II as a bonus. As an Amazon Associate she earns from qualifying purchases. Tracking ID: erikafeldhus-20. Every product linked is one Erika personally uses.',
      },
      {
        question: 'Can I trust the affiliate recommendations?',
        answer: 'Erika only recommends products she personally uses or providers she has personal experience with. She does not accept paid placement, sponsored content, or pay-to-play affiliate programs. If a product no longer meets her standards, the link is removed.',
      },
    ],
  },
  {
    id: 'access',
    title: 'Access, delivery, and refunds',
    eyebrow: 'WHAT YOU GET',
    items: [
      {
        question: 'How is The PHASE™ delivered?',
        answer: 'After your Stripe purchase, you receive an email within 5 minutes containing your PDF download link(s). Save the file to your device, print if you like, and access it whenever you need.',
      },
      {
        question: 'How long do I have access to my volume(s)?',
        answer: 'Forever. Once delivered, the PDF is yours to keep. There is no subscription, no expiration, and no recurring charge. The PHASE™ Lifetime Pass adds future updates and community access.',
      },
      {
        question: 'I did not receive my email. What do I do?',
        answer: 'Check your spam folder. If you still cannot find it, email erika@erikahanafin.com with your Stripe receipt and we will resend.',
      },
      {
        question: 'What is the refund policy?',
        answer: 'Because The PHASE™ volumes are digital products delivered immediately upon purchase, all sales are final. We do not offer refunds. Please review the volume preview, the FAQ, and the description carefully before purchasing. If you experience a delivery problem, email erika@erikahanafin.com and we will resolve it.',
      },
      {
        question: 'Can I share my volume with a friend or family member?',
        answer: 'Each purchase is licensed for personal use only. Do not redistribute, resell, post publicly, or share login credentials. If you want to gift The PHASE™, please buy a second copy.',
      },
      {
        question: 'What happens if I bought The Series and a new volume is published later?',
        answer: 'The Series ($97) includes the five current volumes only. The Lifetime Pass ($197) includes all current volumes plus every future volume Erika ever releases. To upgrade from Series to Lifetime, email erika@erikahanafin.com.',
      },
    ],
  },
  {
    id: 'community',
    title: 'Community + Lifetime Pass',
    eyebrow: 'FOUNDING COHORT',
    items: [
      {
        question: 'What is the founding cohort?',
        answer: 'The founding cohort is the first community of Lifetime Pass holders. It includes a private community space, monthly Lives with Erika, and direct access to ask questions about the PHASE™ frameworks. Specific platform and cadence will be announced to Lifetime Pass holders before launch.',
      },
      {
        question: 'When does the community open?',
        answer: 'Date to be announced. Lifetime Pass holders will receive email updates as community details are finalized. Your Lifetime Pass purchase reserves your founding-cohort spot regardless of when the community formally launches.',
      },
      {
        question: 'Is there a refund on the Lifetime Pass?',
        answer: 'Same policy as individual volumes. All digital sales are final. The Lifetime Pass includes immediate access to all current volumes plus locked-in community access.',
      },
    ],
  },
  {
    id: 'privacy',
    title: 'Privacy + data handling',
    eyebrow: 'YOUR INFORMATION',
    items: [
      {
        question: 'What information do you collect?',
        answer: 'When you purchase a volume, Stripe collects your email and payment information directly (we do not store payment details on our servers). When you join the newsletter, we collect your email address only. When you visit thisisphase.co, our analytics provider collects anonymized traffic data (page views, referrers, device type). We do not collect names, addresses, phone numbers, or sensitive demographic data unless you provide them directly.',
      },
      {
        question: 'How is my email used?',
        answer: 'Your email is used to deliver your purchased PDFs, send transactional receipts, and (if you opted in) deliver The PHASE™ newsletter. We do not sell, rent, or share your email with third parties. Unsubscribe at any time by clicking the unsubscribe link in any email.',
      },
      {
        question: 'Do you use cookies or tracking pixels?',
        answer: 'Yes, in limited form. We use first-party analytics for site performance (page views, referrers). We do not run advertising retargeting pixels. We do not sell or share your activity with advertising networks. By using thisisphase.co you consent to this baseline analytics use.',
      },
      {
        question: 'How do I request my data or have it deleted?',
        answer: 'Email erika@erikahanafin.com with your request. We respond to data access and deletion requests within 30 days. Note that purchase records may be retained for tax and accounting purposes as required by law.',
      },
    ],
  },
  {
    id: 'ip',
    title: 'Trademark, IP, and the fine print',
    eyebrow: 'THE PHASE™',
    items: [
      {
        question: 'Is The PHASE™ trademarked?',
        answer: 'Yes. The PHASE™ is a trademark of MOMumental Moments®, the parent brand founded by Erika Hanafin Austria. MOMumental Moments® is a registered trademark.',
      },
      {
        question: 'Can I quote or share the volumes?',
        answer: 'Brief quotation for personal, non-commercial use with proper attribution is permitted. Do not reproduce entire pages, distribute the PDFs publicly, or use volume content commercially without written permission. Tag @thisisphaseco when sharing screenshots on social media.',
      },
      {
        question: 'Can I use the PHASE™ frameworks in my own coaching practice?',
        answer: 'No, not without licensing. The PHASE™ frameworks (HRT Decision Tree, PHASE Pattern, Daily Architecture practices, etc.) are proprietary intellectual property of MOMumental Moments®. For commercial licensing inquiries, email erika@erikahanafin.com.',
      },
      {
        question: 'I see a brand called "PHASE Wellness" online. Are you affiliated?',
        answer: 'No. The PHASE™ by MOMumental Moments® is not affiliated with any other brand using "PHASE" or related variations. The PHASE™ is owned and operated by Erika Hanafin Austria. Our domains are thisisphase.co and phasewellness.co. Our Instagram is @thisisphaseco.',
      },
    ],
  },
];

export default function FAQPage() {
  // Build FAQ schema for SEO/AI surfacing
  const allFAQs = SECTIONS.flatMap((s) => s.items);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            faqSchema(allFAQs),
            breadcrumbSchema([
              { name: 'The PHASE', url: 'https://thisisphase.co' },
              { name: 'FAQ', url: 'https://thisisphase.co/faq' },
            ]),
          ]),
        }}
      />

      <MagazineMasthead
        issue="THE PHASE™ · FAQ"
        topics={['COMPLIANCE', 'REFUNDS', 'PRIVACY', 'TRADEMARK']}
        publishingNote="LAST UPDATED 2026-05-08"
      />

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-12">
        <p className="eyebrow text-xs mb-6 text-pink">QUESTIONS · ANSWERS · FINE PRINT</p>
        <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-6">
          The receipts. <span className="italic text-pink">In writing.</span>
        </h1>
        <p className="text-lg leading-relaxed text-navy/80">
          Everything you need to know before buying, downloading, and using The PHASE™. Medical scope, affiliate disclosures, refund policy, privacy, and trademark. Read once. Reference whenever.
        </p>
      </section>

      {/* Table of contents */}
      <nav className="max-w-3xl mx-auto px-6 mb-16" aria-label="FAQ sections">
        <p className="eyebrow text-xs mb-4">JUMP TO</p>
        <ul className="grid sm:grid-cols-2 gap-3">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="block bg-cream-alt border border-navy/10 px-4 py-3 hover:border-pink/40 transition text-sm font-serif"
              >
                <span className="text-pink mr-2">●</span>
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sections */}
      <div className="max-w-3xl mx-auto px-6 pb-20">
        {SECTIONS.map((section, sIdx) => (
          <section
            key={section.id}
            id={section.id}
            className={`scroll-mt-24 ${sIdx > 0 ? 'mt-20' : ''}`}
            aria-labelledby={`${section.id}-heading`}
          >
            <p className="eyebrow text-xs mb-3 text-pink">{section.eyebrow}</p>
            <h2 id={`${section.id}-heading`} className="font-serif text-3xl md:text-4xl mb-8">
              {section.title}.
            </h2>
            <dl className="space-y-8">
              {section.items.map((item, i) => (
                <div key={i} className="border-b border-navy/10 pb-6">
                  <dt className="font-serif text-xl mb-3">{item.question}</dt>
                  <dd className="text-navy/70 leading-relaxed">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>

      {/* Contact + final disclaimer */}
      <section className="bg-navy text-cream py-20 px-6 text-center">
        <p className="eyebrow eyebrow-pink text-xs mb-3">QUESTIONS NOT ANSWERED?</p>
        <h2 className="font-serif text-4xl mb-6">Email me directly.</h2>
        <a href="mailto:erika@erikahanafin.com" className="btn-pink mb-12 inline-block">
          erika@erikahanafin.com
        </a>
        <div className="max-w-2xl mx-auto text-cream/60 text-sm leading-relaxed italic border-t border-cream/20 pt-8">
          The PHASE™ is educational content from a certified holistic health coach. Not medical advice. Always consult your healthcare provider before making changes to medications, supplements, or treatment protocols. Some links on this site are affiliate links. I only recommend products I personally use. As an Amazon Associate I earn from qualifying purchases. The PHASE™ and MOMumental Moments® are trademarks of MOMumental Moments®.
        </div>
        <p className="text-cream/40 text-xs mt-6">
          <Link href="/disclaimer" className="hover:text-pink transition">Full Medical Disclaimer</Link>
          <span className="mx-3">·</span>
          <Link href="/privacy" className="hover:text-pink transition">Privacy Policy</Link>
          <span className="mx-3">·</span>
          <Link href="/terms" className="hover:text-pink transition">Terms of Use</Link>
        </p>
      </section>
    </>
  );
}
