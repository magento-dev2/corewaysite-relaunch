import type { Metadata } from "next";

export const metadata = {
  title: "Fashion & Apparel Solutions | Digital Transformation for Fashion Industry | Coreway",
  description: "Modernize fashion retail with AI-powered inventory, personalization, and omnichannel solutions.",
  keywords: "fashion technology, apparel software, fashion AI, retail technology, fashion digital transformation",
  openGraph: {
    title: "Fashion & Apparel Solutions | Digital Transformation for Fashion Industry | Coreway",
    description: "Modernize fashion retail with AI-powered inventory, personalization, and omnichannel solutions.",
    type: "website",
    url: "https://www.corewaysolution.com/industries/fashion-apparel",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Fashion & Apparel Solutions | Digital Transformation for Fashion Industry | Coreway",
    description: "Modernize fashion retail with AI-powered inventory, personalization, and omnichannel solutions.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/industries/fashion-apparel"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
