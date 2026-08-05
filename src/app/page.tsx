import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { allVolumesItemListSchema, bundleProductSchema, journalProductSchema } from '@/lib/schema';
import { MagazineMasthead } from '@/components/MagazineMasthead';

// The Whole House · $228 bundle checks out directly through Stripe (not the library browse page).
const WHOLE_HOUSE_URL = 'https://buy.stripe.com/6oU5kD1Pgcca8Yj1qVeEo0m';
// Every report and map CTA captures the email through the Substack subscribe page
// before the PDF is handed over.
const SUBSCRIBE_URL = 'https://www.momumentalreinvention.com/subscribe';

export const metadata: Metadata = buildMetadata({
  // buildMetadata appends " · The PHASE™" → no need to prefix it here
  title: 'The Whole Season of Rebuilding · Body, Family, Voice, Work',
  description:
    'You are not in a phase. You are in The PHASE™. The whole season of rebuilding everything. Four rooms, one woman, one reinvention. The body, the family, the voice, the work. The tools built from inside the wreckage. From MOMumental Moments®.',
  path: '/',
  ogImage: '/og/home.jpg',
});

export default function HomePage() {
  return (
    <>
      {/* Page-specific JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            allVolumesItemListSchema(),
            bundleProductSchema(),
            journalProductSchema(),
          ]),
        }}
      />

      {/* Magazine masthead */}
      <MagazineMasthead
        issue="VOL. I · NO. 01"
        topics={['BODY', 'FAMILY', 'VOICE', 'WORK']}
        publishingNote="LIVE NOW · 2026"
      />

      <div className="phase-home">
        {/* Hero */}
        <section className="hero" id="top">
          <span className="ghost">P</span>
          <div className="wrap inner">
            <div className="issue">
              <span className="bracket" />
              <span className="eyebrow">thephase.co · Four rooms · One reinvention</span>
            </div>
            <h1>
              You are not in a phase.
              <br />
              You are in <em>The PHASE™.</em>
            </h1>
            <p className="subline">
              The whole season of rebuilding everything. The body. The family. The voice. The work.
              These are the tools I built while I was still in it.
            </p>
            <div className="sig">You are not falling apart. You are becoming MOMumental.</div>
            <div className="cta-row">
              <Link href="/report" className="pbtn pbtn-ghost">
                Read the free report <span className="ar">→</span>
              </Link>
              <a
                href={WHOLE_HOUSE_URL}
                className="pbtn pbtn-pink"
                target="_blank"
                rel="noopener noreferrer"
              >
                The PHASE™ Library · $228 <span className="ar">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Hero image band */}
        <section className="band">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="ph-photo"
            src="/hero-erika.jpg"
            alt="A desk with a laptop, a planner, a pen, and a cup of coffee, the tools of the rebuild."
          />
          <span className="cap">The PHASE™ · Vol. I · No. 01</span>
        </section>

        {/* Reframe */}
        <section className="reframe">
          <div className="wrap in">
            <span className="marks">&ldquo;</span>
            <div className="q">
              The PHASE™ is the <b>season</b>, not the symptom. The divorce is a phase. The blend is a
              phase. The body at forty-one is a phase. The rebuild of the work is a phase.
            </div>
            <p>
              Everyone else hands you one room. A protocol for the hormones. A course for the split. A
              planner for the work. You are living all of it at once. This is the house for the whole
              season. Four rooms, one woman, one reinvention.
            </p>
            <div className="phase-strip">
              <span>Body</span>
              <span>Family</span>
              <span>Voice</span>
              <span>Work</span>
            </div>
          </div>
        </section>

        {/* Report · the free read at the top of the funnel */}
        <section className="report" id="report">
          <div className="wrap">
            <div className="report-grid">
              <Link className="rep-cover" href="/report">
                <span className="gh">R</span>
                <div className="z tp">The MOMumental Report · 2026</div>
                <div className="z">
                  <h3>
                    State of<span className="it">Reinvention</span>
                  </h3>
                  <div className="sb">The Four Rooms of the Modern Woman</div>
                </div>
                <div className="z bt">Body · Family · Voice · Work</div>
              </Link>

              <div>
                <h2>
                  The numbers behind <em>the rebuild.</em>
                </h2>
                <p className="rp">
                  Fifteen pages of research on what actually happens to a woman in midlife. Twenty
                  sources, four rooms, and the letter I wrote from inside it. Read it before you buy
                  anything.
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
                <div className="rep-cta">
                  <a
                    className="pbtn pbtn-pink"
                    href={SUBSCRIBE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Send me the report <span className="ar">→</span>
                  </a>
                  <Link className="pbtn pbtn-ghost" href="/report">
                    What is inside <span className="ar">→</span>
                  </Link>
                </div>
                <div className="rep-note">
                  Free · Subscribe and the PDF lands in your inbox · Or read all 15 pages online
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rooms */}
        <section className="section" id="rooms">
          <div className="wrap">
            <header className="sechead">
              <div className="meta">
                <span className="eyebrow" style={{ color: 'var(--pink-deep)' }}>
                  Enter where you&apos;re standing
                </span>
              </div>
              <div>
                <h2>
                  The four rooms of <em>The PHASE™.</em>
                </h2>
                <p className="subhead" style={{ maxWidth: 'none' }}>
                  Start where it hurts today. The rest of the house is here when you are ready.
                </p>
              </div>
            </header>

            <div className="rooms">
              <article className="room body" id="body">
                <div className="room-img">
                  <div className="tile pink" role="img" aria-label="The Body room">
                    <span className="room-name">The Body</span>
                  </div>
                </div>
                <div className="room-head">
                  <span className="room-num">I</span>
                  <div className="rk">
                    <span className="roman">Vol. I–V</span>
                  </div>
                  <h3>The PHASE™ · Perimenopause</h3>
                  <div className="tag">The map you should have been handed at 38</div>
                </div>
                <div className="room-body">
                  <p className="moment">
                    Test, do not guess. This is the conversation I had to fight for at forty-two.
                  </p>
                  <ul>
                    <li>
                      <span>Vol. I–V · single volumes</span>
                      <span className="pr">
                        $27<span style={{ fontSize: '13px' }}> ea</span>
                      </span>
                    </li>
                  </ul>
                  <Link className="enter" href="/body">
                    Enter the Body room <span className="ar">→</span>
                  </Link>
                </div>
              </article>

              <article className="room family" id="family">
                <div className="room-img">
                  <div className="tile navy" role="img" aria-label="The Family room">
                    <span className="room-name">The Family</span>
                  </div>
                </div>
                <div className="room-head">
                  <span className="room-num">II</span>
                  <div className="rk">
                    <span className="roman">20 scripts</span>
                  </div>
                  <h3>The Co-Parenting Power Method®</h3>
                  <div className="tag">The playbook for the two-house rebuild</div>
                </div>
                <div className="room-body">
                  <p className="moment">
                    Twenty scripts already written, for the messages you dread sending.
                  </p>
                  <ul>
                    <li>
                      <span>Co-Parenting Power Method®</span>
                      <span className="pr">$97</span>
                    </li>
                  </ul>
                  <Link className="enter" href="/family">
                    Enter the Family room <span className="ar">→</span>
                  </Link>
                </div>
              </article>

              <article className="room voice" id="voice">
                <div className="room-img">
                  <div className="tile pink" role="img" aria-label="The Voice room">
                    <span className="room-name">The Voice</span>
                  </div>
                </div>
                <div className="room-head">
                  <span className="room-num">III</span>
                  <div className="rk">
                    <span className="roman">Vol. IV</span>
                  </div>
                  <h3>Self-Trust &amp; Confidence</h3>
                  <div className="tag">Coming back to your own knowing</div>
                </div>
                <div className="room-body">
                  <p className="moment">The thing I stopped apologizing for was my knowing.</p>
                  <ul>
                    <li>
                      <span>PHASE™ Vol. IV · Self-Trust</span>
                      <span className="pr">$27</span>
                    </li>
                  </ul>
                  <Link className="enter" href="/voice">
                    Enter the Voice room <span className="ar">→</span>
                  </Link>
                </div>
              </article>

              <article className="room work" id="work">
                <div className="room-img">
                  <div className="tile navy" role="img" aria-label="The Work room">
                    <span className="room-name">The Work</span>
                  </div>
                </div>
                <div className="room-head">
                  <span className="room-num">IV</span>
                  <div className="rk">
                    <span className="roman">7 tools</span>
                  </div>
                  <h3>Building Through It</h3>
                  <div className="tag">Run your life the way an operator would</div>
                </div>
                <div className="room-body">
                  <p className="moment">
                    Operators, the good ones, run things on frameworks. Not on willpower.
                  </p>
                  <ul>
                    <li>
                      <span>Must-Have Frameworks for Profitability</span>
                      <span className="pr">$17</span>
                    </li>
                  </ul>
                  <Link className="enter" href="/work">
                    Enter the Work room <span className="ar">→</span>
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Library */}
        <section className="library-sec" id="library">
          <div className="wrap">
            <div className="library">
              <div>
                <h2>
                  The PHASE™ <em>Library.</em>
                </h2>
                <p>
                  Every tool I built in the wreckage. Every room, every volume. One payment, yours
                  forever. It lives on my MOMumental Reinvention library.
                </p>
                <div className="lib-shot">
                  <div
                    className="tile navy"
                    role="img"
                    aria-label="The PHASE™ Library, all four rooms and five volumes."
                  >
                    <div
                      style={{
                        position: 'relative',
                        zIndex: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '12px',
                        textAlign: 'center',
                        padding: '0 24px',
                      }}
                    >
                      <span className="room-name">The PHASE™ Library</span>
                      <span
                        style={{
                          fontFamily: 'var(--mono)',
                          fontSize: '11px',
                          letterSpacing: '.22em',
                          textTransform: 'uppercase',
                          color: 'rgba(255,249,241,.72)',
                        }}
                      >
                        Four rooms · Five volumes
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lib-stats">
                  <div>
                    <div className="n">4</div>
                    <div className="l">Rooms</div>
                  </div>
                  <div>
                    <div className="n">5</div>
                    <div className="l">Volumes</div>
                  </div>
                  <div>
                    <div className="n">14</div>
                    <div className="l">Day promise</div>
                  </div>
                </div>
              </div>
              <aside className="lib-card">
                <div className="in">
                  <span className="eyebrow">One payment · Yours forever</span>
                  <div className="price">
                    <sup>$</sup>228
                  </div>
                  <div className="price-note">The PHASE™ Library · all four rooms</div>
                  <ul>
                    <li>Every PHASE™ volume, I through V</li>
                    <li>The Co-Parenting Power Method®</li>
                    <li>Every Voice and Work tool</li>
                    <li>Lifetime access · every future release</li>
                  </ul>
                  <a className="pbtn" href={WHOLE_HOUSE_URL} target="_blank" rel="noopener noreferrer">
                    Open The PHASE™ Library <span className="ar">→</span>
                  </a>
                  <div className="guarantee">
                    Use it for 14 days. If it is not the map you needed, email me and I will refund
                    you. No forms, no friction.
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="founder">
          <div className="wrap founder-grid">
            <div className="founder-portrait">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="ph-photo"
                src="/founder-erika.jpg"
                alt="Erika Hanafin Austria, founder of MOMumental Moments®"
              />
            </div>
            <div>
              <q>
                I did not write these from the other side. I wrote them from inside the wreckage,
                because that is when I needed them.
              </q>
              <div className="attr">Erika Hanafin Austria · Founder, MOMumental Moments®</div>
            </div>
          </div>
        </section>

        {/* Proof */}
        <section className="section">
          <div className="wrap">
            <header className="sechead">
              <div className="meta">
                <span className="eyebrow" style={{ color: 'var(--pink-deep)' }}>
                  In their words
                </span>
              </div>
              <div>
                <h2>
                  What readers <em>send back.</em>
                </h2>
              </div>
            </header>
            <div className="proof">
              <div className="tcard">
                <span className="marks">&ldquo;</span>
                <p className="q">
                  I bought The PHASE the week I got my labs back. For the first time someone handed me
                  the words instead of the shrug.
                </p>
                <span className="who">Reader · Vol. II</span>
              </div>
              <div className="tcard">
                <span className="marks">&ldquo;</span>
                <p className="q">
                  The Co-Parenting scripts saved me on a Sunday night I will never forget. I stopped
                  rewriting the same text for an hour.
                </p>
                <span className="who">Reader · Family room</span>
              </div>
              <div className="tcard">
                <span className="marks">&ldquo;</span>
                <p className="q">
                  She has been through it, and she built the thing she needed. You feel that in every
                  page.
                </p>
                <span className="who">Reader · The PHASE™ Library</span>
              </div>
            </div>
          </div>
        </section>

        {/* Close */}
        <section className="close">
          <div className="wrap in">
            <div className="line">
              You are not in a phase. You are in <b>The PHASE™.</b> And there is a room here for every
              part of it.
            </div>
            <div className="cta-row">
              <a href="#rooms" className="pbtn pbtn-ghost">
                Find your room <span className="ar">→</span>
              </a>
              <a href={WHOLE_HOUSE_URL} className="pbtn pbtn-pink" target="_blank" rel="noopener noreferrer">
                Open The PHASE™ Library · $228 <span className="ar">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Letters · the essays behind the rebuild */}
        <section className="section">
          <div className="wrap">
            <header className="sechead">
              <div className="meta">
                <span className="eyebrow" style={{ color: 'var(--pink-deep)' }}>
                  Read the letter
                </span>
              </div>
              <div>
                <h2>
                  The PHASE™ started as <em>a letter.</em>
                </h2>
                <p className="subhead" style={{ maxWidth: 'none' }}>
                  Every Tuesday, a dispatch from inside the rebuild. Read a few, then never miss one.
                </p>
              </div>
            </header>

            <div className="cards">
              <article className="icard">
                <h3>Two Chapters, One Body, One Year</h3>
                <p>Motherhood at 41 while my body was becoming something else.</p>
              </article>
              <article className="icard">
                <h3>Building Through It</h3>
                <p>
                  What it actually takes to build a company while your own life is still remaking
                  itself.
                </p>
              </article>
            </div>

            <div className="cta-row" style={{ marginTop: 30 }}>
              <a
                className="pbtn pbtn-pink"
                href="https://momumentalreinvention.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read on MOMumental Reinvention <span className="ar">→</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
