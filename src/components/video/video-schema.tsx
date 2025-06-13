// 'use server' component, but this will be used within a Server Component page.
// No 'use server' directive needed here directly if it's just an async Server Component.
import { generateVideoSchema, type GenerateVideoSchemaInput } from '@/ai/flows/generate-video-schema';

interface VideoSchemaProps {
  videoData: GenerateVideoSchemaInput;
}

export async function VideoSchemaInjector({ videoData }: VideoSchemaProps) {
  try {
    // Ensure all required fields are present for the AI flow
    const validatedVideoData: GenerateVideoSchemaInput = {
      title: videoData.title || "Untitled Video",
      description: videoData.description || "No description available.",
      uploadDate: videoData.uploadDate || new Date().toISOString().split('T')[0], // Fallback to current date
      duration: videoData.duration || "PT1M", // Fallback to 1 minute
      thumbnailUrl: videoData.thumbnailUrl || "https://placehold.co/600x400.png", // Fallback placeholder
      videoUrl: videoData.videoUrl, // This is crucial and should ideally always be present
      keywords: videoData.keywords,
      category: videoData.category,
    };
    
    if (!validatedVideoData.videoUrl) {
      console.warn("VideoSchemaInjector: videoUrl is missing. Schema might be incomplete or invalid.");
      return null;
    }

    const { schemaMarkup } = await generateVideoSchema(validatedVideoData);
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaMarkup }}
      />
    );
  } catch (error) {
    console.error("Error generating video schema:", error);
    // Optionally return a basic schema or nothing
    const fallbackSchema = {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": videoData.title || "Untitled Video",
      "description": videoData.description || "No description available.",
      "thumbnailUrl": videoData.thumbnailUrl || "https://placehold.co/600x400.png",
      "uploadDate": videoData.uploadDate || new Date().toISOString().split('T')[0],
      "duration": videoData.duration || "PT1M",
      "contentUrl": videoData.videoUrl,
      // "embedUrl": `https://www.youtube.com/embed/${videoData.videoUrl.split('v=')[1]}` // Example if videoUrl is watch?v=...
    };
    if (videoData.videoUrl) {
       (fallbackSchema as any).contentUrl = videoData.videoUrl;
       const youtubeIdMatch = videoData.videoUrl.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
       if (youtubeIdMatch && youtubeIdMatch[1]) {
         (fallbackSchema as any).embedUrl = `https://www.youtube.com/embed/${youtubeIdMatch[1]}`;
       }
    }

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fallbackSchema) }}
      />
    );
  }
}
