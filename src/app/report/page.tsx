import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, faqSchema, reportSchema } from '@/lib/schema';
import { MagazineMasthead } from '@/components/MagazineMasthead';
import { ReportForm } from '@/components/ReportForm';

/**
 * /report · State of Reinvention 2026 · The MOMumental Report.
 *
 * The free read at the top of the funnel. Fifteen pages, four rooms, twenty
 * cited sources.
 *
 * Lead flow: every "send me the report" CTA is the on-site ReportForm, which
 * captures the email straight to Resend (/api/report) and reveals the PDF. No
 * Substack subscribe step, so existing subscribers are never blocked, and no
 * un-gated online read is offered on the page.
 */

const LIBRARY_URL = 'https://www.momumentalreinvention.com/p/the-library';

export const metadata: Metadata = buildMetadata({
  title: 'State of Reinvention 2026 · The MOMumental Report',
  description:
    'A free 15-page report on what actually happens to a woman in midlife. The body, the family, the voice, the work. Twenty cited sources on perimenopause, gray divorce, the mental load, and the midlife rebuild. By Erika Hanafin Austria.',
  path: '/report',
  ogImage: '/og/report.jpg',
});

const FAQS = [
  {
    question: 'Is the report really free?',
    answer:
      'Yes. All fifteen pages are free. Subscribe to the MOMumental Reinvention letter and the PDF lands in your inbox, or read the same report in your browser. No credit card, no paywall.',
  },
  {
    question: 'What is in State of Reinvention 2026?',
    answer:
      'Fifteen pages of research on the four rooms a woman rebuilds at once. Body covers perimenopause prevalence, the care gap, and the cost of untreated symptoms. Family covers gray divorce, custody, and the cognitive load. Voice covers self-silencing and its measured health effects. Work covers the pay divide, funding, and burnout. Twenty sources are cited on the final page.',
  },
  {
    question: 'Where do the numbers come from?',
    answer:
      'Mayo Clinic Proceedings, JAMA Network Open, the US Census Bureau, Pew Research Center, the Institute for Women\'s Policy Research, npj Women\'s Health, the Journals of Gerontology, and thirteen more. Every figure in the report traces to a numbered citation on page fifteen.',
  },
  {
    question: 'Do I have to buy anything?',
    answer:
      'No. The report is written to be read before you buy anything. If a room lands, the tool for that room is on this site, and the whole season lives in the Complete Library for $228.',
  },
  {
    question: 'Who wrote it?',
    answer:
      'Erika Hanafin Austria. Founder of MOMumental Moments®, publisher of MOMumental Reinvention, former CEO of HeyMama, mother of four. She wrote the report from inside the season it describes.',
  },
];

const ROOMS = [
  {
    n: 'I',
    name: 'Body',
    line: 'Perimenopause prevalence, the care gap, and what untreated symptoms cost women and their employers every year.',
  },
  {
    n: 'II',
    name: 'Family',
    line: 'Who initiates the split, what happens to a woman\'s standard of living after it, and who carries the cognitive load either way.',
  },
  {
    n: 'III',
    name: 'Voice',
    line: 'Self-silencing, and the measured health consequences of swallowing what you know for a decade.',
  },
  {
    n: 'IV',
    name: 'Work',
    line: 'The parenthood pay divide, the funding gap, and the burnout numbers behind the woman rebuilding her work at forty-one.',
  },
];

