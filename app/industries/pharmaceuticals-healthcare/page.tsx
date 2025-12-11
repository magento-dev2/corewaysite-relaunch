import healthcareData from "../../../data/pharmaceuticalsHealthcareData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import HealthcareHero from "@/components/healthcare/HealthcareHero";
import HealthcareOverview from "@/components/healthcare/HealthcareOverview";
import HealthcareFeatures from "@/components/healthcare/HealthcareFeatures";
import PlatformExpertise from "@/components/commerce/PlatformExpertise";
import CaseStudies from "@/components/commerce/CaseStudies";
import ProcessDiagram from "@/components/commerce/ProcessDiagram";
import AutomationSection from "@/components/commerce/AutomationSection";
import PageCTA from "@/components/PageCTA";
import sampleFAQs from '@/data/faqs.json';
import FAQ from '@/components/FAQ';
import WhyCorewaySection from '@/components/WhyCorewaySection';
import whyCorewayData from '@/data/why-coreway.json';
import SubHeader from "@/components/SubHeader";


export default function PharmaceuticalsHealthcarePage() {
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
        name: "Pharmaceuticals & Healthcare Solutions",
        item: `${siteUrl}/industries/pharmaceuticals-healthcare`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pharmaceuticals & Healthcare Digital Solutions",
    description:
      "HIPAA-compliant platforms, telemedicine integration, patient portals, prescription management, and AI-powered healthcare solutions.",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "Healthcare Technology Solutions",
    areaServed: "Worldwide",
  };

  return (
    <div className="min-h-screen bg-[#0E0918]">
        <header className="page-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Industries", href: "/industries" },
                { label: "Pharmaceuticals & Healthcare Solutions" },
              ]}
            />
          </div>
        </header>

        <main>
          <HealthcareHero
            title={healthcareData.hero.title}
            title2={healthcareData.hero.title2}
            subtitle={healthcareData.hero.subtitle}
            buttons={healthcareData.hero.buttons}
            img="/assets/images/pharmaceuticals-healthcare.png"
          />

          <SubHeader title="Pharmaceuticals & Healthcare" items={subHeaderItems} />

          <div id="overview">
            <HealthcareOverview
              title={healthcareData.overview.title}
              content={healthcareData.overview.content}
              image={healthcareData.overview.image}
            />
          </div>

          <div id="features">
            <HealthcareFeatures
              title={healthcareData.features.title}
              items={healthcareData.features.items}
            />
          </div>

          <PlatformExpertise
            title={healthcareData.platforms.title}
            description={healthcareData.platforms.description}
            items={healthcareData.platforms.items}
          />

          <CaseStudies
            title={healthcareData.caseStudies.title}
            cases={healthcareData.caseStudies.cases}
          />

          <div id="process">
            <ProcessDiagram
              title={healthcareData.process.title}
              description={healthcareData.process.description}
              steps={healthcareData.process.steps}
            />
          </div>

          <AutomationSection
            title={healthcareData.automation.title}
            description={healthcareData.automation.description}
            features={healthcareData.automation.features}
          />

          <WhyCorewaySection
            badge={whyCorewayData["pharmaceuticals-healthcare"].badge}
            title={whyCorewayData["pharmaceuticals-healthcare"].title}
            subtitle={whyCorewayData["pharmaceuticals-healthcare"].subtitle}
            reasons={whyCorewayData["pharmaceuticals-healthcare"].reasons}
          />
          <div id="faq">
            <FAQ
              badge="Help Center"
              title="Common Questions & Answers"
              description="Everything you need to know about our services and how we work"
              faqs={sampleFAQs["pharmaceuticals-healthcare"]}
              columns={1}
              showContactCTA={true}
              contactText="Still have questions?"
              contactButtonText="Contact Our Team"
            />
          </div>


          <PageCTA
            badge="Transform Healthcare"
            title="Ready to Innovate Healthcare Delivery?"
            description="Let's build secure, HIPAA-compliant platforms that improve patient outcomes, streamline operations, and drive innovation in healthcare. Our team specializes in healthcare technology solutions."
            primaryButtonText="Start Your Project"
            secondaryButtonText="View Healthcare Cases"
            footerText="Free consultation • HIPAA expertise • Proven compliance"
          />
        </main>
      </div>
  );
}
