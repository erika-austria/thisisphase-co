type MagazineMastheadProps = {
  issue?: string;
  date?: string;
  topics?: string[];
  publishingNote?: string;
};

export function MagazineMasthead({
  issue = 'ISSUE 01 · 2026',
  date,
  topics = ['PERIMENOPAUSE', 'HORMONES', 'REINVENTION'],
  publishingNote = 'PUBLISHING WEEKLY',
}: MagazineMastheadProps) {
  return (
    <div className="masthead-rule">
      <div className="max-w-content mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs">
        <div className="eyebrow">{issue}</div>
        {topics.length > 0 && (
          <div className="eyebrow text-center">
            {topics.join(' · ')}
          </div>
        )}
        <div className="eyebrow eyebrow-with-dot">{publishingNote}</div>
      </div>
    </div>
  );
}
