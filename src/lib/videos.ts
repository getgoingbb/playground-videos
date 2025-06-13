export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string; // YYYY-MM-DD
  duration: string; // ISO 8601 format e.g., PT1M30S
  keywords?: string; // Comma-separated
  category?: string;
}

export const videos: Video[] = [
  {
    id: 'intro-never-leave-playground',
    youtubeId: '_gW22_aK4gU',
    title: 'Jepson: Never Leave the Playground - Intro',
    description: "Introduction to Stephen Jepson's Never Leave the Playground program. Discover the importance of play and movement for all ages.",
    thumbnailUrl: 'https://i.ytimg.com/vi/_gW22_aK4gU/hqdefault.jpg',
    uploadDate: '2012-09-18',
    duration: 'PT3M25S',
    keywords: 'play, movement, stephen jepson, coordination, agility, balance',
    category: 'Health & Fitness',
  },
  {
    id: 'hand-eye-foot-coordination',
    youtubeId: 'y44nQ4tKi5E',
    title: 'Hand, Eye, Foot Coordination with Stephen Jepson',
    description: 'Learn exercises to improve hand, eye, and foot coordination. Stephen Jepson demonstrates simple yet effective techniques.',
    thumbnailUrl: 'https://i.ytimg.com/vi/y44nQ4tKi5E/hqdefault.jpg',
    uploadDate: '2013-05-21',
    duration: 'PT2M38S',
    keywords: 'coordination, hand-eye coordination, foot coordination, exercise, stephen jepson',
    category: 'Education',
  },
  {
    id: 'agility-balance-coordination-abcs',
    youtubeId: 'XyX4b3_gZlM',
    title: 'Agility, Balance, Coordination (ABCs) for All Ages!',
    description: 'Stephen Jepson shares his secrets to maintaining agility, balance, and coordination (ABCs) throughout life. Fun and engaging exercises for everyone.',
    thumbnailUrl: 'https://i.ytimg.com/vi/XyX4b3_gZlM/hqdefault.jpg',
    uploadDate: '2020-01-15',
    duration: 'PT5M1S',
    keywords: 'agility, balance, coordination, ABCs, fitness, all ages, stephen jepson',
    category: 'Health & Fitness',
  },
  {
    id: 'never-stop-playing',
    youtubeId: 'r2nE_crkH5Y',
    title: 'Never Stop Playing: Stephen Jepson at TEDxOcala',
    description: 'At 72, Stephen Jepson shows us that age is no barrier to being agile, balanced and coordinated. He lives a unique lifestyle of \'never leaving the playground\' by constantly challenging himself.',
    thumbnailUrl: 'https://i.ytimg.com/vi/r2nE_crkH5Y/hqdefault.jpg',
    uploadDate: '2014-01-23',
    duration: 'PT18M1S',
    keywords: 'TEDx, play, lifelong learning, agility, balance, coordination, stephen jepson',
    category: 'Talks',
  },
];

export function getVideoById(id: string): Video | undefined {
  return videos.find(video => video.id === id);
}

export function getAllVideos(): Video[] {
  return videos;
}
