/**
 * JSON-LD SCHEMA GENERATORS
 * For SEO/GEO/AI search optimization.
 * Renders into <script type="application/ld+json"> tags via metadata.
 */

import { VOLUMES, SERIES, LIFETIME, type Volume } from './volumes';

const SITE_URL = 'https://thisisphase.co';
const ERIKA_URL = 'https://erikahanafin.com';

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'The PHASE™',
  alternateName: 'The PHASE',
  url: SITE_URL,
  logo: `${SITE_URL}/og/logo.png`,
  description: 'A five-volume women\'s reinvention series mapping perimenopause, hormones, daily architecture, self-trust, and execution. From MOMumental Moments®.',
  parentOrganization: {
    '@type': 'Organization',
    name: 'MOMumental Moments®',
    url: ERIKA_URL,
  },
  founder: {
    '@type': 'Person',
    '@id': `${ERIKA_URL}/#person`,
    name: 'Erika Hanafin Austria',
  },
  sameAs: [
    'https://www.instagram.com/thisisphaseco',
    'https://www.instagram.com/erikahanafinaustria',
    'https://www.momumentalreinvention.com',
    ERIKA_URL,
  ],
};

export const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${ERIKA_URL}/#person`,
  name: 'Erika Hanafin Austria',
  jobTitle: 'Founder of The PHASE™ · CEO · Reinvention Leader',
  description: 'IIN-certified holistic health coach, 5x acquisition CEO, twice-named Top 50 Women Leaders Virginia. Founder of The PHASE™ and MOMumental Moments®.',
  url: ERIKA_URL,
  image: `${ERIKA_URL}/images/erika-portrait.jpg`,
  sameAs: [
    'https://www.linkedin.com/in/erikahanafinaustria',
    'https://www.instagram.com/erikahanafinaustria',
    'https://www.instagram.com/thisisphaseco',
    'https://www.momumentalreinvention.com',
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
  description: 'Five volumes. One body-truth. Built for women navigating perimenopause, hormones, and reinvention.',
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

export function lifetimeProductSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${SITE_URL}/lifetime/#product`,
    name: LIFETIME.title,
    description: LIFETIME.description,
    image: `${SITE_URL}${LIFETIME.ogImage}`,
    brand: { '@type': 'Brand', name: 'The PHASE™' },
    offers: {
      '@type': 'Offer',
      url: `${SITE_URL}/lifetime`,
      priceCurrency: 'USD',
      price: LIFETIME.price.toString(),
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
