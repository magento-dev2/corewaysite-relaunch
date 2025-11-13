"use client";

import Head from "next/head";
import commerceData from "../../../data/commerceData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import CommerceHero from "@/components/commerce/CommerceHero";
import CommerceOverview from "@/components/commerce/CommerceOverview";
import CommerceFeatures from "@/components/commerce/CommerceFeatures";
import PlatformExpertise from "@/components/commerce/PlatformExpertise";
import CaseStudies from "@/components/commerce/CaseStudies";
import ProcessDiagram from "@/components/commerce/ProcessDiagram";
import AutomationSection from "@/components/commerce/AutomationSection";
import PageCTA from "@/components/PageCTA";

export default function DigitalCommerce() {
  const siteUrl = "https://www.corewaysolution.com"; // absolute URL

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Solutions", item: `${siteUrl}/solutions` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Digital Commerce Transformation",
        item: `${siteUrl}/solution/digital-commerce-transformation`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Digital Commerce Transformation",
    description:
      "Headless, AI-driven, and composable commerce solutions for modern businesses",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "E-commerce Development",
    areaServed: "Worldwide",
  };

  return (
    <>
      <Head>
        <title>Digital Commerce Transformation | Coreway Solution</title>
        <meta
          name="description"
          content="Discover how Coreway empowers brands with headless, AI-driven, and composable commerce solutions. Transform your digital commerce experience."
        />
        <meta property="og:title" content="Digital Commerce Transformation | Coreway" />
        <meta
          property="og:description"
          content="Discover how Coreway empowers brands with headless, AI-driven, and composable commerce solutions."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${siteUrl}/solution/digital-commerce-transformation`}
        />
        <link
          rel="canonical"
          href={`${siteUrl}/solution/digital-commerce-transformation`}
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
                { label: "Digital Commerce Transformation" },
              ]}
            />
          </div>
        </header>

        <main>
          <CommerceHero
            title={commerceData.hero.title}
            subtitle={commerceData.hero.subtitle}
            buttons={commerceData.hero.buttons}
          />

          <CommerceOverview
            title={commerceData.overview.title}
            content={commerceData.overview.content}
            image={commerceData.overview.image}
          />

          <CommerceFeatures
            title={commerceData.features.title}
            items={commerceData.features.items}
          />

          <PlatformExpertise
            title={commerceData.platforms.title}
            description={commerceData.platforms.description}
            items={commerceData.platforms.items}
          />
{/* 
          <CaseStudies
            title={commerceData.caseStudies.title}
            cases={commerceData.caseStudies.cases}
          /> */}

          <ProcessDiagram
            title={commerceData.process.title}
            description={commerceData.process.description}
            steps={commerceData.process.steps}
          />

          <AutomationSection
            title={commerceData.automation.title}
            description={commerceData.automation.description}
            features={commerceData.automation.features}
          />

          <PageCTA
            badge="Ready to transform?"
            title="Ready to Upgrade Your Commerce?"
            description="Let's build a commerce experience that drives growth and delights your customers. Our team is ready to help you navigate the future of digital commerce."
            primaryButtonText="Book Consultation"
            secondaryButtonText="View Case Studies"
            footerText="Free consultation • Custom solutions • Proven results"
          />
        </main>
      </div>
    </>
  );
}
