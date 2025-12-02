import type { Metadata } from "next";

export const metadata = {
  title: "Company Overview | About Coreway Solution",
  description: "Learn about Coreway Solution's mission, vision, and values. Discover our journey in AI and software development.",
  keywords: "company overview, about us, coreway mission, company values",
  openGraph: {
    title: "Company Overview | About Coreway Solution",
    description: "Learn about Coreway Solution's mission, vision, and values. Discover our journey in AI and software development.",
    type: "website",
    url: "https://www.corewaysolution.com/about/company-overview",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Company Overview | About Coreway Solution",
    description: "Learn about Coreway Solution's mission, vision, and values. Discover our journey in AI and software development.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/about/company-overview"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
