import type { Metadata } from "next";

export const metadata = {
  title: "Infrastructure Security Using AI | Intelligent Threat Detection | Coreway",
  description: "Protect your infrastructure with AI-powered security monitoring, threat detection, and automated response.",
  keywords: "AI security, infrastructure security, threat detection, AI cybersecurity, security automation",
  openGraph: {
    title: "Infrastructure Security Using AI | Intelligent Threat Detection | Coreway",
    description: "Protect your infrastructure with AI-powered security monitoring, threat detection, and automated response.",
    type: "website",
    url: "https://www.corewaysolution.com/ai-data/infrastructure-security-ai",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Infrastructure Security Using AI | Intelligent Threat Detection | Coreway",
    description: "Protect your infrastructure with AI-powered security monitoring, threat detection, and automated response.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/ai-data/infrastructure-security-ai"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
