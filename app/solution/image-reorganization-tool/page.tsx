"use client";

import ImageReorgHero from '@/components/image-reorg/ImageReorgHero';
import ImageReorgDemo from '@/components/image-reorg/ImageReorgDemo';
import ImageReorgFeatures from '@/components/image-reorg/ImageReorgFeatures';
import ImageReorgBenefits from '@/components/image-reorg/ImageReorgBenefits';
import ImageReorgProcess from '@/components/image-reorg/ImageReorgProcess';
import ImageReorgUseCases from '@/components/image-reorg/ImageReorgUseCases';
import PageCTA from '@/components/PageCTA';
import WhyCorewaySection from "@/components/WhyCorewaySection";
import FAQ from "@/components/FAQ";
import sampleFAQs from '@/data/faqs.json';
import whyCorewayData from '@/data/why-coreway.json';
import SubHeader from "@/components/SubHeader";

export default function ImageReorganizationToolPage() {
  const subHeaderItems = [
    { label: "Overview", sectionId: "overview" },
    { label: "Demo", sectionId: "demo" },
    { label: "Features", sectionId: "features" },
    { label: "Process", sectionId: "process" },
    { label: "FAQ", sectionId: "faq" },
  ];

  return (
    <div className="overflow-hidden">
      <div id="overview">
        <ImageReorgHero />
      </div>

      <SubHeader title="Image Recognition Tool" items={subHeaderItems} />
{/* 
      <div id="demo">
        <ImageReorgDemo />
      </div> */}

      <div id="features">
        <ImageReorgFeatures />
      </div>

      <div id="process">
        <ImageReorgProcess />
      </div>

      <ImageReorgBenefits />
      <ImageReorgUseCases />

      <WhyCorewaySection
        badge="Trusted Partner"
        title="Why Choose Coreway for Image Management Solutions"
        subtitle="Industry-leading expertise in building intelligent automation tools that scale"
        reasons={[
          {
            icon: "zap",
            title: "Advanced AI Integration",
            description: "Leverage cutting-edge computer vision and ML algorithms for intelligent image categorization and organization."
          },
          {
            icon: "trophy",
            title: "Proven Track Record",
            description: "Successfully delivered 100+ automation tools for Fortune 500 companies and growing startups."
          },
          {
            icon: "trending",
            title: "Scalable Architecture",
            description: "Built to handle millions of images with enterprise-grade performance and reliability."
          },
          {
            icon: "star",
            title: "Custom Solutions",
            description: "Tailored to your specific workflow, branding guidelines, and organizational needs."
          }
        ]}
      />

      <div id="faq">
        <FAQ
          badge="Help Center"
          title="Common Questions & Answers"
          description="Everything you need to know about our Image RecognitionTool"
          faqs={[
            {
              question: "What image formats are supported?",
              answer: "Our tool supports all major image formats including JPG, PNG, GIF, WebP, TIFF, BMP, SVG, and RAW formats from professional cameras."
            },
            {
              question: "How does the AI categorization work?",
              answer: "Our advanced computer vision algorithms analyze image content, metadata, and visual features to automatically categorize images based on objects, scenes, colors, and context."
            },
            {
              question: "Can I customize the organization rules?",
              answer: "Yes! You have complete control over folder structures, naming conventions, and categorization rules. Create custom taxonomies that match your workflow."
            },
            {
              question: "Is my data secure?",
              answer: "Absolutely. We use enterprise-grade encryption for data at rest and in transit. Your images never leave your infrastructure unless explicitly configured."
            },
            {
              question: "How long does processing take?",
              answer: "Processing speed depends on volume, but typically: 1,000 images in ~2 minutes, 10,000 images in ~15 minutes, and 100,000+ images in under 2 hours."
            },
            {
              question: "Can it handle duplicate detection?",
              answer: "Yes! Our tool uses perceptual hashing to detect exact and near-duplicate images, even if they've been resized or slightly modified."
            }
          ]}
          columns={1}
          showContactCTA={true}
          contactText="Need custom features?"
          contactButtonText="Contact Our Team"
        />
      </div>

      <PageCTA
        badge="Get Started Today"
        title="Ready to Transform Your Image Management?"
        description="Join hundreds of companies using our AI-powered image organization tool to save time and streamline their workflows. Get started with a free consultation."
        primaryButtonText="Contact us"
        secondaryButtonText="View Work"
          
        footerText="Free trial available • No credit card required • Setup in minutes"
      />
    </div>
  );
}
