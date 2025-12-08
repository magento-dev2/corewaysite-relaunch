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


export default function CustomAPISystemsIntegration() {
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
        name: "Custom API & Systems Integration",
        item: `${siteUrl}/solution/custom-api-systems-integration`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom API & Systems Integration Solutions",
    description:
      "Expert API development and systems integration services. RESTful APIs, GraphQL, webhooks, and seamless third-party integrations.",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "API Development & Systems Integration",
    areaServed: "Worldwide",
  };

  return (
    <div className="min-h-screen bg-[#0E0918]">
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

          <CustomAPICaseStudies
            title={customApiData.caseStudies.title}
            cases={customApiData.caseStudies.cases}
          />

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
            secondaryButtonText="View Documentation"
            footerText="Free API consultation • Comprehensive documentation • 24/7 support"
          />
        </main>
      </div>
  );
}
