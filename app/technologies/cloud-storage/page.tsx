import storageData from "../../../data/cloudStorageData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import TechHero from "@/components/technologies/TechHero";
import TechOverview from "@/components/technologies/TechOverview";
import TechFeatures from "@/components/technologies/TechFeatures";
import TechStack from "@/components/technologies/TechStack";
import StorageComparison from "@/components/storage/StorageComparison";
import TechUseCases from "@/components/technologies/TechUseCases";
import AutomationSection from "@/components/commerce/AutomationSection";
import PageCTA from "@/components/PageCTA";
import FAQ from '@/components/FAQ';
import WhyCorewaySection from '@/components/WhyCorewaySection';
import sampleFAQs from '@/data/faqs.json';
import whyCorewayData from '@/data/why-coreway.json';
import SubHeader from "@/components/SubHeader";

export default function CloudStorageTechnologyPage() {
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
      {
        "@type": "ListItem",
        position: 2,
        name: "Technologies",
        item: `${siteUrl}/technologies`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Cloud Storage Solutions",
        item: `${siteUrl}/technologies/cloud-storage`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Cloud Storage Solutions - AWS S3, Wasabi, MinIO, Cloudflare R2",
    description:
      "Expert cloud storage implementation with AWS S3, Wasabi, MinIO, and Cloudflare R2. Scalable, cost-effective object storage.",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "Cloud Storage Solutions",
    areaServed: "Worldwide",
  };

  return (
    <div className="min-h-screen bg-[#0E0918]">
        <header className="page-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Technologies", href: "/technologies" },
                { label: "Cloud Storage Solutions" },
              ]}
            />
          </div>
        </header>

        <main>
          <TechHero
            title={storageData.hero.title}
            title2={storageData.hero.title2}
            subtitle={storageData.hero.subtitle}
            buttons={storageData.hero.buttons}
            
            img="/assets/images/cloud-storage.png"
          />

          <SubHeader title="Cloud Storage" items={subHeaderItems} />

          <div id="overview">
            <TechOverview
            title={storageData.overview.title}
            content={storageData.overview.content}
            image={storageData.overview.image}
            stats={storageData.overview.stats}
          />
          </div>

          <div id="features">
            <TechFeatures
            title={storageData.features.title}
            items={storageData.features.items}
          />
          </div>

          <StorageComparison
            title={storageData.comparison.title}
            subtitle={storageData.comparison.subtitle}
            providers={storageData.comparison.providers}
          />

          <TechStack
            title={storageData.technologies.title}
            description={storageData.technologies.description}
            items={storageData.technologies.items}
          />

          <TechUseCases
            title={storageData.useCases.title}
            cases={storageData.useCases.cases}
          />

          <AutomationSection
            title={storageData.benefits.title}
            description={storageData.benefits.description}
            features={storageData.benefits.features}
          />
          <WhyCorewaySection
            badge={whyCorewayData["cloud-storage"].badge}
            title={whyCorewayData["cloud-storage"].title}
            subtitle={whyCorewayData["cloud-storage"].subtitle}
            reasons={whyCorewayData["cloud-storage"].reasons}
          />
          <div id="faq">
            <FAQ
            badge="Help Center"
            title="Common Questions & Answers"
            description="Everything you need to know about our services and how we work"
            faqs={sampleFAQs["cloud-storage"]}
            columns={1}
            showContactCTA={true}
            contactText="Still have questions?"
            contactButtonText="Contact Our Team"
          />
          </div>

          <PageCTA
            badge="Start Optimizing"
            title="Ready to Optimize Your Storage?"
            description="Let's implement cloud storage that scales infinitely while reducing costs by up to 80%. Our experts help you choose between S3, Wasabi, MinIO, or R2 for maximum efficiency."
            primaryButtonText="Start Your Project"
            secondaryButtonText="Compare Solutions"
            footerText="Free consultation • Cost analysis • Proven results"
          />
        </main>
      </div>
  );
}
