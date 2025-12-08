import iotData from "../../../data/iotProtocolsData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import TechHero from "@/components/technologies/TechHero";
import TechOverview from "@/components/technologies/TechOverview";
import TechFeatures from "@/components/technologies/TechFeatures";
import TechStack from "@/components/technologies/TechStack";
import ProtocolComparison from "@/components/iot/ProtocolComparison";
import TechUseCases from "@/components/technologies/TechUseCases";
import AutomationSection from "@/components/commerce/AutomationSection";
import PageCTA from "@/components/PageCTA";
import FAQ from '@/components/FAQ';
import WhyCorewaySection from '@/components/WhyCorewaySection';
import sampleFAQs from '@/data/faqs.json';
import whyCorewayData from '@/data/why-coreway.json';
import SubHeader from "@/components/SubHeader";

export default function IoTProtocolsPage() {
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
        name: "IoT Protocols",
        item: `${siteUrl}/technologies/iot-protocols`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "IoT Protocols - MQTT & WebSockets",
    description:
      "Expert implementation of MQTT, WebSockets, and IoT protocols for real-time communication and device connectivity.",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "IoT Protocol Implementation",
    areaServed: "Worldwide",
  };

  return (
    <div className="min-h-screen bg-[#0E0918]">
        <header className="page-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Technologies", href: "/technologies" },
                { label: "IoT Protocols" },
              ]}
            />
          </div>
        </header>

        <main>
          <TechHero
            title={iotData.hero.title}
            title2={iotData.hero.title2}
            subtitle={iotData.hero.subtitle}
            buttons={iotData.hero.buttons}
            img={iotData.hero.img}
          />

          <SubHeader title="IoT Protocols" items={subHeaderItems} />

          <div id="overview">
            <TechOverview
            title={iotData.overview.title}
            content={iotData.overview.content}
            image={iotData.overview.image}
            stats={iotData.overview.stats}
          />
          </div>

          <div id="features">
            <TechFeatures
            title={iotData.features.title}
            items={iotData.features.items}
          />
          </div>

          <ProtocolComparison
            title={iotData.protocolComparison.title}
            subtitle={iotData.protocolComparison.subtitle}
            protocols={iotData.protocolComparison.protocols}
          />

          <TechStack
            title={iotData.technologies.title}
            description={iotData.technologies.description}
            items={iotData.technologies.items}
          />

          <TechUseCases
            title={iotData.useCases.title}
            cases={iotData.useCases.cases}
          />

          <AutomationSection
            title={iotData.benefits.title}
            description={iotData.benefits.description}
            features={iotData.benefits.features}
          />

          <WhyCorewaySection
            badge={whyCorewayData["iot-protocols"].badge}
            title={whyCorewayData["iot-protocols"].title}
            subtitle={whyCorewayData["iot-protocols"].subtitle}
            reasons={whyCorewayData["iot-protocols"].reasons}
          />
          <div id="faq">
            <FAQ
            badge="Help Center"
            title="Common Questions & Answers"
            description="Everything you need to know about our services and how we work"
            faqs={sampleFAQs["iot-protocols"]}
            columns={1}
            showContactCTA={true}
            contactText="Still have questions?"
            contactButtonText="Contact Our Team"
          />
          </div>

          <PageCTA
            badge="Get Started"
            title="Ready to Build Real-Time Systems?"
            description="Let's implement MQTT, WebSockets, or IoT protocols that handle millions of messages with low latency. Our experts deliver reliable real-time communication at scale."
            primaryButtonText="Start Your Project"
            secondaryButtonText="View Solutions"
            footerText="Free consultation • Protocol experts • Proven results"
          />
        </main>
      </div>
  );
}
