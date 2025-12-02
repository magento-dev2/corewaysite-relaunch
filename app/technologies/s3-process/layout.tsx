import type { Metadata } from "next";

export const metadata = {
  title: "S3 Processing Solutions | Automated Cloud Storage Workflows | Coreway",
  description: "Automate S3 data processing with serverless functions, ETL pipelines, and intelligent workflows.",
  keywords: "S3 processing, AWS Lambda, S3 automation, cloud processing, serverless S3",
  openGraph: {
    title: "S3 Processing Solutions | Automated Cloud Storage Workflows | Coreway",
    description: "Automate S3 data processing with serverless functions, ETL pipelines, and intelligent workflows.",
    type: "website",
    url: "https://www.corewaysolution.com/technologies/s3-process",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "S3 Processing Solutions | Automated Cloud Storage Workflows | Coreway",
    description: "Automate S3 data processing with serverless functions, ETL pipelines, and intelligent workflows.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/technologies/s3-process"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
