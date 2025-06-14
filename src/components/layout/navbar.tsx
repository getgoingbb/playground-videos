
import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3"> {/* Group logo and site title */}
          <Link href="https://neverleavetheplayground.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <Image
              src="/logo.png"
              alt="Never Leave The Playground Logo"
              width={40}
              height={40}
              className="rounded-sm"
              data-ai-hint="playground logo"
            />
          </Link>
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <h1 className="text-xl sm:text-2xl font-headline font-semibold">Never Leave The Playground Videos</h1>
          </Link>
        </div>
        {/* Future navigation items can go here */}
      </div>
    </header>
  );
}
