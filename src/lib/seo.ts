/**
 * SEO HELPERS · per-page metadata generators
 * Used inside generateMetadata() in each page.tsx
 */

import type { Metadata } from 'next';

const SITE_URL = 'https://thisisphase.co';
const SITE_NAME = 'The PHASE™';
const DEFAULT_DESCRIPTION = 'Five volumes. One body-truth. The map of perimenopause, hormones, daily architecture, self-trust, and execution. From MOMumental Moments®.';

type SEOConfig = {
  title: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
};

export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '',
  ogImage = '/og/home.jpg',
  noIndex = false,
  type = 'website',
  publishedTime,
  modifiedTime,
}: SEOConfig): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title === SITE_NAME ? title : `${title} · ${SITE_NAME}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;

  return {
    // absolute prevents layout-level template from double-appending " · The PHASE™"
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: type === 'product' ? 'website' : type,
      url,
      title: fullTitle,
      description,
      siteName: SITE_NAME,
      images: [{ url: fullOgImage, width: 1200, height: 630, alt: title }],
      locale: 'en_US',
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullOgImage],
      creator: '@erikahanafinaustria',
      site: '@thisisphaseco',
    },
    other: {
      'apple-mobile-web-app-title': 'PHASE',
    },
  };
}

export const ROOT_METADATA: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'The PHASE™ · Five-Volume Women\'s Reinvention Series',
    // template removed May 11 · per-page titles use absolute (see buildMetadata above)
    template: '%s',
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: 'Erika Hanafin Austria', url: 'https://erikahanafin.com' }],
  creator: 'Erika Hanafin Austria',
  publisher: 'MOMumental Moments®',
  keywords: [
    'perimenopause',
    'menopause',
    'HRT',
    'hormone replacement therapy',
    'women\'s health',
    'midlife reinvention',
    'hormone testing',
    'DUTCH test',
    'PHASE method',
    'MOMumental Moments',
    'Erika Hanafin Austria',
  ],
  category: 'Health & Wellness',
  formatDetection: { email: false, address: false, telephone: false },
};
