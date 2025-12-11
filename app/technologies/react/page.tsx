import reactData from "../../../data/reactData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import TechHero from "@/components/technologies/TechHero";
import TechOverview from "@/components/technologies/TechOverview";
import TechFeatures from "@/components/technologies/TechFeatures";
import TechStack from "@/components/technologies/TechStack";
import TechUseCases from "@/components/technologies/TechUseCases";
import ProcessDiagram from "@/components/commerce/ProcessDiagram";
import AutomationSection from "@/components/commerce/AutomationSection";
import PageCTA from "@/components/PageCTA";
import FAQ from '@/components/FAQ';
import WhyCorewaySection from '@/components/WhyCorewaySection';
import sampleFAQs from '@/data/faqs.json';
import whyCorewayData from '@/data/why-coreway.json';
import SubHeader from "@/components/SubHeader";

export default function ReactTechnologyPage() {
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
        name: "Technologies",
        item: `${siteUrl}/technologies`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "React Development",
        item: `${siteUrl}/technologies/react`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "React Development Services",
    description:
      "Expert React development for SPAs, progressive web apps, and enterprise solutions. Build fast, scalable applications.",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "React Development",
    areaServed: "Worldwide",
  };

  return (
    <div className="min-h-screen bg-[#0E0918]">
        <header className="page-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Technologies", href: "/technologies" },
                { label: "React Development" },
              ]}
            />
          </div>
        </header>

        <main>
          <TechHero
            title={reactData.hero.title}
            title2={reactData.hero.title2}
            subtitle={reactData.hero.subtitle}
            buttons={reactData.hero.buttons}
            img="/assets/images/react.png"
          />

          <SubHeader title="React Development" items={subHeaderItems} />

          <div id="overview">
            <TechOverview
            title={reactData.overview.title}
            content={reactData.overview.content}
            image={reactData.overview.image}
            stats={reactData.overview.stats}
          />
          </div>

          <div id="features">
            <TechFeatures
            title={reactData.features.title}
            items={reactData.features.items}
          />
          </div>

          <TechStack
            title={reactData.technologies.title}
            description={reactData.technologies.description}
            items={reactData.technologies.items}
          />

          <TechUseCases
            title={reactData.useCases.title}
            cases={reactData.useCases.cases}
          />



          <AutomationSection
            title={reactData.benefits.title}
            description={reactData.benefits.description}
            features={reactData.benefits.features}
          />
          <WhyCorewaySection
            badge={whyCorewayData["react"].badge}
            title={whyCorewayData["react"].title}
            subtitle={whyCorewayData["react"].subtitle}
            reasons={whyCorewayData["react"].reasons}
          />
          <div id="faq">
            <FAQ
            badge="Help Center"
            title="Common Questions & Answers"
            description="Everything you need to know about our services and how we work"
            faqs={sampleFAQs["react"]}
            columns={1}
            showContactCTA={true}
            contactText="Still have questions?"
            contactButtonText="Contact Our Team"
          />
          </div>


          <PageCTA
            badge="Start Building"
            title="Ready to Build with React?"
            description="Let's create fast, scalable React applications that deliver exceptional user experiences. Our expert team is ready to bring your vision to life with modern React architecture."
            primaryButtonText="Start Your Project"
            secondaryButtonText="View Portfolio"
            footerText="Free consultation • Expert developers • Proven results"
          />
        </main>
      </div>
  );
}
