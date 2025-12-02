import type { Metadata } from "next";

export const metadata = {
  title: "Press Kit | Media Resources | Coreway Solution",
  description: "Download our press kit with logos, brand assets, and company information for media use.",
  keywords: "press kit, media kit, brand assets, logos, press resources",
  openGraph: {
    title: "Press Kit | Media Resources | Coreway Solution",
    description: "Download our press kit with logos, brand assets, and company information for media use.",
    type: "website",
    url: "https://www.corewaysolution.com/press-kit",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Press Kit | Media Resources | Coreway Solution",
    description: "Download our press kit with logos, brand assets, and company information for media use.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/press-kit"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
