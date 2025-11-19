"use client";

import Head from "next/head";
import replatformingData from "../../../data/replatformingData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import ReplatformingHero from "@/components/replatforming/ReplatformingHero";
import ReplatformingOverview from "@/components/replatforming/ReplatformingOverview";
import ReplatformingFeatures from "@/components/replatforming/ReplatformingFeatures";
import ReplatformingTechnologies from "@/components/replatforming/ReplatformingTechnologies";
import ReplatformingCaseStudies from "@/components/replatforming/ReplatformingCaseStudies";
import ReplatformingProcess from "@/components/replatforming/ReplatformingProcess";
import ReplatformingAutomation from "@/components/replatforming/ReplatformingAutomation";
import PageCTA from "@/components/PageCTA";

export default function ReplatformingMigration() {
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
        name: "Replatforming & Migration",
        item: `${siteUrl}/solution/replatforming-migration`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Platform Migration & Replatforming Services",
    description:
      "Seamless platform migration and replatforming services with zero downtime for e-commerce, SaaS, and enterprise applications",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "Platform Migration & Replatforming",
    areaServed: "Worldwide",
  };

  return (
    <>
      <Head>
        <title>Platform Migration & Replatforming Services | Coreway Solution</title>
        <meta
          name="description"
          content="Expert platform migration and replatforming services. Zero downtime cloud migration, e-commerce replatforming, and legacy system modernization."
        />
        <meta property="og:title" content="Platform Migration Services | Coreway" />
        <meta
          property="og:description"
          content="Modernize your technology stack with zero downtime. Expert migration services for e-commerce, SaaS, and enterprise applications."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${siteUrl}/solution/replatforming-migration`}
        />
        <link
          rel="canonical"
          href={`${siteUrl}/solution/replatforming-migration`}
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
                { label: "Replatforming & Migration" },
              ]}
            />
          </div>
        </header>

        <main>
          <ReplatformingHero
            title={replatformingData.hero.title}
            title2={replatformingData.hero.title2}
            subtitle={replatformingData.hero.subtitle}
            buttons={replatformingData.hero.buttons}
          />

          <ReplatformingOverview
            title={replatformingData.overview.title}
            content={replatformingData.overview.content}
            image={replatformingData.overview.image}
          />

          <ReplatformingFeatures
            title={replatformingData.features.title}
            items={replatformingData.features.items}
          />

          <ReplatformingTechnologies
            title={replatformingData.platforms.title}
            description={replatformingData.platforms.description}
            items={replatformingData.platforms.items}
          />

          <ReplatformingCaseStudies
            title={replatformingData.caseStudies.title}
            cases={replatformingData.caseStudies.cases}
          />

          <ReplatformingProcess
            title={replatformingData.process.title}
            description={replatformingData.process.description}
            steps={replatformingData.process.steps}
          />

          <ReplatformingAutomation
            title={replatformingData.automation.title}
            description={replatformingData.automation.description}
            features={replatformingData.automation.features}
          />

          <PageCTA
            badge="Ready to migrate?"
            title="Ready to Modernize Your Platform?"
            description="Let's plan your seamless migration journey. Our expert team ensures zero downtime, complete data integrity, and improved performance on your new platform."
            primaryButtonText="Start Migration"
            secondaryButtonText="Get Assessment"
            footerText="Free migration assessment • Zero downtime • 100% data integrity"
          />
        </main>
      </div>
    </>
  );
}
