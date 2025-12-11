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
import sampleFAQs from '@/data/faqs.json';
import FAQ from '@/components/FAQ';
import WhyCorewaySection from '@/components/WhyCorewaySection';
import whyCorewayData from '@/data/why-coreway.json';
import SubHeader from "@/components/SubHeader";


export default function FoodBeveragePage() {
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
    <div className="min-h-screen bg-[#0E0918]">
        <header className="page-content">
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
            img="/assets/images/food-beverage.png"
          />

          <SubHeader title="Food & Beverage" items={subHeaderItems} />

          <div id="overview">
            <FoodOverview
            title={foodBeverageData.overview.title}
            content={foodBeverageData.overview.content}
            image={foodBeverageData.overview.image}
          />
          </div>

          <div id="features">
            <FoodFeatures
            title={foodBeverageData.features.title}
            items={foodBeverageData.features.items}
          />
          </div>

          <DatasetTechnologies
            title={foodBeverageData.platforms.title}
            description={foodBeverageData.platforms.description}
            items={foodBeverageData.platforms.items}
          />

          <DatasetCaseStudies
            title={foodBeverageData.caseStudies.title}
            cases={foodBeverageData.caseStudies.cases}
          />

          <div id="process">
            <DatasetProcess
            title={foodBeverageData.process.title}
            description={foodBeverageData.process.description}
            steps={foodBeverageData.process.steps}
          />
          </div>

          <DatasetAutomation
            title={foodBeverageData.automation.title}
            description={foodBeverageData.automation.description}
            features={foodBeverageData.automation.features}
          />

          <WhyCorewaySection
            badge={whyCorewayData["food-beverage"].badge}
            title={whyCorewayData["food-beverage"].title}
            subtitle={whyCorewayData["food-beverage"].subtitle}
            reasons={whyCorewayData["food-beverage"].reasons}
          />
          <div id="faq">
            <FAQ
            badge="Help Center"
            title="Common Questions & Answers"
            description="Everything you need to know about our services and how we work"
            faqs={sampleFAQs["food-beverage"]}
            columns={1}
            showContactCTA={true}
            contactText="Still have questions?"
            contactButtonText="Contact Our Team"
          />
          </div>


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
  );
}
