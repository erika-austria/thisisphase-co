/**
 * JSON-LD SCHEMA GENERATORS
 * For SEO/GEO/AI search optimization.
 * Renders into <script type="application/ld+json"> tags via metadata.
 */

import { VOLUMES, SERIES, JOURNAL, type Volume } from './volumes';

const SITE_URL = 'https://thephase.co';
const ERIKA_URL = 'https://erikahanafin.com';
const MOMUMENTAL_URL = 'https://momumentalmoments.co';

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'The PHASE™',
  alternateName: 'The PHASE',
  url: SITE_URL,
  logo: `${SITE_URL}/og/logo.png`,
  description: 'The whole-season house for a woman rebuilding everything at once. Four rooms, one woman, one reinvention: Body, Family, Voice, Work. From MOMumental Moments®.',
  parentOrganization: {
    '@type': 'Organization',
    '@id': `${MOMUMENTAL_URL}/#org`,
    name: 'MOMumental Moments®',
    url: MOMUMENTAL_URL,
  },
  founder: {
    '@type': 'Person',
    '@id': `${ERIKA_URL}/#person`,
    name: 'Erika Hanafin Austria',
  },
  sameAs: [
    MOMUMENTAL_URL,
    'https://www.instagram.com/thisisphaseco',
    'https://www.instagram.com/erikahanafin',
    'https://www.youtube.com/@momumentalreinvention',
    'https://www.tiktok.com/@momumentalmomentsco',
    'https://www.momumentalreinvention.com',
    'https://www.amazon.com/shop/erikahanafin',
    ERIKA_URL,
  ],
};

export const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${ERIKA_URL}/#person`,
  name: 'Erika Hanafin Austria',
  alternateName: ['Erika Hanafin', 'Erika Austria', 'Erika Hanafin Feldhus'],
  jobTitle: 'Founder of The PHASE™ · CEO · Reinvention Leader',
  description: 'IIN-certified holistic health coach, operator and former CEO, twice-named Top 50 Women Leaders Virginia. Founder of The PHASE™ and MOMumental Moments®.',
  url: ERIKA_URL,
  image: `${ERIKA_URL}/images/erika-portrait.jpg`,
  sameAs: [
    MOMUMENTAL_URL,
    'https://www.linkedin.com/in/erikahanafinaustria',
    'https://www.instagram.com/erikahanafin',
    'https://www.instagram.com/thisisphaseco',
    'https://www.youtube.com/@momumentalreinvention',
    'https://www.tiktok.com/@momumentalmomentsco',
    'https://www.momumentalreinvention.com',
    'https://www.amazon.com/shop/erikahanafin',
  ],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', name: 'IIN Certified Holistic Health Coach' },
    { '@type': 'EducationalOccupationalCredential', name: '2x Top 50 Women Leaders Virginia' },
  ],
};

export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'The PHASE™',
  description: 'The whole season of rebuilding. Four rooms, one woman, one reinvention: Body, Family, Voice, Work.',
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-US',
};

export function volumeProductSchema(volume: Volume) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${SITE_URL}/vol/${volume.slug}/#product`,
    name: volume.fullTitle,
    description: volume.description,
    image: `${SITE_URL}${volume.coverImage}`,
    brand: { '@type': 'Brand', name: 'The PHASE™' },
    category: 'Digital Workbook · Women\'s Health · Perimenopause',
    offers: {
      '@type': 'Offer',
      url: `${SITE_URL}/vol/${volume.slug}`,
      priceCurrency: 'USD',
      price: volume.price.toString(),
      availability: 'https://schema.org/InStock',
      seller: { '@id': `${SITE_URL}/#organization` },
    },
    author: { '@id': `${ERIKA_URL}/#person` },
    datePublished: volume.publishedAt,
    dateModified: volume.updatedAt,
  };
}

export function bundleProductSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${SITE_URL}/series/#product`,
    name: SERIES.title,
    description: SERIES.description,
    image: `${SITE_URL}${SERIES.ogImage}`,
    brand: { '@type': 'Brand', name: 'The PHASE™' },
    offers: {
      '@type': 'Offer',
      url: `${SITE_URL}/series`,
      priceCurrency: 'USD',
      price: SERIES.price.toString(),
      availability: 'https://schema.org/InStock',
      seller: { '@id': `${SITE_URL}/#organization` },
    },
  };
}

export function journalProductSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${SITE_URL}/journal/#product`,
    name: JOURNAL.title,
    description: JOURNAL.description,
    image: `${SITE_URL}${JOURNAL.ogImage}`,
    brand: { '@type': 'Brand', name: 'The PHASE™' },
    category: 'Digital Workbook · Journal · Women\'s Health',
    offers: {
      '@type': 'Offer',
      url: `${SITE_URL}/journal`,
      priceCurrency: 'USD',
      price: JOURNAL.price.toString(),
      availability: 'https://schema.org/InStock',
      seller: { '@id': `${SITE_URL}/#organization` },
    },
  };
}

export function breadcrumbSchema(crumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

/**
 * PodcastSeries schema for MOMumental Reinvention Podcast.
 * Launches June 2026. Hosted by Erika Hanafin Austria under MOMumental Moments®.
 * Use on /podcast page (when built) and reference from homepage.
 */
export function podcastSeriesSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'PodcastSeries',
    '@id': `${MOMUMENTAL_URL}/podcast/#podcast`,
    name: 'MOMumental Reinvention Podcast',
    description: 'Becoming, not being. A build, not a mood. Conversations on perimenopause, reinvention, and the body-truth women rebuild from. Hosted by Erika Hanafin Austria.',
    url: `${MOMUMENTAL_URL}/podcast`,
    author: { '@id': `${ERIKA_URL}/#person` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-US',
  };
}

/**
 * VideoObject schema for embedded YouTube videos.
 * Use on pages that embed @thisisphaseco YouTube content (created Fri May 22 PM 2026).
 */
export function videoObjectSchema(opts: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  embedUrl: string;
  duration?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: opts.name,
    description: opts.description,
    thumbnailUrl: opts.thumbnailUrl,
    uploadDate: opts.uploadDate,
    embedUrl: opts.embedUrl,
    ...(opts.duration && { duration: opts.duration }),
    publisher: { '@id': `${SITE_URL}/#organization` },
    author: { '@id': `${ERIKA_URL}/#person` },
  };
}

export function allVolumesItemListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'The PHASE™ · Five Volumes',
    itemListElement: VOLUMES.map((v, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE_URL}/vol/${v.slug}`,
      name: v.fullTitle,
    })),
  };
}

export function reinventionMapSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${SITE_URL}/reinvention-map/#guide`,
    name: 'The Reinvention Map',
    about: 'A four-room guide for women rebuilding everything at once: the body, the family, the voice, the work.',
    isAccessibleForFree: true,
    inLanguage: 'en-US',
    learningResourceType: 'Guide',
    url: `${SITE_URL}/reinvention-map`,
    author: { '@id': `${ERIKA_URL}/#person` },
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}
