import Link from 'next/link';
import type { Volume } from '@/lib/volumes';

// Brand color palette for each volume cover
const COVER_COLORS: Record<string, { bg: string; accent: string }> = {
  P: { bg: '#fff9f1', accent: '#f086dc' },
  H: { bg: '#fce7f7', accent: '#c95cb0' },
  A: { bg: '#f1e8da', accent: '#1a1410' },
  S: { bg: '#fbd7f1', accent: '#1d2f3d' },
  E: { bg: '#e8dec9', accent: '#c95cb0' },
};

export function VolumeCard({ volume }: { volume: Volume }) {
  const colors = COVER_COLORS[volume.letter] ?? { bg: '#faf5ee', accent: '#1a1410' };

  return (
    <article className="group h-full flex flex-col bg-cream-alt rounded-sm border border-rule p-6 hover:border-pink/40 transition-all hover:shadow-md">
      {/* CSS-rendered editorial cover */}
      <Link
        href={`/vol/${volume.slug}`}
        className="block mb-5 aspect-[4/5] relative overflow-hidden border border-ink/10 group-hover:border-pink/30 transition-colors"
        style={{ backgroundColor: colors.bg }}
        aria-label={`Open ${volume.fullTitle}`}
      >
        {/* Top eyebrow · whitespace-nowrap prevents VOL. II from wrapping */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink/50 whitespace-nowrap">
            The PHASE™
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink/50 whitespace-nowrap">
            VOL. {volume.numeral}
          </span>
        </div>

        {/* Giant typographic letter */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-serif italic leading-none"
            style={{
              fontSize: 'clamp(7rem, 18vw, 12rem)',
              color: colors.accent,
              fontWeight: 500,
              letterSpacing: '-0.04em',
              transform: 'translateY(-0.05em)',
            }}
          >
            {volume.letter}
          </span>
        </div>

        {/* Bottom title */}
        <div className="absolute bottom-4 left-4 right-4 text-center">
          <p className="font-serif text-base text-ink/80 italic leading-tight">
            {volume.title}
          </p>
        </div>

        {/* Subtle pink corner accents */}
        <div
          className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2"
          style={{ borderColor: colors.accent }}
        />
        <div
          className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2"
          style={{ borderColor: colors.accent }}
        />
      </Link>

      {/* Volume number eyebrow */}
      <div className="eyebrow text-xs flex items-center gap-2 mb-2">
        <span className="text-pink-deep font-bold">{volume.letter}</span>
        <span className="text-ink/40">·</span>
        <span>VOL. {volume.numeral}</span>
      </div>

      {/* Title · navy to match brand system across erikahanafin.com + momumentalmoments.co */}
      <h3 className="font-serif text-2xl mb-2 text-navy">
        <Link href={`/vol/${volume.slug}`} className="hover:text-pink-deep transition">
          {volume.title}
        </Link>
      </h3>

      {/* Tagline · flex-grow pushes price/CTA to bottom equally across cards */}
      <p className="text-navy/70 text-sm leading-relaxed mb-5 italic font-serif flex-grow">
        {volume.tagline}
      </p>

      {/* CTA only · pricing lives on the volume page + Stripe checkout · cards drive cue/reward, not price-shop · CMO lock May 9 */}
      <div className="flex items-center justify-end border-t border-rule pt-4 mt-auto">
        <Link
          href={`/vol/${volume.slug}`}
          className="inline-flex items-center gap-1 px-4 py-2 bg-navy text-white text-xs font-semibold tracking-[0.1em] uppercase hover:bg-pink-deep transition-colors"
          aria-label={`Read more about ${volume.fullTitle}`}
        >
          Read more <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
