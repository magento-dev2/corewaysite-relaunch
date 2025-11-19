"use client";

import Head from "next/head";
import automotiveData from "../../../data/automotiveData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import DatasetHero from "@/components/dataset/DatasetHero";
import DatasetOverview from "@/components/dataset/DatasetOverview";
import DatasetFeatures from "@/components/dataset/DatasetFeatures";
import DatasetTechnologies from "@/components/dataset/DatasetTechnologies";
import DatasetCaseStudies from "@/components/dataset/DatasetCaseStudies";
import DatasetProcess from "@/components/dataset/DatasetProcess";
import DatasetAutomation from "@/components/dataset/DatasetAutomation";
import PageCTA from "@/components/PageCTA";

export default function AutomotivePage() {
  const siteUrl = "https://www.corewaysolution.com";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Industries", item: `${siteUrl}/industries` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Automotive Solutions",
        item: `${siteUrl}/industries/automotive`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Automotive Digital Transformation Solutions",
    description:
      "Connected vehicles, smart manufacturing, AI-powered diagnostics, and next-generation mobility solutions for the automotive industry.",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "Automotive Technology Solutions",
    areaServed: "Worldwide",
  };

  return (
    <>
      <Head>
        <title>Automotive Digital Transformation Solutions | Coreway Solution</title>
        <meta
          name="description"
          content="Drive innovation in automotive with connected vehicles, smart manufacturing, AI diagnostics, and mobility solutions. Industry 4.0 for automotive."
        />
        <meta property="og:title" content="Automotive Solutions | Coreway" />
        <meta
          property="og:description"
          content="Connected vehicle platforms, autonomous driving systems, smart factory automation, and predictive maintenance for automotive industry."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${siteUrl}/industries/automotive`}
        />
        <link
          rel="canonical"
          href={`${siteUrl}/industries/automotive`}
        />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Head>

      <div className="min-h-screen bg-[#0E0918]">
        <header className="pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Industries", href: "/industries" },
                { label: "Automotive Solutions" },
              ]}
            />
          </div>
        </header>

        <main>
          <DatasetHero
            title={automotiveData.hero.title}
            title2={automotiveData.hero.title2}
            subtitle={automotiveData.hero.subtitle}
            buttons={automotiveData.hero.buttons}
            img={automotiveData.hero.img}
          />

          <DatasetOverview
            title={automotiveData.overview.title}
            content={automotiveData.overview.content}
            image={automotiveData.overview.image}
          />

          <DatasetFeatures
            title={automotiveData.features.title}
            items={automotiveData.features.items}
          />

          <DatasetTechnologies
            title={automotiveData.platforms.title}
            description={automotiveData.platforms.description}
            items={automotiveData.platforms.items}
          />

          <DatasetCaseStudies
            title={automotiveData.caseStudies.title}
            cases={automotiveData.caseStudies.cases}
          />

          <DatasetProcess
            title={automotiveData.process.title}
            description={automotiveData.process.description}
            steps={automotiveData.process.steps}
          />

          <DatasetAutomation
            title={automotiveData.automation.title}
            description={automotiveData.automation.description}
            features={automotiveData.automation.features}
          />

          <PageCTA
            badge="Drive Innovation"
            title="Ready to Transform Your Automotive Business?"
            description="Let's build next-generation automotive solutions that drive innovation, efficiency, and customer satisfaction. Our expert team delivers cutting-edge connected vehicle and smart manufacturing solutions."
            primaryButtonText="Start Your Project"
            secondaryButtonText="View Case Studies"
            footerText="Free consultation • Automotive expertise • ISO 26262 compliant"
          />
        </main>
      </div>
    </>
  );
}
