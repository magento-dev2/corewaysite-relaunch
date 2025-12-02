import type { Metadata } from "next";

export const metadata = {
  title: "Security Tools & Solutions | Cybersecurity Infrastructure | Coreway",
  description: "Implement comprehensive security tools and solutions to protect your infrastructure and data.",
  keywords: "security tools, cybersecurity, security solutions, security infrastructure, security services",
  openGraph: {
    title: "Security Tools & Solutions | Cybersecurity Infrastructure | Coreway",
    description: "Implement comprehensive security tools and solutions to protect your infrastructure and data.",
    type: "website",
    url: "https://www.corewaysolution.com/technologies/security-tools",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Tools & Solutions | Cybersecurity Infrastructure | Coreway",
    description: "Implement comprehensive security tools and solutions to protect your infrastructure and data.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/technologies/security-tools"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
