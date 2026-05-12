/**
 * Purchase delivery + follow-up email sequence · 5 emails per purchase.
 *
 * Voice firewall: NEON, no em dashes, sister tone, MOMumentally sign-off.
 *
 * Day 0 (instant):  buildDeliveryEmail            · PDF download + reply prompt
 * Day 0 + 30 min:   buildSubstackInviteEmail      · soft invite to Tuesday essays
 * Day 3:            buildCheckInEmail             · PURE personal check-in · NO selling, NO CTA, just visibility
 * Day 7:            buildOfferEmail               · cross-sell / upsell offer (single-vol → Series upgrade)
 * Day 14:           buildKeystoneEmail            · drive to keystone essay + paid Substack
 *
 * All five are dispatched at purchase time via Resend's `scheduled_at` parameter
 * (Resend supports up to 30 days future scheduling · no cron infrastructure needed).
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

// ─── Shared layout shell ──────────────────────────────────────────────────

function emailShell(opts: {
  subject: string;
  preheader?: string;
  bodyHtml: string;
}): string {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(opts.subject)}</title>
  </head>
  <body style="margin:0;padding:0;background:${BRAND_CREAM};font-family:Georgia, 'Times New Roman', serif;color:${BRAND_NAVY};line-height:1.6;">
    ${opts.preheader ? `<div style="display:none;font-size:1px;color:${BRAND_CREAM};line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">${escapeHtml(opts.preheader)}</div>` : ""}
    <div style="max-width:600px;margin:0 auto;padding:48px 32px 64px;">
      <div style="text-align:center;margin-bottom:40px;">
        <div style="font-family:'Courier New', monospace;font-size:11px;letter-spacing:0.28em;text-transform:uppercase;color:${BRAND_PINK};margin-bottom:12px;">
          MOMUMENTAL MOMENTS&reg;
        </div>
        <div style="height:2px;width:48px;background:${BRAND_PINK};margin:0 auto;"></div>
      </div>
      ${opts.bodyHtml}
      <div style="margin-top:48px;padding-top:24px;border-top:1px solid rgba(47,72,88,0.1);font-size:11px;color:rgba(47,72,88,0.6);text-align:center;">
        MOMumental Moments&reg; &middot; the parent IP behind The PHASE&trade; + The Power Method&reg;.<br>
        <a href="https://momumentalmoments.co" target="_blank" style="color:rgba(47,72,88,0.6);text-decoration:underline;">momumentalmoments.co</a> &middot;
        <a href="https://thisisphase.co" target="_blank" style="color:rgba(47,72,88,0.6);text-decoration:underline;">thisisphase.co</a> &middot;
        <a href="https://www.momumentalreinvention.com" target="_blank" style="color:rgba(47,72,88,0.6);text-decoration:underline;">Substack</a>
      </div>
    </div>
  </body>
</html>`;
}

// ─── Day 0 + 30 min · Substack invite ─────────────────────────────────────

/**
 * Sent 30 min after purchase · soft invite to the free Tuesday essay.
 * One CTA: subscribe to Substack. No upsell, no cross-sell, no products.
 */
