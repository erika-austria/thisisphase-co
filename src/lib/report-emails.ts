/**
 * State of Reinvention 2026 · The MOMumental Report · lead funnel emails
 *
 * Voice firewall: NEON, no em dashes, sister tone, MOMumentally sign-off.
 *
 * Day 0 (instant): buildReportDeliveryEmail · PDF download + read-online link
 * Day 3:           buildReportNudgeEmail    · which room did you land in, soft Library tease
 *
 * Both are dispatched at form submit via Resend's `scheduled_at` parameter,
 * mirroring the architecture of clarity-emails.ts so behavior is consistent.
 */

const BRAND_PINK = '#F086DC';
const BRAND_NAVY = '#2f4858';
const BRAND_CREAM = '#FFF9F1';

const SITE_URL = 'https://thephase.co';

/**
 * The report lives in /public so it ships with the deploy and needs no blob
 * upload step. Set REPORT_PDF_URL in Vercel to serve it from Vercel Blob
 * instead (recommended once the file changes more often than the code does).
 */
export const REPORT_PDF_URL =
  process.env.REPORT_PDF_URL || `${SITE_URL}/report/state-of-reinvention-2026.pdf`;

/** The same 15 pages, readable in the browser. Free, no email required. */
export const REPORT_READ_URL = `${SITE_URL}/report/state-of-reinvention-2026.html`;

const LIBRARY_URL = 'https://www.momumentalreinvention.com/p/the-library';
const SUBSTACK_SUBSCRIBE_URL = 'https://www.momumentalreinvention.com/subscribe';

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function shell(subject: string, eyebrow: string, inner: string): string {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(subject)}</title>
  </head>
  <body style="margin:0;padding:0;background:${BRAND_CREAM};font-family:Georgia, 'Times New Roman', serif;color:${BRAND_NAVY};line-height:1.6;">
    <div style="max-width:600px;margin:0 auto;padding:48px 32px 64px;">
      <div style="text-align:center;margin-bottom:40px;">
        <div style="font-family:'Courier New', monospace;font-size:11px;letter-spacing:0.28em;text-transform:uppercase;color:${BRAND_PINK};margin-bottom:12px;">
          ${eyebrow}
        </div>
        <div style="height:2px;width:48px;background:${BRAND_PINK};margin:0 auto;"></div>
      </div>
      ${inner}
      <div style="border-top:1px solid rgba(47,72,88,0.15);padding-top:24px;margin-top:40px;font-family:'Courier New', monospace;font-size:11px;line-height:1.9;color:rgba(47,72,88,0.6);">
        MOMumental Moments&reg; &middot; the parent IP behind The PHASE&trade; and The Co-Parenting Power Method&reg;.<br />
        The PHASE&trade; at <a href="${SITE_URL}" style="color:${BRAND_PINK};text-decoration:none;">thephase.co</a>
        &middot; Tuesday letters at <a href="${SUBSTACK_SUBSCRIBE_URL}" style="color:${BRAND_PINK};text-decoration:none;">momumentalreinvention.com</a>
      </div>
    </div>
  </body>
