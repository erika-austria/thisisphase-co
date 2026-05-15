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
 *   - 'stats' · editorial layout: letter + italic title + serif pink stat + italic description, hairline-divided
 */
export function PhaseAcronym({
  highlightLetter,
  variant = 'horizontal',
  linked = true,
}: PhaseAcronymProps) {
  const isStats = variant === 'stats';
  const isStacked = variant === 'stacked' || isStats;

  const containerClass = isStats
    ? 'flex flex-col divide-y divide-rule-soft'
    : isStacked
      ? 'flex flex-col items-start gap-2'
      : 'flex flex-wrap items-baseline gap-x-6 gap-y-3';

  return (
    <ul className={containerClass} aria-label="The PHASE acronym · five volumes">
      {VOLUMES.map((v, idx) => {
        const isHighlight = highlightLetter === v.letter;

        // STATS variant · editorial row · letter + italic title + serif pink stat + italic description
        if (isStats) {
          const isFirst = idx === 0;
          const statContent = (
            <div className="grid grid-cols-[3.5rem_1fr] gap-x-4 items-center group">
              {/* Letter · serif anchor */}
              <span
                className={`font-serif text-[3.5rem] leading-none font-medium ${
                  isHighlight ? 'text-pink' : 'text-pink group-hover:text-pink-deep'
                } transition-colors text-center`}
                aria-hidden="true"
              >
                {v.letter}
              </span>

              {/* Title + stat */}
              <div className="leading-tight">
                <p className="font-serif italic text-2xl text-navy mb-0.5">
                  {v.title}
                </p>
                <p className="font-serif text-[15px] leading-snug">
                  <span className="text-pink font-medium not-italic">
                    {v.stat.value}
                  </span>
                  <span className="ml-1.5 italic text-navy/65">
                    {v.stat.description}
                  </span>
                </p>
              </div>
            </div>
          );

          return (
            <li
              key={v.letter}
              className={isFirst ? 'pb-4' : 'py-4 last:pb-0'}
            >
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
