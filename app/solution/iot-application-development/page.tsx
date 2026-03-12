import iotApplicationsData from "../../../data/iotApplicationsData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import IoTHero from "@/components/iot/IoTHero";
import IoTOverview from "@/components/iot/IoTOverview";
import IoTFeatures from "@/components/iot/IoTFeatures";
import IoTTechnologies from "@/components/iot/IoTTechnologies";
import IoTCaseStudies from "@/components/iot/IoTCaseStudies";
import IoTProcess from "@/components/iot/IoTProcess";
import IoTAutomation from "@/components/iot/IoTAutomation";
import PageCTA from "@/components/PageCTA";
import WhyCorewaySection from "@/components/WhyCorewaySection";
import FAQ from "@/components/FAQ";
import sampleFAQs from '@/data/faqs.json';
import whyCorewayData from '@/data/why-coreway.json';
import SubHeader from "@/components/SubHeader";
import PortfolioHighlights from "@/components/about/PortfolioHighlights";



export default function IoTApplicationDevelopment() {
  const subHeaderItems = [
    { label: "Overview", sectionId: "overview" },
    { label: "Capabilities", sectionId: "features" },
    { label: "Our Process", sectionId: "process" },
    { label: "FAQ", sectionId: "faq" },
  ];

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Solutions", url: "/solutions" },
    { name: "IoT Application Development", url: "/solution/iot-application-development" },
  ];

  const projectData = [
    {
      id: 1,
      language: "Wordpress",
      images: ["/images/Wordpress/american.png"]
    },
    {
      id: 2,
      language: "Shopify",
      images: ["/images/Shopify/aurus.png"]
    },
    {
      id: 3,
      language: "WooCommerce",
      images: ["/images/WooCommerce/alhine.png"]
    },
    {
      id: 4,
      language: "Android",
      images: ["/images/Android/bapuji-1.png"]
    },
    {
      id: 5,
      language: "Magento",
      images: ["/images/Magento/knir.png"]
    },
    {
      id: 6,
      language: "Laravel",
      images: ["/images/Laravel/delaware.png"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0E0918]">
      <header className="page-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Solutions", href: "/solutions" },
              { label: "IoT Application Development" },
            ]}
          />
        </div>
      </header>

      <main>
        <IoTHero
          title={iotApplicationsData.hero.title}
          title2={iotApplicationsData.hero.title2}
          subtitle={iotApplicationsData.hero.subtitle}
          buttons={iotApplicationsData.hero.buttons}
        />

        <SubHeader title="IoT Application Development" items={subHeaderItems} />

        <div id="overview">
          <IoTOverview
            title={iotApplicationsData.overview.title}
            content={iotApplicationsData.overview.content}
            image={iotApplicationsData.overview.image}
          />
        </div>

        <div id="features">
          <IoTFeatures
            title={iotApplicationsData.features.title}
            items={iotApplicationsData.features.items}
          />
        </div>

        <IoTTechnologies
          title={iotApplicationsData.platforms.title}
          description={iotApplicationsData.platforms.description}
          items={iotApplicationsData.platforms.items}
        />

        <PortfolioHighlights data={projectData} highlightCount={6} />

        {/* <IoTCaseStudies
            title={iotApplicationsData.caseStudies.title}
            cases={iotApplicationsData.caseStudies.cases}
          /> */}

        <div id="process">
          <IoTProcess
            title={iotApplicationsData.process.title}
            description={iotApplicationsData.process.description}
            steps={iotApplicationsData.process.steps}
          />
        </div>

        <IoTAutomation
          title={iotApplicationsData.automation.title}
          description={iotApplicationsData.automation.description}
          features={iotApplicationsData.automation.features}
        />
        <WhyCorewaySection
          badge={whyCorewayData["iot-application-development"].badge}
          title={whyCorewayData["iot-application-development"].title}
          subtitle={whyCorewayData["iot-application-development"].subtitle}
          reasons={whyCorewayData["iot-application-development"].reasons}
        />
        <div id="faq">
          <FAQ
            badge="Help Center"
            title="Common Questions & Answers"
            description="Everything you need to know about our services and how we work"
            faqs={sampleFAQs["iot-application-development"]}
            columns={1}
            showContactCTA={true}
            contactText="Still have questions?"
            contactButtonText="Contact Our Team"
          />
        </div>

        <PageCTA
          badge="Ready to connect?"
          title="Ready to Build Your IoT Solution?"
          description="Let's create intelligent IoT systems that transform your operations and unlock real-time insights. Our team is ready to help you connect devices to powerful cloud platforms."
          primaryButtonText="Book Consultation"
          secondaryButtonText="View IoT Projects"
          footerText="Free consultation • Custom IoT solutions • Proven expertise"
        />
      </main>
    </div>
  );
}
