import type { Metadata } from "next";

export const metadata = {
  title: "Digital Commerce Transformation | Modern E-commerce Solutions | Coreway",
  description: "Transform your commerce experience with headless, AI-driven, and composable commerce solutions.",
  keywords: "digital commerce, ecommerce transformation, headless commerce, composable commerce, AI commerce",
  openGraph: {
    title: "Digital Commerce Transformation | Modern E-commerce Solutions | Coreway",
    description: "Transform your commerce experience with headless, AI-driven, and composable commerce solutions.",
    type: "website",
    url: "https://www.corewaysolution.com/solution/digital-commerce-transformation",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Commerce Transformation | Modern E-commerce Solutions | Coreway",
    description: "Transform your commerce experience with headless, AI-driven, and composable commerce solutions.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/solution/digital-commerce-transformation"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
