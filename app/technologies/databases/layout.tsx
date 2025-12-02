import type { Metadata } from "next";

export const metadata = {
  title: "Database Solutions | SQL & NoSQL Database Services | Coreway",
  description: "Expert database design, optimization, and management for SQL, NoSQL, and distributed databases.",
  keywords: "database solutions, SQL, NoSQL, database design, database optimization",
  openGraph: {
    title: "Database Solutions | SQL & NoSQL Database Services | Coreway",
    description: "Expert database design, optimization, and management for SQL, NoSQL, and distributed databases.",
    type: "website",
    url: "https://www.corewaysolution.com/technologies/databases",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Database Solutions | SQL & NoSQL Database Services | Coreway",
    description: "Expert database design, optimization, and management for SQL, NoSQL, and distributed databases.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/technologies/databases"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
