
import Link from 'next/link';

export function Footer() {
  return (
    <>
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
