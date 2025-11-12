import AutomationCarousel from "@/components/business/AutomationCarousel";
import WorkflowZigZagScroll from "@/components/business/Features";
import UseCases from "@/components/business/UseCases";
import WorkflowScrollShowcase from "@/components/business/WorkflowShowcase";
import Hero from "@/components/home/Hero";
import Integrations from "@/components/home/Integrations";
import PageCTA from "@/components/PageCTA";

const siteUrl = "https://www.corewaysolution.com";

export const metadata = {
  title: "Coreway Solution - Workflow Automation Platform | Automate Without Limits",
  description:
    "Build complex automations 10x faster without fighting APIs. Connect everything with Coreway Solution's powerful workflow automation platform.",
  openGraph: {
    title: "Coreway Solution - Workflow Automation Platform",
    description:
      "Build complex automations 10x faster without fighting APIs. Connect everything with Coreway Solution's powerful workflow automation platform.",
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Coreway Solution - Workflow Automation Platform",
    description:
      "Build complex automations 10x faster without fighting APIs. Connect everything with Coreway Solution's powerful workflow automation platform.",
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero/>
      <WorkflowZigZagScroll/>
      <AutomationCarousel/>
      <WorkflowScrollShowcase/>
      <UseCases/>
      <Integrations/>
      <PageCTA
        badge="Start automating today"
        title="Ready to transform your workflows?"
        description="Join thousands of teams using Coreway to automate their work and focus on what matters most. Build powerful automations in minutes, not hours."
        primaryButtonText="Get started for free"
        secondaryButtonText="Talk to sales"
        footerText="No credit card required • Free forever for core features • Cancel anytime"
      />
    </>
  );
}
