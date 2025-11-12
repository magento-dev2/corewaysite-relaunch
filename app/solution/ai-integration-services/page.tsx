"use client";

import Head from "next/head";
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

export default function AIIntegrationServices() {
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
    <>
      <Head>
        <title>AI Integration Services | Coreway Solution</title>
        <meta
          name="description"
          content="Seamless AI integration services. Connect OpenAI, Google AI, AWS AI with your systems. Expert API integration, chatbots, and intelligent automation."
        />
        <meta property="og:title" content="AI Integration Services | Coreway" />
        <meta
          property="og:description"
          content="Connect artificial intelligence with your existing systems for enhanced automation and intelligent workflows."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${siteUrl}/solution/ai-integration-services`}
        />
        <link
          rel="canonical"
          href={`${siteUrl}/solution/ai-integration-services`}
        />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Head>

      <div className="min-h-screen bg-[#0E0918]">
        <header className="pt-20">
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
            subtitle={aiIntegrationData.hero.subtitle}
            buttons={aiIntegrationData.hero.buttons}
          />

          <AIIntegrationOverview
            title={aiIntegrationData.overview.title}
            content={aiIntegrationData.overview.content}
            image={aiIntegrationData.overview.image}
          />

          <AIIntegrationFeatures
            title={aiIntegrationData.features.title}
            items={aiIntegrationData.features.items}
          />

          <AIIntegrationTechnologies
            title={aiIntegrationData.platforms.title}
            description={aiIntegrationData.platforms.description}
            items={aiIntegrationData.platforms.items}
          />

          <AIIntegrationCaseStudies
            title={aiIntegrationData.caseStudies.title}
            cases={aiIntegrationData.caseStudies.cases}
          />

          <AIIntegrationProcess
            title={aiIntegrationData.process.title}
            description={aiIntegrationData.process.description}
            steps={aiIntegrationData.process.steps}
          />

          <AIIntegrationAutomation
            title={aiIntegrationData.automation.title}
            description={aiIntegrationData.automation.description}
            features={aiIntegrationData.automation.features}
          />

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
    </>
  );
}
