
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: 'https://keepmoving.neverleavetheplayground.com/', label: 'The Program' },
  { href: 'https://keynote-speaker.neverleavetheplayground.com/', label: 'Speaking' },
  { href: 'https://shop.neverleavetheplayground.com/', label: 'Video Shop' },
  { href: 'https://blog.neverleavetheplayground.com/', label: 'Blog' },
];

export function Navbar() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link href="https://neverleavetheplayground.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity shrink-0">
            <Image
              src="/logo.png"
              alt="Never Leave The Playground Logo"
              width={38}
              height={38}
              className="rounded-sm"
              data-ai-hint="playground logo"
            />
          </Link>
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <h1 className="text-lg sm:text-xl font-headline font-bold leading-tight">
              Never Leave The Playground
              <span className="block text-xs font-normal opacity-75 tracking-wide">Video Library</span>
            </h1>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg text-sm font-medium opacity-85 hover:opacity-100 hover:bg-white/10 transition-all"
            >
              {label}
            </Link>
          ))}
          <Link
            href="https://keynote-speaker.neverleavetheplayground.com/#book"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 rounded-lg text-sm font-bold bg-accent text-accent-foreground hover:opacity-90 transition-all"
          >
            Book Stephen
          </Link>
        </nav>

        <Link
          href="https://shop.neverleavetheplayground.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden px-3 py-1.5 rounded-lg text-xs font-bold bg-accent text-accent-foreground"
        >
          Shop
        </Link>
      </div>
    </header>
  );
}
