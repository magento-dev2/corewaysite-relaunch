import type { Metadata } from "next";

export const metadata = {
  title: "Why Choose Coreway | Our Competitive Advantages",
  description: "Discover why businesses choose Coreway Solution for AI development, automation, and digital transformation services.",
  keywords: "why coreway, competitive advantages, why choose us, benefits",
  openGraph: {
    title: "Why Choose Coreway | Our Competitive Advantages",
    description: "Discover why businesses choose Coreway Solution for AI development, automation, and digital transformation services.",
    type: "website",
    url: "https://www.corewaysolution.com/about/why-coreway",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Choose Coreway | Our Competitive Advantages",
    description: "Discover why businesses choose Coreway Solution for AI development, automation, and digital transformation services.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/about/why-coreway"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
