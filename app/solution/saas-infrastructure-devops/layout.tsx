import type { Metadata } from "next";

export const metadata = {
  title: "SaaS Infrastructure & DevOps | Scalable Cloud Solutions | Coreway",
  description: "Build and scale SaaS infrastructure with modern DevOps practices, CI/CD, and cloud-native architecture.",
  keywords: "SaaS infrastructure, DevOps services, cloud infrastructure, CI/CD, cloud native",
  openGraph: {
    title: "SaaS Infrastructure & DevOps | Scalable Cloud Solutions | Coreway",
    description: "Build and scale SaaS infrastructure with modern DevOps practices, CI/CD, and cloud-native architecture.",
    type: "website",
    url: "https://www.corewaysolution.com/solution/saas-infrastructure-devops",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Infrastructure & DevOps | Scalable Cloud Solutions | Coreway",
    description: "Build and scale SaaS infrastructure with modern DevOps practices, CI/CD, and cloud-native architecture.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/solution/saas-infrastructure-devops"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
