"use client";

import DedicatedDevHero from '@/components/dedicateddev/DedicatedDevHero';
import DedicatedDevBenefits from '@/components/dedicateddev/DedicatedDevBenefits';
import HiringSteps from '@/components/dedicateddev/HiringSteps';
import ComparisonTable from '@/components/dedicateddev/ComparisonTable';
import MultiTechExpertise from '@/components/dedicateddev/MultiTechExpertise';
import TechStackShowcase from '@/components/dedicateddev/TechStackShowcase';
import HiringModels from '@/components/dedicateddev/HiringModels';
import WhyChooseUs from '@/components/dedicateddev/WhyChooseUs';
import PageCTA from '@/components/PageCTA';
import FAQ from "@/components/FAQ";
import sampleFAQs from '@/data/faqs.json';
import PortfolioHighlights from '@/components/home/PortfolioHighlights';
import Dedicatedteam from '@/components/dedicateddev/Devloperteam';
import { useRef } from 'react';
import SubHeader from '@/components/SubHeader';
import { idea } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function DedicatedDevelopersPage() {
  const teamRef = useRef<HTMLDivElement | null>(null);

  const handleHeroClick = () => {
    teamRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const subHeaderItems = [
    { label: "Overview", sectionId: "overview" },
    { label: "Hire Process", sectionId: "features" },
    { label: "Our Team", sectionId: "process" },
    { label: "FAQ", sectionId: "faq" },
  ];


  return (
    <div className="overflow-hidden">
      <SubHeader title="Hire Dedicated Developers" items={subHeaderItems} />

      <DedicatedDevHero onHireClick={handleHeroClick} />
      <div id="overview">      <DedicatedDevBenefits />
      </div>

      <div id='features'>
        <HiringSteps />
      </div>

      <ComparisonTable />
      <div ref={teamRef} id="process">
        <Dedicatedteam />
      </div>

      <MultiTechExpertise />
      <TechStackShowcase />
      <PortfolioHighlights />
      <HiringModels />

      <WhyChooseUs />

      <div id="faq">
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
      </div>


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
