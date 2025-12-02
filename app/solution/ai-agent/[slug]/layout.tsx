import type { Metadata } from "next";

export const metadata = {
  title: "AI Agent Solutions | Intelligent Automation Agents | Coreway",
  description: "Deploy intelligent AI agents that automate complex workflows and deliver autonomous decision-making capabilities.",
  keywords: "AI agents, intelligent agents, AI automation, autonomous AI, AI workflows",
  openGraph: {
    title: "AI Agent Solutions | Intelligent Automation Agents | Coreway",
    description: "Deploy intelligent AI agents that automate complex workflows and deliver autonomous decision-making capabilities.",
    type: "website",
    url: "https://www.corewaysolution.com/solution/ai-agent",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent Solutions | Intelligent Automation Agents | Coreway",
    description: "Deploy intelligent AI agents that automate complex workflows and deliver autonomous decision-making capabilities.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/solution/ai-agent"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
