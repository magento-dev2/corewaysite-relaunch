"use client";

import Head from "next/head";
import fashionApparelData from "../../../data/fashionApparelData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import FashionHero from "@/components/fashion/FashionHero";
import FashionOverview from "@/components/fashion/FashionOverview";
import FashionFeatures from "@/components/fashion/FashionFeatures";
import DatasetTechnologies from "@/components/dataset/DatasetTechnologies";
import DatasetCaseStudies from "@/components/dataset/DatasetCaseStudies";
import DatasetProcess from "@/components/dataset/DatasetProcess";
import DatasetAutomation from "@/components/dataset/DatasetAutomation";
import PageCTA from "@/components/PageCTA";

export default function FashionApparelPage() {
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
        name: "Fashion & Apparel Solutions",
        item: `${siteUrl}/industries/fashion-apparel`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fashion & Apparel E-Commerce Solutions",
    description:
      "AI-powered personalization, virtual try-on, smart inventory forecasting, omnichannel retail, and trend prediction for fashion brands.",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "Fashion & Apparel Technology Solutions",
    areaServed: "Worldwide",
  };

  return (
    <>
      <Head>
        <title>
          Fashion & Apparel E-Commerce Solutions | Coreway Solution
        </title>
        <meta
          name="description"
          content="Transform fashion retail with AI-powered virtual try-on, personalized styling, trend forecasting, smart inventory, and omnichannel experiences."
        />
        <meta
          property="og:title"
          content="Fashion & Apparel Solutions | Coreway"
        />
        <meta
          property="og:description"
          content="Virtual try-on, AI styling assistant, trend analytics, smart inventory, and omnichannel retail for fashion brands."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${siteUrl}/industries/fashion-apparel`}
        />
        <link rel="canonical" href={`${siteUrl}/industries/fashion-apparel`} />
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
                { label: "Fashion & Apparel Solutions" },
              ]}
            />
          </div>
        </header>

        <main>
          <FashionHero
            title={fashionApparelData.hero.title}
            title2={fashionApparelData.hero.title2}
            subtitle={fashionApparelData.hero.subtitle}
            buttons={fashionApparelData.hero.buttons}
            img={fashionApparelData.hero.img}
          />

          <FashionOverview
            title={fashionApparelData.overview.title}
            content={fashionApparelData.overview.content}
            image={fashionApparelData.overview.image}
          />

          <FashionFeatures
            title={fashionApparelData.features.title}
            items={fashionApparelData.features.items}
          />

          <DatasetTechnologies
            title={fashionApparelData.platforms.title}
            description={fashionApparelData.platforms.description}
            items={fashionApparelData.platforms.items}
          />

          <DatasetCaseStudies
            title={fashionApparelData.caseStudies.title}
            cases={fashionApparelData.caseStudies.cases}
          />

          <DatasetProcess
            title={fashionApparelData.process.title}
            description={fashionApparelData.process.description}
            steps={fashionApparelData.process.steps}
          />

          <DatasetAutomation
            title={fashionApparelData.automation.title}
            description={fashionApparelData.automation.description}
            features={fashionApparelData.automation.features}
          />

          <PageCTA
            badge="Elevate Your Brand"
            title="Ready to Transform Your Fashion Business?"
            description="Let's create AI-powered virtual try-on experiences, personalized recommendations, and seamless omnichannel solutions that drive customer satisfaction and sales growth in modern fashion retail."
            primaryButtonText="Start Your Journey"
            secondaryButtonText="View Success Stories"
            footerText="Free consultation • Fashion tech experts • Proven results"
          />
        </main>
      </div>
    </>
  );
}
