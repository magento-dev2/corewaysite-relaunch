"use client";

import DedicatedDevHero from '@/components/dedicateddev/DedicatedDevHero';
import DedicatedDevBenefits from '@/components/dedicateddev/DedicatedDevBenefits';
import ComparisonTable from '@/components/dedicateddev/ComparisonTable';
import MultiTechExpertise from '@/components/dedicateddev/MultiTechExpertise';
import TechStackShowcase from '@/components/dedicateddev/TechStackShowcase';
import HiringModels from '@/components/dedicateddev/HiringModels';
import WhyChooseUs from '@/components/dedicateddev/WhyChooseUs';
import PageCTA from '@/components/PageCTA';
import FAQ from "@/components/FAQ";
import sampleFAQs from '@/data/faqs.json';

export default function DedicatedDevelopersPage() {
  return (
    <div className="overflow-hidden">
      <DedicatedDevHero />
      <DedicatedDevBenefits />
      <ComparisonTable />
      <MultiTechExpertise />
      <TechStackShowcase />
      <HiringModels />
      <WhyChooseUs />

      <FAQ
        badge="Help Center"
        title="Common Questions & Answers"
        description="Everything you need to know about our services and how we work"
        faqs={sampleFAQs["dedicated-developers"]}
        columns={1}
        showContactCTA={true}
        contactText="Still have questions?"
        contactButtonText="Contact Our Team"
      />

      <PageCTA
        badge="Hire Dedicated Developers"
        title="Ready to Build Your Dream Team?"
        description="Get access to skilled developers who work exclusively for you. Scale your team up or down based on your needs with complete flexibility."
        primaryButtonText="Start Hiring"
        secondaryButtonText="Schedule Consultation"
        footerText="Flexible engagement • No hidden costs • 100+ tech experts"
      />
    </div>
  );
}
