"use client";

import Head from "next/head";
import foodBeverageData from "../../../data/foodBeverageData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import FoodHero from "@/components/foodbeverage/FoodHero";
import FoodOverview from "@/components/foodbeverage/FoodOverview";
import FoodFeatures from "@/components/foodbeverage/FoodFeatures";
import DatasetTechnologies from "@/components/dataset/DatasetTechnologies";
import DatasetCaseStudies from "@/components/dataset/DatasetCaseStudies";
import DatasetProcess from "@/components/dataset/DatasetProcess";
import DatasetAutomation from "@/components/dataset/DatasetAutomation";
import PageCTA from "@/components/PageCTA";

export default function FoodBeveragePage() {
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
        name: "Food & Beverage Solutions",
        item: `${siteUrl}/industries/food-beverage`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Food & Beverage Digital Solutions",
    description:
      "Smart supply chain, IoT production, AI demand forecasting, and omnichannel experiences for food and beverage industry.",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "Food & Beverage Technology Solutions",
    areaServed: "Worldwide",
  };

  return (
    <>
      <Head>
        <title>
          Food & Beverage Digital Solutions | Coreway Solution
        </title>
        <meta
          name="description"
          content="Transform food & beverage operations with smart supply chain, IoT production, AI forecasting, quality control, and digital ordering systems."
        />
        <meta
          property="og:title"
          content="Food & Beverage Solutions | Coreway"
        />
        <meta
          property="og:description"
          content="Smart supply chain, automated production, AI demand forecasting, and digital ordering for food and beverage industry."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${siteUrl}/industries/food-beverage`}
        />
        <link rel="canonical" href={`${siteUrl}/industries/food-beverage`} />
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
                { label: "Food & Beverage Solutions" },
              ]}
            />
          </div>
        </header>

        <main>
          <FoodHero
            title={foodBeverageData.hero.title}
            title2={foodBeverageData.hero.title2}
            subtitle={foodBeverageData.hero.subtitle}
            buttons={foodBeverageData.hero.buttons}
            img={foodBeverageData.hero.img}
          />

          <FoodOverview
            title={foodBeverageData.overview.title}
            content={foodBeverageData.overview.content}
            image={foodBeverageData.overview.image}
          />

          <FoodFeatures
            title={foodBeverageData.features.title}
            items={foodBeverageData.features.items}
          />

          <DatasetTechnologies
            title={foodBeverageData.platforms.title}
            description={foodBeverageData.platforms.description}
            items={foodBeverageData.platforms.items}
          />

          <DatasetCaseStudies
            title={foodBeverageData.caseStudies.title}
            cases={foodBeverageData.caseStudies.cases}
          />

          <DatasetProcess
            title={foodBeverageData.process.title}
            description={foodBeverageData.process.description}
            steps={foodBeverageData.process.steps}
          />

          <DatasetAutomation
            title={foodBeverageData.automation.title}
            description={foodBeverageData.automation.description}
            features={foodBeverageData.automation.features}
          />

          <PageCTA
            badge="Transform Your Operations"
            title="Ready to Modernize Your Food & Beverage Business?"
            description="Let's build intelligent solutions that optimize your supply chain, automate production, ensure food safety, and create exceptional customer experiences. Our expert team delivers cutting-edge technology for the food industry."
            primaryButtonText="Start Your Journey"
            secondaryButtonText="View Success Stories"
            footerText="Free consultation • Food safety compliant • Proven ROI"
          />
        </main>
      </div>
    </>
  );
}
