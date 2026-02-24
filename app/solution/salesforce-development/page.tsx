import salesforceDevelopmentData from "@/data/salesforceDevelopmentData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import Hero from "@/components/aiagent/Hero";
import Overview from "@/components/aiagent/Overview";
import Solutions from "@/components/aiagent/Solutions";
import SaaSIntegration from "@/components/aiagent/SaaSIntegration";
import UseCases from "@/components/aiagent/UseCases";
import Process from "@/components/aiagent/Process";
import Technologies from "@/components/aiagent/Technologies";
import Engagement from "@/components/aiagent/Engagement";
import WhyCorewaySection from "@/components/WhyCorewaySection";
import whyCorewayData from "@/data/why-coreway.json";
import PageCTA from "@/components/PageCTA";
import { Metadata } from "next";
import CategoryGrid from "@/components/category/CategoryGrid";
import SubHeader from "@/components/SubHeader";

export const metadata: Metadata = {
  title: "Salesforce Development Services | Salesforce CRM Solutions | Coreway Solution",
  description:
    "Coreway Solution provides Salesforce development services including CRM implementation, customization, integrations, and automation to improve business operations.",
  keywords:
    "Salesforce development, Salesforce CRM, Salesforce implementation, Salesforce customization, CRM integration, workflow automation",
  openGraph: {
    title: "Salesforce Development Services | Salesforce CRM Solutions | Coreway Solution",
    description:
      "Expert Salesforce development services including CRM implementation, customization, integrations, and automation.",
    url: "https://corewaysolution.com/solution/salesforce-development",
    type: "website",
  },
};

export default function SalesforceDevelopmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Salesforce Development",
    description:
      "Professional Salesforce development services including CRM implementation, customization, integrations, and automation.",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
  };

  const subServices = [
    {
      title: "Salesforce Omnistudio",
      description: "Build digital-first industry experiences using Omnistudio's powerful suite of task-specific tools and components.",
      href: "/solution/salesforce-development/omnistudio",
      icon: "sparkles",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Salesforce Architect",
      description: "Expert Salesforce architectural guidance to ensure scalable, secure, and robust enterprise solutions.",
      href: "/solution/salesforce-development/architect",
      icon: "briefcase",
      gradient: "from-purple-500 to-indigo-500",
    },
  ];

  const subHeaderItems = [
    { label: "Overview", sectionId: "overview" },
    { label: "Services", sectionId: "services" },
    { label: "Industry Solutions", sectionId: "industry-solutions" },
    { label: "Use Cases", sectionId: "use-cases" },
    { label: "Approach", sectionId: "approach" },
    { label: "Tech", sectionId: "tech" },
    { label: "Engagement", sectionId: "engagement" },
    { label: "Contact", sectionId: "contact" },
  ];

  return (
    <div className="min-h-screen bg-[#0E0918]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="page-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Solutions", href: "/solutions" },
              { label: "Salesforce Development" },
            ]}
          />
        </div>
      </header>

      <main>
        <Hero
          title={salesforceDevelopmentData.hero.title}
          title2={salesforceDevelopmentData.hero.title2}
          subtitle={salesforceDevelopmentData.hero.subtitle}
          buttons={salesforceDevelopmentData.hero.buttons}
          img={salesforceDevelopmentData.hero.img}
        />

        <SubHeader title="Salesforce Development" items={subHeaderItems} />

        <div id="overview">
          <Overview
            title={salesforceDevelopmentData.overview.title}
            content={salesforceDevelopmentData.overview.content}
            image={salesforceDevelopmentData.overview.image}
            highlights={salesforceDevelopmentData.overview.listItems}
          />
        </div>

        <div id="services">
          <Solutions
            title={salesforceDevelopmentData.solutions.title}
            items={salesforceDevelopmentData.solutions.items}
          />
        </div>

        <div id="industry-solutions">
          <SaaSIntegration
            title={salesforceDevelopmentData.saasSection.title}
            subtitle={salesforceDevelopmentData.saasSection.subtitle}
            items={salesforceDevelopmentData.saasSection.items}
            img={salesforceDevelopmentData.saasSection.img}
          />
        </div>

        <div id="use-cases">
          <UseCases
            title={salesforceDevelopmentData.caseStudies.title}
            cases={salesforceDevelopmentData.caseStudies.cases}
            hideButton={true}
          />
        </div>

        <div id="approach">
          <Process
            title={salesforceDevelopmentData.process.title}
            description={salesforceDevelopmentData.process.description}
            steps={salesforceDevelopmentData.process.steps}
          />
        </div>

        <WhyCorewaySection
          badge={whyCorewayData["salesforce-development"].badge}
          title={whyCorewayData["salesforce-development"].title}
          subtitle={whyCorewayData["salesforce-development"].subtitle}
          reasons={whyCorewayData["salesforce-development"].reasons}
        />

        <div id="tech">
          <Technologies
            title={salesforceDevelopmentData.technologies.title}
            description={salesforceDevelopmentData.technologies.description}
            items={salesforceDevelopmentData.technologies.items}
          />
        </div>

        <section id="sub-services" className="py-20 bg-[#0E0918]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Explore Specialized Services</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Dive deeper into our specialized Salesforce capabilities designed for enterprise excellence.</p>
            </div>
            <CategoryGrid items={subServices} columns={2} />
          </div>
        </section>

        <div id="engagement">
          <Engagement
            title={salesforceDevelopmentData.engagement.title}
            items={salesforceDevelopmentData.engagement.items}
          />
        </div>

        <div id="contact">
          <PageCTA
            badge={salesforceDevelopmentData.cta.badge}
            title={salesforceDevelopmentData.cta.title}
            description={salesforceDevelopmentData.cta.description}
            primaryButtonText={salesforceDevelopmentData.cta.primaryButtonText}
            secondaryButtonText={salesforceDevelopmentData.cta.secondaryButtonText}
            secondaryButtonlink="/contact"
          />
        </div>
      </main>
    </div>
  );
}
