import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Coreway Solution",
  description: "Insights from Coreway Solution on AI, automation, software engineering, and digital transformation.",
  keywords: "blog, ai, automation, software engineering, digital transformation, coreway solution",
  openGraph: {
    title: "Blog | Coreway Solution",
    description: "Insights from Coreway Solution on AI, automation, software engineering, and digital transformation.",
    type: "website",
    url: "https://www.corewaysolution.com/blog",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Coreway Solution",
    description: "Insights from Coreway Solution on AI, automation, software engineering, and digital transformation.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/blog"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
