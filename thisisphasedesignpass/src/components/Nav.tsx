const NAV_CSS = `
.ph-banner{background:var(--navy);color:var(--cream);text-align:center;font-family:var(--mono);font-size:11.5px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;padding:11px 16px;line-height:1.5}
.ph-banner a{color:var(--pink);border-bottom:1px solid rgba(240,134,220,.4)}
.ph-banner a:hover{color:var(--pink)}
.ph-nav{position:sticky;top:0;background:rgba(255,249,241,.93);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-bottom:1px solid var(--rule);z-index:50}
.ph-nav .navin{max-width:1180px;margin:0 auto;padding:14px clamp(20px,4vw,48px);display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap}
.ph-nav .logo{font-family:var(--mono);font-weight:600;font-size:13px;letter-spacing:.16em;text-transform:uppercase;color:var(--navy);display:inline-flex;align-items:center}
.ph-nav .logo .dot{display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--pink);margin-right:9px}
.ph-nav .navlinks{display:flex;gap:24px;font-family:var(--mono);font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--ink-muted);flex-wrap:wrap}
.ph-nav .navlinks a{transition:color .18s ease}
.ph-nav .navlinks a:hover{color:var(--pink-deep)}
.ph-nav .navcta{font-family:var(--mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;border:1px solid var(--navy);color:var(--navy);padding:8px 14px;border-radius:999px;transition:all .18s ease;white-space:nowrap}
.ph-nav .navcta:hover{background:var(--navy);color:var(--cream)}
@media(max-width:860px){.ph-nav .navlinks{display:none}}
`;

export function Nav() {
  return (
    <>
      <div className="ph-banner">
        The whole season, one library · read free every Tuesday at{' '}
        <a href="https://www.momumentalreinvention.com/" target="_blank" rel="noopener noreferrer">
          momumentalreinvention.com
        </a>
      </div>
      <nav className="ph-nav" aria-label="Primary">
        <div className="navin">
          <a href="/#top" className="logo" aria-label="The PHASE · Home">
            <span className="dot" aria-hidden="true" />
            The PHASE™
          </a>
          {/* One row only. The four rooms live in the masthead strip below, so
              repeating them here crowded the header. */}
          <div className="navlinks">
            <a href="/report">The Report</a>
            <a href="https://www.momumentalreinvention.com/p/the-library" target="_blank" rel="noopener noreferrer">
              The PHASE™ Library
            </a>
          </div>
          <a
            className="navcta"
            href="https://www.momumentalreinvention.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Free Tuesday letter →
          </a>
        </div>
      </nav>
      <style dangerouslySetInnerHTML={{ __html: NAV_CSS }} />
    </>
  );
}
