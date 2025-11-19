"use client";

import Head from "next/head";
import infrastructureSecurityData from "../../../data/infrastructureSecurityData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import InfraSecurityHero from "@/components/infrasecurity/InfraSecurityHero";
import InfraSecurityOverview from "@/components/infrasecurity/InfraSecurityOverview";
import InfraSecurityFeatures from "@/components/infrasecurity/InfraSecurityFeatures";
import AISecurityTechnologies from "@/components/aisecurity/AISecurityTechnologies";
import AISecurityCaseStudies from "@/components/aisecurity/AISecurityCaseStudies";
import AISecurityProcess from "@/components/aisecurity/AISecurityProcess";
import AISecurityAutomation from "@/components/aisecurity/AISecurityAutomation";
import PageCTA from "@/components/PageCTA";

export default function InfrastructureSecurityAI() {
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
        name: "Infrastructure Security Using AI",
        item: `${siteUrl}/solution/infrastructure-security-ai`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI-Powered Infrastructure Security Solutions",
    description:
      "Intelligent threat detection, automated response, and predictive security analytics powered by artificial intelligence for enterprise infrastructure protection.",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "AI Infrastructure Security",
    areaServed: "Worldwide",
  };

  return (
    <>
      <Head>
        <title>Secure Infrastructure Automation with AI | Coreway Solution</title>
        <meta
          name="description"
          content="Build self-healing, AI-powered infrastructure with automated security controls, threat detection, and compliance monitoring."
        />
        <meta property="og:title" content="AI Infrastructure Security Solutions | Coreway" />
        <meta
          property="og:description"
          content="Intelligent threat detection, automated response, and predictive security analytics powered by artificial intelligence."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${siteUrl}/solution/infrastructure-security-ai`}
        />
        <link
          rel="canonical"
          href={`${siteUrl}/solution/infrastructure-security-ai`}
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
                { label: "Infrastructure Security Using AI" },
              ]}
            />
          </div>
        </header>

        <main>
          <InfraSecurityHero
            title={infrastructureSecurityData.hero.title}
            title2={infrastructureSecurityData.hero.title2}
            subtitle={infrastructureSecurityData.hero.subtitle}
            buttons={infrastructureSecurityData.hero.buttons}
          />

          <InfraSecurityOverview
            title={infrastructureSecurityData.overview.title}
            content={infrastructureSecurityData.overview.content}
            image={infrastructureSecurityData.overview.image}
          />

          <InfraSecurityFeatures
            title={infrastructureSecurityData.features.title}
            items={infrastructureSecurityData.features.items}
          />

          <AISecurityTechnologies
            title={infrastructureSecurityData.platforms.title}
            description={infrastructureSecurityData.platforms.description}
            items={infrastructureSecurityData.platforms.items}
          />

          <AISecurityCaseStudies
            title={infrastructureSecurityData.caseStudies.title}
            cases={infrastructureSecurityData.caseStudies.cases}
          />

          <AISecurityProcess
            title={infrastructureSecurityData.process.title}
            description={infrastructureSecurityData.process.description}
            steps={infrastructureSecurityData.process.steps}
          />

          <AISecurityAutomation
            title={infrastructureSecurityData.automation.title}
            description={infrastructureSecurityData.automation.description}
            features={infrastructureSecurityData.automation.features}
          />

          <PageCTA
            badge="Secure your infrastructure"
            title="Ready to Deploy AI Security?"
            description="Let's protect your infrastructure with intelligent, AI-powered security solutions. Our expert team delivers 24/7 threat detection, automated response, and continuous protection."
            primaryButtonText="Start Protection"
            secondaryButtonText="Get Assessment"
            footerText="Free security assessment • 24/7 AI monitoring • 99.9% threat detection"
          />
        </main>
      </div>
    </>
  );
}
