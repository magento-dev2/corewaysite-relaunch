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
import sampleFAQs from '@/data/faqs.json';
import FAQ from '@/components/FAQ';
import WhyCorewaySection from '@/components/WhyCorewaySection';
import whyCorewayData from '@/data/why-coreway.json';
import SubHeader from "@/components/SubHeader";

export default function DatasetManagementDelivery() {
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
    <div className="min-h-screen bg-[#0E0918]">
        <header className="page-content">
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
            title2={datasetManagementData.hero.title2}
            subtitle={datasetManagementData.hero.subtitle}
            buttons={datasetManagementData.hero.buttons}
            img={datasetManagementData.hero.img}
          />

          <SubHeader title="Dataset Management & Delivery" items={subHeaderItems} />

          <div id="overview">
            <DatasetOverview
            title={datasetManagementData.overview.title}
            content={datasetManagementData.overview.content}
            image={datasetManagementData.overview.image}
          />
          </div>

          <div id="features">
            <DatasetFeatures
            title={datasetManagementData.features.title}
            items={datasetManagementData.features.items}
          />
          </div>

          <DatasetTechnologies
            title={datasetManagementData.platforms.title}
            description={datasetManagementData.platforms.description}
            items={datasetManagementData.platforms.items}
          />

          <DatasetCaseStudies
            title={datasetManagementData.caseStudies.title}
            cases={datasetManagementData.caseStudies.cases}
          />

          <div id="process">
            <DatasetProcess
            title={datasetManagementData.process.title}
            description={datasetManagementData.process.description}
            steps={datasetManagementData.process.steps}
          />
          </div>

          <DatasetAutomation
            title={datasetManagementData.automation.title}
            description={datasetManagementData.automation.description}
            features={datasetManagementData.automation.features}
          />

          <WhyCorewaySection
            badge={whyCorewayData["dataset-management-delivery"].badge}
            title={whyCorewayData["dataset-management-delivery"].title}
            subtitle={whyCorewayData["dataset-management-delivery"].subtitle}
            reasons={whyCorewayData["dataset-management-delivery"].reasons}
          />
          <div id="faq">
            <FAQ
            badge="Help Center"
            title="Common Questions & Answers"
            description="Everything you need to know about our services and how we work"
            faqs={sampleFAQs["dataset-management-delivery"]}
            columns={1}
            showContactCTA={true}
            contactText="Still have questions?"
            contactButtonText="Contact Our Team"
          />
          </div>

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
  );
}
