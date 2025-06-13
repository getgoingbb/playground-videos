import Link from 'next/link';
import Image from 'next/image';
import type { Video } from '@/lib/videos';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <Link href={`/videos/${video.id}`} className="block group">
        <CardHeader className="p-0 relative">
          <div className="aspect-video relative w-full overflow-hidden">
            <Image
              src={video.thumbnailUrl}
              alt={`Thumbnail for ${video.title}`}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-colors duration-300 flex items-center justify-center">
              <PlayCircle className="h-16 w-16 text-white opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow flex flex-col">
          <CardTitle className="text-lg font-headline font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
            {video.title}
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground line-clamp-3 flex-grow">
            {video.description}
          </CardDescription>
        </CardContent>
      </Link>
      <div className="p-4 pt-0 mt-auto">
        <Link href={`/videos/${video.id}`} legacyBehavior passHref>
          <Button variant="outline" className="w-full hover:bg-accent hover:text-accent-foreground">
            Watch Video
          </Button>
        </Link>
      </div>
    </Card>
  );
}
