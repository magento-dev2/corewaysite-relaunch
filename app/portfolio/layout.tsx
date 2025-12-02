import type { Metadata } from "next";

export const metadata = {
  title: "Our Portfolio | Successful Projects by Coreway Solution",
  description: "Explore our portfolio of successful AI, automation, and software development projects. See how we've helped businesses transform digitally.",
  keywords: "portfolio, case studies, successful projects, AI projects, software development projects",
  openGraph: {
    title: "Our Portfolio | Successful Projects by Coreway Solution",
    description: "Explore our portfolio of successful AI, automation, and software development projects. See how we've helped businesses transform digitally.",
    type: "website",
    url: "https://www.corewaysolution.com/portfolio",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Portfolio | Successful Projects by Coreway Solution",
    description: "Explore our portfolio of successful AI, automation, and software development projects. See how we've helped businesses transform digitally.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/portfolio"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
