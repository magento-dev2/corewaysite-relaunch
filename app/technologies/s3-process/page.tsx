import S3ProcessHero from '@/components/s3process/S3ProcessHero';
import S3ServicesGrid from '@/components/s3process/S3ServicesGrid';
import S3Benefits from '@/components/s3process/S3Benefits';
import S3UseCases from '@/components/s3process/S3UseCases';
import S3SecurityCompliance from '@/components/s3process/S3SecurityCompliance';
import PageCTA from '@/components/PageCTA';
import FAQ from '@/components/FAQ';
import WhyCorewaySection from '@/components/WhyCorewaySection';
import sampleFAQs from '@/data/faqs.json';
import whyCorewayData from '@/data/why-coreway.json';
import SubHeader from "@/components/SubHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "S3 Operations & Management | AWS S3 Optimization Services",
  description: "Expert AWS S3 operations services including architecture design, security configuration, cost optimization, lifecycle management, and compliance solutions.",
  keywords: "AWS S3, S3 operations, cloud storage, S3 optimization, S3 security, lifecycle management, cost optimization, data migration",
};

export default function S3ProcessPage() {
  const subHeaderItems = [
    { label: "Overview", sectionId: "overview" },
    { label: "Services", sectionId: "services" },
    { label: "Benefits", sectionId: "benefits" },
    { label: "FAQ", sectionId: "faq" },
  ];

  return (
    <div className="overflow-hidden">
      <div id="overview">
        <S3ProcessHero />
      </div>

      <SubHeader title="S3 Operations" items={subHeaderItems} />

      <div id="services">
        <S3ServicesGrid />
      </div>

      <div id="benefits">
        <S3Benefits />
      </div>

      <S3UseCases />
      <S3SecurityCompliance />

      <WhyCorewaySection
        badge={whyCorewayData["s3-process"].badge}
        title={whyCorewayData["s3-process"].title}
        subtitle={whyCorewayData["s3-process"].subtitle}
        reasons={whyCorewayData["s3-process"].reasons}
      />

      <div id="faq">
        <FAQ
          badge="Help Center"
          title="Common Questions & Answers"
          description="Everything you need to know about our S3 operations services"
          faqs={sampleFAQs["s3-process"]}
          columns={1}
          showContactCTA={true}
          contactText="Still have questions?"
          contactButtonText="Contact Our Team"
        />
      </div>

      <PageCTA
        badge="AWS S3 Optimization"
        title="Ready to Optimize Your Cloud Storage?"
        description="Let our experts help you build a scalable, secure, and cost-effective S3 infrastructure for your business."
        primaryButtonText="Get Started"
        secondaryButtonText="Schedule Consultation"
        footerText="Free consultation • Custom solutions • Expert support"
      />
    </div>
  );
}
