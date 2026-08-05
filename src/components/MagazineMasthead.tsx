import Link from 'next/link';

type TopicLink = { label: string; href: string; active?: boolean };

type MagazineMastheadProps = {
  issue?: string;
  date?: string;
  topics?: string[];
  /** When provided, the center strip renders as room navigation (current room highlighted). */
  topicLinks?: TopicLink[];
  publishingNote?: string;
};

export function MagazineMasthead({
  issue = 'ISSUE 01 · 2026',
  date,
  topics = ['PERIMENOPAUSE', 'HORMONES', 'REINVENTION'],
  topicLinks,
  publishingNote = 'PUBLISHING WEEKLY',
}: MagazineMastheadProps) {
  return (
    <div className="masthead-rule">
      <div className="max-w-content mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs">
        <div className="eyebrow">{issue}</div>
        {topicLinks && topicLinks.length > 0 ? (
          <nav className="eyebrow text-center masthead-nav" aria-label="Rooms">
            {topicLinks.map((t, i) => (
              <span key={t.label}>
                {i > 0 && <span className="masthead-sep"> · </span>}
                {t.active ? (
                  <span className="masthead-topic is-active" aria-current="page">
                    {t.label}
                  </span>
                ) : (
                  <Link className="masthead-topic" href={t.href}>
                    {t.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        ) : topics.length > 0 ? (
          <div className="eyebrow text-center">{topics.join(' · ')}</div>
        ) : null}
        <div className="eyebrow eyebrow-with-dot">{publishingNote}</div>
      </div>
    </div>
  );
}
