"use client";

import Head from "next/head";
import healthcareData from "../../../data/pharmaceuticalsHealthcareData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import HealthcareHero from "@/components/healthcare/HealthcareHero";
import HealthcareOverview from "@/components/healthcare/HealthcareOverview";
import HealthcareFeatures from "@/components/healthcare/HealthcareFeatures";
import PlatformExpertise from "@/components/commerce/PlatformExpertise";
import CaseStudies from "@/components/commerce/CaseStudies";
import ProcessDiagram from "@/components/commerce/ProcessDiagram";
import AutomationSection from "@/components/commerce/AutomationSection";
import PageCTA from "@/components/PageCTA";

export default function PharmaceuticalsHealthcarePage() {
  const siteUrl = "https://www.corewaysolution.com";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Industries",
        item: `${siteUrl}/industries`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Pharmaceuticals & Healthcare Solutions",
        item: `${siteUrl}/industries/pharmaceuticals-healthcare`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pharmaceuticals & Healthcare Digital Solutions",
    description:
      "HIPAA-compliant platforms, telemedicine integration, patient portals, prescription management, and AI-powered healthcare solutions.",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "Healthcare Technology Solutions",
    areaServed: "Worldwide",
  };

  return (
    <>
      <Head>
        <title>
          Pharmaceuticals & Healthcare Digital Solutions | Coreway Solution
        </title>
        <meta
          name="description"
          content="HIPAA-compliant telemedicine platforms, patient portals, EHR integration, prescription management, and AI diagnostics for healthcare providers."
        />
        <meta
          property="og:title"
          content="Pharmaceuticals & Healthcare Solutions | Coreway"
        />
        <meta
          property="og:description"
          content="Secure, compliant healthcare technology solutions including telemedicine, patient portals, and AI diagnostics."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${siteUrl}/industries/pharmaceuticals-healthcare`}
        />
        <link
          rel="canonical"
          href={`${siteUrl}/industries/pharmaceuticals-healthcare`}
        />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Head>

      <div className="min-h-screen bg-[#0E0918]">
        <header className="pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Industries", href: "/industries" },
                { label: "Pharmaceuticals & Healthcare Solutions" },
              ]}
            />
          </div>
        </header>

        <main>
          <HealthcareHero
            title={healthcareData.hero.title}
            title2={healthcareData.hero.title2}
            subtitle={healthcareData.hero.subtitle}
            buttons={healthcareData.hero.buttons}
            img={healthcareData.hero.img}
          />

          <HealthcareOverview
            title={healthcareData.overview.title}
            content={healthcareData.overview.content}
            image={healthcareData.overview.image}
          />

          <HealthcareFeatures
            title={healthcareData.features.title}
            items={healthcareData.features.items}
          />

          <PlatformExpertise
            title={healthcareData.platforms.title}
            description={healthcareData.platforms.description}
            items={healthcareData.platforms.items}
          />

          <CaseStudies
            title={healthcareData.caseStudies.title}
            cases={healthcareData.caseStudies.cases}
          />

          <ProcessDiagram
            title={healthcareData.process.title}
            description={healthcareData.process.description}
            steps={healthcareData.process.steps}
          />

          <AutomationSection
            title={healthcareData.automation.title}
            description={healthcareData.automation.description}
            features={healthcareData.automation.features}
          />

          <PageCTA
            badge="Transform Healthcare"
            title="Ready to Innovate Healthcare Delivery?"
            description="Let's build secure, HIPAA-compliant platforms that improve patient outcomes, streamline operations, and drive innovation in healthcare. Our team specializes in healthcare technology solutions."
            primaryButtonText="Start Your Project"
            secondaryButtonText="View Healthcare Cases"
            footerText="Free consultation • HIPAA expertise • Proven compliance"
          />
        </main>
      </div>
    </>
  );
}
