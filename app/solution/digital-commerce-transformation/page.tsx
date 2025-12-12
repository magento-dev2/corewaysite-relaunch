"use client";

import commerceData from "../../../data/commerceData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import CommerceHero from "@/components/commerce/CommerceHero";
import CommerceOverview from "@/components/commerce/CommerceOverview";
import CommerceFeatures from "@/components/commerce/CommerceFeatures";
import PlatformExpertise from "@/components/commerce/PlatformExpertise";
import CaseStudies from "@/components/commerce/CaseStudies";
import ProcessDiagram from "@/components/commerce/ProcessDiagram";
import AutomationSection from "@/components/commerce/AutomationSection";
import PageCTA from "@/components/PageCTA";
import WhyCorewaySection from "@/components/WhyCorewaySection";
import FAQ from "@/components/FAQ";
import sampleFAQs from '@/data/faqs.json';
import whyCorewayData from '@/data/why-coreway.json';


import SubHeader from "@/components/SubHeader";
import TestimonialHero from "@/components/TestimonialHero";

export default function DigitalCommerce() {
  const siteUrl = "https://www.corewaysolution.com"; // absolute URL

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Solutions", item: `${siteUrl}/solutions` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Digital Commerce Transformation",
        item: `${siteUrl}/solution/digital-commerce-transformation`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Digital Commerce Transformation",
    description:
      "Headless, AI-driven, and composable commerce solutions for modern businesses",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "E-commerce Development",
    areaServed: "Worldwide",
  };

  const subHeaderItems = [
    { label: "Overview", sectionId: "overview" },
    { label: "Capabilities", sectionId: "features" },
    { label: "Our Process", sectionId: "process" },
    { label: "FAQ", sectionId: "faq" },
  ];

  return (
    <>

      <div className="min-h-screen bg-[#0E0918]">
        <header className="page-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Solutions", href: "/solutions" },
                { label: "Digital Commerce Transformation" },
              ]}
            />
          </div>
        </header>

        <main>
          <CommerceHero
            title={commerceData.hero.title}
            title2={commerceData.hero.title2}
            subtitle={commerceData.hero.subtitle}
            buttons={commerceData.hero.buttons}
          />

          <SubHeader title="Digital Commerce Transformation" items={subHeaderItems} />

          <div id="overview">
            <CommerceOverview
              title={commerceData.overview.title}
              content={commerceData.overview.content}
              image={commerceData.overview.image}
            />
          </div>

          <div id="features">
            <CommerceFeatures
              title={commerceData.features.title}
              items={commerceData.features.items}
            />
          </div>

          <div id="expertise">
            <PlatformExpertise
              title={commerceData.platforms.title}
              description={commerceData.platforms.description}
              items={commerceData.platforms.items}
            />
          </div>
          {/* 
          <CaseStudies
            title={commerceData.caseStudies.title}
            cases={commerceData.caseStudies.cases}
          /> */}

          <div id="process">
            <ProcessDiagram
              title={commerceData.process.title}
              description={commerceData.process.description}
              steps={commerceData.process.steps}
            />
          </div>

          <div id="automation">
            <AutomationSection
              title={commerceData.automation.title}
              description={commerceData.automation.description}
              features={commerceData.automation.features}
            />
          </div>

          <div id="why-coreway">
            <WhyCorewaySection
              badge={whyCorewayData["digital-commerce-transformation"].badge}
              title={whyCorewayData["digital-commerce-transformation"].title}
              subtitle={whyCorewayData["digital-commerce-transformation"].subtitle}
              reasons={whyCorewayData["digital-commerce-transformation"].reasons}
            />
          </div>


          <TestimonialHero
            testimonial="At Rightsify we've been working with Coreway Solution for a couple years now and have been really happy with the results they have delivered. Their work is done on time and as specified and the support has always been great..."
            authorName="Alex-Bestall,"
            authorLocation="Los Angeles, USA"
            authorImage="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
            heroImage="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1600"
            title={`${commerceData.hero.title} ${commerceData.hero.title2}`}
            description={commerceData.hero.subtitle}
          />


          <div id="faq">
            <FAQ
              badge="Help Center"
              title="Common Questions & Answers"
              description="Everything you need to know about our services and how we work"
              faqs={sampleFAQs["digital"]}
              columns={1}
              showContactCTA={true}
              contactText="Still have questions?"
              contactButtonText="Contact Our Team"
            />
          </div>

          <PageCTA
            badge="Ready to transform?"
            title="Ready to Upgrade Your Commerce?"
            description="Let's build a commerce experience that drives growth and delights your customers. Our team is ready to help you navigate the future of digital commerce."
            primaryButtonText="Book Consultation"
            secondaryButtonText="View Case Studies"
            footerText="Free consultation • Custom solutions • Proven results"
          />
        </main>
      </div>
    </>
  );
}
