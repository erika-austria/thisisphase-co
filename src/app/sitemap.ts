import type { MetadataRoute } from 'next';
import { VOLUMES } from '@/lib/volumes';

const SITE_URL = 'https://thisisphase.co';

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split('T')[0];

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: today, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/series`, lastModified: today, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${SITE_URL}/lifetime`, lastModified: today, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${SITE_URL}/about`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/community`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
  ];

  const volumeRoutes: MetadataRoute.Sitemap = VOLUMES.map((v) => ({
    url: `${SITE_URL}/vol/${v.slug}`,
    lastModified: v.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  return [...staticRoutes, ...volumeRoutes];
}
