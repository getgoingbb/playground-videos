
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
  isPremiumPreview?: boolean;
  shopUrl?: string;
}

// Updated video shop URL
const VIDEO_SHOP_URL = 'https://shop.neverleavetheplayground.com/';

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
    youtubeId: 'PiS-U-YukM4', // Updated
    title: 'Hand, Eye, Foot Coordination with Stephen Jepson',
    description: 'Learn exercises to improve hand, eye, and foot coordination. Stephen Jepson demonstrates simple yet effective techniques.',
    thumbnailUrl: 'https://i.ytimg.com/vi/PiS-U-YukM4/hqdefault.jpg', // Updated
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
    id: 'program-overview-informational',
    youtubeId: 'qh0PlR27qJ0',
    title: 'Understanding the Never Leave The Playground Program',
    description: "Get a deeper understanding of the Never Leave The Playground program, its philosophy, and how it can help you stay active and playful at any age. This video dives into the core principles of Stephen Jepson's approach to lifelong vitality.",
    thumbnailUrl: 'https://i.ytimg.com/vi/qh0PlR27qJ0/hqdefault.jpg',
    uploadDate: '2023-12-12',
    duration: 'PT6M30S',
    keywords: 'program overview, informational, never leave the playground, stephen jepson, philosophy, active lifestyle, play, vitality',
    category: 'Program Information',
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
    uploadDate: '2023-11-25',
    duration: 'PT4M20S',
    keywords: 'advanced agility, coordination drills, physical challenge, stephen jepson, high intensity',
    category: 'Exercise & Movement',
  },
  {
    id: 'unlocking-agility-at-any-age',
    youtubeId: 'EGvP_es007Q',
    title: 'Unlocking Agility: At Any Age',
    description: "Stephen Jepson shares his insights and techniques for maintaining and improving agility, balance, and coordination, no matter your age. Embrace playful movement and discover your potential.",
    thumbnailUrl: 'https://i.ytimg.com/vi/EGvP_es007Q/hqdefault.jpg',
    uploadDate: '2023-12-01',
    duration: 'PT4M30S',
    keywords: 'agility, balance, coordination, senior fitness, playful movement, stephen jepson, lifelong learning',
    category: 'Health & Fitness',
  },
  {
    id: 'living-proof-power-of-play',
    youtubeId: 'd3N2hsuVAt8',
    title: 'Living Proof: The Power of Playful Movement',
    description: 'A compelling look at how embracing a lifestyle of play and movement can lead to remarkable vitality and well-being, inspired by Stephen Jepson.',
    thumbnailUrl: 'https://i.ytimg.com/vi/d3N2hsuVAt8/hqdefault.jpg',
    uploadDate: '2023-12-05',
    duration: 'PT3M55S',
    keywords: 'testimonial, active living, inspiration, playful movement, vitality, well-being, stephen jepson',
    category: 'Testimonials',
  },
  {
    id: 'embracing-play-lifelong-vitality',
    youtubeId: 'zyb3cgksl84',
    title: 'Embracing Play: A Path to Lifelong Vitality',
    description: 'Explore the profound impact of continuous play and movement on maintaining youthfulness and vitality throughout life. An inspiring message in the spirit of Stephen Jepson.',
    thumbnailUrl: 'https://i.ytimg.com/vi/zyb3cgksl84/hqdefault.jpg',
    uploadDate: '2023-12-10',
    duration: 'PT4M00S',
    keywords: 'play, lifelong vitality, youthfulness, movement, inspiration, stephen jepson philosophy',
    category: 'Inspiration',
  },
  {
    id: 'preview-balance-coordination-essentials',
    youtubeId: 'kxFTnQadcPw',
    title: 'Preview: Balance & Coordination Essentials',
    description: 'A sneak peek into our premium video on mastering balance and coordination. Find the full version in our shop!',
    thumbnailUrl: 'https://i.ytimg.com/vi/kxFTnQadcPw/hqdefault.jpg',
    uploadDate: '2024-02-01',
    duration: 'PT0M45S',
    keywords: 'preview, balance, coordination, premium, video shop, exercise',
    category: 'Premium Previews',
    isPremiumPreview: true,
    shopUrl: VIDEO_SHOP_URL,
  },
  {
    id: 'preview-agility-movement-mastery',
    youtubeId: 'll6aoSmWzKY',
    title: 'Preview: Agility & Movement Mastery',
    description: 'Check out this preview of our exclusive agility and movement training video. Get the full content in our video shop!',
    thumbnailUrl: 'https://i.ytimg.com/vi/ll6aoSmWzKY/hqdefault.jpg',
    uploadDate: '2024-02-05',
    duration: 'PT0M55S',
    keywords: 'preview, agility, movement, premium, video shop, fitness',
    category: 'Premium Previews',
    isPremiumPreview: true,
    shopUrl: VIDEO_SHOP_URL,
  }
];

export function getVideoById(id: string): Video | undefined {
  return videos.find(video => video.id === id);
}

export function getAllVideos(): Video[] {
  // Sort videos to show newest first, but keep premium previews at the end
  const regularVideos = videos.filter(v => !v.isPremiumPreview);
  const premiumPreviews = videos.filter(v => v.isPremiumPreview);

  regularVideos.sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime());
  
  return [...regularVideos, ...premiumPreviews];
}

