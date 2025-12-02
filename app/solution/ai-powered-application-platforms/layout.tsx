import type { Metadata } from "next";

export const metadata = {
  title: "AI-Powered Application Platforms | Intelligent Software Solutions | Coreway",
  description: "Build intelligent applications with AI-powered platforms that deliver exceptional user experiences and business value.",
  keywords: "AI applications, AI platforms, intelligent software, AI-powered apps, machine learning platforms",
  openGraph: {
    title: "AI-Powered Application Platforms | Intelligent Software Solutions | Coreway",
    description: "Build intelligent applications with AI-powered platforms that deliver exceptional user experiences and business value.",
    type: "website",
    url: "https://www.corewaysolution.com/solution/ai-powered-application-platforms",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Application Platforms | Intelligent Software Solutions | Coreway",
    description: "Build intelligent applications with AI-powered platforms that deliver exceptional user experiences and business value.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/solution/ai-powered-application-platforms"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
