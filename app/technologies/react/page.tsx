"use client";

import Head from "next/head";
import reactData from "../../../data/reactData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import TechHero from "@/components/technologies/TechHero";
import TechOverview from "@/components/technologies/TechOverview";
import TechFeatures from "@/components/technologies/TechFeatures";
import TechStack from "@/components/technologies/TechStack";
import TechUseCases from "@/components/technologies/TechUseCases";
import ProcessDiagram from "@/components/commerce/ProcessDiagram";
import AutomationSection from "@/components/commerce/AutomationSection";
import PageCTA from "@/components/PageCTA";

export default function ReactTechnologyPage() {
  const siteUrl = "https://www.corewaysolution.com";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Technologies",
        item: `${siteUrl}/technologies`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "React Development",
        item: `${siteUrl}/technologies/react`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "React Development Services",
    description:
      "Expert React development for SPAs, progressive web apps, and enterprise solutions. Build fast, scalable applications.",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "React Development",
    areaServed: "Worldwide",
  };

  return (
    <>
      <Head>
        <title>React Development Services | Coreway Solution</title>
        <meta
          name="description"
          content="Expert React development for building fast, scalable web applications. SPAs, PWAs, enterprise solutions with modern React architecture."
        />
        <meta
          property="og:title"
          content="React Development Services | Coreway"
        />
        <meta
          property="og:description"
          content="Build lightning-fast React applications with our expert development team. Component-based architecture for scalable solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/technologies/react`} />
        <link rel="canonical" href={`${siteUrl}/technologies/react`} />
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
                { label: "Technologies", href: "/technologies" },
                { label: "React Development" },
              ]}
            />
          </div>
        </header>

        <main>
          <TechHero
            title={reactData.hero.title}
            title2={reactData.hero.title2}
            subtitle={reactData.hero.subtitle}
            buttons={reactData.hero.buttons}
            img={reactData.hero.img}
          />

          <TechOverview
            title={reactData.overview.title}
            content={reactData.overview.content}
            image={reactData.overview.image}
            stats={reactData.overview.stats}
          />

          <TechFeatures
            title={reactData.features.title}
            items={reactData.features.items}
          />

          <TechStack
            title={reactData.technologies.title}
            description={reactData.technologies.description}
            items={reactData.technologies.items}
          />

          <TechUseCases
            title={reactData.useCases.title}
            cases={reactData.useCases.cases}
          />

          <ProcessDiagram
            title={reactData.process.title}
            description={reactData.process.description}
            steps={reactData.process.steps}
          />

          <AutomationSection
            title={reactData.benefits.title}
            description={reactData.benefits.description}
            features={reactData.benefits.features}
          />

          <PageCTA
            badge="Start Building"
            title="Ready to Build with React?"
            description="Let's create fast, scalable React applications that deliver exceptional user experiences. Our expert team is ready to bring your vision to life with modern React architecture."
            primaryButtonText="Start Your Project"
            secondaryButtonText="View Portfolio"
            footerText="Free consultation • Expert developers • Proven results"
          />
        </main>
      </div>
    </>
  );
}
