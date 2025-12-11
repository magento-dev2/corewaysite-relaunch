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
import sampleFAQs from '@/data/faqs.json';
import FAQ from '@/components/FAQ';
import WhyCorewaySection from '@/components/WhyCorewaySection';
import whyCorewayData from '@/data/why-coreway.json';
import SubHeader from "@/components/SubHeader";


export default function FashionApparelPage() {
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
    <div className="min-h-screen bg-[#0E0918]">
        <header className="page-content">
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
            img="/assets/images/fashion-apparel.png"
          />

          <SubHeader title="Fashion & Apparel" items={subHeaderItems} />

          <div id="overview">
            <FashionOverview
            title={fashionApparelData.overview.title}
            content={fashionApparelData.overview.content}
            image={fashionApparelData.overview.image}
          />
          </div>

          <div id="features">
            <FashionFeatures
            title={fashionApparelData.features.title}
            items={fashionApparelData.features.items}
          />
          </div>

          <DatasetTechnologies
            title={fashionApparelData.platforms.title}
            description={fashionApparelData.platforms.description}
            items={fashionApparelData.platforms.items}
          />

          <DatasetCaseStudies
            title={fashionApparelData.caseStudies.title}
            cases={fashionApparelData.caseStudies.cases}
          />

          <div id="process">
            <DatasetProcess
            title={fashionApparelData.process.title}
            description={fashionApparelData.process.description}
            steps={fashionApparelData.process.steps}
          />
          </div>

          <DatasetAutomation
            title={fashionApparelData.automation.title}
            description={fashionApparelData.automation.description}
            features={fashionApparelData.automation.features}
          />

          <WhyCorewaySection
            badge={whyCorewayData["fashion-apparel"].badge}
            title={whyCorewayData["fashion-apparel"].title}
            subtitle={whyCorewayData["fashion-apparel"].subtitle}
            reasons={whyCorewayData["fashion-apparel"].reasons}
          />
          <div id="faq">
            <FAQ
            badge="Help Center"
            title="Common Questions & Answers"
            description="Everything you need to know about our services and how we work"
            faqs={sampleFAQs["fashion-apparel"]}
            columns={1}
            showContactCTA={true}
            contactText="Still have questions?"
            contactButtonText="Contact Our Team"
          />
          </div>


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
  );
}
