/**
 * The Clarity Starter Kit · 4-email lead funnel sequence
 *
 * Voice firewall: NEON, no em dashes, sister tone, MOMumentally sign-off.
 *
 * Day 0 (instant):  buildClarityDeliveryEmail   · PDF download + one-question invitation
 * Day 2:            buildClarityNudgeEmail      · "what you might have missed" + soft Vol. I tease
 * Day 4:            buildClarityStoryEmail      · founder story · 4 years dismissed · nurse practitioner moment
 * Day 7:            buildClarityOfferEmail      · direct Vol. I or Series offer with launch-week framing
 *
 * All four are dispatched at form submit via Resend's `scheduled_at` parameter
 * (Resend supports up to 30 days future scheduling · no cron infrastructure needed).
 *
 * Mirrors the architecture of purchase-emails.ts so behavior is consistent.
 */

const BRAND_PINK = "#F086DC";
const BRAND_NAVY = "#2f4858";
const BRAND_CREAM = "#FFF9F1";
const BRAND_CREAM_ALT = "#F8F4EE";

// Update if you move the Clarity Starter Kit PDF to a new location.
// Note: filename has trailing space (uploaded that way to Vercel Blob), URL-encoded as %20.
// If you re-upload without trailing space later, remove the trailing %20 here.
const CLARITY_PDF_URL =
  "https://dpo02ztmhn6nty5u.public.blob.vercel-storage.com/the-clarity-starter-kit.pdf%20";

// Substack subscribe page · direct one-click signup (not the homepage).
const SUBSTACK_SUBSCRIBE_URL = "https://www.momumentalreinvention.com/subscribe";

// Decode Your Symptoms · $17 tripwire (the first paid step after the free Kit).
// Override via env CLARITY_DECODE_URL with a dedicated Stripe Payment Link if needed.
// Falls back to standard /decode product page.
const DECODE_URL =
  process.env.CLARITY_DECODE_URL || "https://thisisphase.co/decode";
const DECODE_PRICE = "$17";

// Kit Graduate Series upsell · $75 special pricing (save $60 vs buying volumes separately at 5 x $27 = $135).
// Override via env CLARITY_KIT_GRADUATE_SERIES_URL with a dedicated Stripe Payment Link priced at $75.
// Falls back to standard /series page at $97 if env not set (no broken links if not yet created).
const KIT_GRADUATE_SERIES_URL =
  process.env.CLARITY_KIT_GRADUATE_SERIES_URL || "https://thisisphase.co/series";

// ─── Day 0 · instant delivery ───────────────────────────────────────────

