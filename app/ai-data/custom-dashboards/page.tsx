import customDashboardData from "../../../data/customDashboardData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import DashboardHero from "@/components/dashboard/DashboardHero";
import DashboardOverview from "@/components/dashboard/DashboardOverview";
import DashboardFeatures from "@/components/dashboard/DashboardFeatures";
import DashboardTechnologies from "@/components/dashboard/DashboardTechnologies";
import DashboardCaseStudies from "@/components/dashboard/DashboardCaseStudies";
import DashboardProcess from "@/components/dashboard/DashboardProcess";
import DashboardAutomation from "@/components/dashboard/DashboardAutomation";
import PageCTA from "@/components/PageCTA";
import sampleFAQs from '@/data/faqs.json';
import FAQ from '@/components/FAQ';
import WhyCorewaySection from '@/components/WhyCorewaySection';
import whyCorewayData from '@/data/why-coreway.json';
import SubHeader from "@/components/SubHeader";

export default function CustomDashboards() {
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
      { "@type": "ListItem", position: 2, name: "AI & Data", item: `${siteUrl}/ai-data` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Custom Data Dashboards & Access Portals",
        item: `${siteUrl}/ai-data/custom-dashboards`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Data Dashboards & Access Portals",
    description:
      "Build interactive, real-time data dashboards and secure access portals that transform complex datasets into actionable insights.",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "Dashboard Development",
    areaServed: "Worldwide",
  };

  return (
    <div className="min-h-screen bg-[#0E0918]">
        <header className="page-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "AI & Data", href: "/ai-data" },
                { label: "Custom Data Dashboards & Access Portals" },
              ]}
            />
          </div>
        </header>

        <main>
          <DashboardHero
            title={customDashboardData.hero.title}
            title2={customDashboardData.hero.title2}
            subtitle={customDashboardData.hero.subtitle}
            buttons={customDashboardData.hero.buttons}
          />

          <SubHeader title="Custom Dashboards" items={subHeaderItems} />

          <div id="overview">
            <DashboardOverview
            title={customDashboardData.overview.title}
            content={customDashboardData.overview.content}
            image={customDashboardData.overview.image}
          />
          </div>

          <div id="features">
            <DashboardFeatures
            title={customDashboardData.features.title}
            items={customDashboardData.features.items}
          />
          </div>

          <DashboardTechnologies
            title={customDashboardData.platforms.title}
            description={customDashboardData.platforms.description}
            items={customDashboardData.platforms.items}
          />

          <DashboardCaseStudies
            title={customDashboardData.caseStudies.title}
            cases={customDashboardData.caseStudies.cases}
          />

          <div id="process">
            <DashboardProcess
            title={customDashboardData.process.title}
            description={customDashboardData.process.description}
            steps={customDashboardData.process.steps}
          />
          </div>

          <DashboardAutomation
            title={customDashboardData.automation.title}
            description={customDashboardData.automation.description}
            features={customDashboardData.automation.features}
          />
          <WhyCorewaySection
            badge={whyCorewayData["custom-dashboards"].badge}
            title={whyCorewayData["custom-dashboards"].title}
            subtitle={whyCorewayData["custom-dashboards"].subtitle}
            reasons={whyCorewayData["custom-dashboards"].reasons}
          />
          <div id="faq">
            <FAQ
            badge="Help Center"
            title="Common Questions & Answers"
            description="Everything you need to know about our services and how we work"
            faqs={sampleFAQs["custom-dashboards"]}
            columns={1}
            showContactCTA={true}
            contactText="Still have questions?"
            contactButtonText="Contact Our Team"
          />
          </div>

          <PageCTA
            badge="Visualize Your Data"
            title="Ready to Build Your Custom Dashboard?"
            description="Let's transform your data into interactive, actionable insights. Our expert team delivers dashboards that handle millions of data points with sub-second response times."
            primaryButtonText="Get Started"
            secondaryButtonText="View Demo"
            footerText="Free consultation • Real-time updates • Role-based access"
          />
        </main>
      </div>
  );
}
