# thisisphase.co · Site Framework
## Path B · Sibling Next.js repo · SEO/GEO/AI optimized · Multi-page architecture

**Status:** Scaffold in progress · Erika reviewing
**Repo:** `erika-austria/thisisphase-co` (to be created)
**Deploy:** Vercel · domain `thisisphase.co` · sister project to `erikahanafin-site`
**Framework:** Next.js 15 · App Router · TypeScript · Tailwind CSS

---

## 1. Brand tokens (mirrored from erikahanafin.com)

```css
/* tokens.css */
:root {
  /* Colors */
  --bg-cream: #fff9f1;          /* warm cream, primary background */
  --bg-cream-alt: #faf2e8;       /* darker cream for cards */
  --bg-navy: #2f4858;            /* manifesto sections, dark mode blocks */
  --bg-navy-deep: #1d2f3d;       /* even darker for emphasis */
  --text-primary: #2f4858;       /* deep slate blue, body text */
  --text-muted: #6c7a85;         /* secondary text, captions */
  --text-cream: #fff9f1;         /* on dark backgrounds */
  --pink: #f086dc;               /* The PHASE™ accent, NEON brand mark */
  --pink-soft: #fce7f7;          /* pink wash backgrounds */
  --pink-deep: #c54fa3;          /* hover states */

  /* Fonts */
  --font-serif: 'Cormorant Garamond', Georgia, 'Times New Roman', serif;
  --font-sans: 'Inter Tight', Inter, 'Helvetica Neue', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Spacing scale */
  --space-1: 0.25rem;  --space-2: 0.5rem;  --space-3: 0.75rem;
  --space-4: 1rem;     --space-6: 1.5rem;  --space-8: 2rem;
  --space-12: 3rem;    --space-16: 4rem;   --space-24: 6rem;

  /* Type scale */
  --text-xs: 0.75rem;   --text-sm: 0.875rem;
  --text-base: 1rem;    --text-lg: 1.125rem;
  --text-xl: 1.25rem;   --text-2xl: 1.5rem;
  --text-3xl: 2rem;     --text-4xl: 2.75rem;
  --text-5xl: 3.75rem;  --text-6xl: 5rem;

  /* Letter spacing for ALL CAPS eyebrows */
  --tracking-eyebrow: 0.1em;
  --tracking-tight: -0.02em;

  /* Magazine motif */
  --bracket-pink: #f086dc;
  --rule-thickness: 1px;
  --max-content: 72rem;
}
```

---

## 2. File structure

```
thisisphase-co/
├── README.md                          ← deploy instructions
├── FRAMEWORK.md                       ← this file
├── package.json
├── next.config.mjs
├── tsconfig.json
├── tailwind.config.ts
├── vercel.json                        ← domain mapping
├── public/
│   ├── llms.txt                       ← AI crawler optimization
│   ├── robots.txt
│   ├── og/
│   │   ├── home.jpg                   ← Open Graph images per page
│   │   ├── vol-perimenopause.jpg
│   │   ├── vol-hormones.jpg
│   │   ├── vol-architecture.jpg
│   │   ├── vol-self-trust.jpg
│   │   ├── vol-execution.jpg
│   │   └── series.jpg
│   ├── volumes/                       ← cover thumbnails
│   │   ├── vol-1-cover.png
│   │   ├── vol-2-cover.png
│   │   ├── vol-3-cover.png
│   │   ├── vol-4-cover.png
│   │   └── vol-5-cover.png
│   └── erika/
│       └── portrait.jpg               ← about page hero
└── src/
    ├── app/
    │   ├── layout.tsx                 ← root layout, fonts, metadata, JSON-LD
    │   ├── globals.css                ← brand tokens, base styles
    │   ├── page.tsx                   ← home page
    │   ├── sitemap.ts                 ← dynamic sitemap.xml
    │   ├── manifest.ts                ← PWA manifest
    │   ├── vol/
    │   │   └── [slug]/
    │   │       └── page.tsx           ← dynamic volume page (5 routes)
    │   ├── series/page.tsx            ← $97 bundle landing
    │   ├── lifetime/page.tsx          ← $197 bundle landing
    │   ├── about/page.tsx             ← The PHASE™ origin + Erika
    │   ├── community/page.tsx         ← founding cohort sign-up
    │   ├── thanks/page.tsx            ← Stripe success redirect
    │   └── api/
    │       └── newsletter/route.ts    ← email capture handler
    ├── components/
    │   ├── Nav.tsx                    ← top nav with logo
    │   ├── Footer.tsx                 ← legal + sister-site link
    │   ├── Hero.tsx                   ← home hero with PHASE acronym
    │   ├── PhaseAcronym.tsx           ← reusable P · H · A · S · E block
    │   ├── VolumeCard.tsx             ← per-volume card with cover + CTA
    │   ├── BundleCard.tsx             ← series + lifetime tier cards
    │   ├── PullQuote.tsx              ← editorial quote block
    │   ├── ManifestoBlock.tsx         ← dark navy callout (matches erikahanafin)
    │   ├── MagazineMasthead.tsx       ← VOL. X · NO. X / PUBLISHING WEEKLY
    │   ├── AffiliateStrip.tsx         ← JOi+Blokes + Amazon storefront row
    │   ├── EmailCapture.tsx           ← Substack/ManyChat opt-in
    │   ├── ProductSchema.tsx          ← per-volume JSON-LD
    │   └── StripeButton.tsx           ← Checkout link wrapper
    ├── lib/
    │   ├── volumes.ts                 ← data: 5 volumes content + metadata
    │   ├── stripe.ts                  ← product + price IDs
    │   ├── schema.ts                  ← JSON-LD generators
    │   ├── seo.ts                     ← metadata helpers
    │   └── analytics.ts               ← Vercel Analytics + GA4
    └── content/
        └── volumes/                   ← MDX content per volume
            ├── perimenopause.mdx
            ├── hormones.mdx
            ├── architecture.mdx
            ├── self-trust.mdx
            └── execution.mdx
```

