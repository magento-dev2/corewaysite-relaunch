import replatformingData from "../../../data/replatformingData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import ReplatformingHero from "@/components/replatforming/ReplatformingHero";
import ReplatformingOverview from "@/components/replatforming/ReplatformingOverview";
import ReplatformingFeatures from "@/components/replatforming/ReplatformingFeatures";
import ReplatformingTechnologies from "@/components/replatforming/ReplatformingTechnologies";
import ReplatformingCaseStudies from "@/components/replatforming/ReplatformingCaseStudies";
import ReplatformingProcess from "@/components/replatforming/ReplatformingProcess";
import ReplatformingAutomation from "@/components/replatforming/ReplatformingAutomation";
import PageCTA from "@/components/PageCTA";
import WhyCorewaySection from "@/components/WhyCorewaySection";
import FAQ from "@/components/FAQ";
import sampleFAQs from '@/data/faqs.json';
import whyCorewayData from '@/data/why-coreway.json';
import SubHeader from "@/components/SubHeader";



export default function ReplatformingMigration() {
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
        name: "Replatforming & Migration",
        item: `${siteUrl}/solution/replatforming-migration`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Platform Migration & Replatforming Services",
    description:
      "Seamless platform migration and replatforming services with zero downtime for e-commerce, SaaS, and enterprise applications",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "Platform Migration & Replatforming",
    areaServed: "Worldwide",
  };

  return (
    <div className="min-h-screen bg-[#0E0918]">
        <header className="page-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Solutions", href: "/solutions" },
                { label: "Replatforming & Migration" },
              ]}
            />
          </div>
        </header>

        <main>
          <ReplatformingHero
            title={replatformingData.hero.title}
            title2={replatformingData.hero.title2}
            subtitle={replatformingData.hero.subtitle}
            buttons={replatformingData.hero.buttons}
          />

          <SubHeader title="Replatforming & Migration" items={subHeaderItems} />

          <div id="overview">
            <ReplatformingOverview
            title={replatformingData.overview.title}
            content={replatformingData.overview.content}
            image={replatformingData.overview.image}
          />
          </div>

          <div id="features">
            <ReplatformingFeatures
            title={replatformingData.features.title}
            items={replatformingData.features.items}
          />
          </div>

          <ReplatformingTechnologies
            title={replatformingData.platforms.title}
            description={replatformingData.platforms.description}
            items={replatformingData.platforms.items}
          />

          <ReplatformingCaseStudies
            title={replatformingData.caseStudies.title}
            cases={replatformingData.caseStudies.cases}
          />

          <div id="process">
            <ReplatformingProcess
            title={replatformingData.process.title}
            description={replatformingData.process.description}
            steps={replatformingData.process.steps}
          />
          </div>

          <ReplatformingAutomation
            title={replatformingData.automation.title}
            description={replatformingData.automation.description}
            features={replatformingData.automation.features}
          />
          <WhyCorewaySection
            badge={whyCorewayData["replatforming-migration"].badge}
            title={whyCorewayData["replatforming-migration"].title}
            subtitle={whyCorewayData["replatforming-migration"].subtitle}
            reasons={whyCorewayData["replatforming-migration"].reasons}
          />
          <div id="faq">
            <FAQ
            badge="Help Center"
            title="Common Questions & Answers"
            description="Everything you need to know about our services and how we work"
            faqs={sampleFAQs["replatforming-migration"]}
            columns={1}
            showContactCTA={true}
            contactText="Still have questions?"
            contactButtonText="Contact Our Team"
          />
          </div>

          <PageCTA
            badge="Ready to migrate?"
            title="Ready to Modernize Your Platform?"
            description="Let's plan your seamless migration journey. Our expert team ensures zero downtime, complete data integrity, and improved performance on your new platform."
            primaryButtonText="Start Migration"
            secondaryButtonText="Get Assessment"
            footerText="Free migration assessment • Zero downtime • 100% data integrity"
          />
        </main>
      </div>
  );
}
