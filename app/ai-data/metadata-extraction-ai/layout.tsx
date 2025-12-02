import type { Metadata } from "next";

export const metadata = {
  title: "Metadata Extraction Using AI | Intelligent Document Processing | Coreway",
  description: "Extract and classify metadata from documents, images, and videos using GPT-4 and Vision AI.",
  keywords: "metadata extraction, AI extraction, document processing, Vision AI, GPT-4 extraction",
  openGraph: {
    title: "Metadata Extraction Using AI | Intelligent Document Processing | Coreway",
    description: "Extract and classify metadata from documents, images, and videos using GPT-4 and Vision AI.",
    type: "website",
    url: "https://www.corewaysolution.com/ai-data/metadata-extraction-ai",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Metadata Extraction Using AI | Intelligent Document Processing | Coreway",
    description: "Extract and classify metadata from documents, images, and videos using GPT-4 and Vision AI.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/ai-data/metadata-extraction-ai"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
