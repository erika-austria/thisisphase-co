// AUTO-GENERATED from phase-redesign/ (The PHASE Redesign handoff). Do not edit by hand.
export type Frag = { wrap: string; html: string; css: string };
export const REDESIGN: Record<string, Frag> = {
  home: {
    wrap: `phz-home`,
    css: `.phz-home {--navy:   #2f4858;
  --cream:  #fff9f1;
  --paper:  #f1f1f0;
  --mint:   #03c9ab;   
  --orchid: #f086dc;   
  --navy-90: rgba(47,72,88,.9);
  --navy-80: rgba(47,72,88,.8);
  --navy-72: rgba(47,72,88,.72);
  --navy-60: rgba(47,72,88,.6);
  --navy-45: rgba(47,72,88,.45);
  --navy-28: rgba(47,72,88,.28);
  --navy-20: rgba(47,72,88,.2);
  --navy-16: rgba(47,72,88,.16);
  --navy-14: rgba(47,72,88,.14);
  --rule:   rgba(47,72,88,.2);
  --shadow: 0 2px 12px rgba(47,72,88,.09);

  --serif: var(--font-instrument), Georgia, serif;
  --sans:  var(--font-archivo), system-ui, -apple-system, sans-serif;
  --news:  var(--font-newsreader), Georgia, serif;

  --wrap: 1080px;
  --gutter: clamp(20px, 5vw, 44px);}
.phz-home *, .phz-home *::before, .phz-home *::after {box-sizing: border-box;}
.phz-home {scroll-behavior: smooth;}
.phz-home {margin: 0;
  background: var(--cream);
  color: var(--navy);
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;}
.phz-home img {max-width: 100%; display: block;}
.phz-home a {color: var(--navy); text-decoration: none;}
.phz-home h1, .phz-home h2, .phz-home h3 {font-family: var(--serif); font-weight: 400; margin: 0; text-wrap: pretty;}
.phz-home em {font-style: italic;}
.phz-home .wrap {max-width: var(--wrap); margin: 0 auto; padding-inline: var(--gutter);}
.phz-home .eyebrow {font: 600 11px/1 var(--sans);
  letter-spacing: .18em;
  text-transform: uppercase;
  color: var(--navy);}
.phz-home .eyebrow--mint {color: var(--mint);}
.phz-home .eyebrow--orchid {color: var(--orchid);}
.phz-home .kicker {font: 400 11px/1 var(--sans);
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--navy-60);}
.phz-home .serif {font-family: var(--serif);}
.phz-home .btn {display: inline-flex; align-items: center; gap: 6px;
  font: 500 13px/1 var(--sans);
  padding: 15px 22px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform .15s ease, box-shadow .15s ease, background .15s ease, color .15s ease;
  white-space: nowrap;}
.phz-home .btn:hover {transform: translateY(-1px);}
.phz-home .btn--mint {background: var(--mint);  color: var(--navy);}
.phz-home .btn--mint:hover {box-shadow: 0 6px 18px rgba(3,201,171,.35);}
.phz-home .btn--navy {background: var(--navy);  color: var(--cream);}
.phz-home .btn--orchid {background: var(--orchid);color: var(--navy); border-radius: 100px;}
.phz-home .btn--ghost {background: transparent; color: var(--navy); border-color: var(--navy-45);}
.phz-home .btn--ghost:hover {background: rgba(47,72,88,.05);}
.phz-home .btn--ghost-light {background: transparent; color: var(--cream); border-color: rgba(255,249,241,.45);}
.phz-home .btn--pill {border-radius: 100px;}
.phz-home .field {display: flex; border: 1px solid var(--navy-45); background: var(--cream);}
.phz-home .field input {flex: 1; min-width: 0; border: 0; background: transparent;
  padding: 14px 15px; font: 400 13px/1 var(--sans); color: var(--navy);}
.phz-home .field input::placeholder {color: var(--navy-45);}
.phz-home .field input:focus {outline: 2px solid var(--mint); outline-offset: -2px;}
.phz-home .field button {border: 0; cursor: pointer; background: var(--mint); color: var(--navy);
  padding: 14px 20px; font: 500 13px/1 var(--sans); white-space: nowrap;}
.phz-home .field--onnavy {border-color: rgba(255,249,241,.45); background: transparent;}
.phz-home .field--onnavy input {color: var(--cream);}
.phz-home .field--onnavy input::placeholder {color: rgba(255,249,241,.55);}
.phz-home .field--onnavy button {background: var(--cream); color: var(--navy);}
.phz-home .site-head {position: sticky; top: 0; z-index: 40;
  background: var(--cream);
  border-bottom: 1px solid var(--navy-16);}
.phz-home .site-head__bar {display: flex; align-items: center; justify-content: space-between;
  gap: 16px; padding-block: 15px;}
.phz-home .brand {display: flex; align-items: center; gap: 11px;}
.phz-home .brand__mark {width: 28px; height: 28px; background: var(--mint); color: var(--navy);
  display: grid; place-items: center; font-family: var(--serif); font-size: 17px;
  border-radius: 5px; flex: none;}
.phz-home .brand__name {font: 600 13px/1 var(--sans); letter-spacing: .05em;}
.phz-home .site-nav {display: flex; align-items: center; gap: 22px;}
.phz-home .site-nav a {font: 500 12.5px/1 var(--sans); color: var(--navy-75, rgba(47,72,88,.75));}
.phz-home .site-nav a:hover {color: var(--navy);}
.phz-home .site-nav .btn {padding: 11px 15px;}
.phz-home .nav-toggle {display: none; border: 1px solid var(--navy-28); background: transparent;
  border-radius: 6px; padding: 8px 10px; cursor: pointer; font-size: 15px; color: var(--navy);}
.phz-home .section {padding-block: clamp(48px, 8vw, 88px);}
.phz-home .section--paper {background: var(--paper);}
.phz-home .section--navy {background: var(--navy); color: var(--cream);}
.phz-home .section-head {display: flex; justify-content: space-between; align-items: baseline;
  gap: 16px; border-bottom: 1px solid var(--orchid); padding-bottom: 12px;
  margin-bottom: 30px; flex-wrap: wrap;}
.phz-home .section-head h2 {font-size: clamp(28px, 4vw, 38px);}
.phz-home .rooms-grid {display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
  background: var(--navy-20); border: 1px solid var(--navy-20);}
.phz-home .room {background: var(--cream); padding: 26px 22px; min-height: 168px;
  display: flex; flex-direction: column; justify-content: space-between;
  gap: 14px; cursor: pointer; transition: background .18s, box-shadow .18s;}
.phz-home .room:hover {background: #fffdf8; box-shadow: inset 0 0 0 1px var(--orchid);}
.phz-home .room__top {display: flex; justify-content: space-between; align-items: baseline;}
.phz-home .room__label {font: 600 11px/1 var(--sans); letter-spacing: .14em; text-transform: uppercase;}
.phz-home .room__num {font-family: var(--serif); font-size: 22px; color: var(--orchid); line-height: 1;}
.phz-home .room__title {font-family: var(--serif); font-size: clamp(20px, 2.4vw, 24px); line-height: 1.12;}
.phz-home .room__desc {font: 400 12.5px/1.45 var(--sans); color: var(--navy-72); margin-top: 6px;}
.phz-home .price-card {border: 1px solid var(--navy-28); background: var(--cream); padding: 26px;}
.phz-home .price-card__amount {font-family: var(--serif); font-size: clamp(46px, 7vw, 56px); line-height: 1; margin: 10px 0 4px;}
.phz-home .site-foot {background: var(--navy); color: var(--cream); padding-block: 56px;}
.phz-home .site-foot a {color: var(--cream); opacity: .82;}
.phz-home .site-foot a:hover {opacity: 1; color: var(--mint);}
.phz-home .foot-grid {display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr; gap: 32px;}
.phz-home .foot-col h4 {font: 600 10.5px/1 var(--sans); letter-spacing: .16em; text-transform: uppercase; margin-bottom: 14px; color: rgba(255,249,241,.65);}
.phz-home .foot-col ul {list-style: none; margin: 0; padding: 0;}
.phz-home .foot-col li {margin-bottom: 9px; font: 400 13px/1.4 var(--sans);}
.phz-home .foot-brand__name {font-family: var(--serif); font-size: 30px; margin-bottom: 10px;}
.phz-home .foot-brand p {font: 400 13px/1.6 var(--sans); opacity: .78; max-width: 34ch; margin: 0;}
.phz-home .foot-legal {margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255,249,241,.2);
  display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap;
  font: 400 11.5px/1.5 var(--sans); opacity: .7;}
.phz-home .media {display: block; width: 100%; height: 100%; object-fit: cover; background: var(--cream);}
.phz-home .avatar {border-radius: 50%; object-fit: cover; flex: none;}
.phz-home .ph {background-image: repeating-linear-gradient(135deg, rgba(47,72,88,.07) 0 6px, transparent 6px 12px);
  display: flex; align-items: flex-end; justify-content: flex-start;
  background-color: var(--cream);}
.phz-home .ph span {font: 500 9.5px/1 ui-monospace, Menlo, monospace; letter-spacing: .08em;
  text-transform: uppercase; padding: 8px 10px; color: var(--navy-45);}
.phz-home .ph--onnavy {background-image: repeating-linear-gradient(135deg, rgba(255,249,241,.14) 0 6px, transparent 6px 12px);}
.phz-home .ph--onnavy span {color: rgba(255,249,241,.65);}
.phz-home .js .reveal {opacity: 0; transform: translateY(16px); transition: opacity .6s ease, transform .6s ease;}
.phz-home .js .reveal.in {opacity: 1; transform: none;}
@media (prefers-reduced-motion: reduce) {
.phz-home .js .reveal {opacity: 1; transform: none; transition: none;}
.phz-home {scroll-behavior: auto;}
.phz-home .btn:hover {transform: none;}
}
@media (max-width: 860px) {
.phz-home .foot-grid {grid-template-columns: 1fr 1fr;}
.phz-home .nav-toggle {display: inline-flex;}
.phz-home .site-nav {display: none; position: absolute; left: 0; right: 0; top: 100%;
    flex-direction: column; align-items: stretch; gap: 0;
    background: var(--cream); border-bottom: 1px solid var(--navy-16);
    padding: 8px var(--gutter) 18px;}
.phz-home .site-nav.open {display: flex;}
.phz-home .site-nav a {padding: 13px 0; border-bottom: 1px solid var(--navy-14);}
.phz-home .site-nav .btn {margin-top: 12px; justify-content: center;}
}
@media (max-width: 640px) {
.phz-home .rooms-grid {grid-template-columns: 1fr;}
.phz-home .foot-grid {grid-template-columns: 1fr;}
.phz-home .section-head {border-bottom: none;}
.phz-home .section-head h2 {border-bottom: 1px solid var(--orchid); padding-bottom: 10px; width: 100%;}
}
.phz-home .hero {padding-block: clamp(40px, 6vw, 72px);}
.phz-home .hero__grid {display: grid; grid-template-columns: .92fr 1.08fr; gap: clamp(28px, 5vw, 48px); align-items: center;}
.phz-home .hero h1 {font-size: clamp(40px, 7vw, 66px); line-height: .98; letter-spacing: -.02em; margin: 16px 0 18px;}
.phz-home .hero__lede {font: 400 clamp(15px,2vw,16.5px)/1.6 var(--sans); color: var(--navy-80); margin: 0 0 22px; max-width: 42ch;}
.phz-home .hero__cta {display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 22px;}
.phz-home .hero__quote {display: flex; align-items: center; gap: 12px; padding-top: 18px; border-top: 1px solid var(--navy-16);}
.phz-home .hero__quote .ph {width: 44px; height: 44px; border-radius: 50%; flex: none; border: 1px solid var(--navy-28);}
.phz-home .hero__quote p {font: 400 12.5px/1.5 var(--sans); color: var(--navy-72); margin: 0; max-width: 40ch;}
.phz-home .floorplan__label {font: 500 10px/1 var(--sans); letter-spacing: .18em; text-transform: uppercase; color: var(--navy-45); margin-bottom: 10px;}
.phz-home .floorplan__note {font: 400 11.5px/1.4 var(--sans); color: var(--navy-60); margin-top: 10px;}
.phz-home .pull {font-family: var(--serif); font-size: clamp(20px, 3vw, 26px); line-height: 1.4; max-width: 74ch; margin: 0 auto; text-align: center;}
.phz-home .cols4 {display: grid; grid-template-columns: repeat(4,1fr);}
.phz-home .col4 {padding: 22px 20px; border-right: 1px solid var(--rule); border-top: 1px solid var(--rule);}
.phz-home .col4:nth-child(4n) {border-right: 0;}
.phz-home .col4__num {font-family: var(--serif); font-size: 34px; line-height: 1; color: var(--orchid);}
.phz-home .col4__label {font: 600 11px/1 var(--sans); letter-spacing: .14em; text-transform: uppercase; margin: 14px 0 8px;}
.phz-home .col4__title {font-family: var(--serif); font-size: 21px; line-height: 1.2; margin-bottom: 8px;}
.phz-home .col4 p {font: 400 13px/1.5 var(--sans); color: var(--navy-72); margin: 0 0 12px;}
.phz-home .col4__price {font: 500 12px/1 var(--sans); border-top: 1px solid var(--rule); padding-top: 10px;}
.phz-home .split {display: grid; grid-template-columns: 1fr 1fr; gap: clamp(28px,5vw,44px); align-items: center;}
.phz-home .statline {display: flex; gap: 28px; padding: 16px 0; border-top: 1px solid var(--rule); border-bottom: 1px solid var(--rule); margin: 18px 0;}
.phz-home .stat__n {font-family: var(--serif); font-size: 30px; line-height: 1;}
.phz-home .stat__l {font: 400 10.5px/1 var(--sans); letter-spacing: .12em; text-transform: uppercase; color: var(--navy-60); margin-top: 5px;}
.phz-home .letter-list > div {padding: 14px 0; display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px solid rgba(47,72,88,.22); gap: 14px;}
.phz-home .letter-list .t {font-family: var(--serif); font-size: 19px;}
.phz-home .letter-list .v {font: 400 11px var(--sans); color: var(--navy-60); white-space: nowrap;}
.phz-home .library__checks {display: grid; grid-template-columns: 1fr 1fr; gap: 8px 20px; font: 400 13px/1.5 var(--sans); color: var(--navy-80);}
.phz-home .library__checks span::before {content: "· "; color: var(--orchid); font-weight: 700;}
.phz-home .podcast-card {border: 1px solid var(--navy-20); padding: 22px;}
.phz-home .pill-row {display: flex; gap: 8px; flex-wrap: wrap; font: 500 11.5px/1 var(--sans); color: var(--navy-72);}
.phz-home .pill-row span {border: 1px solid var(--navy-28); padding: 9px 13px; border-radius: 100px;}
@media (max-width: 860px) {
.phz-home .hero__grid {grid-template-columns: 1fr;}
.phz-home .cols4 {grid-template-columns: 1fr 1fr;}
.phz-home .col4:nth-child(4n) {border-right: 1px solid var(--rule);}
.phz-home .col4:nth-child(2n) {border-right: 0;}
.phz-home .split {grid-template-columns: 1fr;}
.phz-home .library__checks {grid-template-columns: 1fr;}
}
@media (max-width: 520px) {
.phz-home .cols4 {grid-template-columns: 1fr;}
.phz-home .col4 {border-right: 0 !important;}
.phz-home .statline {flex-wrap: wrap; gap: 20px;}
}
`,
    html: `<!-- ============ HEADER ============ -->


<main>

<!-- ============ HERO · The House (1b) ============ -->
<section class="hero">
  <div class="wrap hero__grid">
    <div class="reveal">
      <div class="eyebrow">Four rooms · one reinvention</div>
      <h1>You are not in a phase.<br>You are in <em>The&nbsp;PHASE™.</em></h1>
      <p class="hero__lede">The whole season of rebuilding everything. The body. The family. The voice. The work. These are the tools I built while I was still in it.</p>
      <div class="hero__cta">
        <a class="btn btn--mint" href="/report">Read the free report →</a>
        <a class="btn btn--ghost" href="#library">The Library · $228 →</a>
      </div>
      <div class="hero__quote">
        <img class="avatar" src="/redesign/erika-portrait.png" alt="Erika Hanafin Austria" style="width:44px;height:44px;object-position:50% 12%;border:1px solid var(--navy-28)">
        <p>“I did not write these from the other side. I wrote them from inside the wreckage.” <strong>Erika Hanafin Austria</strong></p>
      </div>
    </div>

    <div class="reveal" id="rooms">
      <div class="floorplan__label">Enter where you're standing</div>
      <div class="rooms-grid">
        <a class="room" href="/body">
          <div class="room__top"><span class="room__label">The Body</span><span class="room__num">I</span></div>
          <div><div class="room__title">Perimenopause</div><div class="room__desc">The map you should have been handed at 38 · Vol. I-V</div></div>
        </a>
        <a class="room" href="/family">
          <div class="room__top"><span class="room__label">The Family</span><span class="room__num">II</span></div>
          <div><div class="room__title">Co-Parenting Power Method®</div><div class="room__desc">The two-house rebuild · 20 scripts</div></div>
        </a>
        <a class="room" href="/voice">
          <div class="room__top"><span class="room__label">The Voice</span><span class="room__num">III</span></div>
          <div><div class="room__title">Self-Trust &amp; Confidence</div><div class="room__desc">Coming back to your own knowing · Vol. IV</div></div>
        </a>
        <a class="room" href="/work">
          <div class="room__top"><span class="room__label">The Work</span><span class="room__num">IV</span></div>
          <div><div class="room__title">Building Through It</div><div class="room__desc">Run it like an operator would · 7 tools</div></div>
        </a>
      </div>
      <div class="floorplan__note">Start where it hurts today. The rest of the house is here when you are ready.</div>
    </div>
  </div>
</section>

<!-- ============ PULL QUOTE ============ -->
<section class="section--paper" style="padding-block: clamp(36px,6vw,56px)">
  <div class="wrap">
    <p class="pull reveal">“Everyone else hands you one room. A protocol for the hormones. A course for the split. A planner for the work. You are living all of it at once. This is the house for the whole season.”</p>
  </div>
</section>

<!-- ============ THE FOUR ROOMS · detail (1a treatment) ============ -->
<section class="section">
  <div class="wrap">
    <div class="section-head reveal">
      <h2>The four rooms</h2>
      <span class="kicker">Start where it hurts today</span>
    </div>
    <div class="cols4 reveal">
      <div class="col4">
        <div class="col4__num">I</div>
        <div class="col4__label">The Body</div>
        <div class="col4__title">The PHASE™ · Perimenopause</div>
        <p>The map you should have been handed at 38. Test, do not guess.</p>
        <a class="col4__price" href="/body">Vol. I-V · $27 ea →</a>
      </div>
      <div class="col4">
        <div class="col4__num">II</div>
        <div class="col4__label">The Family</div>
        <div class="col4__title">The Co-Parenting Power Method®</div>
        <p>Twenty scripts already written, for the messages you dread sending.</p>
        <a class="col4__price" href="/family">$97 →</a>
      </div>
      <div class="col4">
        <div class="col4__num">III</div>
        <div class="col4__label">The Voice</div>
        <div class="col4__title">Self-Trust &amp; Confidence</div>
        <p>Coming back to your own knowing. Vol. IV.</p>
        <a class="col4__price" href="/voice">$27 →</a>
      </div>
      <div class="col4">
        <div class="col4__num">IV</div>
        <div class="col4__label">The Work</div>
        <div class="col4__title">Building Through It</div>
        <p>Run your life the way an operator would. Seven tools.</p>
        <a class="col4__price" href="/work">from $17 →</a>
      </div>
    </div>
  </div>
</section>

<!-- ============ THE REPORT · lead magnet (1a) ============ -->
<section class="section--paper section">
  <div class="wrap split">
    <div class="reveal">
      <div class="eyebrow">Free · The MOMumental Report</div>
      <h3 style="font-size:clamp(28px,4vw,34px);line-height:1.1;margin:10px 0 12px">The numbers behind <em>the rebuild.</em></h3>
      <p style="color:var(--navy-80);max-width:46ch;margin:0 0 4px">Fifteen pages of research on what actually happens to a woman in midlife. Twenty sources, four rooms, and the letter I wrote from inside it.</p>
      <div class="statline">
        <div><div class="stat__n">15</div><div class="stat__l">Pages</div></div>
        <div><div class="stat__n">4</div><div class="stat__l">Rooms</div></div>
        <div><div class="stat__n">20</div><div class="stat__l">Sources cited</div></div>
      </div>
      <form class="field" onsubmit="return false" aria-label="Get the free report">
        <input type="email" placeholder="your@email.com" aria-label="Email address">
        <button type="submit">Send me the report →</button>
      </form>
    </div>
    <div class="reveal" style="min-height:280px;display:flex;align-items:center;justify-content:center">
      <img src="/redesign/state-of-reinvention-cover.png" alt="State of Reinvention 2026, The MOMumental Report cover" style="max-height:360px;max-width:100%;object-fit:contain;box-shadow:0 12px 36px rgba(47,72,88,.22)">
    </div>
  </div>
</section>

<!-- ============ TUESDAY LETTER (1b) ============ -->
<section class="section" id="letter">
  <div class="wrap split">
    <div class="reveal">
      <div class="eyebrow">Every Tuesday · free</div>
      <h2 style="font-size:clamp(30px,5vw,42px);line-height:1.02;margin:14px 0 12px">A dispatch from inside <em>the rebuild.</em></h2>
      <p style="color:var(--navy-80);max-width:40ch;margin:0 0 20px">The whole season, one letter. Read a few, then never miss one.</p>
      <form class="field" onsubmit="return false" aria-label="Subscribe to the Tuesday letter">
        <input type="email" placeholder="your@email.com" aria-label="Email address">
        <button type="submit">Subscribe</button>
      </form>
    </div>
    <div class="letter-list reveal">
      <div><span class="t">Two Chapters, One Body, One Year</span><span class="v">Vol. I</span></div>
      <div><span class="t">Building Through It</span><span class="v">Vol. IV</span></div>
      <div style="border-bottom:0"><span class="t">Test, do not guess</span><span class="v">Report</span></div>
    </div>
  </div>
</section>

<!-- ============ THE LETTER · origin (1c navy) ============ -->
<section class="section--navy section">
  <div class="wrap split">
    <div class="reveal">
      <div class="eyebrow eyebrow--mint">Read the letter</div>
      <h3 style="font-size:clamp(30px,5vw,38px);line-height:1.08;margin:12px 0 12px">The PHASE™ started as <em>a letter.</em></h3>
      <p style="opacity:.82;max-width:42ch;margin:0">Every Tuesday, a dispatch from inside the rebuild. I did not write these from the other side. I wrote them from inside the wreckage, because that is when I needed them.</p>
    </div>
    <div class="reveal">
      <form class="field field--onnavy" onsubmit="return false" style="margin-bottom:14px" aria-label="Subscribe free">
        <input type="email" placeholder="your@email.com" aria-label="Email address">
        <button type="submit">Subscribe free</button>
      </form>
      <div style="border-top:1px solid rgba(255,249,241,.25);padding-top:12px;font:400 13px/1.5 var(--sans);opacity:.82">
        Latest: <span class="serif" style="font-size:15px">Two Chapters, One Body, One Year</span> · <span class="serif" style="font-size:15px">Building Through It</span>
      </div>
    </div>
  </div>
</section>

<!-- ============ THE LIBRARY (1b) ============ -->
<section class="section" id="library">
  <div class="wrap split" style="grid-template-columns:1.2fr 1fr">
    <div class="reveal">
      <h2 style="font-size:clamp(30px,5vw,38px);line-height:1.05;margin:0 0 12px">The PHASE™ <em>Library.</em></h2>
      <p style="color:var(--navy-80);max-width:48ch;margin:0 0 18px">Every tool I built in the wreckage. Every room, every volume. One payment, yours forever.</p>
      <div class="library__checks">
        <span>Every PHASE™ volume, I through V</span>
        <span>The Co-Parenting Power Method®</span>
        <span>Every Voice and Work tool</span>
        <span>Lifetime access · every future release</span>
      </div>
    </div>
    <div class="price-card reveal">
      <div class="eyebrow" style="letter-spacing:.16em;color:var(--navy-60)">One payment · yours forever</div>
      <div class="price-card__amount">$228</div>
      <div style="font:400 12.5px/1.5 var(--sans);color:var(--navy-72);margin-bottom:16px">All four rooms · five volumes · 14-day promise</div>
      <a class="btn btn--mint btn--pill" style="width:100%;justify-content:center" href="https://momumentalreinvention.com/p/the-library">Open The PHASE™ Library →</a>
    </div>
  </div>
</section>

<!-- ============ PODCAST STRIP (1c) ============ -->
<section class="section--paper section">
  <div class="wrap split" style="grid-template-columns:1fr 1fr">
    <div class="reveal">
      <div class="eyebrow">The Podcast · weekly</div>
      <h3 style="font-size:clamp(26px,4vw,32px);line-height:1.1;margin:10px 0 10px">Read a room, or <em>hear</em> it.</h3>
      <p style="color:var(--navy-80);max-width:42ch;margin:0">Every volume read aloud, plus a weekly episode from inside the season. Made for the car and for 5am.</p>
    </div>
    <div class="podcast-card reveal">
      <div style="display:flex;gap:14px;align-items:center;margin-bottom:16px">
        <img src="/redesign/podcast-cover.jpg" alt="MOMumental Reinvention podcast cover" style="width:64px;height:64px;flex:none;object-fit:cover;border:1px solid var(--navy-16)">
        <div>
          <div class="eyebrow" style="color:var(--navy-60);letter-spacing:.16em">The Podcast · weekly</div>
          <div class="serif" style="font-size:20px;margin-top:5px">The PHASE™ Podcast</div>
        </div>
      </div>
      <div class="pill-row">
        <span>Spotify</span><span>YouTube</span><span>Substack</span>
      </div>
    </div>
  </div>
</section>

</main>

<!-- ============ FOOTER ============ -->`,
  },
  body: {
    wrap: `phz-body`,
    css: `.phz-body {--navy:   #2f4858;
  --cream:  #fff9f1;
  --paper:  #f1f1f0;
  --mint:   #03c9ab;   
  --orchid: #f086dc;   
  --navy-90: rgba(47,72,88,.9);
  --navy-80: rgba(47,72,88,.8);
  --navy-72: rgba(47,72,88,.72);
  --navy-60: rgba(47,72,88,.6);
  --navy-45: rgba(47,72,88,.45);
  --navy-28: rgba(47,72,88,.28);
  --navy-20: rgba(47,72,88,.2);
  --navy-16: rgba(47,72,88,.16);
  --navy-14: rgba(47,72,88,.14);
  --rule:   rgba(47,72,88,.2);
  --shadow: 0 2px 12px rgba(47,72,88,.09);

  --serif: var(--font-instrument), Georgia, serif;
  --sans:  var(--font-archivo), system-ui, -apple-system, sans-serif;
  --news:  var(--font-newsreader), Georgia, serif;

  --wrap: 1080px;
  --gutter: clamp(20px, 5vw, 44px);}
.phz-body *, .phz-body *::before, .phz-body *::after {box-sizing: border-box;}
.phz-body {scroll-behavior: smooth;}
.phz-body {margin: 0;
  background: var(--cream);
  color: var(--navy);
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;}
.phz-body img {max-width: 100%; display: block;}
.phz-body a {color: var(--navy); text-decoration: none;}
.phz-body h1, .phz-body h2, .phz-body h3 {font-family: var(--serif); font-weight: 400; margin: 0; text-wrap: pretty;}
.phz-body em {font-style: italic;}
.phz-body .wrap {max-width: var(--wrap); margin: 0 auto; padding-inline: var(--gutter);}
.phz-body .eyebrow {font: 600 11px/1 var(--sans);
  letter-spacing: .18em;
  text-transform: uppercase;
  color: var(--navy);}
.phz-body .eyebrow--mint {color: var(--mint);}
.phz-body .eyebrow--orchid {color: var(--orchid);}
.phz-body .kicker {font: 400 11px/1 var(--sans);
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--navy-60);}
.phz-body .serif {font-family: var(--serif);}
.phz-body .btn {display: inline-flex; align-items: center; gap: 6px;
  font: 500 13px/1 var(--sans);
  padding: 15px 22px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform .15s ease, box-shadow .15s ease, background .15s ease, color .15s ease;
  white-space: nowrap;}
.phz-body .btn:hover {transform: translateY(-1px);}
.phz-body .btn--mint {background: var(--mint);  color: var(--navy);}
.phz-body .btn--mint:hover {box-shadow: 0 6px 18px rgba(3,201,171,.35);}
.phz-body .btn--navy {background: var(--navy);  color: var(--cream);}
.phz-body .btn--orchid {background: var(--orchid);color: var(--navy); border-radius: 100px;}
.phz-body .btn--ghost {background: transparent; color: var(--navy); border-color: var(--navy-45);}
.phz-body .btn--ghost:hover {background: rgba(47,72,88,.05);}
.phz-body .btn--ghost-light {background: transparent; color: var(--cream); border-color: rgba(255,249,241,.45);}
.phz-body .btn--pill {border-radius: 100px;}
.phz-body .field {display: flex; border: 1px solid var(--navy-45); background: var(--cream);}
.phz-body .field input {flex: 1; min-width: 0; border: 0; background: transparent;
  padding: 14px 15px; font: 400 13px/1 var(--sans); color: var(--navy);}
.phz-body .field input::placeholder {color: var(--navy-45);}
.phz-body .field input:focus {outline: 2px solid var(--mint); outline-offset: -2px;}
.phz-body .field button {border: 0; cursor: pointer; background: var(--mint); color: var(--navy);
  padding: 14px 20px; font: 500 13px/1 var(--sans); white-space: nowrap;}
.phz-body .field--onnavy {border-color: rgba(255,249,241,.45); background: transparent;}
.phz-body .field--onnavy input {color: var(--cream);}
.phz-body .field--onnavy input::placeholder {color: rgba(255,249,241,.55);}
.phz-body .field--onnavy button {background: var(--cream); color: var(--navy);}
.phz-body .site-head {position: sticky; top: 0; z-index: 40;
  background: var(--cream);
  border-bottom: 1px solid var(--navy-16);}
.phz-body .site-head__bar {display: flex; align-items: center; justify-content: space-between;
  gap: 16px; padding-block: 15px;}
.phz-body .brand {display: flex; align-items: center; gap: 11px;}
.phz-body .brand__mark {width: 28px; height: 28px; background: var(--mint); color: var(--navy);
  display: grid; place-items: center; font-family: var(--serif); font-size: 17px;
  border-radius: 5px; flex: none;}
.phz-body .brand__name {font: 600 13px/1 var(--sans); letter-spacing: .05em;}
.phz-body .site-nav {display: flex; align-items: center; gap: 22px;}
.phz-body .site-nav a {font: 500 12.5px/1 var(--sans); color: var(--navy-75, rgba(47,72,88,.75));}
.phz-body .site-nav a:hover {color: var(--navy);}
.phz-body .site-nav .btn {padding: 11px 15px;}
.phz-body .nav-toggle {display: none; border: 1px solid var(--navy-28); background: transparent;
  border-radius: 6px; padding: 8px 10px; cursor: pointer; font-size: 15px; color: var(--navy);}
.phz-body .section {padding-block: clamp(48px, 8vw, 88px);}
.phz-body .section--paper {background: var(--paper);}
.phz-body .section--navy {background: var(--navy); color: var(--cream);}
.phz-body .section-head {display: flex; justify-content: space-between; align-items: baseline;
  gap: 16px; border-bottom: 1px solid var(--orchid); padding-bottom: 12px;
  margin-bottom: 30px; flex-wrap: wrap;}
.phz-body .section-head h2 {font-size: clamp(28px, 4vw, 38px);}
.phz-body .rooms-grid {display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
  background: var(--navy-20); border: 1px solid var(--navy-20);}
.phz-body .room {background: var(--cream); padding: 26px 22px; min-height: 168px;
  display: flex; flex-direction: column; justify-content: space-between;
  gap: 14px; cursor: pointer; transition: background .18s, box-shadow .18s;}
.phz-body .room:hover {background: #fffdf8; box-shadow: inset 0 0 0 1px var(--orchid);}
.phz-body .room__top {display: flex; justify-content: space-between; align-items: baseline;}
.phz-body .room__label {font: 600 11px/1 var(--sans); letter-spacing: .14em; text-transform: uppercase;}
.phz-body .room__num {font-family: var(--serif); font-size: 22px; color: var(--orchid); line-height: 1;}
.phz-body .room__title {font-family: var(--serif); font-size: clamp(20px, 2.4vw, 24px); line-height: 1.12;}
.phz-body .room__desc {font: 400 12.5px/1.45 var(--sans); color: var(--navy-72); margin-top: 6px;}
.phz-body .price-card {border: 1px solid var(--navy-28); background: var(--cream); padding: 26px;}
.phz-body .price-card__amount {font-family: var(--serif); font-size: clamp(46px, 7vw, 56px); line-height: 1; margin: 10px 0 4px;}
.phz-body .site-foot {background: var(--navy); color: var(--cream); padding-block: 56px;}
.phz-body .site-foot a {color: var(--cream); opacity: .82;}
.phz-body .site-foot a:hover {opacity: 1; color: var(--mint);}
.phz-body .foot-grid {display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr; gap: 32px;}
.phz-body .foot-col h4 {font: 600 10.5px/1 var(--sans); letter-spacing: .16em; text-transform: uppercase; margin-bottom: 14px; color: rgba(255,249,241,.65);}
.phz-body .foot-col ul {list-style: none; margin: 0; padding: 0;}
.phz-body .foot-col li {margin-bottom: 9px; font: 400 13px/1.4 var(--sans);}
.phz-body .foot-brand__name {font-family: var(--serif); font-size: 30px; margin-bottom: 10px;}
.phz-body .foot-brand p {font: 400 13px/1.6 var(--sans); opacity: .78; max-width: 34ch; margin: 0;}
.phz-body .foot-legal {margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255,249,241,.2);
  display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap;
  font: 400 11.5px/1.5 var(--sans); opacity: .7;}
.phz-body .media {display: block; width: 100%; height: 100%; object-fit: cover; background: var(--cream);}
.phz-body .avatar {border-radius: 50%; object-fit: cover; flex: none;}
.phz-body .ph {background-image: repeating-linear-gradient(135deg, rgba(47,72,88,.07) 0 6px, transparent 6px 12px);
  display: flex; align-items: flex-end; justify-content: flex-start;
  background-color: var(--cream);}
.phz-body .ph span {font: 500 9.5px/1 ui-monospace, Menlo, monospace; letter-spacing: .08em;
  text-transform: uppercase; padding: 8px 10px; color: var(--navy-45);}
.phz-body .ph--onnavy {background-image: repeating-linear-gradient(135deg, rgba(255,249,241,.14) 0 6px, transparent 6px 12px);}
.phz-body .ph--onnavy span {color: rgba(255,249,241,.65);}
.phz-body .js .reveal {opacity: 0; transform: translateY(16px); transition: opacity .6s ease, transform .6s ease;}
.phz-body .js .reveal.in {opacity: 1; transform: none;}
@media (prefers-reduced-motion: reduce) {
.phz-body .js .reveal {opacity: 1; transform: none; transition: none;}
.phz-body {scroll-behavior: auto;}
.phz-body .btn:hover {transform: none;}
}
@media (max-width: 860px) {
.phz-body .foot-grid {grid-template-columns: 1fr 1fr;}
.phz-body .nav-toggle {display: inline-flex;}
.phz-body .site-nav {display: none; position: absolute; left: 0; right: 0; top: 100%;
    flex-direction: column; align-items: stretch; gap: 0;
    background: var(--cream); border-bottom: 1px solid var(--navy-16);
    padding: 8px var(--gutter) 18px;}
.phz-body .site-nav.open {display: flex;}
.phz-body .site-nav a {padding: 13px 0; border-bottom: 1px solid var(--navy-14);}
.phz-body .site-nav .btn {margin-top: 12px; justify-content: center;}
}
@media (max-width: 640px) {
.phz-body .rooms-grid {grid-template-columns: 1fr;}
.phz-body .foot-grid {grid-template-columns: 1fr;}
.phz-body .section-head {border-bottom: none;}
.phz-body .section-head h2 {border-bottom: 1px solid var(--orchid); padding-bottom: 10px; width: 100%;}
}
.phz-body .crumb {display: flex; align-items: center; gap: 10px; font: 500 12px/1 var(--sans); color: var(--navy-60); flex-wrap: wrap;}
.phz-body .crumb a {color: var(--navy-60);}
.phz-body .crumb a:hover {color: var(--navy);}
.phz-body .crumb .here {color: var(--navy);}
.phz-body .room-hero {padding-block: clamp(36px,6vw,52px);}
.phz-body .room-hero__meta {display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 16px; flex-wrap: wrap; gap: 10px;}
.phz-body .room-hero h1 {font-size: clamp(38px,7vw,56px); line-height: 1; letter-spacing: -.02em; margin: 0 0 16px; max-width: 22ch;}
.phz-body .room-hero p {font: 400 clamp(15px,2vw,16px)/1.6 var(--sans); color: var(--navy-80); max-width: 56ch; margin: 0 0 22px;}
.phz-body .room-hero__cta {display: flex; gap: 10px; flex-wrap: wrap;}
.phz-body .roomstats {display: grid; grid-template-columns: repeat(3,1fr); background: var(--paper); border-block: 1px solid var(--navy-16);}
.phz-body .roomstats > div {padding: 22px 24px; border-right: 1px solid var(--navy-16);}
.phz-body .roomstats > div:last-child {border-right: 0;}
.phz-body .roomstats .n {font-family: var(--serif); font-size: 30px; line-height: 1;}
.phz-body .roomstats .l {font: 400 11px/1.4 var(--sans); letter-spacing: .1em; text-transform: uppercase; color: var(--navy-60); margin-top: 6px;}
.phz-body .vol {display: grid; grid-template-columns: 44px 1fr 130px 80px; gap: 18px; align-items: center; padding: 18px 12px 18px 0; border-bottom: 1px solid var(--navy-14); cursor: pointer; transition: background .16s, box-shadow .16s;}
.phz-body .vol:hover {background: #fffdf8; box-shadow: inset 0 0 0 1px var(--orchid);}
.phz-body .vol__num {font-family: var(--serif); font-size: 24px; color: var(--orchid);}
.phz-body .vol__t {font-family: var(--serif); font-size: 21px;}
.phz-body .vol__d {font: 400 12.5px/1.4 var(--sans); color: var(--navy-72); margin-top: 4px;}
.phz-body .vol__pg {font: 400 12px var(--sans); color: var(--navy-60);}
.phz-body .vol__price {font: 500 13px var(--sans); text-align: right;}
.phz-body .report-cta {border: 1px solid var(--navy-20); background: var(--cream); padding: 24px; display: grid; grid-template-columns: 1fr 1fr; gap: 28px; align-items: center;}
.phz-body .nextdoor {display: flex; justify-content: space-between; align-items: center; gap: 24px; flex-wrap: wrap;}
.phz-body .nextdoor .serif {font-size: clamp(20px,3vw,24px); max-width: 44ch;}
@media (max-width: 640px) {
.phz-body .roomstats {grid-template-columns: 1fr;}
.phz-body .roomstats > div {border-right: 0; border-bottom: 1px solid var(--navy-16);}
.phz-body .roomstats > div:last-child {border-bottom: 0;}
.phz-body .vol {grid-template-columns: 34px 1fr;}
.phz-body .vol__pg, .phz-body .vol__price {display: none;}
.phz-body .report-cta {grid-template-columns: 1fr;}
}
`,
    html: `<main>

<div class="wrap" style="padding-top:20px">
  <nav class="crumb" aria-label="Breadcrumb">
    <a href="/">The PHASE™</a><span>/</span>
    <a href="/#rooms">Rooms</a><span>/</span>
    <span class="here">The Body</span>
  </nav>
</div>

<!-- HERO -->
<section class="room-hero">
  <div class="wrap">
    <div class="room-hero__meta reveal">
      <div class="eyebrow">Room I · The Body</div>
      <div class="kicker">Vol. I-V · $27 each</div>
    </div>
    <h1 class="reveal">The map you should have been handed at 38.</h1>
    <p class="reveal">Test, do not guess. This is the conversation I had to fight for at forty-two. Hormones, labs, HRT, and the language to walk into an appointment with.</p>
    <div class="room-hero__cta reveal">
      <a class="btn btn--mint" href="#volumes">Start with Vol. I · $27 →</a>
      <a class="btn btn--ghost" href="/#library">All five in the Library · $228 →</a>
    </div>
  </div>
</section>

<!-- STATS -->
<div class="wrap"><div class="roomstats reveal">
  <div><div class="n">5</div><div class="l">Volumes in this room</div></div>
  <div><div class="n">20</div><div class="l">Sources cited</div></div>
  <div><div class="n">14</div><div class="l">Day promise</div></div>
</div></div>

<!-- VOLUMES -->
<section class="section" id="volumes" style="padding-top:clamp(36px,6vw,56px)">
  <div class="wrap">
    <div class="section-head reveal">
      <h2 style="font-size:clamp(24px,3.5vw,28px)">The volumes</h2>
      <span class="kicker">Read in any order</span>
    </div>
    <div class="reveal">
      <div class="vol">
        <span class="vol__num">I</span>
        <div><div class="vol__t">The Symptom Map</div><div class="vol__d">Thirty-four symptoms, named, so you stop wondering if it's you.</div></div>
        <span class="vol__pg">42 pages</span><span class="vol__price">$27 →</span>
      </div>
      <div class="vol">
        <span class="vol__num">II</span>
        <div><div class="vol__t">Test, Do Not Guess</div><div class="vol__d">Which labs to ask for, and the script for asking.</div></div>
        <span class="vol__pg">38 pages</span><span class="vol__price">$27 →</span>
      </div>
      <div class="vol">
        <span class="vol__num">III</span>
        <div><div class="vol__t">The HRT Conversation</div><div class="vol__d">What I wish I had known before the first appointment.</div></div>
        <span class="vol__pg">44 pages</span><span class="vol__price">$27 →</span>
      </div>
      <div class="vol">
        <span class="vol__num">IV</span>
        <div><div class="vol__t">Sleep, Strength, Steadiness</div><div class="vol__d">The three levers that moved for me, and how.</div></div>
        <span class="vol__pg">36 pages</span><span class="vol__price">$27 →</span>
      </div>
      <div class="vol" style="border-bottom:0">
        <span class="vol__num">V</span>
        <div><div class="vol__t">The Body at Forty-One</div><div class="vol__d">Motherhood while my body was becoming something else.</div></div>
        <span class="vol__pg">40 pages</span><span class="vol__price">$27 →</span>
      </div>
    </div>
  </div>
</section>

<!-- REPORT CTA -->
<section style="padding-bottom:clamp(36px,6vw,52px)">
  <div class="wrap"><div class="report-cta reveal">
    <div>
      <div class="eyebrow" style="margin-bottom:10px">Before you buy anything</div>
      <h3 style="font-size:clamp(24px,3.5vw,28px);line-height:1.1;margin:0 0 8px">Read the free report first.</h3>
      <p style="font:400 13px/1.55 var(--sans);color:var(--navy-72);margin:0">Fifteen pages, twenty sources, four rooms. It lands in your inbox.</p>
    </div>
    <form class="field" onsubmit="return false" aria-label="Get the free report">
      <input type="email" placeholder="your@email.com" aria-label="Email address">
      <button type="submit">Send it →</button>
    </form>
  </div></div>
</section>

<!-- NEXT DOOR -->
<section class="section--paper" style="padding-block:clamp(28px,4vw,36px)">
  <div class="wrap nextdoor reveal">
    <div class="serif">Next door: <em>The Family.</em> The playbook for the two-house rebuild.</div>
    <a class="btn btn--ghost" href="/family">Enter Room II →</a>
  </div>
</section>

</main>`,
  },
  family: {
    wrap: `phz-family`,
    css: `.phz-family {--navy:   #2f4858;
  --cream:  #fff9f1;
  --paper:  #f1f1f0;
  --mint:   #03c9ab;   
  --orchid: #f086dc;   
  --navy-90: rgba(47,72,88,.9);
  --navy-80: rgba(47,72,88,.8);
  --navy-72: rgba(47,72,88,.72);
  --navy-60: rgba(47,72,88,.6);
  --navy-45: rgba(47,72,88,.45);
  --navy-28: rgba(47,72,88,.28);
  --navy-20: rgba(47,72,88,.2);
  --navy-16: rgba(47,72,88,.16);
  --navy-14: rgba(47,72,88,.14);
  --rule:   rgba(47,72,88,.2);
  --shadow: 0 2px 12px rgba(47,72,88,.09);

  --serif: var(--font-instrument), Georgia, serif;
  --sans:  var(--font-archivo), system-ui, -apple-system, sans-serif;
  --news:  var(--font-newsreader), Georgia, serif;

  --wrap: 1080px;
  --gutter: clamp(20px, 5vw, 44px);}
.phz-family *, .phz-family *::before, .phz-family *::after {box-sizing: border-box;}
.phz-family {scroll-behavior: smooth;}
.phz-family {margin: 0;
  background: var(--cream);
  color: var(--navy);
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;}
.phz-family img {max-width: 100%; display: block;}
.phz-family a {color: var(--navy); text-decoration: none;}
.phz-family h1, .phz-family h2, .phz-family h3 {font-family: var(--serif); font-weight: 400; margin: 0; text-wrap: pretty;}
.phz-family em {font-style: italic;}
.phz-family .wrap {max-width: var(--wrap); margin: 0 auto; padding-inline: var(--gutter);}
.phz-family .eyebrow {font: 600 11px/1 var(--sans);
  letter-spacing: .18em;
  text-transform: uppercase;
  color: var(--navy);}
.phz-family .eyebrow--mint {color: var(--mint);}
.phz-family .eyebrow--orchid {color: var(--orchid);}
.phz-family .kicker {font: 400 11px/1 var(--sans);
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--navy-60);}
.phz-family .serif {font-family: var(--serif);}
.phz-family .btn {display: inline-flex; align-items: center; gap: 6px;
  font: 500 13px/1 var(--sans);
  padding: 15px 22px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform .15s ease, box-shadow .15s ease, background .15s ease, color .15s ease;
  white-space: nowrap;}
.phz-family .btn:hover {transform: translateY(-1px);}
.phz-family .btn--mint {background: var(--mint);  color: var(--navy);}
.phz-family .btn--mint:hover {box-shadow: 0 6px 18px rgba(3,201,171,.35);}
.phz-family .btn--navy {background: var(--navy);  color: var(--cream);}
.phz-family .btn--orchid {background: var(--orchid);color: var(--navy); border-radius: 100px;}
.phz-family .btn--ghost {background: transparent; color: var(--navy); border-color: var(--navy-45);}
.phz-family .btn--ghost:hover {background: rgba(47,72,88,.05);}
.phz-family .btn--ghost-light {background: transparent; color: var(--cream); border-color: rgba(255,249,241,.45);}
.phz-family .btn--pill {border-radius: 100px;}
.phz-family .field {display: flex; border: 1px solid var(--navy-45); background: var(--cream);}
.phz-family .field input {flex: 1; min-width: 0; border: 0; background: transparent;
  padding: 14px 15px; font: 400 13px/1 var(--sans); color: var(--navy);}
.phz-family .field input::placeholder {color: var(--navy-45);}
.phz-family .field input:focus {outline: 2px solid var(--mint); outline-offset: -2px;}
.phz-family .field button {border: 0; cursor: pointer; background: var(--mint); color: var(--navy);
  padding: 14px 20px; font: 500 13px/1 var(--sans); white-space: nowrap;}
.phz-family .field--onnavy {border-color: rgba(255,249,241,.45); background: transparent;}
.phz-family .field--onnavy input {color: var(--cream);}
.phz-family .field--onnavy input::placeholder {color: rgba(255,249,241,.55);}
.phz-family .field--onnavy button {background: var(--cream); color: var(--navy);}
.phz-family .site-head {position: sticky; top: 0; z-index: 40;
  background: var(--cream);
  border-bottom: 1px solid var(--navy-16);}
.phz-family .site-head__bar {display: flex; align-items: center; justify-content: space-between;
  gap: 16px; padding-block: 15px;}
.phz-family .brand {display: flex; align-items: center; gap: 11px;}
.phz-family .brand__mark {width: 28px; height: 28px; background: var(--mint); color: var(--navy);
  display: grid; place-items: center; font-family: var(--serif); font-size: 17px;
  border-radius: 5px; flex: none;}
.phz-family .brand__name {font: 600 13px/1 var(--sans); letter-spacing: .05em;}
.phz-family .site-nav {display: flex; align-items: center; gap: 22px;}
.phz-family .site-nav a {font: 500 12.5px/1 var(--sans); color: var(--navy-75, rgba(47,72,88,.75));}
.phz-family .site-nav a:hover {color: var(--navy);}
.phz-family .site-nav .btn {padding: 11px 15px;}
.phz-family .nav-toggle {display: none; border: 1px solid var(--navy-28); background: transparent;
  border-radius: 6px; padding: 8px 10px; cursor: pointer; font-size: 15px; color: var(--navy);}
.phz-family .section {padding-block: clamp(48px, 8vw, 88px);}
.phz-family .section--paper {background: var(--paper);}
.phz-family .section--navy {background: var(--navy); color: var(--cream);}
.phz-family .section-head {display: flex; justify-content: space-between; align-items: baseline;
  gap: 16px; border-bottom: 1px solid var(--orchid); padding-bottom: 12px;
  margin-bottom: 30px; flex-wrap: wrap;}
.phz-family .section-head h2 {font-size: clamp(28px, 4vw, 38px);}
.phz-family .rooms-grid {display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
  background: var(--navy-20); border: 1px solid var(--navy-20);}
.phz-family .room {background: var(--cream); padding: 26px 22px; min-height: 168px;
  display: flex; flex-direction: column; justify-content: space-between;
  gap: 14px; cursor: pointer; transition: background .18s, box-shadow .18s;}
.phz-family .room:hover {background: #fffdf8; box-shadow: inset 0 0 0 1px var(--orchid);}
.phz-family .room__top {display: flex; justify-content: space-between; align-items: baseline;}
.phz-family .room__label {font: 600 11px/1 var(--sans); letter-spacing: .14em; text-transform: uppercase;}
.phz-family .room__num {font-family: var(--serif); font-size: 22px; color: var(--orchid); line-height: 1;}
.phz-family .room__title {font-family: var(--serif); font-size: clamp(20px, 2.4vw, 24px); line-height: 1.12;}
.phz-family .room__desc {font: 400 12.5px/1.45 var(--sans); color: var(--navy-72); margin-top: 6px;}
.phz-family .price-card {border: 1px solid var(--navy-28); background: var(--cream); padding: 26px;}
.phz-family .price-card__amount {font-family: var(--serif); font-size: clamp(46px, 7vw, 56px); line-height: 1; margin: 10px 0 4px;}
.phz-family .site-foot {background: var(--navy); color: var(--cream); padding-block: 56px;}
.phz-family .site-foot a {color: var(--cream); opacity: .82;}
.phz-family .site-foot a:hover {opacity: 1; color: var(--mint);}
.phz-family .foot-grid {display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr; gap: 32px;}
.phz-family .foot-col h4 {font: 600 10.5px/1 var(--sans); letter-spacing: .16em; text-transform: uppercase; margin-bottom: 14px; color: rgba(255,249,241,.65);}
.phz-family .foot-col ul {list-style: none; margin: 0; padding: 0;}
.phz-family .foot-col li {margin-bottom: 9px; font: 400 13px/1.4 var(--sans);}
.phz-family .foot-brand__name {font-family: var(--serif); font-size: 30px; margin-bottom: 10px;}
.phz-family .foot-brand p {font: 400 13px/1.6 var(--sans); opacity: .78; max-width: 34ch; margin: 0;}
.phz-family .foot-legal {margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255,249,241,.2);
  display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap;
  font: 400 11.5px/1.5 var(--sans); opacity: .7;}
.phz-family .media {display: block; width: 100%; height: 100%; object-fit: cover; background: var(--cream);}
.phz-family .avatar {border-radius: 50%; object-fit: cover; flex: none;}
.phz-family .ph {background-image: repeating-linear-gradient(135deg, rgba(47,72,88,.07) 0 6px, transparent 6px 12px);
  display: flex; align-items: flex-end; justify-content: flex-start;
  background-color: var(--cream);}
.phz-family .ph span {font: 500 9.5px/1 ui-monospace, Menlo, monospace; letter-spacing: .08em;
  text-transform: uppercase; padding: 8px 10px; color: var(--navy-45);}
.phz-family .ph--onnavy {background-image: repeating-linear-gradient(135deg, rgba(255,249,241,.14) 0 6px, transparent 6px 12px);}
.phz-family .ph--onnavy span {color: rgba(255,249,241,.65);}
.phz-family .js .reveal {opacity: 0; transform: translateY(16px); transition: opacity .6s ease, transform .6s ease;}
.phz-family .js .reveal.in {opacity: 1; transform: none;}
@media (prefers-reduced-motion: reduce) {
.phz-family .js .reveal {opacity: 1; transform: none; transition: none;}
.phz-family {scroll-behavior: auto;}
.phz-family .btn:hover {transform: none;}
}
@media (max-width: 860px) {
.phz-family .foot-grid {grid-template-columns: 1fr 1fr;}
.phz-family .nav-toggle {display: inline-flex;}
.phz-family .site-nav {display: none; position: absolute; left: 0; right: 0; top: 100%;
    flex-direction: column; align-items: stretch; gap: 0;
    background: var(--cream); border-bottom: 1px solid var(--navy-16);
    padding: 8px var(--gutter) 18px;}
.phz-family .site-nav.open {display: flex;}
.phz-family .site-nav a {padding: 13px 0; border-bottom: 1px solid var(--navy-14);}
.phz-family .site-nav .btn {margin-top: 12px; justify-content: center;}
}
@media (max-width: 640px) {
.phz-family .rooms-grid {grid-template-columns: 1fr;}
.phz-family .foot-grid {grid-template-columns: 1fr;}
.phz-family .section-head {border-bottom: none;}
.phz-family .section-head h2 {border-bottom: 1px solid var(--orchid); padding-bottom: 10px; width: 100%;}
}
.phz-family .crumb {display: flex; align-items: center; gap: 10px; font: 500 12px/1 var(--sans); color: var(--navy-60); flex-wrap: wrap;}
.phz-family .crumb a {color: var(--navy-60);}
.phz-family .crumb a:hover {color: var(--navy);}
.phz-family .crumb .here {color: var(--navy);}
.phz-family .room-hero {padding-block: clamp(36px,6vw,52px);}
.phz-family .room-hero__grid {display: grid; grid-template-columns: 1.32fr .68fr; gap: clamp(28px,5vw,48px); align-items: center;}
.phz-family .room-hero__meta {display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 16px; flex-wrap: wrap; gap: 10px;}
.phz-family .room-hero h1 {font-size: clamp(36px,6vw,52px); line-height: 1.02; letter-spacing: -.02em; margin: 0 0 16px; max-width: 20ch;}
.phz-family .room-hero p {font: 400 clamp(15px,2vw,16px)/1.6 var(--sans); color: var(--navy-80); max-width: 52ch; margin: 0 0 22px;}
.phz-family .room-hero__cta {display: flex; gap: 10px; flex-wrap: wrap;}
.phz-family .room-hero__cover {display: flex; justify-content: center;}
.phz-family .room-hero__cover img {width: 100%; max-width: 300px; object-fit: contain; box-shadow: 0 14px 40px rgba(47,72,88,.22);}
.phz-family .roomstats {display: grid; grid-template-columns: repeat(3,1fr); background: var(--paper); border-block: 1px solid var(--navy-16);}
.phz-family .roomstats > div {padding: 22px 24px; border-right: 1px solid var(--navy-16);}
.phz-family .roomstats > div:last-child {border-right: 0;}
.phz-family .roomstats .n {font-family: var(--serif); font-size: 30px; line-height: 1;}
.phz-family .roomstats .l {font: 400 11px/1.4 var(--sans); letter-spacing: .1em; text-transform: uppercase; color: var(--navy-60); margin-top: 6px;}
.phz-family .vol {display: grid; grid-template-columns: 44px 1fr 130px 90px; gap: 18px; align-items: center; padding: 18px 12px 18px 0; border-bottom: 1px solid var(--navy-14); cursor: pointer; transition: background .16s, box-shadow .16s;}
.phz-family .vol:hover {background: #fffdf8; box-shadow: inset 0 0 0 1px var(--orchid);}
.phz-family .vol__num {font-family: var(--serif); font-size: 24px; color: var(--orchid);}
.phz-family .vol__t {font-family: var(--serif); font-size: 21px;}
.phz-family .vol__d {font: 400 12.5px/1.4 var(--sans); color: var(--navy-72); margin-top: 4px;}
.phz-family .vol__pg {font: 400 12px var(--sans); color: var(--navy-60);}
.phz-family .vol__price {font: 500 13px var(--sans); text-align: right;}
.phz-family .report-cta {border: 1px solid var(--navy-20); background: var(--cream); padding: 24px; display: grid; grid-template-columns: 1fr 1fr; gap: 28px; align-items: center;}
.phz-family .nextdoor {display: flex; justify-content: space-between; align-items: center; gap: 24px; flex-wrap: wrap;}
.phz-family .nextdoor .serif {font-size: clamp(20px,3vw,24px); max-width: 44ch;}
@media (max-width: 760px) {
.phz-family .room-hero__grid {grid-template-columns: 1fr;}
.phz-family .room-hero__cover {order: -1; justify-content: flex-start;}
.phz-family .room-hero__cover img {max-width: 220px;}
}
@media (max-width: 640px) {
.phz-family .roomstats {grid-template-columns: 1fr;}
.phz-family .roomstats > div {border-right: 0; border-bottom: 1px solid var(--navy-16);}
.phz-family .roomstats > div:last-child {border-bottom: 0;}
.phz-family .vol {grid-template-columns: 34px 1fr;}
.phz-family .vol__pg, .phz-family .vol__price {display: none;}
.phz-family .report-cta {grid-template-columns: 1fr;}
}
`,
    html: `<main>

<div class="wrap" style="padding-top:20px">
  <nav class="crumb" aria-label="Breadcrumb">
    <a href="/">The PHASE™</a><span>/</span>
    <a href="/#rooms">Rooms</a><span>/</span>
    <span class="here">The Family</span>
  </nav>
</div>

<!-- HERO -->
<section class="room-hero">
  <div class="wrap room-hero__grid">
    <div>
      <div class="room-hero__meta reveal">
        <div class="eyebrow">Room II · The Family</div>
        <div class="kicker">The Co-Parenting Power Method® · $97</div>
      </div>
      <h1 class="reveal">Twenty scripts for the messages you dread sending.</h1>
      <p class="reveal">The playbook for the two-house rebuild. Every hard conversation, already drafted, so you are not writing the handoff text at 11pm with your stomach in your throat. Copy it, make it yours, send it.</p>
      <div class="room-hero__cta reveal">
        <a class="btn btn--mint" href="#scripts">See the scripts · $97 →</a>
        <a class="btn btn--ghost" href="/#library">In the Library · $228 →</a>
      </div>
    </div>
    <div class="room-hero__cover reveal">
      <img src="/redesign/cover-family.png" alt="The Co-Parenting Power Method Playbook cover">
    </div>
  </div>
</section>

<!-- STATS -->
<div class="wrap"><div class="roomstats reveal">
  <div><div class="n">20</div><div class="l">Scripts already written</div></div>
  <div><div class="n">2</div><div class="l">Houses, one method</div></div>
  <div><div class="n">14</div><div class="l">Day promise</div></div>
</div></div>

<!-- SCRIPTS -->
<section class="section" id="scripts" style="padding-top:clamp(36px,6vw,56px)">
  <div class="wrap">
    <div class="section-head reveal">
      <h2 style="font-size:clamp(24px,3.5vw,28px)">The scripts</h2>
      <span class="kicker">Use them in any order</span>
    </div>
    <div class="reveal">
      <div class="vol">
        <span class="vol__num">I</span>
        <div><div class="vol__t">The Handoff</div><div class="vol__d">Sunday-night logistics without the landmine.</div></div>
        <span class="vol__pg">Drop-off, pickup</span><span class="vol__price">5 scripts</span>
      </div>
      <div class="vol">
        <span class="vol__num">II</span>
        <div><div class="vol__t">The Money Talk</div><div class="vol__d">Expenses, reimbursements, the shared calendar.</div></div>
        <span class="vol__pg">Costs, receipts</span><span class="vol__price">4 scripts</span>
      </div>
      <div class="vol">
        <span class="vol__num">III</span>
        <div><div class="vol__t">The Big Decision</div><div class="vol__d">School, medical, the conversations that stick.</div></div>
        <span class="vol__pg">Consent, records</span><span class="vol__price">4 scripts</span>
      </div>
      <div class="vol">
        <span class="vol__num">IV</span>
        <div><div class="vol__t">The Boundary</div><div class="vol__d">When they cross a line, in writing, without the war.</div></div>
        <span class="vol__pg">Calm, documented</span><span class="vol__price">4 scripts</span>
      </div>
      <div class="vol" style="border-bottom:0">
        <span class="vol__num">V</span>
        <div><div class="vol__t">The Repair</div><div class="vol__d">De-escalating before it becomes a text thread you regret.</div></div>
        <span class="vol__pg">Reset, move on</span><span class="vol__price">3 scripts</span>
      </div>
    </div>
  </div>
</section>

<!-- REPORT CTA -->
<section style="padding-bottom:clamp(36px,6vw,52px)">
  <div class="wrap"><div class="report-cta reveal">
    <div>
      <div class="eyebrow" style="margin-bottom:10px">Before you buy anything</div>
      <h3 style="font-size:clamp(24px,3.5vw,28px);line-height:1.1;margin:0 0 8px">Read the free report first.</h3>
      <p style="font:400 13px/1.55 var(--sans);color:var(--navy-72);margin:0">Fifteen pages, twenty sources, four rooms. It lands in your inbox.</p>
    </div>
    <form class="field" onsubmit="return false" aria-label="Get the free report">
      <input type="email" placeholder="your@email.com" aria-label="Email address">
      <button type="submit">Send it →</button>
    </form>
  </div></div>
</section>

<!-- NEXT DOOR -->
<section class="section--paper" style="padding-block:clamp(28px,4vw,36px)">
  <div class="wrap nextdoor reveal">
    <div class="serif">Next door: <em>The Voice.</em> Coming back to your own knowing.</div>
    <a class="btn btn--ghost" href="/voice">Enter Room III →</a>
  </div>
</section>

</main>`,
  },
  voice: {
    wrap: `phz-voice`,
    css: `.phz-voice {--navy:   #2f4858;
  --cream:  #fff9f1;
  --paper:  #f1f1f0;
  --mint:   #03c9ab;   
  --orchid: #f086dc;   
  --navy-90: rgba(47,72,88,.9);
  --navy-80: rgba(47,72,88,.8);
  --navy-72: rgba(47,72,88,.72);
  --navy-60: rgba(47,72,88,.6);
  --navy-45: rgba(47,72,88,.45);
  --navy-28: rgba(47,72,88,.28);
  --navy-20: rgba(47,72,88,.2);
  --navy-16: rgba(47,72,88,.16);
  --navy-14: rgba(47,72,88,.14);
  --rule:   rgba(47,72,88,.2);
  --shadow: 0 2px 12px rgba(47,72,88,.09);

  --serif: var(--font-instrument), Georgia, serif;
  --sans:  var(--font-archivo), system-ui, -apple-system, sans-serif;
  --news:  var(--font-newsreader), Georgia, serif;

  --wrap: 1080px;
  --gutter: clamp(20px, 5vw, 44px);}
.phz-voice *, .phz-voice *::before, .phz-voice *::after {box-sizing: border-box;}
.phz-voice {scroll-behavior: smooth;}
.phz-voice {margin: 0;
  background: var(--cream);
  color: var(--navy);
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;}
.phz-voice img {max-width: 100%; display: block;}
.phz-voice a {color: var(--navy); text-decoration: none;}
.phz-voice h1, .phz-voice h2, .phz-voice h3 {font-family: var(--serif); font-weight: 400; margin: 0; text-wrap: pretty;}
.phz-voice em {font-style: italic;}
.phz-voice .wrap {max-width: var(--wrap); margin: 0 auto; padding-inline: var(--gutter);}
.phz-voice .eyebrow {font: 600 11px/1 var(--sans);
  letter-spacing: .18em;
  text-transform: uppercase;
  color: var(--navy);}
.phz-voice .eyebrow--mint {color: var(--mint);}
.phz-voice .eyebrow--orchid {color: var(--orchid);}
.phz-voice .kicker {font: 400 11px/1 var(--sans);
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--navy-60);}
.phz-voice .serif {font-family: var(--serif);}
.phz-voice .btn {display: inline-flex; align-items: center; gap: 6px;
  font: 500 13px/1 var(--sans);
  padding: 15px 22px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform .15s ease, box-shadow .15s ease, background .15s ease, color .15s ease;
  white-space: nowrap;}
.phz-voice .btn:hover {transform: translateY(-1px);}
.phz-voice .btn--mint {background: var(--mint);  color: var(--navy);}
.phz-voice .btn--mint:hover {box-shadow: 0 6px 18px rgba(3,201,171,.35);}
.phz-voice .btn--navy {background: var(--navy);  color: var(--cream);}
.phz-voice .btn--orchid {background: var(--orchid);color: var(--navy); border-radius: 100px;}
.phz-voice .btn--ghost {background: transparent; color: var(--navy); border-color: var(--navy-45);}
.phz-voice .btn--ghost:hover {background: rgba(47,72,88,.05);}
.phz-voice .btn--ghost-light {background: transparent; color: var(--cream); border-color: rgba(255,249,241,.45);}
.phz-voice .btn--pill {border-radius: 100px;}
.phz-voice .field {display: flex; border: 1px solid var(--navy-45); background: var(--cream);}
.phz-voice .field input {flex: 1; min-width: 0; border: 0; background: transparent;
  padding: 14px 15px; font: 400 13px/1 var(--sans); color: var(--navy);}
.phz-voice .field input::placeholder {color: var(--navy-45);}
.phz-voice .field input:focus {outline: 2px solid var(--mint); outline-offset: -2px;}
.phz-voice .field button {border: 0; cursor: pointer; background: var(--mint); color: var(--navy);
  padding: 14px 20px; font: 500 13px/1 var(--sans); white-space: nowrap;}
.phz-voice .field--onnavy {border-color: rgba(255,249,241,.45); background: transparent;}
.phz-voice .field--onnavy input {color: var(--cream);}
.phz-voice .field--onnavy input::placeholder {color: rgba(255,249,241,.55);}
.phz-voice .field--onnavy button {background: var(--cream); color: var(--navy);}
.phz-voice .site-head {position: sticky; top: 0; z-index: 40;
  background: var(--cream);
  border-bottom: 1px solid var(--navy-16);}
.phz-voice .site-head__bar {display: flex; align-items: center; justify-content: space-between;
  gap: 16px; padding-block: 15px;}
.phz-voice .brand {display: flex; align-items: center; gap: 11px;}
.phz-voice .brand__mark {width: 28px; height: 28px; background: var(--mint); color: var(--navy);
  display: grid; place-items: center; font-family: var(--serif); font-size: 17px;
  border-radius: 5px; flex: none;}
.phz-voice .brand__name {font: 600 13px/1 var(--sans); letter-spacing: .05em;}
.phz-voice .site-nav {display: flex; align-items: center; gap: 22px;}
.phz-voice .site-nav a {font: 500 12.5px/1 var(--sans); color: var(--navy-75, rgba(47,72,88,.75));}
.phz-voice .site-nav a:hover {color: var(--navy);}
.phz-voice .site-nav .btn {padding: 11px 15px;}
.phz-voice .nav-toggle {display: none; border: 1px solid var(--navy-28); background: transparent;
  border-radius: 6px; padding: 8px 10px; cursor: pointer; font-size: 15px; color: var(--navy);}
.phz-voice .section {padding-block: clamp(48px, 8vw, 88px);}
.phz-voice .section--paper {background: var(--paper);}
.phz-voice .section--navy {background: var(--navy); color: var(--cream);}
.phz-voice .section-head {display: flex; justify-content: space-between; align-items: baseline;
  gap: 16px; border-bottom: 1px solid var(--orchid); padding-bottom: 12px;
  margin-bottom: 30px; flex-wrap: wrap;}
.phz-voice .section-head h2 {font-size: clamp(28px, 4vw, 38px);}
.phz-voice .rooms-grid {display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
  background: var(--navy-20); border: 1px solid var(--navy-20);}
.phz-voice .room {background: var(--cream); padding: 26px 22px; min-height: 168px;
  display: flex; flex-direction: column; justify-content: space-between;
  gap: 14px; cursor: pointer; transition: background .18s, box-shadow .18s;}
.phz-voice .room:hover {background: #fffdf8; box-shadow: inset 0 0 0 1px var(--orchid);}
.phz-voice .room__top {display: flex; justify-content: space-between; align-items: baseline;}
.phz-voice .room__label {font: 600 11px/1 var(--sans); letter-spacing: .14em; text-transform: uppercase;}
.phz-voice .room__num {font-family: var(--serif); font-size: 22px; color: var(--orchid); line-height: 1;}
.phz-voice .room__title {font-family: var(--serif); font-size: clamp(20px, 2.4vw, 24px); line-height: 1.12;}
.phz-voice .room__desc {font: 400 12.5px/1.45 var(--sans); color: var(--navy-72); margin-top: 6px;}
.phz-voice .price-card {border: 1px solid var(--navy-28); background: var(--cream); padding: 26px;}
.phz-voice .price-card__amount {font-family: var(--serif); font-size: clamp(46px, 7vw, 56px); line-height: 1; margin: 10px 0 4px;}
.phz-voice .site-foot {background: var(--navy); color: var(--cream); padding-block: 56px;}
.phz-voice .site-foot a {color: var(--cream); opacity: .82;}
.phz-voice .site-foot a:hover {opacity: 1; color: var(--mint);}
.phz-voice .foot-grid {display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr; gap: 32px;}
.phz-voice .foot-col h4 {font: 600 10.5px/1 var(--sans); letter-spacing: .16em; text-transform: uppercase; margin-bottom: 14px; color: rgba(255,249,241,.65);}
.phz-voice .foot-col ul {list-style: none; margin: 0; padding: 0;}
.phz-voice .foot-col li {margin-bottom: 9px; font: 400 13px/1.4 var(--sans);}
.phz-voice .foot-brand__name {font-family: var(--serif); font-size: 30px; margin-bottom: 10px;}
.phz-voice .foot-brand p {font: 400 13px/1.6 var(--sans); opacity: .78; max-width: 34ch; margin: 0;}
.phz-voice .foot-legal {margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255,249,241,.2);
  display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap;
  font: 400 11.5px/1.5 var(--sans); opacity: .7;}
.phz-voice .media {display: block; width: 100%; height: 100%; object-fit: cover; background: var(--cream);}
.phz-voice .avatar {border-radius: 50%; object-fit: cover; flex: none;}
.phz-voice .ph {background-image: repeating-linear-gradient(135deg, rgba(47,72,88,.07) 0 6px, transparent 6px 12px);
  display: flex; align-items: flex-end; justify-content: flex-start;
  background-color: var(--cream);}
.phz-voice .ph span {font: 500 9.5px/1 ui-monospace, Menlo, monospace; letter-spacing: .08em;
  text-transform: uppercase; padding: 8px 10px; color: var(--navy-45);}
.phz-voice .ph--onnavy {background-image: repeating-linear-gradient(135deg, rgba(255,249,241,.14) 0 6px, transparent 6px 12px);}
.phz-voice .ph--onnavy span {color: rgba(255,249,241,.65);}
.phz-voice .js .reveal {opacity: 0; transform: translateY(16px); transition: opacity .6s ease, transform .6s ease;}
.phz-voice .js .reveal.in {opacity: 1; transform: none;}
@media (prefers-reduced-motion: reduce) {
.phz-voice .js .reveal {opacity: 1; transform: none; transition: none;}
.phz-voice {scroll-behavior: auto;}
.phz-voice .btn:hover {transform: none;}
}
@media (max-width: 860px) {
.phz-voice .foot-grid {grid-template-columns: 1fr 1fr;}
.phz-voice .nav-toggle {display: inline-flex;}
.phz-voice .site-nav {display: none; position: absolute; left: 0; right: 0; top: 100%;
    flex-direction: column; align-items: stretch; gap: 0;
    background: var(--cream); border-bottom: 1px solid var(--navy-16);
    padding: 8px var(--gutter) 18px;}
.phz-voice .site-nav.open {display: flex;}
.phz-voice .site-nav a {padding: 13px 0; border-bottom: 1px solid var(--navy-14);}
.phz-voice .site-nav .btn {margin-top: 12px; justify-content: center;}
}
@media (max-width: 640px) {
.phz-voice .rooms-grid {grid-template-columns: 1fr;}
.phz-voice .foot-grid {grid-template-columns: 1fr;}
.phz-voice .section-head {border-bottom: none;}
.phz-voice .section-head h2 {border-bottom: 1px solid var(--orchid); padding-bottom: 10px; width: 100%;}
}
.phz-voice .crumb {display: flex; align-items: center; gap: 10px; font: 500 12px/1 var(--sans); color: var(--navy-60); flex-wrap: wrap;}
.phz-voice .crumb a {color: var(--navy-60);}
.phz-voice .crumb a:hover {color: var(--navy);}
.phz-voice .crumb .here {color: var(--navy);}
.phz-voice .room-hero {padding-block: clamp(36px,6vw,52px);}
.phz-voice .room-hero__grid {display: grid; grid-template-columns: 1.32fr .68fr; gap: clamp(28px,5vw,48px); align-items: center;}
.phz-voice .room-hero__meta {display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 16px; flex-wrap: wrap; gap: 10px;}
.phz-voice .room-hero h1 {font-size: clamp(36px,6vw,52px); line-height: 1.02; letter-spacing: -.02em; margin: 0 0 16px; max-width: 20ch;}
.phz-voice .room-hero p {font: 400 clamp(15px,2vw,16px)/1.6 var(--sans); color: var(--navy-80); max-width: 52ch; margin: 0 0 22px;}
.phz-voice .room-hero__cta {display: flex; gap: 10px; flex-wrap: wrap;}
.phz-voice .room-hero__cover {display: flex; justify-content: center;}
.phz-voice .room-hero__cover img {width: 100%; max-width: 300px; object-fit: contain; box-shadow: 0 14px 40px rgba(47,72,88,.22);}
.phz-voice .roomstats {display: grid; grid-template-columns: repeat(3,1fr); background: var(--paper); border-block: 1px solid var(--navy-16);}
.phz-voice .roomstats > div {padding: 22px 24px; border-right: 1px solid var(--navy-16);}
.phz-voice .roomstats > div:last-child {border-right: 0;}
.phz-voice .roomstats .n {font-family: var(--serif); font-size: 30px; line-height: 1;}
.phz-voice .roomstats .l {font: 400 11px/1.4 var(--sans); letter-spacing: .1em; text-transform: uppercase; color: var(--navy-60); margin-top: 6px;}
.phz-voice .vol {display: grid; grid-template-columns: 44px 1fr 130px 80px; gap: 18px; align-items: center; padding: 18px 12px 18px 0; border-bottom: 1px solid var(--navy-14); cursor: pointer; transition: background .16s, box-shadow .16s;}
.phz-voice .vol:hover {background: #fffdf8; box-shadow: inset 0 0 0 1px var(--orchid);}
.phz-voice .vol__num {font-family: var(--serif); font-size: 24px; color: var(--orchid);}
.phz-voice .vol__t {font-family: var(--serif); font-size: 21px;}
.phz-voice .vol__d {font: 400 12.5px/1.4 var(--sans); color: var(--navy-72); margin-top: 4px;}
.phz-voice .vol__pg {font: 400 12px var(--sans); color: var(--navy-60);}
.phz-voice .vol__price {font: 500 13px var(--sans); text-align: right;}
.phz-voice .report-cta {border: 1px solid var(--navy-20); background: var(--cream); padding: 24px; display: grid; grid-template-columns: 1fr 1fr; gap: 28px; align-items: center;}
.phz-voice .nextdoor {display: flex; justify-content: space-between; align-items: center; gap: 24px; flex-wrap: wrap;}
.phz-voice .nextdoor .serif {font-size: clamp(20px,3vw,24px); max-width: 44ch;}
@media (max-width: 760px) {
.phz-voice .room-hero__grid {grid-template-columns: 1fr;}
.phz-voice .room-hero__cover {order: -1; justify-content: flex-start;}
.phz-voice .room-hero__cover img {max-width: 220px;}
}
@media (max-width: 640px) {
.phz-voice .roomstats {grid-template-columns: 1fr;}
.phz-voice .roomstats > div {border-right: 0; border-bottom: 1px solid var(--navy-16);}
.phz-voice .roomstats > div:last-child {border-bottom: 0;}
.phz-voice .vol {grid-template-columns: 34px 1fr;}
.phz-voice .vol__pg, .phz-voice .vol__price {display: none;}
.phz-voice .report-cta {grid-template-columns: 1fr;}
}
`,
    html: `<main>

<div class="wrap" style="padding-top:20px">
  <nav class="crumb" aria-label="Breadcrumb">
    <a href="/">The PHASE™</a><span>/</span>
    <a href="/#rooms">Rooms</a><span>/</span>
    <span class="here">The Voice</span>
  </nav>
</div>

<!-- HERO -->
<section class="room-hero">
  <div class="wrap room-hero__grid">
    <div>
      <div class="room-hero__meta reveal">
        <div class="eyebrow">Room III · The Voice</div>
        <div class="kicker">Self-Trust &amp; Confidence · Vol. IV · $27</div>
      </div>
      <h1 class="reveal">Coming back to your own knowing.</h1>
      <p class="reveal">Self-trust after betrayal. Rebuilding the inner GPS that the season scrambled, so you stop outsourcing every decision and start hearing your own signal again. This is the volume about your voice.</p>
      <div class="room-hero__cta reveal">
        <a class="btn btn--mint" href="#chapters">Start Vol. IV · $27 →</a>
        <a class="btn btn--ghost" href="/#library">In the Library · $228 →</a>
      </div>
    </div>
    <div class="room-hero__cover reveal">
      <img src="/redesign/cover-voice.png" alt="Self-Trust and Confidence, Vol. IV cover">
    </div>
  </div>
</section>

<!-- STATS -->
<div class="wrap"><div class="roomstats reveal">
  <div><div class="n">5</div><div class="l">Chapters</div></div>
  <div><div class="n">38</div><div class="l">Pages</div></div>
  <div><div class="n">14</div><div class="l">Day promise</div></div>
</div></div>

<!-- CHAPTERS -->
<section class="section" id="chapters" style="padding-top:clamp(36px,6vw,56px)">
  <div class="wrap">
    <div class="section-head reveal">
      <h2 style="font-size:clamp(24px,3.5vw,28px)">The chapters</h2>
      <span class="kicker">Read in order, or open where it hurts</span>
    </div>
    <div class="reveal">
      <div class="vol">
        <span class="vol__num">I</span>
        <div><div class="vol__t">The Inner GPS</div><div class="vol__d">Why you stopped trusting the signal, and how it goes quiet.</div></div>
        <span class="vol__pg">7 pages</span><span class="vol__price">Vol. IV</span>
      </div>
      <div class="vol">
        <span class="vol__num">II</span>
        <div><div class="vol__t">The Sentence You Swallow</div><div class="vol__d">Saying the hard thing, on paper first, until it is sayable out loud.</div></div>
        <span class="vol__pg">8 pages</span><span class="vol__price">Vol. IV</span>
      </div>
      <div class="vol">
        <span class="vol__num">III</span>
        <div><div class="vol__t">After Betrayal</div><div class="vol__d">Rebuilding trust in your own read of a room.</div></div>
        <span class="vol__pg">8 pages</span><span class="vol__price">Vol. IV</span>
      </div>
      <div class="vol">
        <span class="vol__num">IV</span>
        <div><div class="vol__t">The Boundary Voice</div><div class="vol__d">No, without the apology attached to the end of it.</div></div>
        <span class="vol__pg">7 pages</span><span class="vol__price">Vol. IV</span>
      </div>
      <div class="vol" style="border-bottom:0">
        <span class="vol__num">V</span>
        <div><div class="vol__t">The Return</div><div class="vol__d">Coming back to your own knowing, and staying there.</div></div>
        <span class="vol__pg">8 pages</span><span class="vol__price">Vol. IV</span>
      </div>
    </div>
  </div>
</section>

<!-- REPORT CTA -->
<section style="padding-bottom:clamp(36px,6vw,52px)">
  <div class="wrap"><div class="report-cta reveal">
    <div>
      <div class="eyebrow" style="margin-bottom:10px">Before you buy anything</div>
      <h3 style="font-size:clamp(24px,3.5vw,28px);line-height:1.1;margin:0 0 8px">Read the free report first.</h3>
      <p style="font:400 13px/1.55 var(--sans);color:var(--navy-72);margin:0">Fifteen pages, twenty sources, four rooms. It lands in your inbox.</p>
    </div>
    <form class="field" onsubmit="return false" aria-label="Get the free report">
      <input type="email" placeholder="your@email.com" aria-label="Email address">
      <button type="submit">Send it →</button>
    </form>
  </div></div>
</section>

<!-- NEXT DOOR -->
<section class="section--paper" style="padding-block:clamp(28px,4vw,36px)">
  <div class="wrap nextdoor reveal">
    <div class="serif">Next door: <em>The Work.</em> Run your life the way an operator would.</div>
    <a class="btn btn--ghost" href="/work">Enter Room IV →</a>
  </div>
</section>

</main>`,
  },
  work: {
    wrap: `phz-work`,
    css: `.phz-work {--navy:   #2f4858;
  --cream:  #fff9f1;
  --paper:  #f1f1f0;
  --mint:   #03c9ab;   
  --orchid: #f086dc;   
  --navy-90: rgba(47,72,88,.9);
  --navy-80: rgba(47,72,88,.8);
  --navy-72: rgba(47,72,88,.72);
  --navy-60: rgba(47,72,88,.6);
  --navy-45: rgba(47,72,88,.45);
  --navy-28: rgba(47,72,88,.28);
  --navy-20: rgba(47,72,88,.2);
  --navy-16: rgba(47,72,88,.16);
  --navy-14: rgba(47,72,88,.14);
  --rule:   rgba(47,72,88,.2);
  --shadow: 0 2px 12px rgba(47,72,88,.09);

  --serif: var(--font-instrument), Georgia, serif;
  --sans:  var(--font-archivo), system-ui, -apple-system, sans-serif;
  --news:  var(--font-newsreader), Georgia, serif;

  --wrap: 1080px;
  --gutter: clamp(20px, 5vw, 44px);}
.phz-work *, .phz-work *::before, .phz-work *::after {box-sizing: border-box;}
.phz-work {scroll-behavior: smooth;}
.phz-work {margin: 0;
  background: var(--cream);
  color: var(--navy);
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;}
.phz-work img {max-width: 100%; display: block;}
.phz-work a {color: var(--navy); text-decoration: none;}
.phz-work h1, .phz-work h2, .phz-work h3 {font-family: var(--serif); font-weight: 400; margin: 0; text-wrap: pretty;}
.phz-work em {font-style: italic;}
.phz-work .wrap {max-width: var(--wrap); margin: 0 auto; padding-inline: var(--gutter);}
.phz-work .eyebrow {font: 600 11px/1 var(--sans);
  letter-spacing: .18em;
  text-transform: uppercase;
  color: var(--navy);}
.phz-work .eyebrow--mint {color: var(--mint);}
.phz-work .eyebrow--orchid {color: var(--orchid);}
.phz-work .kicker {font: 400 11px/1 var(--sans);
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--navy-60);}
.phz-work .serif {font-family: var(--serif);}
.phz-work .btn {display: inline-flex; align-items: center; gap: 6px;
  font: 500 13px/1 var(--sans);
  padding: 15px 22px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform .15s ease, box-shadow .15s ease, background .15s ease, color .15s ease;
  white-space: nowrap;}
.phz-work .btn:hover {transform: translateY(-1px);}
.phz-work .btn--mint {background: var(--mint);  color: var(--navy);}
.phz-work .btn--mint:hover {box-shadow: 0 6px 18px rgba(3,201,171,.35);}
.phz-work .btn--navy {background: var(--navy);  color: var(--cream);}
.phz-work .btn--orchid {background: var(--orchid);color: var(--navy); border-radius: 100px;}
.phz-work .btn--ghost {background: transparent; color: var(--navy); border-color: var(--navy-45);}
.phz-work .btn--ghost:hover {background: rgba(47,72,88,.05);}
.phz-work .btn--ghost-light {background: transparent; color: var(--cream); border-color: rgba(255,249,241,.45);}
.phz-work .btn--pill {border-radius: 100px;}
.phz-work .field {display: flex; border: 1px solid var(--navy-45); background: var(--cream);}
.phz-work .field input {flex: 1; min-width: 0; border: 0; background: transparent;
  padding: 14px 15px; font: 400 13px/1 var(--sans); color: var(--navy);}
.phz-work .field input::placeholder {color: var(--navy-45);}
.phz-work .field input:focus {outline: 2px solid var(--mint); outline-offset: -2px;}
.phz-work .field button {border: 0; cursor: pointer; background: var(--mint); color: var(--navy);
  padding: 14px 20px; font: 500 13px/1 var(--sans); white-space: nowrap;}
.phz-work .field--onnavy {border-color: rgba(255,249,241,.45); background: transparent;}
.phz-work .field--onnavy input {color: var(--cream);}
.phz-work .field--onnavy input::placeholder {color: rgba(255,249,241,.55);}
.phz-work .field--onnavy button {background: var(--cream); color: var(--navy);}
.phz-work .site-head {position: sticky; top: 0; z-index: 40;
  background: var(--cream);
  border-bottom: 1px solid var(--navy-16);}
.phz-work .site-head__bar {display: flex; align-items: center; justify-content: space-between;
  gap: 16px; padding-block: 15px;}
.phz-work .brand {display: flex; align-items: center; gap: 11px;}
.phz-work .brand__mark {width: 28px; height: 28px; background: var(--mint); color: var(--navy);
  display: grid; place-items: center; font-family: var(--serif); font-size: 17px;
  border-radius: 5px; flex: none;}
.phz-work .brand__name {font: 600 13px/1 var(--sans); letter-spacing: .05em;}
.phz-work .site-nav {display: flex; align-items: center; gap: 22px;}
.phz-work .site-nav a {font: 500 12.5px/1 var(--sans); color: var(--navy-75, rgba(47,72,88,.75));}
.phz-work .site-nav a:hover {color: var(--navy);}
.phz-work .site-nav .btn {padding: 11px 15px;}
.phz-work .nav-toggle {display: none; border: 1px solid var(--navy-28); background: transparent;
  border-radius: 6px; padding: 8px 10px; cursor: pointer; font-size: 15px; color: var(--navy);}
.phz-work .section {padding-block: clamp(48px, 8vw, 88px);}
.phz-work .section--paper {background: var(--paper);}
.phz-work .section--navy {background: var(--navy); color: var(--cream);}
.phz-work .section-head {display: flex; justify-content: space-between; align-items: baseline;
  gap: 16px; border-bottom: 1px solid var(--orchid); padding-bottom: 12px;
  margin-bottom: 30px; flex-wrap: wrap;}
.phz-work .section-head h2 {font-size: clamp(28px, 4vw, 38px);}
.phz-work .rooms-grid {display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
  background: var(--navy-20); border: 1px solid var(--navy-20);}
.phz-work .room {background: var(--cream); padding: 26px 22px; min-height: 168px;
  display: flex; flex-direction: column; justify-content: space-between;
  gap: 14px; cursor: pointer; transition: background .18s, box-shadow .18s;}
.phz-work .room:hover {background: #fffdf8; box-shadow: inset 0 0 0 1px var(--orchid);}
.phz-work .room__top {display: flex; justify-content: space-between; align-items: baseline;}
.phz-work .room__label {font: 600 11px/1 var(--sans); letter-spacing: .14em; text-transform: uppercase;}
.phz-work .room__num {font-family: var(--serif); font-size: 22px; color: var(--orchid); line-height: 1;}
.phz-work .room__title {font-family: var(--serif); font-size: clamp(20px, 2.4vw, 24px); line-height: 1.12;}
.phz-work .room__desc {font: 400 12.5px/1.45 var(--sans); color: var(--navy-72); margin-top: 6px;}
.phz-work .price-card {border: 1px solid var(--navy-28); background: var(--cream); padding: 26px;}
.phz-work .price-card__amount {font-family: var(--serif); font-size: clamp(46px, 7vw, 56px); line-height: 1; margin: 10px 0 4px;}
.phz-work .site-foot {background: var(--navy); color: var(--cream); padding-block: 56px;}
.phz-work .site-foot a {color: var(--cream); opacity: .82;}
.phz-work .site-foot a:hover {opacity: 1; color: var(--mint);}
.phz-work .foot-grid {display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr; gap: 32px;}
.phz-work .foot-col h4 {font: 600 10.5px/1 var(--sans); letter-spacing: .16em; text-transform: uppercase; margin-bottom: 14px; color: rgba(255,249,241,.65);}
.phz-work .foot-col ul {list-style: none; margin: 0; padding: 0;}
.phz-work .foot-col li {margin-bottom: 9px; font: 400 13px/1.4 var(--sans);}
.phz-work .foot-brand__name {font-family: var(--serif); font-size: 30px; margin-bottom: 10px;}
.phz-work .foot-brand p {font: 400 13px/1.6 var(--sans); opacity: .78; max-width: 34ch; margin: 0;}
.phz-work .foot-legal {margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255,249,241,.2);
  display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap;
  font: 400 11.5px/1.5 var(--sans); opacity: .7;}
.phz-work .media {display: block; width: 100%; height: 100%; object-fit: cover; background: var(--cream);}
.phz-work .avatar {border-radius: 50%; object-fit: cover; flex: none;}
.phz-work .ph {background-image: repeating-linear-gradient(135deg, rgba(47,72,88,.07) 0 6px, transparent 6px 12px);
  display: flex; align-items: flex-end; justify-content: flex-start;
  background-color: var(--cream);}
.phz-work .ph span {font: 500 9.5px/1 ui-monospace, Menlo, monospace; letter-spacing: .08em;
  text-transform: uppercase; padding: 8px 10px; color: var(--navy-45);}
.phz-work .ph--onnavy {background-image: repeating-linear-gradient(135deg, rgba(255,249,241,.14) 0 6px, transparent 6px 12px);}
.phz-work .ph--onnavy span {color: rgba(255,249,241,.65);}
.phz-work .js .reveal {opacity: 0; transform: translateY(16px); transition: opacity .6s ease, transform .6s ease;}
.phz-work .js .reveal.in {opacity: 1; transform: none;}
@media (prefers-reduced-motion: reduce) {
.phz-work .js .reveal {opacity: 1; transform: none; transition: none;}
.phz-work {scroll-behavior: auto;}
.phz-work .btn:hover {transform: none;}
}
@media (max-width: 860px) {
.phz-work .foot-grid {grid-template-columns: 1fr 1fr;}
.phz-work .nav-toggle {display: inline-flex;}
.phz-work .site-nav {display: none; position: absolute; left: 0; right: 0; top: 100%;
    flex-direction: column; align-items: stretch; gap: 0;
    background: var(--cream); border-bottom: 1px solid var(--navy-16);
    padding: 8px var(--gutter) 18px;}
.phz-work .site-nav.open {display: flex;}
.phz-work .site-nav a {padding: 13px 0; border-bottom: 1px solid var(--navy-14);}
.phz-work .site-nav .btn {margin-top: 12px; justify-content: center;}
}
@media (max-width: 640px) {
.phz-work .rooms-grid {grid-template-columns: 1fr;}
.phz-work .foot-grid {grid-template-columns: 1fr;}
.phz-work .section-head {border-bottom: none;}
.phz-work .section-head h2 {border-bottom: 1px solid var(--orchid); padding-bottom: 10px; width: 100%;}
}
.phz-work .crumb {display: flex; align-items: center; gap: 10px; font: 500 12px/1 var(--sans); color: var(--navy-60); flex-wrap: wrap;}
.phz-work .crumb a {color: var(--navy-60);}
.phz-work .crumb a:hover {color: var(--navy);}
.phz-work .crumb .here {color: var(--navy);}
.phz-work .room-hero {padding-block: clamp(36px,6vw,52px);}
.phz-work .room-hero__meta {display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 16px; flex-wrap: wrap; gap: 10px;}
.phz-work .room-hero h1 {font-size: clamp(38px,7vw,56px); line-height: 1; letter-spacing: -.02em; margin: 0 0 16px; max-width: 22ch;}
.phz-work .room-hero p {font: 400 clamp(15px,2vw,16px)/1.6 var(--sans); color: var(--navy-80); max-width: 56ch; margin: 0 0 22px;}
.phz-work .room-hero__cta {display: flex; gap: 10px; flex-wrap: wrap;}
.phz-work .roomstats {display: grid; grid-template-columns: repeat(3,1fr); background: var(--paper); border-block: 1px solid var(--navy-16);}
.phz-work .roomstats > div {padding: 22px 24px; border-right: 1px solid var(--navy-16);}
.phz-work .roomstats > div:last-child {border-right: 0;}
.phz-work .roomstats .n {font-family: var(--serif); font-size: 30px; line-height: 1;}
.phz-work .roomstats .l {font: 400 11px/1.4 var(--sans); letter-spacing: .1em; text-transform: uppercase; color: var(--navy-60); margin-top: 6px;}
.phz-work .vol {display: grid; grid-template-columns: 44px 1fr 150px 70px; gap: 18px; align-items: center; padding: 18px 12px 18px 0; border-bottom: 1px solid var(--navy-14); cursor: pointer; transition: background .16s, box-shadow .16s;}
.phz-work .vol:hover {background: #fffdf8; box-shadow: inset 0 0 0 1px var(--orchid);}
.phz-work .vol__num {font-family: var(--serif); font-size: 24px; color: var(--orchid);}
.phz-work .vol__t {font-family: var(--serif); font-size: 21px;}
.phz-work .vol__d {font: 400 12.5px/1.4 var(--sans); color: var(--navy-72); margin-top: 4px;}
.phz-work .vol__pg {font: 400 12px var(--sans); color: var(--navy-60);}
.phz-work .vol__price {font: 500 13px var(--sans); text-align: right;}
.phz-work .report-cta {border: 1px solid var(--navy-20); background: var(--cream); padding: 24px; display: grid; grid-template-columns: 1fr 1fr; gap: 28px; align-items: center;}
.phz-work .nextdoor {display: flex; justify-content: space-between; align-items: center; gap: 24px; flex-wrap: wrap;}
.phz-work .nextdoor .serif {font-size: clamp(20px,3vw,24px); max-width: 44ch;}
@media (max-width: 640px) {
.phz-work .roomstats {grid-template-columns: 1fr;}
.phz-work .roomstats > div {border-right: 0; border-bottom: 1px solid var(--navy-16);}
.phz-work .roomstats > div:last-child {border-bottom: 0;}
.phz-work .vol {grid-template-columns: 34px 1fr;}
.phz-work .vol__pg, .phz-work .vol__price {display: none;}
.phz-work .report-cta {grid-template-columns: 1fr;}
}
`,
    html: `<main>

<div class="wrap" style="padding-top:20px">
  <nav class="crumb" aria-label="Breadcrumb">
    <a href="/">The PHASE™</a><span>/</span>
    <a href="/#rooms">Rooms</a><span>/</span>
    <span class="here">The Work</span>
  </nav>
</div>

<!-- HERO -->
<section class="room-hero">
  <div class="wrap">
    <div class="room-hero__meta reveal">
      <div class="eyebrow">Room IV · The Work</div>
      <div class="kicker">Building Through It · 7 tools · from $17</div>
    </div>
    <h1 class="reveal">Run your life the way an operator would.</h1>
    <p class="reveal">You do not get to pause the work while the rest of it rebuilds. So you run it like an operator. Seven tools for the mental load, the calendar, the decisions, and the energy it takes to keep building through the season.</p>
    <div class="room-hero__cta reveal">
      <a class="btn btn--mint" href="#tools">See the tools · from $17 →</a>
      <a class="btn btn--ghost" href="/#library">All seven in the Library · $228 →</a>
    </div>
  </div>
</section>

<!-- STATS -->
<div class="wrap"><div class="roomstats reveal">
  <div><div class="n">7</div><div class="l">Tools in this room</div></div>
  <div><div class="n">$17</div><div class="l">Where it starts</div></div>
  <div><div class="n">14</div><div class="l">Day promise</div></div>
</div></div>

<!-- TOOLS -->
<section class="section" id="tools" style="padding-top:clamp(36px,6vw,56px)">
  <div class="wrap">
    <div class="section-head reveal">
      <h2 style="font-size:clamp(24px,3.5vw,28px)">The tools</h2>
      <span class="kicker">Take one, or take the room</span>
    </div>
    <div class="reveal">
      <div class="vol">
        <span class="vol__num">I</span>
        <div><div class="vol__t">The Weekly Operating Rhythm</div><div class="vol__d">One page that decides the week before the week decides you.</div></div>
        <span class="vol__pg">Notion + PDF</span><span class="vol__price">$17 →</span>
      </div>
      <div class="vol">
        <span class="vol__num">II</span>
        <div><div class="vol__t">The Mental-Load Ledger</div><div class="vol__d">Get the invisible list out of your head and onto the table.</div></div>
        <span class="vol__pg">Notion + PDF</span><span class="vol__price">$17 →</span>
      </div>
      <div class="vol">
        <span class="vol__num">III</span>
        <div><div class="vol__t">The Boundary Calendar</div><div class="vol__d">Protecting the hours that protect everything else.</div></div>
        <span class="vol__pg">Template</span><span class="vol__price">$17 →</span>
      </div>
      <div class="vol">
        <span class="vol__num">IV</span>
        <div><div class="vol__t">The Decision Log</div><div class="vol__d">Stop relitigating the same choice at midnight.</div></div>
        <span class="vol__pg">Template</span><span class="vol__price">$17 →</span>
      </div>
      <div class="vol">
        <span class="vol__num">V</span>
        <div><div class="vol__t">The Energy Audit</div><div class="vol__d">Find the leaks before they find you.</div></div>
        <span class="vol__pg">Worksheet</span><span class="vol__price">$17 →</span>
      </div>
      <div class="vol">
        <span class="vol__num">VI</span>
        <div><div class="vol__t">The Delegation Scripts</div><div class="vol__d">Handing it off without doing it twice.</div></div>
        <span class="vol__pg">Scripts</span><span class="vol__price">$17 →</span>
      </div>
      <div class="vol" style="border-bottom:0">
        <span class="vol__num">VII</span>
        <div><div class="vol__t">The Quarterly Reset</div><div class="vol__d">Ninety days at a time, so the year does not run you.</div></div>
        <span class="vol__pg">Workbook</span><span class="vol__price">$17 →</span>
      </div>
    </div>
  </div>
</section>

<!-- REPORT CTA -->
<section style="padding-bottom:clamp(36px,6vw,52px)">
  <div class="wrap"><div class="report-cta reveal">
    <div>
      <div class="eyebrow" style="margin-bottom:10px">Before you buy anything</div>
      <h3 style="font-size:clamp(24px,3.5vw,28px);line-height:1.1;margin:0 0 8px">Read the free report first.</h3>
      <p style="font:400 13px/1.55 var(--sans);color:var(--navy-72);margin:0">Fifteen pages, twenty sources, four rooms. It lands in your inbox.</p>
    </div>
    <form class="field" onsubmit="return false" aria-label="Get the free report">
      <input type="email" placeholder="your@email.com" aria-label="Email address">
      <button type="submit">Send it →</button>
    </form>
  </div></div>
</section>

<!-- NEXT DOOR -->
<section class="section--paper" style="padding-block:clamp(28px,4vw,36px)">
  <div class="wrap nextdoor reveal">
    <div class="serif">The whole house, one payment: <em>The PHASE™ Library.</em></div>
    <a class="btn btn--ghost" href="/#library">Open the Library · $228 →</a>
  </div>
</section>

</main>`,
  },
  report: {
    wrap: `phz-report`,
    css: `.phz-report {--navy:   #2f4858;
  --cream:  #fff9f1;
  --paper:  #f1f1f0;
  --mint:   #03c9ab;   
  --orchid: #f086dc;   
  --navy-90: rgba(47,72,88,.9);
  --navy-80: rgba(47,72,88,.8);
  --navy-72: rgba(47,72,88,.72);
  --navy-60: rgba(47,72,88,.6);
  --navy-45: rgba(47,72,88,.45);
  --navy-28: rgba(47,72,88,.28);
  --navy-20: rgba(47,72,88,.2);
  --navy-16: rgba(47,72,88,.16);
  --navy-14: rgba(47,72,88,.14);
  --rule:   rgba(47,72,88,.2);
  --shadow: 0 2px 12px rgba(47,72,88,.09);

  --serif: var(--font-instrument), Georgia, serif;
  --sans:  var(--font-archivo), system-ui, -apple-system, sans-serif;
  --news:  var(--font-newsreader), Georgia, serif;

  --wrap: 1080px;
  --gutter: clamp(20px, 5vw, 44px);}
.phz-report *, .phz-report *::before, .phz-report *::after {box-sizing: border-box;}
.phz-report {scroll-behavior: smooth;}
.phz-report {margin: 0;
  background: var(--cream);
  color: var(--navy);
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;}
.phz-report img {max-width: 100%; display: block;}
.phz-report a {color: var(--navy); text-decoration: none;}
.phz-report h1, .phz-report h2, .phz-report h3 {font-family: var(--serif); font-weight: 400; margin: 0; text-wrap: pretty;}
.phz-report em {font-style: italic;}
.phz-report .wrap {max-width: var(--wrap); margin: 0 auto; padding-inline: var(--gutter);}
.phz-report .eyebrow {font: 600 11px/1 var(--sans);
  letter-spacing: .18em;
  text-transform: uppercase;
  color: var(--navy);}
.phz-report .eyebrow--mint {color: var(--mint);}
.phz-report .eyebrow--orchid {color: var(--orchid);}
.phz-report .kicker {font: 400 11px/1 var(--sans);
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--navy-60);}
.phz-report .serif {font-family: var(--serif);}
.phz-report .btn {display: inline-flex; align-items: center; gap: 6px;
  font: 500 13px/1 var(--sans);
  padding: 15px 22px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform .15s ease, box-shadow .15s ease, background .15s ease, color .15s ease;
  white-space: nowrap;}
.phz-report .btn:hover {transform: translateY(-1px);}
.phz-report .btn--mint {background: var(--mint);  color: var(--navy);}
.phz-report .btn--mint:hover {box-shadow: 0 6px 18px rgba(3,201,171,.35);}
.phz-report .btn--navy {background: var(--navy);  color: var(--cream);}
.phz-report .btn--orchid {background: var(--orchid);color: var(--navy); border-radius: 100px;}
.phz-report .btn--ghost {background: transparent; color: var(--navy); border-color: var(--navy-45);}
.phz-report .btn--ghost:hover {background: rgba(47,72,88,.05);}
.phz-report .btn--ghost-light {background: transparent; color: var(--cream); border-color: rgba(255,249,241,.45);}
.phz-report .btn--pill {border-radius: 100px;}
.phz-report .field {display: flex; border: 1px solid var(--navy-45); background: var(--cream);}
.phz-report .field input {flex: 1; min-width: 0; border: 0; background: transparent;
  padding: 14px 15px; font: 400 13px/1 var(--sans); color: var(--navy);}
.phz-report .field input::placeholder {color: var(--navy-45);}
.phz-report .field input:focus {outline: 2px solid var(--mint); outline-offset: -2px;}
.phz-report .field button {border: 0; cursor: pointer; background: var(--mint); color: var(--navy);
  padding: 14px 20px; font: 500 13px/1 var(--sans); white-space: nowrap;}
.phz-report .field--onnavy {border-color: rgba(255,249,241,.45); background: transparent;}
.phz-report .field--onnavy input {color: var(--cream);}
.phz-report .field--onnavy input::placeholder {color: rgba(255,249,241,.55);}
.phz-report .field--onnavy button {background: var(--cream); color: var(--navy);}
.phz-report .site-head {position: sticky; top: 0; z-index: 40;
  background: var(--cream);
  border-bottom: 1px solid var(--navy-16);}
.phz-report .site-head__bar {display: flex; align-items: center; justify-content: space-between;
  gap: 16px; padding-block: 15px;}
.phz-report .brand {display: flex; align-items: center; gap: 11px;}
.phz-report .brand__mark {width: 28px; height: 28px; background: var(--mint); color: var(--navy);
  display: grid; place-items: center; font-family: var(--serif); font-size: 17px;
  border-radius: 5px; flex: none;}
.phz-report .brand__name {font: 600 13px/1 var(--sans); letter-spacing: .05em;}
.phz-report .site-nav {display: flex; align-items: center; gap: 22px;}
.phz-report .site-nav a {font: 500 12.5px/1 var(--sans); color: var(--navy-75, rgba(47,72,88,.75));}
.phz-report .site-nav a:hover {color: var(--navy);}
.phz-report .site-nav .btn {padding: 11px 15px;}
.phz-report .nav-toggle {display: none; border: 1px solid var(--navy-28); background: transparent;
  border-radius: 6px; padding: 8px 10px; cursor: pointer; font-size: 15px; color: var(--navy);}
.phz-report .section {padding-block: clamp(48px, 8vw, 88px);}
.phz-report .section--paper {background: var(--paper);}
.phz-report .section--navy {background: var(--navy); color: var(--cream);}
.phz-report .section-head {display: flex; justify-content: space-between; align-items: baseline;
  gap: 16px; border-bottom: 1px solid var(--orchid); padding-bottom: 12px;
  margin-bottom: 30px; flex-wrap: wrap;}
.phz-report .section-head h2 {font-size: clamp(28px, 4vw, 38px);}
.phz-report .rooms-grid {display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
  background: var(--navy-20); border: 1px solid var(--navy-20);}
.phz-report .room {background: var(--cream); padding: 26px 22px; min-height: 168px;
  display: flex; flex-direction: column; justify-content: space-between;
  gap: 14px; cursor: pointer; transition: background .18s, box-shadow .18s;}
.phz-report .room:hover {background: #fffdf8; box-shadow: inset 0 0 0 1px var(--orchid);}
.phz-report .room__top {display: flex; justify-content: space-between; align-items: baseline;}
.phz-report .room__label {font: 600 11px/1 var(--sans); letter-spacing: .14em; text-transform: uppercase;}
.phz-report .room__num {font-family: var(--serif); font-size: 22px; color: var(--orchid); line-height: 1;}
.phz-report .room__title {font-family: var(--serif); font-size: clamp(20px, 2.4vw, 24px); line-height: 1.12;}
.phz-report .room__desc {font: 400 12.5px/1.45 var(--sans); color: var(--navy-72); margin-top: 6px;}
.phz-report .price-card {border: 1px solid var(--navy-28); background: var(--cream); padding: 26px;}
.phz-report .price-card__amount {font-family: var(--serif); font-size: clamp(46px, 7vw, 56px); line-height: 1; margin: 10px 0 4px;}
.phz-report .site-foot {background: var(--navy); color: var(--cream); padding-block: 56px;}
.phz-report .site-foot a {color: var(--cream); opacity: .82;}
.phz-report .site-foot a:hover {opacity: 1; color: var(--mint);}
.phz-report .foot-grid {display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr; gap: 32px;}
.phz-report .foot-col h4 {font: 600 10.5px/1 var(--sans); letter-spacing: .16em; text-transform: uppercase; margin-bottom: 14px; color: rgba(255,249,241,.65);}
.phz-report .foot-col ul {list-style: none; margin: 0; padding: 0;}
.phz-report .foot-col li {margin-bottom: 9px; font: 400 13px/1.4 var(--sans);}
.phz-report .foot-brand__name {font-family: var(--serif); font-size: 30px; margin-bottom: 10px;}
.phz-report .foot-brand p {font: 400 13px/1.6 var(--sans); opacity: .78; max-width: 34ch; margin: 0;}
.phz-report .foot-legal {margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255,249,241,.2);
  display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap;
  font: 400 11.5px/1.5 var(--sans); opacity: .7;}
.phz-report .media {display: block; width: 100%; height: 100%; object-fit: cover; background: var(--cream);}
.phz-report .avatar {border-radius: 50%; object-fit: cover; flex: none;}
.phz-report .ph {background-image: repeating-linear-gradient(135deg, rgba(47,72,88,.07) 0 6px, transparent 6px 12px);
  display: flex; align-items: flex-end; justify-content: flex-start;
  background-color: var(--cream);}
.phz-report .ph span {font: 500 9.5px/1 ui-monospace, Menlo, monospace; letter-spacing: .08em;
  text-transform: uppercase; padding: 8px 10px; color: var(--navy-45);}
.phz-report .ph--onnavy {background-image: repeating-linear-gradient(135deg, rgba(255,249,241,.14) 0 6px, transparent 6px 12px);}
.phz-report .ph--onnavy span {color: rgba(255,249,241,.65);}
.phz-report .js .reveal {opacity: 0; transform: translateY(16px); transition: opacity .6s ease, transform .6s ease;}
.phz-report .js .reveal.in {opacity: 1; transform: none;}
@media (prefers-reduced-motion: reduce) {
.phz-report .js .reveal {opacity: 1; transform: none; transition: none;}
.phz-report {scroll-behavior: auto;}
.phz-report .btn:hover {transform: none;}
}
@media (max-width: 860px) {
.phz-report .foot-grid {grid-template-columns: 1fr 1fr;}
.phz-report .nav-toggle {display: inline-flex;}
.phz-report .site-nav {display: none; position: absolute; left: 0; right: 0; top: 100%;
    flex-direction: column; align-items: stretch; gap: 0;
    background: var(--cream); border-bottom: 1px solid var(--navy-16);
    padding: 8px var(--gutter) 18px;}
.phz-report .site-nav.open {display: flex;}
.phz-report .site-nav a {padding: 13px 0; border-bottom: 1px solid var(--navy-14);}
.phz-report .site-nav .btn {margin-top: 12px; justify-content: center;}
}
@media (max-width: 640px) {
.phz-report .rooms-grid {grid-template-columns: 1fr;}
.phz-report .foot-grid {grid-template-columns: 1fr;}
.phz-report .section-head {border-bottom: none;}
.phz-report .section-head h2 {border-bottom: 1px solid var(--orchid); padding-bottom: 10px; width: 100%;}
}
.phz-report .broad {background: var(--cream);}
.phz-report .masthead-strip {background: var(--paper); color: var(--navy);
  padding: 9px var(--gutter); display: flex; justify-content: space-between; align-items: center;
  font: 500 10.5px/1 var(--sans); letter-spacing: .1em; text-transform: uppercase; gap: 12px;}
.phz-report .masthead-strip span:last-child {opacity: .75;}
.phz-report .masthead {border-top: 2px solid var(--orchid); border-bottom: 1px solid var(--navy-28);
  padding: 26px 0 20px; text-align: center; margin-top: 18px;}
.phz-report .masthead__vol {font: 400 11px/1 var(--sans); letter-spacing: .34em; text-transform: uppercase; color: var(--navy-60);}
.phz-report .masthead__name {font-family: var(--serif); font-size: clamp(56px,12vw,92px); line-height: .9; letter-spacing: -.02em; margin: 14px 0 12px;}
.phz-report .masthead__rooms {font: 400 11px/1 var(--sans); letter-spacing: .34em; text-transform: uppercase;}
.phz-report .lede-grid {display: grid; grid-template-columns: 1.15fr 1fr; gap: clamp(28px,5vw,40px); align-items: start; padding-block: clamp(30px,5vw,34px); border-bottom: 1px solid var(--navy-20);}
.phz-report .lede-grid h1 {font-size: clamp(38px,6vw,58px); line-height: 1.02; letter-spacing: -.015em; margin: 0 0 18px;}
.phz-report .lede-grid p.a {font: 400 clamp(15px,2vw,16.5px)/1.55 var(--sans); color: var(--navy-80); margin: 0 0 14px; max-width: 44ch;}
.phz-report .lede-grid p.b {font: 500 15px/1.5 var(--sans); margin: 0 0 24px;}
.phz-report .fig-cap {font: 400 10.5px/1.5 var(--sans); letter-spacing: .06em; text-transform: uppercase; color: var(--navy-60); padding-top: 8px; border-top: 1px solid var(--rule); margin-top: 8px;}
.phz-report .byrule {display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px solid var(--orchid); padding-bottom: 10px; margin-top: clamp(30px,5vw,34px);}
.phz-report .byrule h2 {font-size: clamp(26px,4vw,32px);}
.phz-report .report-cols {display: grid; grid-template-columns: repeat(4,1fr); border-bottom: 1px solid var(--navy-20);}
.phz-report .report-cols > div {padding: 20px 18px; border-right: 1px solid var(--rule);}
.phz-report .report-cols > div:last-child {border-right: 0;}
.phz-report .report-cols .num {font-family: var(--serif); font-size: 34px; line-height: 1; color: var(--orchid);}
.phz-report .report-cols .lab {font: 600 11px/1 var(--sans); letter-spacing: .14em; text-transform: uppercase; margin: 14px 0 8px;}
.phz-report .report-cols .ttl {font-family: var(--serif); font-size: 20px; line-height: 1.2; margin-bottom: 8px;}
.phz-report .report-cols p {font: 400 13px/1.5 var(--sans); color: var(--navy-72); margin: 0;}
.phz-report .dl-grid {display: grid; grid-template-columns: 1fr 1fr; border-bottom: 1px solid var(--navy-20);}
.phz-report .dl-grid > .cell {padding: clamp(24px,4vw,30px) var(--gutter);}
.phz-report .dl-grid > .cell:first-child {border-right: 1px solid var(--navy-20);}
.phz-report .dl-grid .statline {display: flex; gap: 28px; padding: 14px 0; border-top: 1px solid var(--rule); border-bottom: 1px solid var(--rule); margin-bottom: 18px;}
.phz-report .dl-grid .stat__n {font-family: var(--serif); font-size: 30px; line-height: 1;}
.phz-report .dl-grid .stat__l {font: 400 10.5px/1 var(--sans); letter-spacing: .12em; text-transform: uppercase; color: var(--navy-60); margin-top: 5px;}
@media (max-width: 860px) {
.phz-report .lede-grid {grid-template-columns: 1fr;}
.phz-report .report-cols {grid-template-columns: 1fr 1fr;}
.phz-report .report-cols > div:nth-child(2n) {border-right: 0;}
.phz-report .dl-grid {grid-template-columns: 1fr;}
.phz-report .dl-grid > .cell:first-child {border-right: 0; border-bottom: 1px solid var(--navy-20);}
}
@media (max-width: 520px) {
.phz-report .report-cols {grid-template-columns: 1fr;}
.phz-report .report-cols > div {border-right: 0; border-bottom: 1px solid var(--rule);}
}
`,
    html: `<div class="masthead-strip">
  <span>The whole season, one library</span>
  <span>Read free every Tuesday · momumentalreinvention.com</span>
</div>

<main>
<div class="wrap">

  <!-- MASTHEAD -->
  <div class="masthead reveal">
    <div class="masthead__vol">Vol. I · No. 01 · Live now 2026</div>
    <div class="masthead__name">The PHASE™</div>
    <div class="masthead__rooms">Body · Family · Voice · Work</div>
  </div>

  <!-- LEDE -->
  <div class="lede-grid">
    <div class="reveal">
      <h1>You are not in a phase. You are in <em>The PHASE™.</em></h1>
      <p class="a">The whole season of rebuilding everything. The body. The family. The voice. The work. These are the tools I built while I was still in it.</p>
      <p class="b">You are not falling apart. You are becoming MOMumental.</p>
      <div style="display:flex;gap:12px;flex-wrap:wrap">
        <a class="btn btn--mint" href="#get">Read the free report →</a>
        <a class="btn btn--ghost" href="/#library">The PHASE™ Library · $228 →</a>
      </div>
    </div>
    <div class="reveal">
      <div class="ph" style="height:300px;border:1px solid var(--navy-28)" aria-label="Rooftop portrait of Erika, pending"><span>rooftop portrait · drop file to wire</span></div>
      <div class="fig-cap">Fig. 1 · The PHASE™ · Vol. I · No. 01</div>
    </div>
  </div>

  <!-- EDITORIAL PULL -->
  <div class="section--paper" style="padding:26px var(--gutter);border-bottom:1px solid var(--navy-20);margin:0 calc(var(--gutter) * -1)">
    <div style="max-width:76ch;margin:0 auto;text-align:center">
      <div class="serif" style="font-size:clamp(19px,2.6vw,23px);line-height:1.45">“Everyone else hands you one room. A protocol for the hormones. A course for the split. A planner for the work. You are living all of it at once. This is the house for the whole season.”</div>
    </div>
  </div>

  <!-- CONTENTS: FOUR ROOMS -->
  <div class="byrule reveal">
    <h2>The four rooms</h2>
    <span class="kicker">Start where it hurts today</span>
  </div>
  <div class="report-cols reveal">
    <div>
      <div class="num">I</div><div class="lab">The Body</div>
      <div class="ttl">The PHASE™ · Perimenopause</div>
      <p>The map you should have been handed at 38. Test, do not guess.</p>
    </div>
    <div>
      <div class="num">II</div><div class="lab">The Family</div>
      <div class="ttl">The Co-Parenting Power Method®</div>
      <p>Twenty scripts already written, for the messages you dread sending.</p>
    </div>
    <div>
      <div class="num">III</div><div class="lab">The Voice</div>
      <div class="ttl">Self-Trust &amp; Confidence</div>
      <p>Coming back to your own knowing. Vol. IV.</p>
    </div>
    <div>
      <div class="num">IV</div><div class="lab">The Work</div>
      <div class="ttl">Building Through It</div>
      <p>Run your life the way an operator would. Seven tools.</p>
    </div>
  </div>

  <!-- DOWNLOAD / SUBSCRIBE -->
  <div class="dl-grid" id="get">
    <div class="cell reveal">
      <div class="eyebrow">Free · The MOMumental Report</div>
      <h3 class="serif" style="font-size:clamp(28px,4vw,34px);line-height:1.1;margin:10px 0 12px">The numbers behind <em>the rebuild.</em></h3>
      <p style="font:400 14px/1.55 var(--sans);color:var(--navy-80);margin:0 0 18px;max-width:46ch">Fifteen pages of research on what actually happens to a woman in midlife. Twenty sources, four rooms, and the letter I wrote from inside it.</p>
      <div class="statline">
        <div><div class="stat__n">15</div><div class="stat__l">Pages</div></div>
        <div><div class="stat__n">4</div><div class="stat__l">Rooms</div></div>
        <div><div class="stat__n">20</div><div class="stat__l">Sources cited</div></div>
      </div>
      <form class="field" onsubmit="return false" aria-label="Get the free report">
        <input type="email" placeholder="your@email.com" aria-label="Email address">
        <button type="submit">Send me the report →</button>
      </form>
    </div>
    <div class="cell reveal" style="min-height:260px;display:flex;align-items:center;justify-content:center;background:var(--paper)">
      <img src="/redesign/state-of-reinvention-cover.png" alt="State of Reinvention 2026, The MOMumental Report cover" style="max-height:340px;max-width:100%;object-fit:contain;box-shadow:0 12px 36px rgba(47,72,88,.2)">
    </div>
  </div>

  <!-- READ THE LETTER (navy) -->
  <div class="section--navy" style="padding:clamp(30px,5vw,36px) var(--gutter);margin:0 calc(var(--gutter) * -1) 0;display:grid;grid-template-columns:1fr 1fr;gap:36px;align-items:center" id="letterblock">
    <div class="reveal">
      <div class="eyebrow eyebrow--mint">Read the letter</div>
      <h3 class="serif" style="font-size:clamp(28px,4vw,36px);line-height:1.08;margin:10px 0 10px">The PHASE™ started as <em>a letter.</em></h3>
      <p style="font:400 14px/1.55 var(--sans);opacity:.82;margin:0;max-width:42ch">Every Tuesday, a dispatch from inside the rebuild. Read a few, then never miss one.</p>
    </div>
    <div class="reveal">
      <form class="field field--onnavy" onsubmit="return false" style="margin-bottom:14px" aria-label="Subscribe free">
        <input type="email" placeholder="your@email.com" aria-label="Email address">
        <button type="submit">Subscribe free</button>
      </form>
      <div style="border-top:1px solid rgba(255,249,241,.25);padding-top:12px;font:400 13px/1.5 var(--sans);opacity:.82">
        Latest: <span class="serif" style="font-size:15px">Two Chapters, One Body, One Year</span> · <span class="serif" style="font-size:15px">Building Through It</span>
      </div>
    </div>
  </div>

</div>
</main>`,
  },
  about: {
    wrap: `phz-about`,
    css: `.phz-about {--navy:   #2f4858;
  --cream:  #fff9f1;
  --paper:  #f1f1f0;
  --mint:   #03c9ab;   
  --orchid: #f086dc;   
  --navy-90: rgba(47,72,88,.9);
  --navy-80: rgba(47,72,88,.8);
  --navy-72: rgba(47,72,88,.72);
  --navy-60: rgba(47,72,88,.6);
  --navy-45: rgba(47,72,88,.45);
  --navy-28: rgba(47,72,88,.28);
  --navy-20: rgba(47,72,88,.2);
  --navy-16: rgba(47,72,88,.16);
  --navy-14: rgba(47,72,88,.14);
  --rule:   rgba(47,72,88,.2);
  --shadow: 0 2px 12px rgba(47,72,88,.09);

  --serif: var(--font-instrument), Georgia, serif;
  --sans:  var(--font-archivo), system-ui, -apple-system, sans-serif;
  --news:  var(--font-newsreader), Georgia, serif;

  --wrap: 1080px;
  --gutter: clamp(20px, 5vw, 44px);}
.phz-about *, .phz-about *::before, .phz-about *::after {box-sizing: border-box;}
.phz-about {scroll-behavior: smooth;}
.phz-about {margin: 0;
  background: var(--cream);
  color: var(--navy);
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;}
.phz-about img {max-width: 100%; display: block;}
.phz-about a {color: var(--navy); text-decoration: none;}
.phz-about h1, .phz-about h2, .phz-about h3 {font-family: var(--serif); font-weight: 400; margin: 0; text-wrap: pretty;}
.phz-about em {font-style: italic;}
.phz-about .wrap {max-width: var(--wrap); margin: 0 auto; padding-inline: var(--gutter);}
.phz-about .eyebrow {font: 600 11px/1 var(--sans);
  letter-spacing: .18em;
  text-transform: uppercase;
  color: var(--navy);}
.phz-about .eyebrow--mint {color: var(--mint);}
.phz-about .eyebrow--orchid {color: var(--orchid);}
.phz-about .kicker {font: 400 11px/1 var(--sans);
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--navy-60);}
.phz-about .serif {font-family: var(--serif);}
.phz-about .btn {display: inline-flex; align-items: center; gap: 6px;
  font: 500 13px/1 var(--sans);
  padding: 15px 22px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform .15s ease, box-shadow .15s ease, background .15s ease, color .15s ease;
  white-space: nowrap;}
.phz-about .btn:hover {transform: translateY(-1px);}
.phz-about .btn--mint {background: var(--mint);  color: var(--navy);}
.phz-about .btn--mint:hover {box-shadow: 0 6px 18px rgba(3,201,171,.35);}
.phz-about .btn--navy {background: var(--navy);  color: var(--cream);}
.phz-about .btn--orchid {background: var(--orchid);color: var(--navy); border-radius: 100px;}
.phz-about .btn--ghost {background: transparent; color: var(--navy); border-color: var(--navy-45);}
.phz-about .btn--ghost:hover {background: rgba(47,72,88,.05);}
.phz-about .btn--ghost-light {background: transparent; color: var(--cream); border-color: rgba(255,249,241,.45);}
.phz-about .btn--pill {border-radius: 100px;}
.phz-about .field {display: flex; border: 1px solid var(--navy-45); background: var(--cream);}
.phz-about .field input {flex: 1; min-width: 0; border: 0; background: transparent;
  padding: 14px 15px; font: 400 13px/1 var(--sans); color: var(--navy);}
.phz-about .field input::placeholder {color: var(--navy-45);}
.phz-about .field input:focus {outline: 2px solid var(--mint); outline-offset: -2px;}
.phz-about .field button {border: 0; cursor: pointer; background: var(--mint); color: var(--navy);
  padding: 14px 20px; font: 500 13px/1 var(--sans); white-space: nowrap;}
.phz-about .field--onnavy {border-color: rgba(255,249,241,.45); background: transparent;}
.phz-about .field--onnavy input {color: var(--cream);}
.phz-about .field--onnavy input::placeholder {color: rgba(255,249,241,.55);}
.phz-about .field--onnavy button {background: var(--cream); color: var(--navy);}
.phz-about .site-head {position: sticky; top: 0; z-index: 40;
  background: var(--cream);
  border-bottom: 1px solid var(--navy-16);}
.phz-about .site-head__bar {display: flex; align-items: center; justify-content: space-between;
  gap: 16px; padding-block: 15px;}
.phz-about .brand {display: flex; align-items: center; gap: 11px;}
.phz-about .brand__mark {width: 28px; height: 28px; background: var(--mint); color: var(--navy);
  display: grid; place-items: center; font-family: var(--serif); font-size: 17px;
  border-radius: 5px; flex: none;}
.phz-about .brand__name {font: 600 13px/1 var(--sans); letter-spacing: .05em;}
.phz-about .site-nav {display: flex; align-items: center; gap: 22px;}
.phz-about .site-nav a {font: 500 12.5px/1 var(--sans); color: var(--navy-75, rgba(47,72,88,.75));}
.phz-about .site-nav a:hover {color: var(--navy);}
.phz-about .site-nav .btn {padding: 11px 15px;}
.phz-about .nav-toggle {display: none; border: 1px solid var(--navy-28); background: transparent;
  border-radius: 6px; padding: 8px 10px; cursor: pointer; font-size: 15px; color: var(--navy);}
.phz-about .section {padding-block: clamp(48px, 8vw, 88px);}
.phz-about .section--paper {background: var(--paper);}
.phz-about .section--navy {background: var(--navy); color: var(--cream);}
.phz-about .section-head {display: flex; justify-content: space-between; align-items: baseline;
  gap: 16px; border-bottom: 1px solid var(--orchid); padding-bottom: 12px;
  margin-bottom: 30px; flex-wrap: wrap;}
.phz-about .section-head h2 {font-size: clamp(28px, 4vw, 38px);}
.phz-about .rooms-grid {display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
  background: var(--navy-20); border: 1px solid var(--navy-20);}
.phz-about .room {background: var(--cream); padding: 26px 22px; min-height: 168px;
  display: flex; flex-direction: column; justify-content: space-between;
  gap: 14px; cursor: pointer; transition: background .18s, box-shadow .18s;}
.phz-about .room:hover {background: #fffdf8; box-shadow: inset 0 0 0 1px var(--orchid);}
.phz-about .room__top {display: flex; justify-content: space-between; align-items: baseline;}
.phz-about .room__label {font: 600 11px/1 var(--sans); letter-spacing: .14em; text-transform: uppercase;}
.phz-about .room__num {font-family: var(--serif); font-size: 22px; color: var(--orchid); line-height: 1;}
.phz-about .room__title {font-family: var(--serif); font-size: clamp(20px, 2.4vw, 24px); line-height: 1.12;}
.phz-about .room__desc {font: 400 12.5px/1.45 var(--sans); color: var(--navy-72); margin-top: 6px;}
.phz-about .price-card {border: 1px solid var(--navy-28); background: var(--cream); padding: 26px;}
.phz-about .price-card__amount {font-family: var(--serif); font-size: clamp(46px, 7vw, 56px); line-height: 1; margin: 10px 0 4px;}
.phz-about .site-foot {background: var(--navy); color: var(--cream); padding-block: 56px;}
.phz-about .site-foot a {color: var(--cream); opacity: .82;}
.phz-about .site-foot a:hover {opacity: 1; color: var(--mint);}
.phz-about .foot-grid {display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr; gap: 32px;}
.phz-about .foot-col h4 {font: 600 10.5px/1 var(--sans); letter-spacing: .16em; text-transform: uppercase; margin-bottom: 14px; color: rgba(255,249,241,.65);}
.phz-about .foot-col ul {list-style: none; margin: 0; padding: 0;}
.phz-about .foot-col li {margin-bottom: 9px; font: 400 13px/1.4 var(--sans);}
.phz-about .foot-brand__name {font-family: var(--serif); font-size: 30px; margin-bottom: 10px;}
.phz-about .foot-brand p {font: 400 13px/1.6 var(--sans); opacity: .78; max-width: 34ch; margin: 0;}
.phz-about .foot-legal {margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255,249,241,.2);
  display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap;
  font: 400 11.5px/1.5 var(--sans); opacity: .7;}
.phz-about .media {display: block; width: 100%; height: 100%; object-fit: cover; background: var(--cream);}
.phz-about .avatar {border-radius: 50%; object-fit: cover; flex: none;}
.phz-about .ph {background-image: repeating-linear-gradient(135deg, rgba(47,72,88,.07) 0 6px, transparent 6px 12px);
  display: flex; align-items: flex-end; justify-content: flex-start;
  background-color: var(--cream);}
.phz-about .ph span {font: 500 9.5px/1 ui-monospace, Menlo, monospace; letter-spacing: .08em;
  text-transform: uppercase; padding: 8px 10px; color: var(--navy-45);}
.phz-about .ph--onnavy {background-image: repeating-linear-gradient(135deg, rgba(255,249,241,.14) 0 6px, transparent 6px 12px);}
.phz-about .ph--onnavy span {color: rgba(255,249,241,.65);}
.phz-about .js .reveal {opacity: 0; transform: translateY(16px); transition: opacity .6s ease, transform .6s ease;}
.phz-about .js .reveal.in {opacity: 1; transform: none;}
@media (prefers-reduced-motion: reduce) {
.phz-about .js .reveal {opacity: 1; transform: none; transition: none;}
.phz-about {scroll-behavior: auto;}
.phz-about .btn:hover {transform: none;}
}
@media (max-width: 860px) {
.phz-about .foot-grid {grid-template-columns: 1fr 1fr;}
.phz-about .nav-toggle {display: inline-flex;}
.phz-about .site-nav {display: none; position: absolute; left: 0; right: 0; top: 100%;
    flex-direction: column; align-items: stretch; gap: 0;
    background: var(--cream); border-bottom: 1px solid var(--navy-16);
    padding: 8px var(--gutter) 18px;}
.phz-about .site-nav.open {display: flex;}
.phz-about .site-nav a {padding: 13px 0; border-bottom: 1px solid var(--navy-14);}
.phz-about .site-nav .btn {margin-top: 12px; justify-content: center;}
}
@media (max-width: 640px) {
.phz-about .rooms-grid {grid-template-columns: 1fr;}
.phz-about .foot-grid {grid-template-columns: 1fr;}
.phz-about .section-head {border-bottom: none;}
.phz-about .section-head h2 {border-bottom: 1px solid var(--orchid); padding-bottom: 10px; width: 100%;}
}
.phz-about .imprint {font-family: var(--news);}
.phz-about .imprint h1, .phz-about .imprint h2, .phz-about .imprint h3 {font-family: var(--news); font-weight: 300;}
.phz-about .cover {background: var(--navy); color: var(--cream);}
.phz-about .cover__strip {padding: 18px var(--gutter); display: flex; justify-content: space-between; align-items: center;
  font: 500 11px/1 var(--sans); letter-spacing: .12em; text-transform: uppercase; gap: 14px;
  border-bottom: 1px solid rgba(255,249,241,.22);}
.phz-about .cover__strip .links {display: flex; gap: 20px; opacity: .85;}
.phz-about .cover__strip .accent {color: var(--orchid);}
.phz-about .cover__grid {display: grid; grid-template-columns: 1.25fr .75fr; gap: clamp(28px,5vw,44px); align-items: end; padding: clamp(40px,6vw,56px) var(--gutter) clamp(30px,5vw,40px);}
.phz-about .cover h1 {font-size: clamp(48px,9vw,76px); line-height: .96; letter-spacing: -.025em; margin: 0 0 22px;}
.phz-about .cover__lede {font: 300 clamp(17px,2.6vw,20px)/1.5 var(--news); color: rgba(255,249,241,.85); margin: 0 0 28px; max-width: 46ch;}
.phz-about .cover__eyebrow {font: 500 10.5px/1 var(--sans); letter-spacing: .24em; text-transform: uppercase; color: var(--orchid); margin-bottom: 22px;}
.phz-about .contents-head {display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px solid var(--navy-28); padding-bottom: 12px; flex-wrap: wrap; gap: 10px;}
.phz-about .contents-head h2 {font-size: clamp(28px,4vw,34px);}
.phz-about .toc {display: grid; grid-template-columns: 52px 1fr 200px 90px; gap: 20px; align-items: baseline;
  padding: 22px 0; border-bottom: 1px solid var(--navy-14); cursor: pointer; transition: padding-left .18s;}
.phz-about .toc:hover {padding-left: 8px;}
.phz-about .toc:hover .tocn {color: var(--navy) !important;}
.phz-about .tocn {font-size: 30px; font-weight: 300; color: var(--orchid);}
.phz-about .toc__lab {font: 600 10.5px/1 var(--sans); letter-spacing: .16em; text-transform: uppercase; color: var(--navy); margin-bottom: 6px;}
.phz-about .toc__ttl {font-size: 27px; font-weight: 300; line-height: 1.15;}
.phz-about .toc__d {font: 400 13px/1.5 var(--sans); color: var(--navy-72);}
.phz-about .toc__p {font: 500 13px/1 var(--sans); text-align: right;}
.phz-about .author {background: var(--paper); padding: clamp(28px,4vw,34px); display: grid; grid-template-columns: 1fr 1.1fr; gap: clamp(28px,4vw,36px); align-items: center; margin-block: 30px;}
.phz-about .author p.q {font-size: clamp(21px,3vw,26px); font-weight: 300; line-height: 1.35; margin: 0 0 16px;}
.phz-about .author p.by {font: 500 12.5px/1.5 var(--sans); color: var(--navy-72); margin: 0;}
.phz-about .foot-two {display: grid; grid-template-columns: 1.1fr .9fr; gap: clamp(28px,5vw,40px); align-items: start; padding-bottom: clamp(36px,6vw,52px);}
.phz-about .podbox {border: 1px solid var(--navy-20); padding: 22px;}
.phz-about .pill-row {display: flex; gap: 8px; flex-wrap: wrap; font: 500 11.5px/1 var(--sans); color: var(--navy-72);}
.phz-about .pill-row span {border: 1px solid var(--navy-28); padding: 9px 13px; border-radius: 100px;}
@media (max-width: 860px) {
.phz-about .cover__grid {grid-template-columns: 1fr;}
.phz-about .cover__strip .links {display: none;}
.phz-about .toc {grid-template-columns: 40px 1fr;}
.phz-about .toc__d, .phz-about .toc__p {display: none;}
.phz-about .author {grid-template-columns: 1fr;}
.phz-about .foot-two {grid-template-columns: 1fr;}
}
`,
    html: `<main>

<!-- SLATE COVER -->
<section class="cover">
  <div class="cover__strip">
    <span>The PHASE™ · Vol. I No. 01</span>
    <div class="links"><a href="/report" style="color:inherit">Report</a><a href="/#rooms" style="color:inherit">Rooms</a><a href="/#library" style="color:inherit">Library</a><a href="#podcast" style="color:inherit">Podcast</a></div>
    <a href="#letter" class="accent" style="color:var(--orchid)">Free Tuesday letter →</a>
  </div>
  <div class="cover__grid">
    <div class="reveal">
      <div class="cover__eyebrow">Body · Family · Voice · Work</div>
      <h1>You are not in a phase.<br>You are in <em>The&nbsp;PHASE™.</em></h1>
      <p class="cover__lede">The whole season of rebuilding everything. The body. The family. The voice. The work. These are the tools I built while I was still in it.</p>
      <div style="display:flex;gap:12px;flex-wrap:wrap">
        <a class="btn btn--orchid" href="/report">Read the free report →</a>
        <a class="btn btn--ghost-light btn--pill" href="/#library">The Library · $228 →</a>
      </div>
    </div>
    <img class="reveal" src="/redesign/erika-portrait.png" alt="Erika Hanafin Austria" style="height:340px;width:100%;object-fit:cover;object-position:50% 15%;border:1px solid rgba(255,249,241,.28)">
  </div>
</section>

<div class="wrap">

  <!-- CONTENTS -->
  <section style="padding-block:clamp(36px,5vw,44px) 10px">
    <div class="contents-head reveal">
      <h2>Contents</h2>
      <span class="kicker">Four rooms · one reinvention</span>
    </div>
    <div class="reveal">
      <a class="toc" href="/body">
        <span class="tocn">I</span>
        <div><div class="toc__lab">The Body</div><div class="toc__ttl">The PHASE™ · Perimenopause</div></div>
        <span class="toc__d">The map you should have been handed at 38</span>
        <span class="toc__p">$27 ea →</span>
      </a>
      <a class="toc" href="/#library">
        <span class="tocn">II</span>
        <div><div class="toc__lab">The Family</div><div class="toc__ttl">The Co-Parenting Power Method®</div></div>
        <span class="toc__d">The playbook for the two-house rebuild</span>
        <span class="toc__p">$97 →</span>
      </a>
      <a class="toc" href="/#library">
        <span class="tocn">III</span>
        <div><div class="toc__lab">The Voice</div><div class="toc__ttl">Self-Trust &amp; Confidence</div></div>
        <span class="toc__d">Coming back to your own knowing</span>
        <span class="toc__p">$27 →</span>
      </a>
      <a class="toc" href="/#library" style="border-bottom:0">
        <span class="tocn">IV</span>
        <div><div class="toc__lab">The Work</div><div class="toc__ttl">Building Through It</div></div>
        <span class="toc__d">Run your life the way an operator would</span>
        <span class="toc__p">from $17 →</span>
      </a>
    </div>
  </section>

  <!-- AUTHOR -->
  <section class="author reveal">
    <img src="/redesign/erika-portrait.png" alt="Erika Hanafin Austria, founder of MOMumental Moments" style="height:230px;width:100%;object-fit:cover;object-position:50% 15%;border:1px solid var(--navy-20)">
    <div>
      <div class="eyebrow" style="margin-bottom:14px">The author</div>
      <p class="q">“I did not write these from the other side. I wrote them from inside the wreckage, because that is when I needed them.”</p>
      <p class="by">Erika Hanafin Austria · Founder, MOMumental Moments® · Certified holistic health coach</p>
    </div>
  </section>

  <!-- LETTER + PODCAST -->
  <section class="foot-two">
    <div class="reveal" id="letter">
      <div class="eyebrow">Read the letter</div>
      <h2 style="font-size:clamp(30px,4vw,38px);line-height:1.05;margin:12px 0 12px">The PHASE™ started as <em>a letter.</em></h2>
      <p style="font:400 14px/1.6 var(--sans);color:var(--navy-72);margin:0 0 20px;max-width:44ch">Every Tuesday, a dispatch from inside the rebuild. Read a few, then never miss one.</p>
      <form class="field" onsubmit="return false" style="max-width:420px" aria-label="Subscribe free">
        <input type="email" placeholder="your@email.com" aria-label="Email address">
        <button type="submit" style="background:var(--navy);color:var(--cream)">Subscribe free</button>
      </form>
    </div>
    <div class="podbox reveal" id="podcast">
      <div style="display:flex;gap:14px;align-items:center;margin-bottom:16px">
        <img src="/redesign/podcast-cover.jpg" alt="MOMumental Reinvention podcast cover" style="width:64px;height:64px;flex:none;object-fit:cover;border:1px solid var(--navy-16)">
        <div>
          <div class="eyebrow" style="color:var(--navy-60);letter-spacing:.16em">The Podcast · weekly</div>
          <div style="font-family:var(--news);font-size:20px;font-weight:300;margin-top:5px">The PHASE™ Podcast</div>
        </div>
      </div>
      <div class="pill-row"><span>Spotify</span><span>YouTube</span><span>Substack</span></div>
    </div>
  </section>

</div>
</main>`,
  },
};