export function buildClarityDeliveryEmail(_email: string) {
  const subject = "Your Clarity Starter Kit · here is the work";

  const text = [
    `Hi friend,`,
    ``,
    `The Clarity Starter Kit is in your inbox now. Download below.`,
    ``,
    `${CLARITY_PDF_URL}`,
    ``,
    `Save it. Print it. Use it.`,
    ``,
    `Three things before you close this email:`,
    ``,
    `1. The work is yours forever. The link does not expire. If you ever lose it, just reply and I will resend.`,
    ``,
    `2. Every Tuesday at 9 AM ET I send a long-form essay to MOMumental Reinvention. Subscribe at ${SUBSTACK_SUBSCRIBE_URL} if you want to keep reading. Free essays for everyone. Paid subscribers get the deeper work.`,
    ``,
    `3. The Kit gives you language. Decode Your Symptoms gives you the worksheet system that turns language into action. ${DECODE_PRICE}.`,
    ``,
    `${DECODE_URL}`,
    ``,
    `Most readers grab Decode within the first 48 hours. It is designed to plug straight into the Kit pages you just downloaded.`,
    ``,
    `One ask before you close this. Hit reply and tell me one symptom that is loudest for you right now. The body-truth conversation works better when readers write back. I read every reply.`,
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
          THE PHASE&trade; &middot; CLARITY STARTER KIT
        </div>
        <div style="height:2px;width:48px;background:${BRAND_PINK};margin:0 auto;"></div>
      </div>

      <h1 style="font-family:Georgia, 'Times New Roman', serif;font-size:32px;line-height:1.2;color:${BRAND_NAVY};margin:0 0 24px 0;font-weight:normal;">
        Your Clarity Starter Kit<br>
        <span style="font-style:italic;color:${BRAND_PINK};">is in your inbox</span>.
      </h1>

      <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 16px;">Hi friend,</p>

      <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 24px;">
        The Clarity Starter Kit is yours now. Download below. Save it. Print it. Use it.
      </p>

      <div style="margin:32px 0;text-align:center;">
        <a href="${CLARITY_PDF_URL}" target="_blank" style="display:inline-block;padding:16px 32px;background:${BRAND_PINK};color:#FFFFFF;text-decoration:none;font-family:'Courier New', monospace;font-size:13px;letter-spacing:0.18em;text-transform:uppercase;font-weight:600;border-radius:2px;">
          Download your Kit &rarr;
        </a>
      </div>

      <div style="border-top:1px solid rgba(47,72,88,0.15);padding-top:32px;margin-top:32px;">
        <p style="font-family:'Courier New', monospace;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:${BRAND_PINK};margin:0 0 16px;">
          THREE THINGS BEFORE YOU CLOSE THIS EMAIL
        </p>

        <p style="font-size:15px;color:${BRAND_NAVY};margin:0 0 20px;">
          <strong style="color:${BRAND_NAVY};">01 &middot; Yours forever.</strong> The Kit is yours. The link does not expire. If you ever lose it, just reply to this email and I will resend.
        </p>

        <p style="font-size:15px;color:${BRAND_NAVY};margin:0 0 20px;">
          <strong style="color:${BRAND_NAVY};">02 &middot; Tuesday letters.</strong> Every Tuesday at 9 AM ET I send a long-form essay to MOMumental Reinvention. Free essays for everyone. <a href="${SUBSTACK_SUBSCRIBE_URL}" target="_blank" style="color:${BRAND_PINK};text-decoration:underline;">Subscribe in one click</a> if you want to keep reading.
        </p>

        <p style="font-size:15px;color:${BRAND_NAVY};margin:0 0 20px;">
          <strong style="color:${BRAND_NAVY};">03 &middot; The next step.</strong> The Kit gives you language. <em>Decode Your Symptoms</em> gives you the worksheet system that turns language into action.
        </p>

        <div style="background:${BRAND_CREAM_ALT};border:1px solid ${BRAND_PINK};border-radius:2px;padding:20px 24px;margin:16px 0 20px;">
          <p style="font-family:'Courier New', monospace;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:${BRAND_PINK};margin:0 0 8px;">
            DECODE YOUR SYMPTOMS &middot; THE ACTION COMPANION
          </p>
          <p style="font-size:15px;color:${BRAND_NAVY};margin:0 0 12px;line-height:1.5;">
            Plugs straight into the Kit pages you just downloaded. <strong style="color:${BRAND_NAVY};">${DECODE_PRICE}.</strong> One-time purchase.
          </p>
          <a href="${DECODE_URL}" target="_blank" style="color:${BRAND_PINK};text-decoration:underline;font-size:14px;font-weight:600;">
            Get Decode Your Symptoms &rarr;
          </a>
        </div>
      </div>

      <div style="background:${BRAND_CREAM_ALT};border-left:3px solid ${BRAND_PINK};padding:20px 24px;margin:32px 0;">
        <p style="font-style:italic;font-size:16px;color:${BRAND_NAVY};margin:0;">
          One ask before you close this. Hit reply and tell me one symptom that is loudest for you right now. I read every reply.
        </p>
      </div>

      <p style="font-size:16px;color:${BRAND_NAVY};margin:32px 0 8px;font-style:italic;">
        MOMumentally,
      </p>
      <p style="font-size:16px;color:${BRAND_NAVY};margin:0;">Erika</p>

      ${footerHtml()}
    </div>
  </body>
</html>`;

  return { subject, html, text };
}

// ─── Day 2 · the nudge ──────────────────────────────────────────────────

export function buildClarityNudgeEmail(_email: string) {
  const subject = "The worksheet that turns the Kit into action";

  const text = [
    `Hi friend,`,
    ``,
    `Two days in. Quick check.`,
    ``,
    `Have you opened the Clarity Starter Kit yet? If yes, the page that usually surprises women the most is the Symptom Decoder. The "I thought it was just stress" page.`,
    ``,
    `If you have not opened it yet, that is okay too. The work meets you where you are.`,
    ``,
    `One thing the Kit is designed to do: give you language for what your body has been trying to say. So when you talk to a doctor, a partner, a friend, you have words instead of vague unease.`,
    ``,
    `That language matters. I lost four years to vague unease before someone finally listened.`,
    ``,
    `Here is the part most readers miss. The Kit gives you the language. Decode Your Symptoms gives you the worksheet system to actually use it.`,
    ``,
    `Decode is what you fill out before your next doctor appointment. The before/after pattern tracker. The "what to ask" prompt. The "what to push back on" prompt.`,
    ``,
    `${DECODE_PRICE}. Plugs straight into the Kit pages you already have.`,
    ``,
    `${DECODE_URL}`,
    ``,
    `Most readers who grab Decode use it within their first week. It is the difference between knowing the language and being able to speak it.`,
    ``,
    `MOMumentally,`,
    `Erika`,
    ``,
    `─────────────────────────────`,
    `MOMumental Moments® · the parent IP behind The PHASE™.`,
    `https://thisisphase.co · https://momumentalreinvention.com`,
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
      <div style="text-align:center;margin-bottom:32px;">
        <div style="font-family:'Courier New', monospace;font-size:11px;letter-spacing:0.28em;text-transform:uppercase;color:${BRAND_PINK};margin-bottom:12px;">
          THE PHASE&trade; &middot; DAY 2
        </div>
        <div style="height:2px;width:48px;background:${BRAND_PINK};margin:0 auto;"></div>
      </div>

      <h1 style="font-family:Georgia, 'Times New Roman', serif;font-size:30px;line-height:1.2;color:${BRAND_NAVY};margin:0 0 20px 0;font-weight:normal;">
        The worksheet that turns the Kit <span style="font-style:italic;color:${BRAND_PINK};">into action</span>.
      </h1>

      <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 16px;">Hi friend,</p>

      <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 16px;">
        Two days in. Quick check.
      </p>

      <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 16px;">
        Have you opened the Clarity Starter Kit yet? If yes, the page that usually surprises women the most is the Symptom Decoder. The <em style="color:${BRAND_PINK};">"I thought it was just stress"</em> page.
      </p>

      <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 16px;">
        If you have not opened it yet, that is okay too. The work meets you where you are.
      </p>

      <div style="background:${BRAND_CREAM_ALT};border-left:3px solid ${BRAND_PINK};padding:20px 24px;margin:24px 0;">
        <p style="font-style:italic;font-size:16px;color:${BRAND_NAVY};margin:0;">
          One thing the Kit is designed to do: give you language for what your body has been trying to say. So when you talk to a doctor, a partner, a friend, you have words instead of vague unease.
        </p>
      </div>

      <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 16px;">
        That language matters. I lost four years to vague unease before someone finally listened.
      </p>

      <div style="border-top:1px solid rgba(47,72,88,0.15);padding-top:28px;margin-top:32px;">
        <p style="font-family:'Courier New', monospace;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:${BRAND_PINK};margin:0 0 12px;">
          THE PART MOST READERS MISS
        </p>
        <p style="font-size:15px;color:${BRAND_NAVY};margin:0 0 12px;">
          The Kit gives you the language. <em>Decode Your Symptoms</em> gives you the worksheet system to actually use it.
        </p>
        <p style="font-size:15px;color:${BRAND_NAVY};margin:0 0 20px;">
          Decode is what you fill out before your next doctor appointment. The before/after pattern tracker. The <em>what to ask</em> prompt. The <em>what to push back on</em> prompt.
        </p>
        <div style="background:${BRAND_CREAM_ALT};border:1px solid ${BRAND_PINK};border-radius:2px;padding:20px 24px;margin:0 0 20px;text-align:center;">
          <p style="font-family:'Courier New', monospace;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:${BRAND_PINK};margin:0 0 8px;">
            DECODE YOUR SYMPTOMS
          </p>
          <p style="font-family:Georgia, 'Times New Roman', serif;font-size:32px;color:${BRAND_NAVY};margin:0 0 12px;">
            ${DECODE_PRICE}
          </p>
          <a href="${DECODE_URL}" target="_blank" style="display:inline-block;padding:14px 28px;background:${BRAND_PINK};color:#FFFFFF;text-decoration:none;font-family:'Courier New', monospace;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;font-weight:600;border-radius:2px;">
            Get Decode &rarr;
          </a>
        </div>
        <p style="font-size:14px;color:${BRAND_NAVY};margin:0 0 16px;font-style:italic;">
          Most readers who grab Decode use it within their first week. It is the difference between knowing the language and being able to speak it.
        </p>
      </div>

      <p style="font-size:16px;color:${BRAND_NAVY};margin:32px 0 8px;font-style:italic;">
        MOMumentally,
      </p>
      <p style="font-size:16px;color:${BRAND_NAVY};margin:0;">Erika</p>

      ${footerHtml()}
    </div>
  </body>
</html>`;

  return { subject, html, text };
}

// ─── Day 4 · the founder story ──────────────────────────────────────────

export function buildClarityStoryEmail(_email: string) {
  const subject = "I almost gave up at year three";

  const text = [
    `Hi friend,`,
    ``,
    `I want to tell you the part of the story I do not say out loud often.`,
    ``,
    `I almost gave up at year three.`,
    ``,
    `Three years of "you are stressed." Three years of "have you tried sleep?" Three years of doctors who looked at my chart for 90 seconds and told me I was fine.`,
    ``,
    `I was not fine. My body knew it. My family knew it. The mirror knew it.`,
    ``,
    `Year four, a nurse practitioner sat with me for over an hour. Asked questions. Connected dots. Took notes seriously. At one point she looked at me and said:`,
    ``,
    `"You are not imagining this."`,
    ``,
    `Six words.`,
    ``,
    `That sentence is why The PHASE™ exists. It is the conversation I had to fight for at 42. It is the conversation you should have been handed at 38.`,
    ``,
    `The Clarity Starter Kit is the first part of that conversation. Decode Your Symptoms is the worksheet you fill out before the conversation. So you go in armed with the question patterns instead of vague unease.`,
    ``,
    `${DECODE_URL}`,
    ``,
    `Either way: you are not imagining this.`,
    ``,
    `MOMumentally,`,
    `Erika`,
    ``,
    `─────────────────────────────`,
    `MOMumental Moments® · the parent IP behind The PHASE™.`,
    `https://thisisphase.co · https://momumentalreinvention.com`,
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
      <div style="text-align:center;margin-bottom:32px;">
        <div style="font-family:'Courier New', monospace;font-size:11px;letter-spacing:0.28em;text-transform:uppercase;color:${BRAND_PINK};margin-bottom:12px;">
          THE PHASE&trade; &middot; DAY 4 &middot; FROM ERIKA
        </div>
        <div style="height:2px;width:48px;background:${BRAND_PINK};margin:0 auto;"></div>
      </div>

      <h1 style="font-family:Georgia, 'Times New Roman', serif;font-size:30px;line-height:1.2;color:${BRAND_NAVY};margin:0 0 20px 0;font-weight:normal;">
        I almost gave up at <span style="font-style:italic;color:${BRAND_PINK};">year three</span>.
      </h1>

      <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 16px;">Hi friend,</p>

      <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 16px;">
        I want to tell you the part of the story I do not say out loud often.
      </p>

      <p style="font-size:18px;color:${BRAND_NAVY};margin:0 0 16px;font-style:italic;">
        I almost gave up at year three.
      </p>

      <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 16px;">
        Three years of "you are stressed." Three years of "have you tried sleep?" Three years of doctors who looked at my chart for 90 seconds and told me I was fine.
      </p>

      <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 16px;">
        I was not fine. My body knew it. My family knew it. The mirror knew it.
      </p>

      <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 16px;">
        Year four, a nurse practitioner sat with me for over an hour. Asked questions. Connected dots. Took notes seriously. At one point she looked at me and said:
      </p>

      <div style="background:${BRAND_CREAM_ALT};border-left:3px solid ${BRAND_PINK};padding:24px 28px;margin:28px 0;text-align:center;">
        <p style="font-family:Georgia, 'Times New Roman', serif;font-style:italic;font-size:24px;color:${BRAND_PINK};margin:0;line-height:1.3;">
          "You are not imagining this."
        </p>
      </div>

      <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 16px;">
        Six words.
      </p>

      <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 16px;">
        That sentence is why The PHASE™ exists. It is the conversation I had to fight for at 42. It is the conversation <em>you</em> should have been handed at 38.
      </p>

      <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 24px;">
        The Clarity Starter Kit is the first part of that conversation. <em>Decode Your Symptoms</em> is the worksheet you fill out before the next conversation, so you go in armed with question patterns instead of vague unease.
      </p>

      <div style="border-top:1px solid rgba(47,72,88,0.15);padding-top:28px;margin-top:32px;text-align:center;">
        <p style="font-family:'Courier New', monospace;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:${BRAND_PINK};margin:0 0 16px;">
          THE WORKSHEET YOU FILL OUT BEFORE THE NEXT APPOINTMENT
        </p>
        <p style="font-family:Georgia, 'Times New Roman', serif;font-size:32px;color:${BRAND_NAVY};margin:0 0 12px;">
          ${DECODE_PRICE}
        </p>
        <a href="${DECODE_URL}" target="_blank" style="display:inline-block;padding:14px 28px;background:${BRAND_PINK};color:#FFFFFF;text-decoration:none;font-family:'Courier New', monospace;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;font-weight:600;border-radius:2px;">
          Get Decode Your Symptoms &rarr;
        </a>
      </div>

      <p style="font-size:18px;color:${BRAND_NAVY};margin:32px 0 8px;font-style:italic;text-align:center;">
        Either way &middot; you are not imagining this.
      </p>

      <p style="font-size:16px;color:${BRAND_NAVY};margin:32px 0 8px;font-style:italic;">
        MOMumentally,
      </p>
      <p style="font-size:16px;color:${BRAND_NAVY};margin:0;">Erika</p>

      ${footerHtml()}
    </div>
  </body>
</html>`;

  return { subject, html, text };
}

// ─── Day 7 · the offer ──────────────────────────────────────────────────

export function buildClarityOfferEmail(_email: string) {
  const subject = "Day 7 · two paths from here";

  const text = [
    `Hi friend,`,
    ``,
    `One week with the Clarity Starter Kit. Quick honest question.`,
    ``,
    `Are you using it? Or is it sitting in your downloads folder?`,
    ``,
    `Either is okay. Most things in this season sit in the downloads folder for a while before they get used.`,
    ``,
    `Whichever path fits, here is the next step.`,
    ``,
    `─────────────────────────────`,
    `PATH ONE · IF DECODE IS STILL SITTING IN YOUR CART`,
    `─────────────────────────────`,
    ``,
    `Last call on Decode Your Symptoms at ${DECODE_PRICE}.`,
    ``,
    `Decode is the worksheet system you fill out before your next appointment. The pattern tracker. The "what to ask" prompt. The "what to push back on" prompt.`,
    ``,
    `It is what turns the Kit's language into a conversation that goes differently than the last four.`,
    ``,
    `${DECODE_URL}`,
    ``,
    `─────────────────────────────`,
    `PATH TWO · IF YOU ALREADY HAVE DECODE`,
    `─────────────────────────────`,
    ``,
    `You have earned the Kit Graduate upgrade.`,
    ``,
    `All five PHASE volumes for $75. That is $60 less than buying them separately at $27 each ($135 total). You already proved you do the work. This is the rest of the body-truth map.`,
    ``,
    `What the full Series gives you that Decode does not:`,
    ``,
    `- Vol. I · Perimenopause · the body-truth map in full`,
    `- Vol. II · Hormones · the chemistry underneath`,
    `- Vol. III · Architecture · the daily structure that holds it`,
    `- Vol. IV · Self-trust · the inner work no one talks about`,
    `- Vol. V · Execution · the doing part for when language is not enough`,
    ``,
    `Kit Graduate price · $75 (save $60 vs buying volumes separately at $135)`,
    `${KIT_GRADUATE_SERIES_URL}`,
    ``,
    `If you want to keep reading the long-form work, every Tuesday at 9 AM ET I send a new essay. Free.`,
    ``,
    `${SUBSTACK_SUBSCRIBE_URL}`,
    ``,
    `Whatever you decide. Keep the Kit. Use it when you are ready. Both paths are open.`,
    ``,
    `MOMumentally,`,
    `Erika`,
    ``,
    `─────────────────────────────`,
    `MOMumental Moments® · the parent IP behind The PHASE™.`,
    `https://thisisphase.co · https://momumentalreinvention.com`,
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
      <div style="text-align:center;margin-bottom:32px;">
        <div style="font-family:'Courier New', monospace;font-size:11px;letter-spacing:0.28em;text-transform:uppercase;color:${BRAND_PINK};margin-bottom:12px;">
          THE PHASE&trade; &middot; DAY 7 &middot; TWO PATHS
        </div>
        <div style="height:2px;width:48px;background:${BRAND_PINK};margin:0 auto;"></div>
      </div>

      <h1 style="font-family:Georgia, 'Times New Roman', serif;font-size:30px;line-height:1.2;color:${BRAND_NAVY};margin:0 0 20px 0;font-weight:normal;">
        Two paths <span style="font-style:italic;color:${BRAND_PINK};">from here</span>.
      </h1>

      <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 16px;">Hi friend,</p>

      <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 16px;">
        One week with the Clarity Starter Kit. Quick honest question.
      </p>

      <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 16px;">
        Are you using it? Or is it sitting in your downloads folder?
      </p>

      <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 24px;">
        Either is okay. Most things in this season sit in the downloads folder for a while before they get used. Whichever path fits, here is the next step.
      </p>

      <!-- PATH ONE · Decode last call (for non-buyers) -->
      <div style="background:${BRAND_CREAM_ALT};border:1px solid rgba(47,72,88,0.15);border-radius:2px;padding:24px;margin:24px 0;">
        <p style="font-family:'Courier New', monospace;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:${BRAND_PINK};margin:0 0 12px;text-align:center;">
          PATH ONE &middot; IF DECODE IS STILL IN YOUR CART
        </p>
        <p style="font-family:Georgia, 'Times New Roman', serif;font-size:24px;color:${BRAND_NAVY};margin:0 0 12px;line-height:1.3;">
          Last call on <em style="color:${BRAND_PINK};">Decode Your Symptoms</em>.
        </p>
        <p style="font-size:15px;color:${BRAND_NAVY};margin:0 0 16px;line-height:1.6;">
          Decode is the worksheet system you fill out before your next appointment. The pattern tracker. The <em>what to ask</em> prompt. The <em>what to push back on</em> prompt. It is what turns the Kit's language into a conversation that goes differently than the last four.
        </p>
        <p style="font-family:Georgia, 'Times New Roman', serif;font-size:32px;color:${BRAND_NAVY};margin:0 0 16px;text-align:center;">
          ${DECODE_PRICE}
        </p>
        <div style="text-align:center;">
          <a href="${DECODE_URL}" target="_blank" style="display:inline-block;padding:14px 28px;background:${BRAND_NAVY};color:${BRAND_CREAM};text-decoration:none;font-family:'Courier New', monospace;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;font-weight:600;border-radius:2px;">
            Get Decode &rarr;
          </a>
        </div>
      </div>

      <!-- PATH TWO · Kit Graduate Series upgrade (for Decode buyers) -->
      <div style="background:${BRAND_NAVY};color:${BRAND_CREAM};border-radius:2px;padding:24px;margin:24px 0;">
        <p style="font-family:'Courier New', monospace;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:${BRAND_PINK};margin:0 0 12px;text-align:center;">
          PATH TWO &middot; IF YOU ALREADY HAVE DECODE
        </p>
        <p style="font-family:Georgia, 'Times New Roman', serif;font-size:24px;color:${BRAND_CREAM};margin:0 0 12px;line-height:1.3;text-align:center;">
          You have earned the <em style="color:${BRAND_PINK};">Kit Graduate</em> upgrade.
        </p>
        <p style="font-size:14px;color:${BRAND_CREAM};opacity:0.9;margin:0 0 16px;line-height:1.6;">
          All five PHASE&trade; volumes for $75 instead of $97. You already proved you do the work. This is the rest of the body-truth map.
        </p>
        <p style="font-family:'Courier New', monospace;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:${BRAND_PINK};margin:16px 0 10px;">
          WHAT THE FULL SERIES GIVES YOU
        </p>
        <ul style="font-size:13px;color:${BRAND_CREAM};opacity:0.9;margin:0 0 20px;padding-left:20px;line-height:1.7;">
          <li>Vol. I &middot; Perimenopause &middot; the body-truth map in full</li>
          <li>Vol. II &middot; Hormones &middot; the chemistry underneath</li>
          <li>Vol. III &middot; Architecture &middot; the daily structure that holds it</li>
          <li>Vol. IV &middot; Self-trust &middot; the inner work no one talks about</li>
          <li>Vol. V &middot; Execution &middot; the doing part for when language is not enough</li>
        </ul>
        <p style="font-family:Georgia, 'Times New Roman', serif;font-size:36px;color:${BRAND_CREAM};margin:0 0 4px;text-align:center;line-height:1;">
          $75
        </p>
        <p style="font-family:Georgia, 'Times New Roman', serif;font-size:13px;color:${BRAND_PINK};margin:0 0 16px;font-style:italic;text-align:center;">
          $60 less than buying volumes separately ($135)
        </p>
        <div style="text-align:center;">
          <a href="${KIT_GRADUATE_SERIES_URL}" target="_blank" style="display:inline-block;padding:14px 28px;background:${BRAND_PINK};color:#FFFFFF;text-decoration:none;font-family:'Courier New', monospace;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;font-weight:600;border-radius:2px;">
            Claim Kit Graduate price &rarr;
          </a>
        </div>
      </div>

      <p style="font-size:15px;color:${BRAND_NAVY};margin:24px 0 8px;">
        If you want to keep reading the long-form work, every Tuesday at 9 AM ET I send a new essay. Free.
      </p>
      <p style="font-size:15px;color:${BRAND_NAVY};margin:0 0 16px;">
        <a href="${SUBSTACK_SUBSCRIBE_URL}" target="_blank" style="color:${BRAND_PINK};text-decoration:underline;">Subscribe to MOMumental Reinvention &rarr;</a>
      </p>

      <p style="font-size:15px;color:${BRAND_NAVY};margin:32px 0 16px;font-style:italic;">
        Whatever you decide. Keep the Kit. Use it when you are ready. Both paths are open.
      </p>

      <p style="font-size:16px;color:${BRAND_NAVY};margin:32px 0 8px;font-style:italic;">
        MOMumentally,
      </p>
      <p style="font-size:16px;color:${BRAND_NAVY};margin:0;">Erika</p>

      ${footerHtml()}
    </div>
  </body>
</html>`;

  return { subject, html, text };
}

// ─── Helpers ────────────────────────────────────────────────────────────

function footerHtml() {
  return `<div style="border-top:1px solid rgba(47,72,88,0.15);padding-top:24px;margin-top:40px;text-align:center;">
        <p style="font-family:'Courier New', monospace;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:${BRAND_NAVY};opacity:0.6;margin:0 0 8px;">
          MOMumental Moments&reg;
        </p>
        <p style="font-size:12px;color:${BRAND_NAVY};opacity:0.6;margin:0 0 4px;">
          The PHASE&trade; <a href="https://thisisphase.co" style="color:${BRAND_PINK};text-decoration:none;">thisisphase.co</a>
          &middot; Substack <a href="https://www.momumentalreinvention.com" style="color:${BRAND_PINK};text-decoration:none;">momumentalreinvention.com</a>
        </p>
        <p style="font-size:12px;color:${BRAND_NAVY};opacity:0.5;margin:8px 0 0;font-style:italic;">
          You received this because you downloaded the Clarity Starter Kit. Reply STOP to unsubscribe.
        </p>
      </div>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
