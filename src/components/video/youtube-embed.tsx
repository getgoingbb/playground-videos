interface YoutubeEmbedProps {
  youtubeId: string;
  title: string;
}

export function YoutubeEmbed({ youtubeId, title }: YoutubeEmbedProps) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg shadow-xl">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=0&modestbranding=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="border-0"
      ></iframe>
    </div>
  );
}
