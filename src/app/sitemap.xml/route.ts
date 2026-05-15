export const dynamic = 'force-static';

import { getAllVideos } from '@/lib/videos';

const SITE_BASE = 'https://videos.neverleavetheplayground.com';

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

function isoToSeconds(iso: string): number {
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!m) return 0;
  return (parseInt(m[1] || '0') * 3600) + (parseInt(m[2] || '0') * 60) + parseInt(m[3] || '0');
}

function videoBlock(v: ReturnType<typeof getAllVideos>[0]): string {
  const ytUrl   = `https://www.youtube.com/watch?v=${v.youtubeId}`;
  const embed   = `https://www.youtube.com/embed/${v.youtubeId}`;
  const dur     = isoToSeconds(v.duration);
  const tags    = (v.keywords || '').split(',').map(k => k.trim()).filter(Boolean).slice(0, 5);
  return `    <video:video>
      <video:thumbnail_loc>${v.thumbnailUrl}</video:thumbnail_loc>
      <video:title>${esc(v.title)}</video:title>
      <video:description>${esc(v.description.slice(0, 2048))}</video:description>
      <video:content_loc>${ytUrl}</video:content_loc>
      <video:player_loc>${embed}</video:player_loc>${dur > 0 ? `\n      <video:duration>${dur}</video:duration>` : ''}
      <video:publication_date>${v.uploadDate}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:live>no</video:live>${tags.map(t => `\n      <video:tag>${esc(t)}</video:tag>`).join('')}
      <video:category>${esc(v.category || 'Education')}</video:category>
    </video:video>`;
}

export async function GET() {
  const videos = getAllVideos();
  const today  = new Date().toISOString().split('T')[0];

  // ── Homepage — all thumbnails as image blocks + all videos as video blocks ──
  const homepageImageBlocks = videos.map(v => `    <image:image>
      <image:loc>${v.thumbnailUrl}</image:loc>
      <image:title>${esc(v.title)}</image:title>
    </image:image>`).join('\n');

  const homepageVideoBlocks = videos.map(v => videoBlock(v)).join('\n');

  const homepageEntry = `  <url>
    <loc>${SITE_BASE}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
${homepageImageBlocks}
${homepageVideoBlocks}
  </url>`;

  // ── Individual video pages — one image block + one video block each ──
  const videoEntries = videos.map(v => {
    const pageUrl = `${SITE_BASE}/videos/${v.id}`;
    return `  <url>
    <loc>${pageUrl}</loc>
    <lastmod>${v.uploadDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>${v.thumbnailUrl}</image:loc>
      <image:title>${esc(v.title)}</image:title>
    </image:image>
${videoBlock(v)}
  </url>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${homepageEntry}
${videoEntries}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
