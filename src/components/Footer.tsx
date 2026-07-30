import Link from 'next/link';

const FOOTER_CSS = `
:root{--navy:var(--bg-navy);--navy-deep:var(--bg-navy-deep);--cream:var(--bg-cream-page);--cream-deep:var(--bg-cream-alt);--serif:var(--font-cormorant),Georgia,serif;--mono:var(--font-geist-mono),ui-monospace,monospace}
.ph-footer{background:var(--navy);color:rgba(255,249,241,.7);padding:56px 0 32px;font-family:var(--mono)}
.ph-footer .wrap{max-width:1180px;margin:0 auto;padding:0 clamp(20px,4vw,48px)}
.ph-footer a{color:inherit;text-decoration:none}
.ph-footer .foot-top{display:flex;justify-content:space-between;align-items:flex-end;gap:32px;flex-wrap:wrap;padding-bottom:28px;border-bottom:1px solid rgba(255,249,241,.14)}
.ph-footer .foot-name{font-family:var(--serif);font-size:38px;font-weight:500;color:var(--cream);letter-spacing:-.01em}
.ph-footer .foot-name .it{font-style:italic;color:rgba(255,249,241,.55);font-size:24px}
.ph-footer .foot-links{display:flex;gap:26px;font-size:11px;letter-spacing:.16em;text-transform:uppercase;flex-wrap:wrap}
.ph-footer .foot-links a{color:rgba(255,249,241,.8);transition:color .18s ease}
.ph-footer .foot-links a:hover{color:var(--pink)}
.ph-footer .foot-social{display:grid;grid-template-columns:1.1fr .9fr;gap:32px;align-items:center;padding:30px 0;border-bottom:1px solid rgba(255,249,241,.14)}
@media(max-width:820px){.ph-footer .foot-social{grid-template-columns:1fr;gap:24px}}
.ph-footer .pod{display:flex;align-items:center;gap:18px}
.ph-footer .pod .art{width:64px;height:64px;border-radius:6px;flex-shrink:0;background:radial-gradient(circle at 68% 28%,var(--pink) 0%,var(--pink-deep) 46%,#1d2f3d 78%);display:flex;align-items:center;justify-content:center;font-family:var(--serif);font-size:30px;font-weight:500;color:var(--cream);border:1px solid rgba(240,134,220,.45);overflow:hidden;object-fit:cover}
.ph-footer .pod .l{font-family:var(--mono);font-size:10.5px;letter-spacing:.2em;text-transform:uppercase;color:var(--pink)}
.ph-footer .pod .n{font-family:var(--serif);font-size:26px;font-weight:500;color:var(--cream);letter-spacing:-.01em;margin-top:2px;display:block;transition:color .18s ease}
.ph-footer .pod .n:hover{color:var(--pink)}
.ph-footer .pod .n .it{font-style:italic;color:rgba(255,249,241,.6);font-size:18px}
.ph-footer .pod .plats{display:flex;gap:14px;margin-top:8px;font-family:var(--mono);font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,249,241,.6);flex-wrap:wrap}
.ph-footer .pod .plats a{border-bottom:1px solid rgba(240,134,220,.35);transition:color .18s ease}
.ph-footer .pod .plats a:hover{color:var(--pink)}
.ph-footer .socials{display:flex;gap:10px;flex-wrap:wrap;justify-content:flex-end}
@media(max-width:820px){.ph-footer .socials{justify-content:flex-start}}
.ph-footer .socials a{display:inline-flex;align-items:center;gap:9px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,249,241,.85);border:1px solid rgba(255,249,241,.22);padding:9px 15px;border-radius:999px;transition:all .18s ease}
.ph-footer .socials a:hover{background:var(--pink);border-color:var(--pink);color:var(--navy-deep)}
.ph-footer .socials svg{width:14px;height:14px;fill:currentColor;flex-shrink:0}
.ph-footer .foot-bottom{padding-top:24px;font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,249,241,.5);display:flex;justify-content:space-between;gsp:18px;flex-wrap:wrap;line-height:1.9}
.ph-footer .foot-bottom .marks{color:var(--cream)}
.ph-footer .foot-meta{margin-top:24px;padding-top:20px;border-top:1px solid rgba(255,249,241,.14);display:flex;justify-content:space-between;gap:18px;flex-wrap:wrap;font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,249,241,.55)}
.ph-footer .foot-meta .links{display:flex;gap:20px;flex-wrap:wrap}
.ph-footer .foot-meta a{transition:color .18s ease}
.ph-footer .foot-meta a:hover{color:var(--pink)}
.ph-footer .foot-legal{padding-top:18px;font-size:10.5px;letter-spacing:.02em;color:rgba(255,249,241,.45);line-height:1.9;font-style:italic}
`;

