import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Coreway Solution - Workflow Automation Platform',
    template: '%s | Coreway Solution'
  },
  icons: {
    icon: '/logo.png',                // default icon
    shortcut: '/favicon-16x16.png',      // optional
    apple: '/apple-touch-icon.png',      // for iOS
  },
  description: 'Build complex automations 10x faster without fighting APIs. Connect everything with Coreway Solution\'s powerful workflow automation platform.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-[#0E0918] overflow-x-hidden">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}