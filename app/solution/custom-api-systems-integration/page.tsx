import customApiData from "../../../data/customApiData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import CustomAPIHero from "@/components/customapi/CustomAPIHero";
import CustomAPIOverview from "@/components/customapi/CustomAPIOverview";
import CustomAPIFeatures from "@/components/customapi/CustomAPIFeatures";
import CustomAPITechnologies from "@/components/customapi/CustomAPITechnologies";
import CustomAPICaseStudies from "@/components/customapi/CustomAPICaseStudies";
import CustomAPIProcess from "@/components/customapi/CustomAPIProcess";
import CustomAPIAutomation from "@/components/customapi/CustomAPIAutomation";
import PageCTA from "@/components/PageCTA";
import WhyCorewaySection from "@/components/WhyCorewaySection";
import FAQ from "@/components/FAQ";
import sampleFAQs from '@/data/faqs.json';
import whyCorewayData from '@/data/why-coreway.json';
import SubHeader from "@/components/SubHeader";
import PortfolioHighlights from "@/components/home/PortfolioHighlights";
import {
  getServiceSchema,
  getWebPageSchema,
  schemaToJsonLd
} from "@/lib/schema";
import Script from "next/script";


export default function CustomAPISystemsIntegration() {
  const subHeaderItems = [
    { label: "Overview", sectionId: "overview" },
    { label: "Capabilities", sectionId: "features" },
    { label: "Our Process", sectionId: "process" },
    { label: "FAQ", sectionId: "faq" },
  ];

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Solutions", url: "/solutions" },
    { name: "Custom API & Systems Integration", url: "/solution/custom-api-systems-integration" },
  ];

  const webPageSchema = getWebPageSchema(
    "Custom API & Systems Integration | Coreway Solution",
    "Expert API development and systems integration services. RESTful APIs, GraphQL, webhooks, and seamless third-party integrations.",
    "/solution/custom-api-systems-integration",
    breadcrumbItems
  );

  const serviceSchema = getServiceSchema(
    "API Development & Systems Integration",
    "Expert API development and systems integration services. RESTful APIs, GraphQL, webhooks, and seamless third-party integrations."
  );

  return (
    <div className="min-h-screen bg-[#0E0918]">
      <Script
        id="custom-api-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={schemaToJsonLd(webPageSchema)}
      />
      <Script
        id="custom-api-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={schemaToJsonLd(serviceSchema)}
      />
      <header className="page-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Solutions", href: "/solutions" },
              { label: "Custom API & Systems Integration" },
            ]}
          />
        </div>
      </header>

      <main>
        <CustomAPIHero
          title={customApiData.hero.title}
          title2={customApiData.hero.title2}
          subtitle={customApiData.hero.subtitle}
          buttons={customApiData.hero.buttons}
        />

        <SubHeader title="Custom API & Systems Integration" items={subHeaderItems} />

        <div id="overview">
          <CustomAPIOverview
            title={customApiData.overview.title}
            content={customApiData.overview.content}
            image={customApiData.overview.image}
          />
        </div>

        <div id="features">
          <CustomAPIFeatures
            title={customApiData.features.title}
            items={customApiData.features.items}
          />
        </div>

        <CustomAPITechnologies
          title={customApiData.platforms.title}
          description={customApiData.platforms.description}
          items={customApiData.platforms.items}
        />

        {/* <CustomAPICaseStudies
            title={customApiData.caseStudies.title}
            cases={customApiData.caseStudies.cases}
          /> */}

        <PortfolioHighlights />

        <div id="process">
          <CustomAPIProcess
            title={customApiData.process.title}
            description={customApiData.process.description}
            steps={customApiData.process.steps}
          />
        </div>

        <CustomAPIAutomation
          title={customApiData.automation.title}
          description={customApiData.automation.description}
          features={customApiData.automation.features}
        />
        <WhyCorewaySection
          badge={whyCorewayData["custom-api-systems-integration"].badge}
          title={whyCorewayData["custom-api-systems-integration"].title}
          subtitle={whyCorewayData["custom-api-systems-integration"].subtitle}
          reasons={whyCorewayData["custom-api-systems-integration"].reasons}
        />
        <div id="faq">
          <FAQ
            badge="Help Center"
            title="Common Questions & Answers"
            description="Everything you need to know about our services and how we work"
            faqs={sampleFAQs["custom-api-systems-integration"]}
            columns={1}
            showContactCTA={true}
            contactText="Still have questions?"
            contactButtonText="Contact Our Team"
          />
        </div>

        <PageCTA
          badge="Ready to integrate?"
          title="Ready to Build Your Custom API?"
          description="Let's design and develop robust API solutions that connect your systems seamlessly. Our expert team delivers secure, scalable, and well-documented APIs."
          primaryButtonText="Start Integration"
          secondaryButtonText="View Work"
          footerText="Free API consultation • Comprehensive documentation • 24/7 support"
        />
      </main>
    </div>
  );
}
