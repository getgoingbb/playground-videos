
import Link from 'next/link';

export function Footer() {
  return (
    <>
      {/* CTA Block */}
      <section style={{
        background: 'linear-gradient(135deg, #14532d, #166534)',
        padding: '60px 24px',
        textAlign: 'center',
        color: '#fff',
      }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 800, margin: '0 0 16px', lineHeight: 1.2 }}>
          Ready to Never Leave The Playground?
        </h2>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: 600, margin: '0 auto 32px', lineHeight: 1.6 }}>
          Stephen&apos;s video program has helped thousands rebuild balance, coordination, and confidence &mdash; at any age.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="https://jepsonpotteryvideos.com/" target="_blank"
            style={{ display: 'inline-block', background: '#facc15', color: '#14532d', padding: '14px 28px', borderRadius: 8, fontWeight: 700, textDecoration: 'none' }}>
            Get Stephen&apos;s Videos &rarr;
          </Link>
          <Link href="https://neverleavetheplayground.com/" target="_blank"
            style={{ display: 'inline-block', border: '2px solid #fff', color: '#fff', padding: '14px 28px', borderRadius: 8, fontWeight: 600, textDecoration: 'none' }}>
            Learn the Program
          </Link>
          <Link href="https://playgrounds.neverleavetheplayground.com/" target="_blank"
            style={{ display: 'inline-block', border: '2px solid #fff', color: '#fff', padding: '14px 28px', borderRadius: 8, fontWeight: 600, textDecoration: 'none' }}>
            Find a Playground
          </Link>
        </div>
      </section>

      {/* Network Footer */}
      <footer style={{ background: '#0f172a', color: '#94a3b8', padding: '32px 24px', textAlign: 'center', fontSize: 14 }}>
        <p style={{ fontWeight: 700, color: '#e2e8f0', margin: '0 0 12px' }}>Never Leave The Playground &mdash; Network</p>
        <nav style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px 20px', marginBottom: 16 }}>
          {[
            { href: 'https://neverleavetheplayground.com/', label: 'Home' },
            { href: 'https://blog.neverleavetheplayground.com/', label: 'Blog' },
            { href: 'https://videos.neverleavetheplayground.com/', label: 'Videos' },
            { href: 'https://slides.neverleavetheplayground.com/', label: 'Slides' },
            { href: 'https://speaker.neverleavetheplayground.com/', label: 'Stephen Speaks' },
            { href: 'https://au.neverleavetheplayground.com/', label: 'Australia' },
            { href: 'https://playgrounds.neverleavetheplayground.com/', label: 'Find Playgrounds' },
            { href: 'https://jepsonpotteryvideos.com/', label: 'Pottery Videos' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} target="_blank" style={{ color: '#86efac', textDecoration: 'none' }}>
              {label}
            </Link>
          ))}
        </nav>
        <p style={{ margin: 0, fontSize: 12 }}>&copy; {new Date().getFullYear()} Stephen Jepson &mdash; Never Leave The Playground</p>
      </footer>
    </>
  );
}