---

## 3. Page architecture

### `/` Home page
**Goal:** Hero conversion + browse all 5 volumes
- Magazine masthead: "VOL. I · NO. 01 · The PHASE™ Issue"
- Hero headline (Cormorant Garamond): "You are not in a phase. You are in *The PHASE*."
- Subheadline: "Five volumes. One body-truth. Built by women, for women."
- Pink corner-bracket manifesto block (mirrors erikahanafin.com NEON ID section)
- PHASE acronym carousel/grid (5 letters, hover reveals title)
- Five Volume Cards (cover thumbnail + tagline + $27 buy button each)
- Bundle dual-card: $97 Series MOST POPULAR + $197 Lifetime
- Pull quote: "Test, don't guess. Advocate, don't apologize. Track, don't tolerate."
- AffiliateStrip: JOi + Blokes (telehealth HRT) + Amazon storefront (My Hormone Stack)
- Email capture: "Join the founding cohort"
- Footer: From MOMumental Moments® · sister site link to erikahanafin.com

### `/vol/[slug]` Five volume pages (perimenopause / hormones / architecture / self-trust / execution)
**Goal:** Long-form sales page per volume + SEO authority
- Magazine masthead: "VOL. III · HORMONES" with brand-pink letter accent
- Hero: cover image + tagline + price + Buy button
- Reset Mantra pull quote
- "What's inside" component grid (6 components per volume)
- Pull quotes from the volume content (3-4 each)
- Sample page preview (first page of PDF embedded)
- "Who this is for" + "Who this is NOT for"
- Testimonial slot (placeholder for v2)
- AffiliateStrip (volume-specific where relevant)
- Sticky bottom buy bar: "$27 · Buy Vol. III"
- JSON-LD Product schema (price, name, description, image)

### `/series` $97 bundle page
**Goal:** Convert bundle browsers
- Magazine masthead: "ALL FIVE VOLUMES · ONE PRICE"
- Hero: stacked covers visual + "Save $38" badge + Buy CTA
- "Why all five?" narrative
- All 5 volumes summary
- Pull quote + bundle math breakdown
- FAQ block
- Sticky buy bar: "$97 · Save $38"

### `/lifetime` $197 bundle page
**Goal:** Convert highest-tier buyers
- Same as /series but with: lifetime updates + community access + founding cohort badge

### `/about` The PHASE™ origin
**Goal:** SEO authority + founder credibility
- Magazine masthead: "THE PHASE™ · A NOTE FROM THE FOUNDER"
- Erika portrait + bio
- "Why I built this" narrative (from Vol II letter)
- Credentials block (IIN · 5x CEO · 2x Top 50)
- Sister site link to erikahanafin.com
- The PHASE™ trademark + MOMumental Moments® registered marks rendered correctly

### `/community` founding cohort
**Goal:** Email capture + community growth
- "Join 100 founding members" hero
- Substack embed
- Community values (4 pillars)
- ManyChat embed for IG-driven signups

### `/thanks` Stripe success redirect
**Goal:** Confirm purchase + drive next action
- "You're in." hero
- "What happens next" timeline
- Cross-sell: if bought one Vol, suggest the bundle
- Social share prompts

---

## 4. SEO / GEO / AI optimization layer

