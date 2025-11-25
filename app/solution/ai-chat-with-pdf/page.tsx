"use client";

import AIChatHero from '@/components/aichat/AIChatHero';
import AIChatProcess from '@/components/aichat/AIChatProcess';
import AIChatFeatures from '@/components/aichat/AIChatFeatures';
import AIChatBenefits from '@/components/aichat/AIChatBenefits';
import AIChatIndustries from '@/components/aichat/AIChatIndustries';
import PageCTA from '@/components/PageCTA';
import FAQ from '@/components/FAQ';
import WhyCorewaySection from '@/components/WhyCorewaySection';
import sampleFAQs from '@/data/faq.json';


export default function AIChatWithPDFPage() {
  return (
    <div className="overflow-hidden">
      <AIChatHero />
      <AIChatProcess />
      <AIChatFeatures />
      <AIChatBenefits />
      <AIChatIndustries />
      <WhyCorewaySection
        badge="Why Choose Us"
        title="Why Choose Coreway Solutions"
        subtitle="We're not just another software company. We're your technology partner committed to delivering exceptional results through innovation and expertise."

      />
      <FAQ
        badge="Help Center"
        title="Common Questions & Answers"
        description="Everything you need to know about our services and how we work"
        faqs={sampleFAQs}
        columns={1}
        showContactCTA={true}
        contactText="Still have questions?"
        contactButtonText="Contact Our Team"
      />
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
