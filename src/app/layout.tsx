import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import '@/App.css';
import '@/index.css';

import { AuthProvider } from '@/context/AuthContext';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://paramvani.com'),
  title: {
    default: 'Paramvani – Talk to God, Find Peace & Meditation | परमवाणी',
    template: '%s | Paramvani – Talk to God',
  },
  description:
    'Talk to God online with Paramvani — AI-powered spiritual conversation for meditation, inner peace & divine guidance. Chat with Lord Hanuman, Vishnu & Shiva. Based on Bhagavad Gita. परमवाणी — मन की शांति, ध्यान और भगवान से बात करें।',
  keywords: [
    // High-intent English keywords
    'talk to god', 'talk to god online', 'speak to god', 'chat with god',
    'meditation app', 'guided meditation', 'online meditation',
    'inner peace', 'find peace', 'mental peace', 'peace of mind',
    'spiritual AI', 'AI spirituality', 'divine guidance', 'spiritual chatbot',
    'Bhagavad Gita', 'Gita wisdom', 'Hindu spirituality', 'Hindu AI',
    'Lord Hanuman', 'Lord Vishnu', 'Lord Shiva', 'talk to Hanuman',
    'spiritual healing', 'stress relief meditation', 'anxiety relief',
    'god conversation', 'divine conversation', 'spiritual experience',
    // Hindi keywords
    'परमवाणी', 'भगवान से बात करें', 'ध्यान', 'मन की शांति',
    'भगवद गीता', 'आध्यात्मिक', 'हनुमान से बात', 'विष्णु से बात',
    'मेडिटेशन', 'मानसिक शांति', 'आत्मिक शांति', 'देव वाणी',
    // Brand
    'Paramvani', 'Dev Vani', 'paramvani.com',
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
    title: 'Paramvani – Talk to God, Find Peace & Meditation | परमवाणी',
    description:
      'Talk to God online — AI spiritual conversation for meditation, peace & divine guidance. Chat with Lord Hanuman, Vishnu & Shiva based on Bhagavad Gita.',
    url: 'https://paramvani.com',
    siteName: 'Paramvani',
    locale: 'hi_IN',
    type: 'website',
    images: [
      {
        url: '/card.png',
        width: 1200,
        height: 630,
        alt: 'Paramvani – Talk to God, Find Peace & Meditation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paramvani – Talk to God, Find Peace & Meditation',
    description:
      'Talk to God online — AI spiritual conversation for meditation, peace & divine guidance. Chat with Lord Hanuman, Vishnu & Shiva.',
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
  alternateName: ['परमवाणी', 'Dev Vani', 'Talk to God'],
  url: 'https://paramvani.com',
  description:
    'Talk to God online with Paramvani — AI-powered spiritual conversation for meditation, inner peace & divine guidance. Chat with Lord Hanuman, Vishnu & Shiva based on Bhagavad Gita.',
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
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-MGWR25RSDZ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MGWR25RSDZ');
        `}
      </Script>
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