export function buildSubstackInviteEmail(productKey: ProductKey, customerEmail: string) {
  const product = PRODUCTS[productKey];
  const subject = `One more thing while you have the ${product.name} open`;
  const preheader = "Tuesday letters · free · the body-truth conversation that built The PHASE.";

  const text = [
    `Hi friend,`,
    ``,
    `Quick second email. I want to make sure you know about the work that lives outside the PDF.`,
    ``,
    `Every Tuesday at 9 AM ET I send a long-form essay to MOMumental Reinvention. The free essays are where the body-truth conversation actually happens. The ${product.name} you just downloaded came out of those Tuesday letters.`,
    ``,
    `If you want to keep reading: https://www.momumentalreinvention.com`,
    ``,
    `Free is the front door. Paid subscribers go deeper. Either way, you have me in your inbox once a week.`,
    ``,
    `MOMumentally,`,
    `Erika`,
  ].join("\n");

  const bodyHtml = `
    <h1 style="font-family:Georgia, 'Times New Roman', serif;font-size:28px;line-height:1.25;color:${BRAND_NAVY};margin:0 0 24px 0;font-weight:normal;">
      One more thing<br>
      <span style="font-style:italic;color:${BRAND_PINK};">while you have it open</span>.
    </h1>

    <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 16px;">Hi friend,</p>

    <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 20px;">
      Quick second email. I want to make sure you know about the work that lives outside the PDF.
    </p>

    <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 20px;">
      Every Tuesday at 9 AM ET I send a long-form essay to <strong>MOMumental Reinvention</strong>. The free essays are where the body-truth conversation actually happens. The ${escapeHtml(product.name)} you just downloaded came out of those Tuesday letters.
    </p>

    <div style="margin:32px 0;text-align:center;">
      <a href="https://www.momumentalreinvention.com" target="_blank" style="display:inline-block;padding:16px 32px;background:${BRAND_PINK};color:#FFFFFF;text-decoration:none;font-family:'Courier New', monospace;font-size:13px;letter-spacing:0.18em;text-transform:uppercase;font-weight:600;border-radius:2px;">
        Subscribe free &rarr;
      </a>
    </div>

    <p style="font-size:15px;color:${BRAND_NAVY};margin:24px 0 32px;font-style:italic;">
      Free is the front door. Paid subscribers go deeper. Either way, you have me in your inbox once a week.
    </p>

    <p style="font-size:16px;color:${BRAND_NAVY};margin:32px 0 8px;font-style:italic;">
      MOMumentally,
    </p>
    <p style="font-family:Georgia, 'Times New Roman', serif;font-size:24px;color:${BRAND_PINK};font-style:italic;margin:0;">
      Erika
    </p>
  `;

  const html = emailShell({ subject, preheader, bodyHtml });
  return { subject, html, text, customerEmail };
}

// ─── Day 3 · Pure personal check-in · NO selling, NO CTA, just visibility ──

/**
 * Sent 3 days after purchase. Pure check-in.
 * LOCKED RULE: zero selling, zero CTA, zero product links.
 * Single purpose: stay visible, sound human, invite a reply if they want.
 */
export function buildCheckInEmail(productKey: ProductKey, customerEmail: string) {
  const product = PRODUCTS[productKey];
  const subject = `Checking in on you`;
  const preheader = "Just a quick note. No agenda.";

  const text = [
    `Hi friend,`,
    ``,
    `Three days in. I am not writing to sell you anything.`,
    ``,
    `I just wanted to say I am thinking about you. The ${product.name} is heavy work if you are actually opening it, and most people are not used to anyone following up after the download lands.`,
    ``,
    `If anything has surfaced for you, you can hit reply. I read every message myself. If nothing has surfaced yet, that is fine too. The work waits.`,
    ``,
    `That is the whole email.`,
    ``,
    `MOMumentally,`,
    `Erika`,
  ].join("\n");

  const bodyHtml = `
    <h1 style="font-family:Georgia, 'Times New Roman', serif;font-size:30px;line-height:1.25;color:${BRAND_NAVY};margin:0 0 28px 0;font-weight:normal;">
      Checking in <span style="font-style:italic;color:${BRAND_PINK};">on you</span>.
    </h1>

    <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 20px;">Hi friend,</p>

    <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 20px;">
      Three days in. I am not writing to sell you anything.
    </p>

    <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 20px;">
      I just wanted to say I am thinking about you. The ${escapeHtml(product.name)} is heavy work if you are actually opening it, and most people are not used to anyone following up after the download lands.
    </p>

    <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 20px;">
      If anything has surfaced for you, you can hit reply. I read every message myself. If nothing has surfaced yet, that is fine too. The work waits.
    </p>

    <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 32px;font-style:italic;">
      That is the whole email.
    </p>

    <p style="font-size:16px;color:${BRAND_NAVY};margin:32px 0 8px;font-style:italic;">
      MOMumentally,
    </p>
    <p style="font-family:Georgia, 'Times New Roman', serif;font-size:24px;color:${BRAND_PINK};font-style:italic;margin:0;">
      Erika
    </p>
  `;

  const html = emailShell({ subject, preheader, bodyHtml });
  return { subject, html, text, customerEmail };
}

// ─── Day 7 · Offer · cross-sell or Series upgrade ─────────────────────────

/**
 * Sent 7 days after purchase. The conversion email.
 * Single-volume buyers → Series upgrade ($97 saves $38).
 * Series + Journal + Decode buyers → cross-sell to the next logical volume.
 */
