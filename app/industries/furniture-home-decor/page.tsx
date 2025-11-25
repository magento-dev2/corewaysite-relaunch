"use client";

import Head from "next/head";
import furnitureHomeDecorData from "../../../data/furnitureHomeDecorData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import FurnitureHero from "@/components/furniture/FurnitureHero";
import FurnitureOverview from "@/components/furniture/FurnitureOverview";
import FurnitureFeatures from "@/components/furniture/FurnitureFeatures";
import DatasetTechnologies from "@/components/dataset/DatasetTechnologies";
import DatasetCaseStudies from "@/components/dataset/DatasetCaseStudies";
import DatasetProcess from "@/components/dataset/DatasetProcess";
import DatasetAutomation from "@/components/dataset/DatasetAutomation";
import PageCTA from "@/components/PageCTA";
import sampleFAQs from '@/data/faq.json';
import FAQ from '@/components/FAQ';


export default function FurnitureHomeDecorPage() {
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
        name: "Furniture & Home Decor Solutions",
        item: `${siteUrl}/industries/furniture-home-decor`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Furniture & Home Decor Digital Commerce Solutions",
    description:
      "AR visualization, 3D product configurators, virtual showrooms, and omnichannel retail solutions for furniture and home decor businesses.",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "Furniture & Home Decor Technology Solutions",
    areaServed: "Worldwide",
  };

  return (
    <>
      <Head>
        <title>
          Furniture & Home Decor Digital Solutions | Coreway Solution
        </title>
        <meta
          name="description"
          content="Transform furniture retail with AR visualization, 3D configurators, virtual showrooms, smart inventory, and AI-powered recommendations."
        />
        <meta
          property="og:title"
          content="Furniture & Home Decor Solutions | Coreway"
        />
        <meta
          property="og:description"
          content="AR room visualization, 3D product configurators, virtual showrooms, and omnichannel solutions for furniture retail."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${siteUrl}/industries/furniture-home-decor`}
        />
        <link rel="canonical" href={`${siteUrl}/industries/furniture-home-decor`} />
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
                { label: "Furniture & Home Decor Solutions" },
              ]}
            />
          </div>
        </header>

        <main>
          <FurnitureHero
            title={furnitureHomeDecorData.hero.title}
            title2={furnitureHomeDecorData.hero.title2}
            subtitle={furnitureHomeDecorData.hero.subtitle}
            buttons={furnitureHomeDecorData.hero.buttons}
            img={furnitureHomeDecorData.hero.img}
          />

          <FurnitureOverview
            title={furnitureHomeDecorData.overview.title}
            content={furnitureHomeDecorData.overview.content}
            image={furnitureHomeDecorData.overview.image}
          />

          <FurnitureFeatures
            title={furnitureHomeDecorData.features.title}
            items={furnitureHomeDecorData.features.items}
          />

          <DatasetTechnologies
            title={furnitureHomeDecorData.platforms.title}
            description={furnitureHomeDecorData.platforms.description}
            items={furnitureHomeDecorData.platforms.items}
          />

          <DatasetCaseStudies
            title={furnitureHomeDecorData.caseStudies.title}
            cases={furnitureHomeDecorData.caseStudies.cases}
          />

          <DatasetProcess
            title={furnitureHomeDecorData.process.title}
            description={furnitureHomeDecorData.process.description}
            steps={furnitureHomeDecorData.process.steps}
          />

          <DatasetAutomation
            title={furnitureHomeDecorData.automation.title}
            description={furnitureHomeDecorData.automation.description}
            features={furnitureHomeDecorData.automation.features}
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
            badge="Transform Your Business"
            title="Ready to Revolutionize Your Furniture Retail?"
            description="Let's create immersive AR experiences, 3D product visualization, and seamless omnichannel solutions that help customers visualize their dream spaces and drive your sales growth."
            primaryButtonText="Start Your Transformation"
            secondaryButtonText="View Case Studies"
            footerText="Free consultation • AR/VR expertise • Proven results"
          />
        </main>
      </div>
    </>
  );
}
