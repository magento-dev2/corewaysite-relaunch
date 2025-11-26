import AutomationCarousel from "@/components/business/AutomationCarousel";
import WorkflowZigZagScroll from "@/components/business/Features";
import UseCases from "@/components/business/UseCases";
import WorkflowScrollShowcase from "@/components/business/WorkflowShowcase";
import Hero from "@/components/home/Hero";
import Integrations from "@/components/home/Integrations";
import PageCTA from "@/components/PageCTA";
import WhyCorewaySection from "@/components/WhyCorewaySection";
import FAQ from "@/components/FAQ";
import sampleFAQs from '@/data/faqs.json';

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
const defaultReasons : {icon: string, title: string, description: string}[] = [
  {
    icon: "agency",
    title: "Award  Agency",
    description: "Recognized for excellence in digital innovation and software development.",
  },
  {
    icon: "zap",
    title: "Fast Delivery",
    description: "Rapid prototyping and agile development to get your product to market sooner.",
  },
  {
    icon: "shield",
    title: "Enterprise Security",
    description: "Bank-grade security protocols ensuring your data remains protected at all times.",
  },
  {
    icon: "users",
    title: "Expert Team",
    description: "A dedicated team of senior developers and designers working on your project.",
  }
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <WorkflowZigZagScroll />
      <AutomationCarousel />
      <WorkflowScrollShowcase />
      <UseCases />
      <Integrations />
      <WhyCorewaySection
        badge="Why Choose Us"
        title="Why Choose Coreway Solutions"
        subtitle="We're not just another software company. We're your technology partner committed to delivering exceptional results through innovation and expertise."
        reasons={defaultReasons}
      />
      <FAQ
        badge="Help Center"
        title="Common Questions & Answers"
        description="Everything you need to know about our services and how we work"
        faqs={sampleFAQs["business-workflow-automation"]}
        columns={1}
        showContactCTA={true}
        contactText="Still have questions?"
        contactButtonText="Contact Our Team"
      />
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