export function buildOfferEmail(productKey: ProductKey, customerEmail: string) {
  const product = PRODUCTS[productKey];
  const crossSell = product.crossSellKey ? PRODUCTS[product.crossSellKey] : null;
  const isSingleVol = productKey.startsWith("vol");

  // Single-volume buyers get a Series upgrade offer; everyone else gets the registered cross-sell.
  const offerKey: ProductKey = isSingleVol ? "series" : (product.crossSellKey ?? "series");
  const offer = PRODUCTS[offerKey];
  const offerPath = crossSellPath(offerKey);
  const offerUrl = `https://thisisphase.co/${offerPath}`;

  const subject = isSingleVol
    ? `If the ${product.name} landed, here is what is next`
    : `What you should read next`;

  const preheader = isSingleVol
    ? "The full Series · five volumes · save $38 when you take them together."
    : `${offer.name} · the next layer of the work.`;

  const headline = isSingleVol
    ? "The next layer is the Series."
    : "Here is what is next.";

  const pitchText = isSingleVol
    ? `One volume is enough to start. Five volumes is the architecture. The Series gives you Perimenopause, Hormones, Architecture, Self-Trust, and Execution. Buy them separately, that is $135. The Series is $97. You save $38.`
    : product.crossSellPitch;

  const pitchHtml = isSingleVol
    ? `One volume is enough to start. <strong>Five volumes is the architecture.</strong> The Series gives you Perimenopause, Hormones, Architecture, Self-Trust, and Execution. Bought separately, that is $135. The Series is $97. You save $38.`
    : escapeHtml(product.crossSellPitch ?? "");

  const text = [
    `Hi friend,`,
    ``,
    `A week in. I hope the ${product.name} is doing what it is supposed to do.`,
    ``,
    pitchText,
    ``,
    `${offerUrl}`,
    ``,
    `No pressure. The work waits. But the next layer is here when you are ready.`,
    ``,
    `MOMumentally,`,
    `Erika`,
  ].join("\n");

  const bodyHtml = `
    <p style="font-family:'Courier New', monospace;font-size:11px;letter-spacing:0.28em;text-transform:uppercase;color:${BRAND_PINK};margin:0 0 16px;">
      ONE WEEK IN
    </p>

    <h1 style="font-family:Georgia, 'Times New Roman', serif;font-size:32px;line-height:1.2;color:${BRAND_NAVY};margin:0 0 24px 0;font-weight:normal;">
      ${escapeHtml(headline)}
    </h1>

    <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 16px;">Hi friend,</p>

    <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 20px;">
      A week in. I hope the ${escapeHtml(product.name)} is doing what it is supposed to do.
    </p>

    <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 24px;">
      ${pitchHtml}
    </p>

    ${isSingleVol ? `
    <div style="background:${BRAND_CREAM_ALT};border-left:3px solid ${BRAND_PINK};padding:24px 28px;margin:32px 0;">
      <p style="font-family:'Courier New', monospace;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:${BRAND_PINK};margin:0 0 12px;">
        THE FULL SERIES
      </p>
      <p style="font-size:15px;color:${BRAND_NAVY};margin:0 0 8px;">Volume I &middot; Perimenopause</p>
      <p style="font-size:15px;color:${BRAND_NAVY};margin:0 0 8px;">Volume II &middot; Hormones</p>
      <p style="font-size:15px;color:${BRAND_NAVY};margin:0 0 8px;">Volume III &middot; Architecture</p>
      <p style="font-size:15px;color:${BRAND_NAVY};margin:0 0 8px;">Volume IV &middot; Self-Trust</p>
      <p style="font-size:15px;color:${BRAND_NAVY};margin:0 0 16px;">Volume V &middot; Execution</p>
      <p style="font-size:14px;color:${BRAND_NAVY};margin:0;font-style:italic;">
        $97 together. $135 separately. Save $38.
      </p>
    </div>
    ` : ""}

    <div style="margin:32px 0;text-align:center;">
      <a href="${offerUrl}" target="_blank" style="display:inline-block;padding:16px 32px;background:${BRAND_PINK};color:#FFFFFF;text-decoration:none;font-family:'Courier New', monospace;font-size:13px;letter-spacing:0.18em;text-transform:uppercase;font-weight:600;border-radius:2px;">
        ${isSingleVol ? "Upgrade to The Series" : `Get ${escapeHtml(offer.name)}`} &rarr;
      </a>
    </div>

    <p style="font-size:15px;color:${BRAND_NAVY};margin:24px 0 32px;font-style:italic;">
      No pressure. The work waits. But the next layer is here when you are ready.
    </p>

    <p style="font-size:16px;color:${BRAND_NAVY};margin:32px 0 8px;font-style:italic;">
      MOMumentally,
    </p>
    <p style="font-family:Georgia, 'Times New Roman', serif;font-size:24px;color:${BRAND_PINK};font-style:italic;margin:0;">
      Erika
    </p>
  `;

  const html = emailShell({ subject, preheader, bodyHtml });
  return { subject, html, text, customerEmail };
}

