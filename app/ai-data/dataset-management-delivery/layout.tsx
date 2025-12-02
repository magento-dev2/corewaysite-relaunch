import type { Metadata } from "next";

export const metadata = {
  title: "Dataset Management & Delivery | AI Data Pipeline Solutions | Coreway",
  description: "Manage and deliver datasets at scale with automated pipelines, quality control, and versioning.",
  keywords: "dataset management, data pipeline, data delivery, ML datasets, data versioning",
  openGraph: {
    title: "Dataset Management & Delivery | AI Data Pipeline Solutions | Coreway",
    description: "Manage and deliver datasets at scale with automated pipelines, quality control, and versioning.",
    type: "website",
    url: "https://www.corewaysolution.com/ai-data/dataset-management-delivery",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Dataset Management & Delivery | AI Data Pipeline Solutions | Coreway",
    description: "Manage and deliver datasets at scale with automated pipelines, quality control, and versioning.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/ai-data/dataset-management-delivery"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
