export const dynamic = 'force-static';

import type { MetadataRoute } from 'next';

const SITE_BASE_URL = 'https://videos.neverleavetheplayground.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: [
      `${SITE_BASE_URL}/sitemap.xml`,
      `${SITE_BASE_URL}/video-sitemap.xml`,
    ],
  };
}
