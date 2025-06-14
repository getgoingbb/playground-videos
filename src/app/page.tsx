
import { getAllVideos } from '@/lib/videos';
import { VideoCard } from '@/components/video/video-card';
import { ToyBrick, Puzzle, Shapes } from 'lucide-react';

export default function HomePage() {
  const videos = getAllVideos();

  return (
    <div className="space-y-8">
      <section className="text-center py-8">
        <h1 className="text-4xl font-headline font-bold mb-4 text-primary">
          Explore Our Playground Videos
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover inspiring videos from Stephen Jepson's "Never Leave The Playground" program. Get ready to move, play, and embrace a healthier, more joyful life!
        </p>
        <div className="flex justify-center space-x-4 mt-6">
          <ToyBrick className="h-10 w-10 text-accent" />
          <Shapes className="h-10 w-10 text-primary" />
          <Puzzle className="h-10 w-10 text-accent" />
        </div>
      </section>

      <section>
        {videos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No videos available at the moment. Please check back later.</p>
        )}
      </section>
    </div>
  );
}
