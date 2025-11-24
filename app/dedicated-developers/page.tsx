"use client";

import DedicatedDevHero from '@/components/dedicateddev/DedicatedDevHero';
import DedicatedDevBenefits from '@/components/dedicateddev/DedicatedDevBenefits';
import MultiTechExpertise from '@/components/dedicateddev/MultiTechExpertise';
import TechStackShowcase from '@/components/dedicateddev/TechStackShowcase';
import HiringModels from '@/components/dedicateddev/HiringModels';
import WhyChooseUs from '@/components/dedicateddev/WhyChooseUs';
import PageCTA from '@/components/PageCTA';

export default function DedicatedDevelopersPage() {
  return (
    <div className="overflow-hidden">
      <DedicatedDevHero />
      <DedicatedDevBenefits />
      <MultiTechExpertise />
      <TechStackShowcase />
      <HiringModels />
      <WhyChooseUs />
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
