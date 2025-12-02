import type { Metadata } from "next";

export const metadata = {
  title: "Careers at Coreway | Join Our Team of Innovators",
  description: "Join Coreway Solution and work on cutting-edge AI and software development projects. Explore career opportunities with our global team.",
  keywords: "careers, jobs, AI developer jobs, software engineer careers, remote work, technology jobs",
  openGraph: {
    title: "Careers at Coreway | Join Our Team of Innovators",
    description: "Join Coreway Solution and work on cutting-edge AI and software development projects. Explore career opportunities with our global team.",
    type: "website",
    url: "https://www.corewaysolution.com/careers",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Coreway | Join Our Team of Innovators",
    description: "Join Coreway Solution and work on cutting-edge AI and software development projects. Explore career opportunities with our global team.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/careers"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
