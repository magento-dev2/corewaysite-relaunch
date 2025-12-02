import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import LayoutWrapper from './LayoutWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Coreway Solution | AI Development, Automation & Digital Transformation',
    template: '%s'
  },
  description: "Transform your business with AI-powered solutions, custom software development, and workflow automation. Expert team delivering cutting-edge technology solutions worldwide.",
  keywords: "AI development, workflow automation, custom software development, digital transformation, AI consulting, software solutions",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  themeColor: '#000000',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.corewaysolution.com',
    siteName: 'Coreway Solution',
    images: [{
      url: 'https://www.corewaysolution.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Coreway Solution'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@corewaysolution',
    creator: '@corewaysolution'
  },
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <div className="min-h-screen bg-[#0E0918]">
          <LayoutWrapper>{children}</LayoutWrapper>
        </div>
      </body>
    </html>
  );
}
