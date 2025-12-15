import MobileAppHero from '@/components/mobile-application/MobileAppHero';
import MobileAppServices from '@/components/mobile-application/MobileAppServices';
import MobileAppFeatures from '@/components/mobile-application/MobileAppFeatures';
import MobileAppPlatforms from '@/components/mobile-application/MobileAppPlatforms';
import MobileAppProcess from '@/components/mobile-application/MobileAppProcess';
import MobileAppSecurity from '@/components/mobile-application/MobileAppSecurity';
import PageCTA from '@/components/PageCTA';
import FAQ from '@/components/FAQ';
import WhyCorewaySection from '@/components/WhyCorewaySection';
import sampleFAQs from '@/data/faqs.json';
import whyCorewayData from '@/data/why-coreway.json';
import SubHeader from "@/components/SubHeader";

export default function MobileApplicationsPage() {
  const subHeaderItems = [
    { label: "Overview", sectionId: "overview" },
    { label: "Services", sectionId: "services" },
    { label: "Features", sectionId: "features" },
    { label: "Process", sectionId: "process" },
    { label: "FAQ", sectionId: "faq" },
  ];

  return (
    <div className="overflow-hidden">
      <div id="overview">
        <MobileAppHero />
      </div>

      <SubHeader title="Mobile Applications" items={subHeaderItems} />

      <div id="services">
        <MobileAppServices />
      </div>

      <div id="features">
        <MobileAppFeatures />
      </div>

      <MobileAppPlatforms />

      <div id="process">
        <MobileAppProcess />
      </div>

      <MobileAppSecurity />

      <WhyCorewaySection
        badge={whyCorewayData["MobileApplication"].badge}
        title={whyCorewayData["MobileApplication"].title}
        subtitle={whyCorewayData["MobileApplication"].subtitle}
        reasons={whyCorewayData["MobileApplication"].reasons}
      />

      <div id="faq">
        <FAQ
          badge="Help Center"
          title="Common Questions & Answers"
          description="Everything you need to know about our mobile app development services"
          faqs={sampleFAQs["mobileApplication"]}
          columns={1}
          showContactCTA={true}
          contactText="Still have questions?"
          contactButtonText="Contact Our Team"
        />
      </div>

      <PageCTA
        badge="Mobile App Development"
        title="Ready to Build Your Mobile App?"
        description="Let our experts help you create a powerful, scalable, and user-friendly mobile application that drives business growth."
        primaryButtonText="Start Your Project"
        secondaryButtonText="Schedule Consultation"
        footerText="Free consultation • Custom solutions • Expert support"
      />
    </div>
  );
}
