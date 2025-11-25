"use client";

import AIChatHero from '@/components/aichat/AIChatHero';
import AIChatProcess from '@/components/aichat/AIChatProcess';
import AIChatFeatures from '@/components/aichat/AIChatFeatures';
import AIChatBenefits from '@/components/aichat/AIChatBenefits';
import AIChatIndustries from '@/components/aichat/AIChatIndustries';
import PageCTA from '@/components/PageCTA';

export default function AIChatWithPDFPage() {
  return (
    <div className="overflow-hidden">
      <AIChatHero />
      <AIChatProcess />
      <AIChatFeatures />
      <AIChatBenefits />
      <AIChatIndustries />
      <PageCTA
        badge="Start Your Journey"
        title="Let's Talk Your Success!"
        description="Over 250 businesses around the world trust Coreway Solution to transform their document management with AI. Join them and experience the power of AI-driven insights."
        primaryButtonText="Request for Demo"
        secondaryButtonText="Contact Us"
        footerText="No credit card required • Quick setup • Expert support"
      />
    </div>
  );
}
