import type { Metadata } from "next";

export const metadata = {
  title: "Partners | Technology Partners | Coreway Solution",
  description: "Explore our technology partnerships and collaboration opportunities.",
  keywords: "partners, technology partners, partnerships, collaboration, alliances",
  openGraph: {
    title: "Partners | Technology Partners | Coreway Solution",
    description: "Explore our technology partnerships and collaboration opportunities.",
    type: "website",
    url: "https://www.corewaysolution.com/partners",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Partners | Technology Partners | Coreway Solution",
    description: "Explore our technology partnerships and collaboration opportunities.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/partners"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
