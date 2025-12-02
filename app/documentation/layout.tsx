import type { Metadata } from "next";

export const metadata = {
  title: "Documentation | Developer Guides | Coreway Solution",
  description: "Complete documentation and guides for using Coreway's services and APIs.",
  keywords: "documentation, developer guides, docs, technical documentation, guides",
  openGraph: {
    title: "Documentation | Developer Guides | Coreway Solution",
    description: "Complete documentation and guides for using Coreway's services and APIs.",
    type: "website",
    url: "https://www.corewaysolution.com/documentation",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Documentation | Developer Guides | Coreway Solution",
    description: "Complete documentation and guides for using Coreway's services and APIs.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/documentation"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
