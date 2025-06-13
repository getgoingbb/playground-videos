
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Info, Users, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Link href="https://neverleavetheplayground.com" target="_blank" rel="noopener noreferrer" className="group">
            <Button variant="link" className="text-lg text-foreground group-hover:text-primary transition-colors">
              <Info className="mr-2 h-5 w-5" />
              Learn More About The Program
            </Button>
          </Link>
          <Link href="https://speaker.neverleavetheplayground.com" target="_blank" rel="noopener noreferrer" className="group">
            <Button variant="link" className="text-lg text-foreground group-hover:text-primary transition-colors">
              <Users className="mr-2 h-5 w-5" />
              Learn About Speaking Events
            </Button>
          </Link>
          <Link href="https://playgrounds.neverleavetheplayground.com/playground-finder" target="_blank" rel="noopener noreferrer" className="group">
            <Button variant="link" className="text-lg text-foreground group-hover:text-primary transition-colors">
              <MapPin className="mr-2 h-5 w-5" />
              Find a Playground Near You
            </Button>
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Playground Videos. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Inspired by Stephen Jepson's Never Leave The Playground.
        </p>
      </div>
    </footer>
  );
}
