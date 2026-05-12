export const dynamic = 'force-static';

import { getAllVideos } from '@/lib/videos';

const SITE_BASE_URL = 'https://videos.neverleavetheplayground.com';

function isoToSeconds(iso: string): number {
  // PT7M1S → 421, PT18M1S → 1081, PT0M45S → 45
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!m) return 0;
  return (parseInt(m[1] || '0') * 3600) + (parseInt(m[2] || '0') * 60) + parseInt(m[3] || '0');
}

export async function GET() {
  const videos = getAllVideos();

  const urlBlocks = videos.map(v => {
    const pageUrl = `${SITE_BASE_URL}/videos/${v.id}`;
    const ytUrl = `https://www.youtube.com/watch?v=${v.youtubeId}`;
    const embedUrl = `https://www.youtube.com/embed/${v.youtubeId}`;
    const duration = isoToSeconds(v.duration);
    const tags = (v.keywords || '').split(',').map(k => k.trim()).filter(Boolean).slice(0, 5);

    return `  <url>
    <loc>${pageUrl}</loc>
    <lastmod>${v.uploadDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${v.thumbnailUrl}</image:loc>
      <image:title>${v.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;')}</image:title>
    </image:image>
    <video:video>
      <video:thumbnail_loc>${v.thumbnailUrl}</video:thumbnail_loc>
      <video:title>${v.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;')}</video:title>
      <video:description>${v.description.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;').slice(0, 2048)}</video:description>
      <video:content_loc>${ytUrl}</video:content_loc>
      <video:player_loc>${embedUrl}</video:player_loc>${duration > 0 ? `\n      <video:duration>${duration}</video:duration>` : ''}
      <video:publication_date>${v.uploadDate}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:live>no</video:live>${tags.map(t => `\n      <video:tag>${t.replace(/&/g, '&amp;')}</video:tag>`).join('')}
      <video:category>${(v.category || 'Education').replace(/&/g, '&amp;')}</video:category>
    </video:video>
  </url>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlBlocks}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
