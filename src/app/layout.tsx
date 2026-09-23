import type { Metadata, Viewport } from 'next';
import '@/App.css';
import '@/index.css';

import { AuthProvider } from '@/context/AuthContext';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://paramvani.com'),
  title: {
    default: 'Paramvani - Dev Vani | परमवाणी',
    template: '%s | Paramvani',
  },
  description:
    'परमवाणी में, हम एक दिव्य अनुभव प्रदान करते हैं जहां उदासी, अवसाद से जूझ रहे लोग या भगवान से जुड़ना चाहते हैं उन्हें AI-powered spiritual conversation मिलती है — Bhagavad Gita की शिक्षाओं के साथ।',
  keywords: [
    'Paramvani', 'परमवाणी', 'Dev Vani', 'Spiritual AI', 'Bhagavad Gita',
    'Hindu spirituality', 'AI meditation', 'divine guidance', 'Lord Hanuman',
    'Lord Vishnu', 'Lord Shiva', 'spiritual chatbot', 'hindi spiritual app',
    'भगवद गीता', 'आध्यात्मिक', 'ध्यान', 'मन की शांति'
  ],
  authors: [{ name: 'Paramvani', url: 'https://paramvani.com' }],
  creator: 'Paramvani',
  publisher: 'Paramvani',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Paramvani - Dev Vani | परमवाणी',
    description:
      'परमवाणी में, हम एक दिव्य अनुभव प्रदान करते हैं — AI-powered spiritual conversation with Bhagavad Gita wisdom.',
    url: 'https://paramvani.com',
    siteName: 'Paramvani',
    locale: 'hi_IN',
    type: 'website',
    images: [
      {
        url: '/card.png',
        width: 1200,
        height: 630,
        alt: 'Paramvani - Dev Vani | परमवाणी',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paramvani - Dev Vani | परमवाणी',
    description:
      'मन की बात प्रभु संग — AI-powered spiritual conversation with divine guidance from Bhagavad Gita.',
    images: ['/card.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://paramvani.com',
  },
  category: 'spirituality',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Paramvani',
  alternateName: 'परमवाणी',
  url: 'https://paramvani.com',
  description:
    'परमवाणी — AI-powered spiritual conversation platform with divine guidance from Bhagavad Gita. Connect with Lord Hanuman, Vishnu, and Shiva.',
  inLanguage: ['hi', 'en'],
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://paramvani.com/gita?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Paramvani',
  alternateName: 'परमवाणी',
  url: 'https://paramvani.com',
  logo: 'https://paramvani.com/android-chrome-192x192.png',
  sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
      </head>
      <body>
        <LanguageProvider>
          <AuthProvider>
            <Header />
            {children}
            <Footer />
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
