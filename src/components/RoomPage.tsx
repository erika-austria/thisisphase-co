import Link from 'next/link';
import { ROOMS, type Room, LIBRARY_URL } from '@/lib/rooms';
import { MagazineMasthead } from '@/components/MagazineMasthead';
import { StripeButton } from '@/components/StripeButton';

/**
 * RoomPage · the shared template behind /body, /family, /voice, and /work.
 *
 * The home page sells the house and hands each card off here. Every room page
 * follows the same spine so a reader who enters through Family recognizes the
 * shape when she later opens Body: lede, photograph, cited evidence, the moment
 * line, what is inside, the tools, who it is and is not for, FAQ, and the door
 * to the Complete Library.
 *
 * All styling reuses the .phase-home editorial system in globals.css.
 */

const ROOM_CSS = `
.phase-home .toolrow{display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap;padding:22px 0;border-bottom:1px solid var(--rule)}
.phase-home .toolrow:last-child{border-bottom:0}
.phase-home .toolrow .tl{flex:1 1 320px;min-width:0}
.phase-home .toolrow .tl h3{font-size:26px;color:var(--navy)}
.phase-home .toolrow .tl p{font-size:16px;color:var(--ink-soft);margin-top:8px;line-height:1.5;max-width:56ch}
.phase-home .toolrow .tr{display:flex;align-items:center;gap:18px;flex-wrap:wrap}
.phase-home .toolrow .pr{font-family:var(--serif);font-size:34px;font-weight:600;color:var(--navy);line-height:1;letter-spacing:-.03em}
`;

