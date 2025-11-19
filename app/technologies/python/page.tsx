"use client";

import Head from "next/head";
import pythonData from "../../../data/pythonData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import TechHero from "@/components/technologies/TechHero";
import TechOverview from "@/components/technologies/TechOverview";
import TechFeatures from "@/components/technologies/TechFeatures";
import TechStack from "@/components/technologies/TechStack";
import TechUseCases from "@/components/technologies/TechUseCases";
import ProcessDiagram from "@/components/commerce/ProcessDiagram";
import AutomationSection from "@/components/commerce/AutomationSection";
import PageCTA from "@/components/PageCTA";

export default function PythonTechnologyPage() {
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
        name: "Python Development",
        item: `${siteUrl}/technologies/python`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Python Development Services",
    description:
      "Expert Python development for web APIs, data science, machine learning, and automation. Flask, FastAPI, Django development.",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "Python Development",
    areaServed: "Worldwide",
  };

  return (
    <>
      <Head>
        <title>Python Development Services | Coreway Solution</title>
        <meta
          name="description"
          content="Expert Python development for web APIs, data science, machine learning, and automation. Flask, FastAPI, Django expertise for scalable solutions."
        />
        <meta
          property="og:title"
          content="Python Development Services | Coreway"
        />
        <meta
          property="og:description"
          content="Build powerful Python applications with Flask, FastAPI, and Django. Expert development for APIs, data science, and ML solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/technologies/python`} />
        <link rel="canonical" href={`${siteUrl}/technologies/python`} />
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
                { label: "Python Development" },
              ]}
            />
          </div>
        </header>

        <main>
          <TechHero
            title={pythonData.hero.title}
            title2={pythonData.hero.title2}
            subtitle={pythonData.hero.subtitle}
            buttons={pythonData.hero.buttons}
            img={pythonData.hero.img}
          />

          <TechOverview
            title={pythonData.overview.title}
            content={pythonData.overview.content}
            image={pythonData.overview.image}
            stats={pythonData.overview.stats}
          />

          <TechFeatures
            title={pythonData.features.title}
            items={pythonData.features.items}
          />

          <TechStack
            title={pythonData.technologies.title}
            description={pythonData.technologies.description}
            items={pythonData.technologies.items}
          />

          <TechUseCases
            title={pythonData.useCases.title}
            cases={pythonData.useCases.cases}
          />

          {/* <ProcessDiagram
            title={pythonData.process.title}
            description={pythonData.process.description}
            steps={pythonData.process.steps}
          /> */}

          <AutomationSection
            title={pythonData.benefits.title}
            description={pythonData.benefits.description}
            features={pythonData.benefits.features}
          />

          <PageCTA
            badge="Start Building"
            title="Ready to Build with Python?"
            description="Let's create powerful, scalable Python applications for your business. Our expert team specializes in Flask, FastAPI, Django, data science, and machine learning solutions."
            primaryButtonText="Start Your Project"
            secondaryButtonText="View Portfolio"
            footerText="Free consultation • Expert developers • Proven results"
          />
        </main>
      </div>
    </>
  );
}
