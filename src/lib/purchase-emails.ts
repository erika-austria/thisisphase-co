/**
 * Purchase delivery emails · 8 product-specific templates.
 *
 * Voice firewall: NEON, no em dashes, sister tone, MOMumentally sign-off.
 * Each email = delivery + welcome + Substack invite + soft cross-sell + reply prompt.
 *
 * Day 0 (instant):  delivery email (this file)
 * Day 0 + 30 min:   substack-invite.ts (V1.5)
 * Day 3:            personal-checkin.ts (V1.5)
 * Day 7:            offer.ts (V1.5)
 * Day 14:           keystone-essay.ts (V1.5)
 */

import { PRODUCTS, type ProductKey } from "./products";

const BRAND_PINK = "#F086DC";
const BRAND_NAVY = "#2f4858";
const BRAND_CREAM = "#FFF9F1";
const BRAND_CREAM_ALT = "#F8F4EE";

/**
 * Build the delivery email for a given purchased product.
 * Returns { subject, html, text } ready for Resend.
 */
export function buildDeliveryEmail(productKey: ProductKey, customerEmail: string) {
  const product = PRODUCTS[productKey];
  const crossSell = product.crossSellKey ? PRODUCTS[product.crossSellKey] : null;

  const subject = `Your ${product.name} · here is the work`;

  const text = [
    `Hi friend,`,
    ``,
    `${product.fullTitle} is in your inbox now. The PDF download is at the link below.`,
    ``,
    `${product.pdfUrl}`,
    ``,
    `Save it to your device. Print it if you want. Use it.`,
    ``,
    `Three things before you close this email:`,
    ``,
    `1. The work is yours forever. The link does not expire. If you ever lose it, just reply and I will resend.`,
    ``,
    `2. Every Tuesday at 9 AM ET I send a long-form essay to MOMumental Reinvention. Subscribe at https://www.momumentalreinvention.com if you want to keep reading. Free essays for everyone. Paid subscribers get the deeper work.`,
    ``,
    `3. ${crossSell ? product.crossSellPitch + ' Find it at ' + (crossSell.key.startsWith('vol') ? 'https://thisisphase.co/vol/' + (crossSell.key === 'vol1' ? 'perimenopause' : crossSell.key === 'vol2' ? 'hormones' : crossSell.key === 'vol3' ? 'architecture' : crossSell.key === 'vol4' ? 'self-trust' : 'execution') : 'https://thisisphase.co/' + crossSell.key) + '.' : 'You have the full Series. That is the foundation. Build from here.'}`,
    ``,
    `When you have a minute, hit reply and tell me one thing the work surfaces for you. The body-truth conversation works better when readers write back. I read every reply.`,
    ``,
    `MOMumentally,`,
    `Erika`,
    ``,
    `─────────────────────────────`,
    `MOMumental Moments® · the parent IP behind The PHASE™ + The Power Method®.`,
    `Live at https://momumentalmoments.co · The PHASE™ at https://thisisphase.co · Substack at https://www.momumentalreinvention.com`,
  ].join("\n");

  const html = `<!DOCTYPE html>
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
          MOMUMENTAL MOMENTS&reg;
        </div>
        <div style="height:2px;width:48px;background:${BRAND_PINK};margin:0 auto;"></div>
      </div>

      <h1 style="font-family:Georgia, 'Times New Roman', serif;font-size:32px;line-height:1.2;color:${BRAND_NAVY};margin:0 0 24px 0;font-weight:normal;">
        Your ${escapeHtml(product.name)}<br>
        <span style="font-style:italic;color:${BRAND_PINK};">is in your inbox</span>.
      </h1>

      <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 16px;">Hi friend,</p>

      <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 24px;">
        ${escapeHtml(product.fullTitle)} is yours now. Download below. Save it to your device. Print it if you want. Use it.
      </p>

      <div style="margin:32px 0;text-align:center;">
        <a href="${product.pdfUrl}" target="_blank" style="display:inline-block;padding:16px 32px;background:${BRAND_PINK};color:#FFFFFF;text-decoration:none;font-family:'Courier New', monospace;font-size:13px;letter-spacing:0.18em;text-transform:uppercase;font-weight:600;border-radius:2px;">
          Download your PDF &rarr;
        </a>
      </div>

      <div style="border-top:1px solid rgba(47,72,88,0.15);padding-top:32px;margin-top:32px;">
        <p style="font-family:'Courier New', monospace;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:${BRAND_PINK};margin:0 0 16px;">
          THREE THINGS BEFORE YOU CLOSE THIS EMAIL
        </p>

        <p style="font-size:15px;color:${BRAND_NAVY};margin:0 0 20px;">
          <strong style="color:${BRAND_NAVY};">01 &middot; Yours forever.</strong> The work is yours. The link does not expire. If you ever lose it, just reply to this email and I will resend.
        </p>

        <p style="font-size:15px;color:${BRAND_NAVY};margin:0 0 20px;">
          <strong style="color:${BRAND_NAVY};">02 &middot; Tuesday letters.</strong> Every Tuesday at 9 AM ET I send a long-form essay to MOMumental Reinvention. Free essays for everyone. Paid subscribers go deeper. <a href="https://www.momumentalreinvention.com" target="_blank" style="color:${BRAND_PINK};text-decoration:underline;">Subscribe at momumentalreinvention.com</a> if you want to keep reading.
        </p>

        <p style="font-size:15px;color:${BRAND_NAVY};margin:0 0 20px;">
          <strong style="color:${BRAND_NAVY};">03 &middot; What is next.</strong> ${escapeHtml(crossSell ? product.crossSellPitch : 'You have the full Series. That is the foundation. Build from here.')}
          ${crossSell ? `<br><a href="https://thisisphase.co/${crossSellPath(crossSell.key)}" target="_blank" style="color:${BRAND_PINK};text-decoration:underline;">See ${escapeHtml(crossSell.name)} &rarr;</a>` : ""}
        </p>
      </div>

      <div style="background:${BRAND_CREAM_ALT};border-left:3px solid ${BRAND_PINK};padding:20px 24px;margin:32px 0;">
        <p style="font-style:italic;font-size:16px;color:${BRAND_NAVY};margin:0;">
          When you have a minute, hit reply and tell me one thing the work surfaces for you. The body-truth conversation works better when readers write back. I read every reply.
        </p>
      </div>

      <p style="font-size:16px;color:${BRAND_NAVY};margin:32px 0 8px;font-style:italic;">
        MOMumentally,
      </p>
      <p style="font-family:Georgia, 'Times New Roman', serif;font-size:24px;color:${BRAND_PINK};font-style:italic;margin:0;">
        Erika
      </p>

      <div style="margin-top:48px;padding-top:24px;border-top:1px solid rgba(47,72,88,0.1);font-size:11px;color:rgba(47,72,88,0.6);text-align:center;">
        MOMumental Moments&reg; &middot; the parent IP behind The PHASE&trade; + The Power Method&reg;.<br>
        <a href="https://momumentalmoments.co" target="_blank" style="color:rgba(47,72,88,0.6);text-decoration:underline;">momumentalmoments.co</a> &middot;
        <a href="https://thisisphase.co" target="_blank" style="color:rgba(47,72,88,0.6);text-decoration:underline;">thisisphase.co</a> &middot;
        <a href="https://www.momumentalreinvention.com" target="_blank" style="color:rgba(47,72,88,0.6);text-decoration:underline;">Substack</a>
      </div>
    </div>
  </body>
</html>`;

  return { subject, html, text, customerEmail };
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function crossSellPath(key: ProductKey): string {
  if (key.startsWith("vol")) {
    const map: Record<string, string> = {
      vol1: "vol/perimenopause",
      vol2: "vol/hormones",
      vol3: "vol/architecture",
      vol4: "vol/self-trust",
      vol5: "vol/execution",
    };
    return map[key] || "";
  }
  if (key === "series") return "series";
  if (key === "journal") return "journal";
  if (key === "decode") return "decode";
  return "";
}
