import type { Metadata } from "next";

export const metadata = {
  title: "Database Dashboard Bot | Intelligent Data Visualization | Coreway",
  description: "Transform database queries into intelligent dashboards with AI-powered analytics and visualization.",
  keywords: "database dashboard, AI analytics, data visualization, database bot, intelligent dashboards",
  openGraph: {
    title: "Database Dashboard Bot | Intelligent Data Visualization | Coreway",
    description: "Transform database queries into intelligent dashboards with AI-powered analytics and visualization.",
    type: "website",
    url: "https://www.corewaysolution.com/solution/DBDashbot",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Database Dashboard Bot | Intelligent Data Visualization | Coreway",
    description: "Transform database queries into intelligent dashboards with AI-powered analytics and visualization.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/solution/DBDashbot"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
