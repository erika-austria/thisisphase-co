import Link from 'next/link';
import { VOLUMES } from '@/lib/volumes';

type PhaseAcronymProps = {
  highlightLetter?: 'P' | 'H' | 'A' | 'S' | 'E';
  variant?: 'horizontal' | 'stacked';
  linked?: boolean;
};

export function PhaseAcronym({
  highlightLetter,
  variant = 'horizontal',
  linked = true,
}: PhaseAcronymProps) {
  const isStacked = variant === 'stacked';
  const containerClass = isStacked
    ? 'flex flex-col items-start gap-2'
    : 'flex flex-wrap items-baseline gap-x-6 gap-y-3';

  return (
    <ul className={containerClass} aria-label="The PHASE acronym · five volumes">
      {VOLUMES.map((v) => {
        const isHighlight = highlightLetter === v.letter;
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
