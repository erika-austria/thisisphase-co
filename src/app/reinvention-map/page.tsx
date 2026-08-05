import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { reinventionMapSchema, faqSchema, PERSON_SCHEMA } from '@/lib/schema';

const SUBSCRIBE_URL = 'https://www.momumentalreinvention.com/subscribe';

const OPENER =
  'The Reinvention Map is a free four-room guide from Erika Hanafin Austria, founder of MOMumental Moments®, for women rebuilding everything at once. It walks the four rooms of a full reinvention, the body, the family, the voice, and the work, with the first tool for each. Free. Subscribe and it lands in your inbox.';

const FAQS = [
  { question: 'What is The Reinvention Map?', answer: 'The Reinvention Map is a free four-room guide from Erika Hanafin Austria, founder of MOMumental Moments, for women rebuilding everything at once. It covers the body, the family, the voice, and the work, with a first tool for each room.' },
  { question: 'Is The Reinvention Map free?', answer: 'Yes. The map is free. You subscribe to the MOMumental Reinvention letter and it arrives in your inbox. The free Tuesday letter continues after that, and a paid tier is available for the Community Chat and more.' },
  { question: 'Who is The Reinvention Map for?', answer: 'It is for women running several rebuilds at once: divorce and co-parenting, a changing body in perimenopause, rebuilding self-trust, and building work or a business through all of it. One map for the whole season, not a single symptom.' },
];

const ROOMS = [
  { num: 'I', label: 'Body', title: 'The PHASE™', line: 'The body that changed at forty-one. Perimenopause is the doorway, not the whole house.', img: '/room-body.jpg', alt: 'The PHASE workbook covers.' },
  { num: 'II', label: 'Family', title: 'The Co-Parenting Power Method®', line: 'The blend and the co-parenting. The scripts for the messages you dread sending.', img: '/room-family.jpg', alt: 'Erika Hanafin Austria with her family.' },
  { num: 'III', label: 'Voice', title: 'Self-Trust', line: 'Your own knowing, after a season of handing the microphone to everyone else.', img: '/room-voice.jpg', alt: 'MOMumental Reinvention, essays voiced by Erika Hanafin Austria.' },
  { num: 'IV', label: 'Work', title: 'Building Through It', line: 'Building something real while everything at home still needs you. Frameworks over willpower.', img: '/room-work.jpg', alt: 'Erika Hanafin Austria working from a framework.' },
];

export const metadata: Metadata = buildMetadata({
  title: 'The Reinvention Map · A Free Four-Room Guide for Women Rebuilding Everything',
  description: 'A free guide to the four rooms of reinvention, the body, the family, the voice, the work, from MOMumental Moments® founder Erika Hanafin Austria. Free with subscribe.',
  path: '/reinvention-map',
  ogImage: '/hero-erika.jpg',
});

export default function ReinventionMapPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([reinventionMapSchema(), faqSchema(FAQS), PERSON_SCHEMA]) }} />
      <style dangerouslySetInnerHTML={{ __html: `
        .rmap-lede{font-size:1.15rem;line-height:1.6;background:#fff;border:1px solid var(--line,#E8DDCB);border-left:5px solid var(--pink,#F086DC);border-radius:12px;padding:20px 24px;margin:8px 0 26px;}
        .rmap-rooms{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin:18px 0;}
        @media(max-width:640px){.rmap-rooms{grid-template-columns:1fr;}}
        .rmap-room{background:#fff;border:1px solid var(--line,#E8DDCB);border-radius:12px;overflow:hidden;}
        .rmap-room img{width:100%;height:150px;object-fit:cover;display:block;}
        .rmap-room .rin{padding:16px 18px;}
        .rmap-room .rlbl{font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;font-weight:700;color:var(--gold-deep,#A9871F);}
        .rmap-room h3{margin:4px 0 6px;font-size:1.15rem;}
        .rmap-faq dt{font-weight:700;font-size:1.05rem;margin-top:16px;}
        .rmap-faq dd{margin:4px 0 0;color:var(--muted,#6C6056);}
      ` }} />
      <div className="phase-home">
        <section className="hero" id="top">
          <div className="wrap inner">
            <div className="issue"><span className="bracket" /><span className="eyebrow">Free guide · The PHASE™ · Four rooms, one reinvention</span></div>
            <h1>You are rebuilding everything at once.<br /><em>Here is the map.</em></h1>
            <p className="rmap-lede">{OPENER}</p>
            <div className="cta-row"><a href={SUBSCRIBE_URL} className="pbtn pbtn-pink">Send me the map <span className="ar">→</span></a></div>
            <div className="sig" style={{ marginTop: '14px' }}>Free every Tuesday after that. Just the letter and the tools, nothing else.</div>
          </div>
        </section>
        <section className="reframe">
          <div className="wrap in">
            <p>If you are in it right now, the divorce and the co-parenting and the body that stopped feeling like yours and the work you are still somehow showing up for, you are not doing it wrong. You are running four rebuilds at once, and nobody handed you the map.</p>
            <p>I built this one in the wreckage of my own. Two decades as an operator and a CEO did not prepare me for rebuilding my actual life at forty-one, so I made the tools I could not find. This is the map I wish someone had put in my hands. Four rooms. The body. The family. The voice. The work. Walk into the one you are standing in.</p>
          </div>
        </section>
        <section className="section" id="rooms">
          <div className="wrap">
            <header className="sechead"><div className="meta"><span className="eyebrow">§ 01 · The House</span></div><div><h2>The four rooms of <em>the rebuild.</em></h2></div></header>
            <div className="rmap-rooms">
              {ROOMS.map((r) => (
                <article className="rmap-room" key={r.num}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.img} alt={r.alt} />
                  <div className="rin"><span className="rlbl">Room {r.num} · {r.label}</span><h3>{r.title}</h3><p>{r.line}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section">
          <div className="wrap">
            <header className="sechead"><div className="meta"><span className="eyebrow">§ 02 · Questions</span></div></header>
            <dl className="rmap-faq">{FAQS.map((f) => (<div key={f.question}><dt>{f.question}</dt><dd>{f.answer}</dd></div>))}</dl>
          </div>
        </section>
        <section className="close">
          <div className="wrap in">
            <div className="line">You are not falling apart. You are becoming MOMumental.</div>
            <div className="cta-row"><a href={SUBSCRIBE_URL} className="pbtn pbtn-pink">Send me the map <span className="ar">→</span></a></div>
          </div>
        </section>
      </div>
    </>
  );
}
