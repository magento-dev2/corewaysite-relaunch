import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics & Business Intelligence | Data-Driven Insights | Coreway",
  description: "Transform your data into actionable insights with advanced analytics, real-time dashboards, and AI-powered business intelligence solutions.",
  keywords: "analytics, business intelligence, data visualization, reporting, dashboards, data analytics, predictive analytics",
  openGraph: {
    title: "Analytics & Business Intelligence | Data-Driven Insights | Coreway",
    description: "Transform your data into actionable insights with advanced analytics, real-time dashboards, and AI-powered business intelligence solutions.",
    type: "website",
    url: "https://www.corewaysolution.com/services/analytics",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution - Analytics Services"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Analytics & Business Intelligence | Data-Driven Insights | Coreway",
    description: "Transform your data into actionable insights with advanced analytics, real-time dashboards, and AI-powered business intelligence solutions.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/services/analytics"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
