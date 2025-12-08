import aiIntegrationData from "../../../data/aiIntegrationData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import AIIntegrationHero from "@/components/aiintegration/AIIntegrationHero";
import AIIntegrationOverview from "@/components/aiintegration/AIIntegrationOverview";
import AIIntegrationFeatures from "@/components/aiintegration/AIIntegrationFeatures";
import AIIntegrationTechnologies from "@/components/aiintegration/AIIntegrationTechnologies";
import AIIntegrationCaseStudies from "@/components/aiintegration/AIIntegrationCaseStudies";
import AIIntegrationProcess from "@/components/aiintegration/AIIntegrationProcess";
import AIIntegrationAutomation from "@/components/aiintegration/AIIntegrationAutomation";
import PageCTA from "@/components/PageCTA";
import WhyCorewaySection from "@/components/WhyCorewaySection";
import FAQ from "@/components/FAQ";
import sampleFAQs from '@/data/faqs.json';
import whyCorewayData from '@/data/why-coreway.json';
import SubHeader from "@/components/SubHeader";

export default function AIIntegrationServices() {
  const subHeaderItems = [
    { label: "Overview", sectionId: "overview" },
    { label: "Capabilities", sectionId: "features" },
    { label: "Our Process", sectionId: "process" },
    { label: "FAQ", sectionId: "faq" },
  ];

  const siteUrl = "https://www.corewaysolution.com";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Solutions", item: `${siteUrl}/solutions` },
      {
        "@type": "ListItem",
        position: 3,
        name: "AI Integration Services",
        item: `${siteUrl}/solution/ai-integration-services`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Integration Services",
    description:
      "Connect artificial intelligence with your existing systems for enhanced automation and intelligent workflows",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "AI Integration & API Connectivity",
    areaServed: "Worldwide",
  };

  return (
    <div className="min-h-screen bg-[#0E0918]">
        <header className="page-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Solutions", href: "/solutions" },
                { label: "AI Integration Services" },
              ]}
            />
          </div>
        </header>

        <main>
          <AIIntegrationHero
            title={aiIntegrationData.hero.title}
            title2={aiIntegrationData.hero.title2}
            subtitle={aiIntegrationData.hero.subtitle}
            buttons={aiIntegrationData.hero.buttons}
          />

          <SubHeader title="AI Integration Services" items={subHeaderItems} />

          <div id="overview">
            <AIIntegrationOverview
            title={aiIntegrationData.overview.title}
            content={aiIntegrationData.overview.content}
            image={aiIntegrationData.overview.image}
          />
          </div>

          <div id="features">
            <AIIntegrationFeatures
            title={aiIntegrationData.features.title}
            items={aiIntegrationData.features.items}
          />
          </div>

          <AIIntegrationTechnologies
            title={aiIntegrationData.platforms.title}
            description={aiIntegrationData.platforms.description}
            items={aiIntegrationData.platforms.items}
          />

          <AIIntegrationCaseStudies
            title={aiIntegrationData.caseStudies.title}
            cases={aiIntegrationData.caseStudies.cases}
          />

          <div id="process">
            <AIIntegrationProcess
            title={aiIntegrationData.process.title}
            description={aiIntegrationData.process.description}
            steps={aiIntegrationData.process.steps}
          />
          </div>

          <AIIntegrationAutomation
            title={aiIntegrationData.automation.title}
            description={aiIntegrationData.automation.description}
            features={aiIntegrationData.automation.features}
          />
          <WhyCorewaySection
            badge={whyCorewayData["ai-integration-services"].badge}
            title={whyCorewayData["ai-integration-services"].title}
            subtitle={whyCorewayData["ai-integration-services"].subtitle}
            reasons={whyCorewayData["ai-integration-services"].reasons}
          />
          <div id="faq">
            <FAQ
            badge="Help Center"
            title="Common Questions & Answers"
            description="Everything you need to know about our services and how we work"
            faqs={sampleFAQs["ai-integration-services"]}
            columns={1}
            showContactCTA={true}
            contactText="Still have questions?"
            contactButtonText="Contact Our Team"
          />
          </div>


          <PageCTA
            badge="Ready to integrate?"
            title="Ready to Integrate AI into Your Systems?"
            description="Let's connect intelligent AI capabilities with your existing infrastructure. Our integration experts are ready to help you unlock the power of AI without disrupting your operations."
            primaryButtonText="Start Integration"
            secondaryButtonText="View Integrations"
            footerText="Free consultation • Expert integration • Zero downtime"
          />
        </main>
      </div>
  );
}
