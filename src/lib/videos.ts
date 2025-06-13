
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
    uploadDate: '2023-10-26',
    duration: 'PT3M45S',
    keywords: 'dynamic balance, playful movement, agility, coordination, exercise, active lifestyle, stephen jepson style',
    category: 'Exercise & Movement',
  },
  {
    id: 'improve-balance-coordination-daily',
    youtubeId: 'eICg4CMd2jU',
    title: 'Daily Exercises for Better Balance & Coordination',
    description: 'Stephen Jepson demonstrates a series of daily exercises focused on enhancing balance, coordination, and overall physical agility. Suitable for all skill levels.',
    thumbnailUrl: 'https://i.ytimg.com/vi/eICg4CMd2jU/hqdefault.jpg',
    uploadDate: '2023-11-01', 
    duration: 'PT4M10S', 
    keywords: 'balance exercises, coordination training, daily fitness, agility, stephen jepson, physical health',
    category: 'Health & Fitness',
  },
  {
    id: 'playful-agility-drills',
    youtubeId: 'nUCFtUEOOcs',
    title: 'Playful Agility Drills for Enhanced Movement',
    description: 'Join in with these playful agility drills designed to boost your coordination, sharpen your reflexes, and make fitness fun. Great for all ages looking to add some pep to their step!',
    thumbnailUrl: 'https://i.ytimg.com/vi/nUCFtUEOOcs/hqdefault.jpg',
    uploadDate: '2023-11-05',
    duration: 'PT3M52S',
    keywords: 'agility drills, playful fitness, coordination, reflexes, movement exercise, stephen jepson inspired',
    category: 'Exercise & Movement',
  },
  {
    id: 'juggling-for-brain-health',
    youtubeId: '-UdbdDNomTc',
    title: 'Juggling for Brain Health and Coordination',
    description: 'Discover the cognitive and physical benefits of juggling with Stephen Jepson. A fun way to improve focus, coordination, and brain function.',
    thumbnailUrl: 'https://i.ytimg.com/vi/-UdbdDNomTc/hqdefault.jpg',
    uploadDate: '2023-11-10',
    duration: 'PT4M15S',
    keywords: 'juggling, brain health, coordination, cognitive function, focus, stephen jepson, skill development',
    category: 'Skill Development',
  },
  {
    id: 'senior-fitness-play',
    youtubeId: 'Uh45aUEgYQY',
    title: 'Staying Active: Senior Fitness and Play',
    description: 'Stephen Jepson shares tips and exercises for seniors to stay active, maintain mobility, and embrace the joy of play in their daily lives.',
    thumbnailUrl: 'https://i.ytimg.com/vi/Uh45aUEgYQY/hqdefault.jpg',
    uploadDate: '2023-11-15', 
    duration: 'PT5M05S', 
    keywords: 'senior fitness, active aging, mobility, play, exercise for seniors, stephen jepson',
    category: 'Health & Fitness',
  },
  {
    id: 'balance-coordination-exercises',
    youtubeId: 'M9vm5_-lE3U',
    title: 'Balance and Coordination Exercises with Stephen Jepson',
    description: 'Improve your balance and coordination with these targeted exercises demonstrated by Stephen Jepson. Enhance stability and movement control.',
    thumbnailUrl: 'https://i.ytimg.com/vi/M9vm5_-lE3U/hqdefault.jpg',
    uploadDate: '2023-11-20',
    duration: 'PT3M30S',
    keywords: 'balance, coordination, stability, movement control, exercise, stephen jepson',
    category: 'Exercise & Movement',
  },
  {
    id: 'advanced-agility-coordination',
    youtubeId: 'bOP7AdJ0OXU',
    title: 'Advanced Agility and Coordination Drills',
    description: 'Challenge yourself with these advanced agility and coordination drills by Stephen Jepson, designed to push your limits and enhance your physical capabilities.',
    thumbnailUrl: 'https://i.ytimg.com/vi/bOP7AdJ0OXU/hqdefault.jpg',
    uploadDate: '2023-11-25', // Placeholder date
    duration: 'PT4M20S', // Placeholder duration
    keywords: 'advanced agility, coordination drills, physical challenge, stephen jepson, high intensity',
    category: 'Exercise & Movement',
  }
];

export function getVideoById(id: string): Video | undefined {
  return videos.find(video => video.id === id);
}

export function getAllVideos(): Video[] {
  return videos;
}

