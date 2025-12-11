import nodeData from "../../../data/nodeData.json";
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

export default function NodeJSTechnologyPage() {
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
        name: "Node.js Development",
        item: `${siteUrl}/technologies/nodejs`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Node.js Development Services",
    description:
      "Expert Node.js development for APIs, microservices, and real-time applications. Build scalable backend systems.",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "Node.js Development",
    areaServed: "Worldwide",
  };

  return (
    <div className="min-h-screen bg-[#0E0918]">
        <header className="page-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Technologies", href: "/technologies" },
                { label: "Node.js Development" },
              ]}
            />
          </div>
        </header>

        <main>
          <TechHero
            title={nodeData.hero.title}
            title2={nodeData.hero.title2}
            subtitle={nodeData.hero.subtitle}
            buttons={nodeData.hero.buttons}
            img="/assets/images/nodejs.png"
          />

          <SubHeader title="Node.js Development" items={subHeaderItems} />

          <div id="overview">
            <TechOverview
              title={nodeData.overview.title}
              content={nodeData.overview.content}
              image={nodeData.overview.image}
              stats={nodeData.overview.stats}
            />
          </div>

          <div id="features">
            <TechFeatures
              title={nodeData.features.title}
              items={nodeData.features.items}
            />
          </div>

          <TechStack
            title={nodeData.technologies.title}
            description={nodeData.technologies.description}
            items={nodeData.technologies.items}
          />

          <TechUseCases
            title={nodeData.useCases.title}
            cases={nodeData.useCases.cases}
          />

          <div id="process">
            <ProcessDiagram
              title={nodeData.process.title}
              description={nodeData.process.description}
              steps={nodeData.process.steps}
            />
          </div>

          <AutomationSection
            title={nodeData.benefits.title}
            description={nodeData.benefits.description}
            features={nodeData.benefits.features}
          />

          <WhyCorewaySection
            badge={whyCorewayData["nodejs"].badge}
            title={whyCorewayData["nodejs"].title}
            subtitle={whyCorewayData["nodejs"].subtitle}
            reasons={whyCorewayData["nodejs"].reasons}
          />
          <div id="faq">
            <FAQ
              badge="Help Center"
              title="Common Questions & Answers"
              description="Everything you need to know about our services and how we work"
              faqs={sampleFAQs["nodejs"]}
              columns={1}
              showContactCTA={true}
              contactText="Still have questions?"
              contactButtonText="Contact Our Team"
            />
          </div>
          <PageCTA
            badge="Start Building"
            title="Ready to Build with Node.js?"
            description="Let's create scalable, high-performance backend systems that power your applications. Our expert team specializes in modern Node.js architecture and best practices."
            primaryButtonText="Start Your Project"
            secondaryButtonText="View Portfolio"
            footerText="Free consultation • Expert developers • Proven results"
          />
        </main>
      </div>
  );
}
