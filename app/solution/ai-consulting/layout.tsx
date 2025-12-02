import type { Metadata } from "next";

export const metadata = {
  title: "AI Consulting Services | Strategic AI Implementation | Coreway",
  description: "Expert AI consulting to transform your business with machine learning, deep learning, and intelligent automation solutions.",
  keywords: "AI consulting, machine learning consulting, AI strategy, AI implementation, AI transformation",
  openGraph: {
    title: "AI Consulting Services | Strategic AI Implementation | Coreway",
    description: "Expert AI consulting to transform your business with machine learning, deep learning, and intelligent automation solutions.",
    type: "website",
    url: "https://www.corewaysolution.com/solution/ai-consulting",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Consulting Services | Strategic AI Implementation | Coreway",
    description: "Expert AI consulting to transform your business with machine learning, deep learning, and intelligent automation solutions.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/solution/ai-consulting"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
