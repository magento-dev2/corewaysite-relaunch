"use client";

import Head from "next/head";
import datasetManagementData from "../../../data/datasetManagementData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import DatasetHero from "@/components/dataset/DatasetHero";
import DatasetOverview from "@/components/dataset/DatasetOverview";
import DatasetFeatures from "@/components/dataset/DatasetFeatures";
import DatasetTechnologies from "@/components/dataset/DatasetTechnologies";
import DatasetCaseStudies from "@/components/dataset/DatasetCaseStudies";
import DatasetProcess from "@/components/dataset/DatasetProcess";
import DatasetAutomation from "@/components/dataset/DatasetAutomation";
import PageCTA from "@/components/PageCTA";

export default function DatasetManagementDelivery() {
  const siteUrl = "https://www.corewaysolution.com";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "AI & Data", item: `${siteUrl}/ai-data` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Dataset Management & Delivery",
        item: `${siteUrl}/ai-data/dataset-management-delivery`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Dataset Management & Delivery Systems",
    description:
      "Enterprise-grade data management systems handling petabyte-scale datasets with real-time delivery, AI-powered processing, and intelligent analytics.",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "Data Management & Delivery",
    areaServed: "Worldwide",
  };

  return (
    <>
      <Head>
        <title>Dataset Management & Delivery Systems | Coreway Solution</title>
        <meta
          name="description"
          content="Build scalable data pipelines, manage massive datasets, and deliver real-time insights with intelligent data infrastructure and AI-powered analytics."
        />
        <meta property="og:title" content="Dataset Management Systems | Coreway" />
        <meta
          property="og:description"
          content="Enterprise data management systems with petabyte-scale processing, real-time streaming, and AI-powered analytics."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${siteUrl}/ai-data/dataset-management-delivery`}
        />
        <link
          rel="canonical"
          href={`${siteUrl}/ai-data/dataset-management-delivery`}
        />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Head>

      <div className="min-h-screen bg-[#0E0918]">
        <header className="pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "AI & Data", href: "/ai-data" },
                { label: "Dataset Management & Delivery" },
              ]}
            />
          </div>
        </header>

        <main>
          <DatasetHero
            title={datasetManagementData.hero.title}
            subtitle={datasetManagementData.hero.subtitle}
            buttons={datasetManagementData.hero.buttons}
          />

          <DatasetOverview
            title={datasetManagementData.overview.title}
            content={datasetManagementData.overview.content}
            image={datasetManagementData.overview.image}
          />

          <DatasetFeatures
            title={datasetManagementData.features.title}
            items={datasetManagementData.features.items}
          />

          <DatasetTechnologies
            title={datasetManagementData.platforms.title}
            description={datasetManagementData.platforms.description}
            items={datasetManagementData.platforms.items}
          />

          <DatasetCaseStudies
            title={datasetManagementData.caseStudies.title}
            cases={datasetManagementData.caseStudies.cases}
          />

          <DatasetProcess
            title={datasetManagementData.process.title}
            description={datasetManagementData.process.description}
            steps={datasetManagementData.process.steps}
          />

          <DatasetAutomation
            title={datasetManagementData.automation.title}
            description={datasetManagementData.automation.description}
            features={datasetManagementData.automation.features}
          />

          <PageCTA
            badge="Transform your data"
            title="Ready to Build Your Data Infrastructure?"
            description="Let's design and implement scalable data pipelines that turn your data into actionable insights. Our expert team delivers enterprise-grade solutions for petabyte-scale processing."
            primaryButtonText="Start Building"
            secondaryButtonText="View Solutions"
            footerText="Free architecture consultation • Scalable solutions • 24/7 support"
          />
        </main>
      </div>
    </>
  );
}
