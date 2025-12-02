import type { Metadata } from "next";

export const metadata = {
  title: "Sitemap | Coreway Solution",
  description: "Browse our complete sitemap to find all pages and resources on our website.",
  keywords: "sitemap, site map, website structure, navigation",
  openGraph: {
    title: "Sitemap | Coreway Solution",
    description: "Browse our complete sitemap to find all pages and resources on our website.",
    type: "website",
    url: "https://www.corewaysolution.com/sitemap",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitemap | Coreway Solution",
    description: "Browse our complete sitemap to find all pages and resources on our website.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/sitemap"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
