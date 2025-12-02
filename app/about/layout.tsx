import type { Metadata } from "next";

export const metadata = {
  title: "About Coreway Solution | Leading AI & Software Development Company",
  description: "Learn about Coreway Solution - a leading provider of AI development, automation, and digital transformation services with expert teams worldwide.",
  keywords: "about coreway, AI company, software development company, digital transformation, technology solutions",
  openGraph: {
    title: "About Coreway Solution | Leading AI & Software Development Company",
    description: "Learn about Coreway Solution - a leading provider of AI development, automation, and digital transformation services with expert teams worldwide.",
    type: "website",
    url: "https://www.corewaysolution.com/about",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "About Coreway Solution | Leading AI & Software Development Company",
    description: "Learn about Coreway Solution - a leading provider of AI development, automation, and digital transformation services with expert teams worldwide.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/about"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
