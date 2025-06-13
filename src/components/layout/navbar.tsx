import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="https://neverleavetheplayground.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image 
            src="/images/nlpg-logo.png" 
            alt="Never Leave The Playground Logo" 
            width={40} 
            height={40}
            className="rounded-sm" 
            data-ai-hint="playground logo"
          />
          <h1 className="text-2xl font-headline font-semibold">Playground Videos</h1>
        </Link>
        {/* Future navigation items can go here */}
      </div>
    </header>
  );
}
