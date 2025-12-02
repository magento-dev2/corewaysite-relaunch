import type { Metadata } from "next";

export const metadata = {
  title: "Automotive Industry Solutions | AI & IoT Development | Coreway",
  description: "Transform automotive operations with AI-powered solutions, IoT integration, and digital transformation services.",
  keywords: "automotive software, automotive AI, IoT automotive, connected vehicles, automotive digital transformation",
  openGraph: {
    title: "Automotive Industry Solutions | AI & IoT Development | Coreway",
    description: "Transform automotive operations with AI-powered solutions, IoT integration, and digital transformation services.",
    type: "website",
    url: "https://www.corewaysolution.com/industries/automotive",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Automotive Industry Solutions | AI & IoT Development | Coreway",
    description: "Transform automotive operations with AI-powered solutions, IoT integration, and digital transformation services.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/industries/automotive"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
