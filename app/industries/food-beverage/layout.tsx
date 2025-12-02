import type { Metadata } from "next";

export const metadata = {
  title: "Food & Beverage Solutions | Restaurant & F&B Technology | Coreway",
  description: "Streamline food service operations with AI, automation, and digital solutions for restaurants and F&B businesses.",
  keywords: "restaurant technology, food service software, F&B automation, restaurant AI, food delivery solutions",
  openGraph: {
    title: "Food & Beverage Solutions | Restaurant & F&B Technology | Coreway",
    description: "Streamline food service operations with AI, automation, and digital solutions for restaurants and F&B businesses.",
    type: "website",
    url: "https://www.corewaysolution.com/industries/food-beverage",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Food & Beverage Solutions | Restaurant & F&B Technology | Coreway",
    description: "Streamline food service operations with AI, automation, and digital solutions for restaurants and F&B businesses.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/industries/food-beverage"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
