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

        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5FCZGTXK');
          `}
        </Script>
        {/* End Google Tag Manager */}

      </head>

      <body className={inter.className} suppressHydrationWarning>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5FCZGTXK"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <div className="min-h-screen bg-[#0E0918]">
          <LayoutWrapper>{children}</LayoutWrapper>
        </div>

      </body>
    </html>
  );
}
