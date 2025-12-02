import type { Metadata } from "next";

export const metadata = {
  title: "AI Integration Services | Seamless AI Implementation | Coreway",
  description: "Integrate cutting-edge AI capabilities into your existing systems with our expert AI integration services.",
  keywords: "AI integration, AI implementation, AI services, machine learning integration, AI solutions",
  openGraph: {
    title: "AI Integration Services | Seamless AI Implementation | Coreway",
    description: "Integrate cutting-edge AI capabilities into your existing systems with our expert AI integration services.",
    type: "website",
    url: "https://www.corewaysolution.com/solution/ai-integration-services",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Integration Services | Seamless AI Implementation | Coreway",
    description: "Integrate cutting-edge AI capabilities into your existing systems with our expert AI integration services.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/solution/ai-integration-services"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
