import type { Metadata } from "next";

export const metadata = {
  title: "Custom API & Systems Integration | Connect Your Tech Stack | Coreway",
  description: "Seamlessly integrate your systems with custom APIs, middleware, and integration solutions for unified operations.",
  keywords: "API development, systems integration, custom API, API integration, middleware solutions",
  openGraph: {
    title: "Custom API & Systems Integration | Connect Your Tech Stack | Coreway",
    description: "Seamlessly integrate your systems with custom APIs, middleware, and integration solutions for unified operations.",
    type: "website",
    url: "https://www.corewaysolution.com/solution/custom-api-systems-integration",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom API & Systems Integration | Connect Your Tech Stack | Coreway",
    description: "Seamlessly integrate your systems with custom APIs, middleware, and integration solutions for unified operations.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/solution/custom-api-systems-integration"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