### llms.txt (AI crawler context)
Comprehensive plain-text summary of The PHASE™ empire, intended for GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot. Structured for AI consumption. Lives at `thisisphase.co/llms.txt`.

### robots.txt
Explicitly allows:
- GPTBot
- ClaudeBot
- Claude-Web
- PerplexityBot
- OAI-SearchBot
- Google-Extended (for Bard / Gemini / AI Overviews)
- ChatGPT-User
- Common search crawlers (Googlebot, Bingbot)

### JSON-LD schema (per page)
- **Organization:** The PHASE™ as sub-brand of MOMumental Moments®
- **WebSite:** thisisphase.co with search action
- **Person:** Erika Hanafin Austria (founder, IIN credential, sameAs links to LinkedIn, IG, Substack)
- **Product:** Each volume + each bundle (price, image, description, brand)
- **BreadcrumbList:** site hierarchy
- **FAQPage:** on /series and /lifetime (FAQ blocks)
- **Article:** on /about

### Per-page metadata
- Unique title (under 60 chars)
- Unique description (under 155 chars)
- Canonical URL
- Open Graph: title, description, image (1200x630), type, url
- Twitter Card: summary_large_image
- Article meta on /about (author, published date)

### Sitemap (dynamic)
Auto-generated from app routes. Includes:
- Last modified date
- Priority weighting (home 1.0, volume pages 0.9, about 0.7, etc.)
- Change frequency

### Performance budget
- Lighthouse target: 95+ on all 4 metrics
- LCP under 2.5s
- CLS under 0.1
- TBT under 200ms
- Image optimization via Next.js Image component
- Font optimization via next/font (Cormorant Garamond + Inter Tight loaded efficiently)

### Internal linking strategy
- Home links to all 5 volumes + series + lifetime
- Each volume links to: 2 thematically-related volumes + series + about
- Series page links to all 5 volumes
- About page links to home + erikahanafin.com
- Footer present on every page with full link inventory

### Heading hierarchy
Strict semantic structure: one H1 per page, descending H2 → H3 → H4. No skipped levels.

---

## 5. Stripe integration (multi-tier)

### Stripe Products (to create)
| Product | Stripe Price ID | URL |
|---|---|---|
| Vol. I · Perimenopause · $27 | `price_vol1_27` | `/vol/perimenopause` |
| Vol. II · Hormones · $27 | `price_vol2_27` | `/vol/hormones` |
| Vol. III · Architecture · $27 | `price_vol3_27` | `/vol/architecture` |
| Vol. IV · Self-trust · $27 | `price_vol4_27` | `/vol/self-trust` |
| Vol. V · Execution · $27 | `price_vol5_27` | `/vol/execution` |
| Series · All 5 · $97 | `price_series_97` | `/series` |
| Lifetime Pass · $197 | `price_lifetime_197` | `/lifetime` |
| Anchor (any vol + coaching prompts) · $47 | `price_anchor_47` | per volume page |

### Checkout flow
1. Stripe Checkout (no custom payment forms)
2. Success URL: `https://thisisphase.co/thanks?vol={SLUG}&session_id={CHECKOUT_SESSION_ID}`
3. Cancel URL: returns to product page
4. Stripe handles email + receipt automatically
5. Stripe webhook fires fulfillment email with PDF download link

---

## 6. Affiliate revenue surfaces

### JOi + Blokes (telehealth HRT)
- Featured on `/vol/hormones` (in-content + sidebar + bottom CTA)
- AffiliateStrip on home page
- Link: `https://joiandblokes.com/?rid=003UI00000gvOFcYAM`
- Reader benefit: $50 off first order
- Disclaimer: clearly marked as affiliate

### Amazon Influencer Storefront
- Featured on `/vol/hormones` (My Hormone Stack idea list)
- AffiliateStrip on home page
- Link: `https://www.amazon.com/shop/erikahanafin`
- Tracking ID: `erikafeldhus-20`
- FTC disclaimer: "I am an Amazon Associate and earn from qualifying purchases."

### Both (general)
- Footer disclaimer: "Some links on this site are affiliate links. I only recommend products I personally use."

---

## 7. Domain + DNS configuration

### Vercel project config
- Project name: `thisisphase-co`
- Framework: Next.js 15
- Root directory: `/`
- Build command: `next build`
- Output directory: `.next`

### GoDaddy DNS for thisisphase.co
- A record: `76.76.21.21` (Vercel)
- CNAME `www`: `cname.vercel-dns.com`

### GoDaddy DNS for phasewellness.co (defensive)
- 301 redirect to `https://thisisphase.co`
- Set up via Vercel domain redirect or GoDaddy URL forwarding

