import type { Metadata } from "next";

export const metadata = {
  title: "AI Chat with PDF | Document Intelligence Solutions | Coreway",
  description: "Extract insights from PDFs using AI-powered chat interfaces and intelligent document processing.",
  keywords: "AI PDF chat, PDF AI, document intelligence, PDF processing, AI document analysis",
  openGraph: {
    title: "AI Chat with PDF | Document Intelligence Solutions | Coreway",
    description: "Extract insights from PDFs using AI-powered chat interfaces and intelligent document processing.",
    type: "website",
    url: "https://www.corewaysolution.com/solution/ai-chat-with-pdf",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Chat with PDF | Document Intelligence Solutions | Coreway",
    description: "Extract insights from PDFs using AI-powered chat interfaces and intelligent document processing.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/solution/ai-chat-with-pdf"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
