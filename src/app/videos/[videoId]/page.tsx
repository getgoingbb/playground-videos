
import { getVideoById, getAllVideos, type Video } from '@/lib/videos';
import { YoutubeEmbed } from '@/components/video/youtube-embed';
import { VideoSchemaInjector } from '@/components/video/video-schema';
import type { GenerateVideoSchemaInput } from '@/ai/flows/generate-video-schema';
import {notFound} from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, Tag, Layers, ShoppingCart } from 'lucide-react';

interface VideoPageProps {
  params: {
    videoId: string;
  };
}

export async function generateStaticParams() {
  const videos = getAllVideos();
  return videos.map((video) => ({
    videoId: video.id,
  }));
}

export async function generateMetadata({ params }: VideoPageProps): Promise<Metadata> {
  const video = getVideoById(params.videoId);

  if (!video) {
    return {
      title: 'Video Not Found',
    };
  }

  return {
    title: `${video.title} | Playground Videos`,
    description: video.description,
    // OpenGraph and Twitter card metadata could be added here for better social sharing
  };
}

export default async function VideoPage({ params }: VideoPageProps) {
  const video = getVideoById(params.videoId);

  if (!video) {
    notFound();
  }

  const videoDataForSchema: GenerateVideoSchemaInput = {
    title: video.title,
    description: video.description,
    uploadDate: video.uploadDate,
    duration: video.duration,
    thumbnailUrl: video.thumbnailUrl,
    videoUrl: `https://www.youtube.com/watch?v=${video.youtubeId}`,
    keywords: video.keywords,
    category: video.category,
  };

  return (
    <>
      <VideoSchemaInjector videoData={videoDataForSchema} />
      <div className="max-w-4xl mx-auto">
        <article className="bg-card p-6 sm:p-8 rounded-lg shadow-xl">
          <header className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-headline font-bold text-primary mb-3">
              {video.title}
            </h1>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CalendarDays size={16} /> Published: {new Date(video.uploadDate).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={16} /> Duration: {video.duration.replace('PT','').replace('M', 'm ').replace('S','s')}
              </span>
              {video.category && (
                <span className="flex items-center gap-1.5">
                  <Layers size={16} /> Category: {video.category}
                </span>
              )}
            </div>
          </header>

          <section className="mb-8">
            <YoutubeEmbed youtubeId={video.youtubeId} title={video.title} />
          </section>

          <section className="prose prose-sm sm:prose-base max-w-none text-foreground dark:prose-invert">
            <h2 className="text-2xl font-semibold mb-3 font-headline">About this video</h2>
            <p>{video.description}</p>
          </section>

          {video.keywords && (
            <section className="mt-8 pt-6 border-t">
              <h3 className="text-xl font-semibold mb-3 font-headline flex items-center gap-2">
                <Tag size={20} /> Keywords
              </h3>
              <div className="flex flex-wrap gap-2">
                {video.keywords.split(',').map((keyword) => (
                  <span key={keyword.trim()} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {keyword.trim()}
                  </span>
                ))}
              </div>
            </section>
          )}

          {video.isPremiumPreview && video.shopUrl && (
            <section className="mt-8 pt-6 border-t text-center">
              <p className="text-sm text-muted-foreground mb-2">
                This is a preview of exclusive content.
              </p>
              <Link href={video.shopUrl} target="_blank" rel="noopener noreferrer" passHref legacyBehavior>
                <Button variant="default" size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                  <a>
                    <ShoppingCart className="mr-2 h-4 w-4" /> Purchase Full Video
                  </a>
                </Button>
              </Link>
            </section>
          )}
        </article>
      </div>
    </>
  );
}
