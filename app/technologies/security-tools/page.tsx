import securityData from "../../../data/securityToolsData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import TechHero from "@/components/technologies/TechHero";
import TechOverview from "@/components/technologies/TechOverview";
import TechFeatures from "@/components/technologies/TechFeatures";
import TechStack from "@/components/technologies/TechStack";
import SecurityToolsComparison from "@/components/security/SecurityToolsComparison";
import TechUseCases from "@/components/technologies/TechUseCases";
import AutomationSection from "@/components/commerce/AutomationSection";
import PageCTA from "@/components/PageCTA";
import FAQ from '@/components/FAQ';
import WhyCorewaySection from '@/components/WhyCorewaySection';
import sampleFAQs from '@/data/faqs.json';
import whyCorewayData from '@/data/why-coreway.json';
import SubHeader from "@/components/SubHeader";

export default function SecurityToolsPage() {
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
        name: "Security Tools",
        item: `${siteUrl}/technologies/security-tools`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Security Tools - Fail2Ban, UFW, CrowdSec",
    description:
      "Expert server security implementation with Fail2Ban, UFW, and CrowdSec for intrusion prevention and threat protection.",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "Security Implementation",
    areaServed: "Worldwide",
  };

  return (
    <div className="min-h-screen bg-[#0E0918]">
        <header className="page-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Technologies", href: "/technologies" },
                { label: "Security Tools" },
              ]}
            />
          </div>
        </header>

        <main>
          <TechHero
            title={securityData.hero.title}
            title2={securityData.hero.title2}
            subtitle={securityData.hero.subtitle}
            buttons={securityData.hero.buttons}
            img="/assets/images/security-tools.png"
          />

          <SubHeader title="Security Tools" items={subHeaderItems} />

          <div id="overview">
            <TechOverview
            title={securityData.overview.title}
            content={securityData.overview.content}
            image={securityData.overview.image}
            stats={securityData.overview.stats}
          />
          </div>

          <div id="features">
            <TechFeatures
            title={securityData.features.title}
            items={securityData.features.items}
          />
          </div>

          <SecurityToolsComparison
            title={securityData.toolComparison.title}
            subtitle={securityData.toolComparison.subtitle}
            tools={securityData.toolComparison.tools}
          />

          <TechStack
            title={securityData.technologies.title}
            description={securityData.technologies.description}
            items={securityData.technologies.items}
          />

          <TechUseCases
            title={securityData.useCases.title}
            cases={securityData.useCases.cases}
          />

          <AutomationSection
            title={securityData.benefits.title}
            description={securityData.benefits.description}
            features={securityData.benefits.features}
          />

          <WhyCorewaySection
            badge={whyCorewayData["security-tools"].badge}
            title={whyCorewayData["security-tools"].title}
            subtitle={whyCorewayData["security-tools"].subtitle}
            reasons={whyCorewayData["security-tools"].reasons}
          />
          <div id="faq">
            <FAQ
            badge="Help Center"
            title="Common Questions & Answers"
            description="Everything you need to know about our services and how we work"
            faqs={sampleFAQs["security-tools"]}
            columns={1}
            showContactCTA={true}
            contactText="Still have questions?"
            contactButtonText="Contact Our Team"
          />
          </div>

          <PageCTA
            badge="Secure Now"
            title="Ready to Secure Your Servers?"
            description="Let's implement comprehensive security with Fail2Ban, UFW, and CrowdSec. Our experts deliver multi-layer protection that blocks 99.9% of attacks automatically."
            primaryButtonText="Secure Your Servers"
            secondaryButtonText="View Solutions"
            footerText="Free consultation • Security experts • 24/7 protection"
          />
        </main>
      </div>
  );
}
