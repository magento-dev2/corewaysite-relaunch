import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Coreway Solution - Workflow Automation Platform',
    template: '%s | Coreway Solution'
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  description: 'Build complex automations 10x faster without fighting APIs. Connect everything with Coreway Solution\'s powerful workflow automation platform.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

