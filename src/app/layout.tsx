import type { Metadata } from 'next';
import '@/App.css';
import '@/index.css';

import { AuthProvider } from '@/context/AuthContext';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Paramvani - Dev Vani',
  description: 'मन की बात प्रभु संग — spiritual AI conversation',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body>
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
