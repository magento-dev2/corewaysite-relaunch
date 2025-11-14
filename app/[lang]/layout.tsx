import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { locales, Locale } from '@/lib/i18n/config';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params as { lang: Locale };

  const titles = {
    en: 'Coreway Solution - Workflow Automation Platform',
    hi: 'Coreway Solution - वर्कफ़्लो स्वचालन प्लेटफॉर्म'
  };

  const descriptions = {
    en: "Build complex automations 10x faster without fighting APIs. Connect everything with Coreway Solution's powerful workflow automation platform.",
    hi: "API से लड़े बिना 10 गुना तेजी से जटिल स्वचालन बनाएं। Coreway Solution के शक्तिशाली वर्कफ़्लो स्वचालन प्लेटफॉर्म के साथ सब कुछ कनेक्ट करें।"
  };

  return {
    title: {
      default: titles[lang],
      template: `%s | ${lang === 'hi' ? 'Coreway Solution' : 'Coreway Solution'}`
    },
    description: descriptions[lang],
    icons: {
      icon: '/logo.png',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params as { lang: Locale };

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <div className="min-h-screen bg-[#0E0918]">
          <Navbar lang={lang} />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
