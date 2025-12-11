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
import sampleFAQs from '@/data/faqs.json';
import FAQ from '@/components/FAQ';
import WhyCorewaySection from '@/components/WhyCorewaySection';
import whyCorewayData from '@/data/why-coreway.json';
import SubHeader from "@/components/SubHeader";


export default function FurnitureHomeDecorPage() {
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
    <div className="min-h-screen bg-[#0E0918]">
        <header className="page-content">
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
            img="/assets/images/furniture.png"
          />

          <SubHeader title="Furniture & Home Decor" items={subHeaderItems} />

          <div id="overview">
            <FurnitureOverview
            title={furnitureHomeDecorData.overview.title}
            content={furnitureHomeDecorData.overview.content}
            image={furnitureHomeDecorData.overview.image}
          />
          </div>

          <div id="features">
            <FurnitureFeatures
            title={furnitureHomeDecorData.features.title}
            items={furnitureHomeDecorData.features.items}
          />
          </div>

          <DatasetTechnologies
            title={furnitureHomeDecorData.platforms.title}
            description={furnitureHomeDecorData.platforms.description}
            items={furnitureHomeDecorData.platforms.items}
          />

          <DatasetCaseStudies
            title={furnitureHomeDecorData.caseStudies.title}
            cases={furnitureHomeDecorData.caseStudies.cases}
          />

          <div id="process">
            <DatasetProcess
            title={furnitureHomeDecorData.process.title}
            description={furnitureHomeDecorData.process.description}
            steps={furnitureHomeDecorData.process.steps}
          />
          </div>

          <DatasetAutomation
            title={furnitureHomeDecorData.automation.title}
            description={furnitureHomeDecorData.automation.description}
            features={furnitureHomeDecorData.automation.features}
          />

          <WhyCorewaySection
            badge={whyCorewayData["furniture-home-decor"].badge}
            title={whyCorewayData["furniture-home-decor"].title}
            subtitle={whyCorewayData["furniture-home-decor"].subtitle}
            reasons={whyCorewayData["furniture-home-decor"].reasons}
          />
          <div id="faq">
            <FAQ
            badge="Help Center"
            title="Common Questions & Answers"
            description="Everything you need to know about our services and how we work"
            faqs={sampleFAQs["furniture-home-decor"]}
            columns={1}
            showContactCTA={true}
            contactText="Still have questions?"
            contactButtonText="Contact Our Team"
          />
          </div>


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
  );
}
