
import { getVideoById, getAllVideos, type Video } from '@/lib/videos';
import { YoutubeEmbed } from '@/components/video/youtube-embed';
import { VideoSchemaInjector } from '@/components/video/video-schema';
import type { GenerateVideoSchemaInput } from '@/ai/flows/generate-video-schema';
import {notFound} from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, Tag, Layers, ShoppingCart, ChevronLeft, ChevronRight, HomeIcon } from 'lucide-react';

interface VideoPageProps {
  params: {
    videoId: string;
  };
}

// TODO: Update this with your actual domain
const SITE_DOMAIN = 'example.com';
const SITE_PROTOCOL = 'https';
const SITE_BASE_URL = `${SITE_PROTOCOL}://${SITE_DOMAIN}`;
const SITE_NAME = 'Playground Videos';


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

  const pageUrl = new URL(`/videos/${video.id}`, SITE_BASE_URL).toString();
  const embedUrl = `https://www.youtube.com/embed/${video.youtubeId}`;
  const keywordsArray = video.keywords?.split(',').map(k => k.trim()) || [];

  return {
    title: video.title, // Uses template from layout.tsx: `${video.title} | Playground Videos`
    description: video.description,
    keywords: keywordsArray,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: video.title,
      description: video.description,
      url: pageUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: video.thumbnailUrl, // Expected to be absolute URL like i.ytimg.com
          width: 480, // Standard hqdefault.jpg size
          height: 360,
          alt: video.title,
        },
      ],
      type: 'video.other',
      videos: [
        {
          url: embedUrl, // URL to the player
          secureUrl: embedUrl,
          type: 'text/html', // For YouTube embeds this is appropriate
          width: 1280, // Standard HD dimensions
          height: 720,
        },
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'player',
      title: video.title,
      description: video.description,
      images: [video.thumbnailUrl], // URL of image to use in the card
      player: {
        url: embedUrl, // HTTPS URL of player iframe
        width: 1280,
        height: 720,
      },
    },
  };
}

export default async function VideoPage({ params }: VideoPageProps) {
  const video = getVideoById(params.videoId);

  if (!video) {
    notFound();
  }

  const allVideos = getAllVideos();
  const currentIndex = allVideos.findIndex(v => v.id === video.id);
  const prevVideo = currentIndex > 0 ? allVideos[currentIndex - 1] : null;
  const nextVideo = currentIndex < allVideos.length - 1 ? allVideos[currentIndex + 1] : null;

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
              <Link href={video.shopUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="default" size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                  <>
                    <ShoppingCart className="mr-2 h-4 w-4" /> Purchase Full Video
                  </>
                </Button>
              </Link>
            </section>
          )}
        </article>

        <section className="mt-12 py-8 border-t">
          <h2 className="text-xl font-headline font-semibold text-center mb-6">Continue Exploring</h2>
          <nav className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {prevVideo ? (
              <Link href={`/videos/${prevVideo.id}`} passHref>
                <Button variant="outline" className="w-full sm:w-auto">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Previous Video
                </Button>
              </Link>
            ) : (
              <Button variant="outline" className="w-full sm:w-auto" disabled>
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous Video
              </Button>
            )}

            <Link href="/" passHref>
              <Button variant="secondary" className="w-full sm:w-auto">
                <HomeIcon className="mr-2 h-4 w-4" />
                All Videos
              </Button>
            </Link>

            {nextVideo ? (
              <Link href={`/videos/${nextVideo.id}`} passHref>
                <Button variant="outline" className="w-full sm:w-auto">
                  Next Video
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <Button variant="outline" className="w-full sm:w-auto" disabled>
                Next Video
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </nav>
        </section>
      </div>
    </>
  );
}
