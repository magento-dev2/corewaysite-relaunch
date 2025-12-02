import type { Metadata } from "next";

export const metadata = {
  title: "User-Generated Content & Ads | AI-Powered Marketing Solutions | Coreway",
  description: "Leverage AI to create, optimize, and manage user-generated content and advertising campaigns.",
  keywords: "UGC, AI advertising, content generation, AI marketing, automated ads",
  openGraph: {
    title: "User-Generated Content & Ads | AI-Powered Marketing Solutions | Coreway",
    description: "Leverage AI to create, optimize, and manage user-generated content and advertising campaigns.",
    type: "website",
    url: "https://www.corewaysolution.com/solution/ugs-ads",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "User-Generated Content & Ads | AI-Powered Marketing Solutions | Coreway",
    description: "Leverage AI to create, optimize, and manage user-generated content and advertising campaigns.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/solution/ugs-ads"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
