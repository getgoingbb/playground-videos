
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
  price?: number;
  payhipProductId?: string;
}

// Updated video shop URL
const VIDEO_SHOP_URL = 'https://shop.neverleavetheplayground.com/';

export const videos: Video[] = [
  {
    id: 'stephen-jepson-interview-kickoff',
    youtubeId: 'ycJwrwrYgGM',
    title: "The Interview That Started It All: Stephen Jepson's Journey",
    description: "Watch the interview that launched a movement — Stephen Jepson's 'Never Leave The Playground' philosophy introduced to the world at 70+ years old, juggling, balancing, and thriving. This viral conversation reveals how daily play builds unbreakable balance, coordination, and brain health no matter your age. Ideal for anyone curious about active aging, fall prevention, and living with genuine lifelong vitality.",
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
    description: 'Discover how hand, eye, and foot coordination training transforms your movement quality and sharpens your mind, as demonstrated by Stephen Jepson. These simple yet powerful exercises build neural pathways that support balance, reflexes, and fall prevention for all ages. A perfect starting point for seniors and active adults ready to reclaim their coordination and agility.',
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
    description: 'Learn the ABCs of agility, balance, and coordination — the three pillars of lifelong movement health — with Stephen Jepson. These fun, accessible exercises enhance brain health, improve stability, and reduce fall risk while keeping fitness enjoyable for all ages. Whether you\'re a senior looking to stay active or an adult wanting sharper movement skills, this video is your essential guide.',
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
    description: 'In his TEDxOcala talk, Stephen Jepson — at 72 years old — proves that lifelong agility, balance, and coordination are achievable at any age through the power of play. Discover the science and philosophy behind "Never Leave The Playground": how daily playful movement rewires the brain, prevents falls, and generates unstoppable vitality. A must-watch for anyone committed to active aging and living a longer, more vibrant life.',
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
    description: "Stephen Jepson built his \"Never Leave The Playground\" method over 50+ years of daily movement practice — this video is the clearest explanation of what it is and why it works. You'll learn why play-based exercise outperforms traditional gym workouts for seniors: it trains the nervous system, not just the muscles. Watch this first if you're new to the program and want to understand the philosophy before diving into the exercises.",
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
    description: "Stephen Jepson demonstrates dynamic balance drills that challenge your body to stabilize in motion — the exact skill that prevents falls in real-world situations. Unlike static balance exercises, these playful movements retrain your nervous system to respond faster and more accurately as you move through space. Short, practical, and immediately usable for seniors and active adults at any fitness level.",
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
    description: "These are the specific exercises Stephen Jepson himself does every single day to maintain his extraordinary balance and coordination at age 85. Each drill is designed to be done in a small space with no equipment, making daily practice genuinely achievable. Regular repetition of these movements builds the neural connections that keep you steady, sharp, and fall-resistant year after year.",
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
    description: "Agility — the ability to change direction quickly and with control — is one of the first things adults lose with age, and one of the most important to keep. Stephen Jepson's playful agility drills retrain that responsiveness in a way that feels more like a game than a workout, which means you'll actually do them. These short drills sharpen reaction time, improve footwork, and build the confident, quick movement that protects you from falls.",
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
    description: "Juggling is one of the few physical activities scientifically documented to grow gray matter in the brain — and Stephen Jepson has juggled daily for decades. This video breaks down how to start with even one ball and build toward patterns that force both hemispheres of the brain to cooperate, enhancing focus, timing, and hand-eye coordination simultaneously. One of the most efficient brain health practices you can do in under five minutes a day.",
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
    description: "What separates Stephen Jepson from every other senior fitness expert is that his workouts look nothing like workouts — they look like play. This video explores how that distinction matters: playful movement engages the brain differently than structured exercise, building coordination, balance, and cognitive sharpness all at once. If traditional gym routines have bored or hurt you, this is the active aging approach worth trying.",
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
    description: "Stephen Jepson teaches balance and coordination sequences built on the principle that your body learns best through variety and challenge — not repetition of easy movements. Each exercise here is calibrated to stay just at the edge of your current ability, which is exactly where neural adaptation happens. Seniors who train this way consistently report dramatic improvements in steadiness, reaction speed, and confidence in everyday movement.",
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
    description: "Once you've built a foundation of balance, these advanced drills push your coordination into more complex, unpredictable territory — which is exactly where real-world movement happens. Stephen Jepson demonstrates combination patterns that challenge timing, rhythm, and spatial awareness all at once, training the whole-body intelligence that keeps you agile well into your 80s and beyond. Best suited for those who've been practicing playful movement consistently and are ready to raise the stakes.",
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
    description: "Agility is not something you either have or you've lost — it's a skill that responds to training at any age, as Stephen Jepson proves every single day at 85. This video shows the specific movement practices that keep agility alive: quick-change footwork, reactive drills, and multi-limb coordination patterns woven into everyday life. Whether you're 45 and trying to stay sharp or 75 working to regain mobility, this is where to start.",
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
    description: "This is what the results look like: real people whose balance, confidence, and daily function improved dramatically through Stephen Jepson's playful movement approach. No gym memberships, no complicated equipment — just consistent daily play that rewires the nervous system over time. If you've wondered whether this approach actually works, this video is your answer.",
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
    description: "Stephen Jepson is living proof that vitality at 85 isn't luck — it's the result of never stopping play. This video explores the deeper philosophy behind \"Never Leave The Playground\": why play, not exercise, is the right frame for lifelong movement; how the childlike qualities of curiosity and fun are exactly what the aging brain needs; and how to reclaim that mindset no matter how long you've been away from it.",
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
    description: "A short preview of the \"Balance & Coordination Essentials\" program — one of Stephen Jepson's most structured guides to building a stable, responsive body from the ground up. The complete video walks step-by-step through the foundational drills that underpin everything else in the Never Leave The Playground system. Get the full program in the shop and start building real balance today.",
    thumbnailUrl: 'https://i.ytimg.com/vi/kxFTnQadcPw/hqdefault.jpg',
    uploadDate: '2024-02-01',
    duration: 'PT0M45S',
    keywords: 'preview, balance, coordination, premium, video shop, exercise',
    category: 'Premium Previews',
    isPremiumPreview: true,
    shopUrl: 'https://payhip.com/b/Mgw7n',
    price: 9.99,
    payhipProductId: 'Mgw7n',
  },
  {
    id: 'preview-agility-movement-mastery',
    youtubeId: 'll6aoSmWzKY',
    title: 'Preview: Agility & Movement Mastery',
    description: "A short preview of the \"Agility & Movement Mastery\" program, where Stephen Jepson teaches the progression from basic agility awareness to complex, confident multi-limb movement. The complete video is designed for those who want a structured path — not just individual exercises — toward lasting movement quality and fall-proof coordination. Available in full at the Never Leave The Playground shop.",
    thumbnailUrl: 'https://i.ytimg.com/vi/ll6aoSmWzKY/hqdefault.jpg',
    uploadDate: '2024-02-05',
    duration: 'PT0M55S',
    keywords: 'preview, agility, movement, premium, video shop, fitness',
    category: 'Premium Previews',
    isPremiumPreview: true,
    shopUrl: 'https://payhip.com/b/jK30s',
    price: 9.99,
    payhipProductId: 'jK30s',
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

