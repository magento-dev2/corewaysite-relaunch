import aiAgentData from "../../../data/aiAgentData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import ReplatformingHero from "@/components/replatforming/ReplatformingHero";
import ReplatformingOverview from "@/components/replatforming/ReplatformingOverview";
import ReplatformingFeatures from "@/components/replatforming/ReplatformingFeatures";
import ReplatformingTechnologies from "@/components/replatforming/ReplatformingTechnologies";
import ReplatformingCaseStudies from "@/components/replatforming/ReplatformingCaseStudies";
import ReplatformingProcess from "@/components/replatforming/ReplatformingProcess";
import ReplatformingAutomation from "@/components/replatforming/ReplatformingAutomation";
import PageCTA from "@/components/PageCTA";
import WhyCorewaySection from "@/components/WhyCorewaySection";
import FAQ from "@/components/FAQ";
import sampleFAQs from '@/data/faqs.json';
import whyCorewayData from '@/data/why-coreway.json';
import SubHeader from "@/components/SubHeader";
import CategoryGrid from "@/components/category/CategoryGrid";
import AuditCTA from "@/components/blog/AuditCTA";

export default function AIAgentPage() {
  const subHeaderItems = [
    { label: "Overview", sectionId: "overview" },
    { label: "Solutions", sectionId: "features" },
    { label: "Our Process", sectionId: "process" },
    { label: "FAQ", sectionId: "faq" },
  ];

  const solutions = [

    {
      title: "Replatforming & Migration",
      description: "Migrate and modernize your existing platforms with minimal downtime and maximum efficiency.",
      href: "/solution/replatforming-migration",
      icon: "refresh-cw",
    },
    {
      title: "UGS Ads",
      description: "Enhance your marketing campaigns with intelligent ad targeting and performance tracking.",
      href: "/solution/ugs-ads",
      icon: "megaphone",
    },
    {
      title: "DBDashbot",
      description: "Automate and monitor your database operations with real-time insights and notifications.",
      href: "/solution/dbdashbot",
      icon: "database",
    },
    {
      title: "AI Chat with PDF",
      description: "Interact with PDF documents using AI-powered chat for quick data extraction and analysis.",
      href: "/solution/ai-chat-with-pdf",
      icon: "file-text",
    },
    {
      title: "RAG Chatbot",
      description: "Deploy a Retrieval-Augmented Generation chatbot for intelligent, context-aware conversations.",
      href: "/solution/rag-chatbot",
      icon: "message-square",
    },
    {
      title: "Image Recognition Chatbot",
      description: "Use AI-powered image recognition integrated into chat interfaces for smarter user interactions.",
      href: "/solution/image-reorganization-tool",
      icon: "scan-eye",
    }
  ];



  return (
    <div className="min-h-screen bg-[#0E0918]">
      <header className="page-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Solutions", href: "/solutions" },
              { label: "AI Agent" },
            ]}
          />
        </div>
      </header>


      <main>
        <ReplatformingHero
          title={aiAgentData.hero.title}
          title2={aiAgentData.hero.title2}
          subtitle={aiAgentData.hero.subtitle}
          buttons={aiAgentData.hero.buttons}
        />

        <CategoryGrid items={solutions} columns={3} />
        <AuditCTA />

        <WhyCorewaySection
          badge={whyCorewayData["ai-agent"].badge}
          title={whyCorewayData["ai-agent"].title}
          subtitle={whyCorewayData["ai-agent"].subtitle}
          reasons={whyCorewayData["ai-agent"].reasons}
        />

        <FAQ
          badge="Help Center"
          title="Frequently Asked Questions"
          description="Everything you need to know about our solutions and services"
          faqs={sampleFAQs["ai-agent"]}
          columns={1}
          showContactCTA={true}
          contactText="Still have questions?"
          contactButtonText="Contact Our Team"
        />



        <PageCTA
          badge="Ready to Deploy AI?"
          title="Transform Your Business with AI Agents"
          description="Let's build intelligent AI agents tailored to your needs. Our expert team delivers custom solutions that automate workflows, enhance customer experiences, and drive business growth."
          primaryButtonText="Get Started"
          secondaryButtonText="View Solutions"
          footerText="Custom AI solutions • Enterprise-grade security • Continuous optimization"
        />
      </main>


    </div>
  );
}
