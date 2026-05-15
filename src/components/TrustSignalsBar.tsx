/**
 * TrustSignalsBar · founder credentials strip for product pages.
 *
 * Per Samantha Fine WTF framework: trust signals = +20-40% conversion lift on $97+ products.
 * Drop into /series, /vol/[slug], /journal, /decode pages above the fold (after hero, before product detail).
 *
 * Voice firewall: no em dashes, period-driven, sister-tone. Locked credentials per feedback.md May 14 PM.
 *
 * Variants:
 *   - 'cream' (default) · cream-alt strip with navy text + pink accents
 *   - 'navy' · navy strip with cream text + pink accents (for use after hero on darker pages)
 *   - 'compact' · single-line inline version for tight spaces
 */

type TrustSignalsBarProps = {
  variant?: 'cream' | 'navy' | 'compact';
};

const CREDENTIALS = [
  { eyebrow: 'CERTIFIED', label: 'IIN Holistic Health Coach' },
  { eyebrow: 'FOUNDER', label: 'MOMumental Moments®' },
  { eyebrow: 'PUBLISHER', label: 'MOMumental Reinvention · 50K+ readers' },
  { eyebrow: 'RECOGNITION', label: '2x Top 50 Women Leaders · Virginia' },
  { eyebrow: 'OPERATOR', label: '5x Acquisition CEO' },
];

export function TrustSignalsBar({ variant = 'cream' }: TrustSignalsBarProps) {
  if (variant === 'compact') {
    return (
      <div className="border-y border-rule py-4 px-6 bg-cream-alt">
        <p className="text-xs text-navy/70 text-center font-mono uppercase tracking-[0.18em]">
          By Erika Hanafin Austria
          <span className="text-pink mx-3">·</span>
          IIN-Certified
          <span className="text-pink mx-3">·</span>
          Founder MOMumental Moments<sup>&reg;</sup>
          <span className="text-pink mx-3">·</span>
          50K+ readers
          <span className="text-pink mx-3">·</span>
          2x Top 50 Women Leaders
          <span className="text-pink mx-3">·</span>
          5x Acquisition CEO
        </p>
      </div>
    );
  }

  const isNavy = variant === 'navy';

  return (
    <section
      className={
        isNavy
          ? 'bg-navy text-cream py-12 px-6 border-y border-cream/10'
          : 'bg-cream-alt py-12 px-6 border-y border-rule'
      }
      aria-labelledby="trust-signals-heading"
    >
      <div className="max-w-content mx-auto">
        <div className="text-center mb-8">
          <p className={`eyebrow text-xs mb-2 ${isNavy ? 'eyebrow-pink' : 'text-pink'}`}>
            BY THE WOMAN WHO BUILT IT
          </p>
          <h2
            id="trust-signals-heading"
            className={`font-serif text-2xl md:text-3xl ${isNavy ? 'text-cream' : 'text-navy'}`}
          >
            <span className="italic text-pink">Erika Hanafin Austria</span>.
          </h2>
        </div>

        <ul
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-6 max-w-5xl mx-auto"
          aria-label="Founder credentials"
        >
          {CREDENTIALS.map((c) => (
            <li
              key={c.eyebrow}
              className={`text-center border-l ${isNavy ? 'border-cream/15' : 'border-rule'} px-3 first:border-l-0 sm:first:border-l sm:[&:nth-child(4)]:border-l-0 lg:[&:nth-child(4)]:border-l`}
            >
              <p className={`eyebrow text-[10px] mb-2 ${isNavy ? 'eyebrow-pink' : 'text-pink'}`}>
                {c.eyebrow}
              </p>
              <p
                className={`font-serif text-base leading-snug ${isNavy ? 'text-cream/90' : 'text-navy'}`}
                dangerouslySetInnerHTML={{ __html: c.label.replace('®', '<sup>&reg;</sup>') }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
