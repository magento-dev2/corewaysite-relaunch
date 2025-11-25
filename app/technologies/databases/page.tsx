"use client";

import Head from "next/head";
import databaseData from "../../../data/databaseData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import TechHero from "@/components/technologies/TechHero";
import TechOverview from "@/components/technologies/TechOverview";
import TechFeatures from "@/components/technologies/TechFeatures";
import TechStack from "@/components/technologies/TechStack";
import DatabaseComparison from "@/components/database/DatabaseComparison";
import TechUseCases from "@/components/technologies/TechUseCases";
import AutomationSection from "@/components/commerce/AutomationSection";
import PageCTA from "@/components/PageCTA";
import FAQ from '@/components/FAQ';
import WhyCorewaySection from '@/components/WhyCorewaySection';
import sampleFAQs from '@/data/faq.json';

export default function DatabaseTechnologyPage() {
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
        name: "Database Solutions",
        item: `${siteUrl}/technologies/databases`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Database Solutions - PostgreSQL & MongoDB",
    description:
      "Expert database architecture, design, and optimization for PostgreSQL and MongoDB. Scalable database solutions.",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "Database Development",
    areaServed: "Worldwide",
  };

  return (
    <>
      <Head>
        <title>
          Database Solutions - PostgreSQL & MongoDB | Coreway Solution
        </title>
        <meta
          name="description"
          content="Expert PostgreSQL and MongoDB database architecture, design, and optimization. Build scalable, high-performance database systems."
        />
        <meta
          property="og:title"
          content="Database Solutions - PostgreSQL & MongoDB | Coreway"
        />
        <meta
          property="og:description"
          content="Professional database design and optimization for PostgreSQL and MongoDB. Expert architecture and performance tuning."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${siteUrl}/technologies/databases`}
        />
        <link rel="canonical" href={`${siteUrl}/technologies/databases`} />
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
                { label: "Database Solutions" },
              ]}
            />
          </div>
        </header>

        <main>
          <TechHero
            title={databaseData.hero.title}
            title2={databaseData.hero.title2}
            subtitle={databaseData.hero.subtitle}
            buttons={databaseData.hero.buttons}
            img={databaseData.hero.img}
          />

          <TechOverview
            title={databaseData.overview.title}
            content={databaseData.overview.content}
            image={databaseData.overview.image}
            stats={databaseData.overview.stats}
          />

          <TechFeatures
            title={databaseData.features.title}
            items={databaseData.features.items}
          />

          <DatabaseComparison
            title={databaseData.comparison.title}
            subtitle={databaseData.comparison.subtitle}
            postgresql={databaseData.comparison.postgresql}
            mongodb={databaseData.comparison.mongodb}
          />

          <TechStack
            title={databaseData.technologies.title}
            description={databaseData.technologies.description}
            items={databaseData.technologies.items}
          />

          <TechUseCases
            title={databaseData.useCases.title}
            cases={databaseData.useCases.cases}
          />

          <AutomationSection
            title={databaseData.benefits.title}
            description={databaseData.benefits.description}
            features={databaseData.benefits.features}
          />

          <WhyCorewaySection
            badge="Why Choose Us"
            title="Why Choose Coreway Solutions"
            subtitle="We're not just another software company. We're your technology partner committed to delivering exceptional results through innovation and expertise."

          />
          <FAQ
            badge="Help Center"
            title="Common Questions & Answers"
            description="Everything you need to know about our services and how we work"
            faqs={sampleFAQs}
            columns={1}
            showContactCTA={true}
            contactText="Still have questions?"
            contactButtonText="Contact Our Team"
          />

          <PageCTA
            badge="Start Building"
            title="Ready to Optimize Your Database?"
            description="Let's architect database systems that scale with your business. Our experts deliver PostgreSQL and MongoDB solutions optimized for performance, reliability, and growth."
            primaryButtonText="Start Your Project"
            secondaryButtonText="View Portfolio"
            footerText="Free consultation • Expert architects • Proven results"
          />
        </main>
      </div>
    </>
  );
}
