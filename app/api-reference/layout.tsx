import type { Metadata } from "next";

export const metadata = {
  title: "API Reference | Developer Documentation | Coreway Solution",
  description: "Comprehensive API reference and documentation for developers integrating with Coreway services.",
  keywords: "API reference, API documentation, developer docs, API guide, integration",
  openGraph: {
    title: "API Reference | Developer Documentation | Coreway Solution",
    description: "Comprehensive API reference and documentation for developers integrating with Coreway services.",
    type: "website",
    url: "https://www.corewaysolution.com/api-reference",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "API Reference | Developer Documentation | Coreway Solution",
    description: "Comprehensive API reference and documentation for developers integrating with Coreway services.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/api-reference"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
