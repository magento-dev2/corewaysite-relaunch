import awsS3Data from "../../../data/awsS3Data.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import AWSS3Hero from "@/components/awss3/AWSS3Hero";
import AWSS3Overview from "@/components/awss3/AWSS3Overview";
import AWSS3Features from "@/components/awss3/AWSS3Features";
import AWSS3Technologies from "@/components/awss3/AWSS3Technologies";
import AWSS3CaseStudies from "@/components/awss3/AWSS3CaseStudies";
import AWSS3Process from "@/components/awss3/AWSS3Process";
import AWSS3Automation from "@/components/awss3/AWSS3Automation";
import PageCTA from "@/components/PageCTA";
import sampleFAQs from '@/data/faqs.json';
import FAQ from '@/components/FAQ';
import WhyCorewaySection from '@/components/WhyCorewaySection';
import whyCorewayData from '@/data/why-coreway.json';
import SubHeader from "@/components/SubHeader";

export default function AWSS3Optimization() {
  const subHeaderItems = [
    { label: "Overview", sectionId: "overview" },
    { label: "Capabilities", sectionId: "features" },
    { label: "Our Process", sectionId: "process" },
    { label: "FAQ", sectionId: "faq" },
  ];

  const siteUrl = "https://www.corewaysolution.com";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "AI & Data", item: `${siteUrl}/ai-data` },
      {
        "@type": "ListItem",
        position: 3,
        name: "AWS S3 Architecture & Cost Optimization",
        item: `${siteUrl}/ai-data/aws-s3-optimization`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AWS S3 Architecture & Cost Optimization",
    description:
      "Design scalable S3 architectures, optimize storage costs by up to 70%, and implement best practices for performance, security, and data lifecycle management.",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "AWS S3 Optimization",
    areaServed: "Worldwide",
  };

  return (
    <div className="min-h-screen bg-[#0E0918]">
        <header className="page-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "AI & Data", href: "/ai-data" },
                { label: "AWS S3 Architecture & Cost Optimization" },
              ]}
            />
          </div>
        </header>

        <main>
          <AWSS3Hero
            title={awsS3Data.hero.title}
            title2={awsS3Data.hero.title2}
            subtitle={awsS3Data.hero.subtitle}
            buttons={awsS3Data.hero.buttons}
          />

          <SubHeader title="AWS S3 Optimization" items={subHeaderItems} />

          <div id="overview">
            <AWSS3Overview
            title={awsS3Data.overview.title}
            content={awsS3Data.overview.content}
            image={awsS3Data.overview.image}
          />
          </div>

          <div id="features">
            <AWSS3Features
            title={awsS3Data.features.title}
            items={awsS3Data.features.items}
          />
          </div>

          <AWSS3Technologies
            title={awsS3Data.platforms.title}
            description={awsS3Data.platforms.description}
            items={awsS3Data.platforms.items}
          />

          <AWSS3CaseStudies
            title={awsS3Data.caseStudies.title}
            cases={awsS3Data.caseStudies.cases}
          />

          <div id="process">
            <AWSS3Process
            title={awsS3Data.process.title}
            description={awsS3Data.process.description}
            steps={awsS3Data.process.steps}
          />
          </div>

          <AWSS3Automation
            title={awsS3Data.automation.title}
            description={awsS3Data.automation.description}
            features={awsS3Data.automation.features}
          />

          <WhyCorewaySection
            badge={whyCorewayData["aws-s3-optimization"].badge}
            title={whyCorewayData["aws-s3-optimization"].title}
            subtitle={whyCorewayData["aws-s3-optimization"].subtitle}
            reasons={whyCorewayData["aws-s3-optimization"].reasons}
          />
          <div id="faq">
            <FAQ
            badge="Help Center"
            title="Common Questions & Answers"
            description="Everything you need to know about our services and how we work"
            faqs={sampleFAQs["aws-s3-optimization"]}
            columns={1}
            showContactCTA={true}
            contactText="Still have questions?"
            contactButtonText="Contact Our Team"
          />
          </div>

          <PageCTA
            badge="Optimize Your Storage"
            title="Ready to Reduce Your S3 Costs?"
            description="Let's analyze your AWS S3 infrastructure and implement cost-saving strategies. Our expert team delivers optimizations that can reduce your storage costs by up to 70% while improving performance."
            primaryButtonText="Get Free Audit"
            secondaryButtonText="Schedule Call"
            footerText="Free S3 audit • Cost reduction guarantee • Zero downtime migration"
          />
        </main>
      </div>
  );
}
