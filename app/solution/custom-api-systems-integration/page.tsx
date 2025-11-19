"use client";

import Head from "next/head";
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

export default function CustomAPISystemsIntegration() {
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
    <>
      <Head>
        <title>Custom API & Systems Integration | Coreway Solution</title>
        <meta
          name="description"
          content="Expert custom API development and systems integration. RESTful APIs, GraphQL, webhooks, third-party integrations, and microservices architecture."
        />
        <meta property="og:title" content="Custom API Integration Services | Coreway" />
        <meta
          property="og:description"
          content="Connect your business systems seamlessly. Expert API development, third-party integrations, and custom middleware solutions."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${siteUrl}/solution/custom-api-systems-integration`}
        />
        <link
          rel="canonical"
          href={`${siteUrl}/solution/custom-api-systems-integration`}
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

          <CustomAPIOverview
            title={customApiData.overview.title}
            content={customApiData.overview.content}
            image={customApiData.overview.image}
          />

          <CustomAPIFeatures
            title={customApiData.features.title}
            items={customApiData.features.items}
          />

          <CustomAPITechnologies
            title={customApiData.platforms.title}
            description={customApiData.platforms.description}
            items={customApiData.platforms.items}
          />

          <CustomAPICaseStudies
            title={customApiData.caseStudies.title}
            cases={customApiData.caseStudies.cases}
          />

          <CustomAPIProcess
            title={customApiData.process.title}
            description={customApiData.process.description}
            steps={customApiData.process.steps}
          />

          <CustomAPIAutomation
            title={customApiData.automation.title}
            description={customApiData.automation.description}
            features={customApiData.automation.features}
          />

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
    </>
  );
}
