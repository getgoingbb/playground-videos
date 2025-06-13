import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react"

// Site-wide constants - USER SHOULD UPDATE THESE
const SITE_DOMAIN = 'example.com'; // TODO: Update this to your actual domain
const SITE_PROTOCOL = 'https';
const SITE_BASE_URL = `${SITE_PROTOCOL}://${SITE_DOMAIN}`;
// TODO: Replace this placeholder logo URL with your actual logo.
// It could be an absolute URL or a path to an image in your `public` folder (e.g., /images/logo.png).
const SITE_LOGO_URL = `https://placehold.co/200x60.png?text=Playground+Videos`;
const SITE_NAME = 'Playground Videos';
const SITE_TAGLINE = 'Never Leave The Playground';
const FULL_SITE_TITLE = `${SITE_NAME} | ${SITE_TAGLINE}`;
const SITE_DESCRIPTION = "Explore free YouTube videos from Stephen Jepson's Never Leave The Playground program, designed to keep you active and playful at any age.";
// const TWITTER_HANDLE = '@YourTwitterHandle'; // Optional: Add your Twitter handle

export const metadata: Metadata = {
  metadataBase: new URL(SITE_BASE_URL),
  title: {
    default: FULL_SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Stephen Jepson's Never Leave The Playground Program" }], // Generic author
  keywords: ['Stephen Jepson', 'Never Leave The Playground', 'agility', 'balance', 'coordination', 'playful movement', 'active living', 'senior fitness'],
  openGraph: {
    type: 'website',
    url: SITE_BASE_URL,
    title: FULL_SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [{
      url: SITE_LOGO_URL, // General site logo for OG
      alt: `${SITE_NAME} Logo`,
    }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: FULL_SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [SITE_LOGO_URL], // General site logo for Twitter
    // site: TWITTER_HANDLE, // Optional
    // creator: TWITTER_HANDLE, // Optional
  },
  // Favicon and icons can be managed via files in the app directory (favicon.ico, apple-icon.png, etc.)
  // Or defined here if more control is needed.
  // icons: {
  //   icon: '/favicon.ico',
  //   apple: '/apple-touch-icon.png',
  // },
};

export const viewport: Viewport = {
  themeColor: '#2E9AFE', // Matches primary color
  width: 'device-width',
  initialScale: 1,
};

function SiteSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_BASE_URL}/#organization`,
    "name": SITE_NAME,
    "url": SITE_BASE_URL,
    "logo": SITE_LOGO_URL,
    "description": SITE_DESCRIPTION,
    "sameAs": [ // Optional: Add social media links if available
      "https://www.youtube.com/@StephenJepson"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SITE_NAME,
    "url": SITE_BASE_URL,
    "description": SITE_DESCRIPTION,
    "publisher": {
      "@id": `${SITE_BASE_URL}/#organization`
    },
    // Optional: Sitelinks Search Box
    // "potentialAction": {
    //   "@type": "SearchAction",
    //   "target": {
    //     "@type": "EntryPoint",
    //     "urlTemplate": `${SITE_BASE_URL}/search?q={search_term_string}`
    //   },
    //   "query-input": "required name=search_term_string"
    // }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <SiteSchema />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
