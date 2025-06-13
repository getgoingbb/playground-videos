
export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  description:string;
  thumbnailUrl: string;
  uploadDate: string; // YYYY-MM-DD
  duration: string; // ISO 8601 format e.g., PT1M30S
  keywords?: string; // Comma-separated
  category?: string;
}

export const videos: Video[] = [
  {
    id: 'stephen-jepson-interview-kickoff',
    youtubeId: 'ycJwrwrYgGM',
    title: "The Interview That Started It All: Stephen Jepson's Journey",
    description: "Watch the viral interview that introduced Stephen Jepson and his 'Never Leave The Playground' philosophy to the world. A testament to lifelong agility and play.",
    thumbnailUrl: 'https://i.ytimg.com/vi/ycJwrwrYgGM/hqdefault.jpg',
    uploadDate: '2013-03-20',
    duration: 'PT7M1S',
    keywords: 'stephen jepson, interview, viral video, agility, play, movement, inspiration, never leave the playground',
    category: 'Interviews',
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
  {
    id: 'dynamic-balance-playful-movement',
    youtubeId: 'm6KrVBWtE_0',
    title: 'Dynamic Balance and Playful Movement Techniques',
    description: 'Explore dynamic balance exercises and playful movements. This video showcases engaging activities to help improve agility and coordination for all ages, inspired by a life of continuous play.',
    thumbnailUrl: 'https://i.ytimg.com/vi/m6KrVBWtE_0/hqdefault.jpg',
    uploadDate: '2023-10-26', // Placeholder date, actual date might vary
    duration: 'PT3M45S', // Placeholder duration, actual duration might vary
    keywords: 'dynamic balance, playful movement, agility, coordination, exercise, active lifestyle, stephen jepson style',
    category: 'Exercise & Movement',
  },
];

export function getVideoById(id: string): Video | undefined {
  return videos.find(video => video.id === id);
}

export function getAllVideos(): Video[] {
  return videos;
}
