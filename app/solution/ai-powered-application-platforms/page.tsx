import aiPlatformsData from "../../../data/aiPlatformsData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import AIPlatformsHero from "@/components/aiplatforms/AIPlatformsHero";
import AIPlatformsOverview from "@/components/aiplatforms/AIPlatformsOverview";
import AIPlatformsFeatures from "@/components/aiplatforms/AIPlatformsFeatures";
import AIPlatformTechnologies from "@/components/aiplatforms/AIPlatformTechnologies";
import AIPlatformCaseStudies from "@/components/aiplatforms/AIPlatformCaseStudies";
import AIPlatformProcess from "@/components/aiplatforms/AIPlatformProcess";
import AIPlatformAutomation from "@/components/aiplatforms/AIPlatformAutomation";
import PageCTA from "@/components/PageCTA";
import WhyCorewaySection from "@/components/WhyCorewaySection";
import FAQ from "@/components/FAQ";
import sampleFAQs from '@/data/faqs.json';
import whyCorewayData from '@/data/why-coreway.json';
import SubHeader from "@/components/SubHeader";


export default function AIPoweredApplicationPlatforms() {
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
      { "@type": "ListItem", position: 2, name: "Solutions", item: `${siteUrl}/solutions` },
      {
        "@type": "ListItem",
        position: 3,
        name: "AI-Powered Application Platforms",
        item: `${siteUrl}/solution/ai-powered-application-platforms`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI-Powered Application Platforms",
    description:
      "Build intelligent, scalable applications with AI-driven platforms leveraging machine learning, NLP, and cloud technologies",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "AI Platform Development",
    areaServed: "Worldwide",
  };

  return (
    <div className="min-h-screen bg-[#0E0918]">
        <header className="page-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Solutions", href: "/solutions" },
                { label: "AI-Powered Application Platforms" },
              ]}
            />
          </div>
        </header>

        <main>
          <AIPlatformsHero
            title={aiPlatformsData.hero.title}
            title2={aiPlatformsData.hero.title2}
            subtitle={aiPlatformsData.hero.subtitle}
            buttons={aiPlatformsData.hero.buttons}
          />

          <SubHeader title="AI-Powered Application Platforms" items={subHeaderItems} />

          <div id="overview">
            <AIPlatformsOverview
            title={aiPlatformsData.overview.title}
            content={aiPlatformsData.overview.content}
            image={aiPlatformsData.overview.image}
          />
          </div>

          <div id="features">
            <AIPlatformsFeatures
            title={aiPlatformsData.features.title}
            items={aiPlatformsData.features.items}
          />
          </div>

          <AIPlatformTechnologies
            title={aiPlatformsData.platforms.title}
            description={aiPlatformsData.platforms.description}
            items={aiPlatformsData.platforms.items}
          />

          <AIPlatformCaseStudies
            title={aiPlatformsData.caseStudies.title}
            cases={aiPlatformsData.caseStudies.cases}
          />

          <div id="process">
            <AIPlatformProcess
            title={aiPlatformsData.process.title}
            description={aiPlatformsData.process.description}
            steps={aiPlatformsData.process.steps}
          />
          </div>

          <AIPlatformAutomation
            title={aiPlatformsData.automation.title}
            description={aiPlatformsData.automation.description}
            features={aiPlatformsData.automation.features}
          />
          <WhyCorewaySection
            badge={whyCorewayData["ai-powered-application-platforms"].badge}
            title={whyCorewayData["ai-powered-application-platforms"].title}
            subtitle={whyCorewayData["ai-powered-application-platforms"].subtitle}
            reasons={whyCorewayData["ai-powered-application-platforms"].reasons}
          />
          <div id="faq">
            <FAQ
            badge="Help Center"
            title="Common Questions & Answers"
            description="Everything you need to know about our services and how we work"
            faqs={sampleFAQs["ai-powered-application-platforms"]}
            columns={1}
            showContactCTA={true}
            contactText="Still have questions?"
            contactButtonText="Contact Our Team"
          />
          </div>


          <PageCTA
            badge="Ready to innovate?"
            title="Ready to Build AI-Powered Applications?"
            description="Let's create intelligent solutions that transform your business operations and unlock new possibilities. Our team is ready to help you harness the power of AI."
            primaryButtonText="Book Consultation"
            secondaryButtonText="View AI Projects"
            footerText="Free consultation • Custom AI solutions • Proven expertise"
          />
        </main>
      </div>
  );
}
