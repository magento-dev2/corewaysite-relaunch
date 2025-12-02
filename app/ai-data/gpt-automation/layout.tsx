import type { Metadata } from "next";

export const metadata = {
  title: "GPT Automation | AI-Powered Workflow Automation | Coreway",
  description: "Automate business processes with GPT-powered AI solutions for content generation, analysis, and decision-making.",
  keywords: "GPT automation, AI automation, GPT-4, AI workflows, content automation",
  openGraph: {
    title: "GPT Automation | AI-Powered Workflow Automation | Coreway",
    description: "Automate business processes with GPT-powered AI solutions for content generation, analysis, and decision-making.",
    type: "website",
    url: "https://www.corewaysolution.com/ai-data/gpt-automation",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "GPT Automation | AI-Powered Workflow Automation | Coreway",
    description: "Automate business processes with GPT-powered AI solutions for content generation, analysis, and decision-making.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/ai-data/gpt-automation"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