export default function ReportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: 'The PHASE', url: 'https://thephase.co' },
              { name: 'State of Reinvention 2026', url: 'https://thephase.co/report' },
            ]),
            reportSchema(),
            faqSchema(FAQS),
          ]),
        }}
      />

      <MagazineMasthead
        issue="THE MOMUMENTAL REPORT · 2026"
        topics={['BODY', 'FAMILY', 'VOICE', 'WORK']}
        publishingNote="FREE · 15 PAGES"
      />

      <div className="phase-home">
        {/* ─── HERO · cover + capture ─── */}
        <section className="report">
          <div className="wrap">
            <div className="report-grid">
              <div className="rep-cover">
                <span className="gh">R</span>
                <div className="z tp">The MOMumental Report · 2026</div>
                <div className="z">
                  <h3>
                    State of<span className="it">Reinvention</span>
                  </h3>
                  <div className="sb">The Four Rooms of the Modern Woman</div>
                </div>
                <div className="z bt">Body · Family · Voice · Work</div>
              </div>

              <div className="lede">
                <span className="eyebrow">Free · 15 pages · 20 sources cited</span>
                <h1>
                  The numbers behind <em>the rebuild.</em>
                </h1>
                <p>
                  Fifteen pages of research on what actually happens to a woman in midlife. Not one
                  room. All four of them. The body, the family, the voice, the work. Read it before
                  you buy anything.
                </p>

                <div className="rep-stats">
                  <div>
                    <div className="n">15</div>
                    <div className="l">Pages</div>
                  </div>
                  <div>
                    <div className="n">4</div>
                    <div className="l">Rooms</div>
                  </div>
                  <div>
                    <div className="n">20</div>
                    <div className="l">Sources cited</div>
                  </div>
                </div>

                <ReportForm variant="cream" source="report-hero" />

                <div className="rep-note">
                  Drop your email and the 15-page PDF lands in your inbox · no subscription, no
                  catch
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── WHAT IS INSIDE ─── */}
        <section className="section">
          <div className="wrap">
            <header className="sechead">
              <div className="meta">
                <span className="eyebrow">§ 01 · What is inside</span>
                <span className="eyebrow" style={{ color: 'var(--pink-deep)' }}>
                  Four rooms, one season
                </span>
              </div>
              <div>
                <h2>
                  One room is a story. Four rooms is <em>a season.</em>
                </h2>
                <p className="subhead" style={{ maxWidth: 'none' }}>
                  Every report you have read covers one of these. This one covers what happens when
                  they arrive together, which is how they actually arrive.
                </p>
              </div>
            </header>

            <div className="cards">
              {ROOMS.map((r) => (
                <article className="icard" key={r.name}>
                  <div className="n">{r.n}</div>
                  <h3>{r.name}</h3>
                  <p>{r.line}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── METHOD ─── */}
        <section className="library-sec">
          <div className="wrap">
            <div className="split">
              <div>
                <span className="eyebrow">§ 02 · The method</span>
                <h2 style={{ fontSize: 'clamp(36px,5vw,60px)', color: 'var(--navy)', marginTop: 14 }}>
                  Check <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>my work.</em>
                </h2>
                <p style={{ maxWidth: 520, marginTop: 20, color: 'var(--ink-soft)', fontSize: '18.5px' }}>
                  Every figure in this report is numbered and traced to a source on page fifteen.
                  Peer-reviewed journals, federal data, and named research institutions. Where a
                  number is contested, the report says so.
                </p>
                <ul className="ticks">
                  <li>Mayo Clinic Proceedings · the annual cost of untreated menopause symptoms</li>
                  <li>US Census Bureau · median age at first divorce, custody, household poverty</li>
                  <li>Journal of Marriage and Family · who manages the household cognitive load</li>
                  <li>Framingham Offspring Study · what self-silencing does over ten years</li>
                  <li>Institute for Women&apos;s Policy Research · the parenthood pay divide</li>
                </ul>
                {/* Online-read link removed · the report is email-gated */}
              </div>

              <aside className="lib-card">
                <div className="in">
                  <span className="eyebrow">From the founder</span>
                  <q
                    style={{
                      display: 'block',
                      fontFamily: 'var(--serif)',
                      fontStyle: 'italic',
                      fontSize: 'clamp(26px,3vw,38px)',
                      lineHeight: 1.2,
                      color: 'var(--cream)',
                      marginTop: 18,
                      quotes: 'none',
                    }}
                  >
                    I did not write this from the other side. I wrote it from inside the wreckage,
                    because that is when I needed it.
                  </q>
                  <div
                    style={{
                      marginTop: 26,
                      fontFamily: 'var(--mono)',
                      fontSize: 11,
                      letterSpacing: '.2em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,249,241,.6)',
                    }}
                  >
                    Erika Hanafin Austria · Founder, MOMumental Moments®
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="section">
          <div className="wrap">
            <header className="sechead">
              <div className="meta">
                <span className="eyebrow">§ 03 · Questions</span>
                <span className="eyebrow" style={{ color: 'var(--pink-deep)' }}>
                  Before you download
                </span>
              </div>
              <div>
                <h2>
                  What you are <em>actually getting.</em>
                </h2>
              </div>
            </header>
            <dl className="faqlist">
              {FAQS.map((f) => (
                <div className="qa" key={f.question}>
                  <dt>{f.question}</dt>
                  <dd>{f.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ─── FINAL CAPTURE ─── */}
        <section className="reframe">
          <div className="wrap in">
            <span className="eyebrow" style={{ color: 'var(--pink)' }}>
              The report is free
            </span>
            <div className="q" style={{ marginTop: 22 }}>
              Read the season you are actually in.
            </div>
            <p>
              Fifteen pages, four rooms, twenty sources. Then decide whether any of it is worth a
              tool.
            </p>
            <div className="rep-cta" style={{ justifyContent: 'center', marginTop: 30 }}>
              <ReportForm variant="navy" source="report-final" />
            </div>
            <p style={{ marginTop: 26 }}>
              Or go straight to <Link href="/#rooms">the four rooms</Link>, or open{' '}
              <a href={LIBRARY_URL} target="_blank" rel="noopener noreferrer">
                the Complete Library
              </a>{' '}
              for $228.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
