"use client";

import metadataExtractionData from "../../../data/metadataExtractionData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import DatasetHero from "@/components/dataset/DatasetHero";
import DatasetOverview from "@/components/dataset/DatasetOverview";
import DatasetFeatures from "@/components/dataset/DatasetFeatures";
import DatasetTechnologies from "@/components/dataset/DatasetTechnologies";
import DatasetCaseStudies from "@/components/dataset/DatasetCaseStudies";
import DatasetProcess from "@/components/dataset/DatasetProcess";
import DatasetAutomation from "@/components/dataset/DatasetAutomation";
import PageCTA from "@/components/PageCTA";
import sampleFAQs from '@/data/faqs.json';
import FAQ from '@/components/FAQ';
import WhyCorewaySection from '@/components/WhyCorewaySection';
import whyCorewayData from '@/data/why-coreway.json';
import SubHeader from "@/components/SubHeader";

export default function MetadataExtractionAI() {
  const subHeaderItems = [
    { label: "Overview", sectionId: "overview" },
    { label: "Capabilities", sectionId: "features" },
    { label: "Our Process", sectionId: "process" },
    { label: "FAQ", sectionId: "faq" },
  ];

  const siteUrl = "https://www.corewaysolution.com";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Solutions", item: `${siteUrl}/solution` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Metadata Extraction using GPT & Vision AI",
        item: `${siteUrl}/solution/metadata-extraction-ai`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Metadata Extraction using GPT & Vision AI",
    description:
      "Automatically extract, classify, and enrich metadata from documents, images, and videos using advanced GPT-4 and Vision AI models.",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "AI Metadata Extraction",
    areaServed: "Worldwide",
  };

  return (
    <>

      <div className="min-h-screen bg-[#0E0918]">
        <header className="page-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Solutions", href: "/solution" },
                { label: "Metadata Extraction using GPT & Vision AI" },
              ]}
            />
          </div>
        </header>

        <main>
          <DatasetHero
            title={metadataExtractionData.hero.title}
            subtitle={metadataExtractionData.hero.subtitle}
            buttons={metadataExtractionData.hero.buttons}
            title2={metadataExtractionData.hero.title2}
            img={metadataExtractionData.hero.img}
          />

          <SubHeader title="Metadata Extraction AI" items={subHeaderItems} />

          <div id="overview">
            <DatasetOverview
            title={metadataExtractionData.overview.title}
            content={metadataExtractionData.overview.content}
            image={metadataExtractionData.overview.image}
          />
          </div>

          <div id="features">
            <DatasetFeatures
            title={metadataExtractionData.features.title}
            items={metadataExtractionData.features.items}
          />
          </div>

          <DatasetTechnologies
            title={metadataExtractionData.platforms.title}
            description={metadataExtractionData.platforms.description}
            items={metadataExtractionData.platforms.items}
          />

          <DatasetCaseStudies
            title={metadataExtractionData.caseStudies.title}
            cases={metadataExtractionData.caseStudies.cases}
          />

          <div id="process">
            <DatasetProcess
            title={metadataExtractionData.process.title}
            description={metadataExtractionData.process.description}
            steps={metadataExtractionData.process.steps}
          />
          </div>

          <DatasetAutomation
            title={metadataExtractionData.automation.title}
            description={metadataExtractionData.automation.description}
            features={metadataExtractionData.automation.features}
          />

          <WhyCorewaySection
            badge={whyCorewayData["metadata-extraction-ai"].badge}
            title={whyCorewayData["metadata-extraction-ai"].title}
            subtitle={whyCorewayData["metadata-extraction-ai"].subtitle}
            reasons={whyCorewayData["metadata-extraction-ai"].reasons}
          />
          <div id="faq">
            <FAQ
            badge="Help Center"
            title="Common Questions & Answers"
            description="Everything you need to know about our services and how we work"
            faqs={sampleFAQs["metadata-extraction-ai"]}
            columns={1}
            showContactCTA={true}
            contactText="Still have questions?"
            contactButtonText="Contact Our Team"
          />
          </div>

          <PageCTA
            badge="Extract Intelligence"
            title="Ready to Automate Metadata Extraction?"
            description="Let's build an AI-powered extraction system that processes your documents, images, and videos at scale. Our GPT-4 and Vision AI solutions deliver 95%+ accuracy with continuous learning."
            primaryButtonText="Get Started"
            secondaryButtonText="View Demo"
            footerText="Free proof of concept • 95%+ accuracy • Custom AI models"
          />
        </main>
      </div>
    </>
  );
}
