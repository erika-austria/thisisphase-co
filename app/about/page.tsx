import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { MagazineMasthead } from '@/components/MagazineMasthead';
import { PullQuote } from '@/components/PullQuote';

export const metadata: Metadata = buildMetadata({
  title: 'About · The PHASE™ · A note from the founder',
  description: 'The PHASE™ was built by Erika Hanafin Austria after four years of being dismissed by doctors. IIN-certified holistic health coach, 5x acquisition CEO, twice-named Top 50 Women Leaders Virginia. Founder of MOMumental Moments®.',
  path: '/about',
  ogImage: '/og/about.jpg',
  type: 'article',
});

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: 'The PHASE', url: 'https://thisisphase.co' },
              { name: 'About', url: 'https://thisisphase.co/about' },
            ]),
            {
              '@context': 'https://schema.org',
              '@type': 'AboutPage',
              name: 'About The PHASE™',
              description: 'The story behind The PHASE™ from founder Erika Hanafin Austria.',
              author: { '@id': 'https://erikahanafin.com/#person' },
            },
          ]),
        }}
      />

      <MagazineMasthead
        issue="THE PHASE™ · A NOTE FROM THE FOUNDER"
        topics={['ORIGIN', 'CREDENTIALS', 'PHILOSOPHY']}
        publishingNote="2026"
      />

      <section className="max-w-3xl mx-auto px-6 pt-16 md:pt-20 pb-12">
        <p className="eyebrow text-xs mb-6">FROM THE FOUNDER</p>
        <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-12">
          I built this because <span className="italic text-pink">no one else did</span>.
        </h1>

        <div className="prose-content space-y-6 text-lg leading-relaxed text-navy/80">
          <p>
            I spent four years thinking I was failing at stress.
          </p>
          <p>
            I was running on startup adrenaline. Brutal night sweats hit out of nowhere. Waking at 2am drenched. Changing clothes. Sometimes sheets. Trying to function the next day on no sleep.
          </p>
          <p>
            My doctor said cortisol. I believed her. I ordered moisture-wicking pajamas and powered through.
          </p>
          <p>
            Three years later, after a cross-country move, a top women&apos;s health doctor offered me birth control. I knew that wasn&apos;t the answer. I&apos;m IIN certified. I went deep into research, ran hormone panels every six months, saw four different doctors, tried every supplement. None of it landed.
          </p>
          <p>
            Then I got pregnant. Had my baby. The night sweats came roaring back. That was the moment.
          </p>
          <p>
            The nurse practitioner who finally listened looked at my labs and said: <em>&ldquo;Your hormones are not optimized for how you&apos;re living and functioning. We need to support your body instead of forcing you to push through.&rdquo;</em>
          </p>
          <p>
            That sentence is the reason this volume exists.
          </p>
        </div>
      </section>

      <PullQuote variant="manifesto" attribution="ERIKA HANAFIN AUSTRIA · 2026">
        The PHASE™ is the conversation
        <br />
        you should have been handed at 38.
        <br />
        <span className="italic text-pink">Not had to fight for at 42.</span>
      </PullQuote>

      <section className="max-w-content mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
        <div>
          <p className="eyebrow text-xs mb-4 text-pink">CREDENTIALS</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-6">The receipts.</h2>
          <ul className="space-y-3 text-navy/80 leading-relaxed">
            <li className="flex gap-3"><span className="text-pink">●</span> IIN Certified Holistic Health Coach</li>
            <li className="flex gap-3"><span className="text-pink">●</span> Founder of The PHASE™</li>
            <li className="flex gap-3"><span className="text-pink">●</span> Founder of MOMumental Moments®</li>
            <li className="flex gap-3"><span className="text-pink">●</span> Publisher of MOMumental Reinvention</li>
            <li className="flex gap-3"><span className="text-pink">●</span> 5x Acquisition CEO</li>
            <li className="flex gap-3"><span className="text-pink">●</span> 2x Top 50 Women Leaders Virginia</li>
            <li className="flex gap-3"><span className="text-pink">●</span> Pepperdine SEC Advisory Board</li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-xs mb-4 text-pink">PHILOSOPHY</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-6">What I will not do.</h2>
          <ul className="space-y-3 text-navy/80 leading-relaxed">
            <li className="flex gap-3"><span className="text-navy/40">○</span> Tell you to find yourself again. (Wrong advice.)</li>
            <li className="flex gap-3"><span className="text-navy/40">○</span> Promise a quick-fix protocol. (Hormones are a relationship.)</li>
            <li className="flex gap-3"><span className="text-navy/40">○</span> Replace medical care. (I am not your doctor.)</li>
            <li className="flex gap-3"><span className="text-navy/40">○</span> Recommend products I do not personally use.</li>
            <li className="flex gap-3"><span className="text-navy/40">○</span> Gatekeep the lab list, the doctor script, or the decision tree.</li>
          </ul>
        </div>
      </section>

      <section className="bg-cream-alt py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow text-xs mb-6">STAY CLOSE</p>
          <p className="font-serif italic text-2xl md:text-3xl text-navy/80 leading-relaxed mb-10">
            If The PHASE™ is for you, I write every Tuesday on Substack. That is where I keep going.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm">
            <Link href="https://www.momumentalreinvention.com" className="text-pink-deep hover:text-pink underline-offset-4 hover:underline transition">
              MOMumental Reinvention Substack →
            </Link>
            <Link href="https://erikahanafin.com" className="text-navy/70 hover:text-navy underline-offset-4 hover:underline transition">
              erikahanafin.com →
            </Link>
          </div>
          <p className="font-serif italic text-pink mt-12">
            MOMumentally, Erika
          </p>
        </div>
      </section>
    </>
  );
}
