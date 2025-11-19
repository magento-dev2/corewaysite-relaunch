"use client";

import Head from "next/head";
import nodeData from "../../../data/nodeData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import TechHero from "@/components/technologies/TechHero";
import TechOverview from "@/components/technologies/TechOverview";
import TechFeatures from "@/components/technologies/TechFeatures";
import TechStack from "@/components/technologies/TechStack";
import TechUseCases from "@/components/technologies/TechUseCases";
import ProcessDiagram from "@/components/commerce/ProcessDiagram";
import AutomationSection from "@/components/commerce/AutomationSection";
import PageCTA from "@/components/PageCTA";

export default function NodeJSTechnologyPage() {
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
        name: "Node.js Development",
        item: `${siteUrl}/technologies/nodejs`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Node.js Development Services",
    description:
      "Expert Node.js development for APIs, microservices, and real-time applications. Build scalable backend systems.",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "Node.js Development",
    areaServed: "Worldwide",
  };

  return (
    <>
      <Head>
        <title>Node.js Development Services | Coreway Solution</title>
        <meta
          name="description"
          content="Expert Node.js development for building scalable backend systems. RESTful APIs, GraphQL, microservices, and real-time applications."
        />
        <meta
          property="og:title"
          content="Node.js Development Services | Coreway"
        />
        <meta
          property="og:description"
          content="Build high-performance Node.js backends with our expert development team. Scalable APIs and microservices architecture."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/technologies/nodejs`} />
        <link rel="canonical" href={`${siteUrl}/technologies/nodejs`} />
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
                { label: "Node.js Development" },
              ]}
            />
          </div>
        </header>

        <main>
          <TechHero
            title={nodeData.hero.title}
            title2={nodeData.hero.title2}
            subtitle={nodeData.hero.subtitle}
            buttons={nodeData.hero.buttons}
            img={nodeData.hero.img}
          />

          <TechOverview
            title={nodeData.overview.title}
            content={nodeData.overview.content}
            image={nodeData.overview.image}
            stats={nodeData.overview.stats}
          />

          <TechFeatures
            title={nodeData.features.title}
            items={nodeData.features.items}
          />

          <TechStack
            title={nodeData.technologies.title}
            description={nodeData.technologies.description}
            items={nodeData.technologies.items}
          />

          <TechUseCases
            title={nodeData.useCases.title}
            cases={nodeData.useCases.cases}
          />

          <ProcessDiagram
            title={nodeData.process.title}
            description={nodeData.process.description}
            steps={nodeData.process.steps}
          />

          <AutomationSection
            title={nodeData.benefits.title}
            description={nodeData.benefits.description}
            features={nodeData.benefits.features}
          />

          <PageCTA
            badge="Start Building"
            title="Ready to Build with Node.js?"
            description="Let's create scalable, high-performance backend systems that power your applications. Our expert team specializes in modern Node.js architecture and best practices."
            primaryButtonText="Start Your Project"
            secondaryButtonText="View Portfolio"
            footerText="Free consultation • Expert developers • Proven results"
          />
        </main>
      </div>
    </>
  );
}
