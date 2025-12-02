import type { Metadata } from "next";

export const metadata = {
  title: "Custom Dashboards | Data Visualization Solutions | Coreway",
  description: "Build custom dashboards and data visualization solutions that deliver actionable business insights.",
  keywords: "custom dashboards, data visualization, business intelligence, analytics dashboards, BI solutions",
  openGraph: {
    title: "Custom Dashboards | Data Visualization Solutions | Coreway",
    description: "Build custom dashboards and data visualization solutions that deliver actionable business insights.",
    type: "website",
    url: "https://www.corewaysolution.com/ai-data/custom-dashboards",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Dashboards | Data Visualization Solutions | Coreway",
    description: "Build custom dashboards and data visualization solutions that deliver actionable business insights.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/ai-data/custom-dashboards"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
