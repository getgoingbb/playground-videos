
import type { MetadataRoute } from 'next';
import { getAllVideos, type Video } from '@/lib/videos';

// TODO: Update this to your actual domain, matching layout.tsx
const SITE_DOMAIN = 'example.com'; 
const SITE_PROTOCOL = 'https';
const SITE_BASE_URL = `${SITE_PROTOCOL}://${SITE_DOMAIN}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const videos = getAllVideos();

  const videoEntries: MetadataRoute.Sitemap = videos.map((video: Video) => ({
    url: `${SITE_BASE_URL}/videos/${video.id}`,
    lastModified: new Date(video.uploadDate),
    changeFrequency: 'weekly', // Or 'monthly' if videos are not updated often
    priority: 0.8,
  }));

  return [
    {
      url: SITE_BASE_URL,
      lastModified: new Date(), // Or the date of the most recent video
      changeFrequency: 'daily', // Or 'weekly' depending on how often new videos are added
      priority: 1,
    },
    ...videoEntries,
  ];
}
