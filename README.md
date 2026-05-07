# thisisphase.co

The home of **The PHASE™** · a five-volume women's reinvention series.
Sub-brand of **MOMumental Moments®** by Erika Hanafin Austria.

**Stack:** Next.js 15 · App Router · TypeScript · Tailwind CSS · Vercel
**Sister site:** [erikahanafin.com](https://erikahanafin.com)
**Defensive domain:** phasewellness.co (redirects to thisisphase.co)

---

## Quick start

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Type-check + lint

```bash
npm run typecheck
npm run lint
```

---

## File map

```
thisisphase-co/
├── FRAMEWORK.md           ← architecture decisions + design tokens
├── README.md              ← this file
├── package.json
├── next.config.mjs        ← redirects (/joi, /stack), headers, image domains
├── tailwind.config.ts     ← brand tokens
├── tsconfig.json
├── postcss.config.js
├── vercel.json            ← deploy config
├── public/
│   ├── llms.txt           ← AI crawler context (GPTBot, ClaudeBot, PerplexityBot)
│   ├── robots.txt         ← explicitly allows all major AI bots
│   ├── og/                ← Open Graph images per page (1200x630)
│   └── volumes/           ← cover images (1200x1500)
└── src/
    ├── app/
    │   ├── layout.tsx                ← root layout, fonts, JSON-LD (Org/Person/WebSite)
    │   ├── globals.css               ← brand tokens + base styles
    │   ├── page.tsx                  ← home
    │   ├── sitemap.ts                ← dynamic sitemap.xml
    │   ├── vol/[slug]/page.tsx       ← dynamic volume page (5 routes)
    │   ├── series/page.tsx           ← $97 bundle
    │   ├── lifetime/page.tsx         ← $197 bundle
    │   ├── about/page.tsx            ← founder story
    │   ├── community/page.tsx        ← founding cohort sign-up
    │   ├── thanks/page.tsx           ← Stripe success redirect
    │   └── api/newsletter/route.ts   ← email capture
    ├── components/
    │   ├── Nav.tsx
    │   ├── Footer.tsx
    │   ├── MagazineMasthead.tsx
    │   ├── PhaseAcronym.tsx          ← reusable P · H · A · S · E block
    │   ├── VolumeCard.tsx
    │   ├── PullQuote.tsx
    │   ├── AffiliateStrip.tsx        ← JOi+Blokes + Amazon storefront
    │   ├── EmailCapture.tsx
    │   └── StripeButton.tsx
    └── lib/
        ├── volumes.ts                ← single source of truth for 5 volumes
        ├── stripe.ts                 ← Stripe payment links + affiliate URLs
        ├── schema.ts                 ← JSON-LD generators
        └── seo.ts                    ← metadata helpers
```

---

## Brand tokens (must match erikahanafin.com)

| Token | Value | Use |
|---|---|---|
| `cream` | `#fff9f1` | Primary background |
| `cream-alt` | `#faf2e8` | Card backgrounds |
| `navy` | `#2f4858` | Body text, dark sections |
| `navy-deep` | `#1d2f3d` | Hover states |
| `pink` | `#f086dc` | Brand accent, CTAs |
| `pink-soft` | `#fce7f7` | Pink wash backgrounds |
| `pink-deep` | `#c54fa3` | Pink hover states |
| `font-serif` | Cormorant Garamond | Headlines |
| `font-sans` | Inter Tight | Body, navigation, eyebrows |

---

## SEO / GEO / AI optimization

- **Per-page metadata** via `buildMetadata()` in `src/lib/seo.ts`
- **JSON-LD schema:** Organization, Person, WebSite, Product (per volume + bundles), BreadcrumbList, FAQPage, ItemList
- **llms.txt** at `/llms.txt` for AI crawler context
- **robots.txt** explicitly allows GPTBot, ClaudeBot, ClaudeBot-Web, PerplexityBot, OAI-SearchBot, Google-Extended, Applebot-Extended, etc.
- **Sitemap** auto-generated from app routes
- **Open Graph + Twitter Card** images per page (1200x630)
- **Performance:** Cormorant Garamond + Inter Tight loaded via `next/font` (zero CLS), Next.js Image component for all visuals
- **Heading hierarchy:** strict semantic structure, one H1 per page

---

## Stripe setup (before launch)

1. Create products in Stripe dashboard:
   - Vol. I · Perimenopause · $27 (entry) + $47 (anchor)
   - Vol. II · Hormones · $27 (entry) + $47 (anchor)
   - Vol. III · Architecture · $27 (entry) + $47 (anchor)
   - Vol. IV · Self-trust · $27 (entry) + $47 (anchor)
   - Vol. V · Execution · $27 (entry) + $47 (anchor)
   - The Series · All 5 · $97
   - Lifetime Pass · $197

2. Generate Payment Links for each.

3. Replace placeholder URLs in `src/lib/stripe.ts` (`STRIPE_LINKS` object).

4. Set Payment Link success URL to `https://thisisphase.co/thanks?vol={slug}&session_id={CHECKOUT_SESSION_ID}`.

5. Set up Stripe webhook to fire fulfillment email with PDF download links.

---

## Affiliate links

Configured in `src/lib/stripe.ts` (`AFFILIATE_LINKS`):

- **JOi + Blokes:** `https://joiandblokes.com/?rid=003UI00000gvOFcYAM` (referral, $50 off readers)
- **Amazon Influencer Storefront:** `https://www.amazon.com/shop/erikahanafin` (tracking ID `erikafeldhus-20`)

Pretty redirects live in `next.config.mjs`:
- `/joi` → JOi + Blokes referral URL
- `/stack` → Amazon storefront

---

## Domain + DNS setup

### Vercel project
1. Connect GitHub repo `erika-austria/thisisphase-co` to Vercel
2. Domain settings: add `thisisphase.co` and `www.thisisphase.co`
3. SSL auto-provisions

### GoDaddy DNS for thisisphase.co
- A record `@` → `76.76.21.21` (Vercel)
- CNAME `www` → `cname.vercel-dns.com`

### GoDaddy DNS for phasewellness.co (defensive redirect)
- Domain forwarding (301) → `https://thisisphase.co`
- OR: add domain to Vercel project as alias with redirect

### erikahanafin.com → thisisphase.co
Add to `next.config.mjs` of `erikahanafin-site` repo:
```js
async redirects() {
  return [
    { source: '/phase', destination: 'https://thisisphase.co', permanent: true },
    { source: '/phase/:path*', destination: 'https://thisisphase.co/:path*', permanent: true },
  ];
}
```

---

## Required images (produce + add to /public)

### Volume covers (1200x1500 px, PNG or JPG)
- `/public/volumes/vol-1-cover.png` (Perimenopause)
- `/public/volumes/vol-2-cover.png` (Hormones)
- `/public/volumes/vol-3-cover.png` (Architecture)
- `/public/volumes/vol-4-cover.png` (Self-trust)
- `/public/volumes/vol-5-cover.png` (Execution)

Export from your Canva files at high resolution.

### Open Graph images (1200x630 px)
- `/public/og/home.jpg`
- `/public/og/vol-perimenopause.jpg`
- `/public/og/vol-hormones.jpg`
- `/public/og/vol-architecture.jpg`
- `/public/og/vol-self-trust.jpg`
- `/public/og/vol-execution.jpg`
- `/public/og/series.jpg`
- `/public/og/lifetime.jpg`
- `/public/og/about.jpg`
- `/public/og/community.jpg`
- `/public/og/logo.png` (square logo for Organization schema)

### Favicon set
- `/public/favicon.ico`
- `/public/apple-touch-icon.png` (180x180)

---

## Voice firewall

Per Erika's brand rules:
- **No em dashes in narrative prose.** Periods do the work.
- **Decorative em dashes** around section headers and labels are typographic ornament (acceptable).
- **NEON personality** throughout.
- The PHASE™ trademark and MOMumental Moments® registered marks rendered correctly on every surface.

---

## Pre-launch checklist

- [ ] Volume covers uploaded to `/public/volumes/`
- [ ] OG images generated and uploaded to `/public/og/`
- [ ] Favicon + apple-touch-icon in `/public/`
- [ ] Stripe products created and Payment Link URLs replaced in `src/lib/stripe.ts`
- [ ] Newsletter API endpoint connected to your provider (Substack / ConvertKit / Beehiiv / Klaviyo)
- [ ] Vercel project deployed
- [ ] GoDaddy DNS pointed (thisisphase.co + phasewellness.co)
- [ ] erikahanafin.com `/phase` redirect added
- [ ] Submit sitemap to Google Search Console + Bing Webmaster Tools
- [ ] Test JSON-LD via [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Run Lighthouse on home, /vol/hormones, /series · target 95+ on all metrics
- [ ] Verify llms.txt accessible at `https://thisisphase.co/llms.txt`
- [ ] @thisisphaseco IG bio updated to thisisphase.co

---

*From MOMumental Moments®. Built for the women rebuilding everything that matters.*