### erikahanafin.com → thisisphase.co
- 301 redirect on `/phase` route only
- Add to next.config.mjs of erikahanafin-site:
```js
async redirects() {
  return [{ source: '/phase', destination: 'https://thisisphase.co', permanent: true }];
}
```

---

## 8. Content data structure

Each volume defined in `src/lib/volumes.ts`:

```typescript
export type Volume = {
  slug: string;                     // URL slug
  number: number;                   // 1-5
  letter: 'P' | 'H' | 'A' | 'S' | 'E';
  title: string;                    // "Perimenopause"
  fullTitle: string;                // "Vol. I · Perimenopause"
  tagline: string;                  // hero subtitle
  resetMantra: string;              // pulled into mantra block
  description: string;              // SEO meta + product schema
  longDescription: string;          // sales page intro
  components: Array<{               // 5-6 components per volume
    number: string;
    title: string;
    summary: string;
  }>;
  pullQuotes: string[];             // 3-4 screenshot-bait lines
  whoFor: string[];                 // bullet list
  whoNotFor: string[];              // bullet list
  pdfPages: number;                 // 9-10
  price: number;                    // 27
  stripePriceId: string;            // price_vol1_27
  ogImage: string;                  // /og/vol-perimenopause.jpg
  coverImage: string;               // /volumes/vol-1-cover.png
  publishedAt: string;              // ISO date for schema
  updatedAt: string;                // ISO date for schema
};
```

This data structure powers:
- Volume cards on home
- Each `/vol/[slug]` page
- JSON-LD Product schema
- Sitemap entries
- AffiliateStrip targeting

---

## 9. Quotes inventory (already locked from PDFs)

Pull quotes pre-loaded for each volume. These are the screenshot-bait lines the volumes already protected:

**Vol. I · Perimenopause:**
- "I am not in a phase. I am in The PHASE."
- "We map the symptoms, decode the hormones, and end the gaslighting."

**Vol. II · Hormones:**
- "I spent four years thinking I was failing at stress."
- "Your hormones are not optimized for how you're living and functioning. We need to support your body instead of forcing you to push through."
- "My body is not a problem to solve. It is a partner to listen to."
- "The hormones don't ask permission. Neither should you."
- "Test, don't guess. Advocate, don't apologize. Track, don't tolerate."

**Vol. III · Architecture:**
- "Clarity can be soft. I am moving forward."
- "What am I constantly responsible for that no one acknowledges?"

**Vol. IV · Self-trust:**
- "I trust my body. I trust my voice. I trust my pace."
- "What have I been pretending not to know?"

**Vol. V · Execution:**
- (TBD from your final voice line list, will pull from PDF)

---

## 10. Image strategy

### Required images (you provide or I generate placeholders)
- 5 volume cover images (export from Canva at 1200x1500 px)
- 5 OG images (1200x630 px) per volume page
- 1 home OG image (1200x630)
- 1 series OG image (1200x630)
- 1 lifetime OG image (1200x630)
- 1 about portrait (your existing erikahanafin.com portrait works)
- Optional: PDF page previews (1 per volume) for sample peek

### Format + delivery
- All in `/public/og/` and `/public/volumes/`
- Next.js Image component handles optimization (WebP, AVIF, responsive sizes)
- Lazy loading by default
- Alt text written for accessibility + SEO

---

## 11. What I'm building right now

Stage 1 (tonight, in workspace folder):
1. Full file scaffold with placeholder content (so you can see structure)
2. Brand tokens + base layout
3. Home page with all sections
4. One example volume page (Vol II Hormones, since content is locked)
5. SEO infrastructure (llms.txt, robots.txt, sitemap, schema)
6. README with deploy steps

Stage 2 (after you send framework):
1. Fill in remaining 4 volume pages with content
2. Series + Lifetime bundle pages
3. About page
4. Community page
5. Stripe integration (real product IDs)
6. Email capture endpoint

---

## 12. Decisions you make in your framework

When you send the framework, I need from you:

1. **Hero tagline:** "You are not in a phase. You are in The PHASE." OR your alternative
2. **About page narrative:** which sections (origin, credentials, philosophy, family, etc.)
3. **Community offer:** what does $197 lifetime include exactly (private Slack? monthly Live? quarterly retreat?)
4. **Email capture incentive:** what do they get for joining the list? (free chapter? mini course? quiz?)
5. **Image references:** which existing assets to reuse vs. create new
6. **Stripe products:** create now or after launch? (I recommend now)
7. **Sister-site treatment:** how prominently does erikahanafin.com appear? footer link only or hero callout?
8. **Domain redirect priority:** erikahanafin.com/phase → thisisphase.co, or both URLs work?

---

*MOMumentally,*
*Erika's CMO · Building the empire's next pillar.*