// ─── Day 14 · Keystone essay · drive to paid Substack ─────────────────────

/**
 * Sent 14 days after purchase. Drives back to MOMumental Reinvention.
 * Soft pitch for paid Substack ($7/mo or $70/yr) · the audience anchor.
 */
export function buildKeystoneEmail(productKey: ProductKey, customerEmail: string) {
  const product = PRODUCTS[productKey];
  const subject = `The essay behind ${product.name}`;
  const preheader = "Two weeks in · the keystone essay · paid subscribers go here.";

  const substackUrl = "https://www.momumentalreinvention.com";
  const upgradeUrl = "https://www.momumentalreinvention.com/subscribe";

  const text = [
    `Hi friend,`,
    ``,
    `Two weeks since you bought the ${product.name}. I want to point you at the essay that holds the whole thing together.`,
    ``,
    `Everything in The PHASE was sketched first in a Tuesday letter at MOMumental Reinvention. The free essays are where the body-truth conversation happens in public. The paid essays are where the architecture gets built.`,
    ``,
    `If the work has been landing for you, paid is $7/month or $70/year. It is the cheapest way to keep me in your inbox without buying another product.`,
    ``,
    `${upgradeUrl}`,
    ``,
    `If paid is not for you, free is still the front door. Stay close.`,
    ``,
    `${substackUrl}`,
    ``,
    `MOMumentally,`,
    `Erika`,
  ].join("\n");

  const bodyHtml = `
    <p style="font-family:'Courier New', monospace;font-size:11px;letter-spacing:0.28em;text-transform:uppercase;color:${BRAND_PINK};margin:0 0 16px;">
      TWO WEEKS IN
    </p>

    <h1 style="font-family:Georgia, 'Times New Roman', serif;font-size:30px;line-height:1.25;color:${BRAND_NAVY};margin:0 0 28px 0;font-weight:normal;">
      The essay <span style="font-style:italic;color:${BRAND_PINK};">behind</span> ${escapeHtml(product.name)}.
    </h1>

    <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 16px;">Hi friend,</p>

    <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 20px;">
      Two weeks since you bought the ${escapeHtml(product.name)}. I want to point you at the work that holds the whole thing together.
    </p>

    <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 20px;">
      Everything in The PHASE&trade; was sketched first in a Tuesday letter at <strong>MOMumental Reinvention</strong>. The free essays are where the body-truth conversation happens in public. The paid essays are where the architecture gets built.
    </p>

    <div style="background:${BRAND_CREAM_ALT};border-left:3px solid ${BRAND_PINK};padding:20px 24px;margin:32px 0;">
      <p style="font-size:15px;color:${BRAND_NAVY};margin:0 0 8px;">
        <strong>Paid subscribers</strong> get the deeper letters, the working drafts, and the live thread.
      </p>
      <p style="font-size:15px;color:${BRAND_NAVY};margin:0;font-style:italic;">
        $7 a month or $70 a year. The cheapest way to keep me in your inbox without buying another product.
      </p>
    </div>

    <div style="margin:32px 0;text-align:center;">
      <a href="${upgradeUrl}" target="_blank" style="display:inline-block;padding:16px 32px;background:${BRAND_PINK};color:#FFFFFF;text-decoration:none;font-family:'Courier New', monospace;font-size:13px;letter-spacing:0.18em;text-transform:uppercase;font-weight:600;border-radius:2px;">
        Upgrade to paid &rarr;
      </a>
    </div>

    <p style="font-size:15px;color:${BRAND_NAVY};margin:24px 0 16px;text-align:center;">
      Or stay close on the free side:
      <a href="${substackUrl}" target="_blank" style="color:${BRAND_PINK};text-decoration:underline;">momumentalreinvention.com</a>
    </p>

    <p style="font-size:16px;color:${BRAND_NAVY};margin:32px 0 8px;font-style:italic;">
      MOMumentally,
    </p>
    <p style="font-family:Georgia, 'Times New Roman', serif;font-size:24px;color:${BRAND_PINK};font-style:italic;margin:0;">
      Erika
    </p>
  `;

  const html = emailShell({ subject, preheader, bodyHtml });
  return { subject, html, text, customerEmail };
}
