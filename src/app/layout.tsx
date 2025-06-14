
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react"

// Site-wide constants
const SITE_DOMAIN = 'videos.neverleavetheplayground.com';
const SITE_PROTOCOL = 'https';
const SITE_BASE_URL = `${SITE_PROTOCOL}://${SITE_DOMAIN}`;
const SITE_LOGO_URL = `${SITE_BASE_URL}/logo.png`; // Updated path
const SITE_NAME = 'Never Leave The Playground Videos';
const SITE_TAGLINE = 'Never Leave The Playground';
const FULL_SITE_TITLE = SITE_NAME;
const SITE_DESCRIPTION = "Explore free YouTube videos from Stephen Jepson's Never Leave The Playground program, designed to keep you active and playful at any age.";
// const TWITTER_HANDLE = '@YourTwitterHandle'; // Optional: Add your Twitter handle

const GA_MEASUREMENT_ID = 'G-Y4NLH6RGLH';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_BASE_URL),
  title: {
    default: FULL_SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Stephen Jepson's Never Leave The Playground Program" }],
  keywords: ['Stephen Jepson', 'Never Leave The Playground', 'agility', 'balance', 'coordination', 'playful movement', 'active living', 'senior fitness', 'videos'],
  openGraph: {
    type: 'website',
    url: SITE_BASE_URL,
    title: FULL_SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [{
      url: SITE_LOGO_URL,
      alt: `${SITE_NAME} Logo`,
      width: 128, // Consider updating if your logo.png is a different dimension
      height: 128, // Consider updating if your logo.png is a different dimension
    }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: FULL_SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [SITE_LOGO_URL],
    // site: TWITTER_HANDLE, // Optional
    // creator: TWITTER_HANDLE, // Optional
  },
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
    "name": "Never Leave The Playground", // Main organization name
    "url": "https://neverleavetheplayground.com/", // Main organization URL
    "logo": SITE_LOGO_URL,
    "description": SITE_DESCRIPTION,
    "sameAs": [
      "https://www.youtube.com/@StephenJepson",
      "https://neverleavetheplayground.com/"
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
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
        {/* Google Analytics Scripts */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
