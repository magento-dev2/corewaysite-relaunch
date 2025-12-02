import type { Metadata } from "next";

export const metadata = {
  title: "Replatforming & Migration Services | Seamless System Modernization | Coreway",
  description: "Modernize your technology stack with zero-downtime migration and replatforming services.",
  keywords: "replatforming, system migration, platform migration, cloud migration, legacy modernization",
  openGraph: {
    title: "Replatforming & Migration Services | Seamless System Modernization | Coreway",
    description: "Modernize your technology stack with zero-downtime migration and replatforming services.",
    type: "website",
    url: "https://www.corewaysolution.com/solution/replatforming-migration",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Replatforming & Migration Services | Seamless System Modernization | Coreway",
    description: "Modernize your technology stack with zero-downtime migration and replatforming services.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/solution/replatforming-migration"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