export function RoomPage({ room }: { room: Room }) {
  const others = ROOMS.filter((r) => r.slug !== room.slug);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: ROOM_CSS }} />

      <MagazineMasthead
        issue={`THE PHASE™ · ROOM ${room.numeral}`}
        topics={ROOMS.map((r) => r.name.toUpperCase())}
        publishingNote={room.name.toUpperCase()}
      />

      <div className="phase-home">
        {/* ─── LEDE ─── */}
        <section className="section" id="top">
          <div className="wrap">
            <div className="lede">
              <span className="eyebrow">
                Room {room.numeral} · {room.name} · {room.tagline}
              </span>
              <h1>
                {room.headline[0]} <em>{room.headline[1]}</em>
              </h1>
              {room.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <div className="cta-row">
                <a className="pbtn pbtn-pink" href="#tools">
                  See the tools <span className="ar">→</span>
                </a>
                <a
                  className="pbtn pbtn-ghost"
                  href={LIBRARY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The whole house · $228 <span className="ar">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── ROOM PLATE ─── */}
        <section className="band">
          <div className={`tile ${room.tint}`} role="img" aria-label={`The ${room.name} room`}>
            <span className="ltr" aria-hidden="true">
              {room.letter}
            </span>
            <span className="rm" aria-hidden="true">
              Room {room.numeral}
            </span>
          </div>
          <span className="cap">
            The PHASE™ · Room {room.numeral} · {room.name}
          </span>
        </section>

        {/* ─── THE MOMENT ─── */}
        <section className="reframe">
          <div className="wrap in">
            <span className="marks">&ldquo;</span>
            <div className="q">{room.moment}</div>
            <p>
              Every figure below is cited in{' '}
              <Link href="/report">State of Reinvention 2026</Link>, the free 15-page report. Twenty
              sources, four rooms, no email required to read it.
            </p>
            <div className="phase-strip">
              {ROOMS.map((r) =>
                r.slug === room.slug ? (
                  <span key={r.slug} style={{ background: 'var(--pink)', color: 'var(--ink)' }}>
                    {r.name}
                  </span>
                ) : (
                  <Link key={r.slug} href={`/${r.slug}`}>
                    <span>{r.name}</span>
                  </Link>
                ),
              )}
            </div>
          </div>
        </section>

        {/* ─── EVIDENCE ─── */}
        <section className="section">
          <div className="wrap">
            <header className="sechead">
              <div className="meta">
                <span className="eyebrow">§ 01 · The evidence</span>
                <span className="eyebrow" style={{ color: 'var(--pink-deep)' }}>
                  You are not imagining it
                </span>
              </div>
              <div>
                <h2>
                  What the research <em>already says.</em>
                </h2>
                <p className="subhead" style={{ maxWidth: 'none' }}>
                  Three numbers from the report, for the room you are standing in.
                </p>
              </div>
            </header>

            <div className="rep-stats" style={{ maxWidth: 'none', marginTop: 0 }}>
              {room.evidence.map((e) => (
                <div key={e.n}>
                  <div className="n">{e.n}</div>
                  <div className="l">{e.line}</div>
                </div>
              ))}
            </div>
            <div className="rep-note">
              Sources cited on page 15 of{' '}
              <Link href="/report">State of Reinvention 2026</Link>
            </div>
          </div>
        </section>

        {/* ─── WHAT IS INSIDE ─── */}
        <section className="library-sec">
          <div className="wrap">
            <header className="sechead">
              <div className="meta">
                <span className="eyebrow">§ 02 · What is inside</span>
                <span className="eyebrow" style={{ color: 'var(--pink-deep)' }}>
                  The working parts
                </span>
              </div>
              <div>
                <h2>
                  The {room.name.toLowerCase()} room, <em>opened up.</em>
                </h2>
              </div>
            </header>

            <div className="cards">
              {room.inside.map((i) => (
                <article className="icard" key={i.n}>
                  <div className="n">{i.n}</div>
                  <h3>{i.title}</h3>
                  <p>{i.line}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TOOLS ─── */}
        <section className="section" id="tools">
          <div className="wrap">
            <header className="sechead">
              <div className="meta">
                <span className="eyebrow">§ 03 · The tools</span>
                <span className="eyebrow" style={{ color: 'var(--pink-deep)' }}>
                  Start where it hurts today
                </span>
              </div>
              <div>
                <h2>
                  Take one. <em>Not all of them.</em>
                </h2>
                <p className="subhead" style={{ maxWidth: 'none' }}>
                  {room.toolsIntro}
                </p>
              </div>
            </header>

            <div>
              {room.tools.map((t) => (
                <div className="toolrow" key={t.name}>
                  <div className="tl">
                    <h3>{t.name}</h3>
                    <p>{t.note}</p>
                  </div>
                  <div className="tr">
                    <span className="pr">${t.price}</span>
                    {t.stripe ? (
                      <StripeButton
                        href={t.href}
                        label="Buy →"
                        variant="pink"
                        productKey={t.productKey}
                        price={t.price}
                      />
                    ) : t.href.startsWith('/') ? (
                      <Link className="pbtn pbtn-ghost" href={t.href}>
                        Read more <span className="ar">→</span>
                      </Link>
                    ) : (
                      <a
                        className="pbtn pbtn-ghost"
                        href={t.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open <span className="ar">→</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="rep-note" style={{ marginTop: 26 }}>
              Every tool in this room is also included in the Complete Library ·{' '}
              <a href={LIBRARY_URL} target="_blank" rel="noopener noreferrer">
                all four rooms for $228
              </a>
            </div>
          </div>
        </section>
        <section className="library-sec">
          <div className="wrap">
            <div className="split">
              <div>
                <span className="eyebrow">§ 04 · Who this is for</span>
                <h2
                  style={{ fontSize: 'clamp(34px,4.6vw,54px)', color: 'var(--navy)', marginTop: 14 }}
                >
                  Read this part <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>before you buy.</em>
                </h2>
                <ul className="ticks">
                  {room.whoFor.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </div>
              <aside className="lib-card">
                <div className="in">
                  <span className="eyebrow">Who this is not for</span>
                  <ul>
                    {room.whoNot.map((w) => (
                      <li key={w}>{w}</li>
                    ))}
                  </ul>
                  <div className="guarantee">
                    14 days. If it is not the map you needed, email me and I will refund you. No
                    forms, no friction.
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
                <span className="eyebrow">§ 05 · Questions</span>
                <span className="eyebrow" style={{ color: 'var(--pink-deep)' }}>
                  Before you buy
                </span>
              </div>
              <div>
                <h2>
                  The ones readers <em>actually ask.</em>
                </h2>
              </div>
            </header>
            <dl className="faqlist">
              {room.faqs.map((f) => (
                <div className="qa" key={f.question}>
                  <dt>{f.question}</dt>
                  <dd>{f.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ─── CLOSE ─── */}
        <section className="close">
          <div className="wrap in">
            <div className="line">
              One room is where you start. <b>The house is where you end up.</b>
            </div>
            <div className="cta-row">
              <a className="pbtn pbtn-pink" href={LIBRARY_URL} target="_blank" rel="noopener noreferrer">
                Open the Complete Library · $228 <span className="ar">→</span>
              </a>
              <Link className="pbtn pbtn-ghost" href="/report">
                Read the free report <span className="ar">→</span>
              </Link>
            </div>
            <div className="rep-note" style={{ marginTop: 34 }}>
              The other rooms ·{' '}
              {others.map((r, i) => (
                <span key={r.slug}>
                  {i > 0 ? ' · ' : ''}
                  <Link href={`/${r.slug}`}>{r.name}</Link>
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
