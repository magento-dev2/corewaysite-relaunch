"use client";

import Head from "next/head";
import aiPlatformsData from "../../../data/aiPlatformsData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import AIPlatformsHero from "@/components/aiplatforms/AIPlatformsHero";
import AIPlatformsOverview from "@/components/aiplatforms/AIPlatformsOverview";
import AIPlatformsFeatures from "@/components/aiplatforms/AIPlatformsFeatures";
import AIPlatformTechnologies from "@/components/aiplatforms/AIPlatformTechnologies";
import AIPlatformCaseStudies from "@/components/aiplatforms/AIPlatformCaseStudies";
import AIPlatformProcess from "@/components/aiplatforms/AIPlatformProcess";
import AIPlatformAutomation from "@/components/aiplatforms/AIPlatformAutomation";
import PageCTA from "@/components/PageCTA";
import WhyCorewaySection from "@/components/WhyCorewaySection";
import FAQ from "@/components/FAQ";
import sampleFAQs from '@/data/faq.json';


export default function AIPoweredApplicationPlatforms() {
  const siteUrl = "https://www.corewaysolution.com";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Solutions", item: `${siteUrl}/solutions` },
      {
        "@type": "ListItem",
        position: 3,
        name: "AI-Powered Application Platforms",
        item: `${siteUrl}/solution/ai-powered-application-platforms`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI-Powered Application Platforms",
    description:
      "Build intelligent, scalable applications with AI-driven platforms leveraging machine learning, NLP, and cloud technologies",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "AI Platform Development",
    areaServed: "Worldwide",
  };

  return (
    <>
      <Head>
        <title>AI-Powered Application Platforms | Coreway Solution</title>
        <meta
          name="description"
          content="Transform your business with AI-powered application platforms. Build intelligent, scalable solutions using machine learning, NLP, and cloud-native technologies."
        />
        <meta property="og:title" content="AI-Powered Application Platforms | Coreway" />
        <meta
          property="og:description"
          content="Build intelligent, scalable applications with AI-driven platforms leveraging machine learning and cloud technologies."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${siteUrl}/solution/ai-powered-application-platforms`}
        />
        <link
          rel="canonical"
          href={`${siteUrl}/solution/ai-powered-application-platforms`}
        />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Head>

      <div className="min-h-screen bg-[#0E0918]">
        <header className="pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Solutions", href: "/solutions" },
                { label: "AI-Powered Application Platforms" },
              ]}
            />
          </div>
        </header>

        <main>
          <AIPlatformsHero
            title={aiPlatformsData.hero.title}
            title2={aiPlatformsData.hero.title2}
            subtitle={aiPlatformsData.hero.subtitle}
            buttons={aiPlatformsData.hero.buttons}
          />

          <AIPlatformsOverview
            title={aiPlatformsData.overview.title}
            content={aiPlatformsData.overview.content}
            image={aiPlatformsData.overview.image}
          />

          <AIPlatformsFeatures
            title={aiPlatformsData.features.title}
            items={aiPlatformsData.features.items}
          />

          <AIPlatformTechnologies
            title={aiPlatformsData.platforms.title}
            description={aiPlatformsData.platforms.description}
            items={aiPlatformsData.platforms.items}
          />

          <AIPlatformCaseStudies
            title={aiPlatformsData.caseStudies.title}
            cases={aiPlatformsData.caseStudies.cases}
          />

          <AIPlatformProcess
            title={aiPlatformsData.process.title}
            description={aiPlatformsData.process.description}
            steps={aiPlatformsData.process.steps}
          />

          <AIPlatformAutomation
            title={aiPlatformsData.automation.title}
            description={aiPlatformsData.automation.description}
            features={aiPlatformsData.automation.features}
          />
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
            badge="Ready to innovate?"
            title="Ready to Build AI-Powered Applications?"
            description="Let's create intelligent solutions that transform your business operations and unlock new possibilities. Our team is ready to help you harness the power of AI."
            primaryButtonText="Book Consultation"
            secondaryButtonText="View AI Projects"
            footerText="Free consultation • Custom AI solutions • Proven expertise"
          />
        </main>
      </div>
    </>
  );
}