</html>`;
}

// ─── Day 0 · instant delivery ────────────────────────────────────────────

export function buildReportDeliveryEmail(_email: string) {
  const subject = 'Your copy of State of Reinvention 2026';

  const text = [
    `Hi friend,`,
    ``,
    `Here is the report. Fifteen pages on what actually happens to a woman in midlife, across all four rooms: the body, the family, the voice, the work.`,
    ``,
    `Download the PDF: ${REPORT_PDF_URL}`,
    ``,
    `Or read it in your browser: ${REPORT_READ_URL}`,
    ``,
    `Two things before you close this.`,
    ``,
    `1. Twenty sources are cited on the last page. Every number in the report traces back to one of them. Check my work.`,
    ``,
    `2. Read it before you buy anything. That is the point of it. If a room lands, the tool for that room is waiting at ${SITE_URL}, and the whole season lives in the Complete Library at ${LIBRARY_URL}.`,
    ``,
    `One ask. Hit reply and tell me which of the four rooms you are standing in right now. I read every reply.`,
    ``,
    `MOMumentally,`,
    `Erika Hanafin Austria`,
    `Founder, MOMumental Moments®`,
  ].join('\n');

  const html = shell(
    subject,
    'THE MOMUMENTAL REPORT &middot; 2026',
    `
      <h1 style="font-family:Georgia, 'Times New Roman', serif;font-size:32px;line-height:1.2;color:${BRAND_NAVY};margin:0 0 24px 0;font-weight:normal;">
        State of<br />
        <span style="font-style:italic;color:${BRAND_PINK};">Reinvention</span> is yours.
      </h1>

      <p style="font-size:16px;margin:0 0 16px;">Hi friend,</p>

      <p style="font-size:16px;margin:0 0 24px;">
        Fifteen pages on what actually happens to a woman in midlife, across all four rooms. The body. The family. The voice. The work.
      </p>

      <div style="margin:32px 0;text-align:center;">
        <a href="${REPORT_PDF_URL}" target="_blank" style="display:inline-block;padding:16px 32px;background:${BRAND_PINK};color:#FFFFFF;text-decoration:none;font-family:'Courier New', monospace;font-size:13px;letter-spacing:0.18em;text-transform:uppercase;font-weight:600;border-radius:2px;">
          Download the PDF &rarr;
        </a>
      </div>

      <p style="font-size:15px;text-align:center;margin:0 0 32px;">
        Or <a href="${REPORT_READ_URL}" style="color:${BRAND_PINK};">read it in your browser</a>.
      </p>

      <div style="border-top:1px solid rgba(47,72,88,0.15);padding-top:28px;">
        <p style="font-family:'Courier New', monospace;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:${BRAND_PINK};margin:0 0 16px;">
          TWO THINGS
        </p>
        <p style="font-size:16px;margin:0 0 16px;">
          Twenty sources are cited on the last page. Every number in the report traces back to one of them. Check my work.
        </p>
        <p style="font-size:16px;margin:0 0 16px;">
          Read it before you buy anything. That is the point of it. If a room lands, the tool for that room is waiting at
          <a href="${SITE_URL}" style="color:${BRAND_PINK};">thephase.co</a>, and the whole season lives in
          <a href="${LIBRARY_URL}" style="color:${BRAND_PINK};">the Complete Library</a>.
        </p>
        <p style="font-size:16px;margin:0 0 24px;">
          One ask. Hit reply and tell me which of the four rooms you are standing in right now. I read every reply.
        </p>
      </div>

      <p style="font-size:16px;margin:0;">
        MOMumentally,<br />
        <span style="font-style:italic;">Erika Hanafin Austria</span><br />
        <span style="font-family:'Courier New', monospace;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(47,72,88,0.6);">Founder, MOMumental Moments&reg;</span>
      </p>
    `,
  );

  return { subject, html, text };
}

// ─── Day 3 · the room nudge ──────────────────────────────────────────────

export function buildReportNudgeEmail(_email: string) {
  const subject = 'Which room did you land in?';

  const text = [
    `Hi friend,`,
    ``,
    `You downloaded State of Reinvention a few days ago. Here is the question the report is really asking.`,
    ``,
    `Which room are you standing in right now?`,
    ``,
    `Body. The labs, the symptoms, the four years of being told you are fine.`,
    `Family. The two-house rebuild and the messages you dread sending.`,
    `Voice. Coming back to your own knowing.`,
    `Work. Running your life the way an operator would.`,
    ``,
    `Most women are in more than one. That is the whole premise. Everyone else hands you a single room and you are living all of it at once.`,
    ``,
    `Start where it hurts today: ${SITE_URL}`,
    ``,
    `If more than one room applies, the Complete Library is the whole house, one payment, yours forever: ${LIBRARY_URL}`,
    ``,
    `MOMumentally,`,
    `Erika Hanafin Austria`,
  ].join('\n');

  const html = shell(
    subject,
    'THE PHASE&trade; &middot; FOUR ROOMS',
    `
      <h1 style="font-family:Georgia, 'Times New Roman', serif;font-size:32px;line-height:1.2;color:${BRAND_NAVY};margin:0 0 24px 0;font-weight:normal;">
        Which room did you<br />
        <span style="font-style:italic;color:${BRAND_PINK};">land in</span>?
      </h1>

      <p style="font-size:16px;margin:0 0 24px;">
        You downloaded State of Reinvention a few days ago. Here is the question the report is really asking.
      </p>

      <table role="presentation" width="100%" style="border-collapse:collapse;margin:0 0 28px;">
        <tr><td style="padding:12px 0;border-bottom:1px solid rgba(47,72,88,0.12);font-size:16px;"><strong>Body.</strong> The labs, the symptoms, the four years of being told you are fine.</td></tr>
        <tr><td style="padding:12px 0;border-bottom:1px solid rgba(47,72,88,0.12);font-size:16px;"><strong>Family.</strong> The two-house rebuild and the messages you dread sending.</td></tr>
        <tr><td style="padding:12px 0;border-bottom:1px solid rgba(47,72,88,0.12);font-size:16px;"><strong>Voice.</strong> Coming back to your own knowing.</td></tr>
        <tr><td style="padding:12px 0;font-size:16px;"><strong>Work.</strong> Running your life the way an operator would.</td></tr>
      </table>

      <p style="font-size:16px;margin:0 0 28px;">
        Most women are in more than one. That is the whole premise. Everyone else hands you a single room and you are living all of it at once.
      </p>

      <div style="margin:32px 0;text-align:center;">
        <a href="${SITE_URL}" target="_blank" style="display:inline-block;padding:16px 32px;background:${BRAND_NAVY};color:${BRAND_CREAM};text-decoration:none;font-family:'Courier New', monospace;font-size:13px;letter-spacing:0.18em;text-transform:uppercase;font-weight:600;border-radius:2px;">
          Start where it hurts today &rarr;
        </a>
      </div>

      <p style="font-size:15px;text-align:center;margin:0 0 24px;">
        If more than one room applies, <a href="${LIBRARY_URL}" style="color:${BRAND_PINK};">the Complete Library</a> is the whole house. One payment, yours forever.
      </p>

      <p style="font-size:16px;margin:0;">
        MOMumentally,<br />
        <span style="font-style:italic;">Erika Hanafin Austria</span>
      </p>
    `,
  );

  return { subject, html, text };
}
