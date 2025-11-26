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



export default function DBDashbotPage() {
  return (
    <div className="overflow-hidden">
      <DBDashbotHero />
      <DBDashbotFeatures />
      <DBDashbotProcess />
      <DBDashbotBenefits />
      <DBDashbotTechnology />
      <DBDashbotIndustries />
      <WhyCorewaySection
        badge="Why Choose Us"
        title="Why Choose Coreway Solutions"
        subtitle="We're not just another software company. We're your technology partner committed to delivering exceptional results through innovation and expertise."

      />
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
