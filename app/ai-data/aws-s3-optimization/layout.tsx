import type { Metadata } from "next";

export const metadata = {
  title: "AWS S3 Optimization | Cloud Storage Performance | Coreway",
  description: "Optimize AWS S3 storage costs and performance with intelligent data management and automation.",
  keywords: "AWS S3, S3 optimization, cloud storage, AWS optimization, storage performance",
  openGraph: {
    title: "AWS S3 Optimization | Cloud Storage Performance | Coreway",
    description: "Optimize AWS S3 storage costs and performance with intelligent data management and automation.",
    type: "website",
    url: "https://www.corewaysolution.com/ai-data/aws-s3-optimization",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "AWS S3 Optimization | Cloud Storage Performance | Coreway",
    description: "Optimize AWS S3 storage costs and performance with intelligent data management and automation.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/ai-data/aws-s3-optimization"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
