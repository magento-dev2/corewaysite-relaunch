import saasDevOpsData from "../../../data/saasDevOpsData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import SaaSHero from "@/components/saas/SaaSHero";
import SaaSOverview from "@/components/saas/SaaSOverview";
import SaaSFeatures from "@/components/saas/SaaSFeatures";
import SaaSTechnologies from "@/components/saas/SaaSTechnologies";
import SaaSCaseStudies from "@/components/saas/SaaSCaseStudies";
import SaaSProcess from "@/components/saas/SaaSProcess";
import SaaSAutomation from "@/components/saas/SaaSAutomation";
import PageCTA from "@/components/PageCTA";
import WhyCorewaySection from "@/components/WhyCorewaySection";
import FAQ from "@/components/FAQ";
import sampleFAQs from '@/data/faqs.json';
import whyCorewayData from '@/data/why-coreway.json';
import SubHeader from "@/components/SubHeader";
import Script from "next/script";
import PortfolioHighlights from "@/components/home/PortfolioHighlights";


export default function SaaSInfrastructureDevOps() {
  const subHeaderItems = [
    { label: "Overview", sectionId: "overview" },
    { label: "Capabilities", sectionId: "features" },
    { label: "Our Process", sectionId: "process" },
    { label: "FAQ", sectionId: "faq" },
  ];

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Solutions", url: "/solutions" },
    { name: "SaaS Infrastructure & DevOps", url: "/solution/saas-infrastructure-devops" },
  ];



  return (
    <div className="min-h-screen bg-[#0E0918]">
      <header className="page-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Solutions", href: "/solutions" },
              { label: "SaaS Infrastructure & DevOps" },
            ]}
          />
        </div>
      </header>

      <main>
        <SaaSHero
          title={saasDevOpsData.hero.title}
          title2={saasDevOpsData.hero.title2}
          subtitle={saasDevOpsData.hero.subtitle}
          buttons={saasDevOpsData.hero.buttons}
        />

        <SubHeader title="SaaS Infrastructure & DevOps" items={subHeaderItems} />

        <div id="overview">
          <SaaSOverview
            title={saasDevOpsData.overview.title}
            content={saasDevOpsData.overview.content}
            image={saasDevOpsData.overview.image}
          />
        </div>

        <div id="features">
          <SaaSFeatures
            title={saasDevOpsData.features.title}
            items={saasDevOpsData.features.items}
          />
        </div>

        <SaaSTechnologies
          title={saasDevOpsData.platforms.title}
          description={saasDevOpsData.platforms.description}
          items={saasDevOpsData.platforms.items}
        />

        {/* <SaaSCaseStudies
            title={saasDevOpsData.caseStudies.title}
            cases={saasDevOpsData.caseStudies.cases}
          /> */}
        <PortfolioHighlights />

        <div id="process">
          <SaaSProcess
            title={saasDevOpsData.process.title}
            description={saasDevOpsData.process.description}
            steps={saasDevOpsData.process.steps}
          />
        </div>

        <SaaSAutomation
          title={saasDevOpsData.automation.title}
          description={saasDevOpsData.automation.description}
          features={saasDevOpsData.automation.features}
        />
        <WhyCorewaySection
          badge={whyCorewayData["saas-infrastructure-devops"].badge}
          title={whyCorewayData["saas-infrastructure-devops"].title}
          subtitle={whyCorewayData["saas-infrastructure-devops"].subtitle}
          reasons={whyCorewayData["saas-infrastructure-devops"].reasons}
        />
        <div id="faq">
          <FAQ
            badge="Help Center"
            title="Common Questions & Answers"
            description="Everything you need to know about our services and how we work"
            faqs={sampleFAQs["saas-infrastructure-devops"]}
            columns={1}
            showContactCTA={true}
            contactText="Still have questions?"
            contactButtonText="Contact Our Team"
          />
        </div>

        <PageCTA
          badge="Ready to scale?"
          title="Ready to Transform Your Infrastructure?"
          description="Let's build scalable, secure cloud infrastructure with modern DevOps practices. Our team is ready to help you achieve continuous delivery and automation at scale."
          primaryButtonText="Get Started"
          secondaryButtonText="View Our Work"
          footerText="Free consultation • Custom solutions • Enterprise support"
        />
      </main>
    </div>
  );
}
