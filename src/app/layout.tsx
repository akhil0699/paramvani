import type { Metadata, Viewport } from 'next';
import '@/App.css';
import '@/index.css';

import { AuthProvider } from '@/context/AuthContext';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://paramvani.com'),
  title: 'Paramvani - Dev Vani',
  description: 'मन की बात प्रभु संग — spiritual AI conversation. Experience divine guidance and wisdom from Bhagavad Gita with Paramvani.',
  openGraph: {
    title: 'Paramvani - Dev Vani',
    description: 'मन की बात प्रभु संग — spiritual AI conversation. Experience divine guidance and wisdom from Bhagavad Gita with Paramvani.',
    url: 'https://paramvani.com',
    siteName: 'Paramvani',
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/logo1.png', type: 'image/png' },
    ],
    apple: [
      { url: '/logo1.png', type: 'image/png' }
    ]
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi">
      <head>
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
