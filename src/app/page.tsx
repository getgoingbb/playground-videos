
import { getAllVideos } from '@/lib/videos';
import { VideoCard } from '@/components/video/video-card';

export default function HomePage() {
  const videos = getAllVideos();
  const categories = Array.from(new Set(videos.map(v => v.category).filter(Boolean)));

  return (
    <div>
      {/* Hero */}
      <section
        className="text-center py-16 px-4"
        style={{ background: 'linear-gradient(135deg, #07142a 0%, #0f172a 60%, #1e1b4b 100%)' }}
      >
        <div className="max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', color: '#fbbf24' }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#f59e0b' }}></span>
            {videos.length} Free Videos — Stephen Jepson
          </div>
          <h1 className="text-4xl sm:text-5xl font-headline font-black mb-4 text-white leading-tight">
            Never Leave The<br />
            <span style={{ color: '#f59e0b' }}>Playground</span> Video Library
          </h1>
          <p className="text-lg max-w-xl mx-auto mb-8" style={{ color: '#94a3b8' }}>
            At 85, Stephen Jepson proves that movement, balance, and play are the keys to a longer, sharper, more joyful life. Watch, learn, and never stop moving.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://shop.neverleavetheplayground.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-bold text-sm transition-opacity hover:opacity-90"
              style={{ background: '#f59e0b', color: '#07142a' }}
            >
              Get Full Video Programs →
            </a>
            <a
              href="https://keynote-speaker.neverleavetheplayground.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:bg-white/10"
              style={{ border: '1.5px solid rgba(255,255,255,0.3)', color: '#e2e8f0' }}
            >
              Book Stephen to Speak
            </a>
          </div>
        </div>
      </section>

      {/* Thin gold bar */}
      <div style={{ height: 3, background: 'linear-gradient(90deg, #f59e0b, #fbbf24)' }}></div>

      {/* Stats strip */}
      <div style={{ background: '#0e2040', padding: '16px 24px' }}>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm font-semibold" style={{ color: '#94a3b8' }}>
          <span style={{ color: '#fbbf24' }}>✦ TEDx Speaker</span>
          <span style={{ color: '#fbbf24' }}>✦ 85 Years Young</span>
          <span style={{ color: '#fbbf24' }}>✦ 50+ Years of Daily Play</span>
          <span style={{ color: '#fbbf24' }}>✦ Master Potter &amp; Educator</span>
          <span style={{ color: '#fbbf24' }}>✦ 2,500+ Students</span>
        </div>
      </div>

      {/* Shop CTA strip */}
      <div style={{ background: '#07142a', borderTop: '1px solid rgba(245,158,11,0.3)', borderBottom: '1px solid rgba(245,158,11,0.3)' }}>
        <div className="max-w-4xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold text-base leading-snug">
              Want the complete program? Two full-length videos — $9.99 each, or bundle both for $12.99.
            </p>
            <p style={{ color: '#94a3b8' }} className="text-sm mt-0.5">
              Instant download · Own forever · No subscription
            </p>
          </div>
          <a
            href="https://shop.neverleavetheplayground.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-xl font-bold text-sm transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{ background: '#f59e0b', color: '#07142a' }}
          >
            Get Full Programs — from $9.99 →
          </a>
        </div>
      </div>

      {/* Video grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
        {videos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No videos available at the moment. Please check back later.</p>
        )}
      </div>
    </div>
  );
}
