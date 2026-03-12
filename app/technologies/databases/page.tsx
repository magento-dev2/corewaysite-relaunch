import databaseData from "../../../data/databaseData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import TechHero from "@/components/technologies/TechHero";
import TechOverview from "@/components/technologies/TechOverview";
import TechFeatures from "@/components/technologies/TechFeatures";
import TechStack from "@/components/technologies/TechStack";
import DatabaseComparison from "@/components/database/DatabaseComparison";

import AutomationSection from "@/components/commerce/AutomationSection";
import PageCTA from "@/components/PageCTA";
import FAQ from '@/components/FAQ';
import WhyCorewaySection from '@/components/WhyCorewaySection';
import sampleFAQs from '@/data/faqs.json';
import whyCorewayData from '@/data/why-coreway.json';
import SubHeader from "@/components/SubHeader";
import CaseStudySection from "@/components/technologies/CaseStudySection";
import caseStudiesData from '@/data/caseStudies.json';

export default function DatabaseTechnologyPage() {
  const subHeaderItems = [
    { label: "Overview", sectionId: "overview" },
    { label: "Capabilities", sectionId: "features" },
    { label: "Our Process", sectionId: "process" },
    { label: "FAQ", sectionId: "faq" },
  ];

  return (
    <div className="min-h-screen bg-[#0E0918]">
      <header className="page-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Technologies", href: "/technologies" },
              { label: "Database Solutions" },
            ]}
          />
        </div>
      </header>

      <main>
        <TechHero
          title={databaseData.hero.title}
          title2={databaseData.hero.title2}
          subtitle={databaseData.hero.subtitle}
          buttons={databaseData.hero.buttons}
          img="/assets/images/database.png"
        />

        <SubHeader title="Databases" items={subHeaderItems} />

        <div id="overview">
          <TechOverview
            title={databaseData.overview.title}
            content={databaseData.overview.content}
            image={databaseData.overview.image}
            stats={databaseData.overview.stats}
          />
        </div>

        <div id="features">
          <TechFeatures
            title={databaseData.features.title}
            items={databaseData.features.items}
          />
        </div>

        <DatabaseComparison
          title={databaseData.comparison.title}
          subtitle={databaseData.comparison.subtitle}
          postgresql={databaseData.comparison.postgresql}
          mongodb={databaseData.comparison.mongodb}
        />

        <TechStack
          title={databaseData.technologies.title}
          description={databaseData.technologies.description}
          items={databaseData.technologies.items}
        />



        <AutomationSection
          title={databaseData.benefits.title}
          description={databaseData.benefits.description}
          features={databaseData.benefits.features}
        />

        <CaseStudySection
          technology="Database"
          caseStudies={caseStudiesData}
          title="Our Work"
          description="Explore our portfolio of successful projects"
        />

        <WhyCorewaySection
          badge={whyCorewayData["databases"].badge}
          title={whyCorewayData["databases"].title}
          subtitle={whyCorewayData["databases"].subtitle}
          reasons={whyCorewayData["databases"].reasons}
        />
        <div id="faq">
          <FAQ
            badge="Help Center"
            title="Common Questions & Answers"
            description="Everything you need to know about our services and how we work"
            faqs={sampleFAQs["databases"]}
            columns={1}
            showContactCTA={true}
            contactText="Still have questions?"
            contactButtonText="Contact Our Team"
          />
        </div>

        <PageCTA
          badge="Start Building"
          title="Ready to Optimize Your Database?"
          description="Let's architect database systems that scale with your business. Our experts deliver PostgreSQL and MongoDB solutions optimized for performance, reliability, and growth."
          primaryButtonText="Start Your Project"
          secondaryButtonText="View Work"
          footerText="Free consultation • Expert architects • Proven results"
        />
      </main>
    </div>
  );
}
