
import Breadcrumb from "@/components/about/Breadcrumb";
import StartupHero from "@/components/startup/StartupHero";
import StartupOverview from "@/components/startup/StartupOverview";
import FeatureGrid from "@/components/startup/FeatureGrid";
import TechStack from "@/components/startup/TechStack";
import CaseStudiesPreview from "@/components/startup/CaseStudiesPreview";
import ProcessDiagram from "@/components/startup/ProcessDiagram";
import AcceleratorSection from "@/components/startup/AcceleratorSection";
import PageCTA from "@/components/PageCTA";

// Import JSON directly (server-side)
import heroData from "@/public/content/product-development/hero.json";
import overviewData from "@/public/content/product-development/overview.json";
import featuresData from "@/public/content/product-development/features.json";
import techData from "@/public/content/product-development/tech.json";
import casesData from "@/public/content/product-development/cases.json";
import processData from "@/public/content/product-development/process.json";
import acceleratorData from "@/public/content/product-development/accelerator.json";
import ctaData from "@/public/content/product-development/cta.json";
import WhyCorewaySection from "@/components/WhyCorewaySection";
import FAQ from "@/components/FAQ";
import sampleFAQs from '@/data/faqs.json';


const siteUrl = "https://www.corewaysolution.com";

export const metadata = {
  title: "Product Development for Startups | Coreway",
  description:
    "Turn product ideas into investor-ready MVPs. Agile teams, rapid prototyping, and scalable engineering for early-stage startups.",
  keywords:
    "MVP development, startup product development, agile development, prototype to production, tech consulting",
  openGraph: {
    title: "Product Development for Startups | Coreway",
    description:
      "Turn product ideas into investor-ready MVPs. Agile teams, rapid prototyping, and scalable engineering for early-stage startups.",
    type: "website",
    url: `${siteUrl}/solution/product-development-forstartups`,
  },
  canonical: `${siteUrl}/solution/product-development-forstartups`,
  scripts: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Solutions", item: `${siteUrl}/solutions` },
          {
            "@type": "ListItem",
            position: 3,
            name: "Product Development for Startups",
            item: `${siteUrl}/solution/product-development-forstartups`,
          },
        ],
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Product Development for Startups",
        description:
          "Turn product ideas into investor-ready MVPs. Agile teams, rapid prototyping, and scalable engineering for early-stage startups.",
        provider: { "@type": "Organization", name: "Coreway Solution" },
        serviceType: "Software Development",
        areaServed: "Worldwide",
      }),
    },
  ],
};

export default function ProductDevelopmentPage() {
  return (
    <div className="min-h-screen bg-[#0E0918]">
      <header className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Solutions", href: "/solutions" },
              { label: "Product Development for Startups" },
            ]}
          />
        </div>
      </header>

      <main>
        <StartupHero data={heroData} />
        <StartupOverview data={overviewData} />
        <FeatureGrid data={featuresData} />
        <TechStack data={techData} />
        <CaseStudiesPreview data={casesData} />
        <ProcessDiagram data={processData} />
        <AcceleratorSection data={acceleratorData} />
        <WhyCorewaySection
          badge="Why Choose Us"
          title="Why Choose Coreway Solutions"
          subtitle="We're not just another software company. We're your technology partner committed to delivering exceptional results through innovation and expertise."

        />
        <FAQ
          badge="Help Center"
          title="Common Questions & Answers"
          description="Everything you need to know about our services and how we work"
          faqs={sampleFAQs["product-development-for-startups"]}
          columns={1}
          showContactCTA={true}
          contactText="Still have questions?"
          contactButtonText="Contact Our Team"
        />
        <PageCTA
          badge="Ready to build?"
          title={ctaData.text}
          description="Let's transform your startup vision into a market-ready product. Our team is ready to help you build, launch, and scale."
          primaryButtonText={ctaData.button.label}
          secondaryButtonText="View Our Work"
          footerText="Free consultation • Rapid prototyping • Proven track record"
        />
      </main>
    </div>
  );
}







