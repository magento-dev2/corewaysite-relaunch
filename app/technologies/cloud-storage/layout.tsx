import type { Metadata } from "next";

export const metadata = {
  title: "Cloud Storage Solutions | Scalable Data Storage | Coreway",
  description: "Implement scalable cloud storage solutions with AWS, Azure, and Google Cloud for your data needs.",
  keywords: "cloud storage, AWS storage, Azure storage, Google Cloud storage, data storage",
  openGraph: {
    title: "Cloud Storage Solutions | Scalable Data Storage | Coreway",
    description: "Implement scalable cloud storage solutions with AWS, Azure, and Google Cloud for your data needs.",
    type: "website",
    url: "https://www.corewaysolution.com/technologies/cloud-storage",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Storage Solutions | Scalable Data Storage | Coreway",
    description: "Implement scalable cloud storage solutions with AWS, Azure, and Google Cloud for your data needs.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/technologies/cloud-storage"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
