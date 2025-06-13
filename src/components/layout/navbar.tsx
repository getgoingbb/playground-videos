import Link from 'next/link';
import { PlaySquare } from 'lucide-react';

export function Navbar() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <PlaySquare size={32} />
          <h1 className="text-2xl font-headline font-semibold">Playground Videos</h1>
        </Link>
        {/* Future navigation items can go here */}
      </div>
    </header>
  );
}
