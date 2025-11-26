"use client";

import Head from "next/head";
import saasDevOpsData from "../../../data/saasDevOpsData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import SaaSHero from "@/components/saas/SaaSHero";
import SaaSOverview from "@/components/saas/SaaSOverview";
import SaaSFeatures from "@/components/saas/SaaSFeatures";
import SaaSTechnologies from "@/components/saas/SaaSTechnologies";
import SaaSCaseStudies from "@/components/saas/SaaSCaseStudies";
import SaaSProcess from "@/components/saas/SaaSProcess";
import SaaSAutomation from "@/components/saas/SaaSAutomation";
import PageCTA from "@/components/PageCTA";
import WhyCorewaySection from "@/components/WhyCorewaySection";
import FAQ from "@/components/FAQ";
import sampleFAQs from '@/data/faqs.json';


export default function SaaSInfrastructureDevOps() {
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
        name: "SaaS Infrastructure & DevOps",
        item: `${siteUrl}/solution/saas-infrastructure-devops`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SaaS Infrastructure & DevOps",
    description:
      "Enterprise-grade cloud infrastructure and DevOps automation for rapid deployment and continuous delivery",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "Cloud Infrastructure & DevOps",
    areaServed: "Worldwide",
  };

  return (
    <>
      <Head>
        <title>SaaS Infrastructure & DevOps | Coreway Solution</title>
        <meta
          name="description"
          content="Build scalable SaaS infrastructure with modern DevOps practices. Automated CI/CD pipelines, container orchestration, and cloud-native solutions."
        />
        <meta property="og:title" content="SaaS Infrastructure & DevOps | Coreway" />
        <meta
          property="og:description"
          content="Enterprise-grade cloud infrastructure and DevOps automation for rapid deployment and continuous delivery."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${siteUrl}/solution/saas-infrastructure-devops`}
        />
        <link
          rel="canonical"
          href={`${siteUrl}/solution/saas-infrastructure-devops`}
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
                { label: "SaaS Infrastructure & DevOps" },
              ]}
            />
          </div>
        </header>

        <main>
          <SaaSHero
            title={saasDevOpsData.hero.title}
            title2={saasDevOpsData.hero.title2}
            subtitle={saasDevOpsData.hero.subtitle}
            buttons={saasDevOpsData.hero.buttons}
          />

          <SaaSOverview
            title={saasDevOpsData.overview.title}
            content={saasDevOpsData.overview.content}
            image={saasDevOpsData.overview.image}
          />

          <SaaSFeatures
            title={saasDevOpsData.features.title}
            items={saasDevOpsData.features.items}
          />

          <SaaSTechnologies
            title={saasDevOpsData.platforms.title}
            description={saasDevOpsData.platforms.description}
            items={saasDevOpsData.platforms.items}
          />

          <SaaSCaseStudies
            title={saasDevOpsData.caseStudies.title}
            cases={saasDevOpsData.caseStudies.cases}
          />

          <SaaSProcess
            title={saasDevOpsData.process.title}
            description={saasDevOpsData.process.description}
            steps={saasDevOpsData.process.steps}
          />

          <SaaSAutomation
            title={saasDevOpsData.automation.title}
            description={saasDevOpsData.automation.description}
            features={saasDevOpsData.automation.features}
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
            faqs={sampleFAQs["saas-infrastructure-devops"]}
            columns={1}
            showContactCTA={true}
            contactText="Still have questions?"
            contactButtonText="Contact Our Team"
          />

          <PageCTA
            badge="Ready to scale?"
            title="Ready to Transform Your Infrastructure?"
            description="Let's build scalable, secure cloud infrastructure with modern DevOps practices. Our team is ready to help you achieve continuous delivery and automation at scale."
            primaryButtonText="Get Started"
            secondaryButtonText="View Our Work"
            footerText="Free consultation • Custom solutions • Enterprise support"
          />
        </main>
      </div>
    </>
  );
}
