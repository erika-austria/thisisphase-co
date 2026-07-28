import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { allVolumesItemListSchema, bundleProductSchema, journalProductSchema } from '@/lib/schema';
import { MagazineMasthead } from '@/components/MagazineMasthead';

const LIBRARY_URL = 'https://www.momumentalreinvention.com/p/the-library';

export const metadata: Metadata = buildMetadata({
  // buildMetadata appends " · The PHASE™" → no need to prefix it here
  title: 'The Whole Season of Rebuilding · Body, Family, Voice, Work',
  description:
    'You are not in a phase. You are in The PHASE™ — the whole season of rebuilding everything. Four rooms, one woman, one reinvention. The body, the family, the voice, the work. The tools built from inside the wreckage. From MOMumental Moments®.',
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
              <span className="eyebrow">thisisphase.co · Four rooms · One reinvention</span>
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
              <a href="#rooms" className="pbtn pbtn-ghost">
                Enter a room <span className="ar">→</span>
              </a>
              <a href="#library" className="pbtn pbtn-pink">
                The Complete Library · $228 <span className="ar">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Hero image band */}
        <section className="band">
          <div className="figure">
            <span className="figcap">
              Wide editorial hero — a woman mid-rebuild. Landscape, room to breathe.
            </span>
          </div>
          <span className="cap">The PHASE™ · Vol. I — No. 01</span>
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
              season — four rooms, one woman, one reinvention.
            </p>
            <div className="phase-strip">
              <span>Body</span>
              <span>Family</span>
              <span>Voice</span>
              <span>Work</span>
            </div>
          </div>
        </section>

        {/* Rooms */}
        <section className="section" id="rooms">
          <div className="wrap">
            <header className="sechead">
              <div className="meta">
                <span className="eyebrow">§ 01 · The House</span>
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
                  <div className="figure">
                    <span className="figcap">Body room — lab slip, journal, or hands</span>
                  </div>
                </div>
                <div className="room-head">
                  <span className="room-num">I</span>
                  <div className="rk">
                    <span className="lbl">Room · Body</span>
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
                  <Link className="enter" href="/series">
                    Enter the Body room <span className="ar">→</span>
                  </Link>
                </div>
              </article>

              <article className="room family" id="family">
                <div className="room-img">
                  <div className="figure">
                    <span className="figcap">Family room — two doorways, calendar, kids&apos; shoes</span>
                  </div>
                </div>
                <div className="room-head">
                  <span className="room-num">II</span>
                  <div className="rk">
                    <span className="lbl">Room · Family</span>
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
                      <span className="pr">$47</span>
                    </li>
                  </ul>
                  <a className="enter" href={LIBRARY_URL}>
                    Enter the Family room <span className="ar">→</span>
                  </a>
                </div>
              </article>

              <article className="room voice" id="voice">
                <div className="room-img">
                  <div className="figure">
                    <span className="figcap">Voice room — mirror, mic, or portrait</span>
                  </div>
                </div>
                <div className="room-head">
                  <span className="room-num">III</span>
                  <div className="rk">
                    <span className="lbl">Room · Voice</span>
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
                  <Link className="enter" href="/vol/self-trust">
                    Enter the Voice room <span className="ar">→</span>
                  </Link>
                </div>
              </article>

              <article className="room work" id="work">
                <div className="room-img">
                  <div className="figure">
                    <span className="figcap">Work room — desk, laptop, framework on paper</span>
                  </div>
                </div>
                <div className="room-head">
                  <span className="room-num">IV</span>
                  <div className="rk">
                    <span className="lbl">Room · Work</span>
                    <span className="roman">4 tools</span>
                  </div>
                  <h3>Building Through It</h3>
                  <div className="tag">Run your life the way an operator would</div>
                </div>
                <div className="room-body">
                  <p className="moment">
                    Operators — the good ones — run things on frameworks. Not on willpower.
                  </p>
                  <ul>
                    <li>
                      <span>Must-Have Frameworks for Profitability</span>
                      <span className="pr">$17</span>
                    </li>
                  </ul>
                  <a className="enter" href={LIBRARY_URL}>
                    Enter the Work room <span className="ar">→</span>
                  </a>
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
                <span className="eyebrow">§ 02 · The whole house, one key</span>
                <h2>
                  The Complete <em>Library.</em>
                </h2>
                <p>
                  Every tool I built in the wreckage. Every room, every volume. One payment, yours
                  forever. It lives on my MOMumental Reinvention library.
                </p>
                <div className="lib-shot">
                  <div className="figure">
                    <span className="figcap">The Library — all five volumes printed and stacked</span>
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
                  <div className="price-note">The Complete Library · all four rooms</div>
                  <ul>
                    <li>Every PHASE™ volume, I through V</li>
                    <li>The Co-Parenting Power Method®</li>
                    <li>Every Voice and Work tool</li>
                    <li>Lifetime access · every future release</li>
                  </ul>
                  <a className="pbtn" href={LIBRARY_URL}>
                    Open the Complete Library <span className="ar">→</span>
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
              <div className="figure">
                <span className="figcap">Portrait of Erika — vertical, 4:5</span>
              </div>
            </div>
            <div>
              <span className="eyebrow">§ 03 · Who built this</span>
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
                <span className="eyebrow">§ 04 · The Proof</span>
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
                <span className="who">Reader · the Library</span>
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
              <a href={LIBRARY_URL} className="pbtn pbtn-pink">
                Open the Library · $228 <span className="ar">→</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
