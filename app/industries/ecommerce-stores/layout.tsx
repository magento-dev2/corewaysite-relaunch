import type { Metadata } from "next";

export const metadata = {
  title: "E-Commerce Solutions | Online Store Development & Automation | Coreway",
  description: "Build and scale your e-commerce business with custom development, AI-powered recommendations, and automation solutions.",
  keywords: "ecommerce development, online store, ecommerce automation, AI recommendations, digital commerce",
  openGraph: {
    title: "E-Commerce Solutions | Online Store Development & Automation | Coreway",
    description: "Build and scale your e-commerce business with custom development, AI-powered recommendations, and automation solutions.",
    type: "website",
    url: "https://www.corewaysolution.com/industries/ecommerce-stores",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Solutions | Online Store Development & Automation | Coreway",
    description: "Build and scale your e-commerce business with custom development, AI-powered recommendations, and automation solutions.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/industries/ecommerce-stores"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
