import automotiveData from "../../../data/automotiveData.json";
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


export default function AutomotivePage() {
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
      { "@type": "ListItem", position: 2, name: "Industries", item: `${siteUrl}/industries` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Automotive Solutions",
        item: `${siteUrl}/industries/automotive`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Automotive Digital Transformation Solutions",
    description:
      "Connected vehicles, smart manufacturing, AI-powered diagnostics, and next-generation mobility solutions for the automotive industry.",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "Automotive Technology Solutions",
    areaServed: "Worldwide",
  };

  return (
    <div className="min-h-screen bg-[#0E0918]">
        <header className="page-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Industries", href: "/industries" },
                { label: "Automotive Solutions" },
              ]}
            />
          </div>
        </header>

        <main>
          <DatasetHero
            title={automotiveData.hero.title}
            title2={automotiveData.hero.title2}
            subtitle={automotiveData.hero.subtitle}
            buttons={automotiveData.hero.buttons}
            img="/assets/images/automotive.png"
          />

          <SubHeader title="Automotive" items={subHeaderItems} />

          <div id="overview">
            <DatasetOverview
            title={automotiveData.overview.title}
            content={automotiveData.overview.content}
            image={automotiveData.overview.image}
          />
          </div>

          <div id="features">
            <DatasetFeatures
            title={automotiveData.features.title}
            items={automotiveData.features.items}
          />
          </div>

          <DatasetTechnologies
            title={automotiveData.platforms.title}
            description={automotiveData.platforms.description}
            items={automotiveData.platforms.items}
          />

          <DatasetCaseStudies
            title={automotiveData.caseStudies.title}
            cases={automotiveData.caseStudies.cases}
          />

          <div id="process">
            <DatasetProcess
            title={automotiveData.process.title}
            description={automotiveData.process.description}
            steps={automotiveData.process.steps}
          />
          </div>

          <DatasetAutomation
            title={automotiveData.automation.title}
            description={automotiveData.automation.description}
            features={automotiveData.automation.features}
          />
          <WhyCorewaySection
            badge={whyCorewayData["automotive"].badge}
            title={whyCorewayData["automotive"].title}
            subtitle={whyCorewayData["automotive"].subtitle}
            reasons={whyCorewayData["automotive"].reasons}
          />
          <div id="faq">
            <FAQ
            badge="Help Center"
            title="Common Questions & Answers"
            description="Everything you need to know about our services and how we work"
            faqs={sampleFAQs["automotive"]}
            columns={1}
            showContactCTA={true}
            contactText="Still have questions?"
            contactButtonText="Contact Our Team"
          />
          </div>


          <PageCTA
            badge="Drive Innovation"
            title="Ready to Transform Your Automotive Business?"
            description="Let's build next-generation automotive solutions that drive innovation, efficiency, and customer satisfaction. Our expert team delivers cutting-edge connected vehicle and smart manufacturing solutions."
            primaryButtonText="Start Your Project"
            secondaryButtonText="View Case Studies"
            footerText="Free consultation • Automotive expertise • ISO 26262 compliant"
          />
        </main>
      </div>
  );
}
