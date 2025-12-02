"use client";

import DBDashbotHero from '@/components/dbdashbot/DBDashbotHero';
import DBDashbotFeatures from '@/components/dbdashbot/DBDashbotFeatures';
import DBDashbotBenefits from '@/components/dbdashbot/DBDashbotBenefits';
import DBDashbotIndustries from '@/components/dbdashbot/DBDashbotIndustries';
import DBDashbotTechnology from '@/components/dbdashbot/DBDashbotTechnology';
import DBDashbotProcess from '@/components/dbdashbot/DBDashbotProcess';
import PageCTA from '@/components/PageCTA';
import WhyCorewaySection from "@/components/WhyCorewaySection";
import FAQ from "@/components/FAQ";
import sampleFAQs from '@/data/faqs.json';
import whyCorewayData from '@/data/why-coreway.json';
import SubHeader from "@/components/SubHeader";

export default function DBDashbotPage() {
  const subHeaderItems = [
    { label: "Overview", sectionId: "overview" },
    { label: "Capabilities", sectionId: "features" },
    { label: "Our Process", sectionId: "process" },
    { label: "FAQ", sectionId: "faq" },
  ];

  return (
    <div className="overflow-hidden">
      <div id="overview">
        <DBDashbotHero />
      </div>

      <SubHeader title="DB Dashbot" items={subHeaderItems} />
      <div id="features">
        <DBDashbotFeatures />
      </div>
      <div id="process">
        <DBDashbotProcess />
      </div>
      <DBDashbotBenefits />
      <DBDashbotTechnology />
      <DBDashbotIndustries />
      <WhyCorewaySection
        badge={whyCorewayData["DBDashbot"].badge}
        title={whyCorewayData["DBDashbot"].title}
        subtitle={whyCorewayData["DBDashbot"].subtitle}
        reasons={whyCorewayData["DBDashbot"].reasons}
      />
      <div id="faq">
        <FAQ
          badge="Help Center"
          title="Common Questions & Answers"
          description="Everything you need to know about our services and how we work"
          faqs={sampleFAQs["DBDashbot"]}
          columns={1}
          showContactCTA={true}
          contactText="Still have questions?"
          contactButtonText="Contact Our Team"
        />
      </div>
      <PageCTA
        badge="Free Setup Available"
        title="Let's Talk Your Success!"
        description="Transform your database queries with AI-driven intelligence. Get started with our free setup and experience the power of natural language database interactions."
        primaryButtonText="Request for Demo"
        secondaryButtonText="Get Started"
        footerText="Free setup • No SQL expertise required • Instant insights"
      />
    </div>
  );
}
