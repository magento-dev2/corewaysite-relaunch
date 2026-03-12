import infrastructureSecurityData from "../../../data/infrastructureSecurityData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import InfraSecurityHero from "@/components/infrasecurity/InfraSecurityHero";
import InfraSecurityOverview from "@/components/infrasecurity/InfraSecurityOverview";
import InfraSecurityFeatures from "@/components/infrasecurity/InfraSecurityFeatures";
import AISecurityTechnologies from "@/components/aisecurity/AISecurityTechnologies";
import AISecurityCaseStudies from "@/components/aisecurity/AISecurityCaseStudies";
import AISecurityProcess from "@/components/aisecurity/AISecurityProcess";
import AISecurityAutomation from "@/components/aisecurity/AISecurityAutomation";
import PageCTA from "@/components/PageCTA";
import sampleFAQs from '@/data/faqs.json';
import FAQ from '@/components/FAQ';
import WhyCorewaySection from '@/components/WhyCorewaySection';
import whyCorewayData from '@/data/why-coreway.json';
import SubHeader from "@/components/SubHeader";
import PortfolioHighlights from "@/components/about/PortfolioHighlights";

export default function InfrastructureSecurityAI() {
  const subHeaderItems = [
    { label: "Overview", sectionId: "overview" },
    { label: "Capabilities", sectionId: "features" },
    { label: "Our Process", sectionId: "process" },
    { label: "FAQ", sectionId: "faq" },
  ];

  const siteUrl = "https://www.corewaysolution.com";



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
              { label: "Infrastructure Security Using AI" },
            ]}
          />
        </div>
      </header>

      <main>
        <InfraSecurityHero
          title={infrastructureSecurityData.hero.title}
          title2={infrastructureSecurityData.hero.title2}
          subtitle={infrastructureSecurityData.hero.subtitle}
          buttons={infrastructureSecurityData.hero.buttons}
        />

        <SubHeader title="Infrastructure Security AI" items={subHeaderItems} />

        <div id="overview">
          <InfraSecurityOverview
            title={infrastructureSecurityData.overview.title}
            content={infrastructureSecurityData.overview.content}
            image={infrastructureSecurityData.overview.image}
          />
        </div>

        <div id="features">
          <InfraSecurityFeatures
            title={infrastructureSecurityData.features.title}
            items={infrastructureSecurityData.features.items}
          />
        </div>

        <AISecurityTechnologies
          title={infrastructureSecurityData.platforms.title}
          description={infrastructureSecurityData.platforms.description}
          items={infrastructureSecurityData.platforms.items}
        />

        {/* <AISecurityCaseStudies
            title={infrastructureSecurityData.caseStudies.title}
            cases={infrastructureSecurityData.caseStudies.cases}
          /> */}

        <PortfolioHighlights data={projectData} highlightCount={6} />



        <div id="process">
          <AISecurityProcess
            title={infrastructureSecurityData.process.title}
            description={infrastructureSecurityData.process.description}
            steps={infrastructureSecurityData.process.steps}
          />
        </div>

        <AISecurityAutomation
          title={infrastructureSecurityData.automation.title}
          description={infrastructureSecurityData.automation.description}
          features={infrastructureSecurityData.automation.features}
        />

        <WhyCorewaySection
          badge={whyCorewayData["infrastructure-security-ai"].badge}
          title={whyCorewayData["infrastructure-security-ai"].title}
          subtitle={whyCorewayData["infrastructure-security-ai"].subtitle}
          reasons={whyCorewayData["infrastructure-security-ai"].reasons}
        />
        <div id="faq">
          <FAQ
            badge="Help Center"
            title="Common Questions & Answers"
            description="Everything you need to know about our services and how we work"
            faqs={sampleFAQs["infrastructure-security-ai"]}
            columns={1}
            showContactCTA={true}
            contactText="Still have questions?"
            contactButtonText="Contact Our Team"
          />
        </div>

        <PageCTA
          badge="Secure your infrastructure"
          title="Ready to Deploy AI Security?"
          description="Let's protect your infrastructure with intelligent, AI-powered security solutions. Our expert team delivers 24/7 threat detection, automated response, and continuous protection."
          primaryButtonText="Start Project"
          secondaryButtonText=" View Our Work"
          footerText="Free security assessment • 24/7 AI monitoring • 99.9% threat detection"
        />
      </main>
    </div>
  );
}
