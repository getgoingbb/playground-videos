
import Link from 'next/link';

const SOCIAL_LINKS = [
  { href: 'https://www.facebook.com/stephen.jepson.56/', title: 'Facebook', bg: '#1877f2', glow: 'rgba(24,119,242,.4)', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { href: 'https://www.instagram.com/jepsonpotteryvideos/', title: 'Instagram', bg: 'linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)', glow: 'rgba(225,48,108,.4)', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
  { href: 'https://x.com/stephenjepson56', title: 'X', bg: '#000', glow: 'rgba(0,0,0,.4)', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { href: 'https://www.youtube.com/watch?v=1-guBd_m6vI', title: 'YouTube', bg: '#ff0000', glow: 'rgba(255,0,0,.4)', icon: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
  { href: 'https://www.pinterest.com/stephenjepson56/', title: 'Pinterest', bg: '#e60023', glow: 'rgba(230,0,35,.4)', icon: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z' },
  { href: 'https://www.linkedin.com/in/stephen-jepson-25577a56', title: 'LinkedIn', bg: '#0a66c2', glow: 'rgba(10,102,194,.4)', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { href: 'https://www.etsy.com/listing/837541409/stephen-jepson-studio-pottery-mugs?show_sold_out_detail=1&ref=nla_listing_details', title: 'Etsy', bg: '#f1641e', glow: 'rgba(241,100,30,.4)', icon: 'M8.559 3.074c0-.36.017-.747.036-1.108.072-.468.396-.648 1.044-.648h6.481c.612 0 1.044.216 1.044.864v2.736c0 .576-.36.864-.936.864h-.324c-.576 0-.648-.36-.792-.864-.36-1.368-.756-1.8-2.412-1.8h-1.944c-.684 0-.864.252-.864.864v5.508h2.412c.648 0 1.116-.108 1.332-.864l.324-1.116c.144-.504.36-.72.864-.72h.36c.576 0 .864.288.864.864v5.4c0 .576-.288.864-.864.864h-.36c-.504 0-.72-.216-.864-.72l-.324-1.116c-.216-.756-.684-.864-1.332-.864H9.813v4.896c0 .648.252.864.864.864h2.304c2.088 0 2.628-.576 3.24-2.232.18-.504.36-.756.864-.756h.36c.576 0 .864.288.864.864v3.24c0 .684-.432.936-1.044.936H7.875c-.648 0-1.044-.18-1.044-.648 0-.144.036-.36.036-.54.072-.468.468-.684 1.044-.684h.648v-14.4z' },
  { href: 'https://en.wikipedia.org/wiki/Stephen_Jepson', title: 'Wikipedia', bg: '#636466', glow: 'rgba(99,100,102,.4)', icon: 'M12.09 13.119c-.936 1.932-2.217 4.548-2.853 5.728-.616 1.074-1.127.975-1.532.059-.388-.909-2.388-6.788-3.079-8.686-.645-1.764-1.204-1.96-1.991-2.052-.34-.036-.672-.088-.88-.12-.265-.039-.388-.181-.388-.36 0-.234.18-.36.54-.36h3.42c.36 0 .54.126.54.36 0 .18-.108.324-.378.36-.506.072-.906.216-.906.648 0 .252.072.54.234 1.008l2.39 6.724c.09.252.18.252.27 0l1.206-2.676-.762-1.584c-.396-.828-.756-1.62-1.44-3.06-.396-.828-.828-1.044-1.332-1.08-.306-.018-.54-.144-.54-.36 0-.234.18-.36.54-.36h3.06c.36 0 .504.126.504.36 0 .216-.18.342-.432.36-.396.036-.612.18-.612.432 0 .18.072.396.234.72l1.26 2.628c.072.144.144.144.216 0l1.17-2.376c.216-.432.324-.756.324-1.008 0-.36-.252-.432-.756-.432-.252-.018-.468-.144-.468-.36 0-.234.18-.36.54-.36h2.34c.36 0 .54.126.54.36 0 .216-.144.342-.432.36-.756.054-1.08.432-1.692 1.584l-1.584 3.096 1.098 2.28 2.646-6.696c.144-.36.216-.72.216-.972 0-.324-.252-.396-.72-.432-.252-.018-.432-.144-.432-.36 0-.234.18-.36.54-.36h2.52c.36 0 .54.126.54.36 0 .216-.144.342-.432.36-.684.054-1.044.36-1.476 1.44l-3.546 8.832c-.432 1.08-.864 1.164-1.368.144z' },
];

export function Footer() {
  const handleShare = (url: string) => {
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <>
      {/* Social Section */}
      <div style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', padding: '48px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', margin: '0 0 8px' }}>Connect with Stephen Jepson</h2>
        <p style={{ fontSize: '.9rem', color: '#94a3b8', margin: '0 0 24px' }}>Follow Stephen&apos;s journey — 93 years young and still playing every day</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, marginBottom: 32 }}>
          {SOCIAL_LINKS.map(s => (
            <a key={s.title} href={s.href} target="_blank" rel="noopener noreferrer" title={s.title}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, borderRadius: 12, background: s.bg, color: '#fff', textDecoration: 'none', transition: 'transform .2s, box-shadow .2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = `0 6px 20px ${s.glow}`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d={s.icon}/></svg>
            </a>
          ))}
        </div>
        <div style={{ width: 60, height: 2, background: 'linear-gradient(90deg, #4ecdc4, #f59e0b)', margin: '0 auto 24px', borderRadius: 2 }} />
        <p style={{ fontSize: '.85rem', fontWeight: 600, color: '#94a3b8', margin: '0 0 14px' }}>Share This Page</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
          <button onClick={() => handleShare(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`)} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', borderRadius: 8, background: 'rgba(24,119,242,.15)', color: '#5b9bf5', fontSize: '.8rem', fontWeight: 600, border: '1px solid rgba(24,119,242,.25)', cursor: 'pointer' }}>
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            Share
          </button>
          <button onClick={() => handleShare(`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(typeof document !== 'undefined' ? document.title : '')}`)} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', borderRadius: 8, background: 'rgba(255,255,255,.08)', color: '#e2e8f0', fontSize: '.8rem', fontWeight: 600, border: '1px solid rgba(255,255,255,.15)', cursor: 'pointer' }}>
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            Post
          </button>
          <button onClick={() => handleShare(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&description=${encodeURIComponent(typeof document !== 'undefined' ? document.title : '')}`)} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', borderRadius: 8, background: 'rgba(230,0,35,.12)', color: '#ff5c83', fontSize: '.8rem', fontWeight: 600, border: '1px solid rgba(230,0,35,.25)', cursor: 'pointer' }}>
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z"/></svg>
            Pin
          </button>
          <button onClick={() => handleShare(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`)} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', borderRadius: 8, background: 'rgba(10,102,194,.12)', color: '#5b9bf5', fontSize: '.8rem', fontWeight: 600, border: '1px solid rgba(10,102,194,.25)', cursor: 'pointer' }}>
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            Share
          </button>
        </div>
      </div>

      {/* CTA Block */}
      <section style={{
        background: 'linear-gradient(135deg, #0e2040, #1e3a6e)',
        padding: '60px 24px',
        textAlign: 'center',
        color: '#fff',
      }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 800, margin: '0 0 16px', lineHeight: 1.2 }}>
          Ready to Never Leave The Playground?
        </h2>
        <p style={{ fontSize: '1.1rem', opacity: 0.85, maxWidth: 600, margin: '0 auto 32px', lineHeight: 1.6 }}>
          Stephen&apos;s video program has helped thousands rebuild balance, coordination, and confidence &mdash; at any age.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="https://shop.neverleavetheplayground.com/" target="_blank"
            style={{ display: 'inline-block', background: '#f59e0b', color: '#07142a', padding: '14px 28px', borderRadius: 8, fontWeight: 700, textDecoration: 'none' }}>
            Get Stephen&apos;s Videos &rarr;
          </Link>
          <Link href="https://keepmoving.neverleavetheplayground.com/" target="_blank"
            style={{ display: 'inline-block', border: '2px solid rgba(255,255,255,0.6)', color: '#fff', padding: '14px 28px', borderRadius: 8, fontWeight: 600, textDecoration: 'none' }}>
            Learn the Program
          </Link>
          <Link href="https://keynote-speaker.neverleavetheplayground.com/#book" target="_blank"
            style={{ display: 'inline-block', border: '2px solid rgba(255,255,255,0.6)', color: '#fff', padding: '14px 28px', borderRadius: 8, fontWeight: 600, textDecoration: 'none' }}>
            Book Stephen
          </Link>
        </div>
      </section>

      {/* Network Footer */}
      <footer style={{ background: '#030b18', color: '#94a3b8', padding: '32px 24px', textAlign: 'center', fontSize: 14 }}>
        <p style={{ fontWeight: 700, color: '#e2e8f0', margin: '0 0 12px' }}>Never Leave The Playground &mdash; Network</p>
        <nav style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px 20px', marginBottom: 16 }}>
          {[
            { href: 'https://neverleavetheplayground.com/', label: 'Home' },
            { href: 'https://keepmoving.neverleavetheplayground.com/', label: 'Keep Moving' },
            { href: 'https://keynote-speaker.neverleavetheplayground.com/', label: 'Keynote Speaker' },
            { href: 'https://blog.neverleavetheplayground.com/', label: 'Blog' },
            { href: 'https://shop.neverleavetheplayground.com/', label: 'Video Shop' },
            { href: 'https://slides.neverleavetheplayground.com/', label: 'Slides' },
            { href: 'https://au.neverleavetheplayground.com/', label: 'Australia' },
            { href: 'https://playgrounds.neverleavetheplayground.com/', label: 'Find Playgrounds' },
            { href: 'https://jepsonpotteryvideos.com/', label: 'Pottery Videos' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} target="_blank" style={{ color: '#fbbf24', textDecoration: 'none' }}>
              {label}
            </Link>
          ))}
        </nav>
        <p style={{ margin: 0, fontSize: 12 }}>&copy; {new Date().getFullYear()} Stephen Jepson &mdash; Never Leave The Playground</p>
        <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p style={{ margin: '0 0 12px', color: '#94a3b8', fontSize: 13 }}>Download the <strong style={{ color: '#e2e8f0' }}>Playground Finder</strong> App</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
            <a href="https://play.google.com/store/apps/details?id=com.neverleavetheplayground.playgroundfinder" target="_blank" rel="noopener noreferrer">
              <img src="/google-play.png" alt="Get it on Google Play" style={{ height: 40, borderRadius: 6 }} />
            </a>
            <a href="https://apps.microsoft.com/detail/9p76brrgkrbd?hl=en-US&gl=US" target="_blank" rel="noopener noreferrer">
              <img src="/ms-store.webp" alt="Download from Windows Store" style={{ height: 40, borderRadius: 6 }} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