export function Footer() {
  return (
    <footer className="ph-footer">
      <style dangerouslySetInnerHTML={{ __html: FOOTER_CSS }} />
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-name">
            <span className="it">The</span> PHASE™
          </div>
          <div className="foot-links">
            <a href="/#body">Body</a>
            <a href="/#family">Family</a>
            <a href="/#voice">Voice</a>
            <a href="/#work">Work</a>
            <a href="/#library">The PHASE™ Library</a>
            <a href="https://www.amazon.com/shop/erikahanafin" target="_blank" rel="noopener noreferrer">
              Shop
            </a>
            <a href="https://www.momumentalreinvention.com/" target="_blank" rel="noopener noreferrer">
              Tuesday letter
            </a>
          </div>
        </div>

        <div className="foot-social">
          <div className="pod">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="art" src="/podcast-cover.jpg" alt="MOMumental Reinvention Podcast" />
            <span>
              <span className="l">The Podcast · New episodes weekly</span>
              <a
                className="n"
                href="https://open.spotify.com/show/033MOj9EKx4ib7k4crYXYX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="it">The</span> PHASE™ Podcast
              </a>
              <span className="plats">
                <span>Listen on</span>
                <a
                  href="https://open.spotify.com/show/033MOj9EKx4ib7k4crYXYX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Spotify
                </a>
                <a
                  href="https://www.youtube.com/@momumentalreinvention"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
                <a href="https://www.momumentalreinvention.com/" target="_blank" rel="noopener noreferrer">
                  Substack
                </a>
              </span>
            </span>
          </div>

          <div className="socials">
            <a
              href="https://www.instagram.com/thisisphaseco"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.6.23 1 .5 1.4.95.45.4.72.8.95 1.4.17.4.37 1 .42 2.2.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.05 1.2-.25 1.8-.42 2.2-.23.6-.5 1-.95 1.4-.4.45-.8.72-1.4.95-.4.17-1 .37-2.2.42-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.05-1.8-.25-2.2-.42-.6-.23-1-.5-1.4-.95-.45-.4-.72-.8-.95-1.4-.17-.4-.37-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.05-1.2.25-1.8.42-2.2.23-.6.5-1 .95-1.4.4-.45.8-.72 1.4-.95.4-.17 1-.37 2.2-.42C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.8.07-1 .04-1.5.2-1.8.33-.4.15-.6.3-.9.6-.3.3-.45.5-.6.9-.13.3-.29.8-.33 1.8C3.5 8.5 3.5 8.9 3.5 12s0 3.5.07 4.8c.04 1 .2 1.5.33 1.8.15.4.3.6.6.9.3.3.5.45.9.6.3.13.8.29 1.8.33 1.3.07 1.7.07 4.8.07s3.5 0 4.8-.07c1-.04 1.5-.2 1.8-.33.4-.15.6-.3.9-.6.3-.3.45-.5.6-.9.13-.3.29-.8.33-1.8.07-1.3.07-1.7.07-4.8s0-3.5-.07-4.8c-.04-1-.2-1.5-.33-1.8-.15-.4-.3-.6-.6-.9-.3-.3-.5-.45-.9-.6-.3-.13-.8-.29-1.8-.33C15.5 4 15.1 4 12 4zm0 3.1a4.9 4.9 0 110 9.8 4.9 4.9 0 010-9.8zm0 1.8a3.1 3.1 0 100 6.2 3.1 3.1 0 000-6.2zm6.2-2a1.15 1.15 0 11-2.3 0 1.15 1.15 0 012.3 0z" />
              </svg>
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/erikahanafinaustria"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.4 8.65 21 11 21 14.1V21h-4v-6.1c0-1.5-.03-3.4-2.08-3.4-2.08 0-2.4 1.6-2.4 3.3V21H9z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://www.momumentalreinvention.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Substack"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 3h16v2.5H4zM4 7.5h16V10H4zM4 12.2 12 17l8-4.8V21l-8-4.8L4 21z" />
              </svg>
              Substack
            </a>
            <a
              href="https://www.tiktok.com/@momumentalmomentsco"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M16.6 5.8a5 5 0 003.4 1.4v3a8 8 0 01-3.9-1.1v5.6a5.9 5.9 0 11-5.9-5.9c.3 0 .6 0 .9.07v3.1a2.8 2.8 0 102 2.7V2h3a5 5 0 00.5 3.8z" />
              </svg>
              TikTok
            </a>
            <a
              href="https://www.youtube.com/@momumentalreinvention"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21.6 7.2a2.5 2.5 0 00-1.75-1.77C18.25 5 12 5 12 5s-6.25 0-7.85.43A2.5 2.5 0 002.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 001.75 1.77C5.75 19 12 19 12 19s6.25 0 7.85-.43a2.5 2.5 0 001.75-1.77C22 15.2 22 12 22 12s0-3.2-.4-4.8zM10 15.5v-7l6 3.5z" />
              </svg>
              YouTube
            </a>
          </div>
        </div>

        <div className="foot-bottom">
          <span className="marks">
            MOMumental Moments® · The PHASE™ · The Co-Parenting Power Method®
          </span>
          <span>Erika Hanafin Austria · You are becoming MOMumental.</span>
        </div>

        <div className="foot-meta">
          <div>© {new Date().getFullYear()} MOMumental Moments®. The PHASE™ is a trademark of MOMumental Moments®.</div>
          <div className="links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/disclaimer">Disclaimer</Link>
          </div>
        </div>

        <div className="foot-legal">
          The PHASE™ is educational content from a certified holistic health coach. Not medical advice. Always consult your healthcare provider before making changes to medications, supplements, or treatment protocols. Some links on this site are affiliate links. I only recommend products I personally use. As an Amazon Associate I earn from qualifying purchases.
        </div>
      </div>
    </footer>
  );
}
