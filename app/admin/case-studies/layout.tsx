import type { Metadata } from "next";

export const metadata = {
  title: "Admin Case Studies | Coreway Solution",
  description: "Explore Admin Case Studies services and solutions by Coreway Solution. Expert AI development and digital transformation.",
  keywords: "admin case studies, coreway solution, AI development, automation",
  openGraph: {
    title: "Admin Case Studies | Coreway Solution",
    description: "Explore Admin Case Studies services and solutions by Coreway Solution. Expert AI development and digital transformation.",
    type: "website",
    url: "https://www.corewaysolution.com/admin/case-studies/",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Admin Case Studies | Coreway Solution",
    description: "Explore Admin Case Studies services and solutions by Coreway Solution. Expert AI development and digital transformation.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/admin/case-studies/"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
