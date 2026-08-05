import { AFFILIATE_LINKS } from '@/lib/stripe';

type AffiliateStripProps = {
  variant?: 'home' | 'hormones' | 'compact';
};

export function AffiliateStrip({ variant = 'home' }: AffiliateStripProps) {
  return (
    <section
      aria-labelledby="affiliate-heading"
      className="bg-cream-alt border-y border-navy/10 py-16 px-6"
    >
      <div className="max-w-content mx-auto">
        <div className="text-center mb-10">
          <p className="eyebrow eyebrow-with-dot text-xs mb-3">RESOURCES I PERSONALLY USE</p>
          <h2 id="affiliate-heading" className="font-serif text-3xl md:text-4xl">
            The infrastructure underneath my own protocol.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Joi + Blokes Health */}
          <div className="group bg-cream rounded-sm border border-navy/10 p-8 hover:border-pink/40 transition-all hover:shadow-md flex flex-col">
            <div className="eyebrow text-xs text-pink mb-3">TELEHEALTH HRT</div>
            <h3 className="font-serif text-2xl mb-3">Joi + Blokes Health</h3>
            <p className="text-navy/70 leading-relaxed mb-6 flex-grow">
              National telehealth platform for hormone optimization. Board-certified providers, full panels, customizable HRT delivered. Best when you cannot find a local provider who partners.
            </p>
            <div className="flex items-center justify-between border-t border-navy/10 pt-5 mt-auto gap-4">
              <a
                href={AFFILIATE_LINKS.joiAndBlokes}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 px-5 py-3 bg-pink text-white text-xs font-semibold tracking-[0.1em] uppercase hover:bg-pink-deep transition-colors rounded-sm whitespace-nowrap"
              >
                $50 off your first visit <span aria-hidden>→</span>
              </a>
              <span className="eyebrow text-[10px] text-navy/50 whitespace-nowrap">Affiliate link</span>
            </div>
          </div>

          {/* Amazon Hormone Stack · direct list link */}
          <div className="group bg-cream rounded-sm border border-navy/10 p-8 hover:border-pink/40 transition-all hover:shadow-md flex flex-col">
            <div className="eyebrow text-xs text-pink mb-3">SUPPLEMENT STACK</div>
            <h3 className="font-serif text-2xl mb-3">My Hormone Stack on Amazon</h3>
            <p className="text-navy/70 leading-relaxed mb-6 flex-grow">
              The fourteen supplements I actually take. Vitamin D, magnesium glycinate, omega-3, B12, creatine HCL, NAD+. Pure Encapsulations practitioner-grade across the board.
            </p>
            <div className="flex items-center justify-between border-t border-navy/10 pt-5 mt-auto gap-4">
              <a
                href={AFFILIATE_LINKS.amazonHormoneStack}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 px-5 py-3 bg-pink text-white text-xs font-semibold tracking-[0.1em] uppercase hover:bg-pink-deep transition-colors rounded-sm whitespace-nowrap"
              >
                Shop the stack <span aria-hidden>→</span>
              </a>
              <span className="eyebrow text-[10px] text-navy/50 whitespace-nowrap">Amazon Associate</span>
            </div>
          </div>
        </div>

        <p className="text-center text-xs italic text-navy/50 mt-8">
          I am an Amazon Associate and earn from qualifying purchases. Every product linked is one I personally use. Not medical advice.
        </p>
      </div>
    </section>
  );
}
