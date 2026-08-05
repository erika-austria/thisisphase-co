type PullQuoteProps = {
  children: React.ReactNode;
  attribution?: string;
  variant?: 'default' | 'large' | 'manifesto';
};

export function PullQuote({ children, attribution, variant = 'default' }: PullQuoteProps) {
  if (variant === 'manifesto') {
    return (
      <figure className="bg-navy text-cream py-20 md:py-28 px-6 relative overflow-hidden bracket-pink">
        <blockquote className="max-w-4xl mx-auto text-center">
          <div className="eyebrow eyebrow-pink mb-6">MANIFESTO</div>
          <p className="font-serif text-3xl md:text-5xl leading-tight">{children}</p>
          {attribution && (
            <figcaption className="eyebrow eyebrow-pink mt-8 text-xs">
              {attribution}
            </figcaption>
          )}
        </blockquote>
      </figure>
    );
  }

  if (variant === 'large') {
    return (
      <figure className="my-16 max-w-4xl mx-auto px-6">
        <blockquote className="font-serif italic text-3xl md:text-4xl leading-tight text-navy border-l-2 border-pink pl-8">
          {children}
        </blockquote>
        {attribution && (
          <figcaption className="eyebrow text-xs mt-6 pl-8 text-navy/60">
            {attribution}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className="my-10">
      <blockquote className="pull-quote">{children}</blockquote>
      {attribution && (
        <figcaption className="eyebrow text-xs mt-4 text-navy/60">
          {attribution}
        </figcaption>
      )}
    </figure>
  );
}
