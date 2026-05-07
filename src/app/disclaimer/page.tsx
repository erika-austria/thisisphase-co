import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { MagazineMasthead } from '@/components/MagazineMasthead';

export const metadata: Metadata = buildMetadata({
  title: 'Medical Disclaimer',
  description: 'The PHASE™ is educational content from a certified holistic health coach. Not medical advice. Read the full disclaimer.',
  path: '/disclaimer',
  ogImage: '/og/legal.jpg',
});

export default function DisclaimerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'The PHASE', url: 'https://thisisphase.co' },
              { name: 'Medical Disclaimer', url: 'https://thisisphase.co/disclaimer' },
            ])
          ),
        }}
      />

      <MagazineMasthead
        issue="THE PHASE™ · MEDICAL DISCLAIMER"
        topics={['EDUCATIONAL CONTENT ONLY']}
        publishingNote="LAST UPDATED 2026-05-08"
      />

      <article className="max-w-3xl mx-auto px-6 py-20">
        <p className="eyebrow text-xs mb-6 text-pink">READ BEFORE USING</p>
        <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-12">
          Medical Disclaimer.
        </h1>

        <div className="space-y-6 text-navy/80 leading-relaxed text-lg">
          <p>
            <strong>The PHASE™ is educational content. Not medical advice.</strong>
          </p>
          <p>
            Erika Hanafin Austria is an IIN Certified Holistic Health Coach (Institute for Integrative Nutrition). She is <em>not</em> a medical doctor, doctor of osteopathy, nurse practitioner, physician assistant, registered dietitian, or licensed therapist.
          </p>
          <p>
            The information provided in The PHASE™ workbooks, on thisisphase.co, in any newsletter, social post, podcast appearance, video, or related material is for general educational and informational purposes only. It is not intended to diagnose, treat, cure, or prevent any disease. It is not a substitute for professional medical advice, diagnosis, or treatment.
          </p>

          <h2 className="font-serif text-3xl mt-12 mb-4">Always consult your healthcare provider</h2>
          <p>
            Always seek the advice of your physician or other qualified licensed healthcare provider with any questions you may have regarding a medical condition, hormonal symptoms, supplements, or treatment protocols. Never disregard professional medical advice or delay seeking it because of something you read in The PHASE™ or on this website.
          </p>
          <p>
            If you think you may have a medical emergency, call your doctor or 911 immediately.
          </p>

          <h2 className="font-serif text-3xl mt-12 mb-4">Specific conditions</h2>
          <p>
            The PHASE™ does not screen for individual contraindications. Please discuss any new educational resource, supplement, or lifestyle change with your treating physician, especially if you:
          </p>
          <ul className="space-y-2 list-disc list-inside ml-4">
            <li>Have an existing medical condition</li>
            <li>Are pregnant or breastfeeding</li>
            <li>Are taking prescription medications</li>
            <li>Have a history of breast cancer or hormone-sensitive conditions</li>
            <li>Have a history of blood clots, deep vein thrombosis, or pulmonary embolism</li>
            <li>Have a history of liver disease</li>
            <li>Are under 18 years of age</li>
          </ul>

          <h2 className="font-serif text-3xl mt-12 mb-4">Supplements and recommendations</h2>
          <p>
            Any supplement names, brands, or stacks referenced in The PHASE™ are educational examples of what Erika personally takes. They are not prescriptions. The U.S. Food and Drug Administration has not evaluated statements regarding supplements. Always consult your provider before adding or changing supplements, especially when on hormone replacement therapy or other medications.
          </p>

          <h2 className="font-serif text-3xl mt-12 mb-4">No doctor-patient relationship</h2>
          <p>
            Use of The PHASE™, thisisphase.co, or related materials does not create a doctor-patient relationship, coach-client relationship (unless explicitly contracted separately), or any other professional relationship.
          </p>

          <h2 className="font-serif text-3xl mt-12 mb-4">Limitation of liability</h2>
          <p>
            By using The PHASE™ or thisisphase.co, you acknowledge that you are responsible for your own health, medical care, and decisions. MOMumental Moments®, Erika Hanafin Austria, and any affiliated parties are not liable for any actions, decisions, or outcomes resulting from use of educational content provided.
          </p>

          <h2 className="font-serif text-3xl mt-12 mb-4">Affiliate disclosure</h2>
          <p>
            Some links on this site are affiliate links, including links to JOi + Blokes Health (telehealth hormone optimization) and Amazon Associates. When you click and purchase, we may receive a commission at no additional cost to you. We only recommend products and services we personally use or have personal experience with. Affiliate relationships do not influence the editorial content of The PHASE™.
          </p>

          <p className="border-t border-navy/20 pt-6 mt-12 italic">
            By using The PHASE™ and this website, you acknowledge that you have read, understood, and agreed to this Medical Disclaimer.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-navy/20">
          <p className="eyebrow text-xs mb-3">RELATED</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/faq" className="btn-secondary">FAQ →</Link>
            <Link href="/privacy" className="btn-secondary">Privacy →</Link>
            <Link href="/terms" className="btn-secondary">Terms →</Link>
          </div>
        </div>
      </article>
    </>
  );
}
