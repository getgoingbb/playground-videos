interface VideoSchemaProps {
  videoData: {
    title: string;
    description: string;
    uploadDate: string;
    duration: string;
    thumbnailUrl: string;
    videoUrl?: string;
    keywords?: string;
    category?: string;
  };
}

function extractYouTubeId(url: string): string | null {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=))([a-zA-Z0-9_-]{11})/);
  return m ? m[1] : null;
}

export function VideoSchemaInjector({ videoData }: VideoSchemaProps) {
  if (!videoData.videoUrl) return null;

  const ytId = extractYouTubeId(videoData.videoUrl);

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": videoData.title,
    "description": videoData.description,
    "thumbnailUrl": videoData.thumbnailUrl,
    "uploadDate": videoData.uploadDate,
    "duration": videoData.duration,
    "contentUrl": videoData.videoUrl,
    "publisher": {
      "@type": "Organization",
      "name": "Never Leave The Playground",
      "url": "https://videos.neverleavetheplayground.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://videos.neverleavetheplayground.com/logo.png"
      }
    },
    "author": {
      "@type": "Person",
      "name": "Stephen Jepson",
      "url": "https://neverleavetheplayground.com/about"
    },
    "inLanguage": "en-US",
    "interactionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": "https://schema.org/WatchAction",
      "userInteractionCount": 0
    }
  };

  if (ytId) {
    schema.embedUrl = `https://www.youtube.com/embed/${ytId}`;
  }
  if (videoData.keywords) {
    schema.keywords = videoData.keywords;
  }
  if (videoData.category) {
    schema.genre = videoData.category;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
