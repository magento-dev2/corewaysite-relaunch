import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from "next/script";
import './globals.css';
import LayoutWrapper from './LayoutWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Coreway Solution | AI Development, Automation & Digital Transformation',
    template: '%s',
  },
  description:
    "Transform your business with AI-powered solutions, custom software development, and workflow automation. Expert team delivering cutting-edge technology solutions worldwide.",
  keywords:
    "AI development, workflow automation, custom software development, digital transformation, AI consulting, software solutions",
  icons: {
    icon: '/favicon_io/favicon.png',
    shortcut: '/favicon_io/favicon.png',
    apple: '/favicon_io/favicon.png',
  },
  themeColor: '#000000',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.corewaysolution.com',
    siteName: 'Coreway Solution',
    images: [
      {
        url: 'https://www.corewaysolution.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Coreway Solution',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@corewaysolution',
    creator: '@corewaysolution',
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />

      {/* GA4 script */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-583Y8WN4LB"
        strategy="afterInteractive"
      />

      <Script id="ga4-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-583Y8WN4LB', { send_page_view: true });
        `}
      </Script>

      {/* Google reCAPTCHA */}
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
      />

      <body className={inter.className} suppressHydrationWarning>

        <div className="min-h-screen bg-[#0E0918]">
          <LayoutWrapper>{children}</LayoutWrapper>
        </div>

      </body>
    </html>
  );
}
