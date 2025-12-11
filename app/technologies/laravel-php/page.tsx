import laravelData from "../../../data/phpLaravelData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import TechHero from "@/components/technologies/TechHero";
import TechOverview from "@/components/technologies/TechOverview";
import TechFeatures from "@/components/technologies/TechFeatures";
import TechStack from "@/components/technologies/TechStack";
import TechUseCases from "@/components/technologies/TechUseCases";
import ProcessDiagram from "@/components/commerce/ProcessDiagram";
import AutomationSection from "@/components/commerce/AutomationSection";
import PageCTA from "@/components/PageCTA";
import FAQ from '@/components/FAQ';
import WhyCorewaySection from '@/components/WhyCorewaySection';
import sampleFAQs from '@/data/faqs.json';
import whyCorewayData from '@/data/why-coreway.json';
import SubHeader from "@/components/SubHeader";

export default function LaravelPHPTechnologyPage() {
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
        name: "Laravel / PHP Development",
        item: `${siteUrl}/technologies/laravel-php`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Laravel / PHP Development Services",
    description:
      "Expert Laravel and PHP development for web applications, APIs, e-commerce, and SaaS platforms. Modern PHP solutions.",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "Laravel / PHP Development",
    areaServed: "Worldwide",
  };

  return (
    <div className="min-h-screen bg-[#0E0918]">
        <header className="page-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Technologies", href: "/technologies" },
                { label: "Laravel / PHP Development" },
              ]}
            />
          </div>
        </header>

        <main>
          <TechHero
            title={laravelData.hero.title}
            title2={laravelData.hero.title2}
            subtitle={laravelData.hero.subtitle}
            buttons={laravelData.hero.buttons}
 img="/assets/images/php.png"
           />

          <SubHeader title="Laravel / PHP" items={subHeaderItems} />

          <div id="overview">
            <TechOverview
              title={laravelData.overview.title}
              content={laravelData.overview.content}
              image={laravelData.overview.image}
              stats={laravelData.overview.stats}
            />
          </div>

          <div id="features">
            <TechFeatures
              title={laravelData.features.title}
              items={laravelData.features.items}
            />
          </div>

          <TechStack
            title={laravelData.technologies.title}
            description={laravelData.technologies.description}
            items={laravelData.technologies.items}
          />

          <TechUseCases
            title={laravelData.useCases.title}
            cases={laravelData.useCases.cases}
          />

          <div id="process">
            <ProcessDiagram
              title={laravelData.process.title}
              description={laravelData.process.description}
              steps={laravelData.process.steps}
            />
          </div>

          <AutomationSection
            title={laravelData.benefits.title}
            description={laravelData.benefits.description}
            features={laravelData.benefits.features}
          />

          <WhyCorewaySection
            badge={whyCorewayData["laravel-php"].badge}
            title={whyCorewayData["laravel-php"].title}
            subtitle={whyCorewayData["laravel-php"].subtitle}
            reasons={whyCorewayData["laravel-php"].reasons}
          />
          <div id="faq">
            <FAQ
              badge="Help Center"
              title="Common Questions & Answers"
              description="Everything you need to know about our services and how we work"
              faqs={sampleFAQs["laravel-php"]}
              columns={1}
              showContactCTA={true}
              contactText="Still have questions?"
              contactButtonText="Contact Our Team"
            />
          </div>


          <PageCTA
            badge="Start Building"
            title="Ready to Build with Laravel?"
            description="Let's create elegant, powerful web applications with Laravel and PHP. Our expert team delivers enterprise-grade solutions with modern architecture and best practices."
            primaryButtonText="Start Your Project"
            secondaryButtonText="View Portfolio"
            footerText="Free consultation • Expert developers • Proven results"
          />
        </main>
      </div>
  );
}
