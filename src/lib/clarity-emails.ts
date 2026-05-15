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
const CLARITY_PDF_URL =
  "https://dpo02ztmhn6nty5u.public.blob.vercel-storage.com/the-clarity-starter-kit.pdf";

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
    `2. Every Tuesday at 9 AM ET I send a long-form essay to MOMumental Reinvention. Subscribe at https://www.momumentalreinvention.com if you want to keep reading. Free essays for everyone. Paid subscribers get the deeper work.`,
    ``,
    `3. The Kit is the doorway. The PHASE volumes are the rooms. When you are ready, Vol. I covers Perimenopause in full at https://thisisphase.co/series.`,
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
          <strong style="color:${BRAND_NAVY};">02 &middot; Tuesday letters.</strong> Every Tuesday at 9 AM ET I send a long-form essay to MOMumental Reinvention. Free essays for everyone. <a href="https://www.momumentalreinvention.com" target="_blank" style="color:${BRAND_PINK};text-decoration:underline;">Subscribe at momumentalreinvention.com</a> if you want to keep reading.
        </p>

        <p style="font-size:15px;color:${BRAND_NAVY};margin:0 0 20px;">
          <strong style="color:${BRAND_NAVY};">03 &middot; What is next.</strong> The Kit is the doorway. The PHASE&trade; volumes are the rooms. When you are ready, Vol. I covers Perimenopause in full.
          <br><a href="https://thisisphase.co/series" target="_blank" style="color:${BRAND_PINK};text-decoration:underline;">See The Series &rarr;</a>
        </p>
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
  const subject = "What you might have missed in the Kit";

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
    `If the Kit clicks something open for you, Vol. I goes deeper. Perimenopause in full. The full body-truth map. $27.`,
    ``,
    `https://thisisphase.co/vol/perimenopause`,
    ``,
    `Or take all five volumes for $97. Saves $38.`,
    ``,
    `https://thisisphase.co/series`,
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
        What you might have missed in <span style="font-style:italic;color:${BRAND_PINK};">the Kit</span>.
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
          IF THE KIT CLICKS SOMETHING OPEN
        </p>
        <p style="font-size:15px;color:${BRAND_NAVY};margin:0 0 16px;">
          Vol. I goes deeper. Perimenopause in full. The full body-truth map. <strong>$27.</strong>
        </p>
        <div style="margin:20px 0 24px;">
          <a href="https://thisisphase.co/vol/perimenopause" target="_blank" style="display:inline-block;padding:14px 28px;background:${BRAND_PINK};color:#FFFFFF;text-decoration:none;font-family:'Courier New', monospace;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;font-weight:600;border-radius:2px;">
            See Vol. I &rarr;
          </a>
        </div>
        <p style="font-size:14px;color:${BRAND_NAVY};margin:0 0 16px;font-style:italic;">
          Or take all five volumes for $97. Saves $38.
          <a href="https://thisisphase.co/series" target="_blank" style="color:${BRAND_PINK};text-decoration:underline;">See The Series &rarr;</a>
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
    `The Clarity Starter Kit is the first part of that conversation. The PHASE volumes are the rest of it.`,
    ``,
    `If you are ready for the rest, Vol. I is at https://thisisphase.co/vol/perimenopause.`,
    ``,
    `If you want all five letters of PHASE in one drop, the Series is at https://thisisphase.co/series. Saves $38.`,
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
        The Clarity Starter Kit is the first part of that conversation. The PHASE volumes are the rest of it.
      </p>

      <div style="border-top:1px solid rgba(47,72,88,0.15);padding-top:28px;margin-top:32px;">
        <p style="font-family:'Courier New', monospace;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:${BRAND_PINK};margin:0 0 16px;">
          IF YOU ARE READY FOR THE REST
        </p>
        <p style="font-size:15px;color:${BRAND_NAVY};margin:0 0 16px;">
          Vol. I &middot; Perimenopause &middot; <strong>$27</strong>
        </p>
        <div style="margin:8px 0 16px;">
          <a href="https://thisisphase.co/vol/perimenopause" target="_blank" style="display:inline-block;padding:12px 24px;background:${BRAND_NAVY};color:${BRAND_CREAM};text-decoration:none;font-family:'Courier New', monospace;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;font-weight:600;border-radius:2px;">
            Get Vol. I &rarr;
          </a>
        </div>
        <p style="font-size:15px;color:${BRAND_NAVY};margin:16px 0 12px;">
          Or all five letters in one drop &middot; <strong>$97 &middot; saves $38</strong>
        </p>
        <div style="margin:8px 0 16px;">
          <a href="https://thisisphase.co/series" target="_blank" style="display:inline-block;padding:12px 24px;background:${BRAND_PINK};color:#FFFFFF;text-decoration:none;font-family:'Courier New', monospace;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;font-weight:600;border-radius:2px;">
            Get The Series &rarr;
          </a>
        </div>
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
  const subject = "The next layer · Vol. I or all five";

  const text = [
    `Hi friend,`,
    ``,
    `One week with the Clarity Starter Kit. Quick honest question.`,
    ``,
    `Are you using it? Or is it sitting in your downloads folder?`,
    ``,
    `Either is okay. Most things in this season sit in the downloads folder for a while before they get used. The Kit will wait.`,
    ``,
    `But if the Kit lit something up for you, the next layer is Vol. I.`,
    ``,
    `What Vol. I covers that the Kit does not:`,
    ``,
    `- The full Symptom Decoder (the Kit only previewed it)`,
    `- Weekly tracker designed for clinician conversations`,
    `- The Pattern Decoder framework for catching what your body is signaling`,
    `- 9-page workbook · usable in any month, any phase`,
    ``,
    `Vol. I &middot; Perimenopause &middot; $27`,
    `https://thisisphase.co/vol/perimenopause`,
    ``,
    `Or take the full kit. Five volumes. P + H + A + S + E. Same price as four individual volumes.`,
    ``,
    `The Series &middot; $97 &middot; saves $38`,
    `https://thisisphase.co/series`,
    ``,
    `If you want to keep reading the long-form work, every Tuesday at 9 AM ET I send a new essay. Free.`,
    ``,
    `https://www.momumentalreinvention.com`,
    ``,
    `Whatever you decide. Keep the Kit. Use it when you are ready. The work waits.`,
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
          THE PHASE&trade; &middot; DAY 7 &middot; THE NEXT LAYER
        </div>
        <div style="height:2px;width:48px;background:${BRAND_PINK};margin:0 auto;"></div>
      </div>

      <h1 style="font-family:Georgia, 'Times New Roman', serif;font-size:30px;line-height:1.2;color:${BRAND_NAVY};margin:0 0 20px 0;font-weight:normal;">
        Vol. I &middot; or <span style="font-style:italic;color:${BRAND_PINK};">all five</span>.
      </h1>

      <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 16px;">Hi friend,</p>

      <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 16px;">
        One week with the Clarity Starter Kit. Quick honest question.
      </p>

      <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 16px;">
        Are you using it? Or is it sitting in your downloads folder?
      </p>

      <p style="font-size:16px;color:${BRAND_NAVY};margin:0 0 16px;">
        Either is okay. Most things in this season sit in the downloads folder for a while before they get used. The Kit will wait.
      </p>

      <div style="background:${BRAND_CREAM_ALT};border-left:3px solid ${BRAND_PINK};padding:20px 24px;margin:24px 0;">
        <p style="font-style:italic;font-size:16px;color:${BRAND_NAVY};margin:0;">
          But if the Kit lit something up for you, the next layer is Vol. I.
        </p>
      </div>

      <p style="font-family:'Courier New', monospace;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:${BRAND_PINK};margin:24px 0 12px;">
        WHAT VOL. I COVERS THAT THE KIT DOES NOT
      </p>

      <ul style="font-size:15px;color:${BRAND_NAVY};margin:0 0 24px;padding-left:24px;line-height:1.7;">
        <li>The full Symptom Decoder (the Kit only previewed it)</li>
        <li>Weekly tracker designed for clinician conversations</li>
        <li>The Pattern Decoder framework for catching what your body is signaling</li>
        <li>9-page workbook &middot; usable in any month, any phase</li>
      </ul>

      <div style="border-top:1px solid rgba(47,72,88,0.15);padding-top:32px;margin-top:32px;">
        <div style="background:${BRAND_CREAM_ALT};border:1px solid rgba(47,72,88,0.1);border-radius:2px;padding:24px;margin:0 0 20px;text-align:center;">
          <p style="font-family:'Courier New', monospace;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:${BRAND_PINK};margin:0 0 8px;">
            VOL. I &middot; PERIMENOPAUSE
          </p>
          <p style="font-family:Georgia, 'Times New Roman', serif;font-size:36px;color:${BRAND_NAVY};margin:0 0 16px;">
            $27
          </p>
          <a href="https://thisisphase.co/vol/perimenopause" target="_blank" style="display:inline-block;padding:14px 28px;background:${BRAND_NAVY};color:${BRAND_CREAM};text-decoration:none;font-family:'Courier New', monospace;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;font-weight:600;border-radius:2px;">
            Get Vol. I &rarr;
          </a>
        </div>

        <div style="background:${BRAND_NAVY};border-radius:2px;padding:24px;margin:0 0 20px;text-align:center;">
          <p style="font-family:'Courier New', monospace;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:${BRAND_PINK};margin:0 0 8px;">
            THE SERIES &middot; ALL FIVE VOLUMES &middot; MOST POPULAR
          </p>
          <p style="font-family:Georgia, 'Times New Roman', serif;font-size:36px;color:${BRAND_CREAM};margin:0 0 4px;">
            $97
          </p>
          <p style="font-family:Georgia, 'Times New Roman', serif;font-style:italic;font-size:14px;color:${BRAND_PINK};margin:0 0 16px;">
            saves $38
          </p>
          <a href="https://thisisphase.co/series" target="_blank" style="display:inline-block;padding:14px 28px;background:${BRAND_PINK};color:#FFFFFF;text-decoration:none;font-family:'Courier New', monospace;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;font-weight:600;border-radius:2px;">
            Get The Series &rarr;
          </a>
        </div>
      </div>

      <p style="font-size:15px;color:${BRAND_NAVY};margin:24px 0 8px;">
        If you want to keep reading the long-form work, every Tuesday at 9 AM ET I send a new essay. Free.
      </p>
      <p style="font-size:15px;color:${BRAND_NAVY};margin:0 0 16px;">
        <a href="https://www.momumentalreinvention.com" target="_blank" style="color:${BRAND_PINK};text-decoration:underline;">Subscribe to MOMumental Reinvention &rarr;</a>
      </p>

      <p style="font-size:15px;color:${BRAND_NAVY};margin:32px 0 16px;font-style:italic;">
        Whatever you decide. Keep the Kit. Use it when you are ready. The work waits.
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
