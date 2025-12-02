import type { Metadata } from "next";

export const metadata = {
  title: "Furniture & Home Decor Solutions | Retail Technology | Coreway",
  description: "Transform furniture retail with AR visualization, inventory management, and e-commerce solutions.",
  keywords: "furniture technology, home decor software, AR furniture, retail automation, furniture ecommerce",
  openGraph: {
    title: "Furniture & Home Decor Solutions | Retail Technology | Coreway",
    description: "Transform furniture retail with AR visualization, inventory management, and e-commerce solutions.",
    type: "website",
    url: "https://www.corewaysolution.com/industries/furniture-home-decor",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Furniture & Home Decor Solutions | Retail Technology | Coreway",
    description: "Transform furniture retail with AR visualization, inventory management, and e-commerce solutions.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/industries/furniture-home-decor"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
