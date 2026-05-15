import Link from 'next/link';
import { VOLUMES } from '@/lib/volumes';

type PhaseAcronymProps = {
  highlightLetter?: 'P' | 'H' | 'A' | 'S' | 'E';
  variant?: 'horizontal' | 'stacked' | 'stats';
  linked?: boolean;
};

/**
 * PHASE acronym component · 5 letters with optional stats per letter.
 *
 * Variants:
 *   - 'horizontal' (default) · inline letter · title pairs (compact)
 *   - 'stacked' · vertical list of letter · title pairs
 *   - 'stats' · stacked layout with stat number + description per letter (per Erika's homepage update Fri May 15)
 */
export function PhaseAcronym({
  highlightLetter,
  variant = 'horizontal',
  linked = true,
}: PhaseAcronymProps) {
  const isStats = variant === 'stats';
  const isStacked = variant === 'stacked' || isStats;

  const containerClass = isStats
    ? 'flex flex-col gap-7'
    : isStacked
      ? 'flex flex-col items-start gap-2'
      : 'flex flex-wrap items-baseline gap-x-6 gap-y-3';

  return (
    <ul className={containerClass} aria-label="The PHASE acronym · five volumes">
      {VOLUMES.map((v) => {
        const isHighlight = highlightLetter === v.letter;

        // STATS variant · letter + title + stat block (homepage hero · Fri May 15 update)
        if (isStats) {
          const statContent = (
            <div className="grid grid-cols-[auto_1fr] gap-x-5 items-baseline group">
              {/* Letter */}
              <span
                className={`font-serif text-5xl md:text-6xl font-medium leading-none ${
                  isHighlight ? 'text-pink' : 'text-pink group-hover:text-pink-deep'
                } transition-colors`}
                aria-hidden="true"
              >
                {v.letter}
              </span>

              {/* Title + stat */}
              <div>
                <p className="font-serif italic text-2xl md:text-3xl text-navy leading-tight mb-1">
                  {v.title}
                </p>
                <p className="text-[11px] uppercase tracking-[0.18em] font-mono text-navy/60">
                  <span className="text-pink font-semibold">{v.stat.value}</span>
                  <span className="ml-2 normal-case tracking-normal font-sans text-navy/70 italic">
                    {v.stat.description}
                  </span>
                </p>
              </div>
            </div>
          );

          return (
            <li key={v.letter}>
              {linked ? (
                <Link
                  href={`/vol/${v.slug}`}
                  className="block hover:opacity-90 transition"
                  aria-label={`${v.fullTitle} · ${v.stat.value} ${v.stat.description}`}
                >
                  {statContent}
                </Link>
              ) : (
                statContent
              )}
            </li>
          );
        }

        // Original horizontal/stacked variants (no stats)
        const content = (
          <>
            <span
              className={`font-serif text-4xl md:text-5xl font-medium ${
                isHighlight ? 'text-pink' : 'text-navy'
              } transition-colors`}
            >
              {v.letter}
            </span>
            <span className="text-navy/60 mx-2">·</span>
            <span className={`font-serif italic text-2xl md:text-3xl ${isHighlight ? 'text-pink' : 'text-navy'}`}>
              {v.title}
            </span>
          </>
        );

        return (
          <li key={v.letter} className="flex items-baseline">
            {linked ? (
              <Link
                href={`/vol/${v.slug}`}
                className="group hover:text-pink transition flex items-baseline"
                aria-label={`${v.fullTitle}`}
              >
                {content}
              </Link>
            ) : (
              <div className="flex items-baseline">{content}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
