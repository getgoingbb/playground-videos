export const dynamic = 'force-static';

import type { MetadataRoute } from 'next';
import { getAllVideos, type Video } from '@/lib/videos';

const SITE_DOMAIN = 'videos.neverleavetheplayground.com';
const SITE_PROTOCOL = 'https';
const SITE_BASE_URL = `${SITE_PROTOCOL}://${SITE_DOMAIN}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const videos = getAllVideos();

  const videoEntries: MetadataRoute.Sitemap = videos.map((video: Video) => ({
    url: `${SITE_BASE_URL}/videos/${video.id}`,
    lastModified: new Date(video.uploadDate),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
    images: [video.thumbnailUrl],
  }));

  return [
    {
      url: SITE_BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
      images: videos.map((v: Video) => v.thumbnailUrl),
    },
    ...videoEntries,
  ];
}
