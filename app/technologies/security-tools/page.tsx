"use client";

import Head from "next/head";
import securityData from "../../../data/securityToolsData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import TechHero from "@/components/technologies/TechHero";
import TechOverview from "@/components/technologies/TechOverview";
import TechFeatures from "@/components/technologies/TechFeatures";
import TechStack from "@/components/technologies/TechStack";
import SecurityToolsComparison from "@/components/security/SecurityToolsComparison";
import TechUseCases from "@/components/technologies/TechUseCases";
import AutomationSection from "@/components/commerce/AutomationSection";
import PageCTA from "@/components/PageCTA";

export default function SecurityToolsPage() {
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
        name: "Security Tools",
        item: `${siteUrl}/technologies/security-tools`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Security Tools - Fail2Ban, UFW, CrowdSec",
    description:
      "Expert server security implementation with Fail2Ban, UFW, and CrowdSec for intrusion prevention and threat protection.",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "Security Implementation",
    areaServed: "Worldwide",
  };

  return (
    <>
      <Head>
        <title>
          Security Tools - Fail2Ban, UFW, CrowdSec | Coreway Solution
        </title>
        <meta
          name="description"
          content="Expert server security with Fail2Ban, UFW, and CrowdSec. Protect your infrastructure from attacks with multi-layer defense strategies."
        />
        <meta
          property="og:title"
          content="Security Tools - Fail2Ban, UFW, CrowdSec | Coreway"
        />
        <meta
          property="og:description"
          content="Professional server security implementation with Fail2Ban, UFW, and CrowdSec. Block 99.9% of attacks automatically."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${siteUrl}/technologies/security-tools`}
        />
        <link rel="canonical" href={`${siteUrl}/technologies/security-tools`} />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Head>

      <div className="min-h-screen bg-[#0E0918]">
        <header className="pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Technologies", href: "/technologies" },
                { label: "Security Tools" },
              ]}
            />
          </div>
        </header>

        <main>
          <TechHero
            title={securityData.hero.title}
            title2={securityData.hero.title2}
            subtitle={securityData.hero.subtitle}
            buttons={securityData.hero.buttons}
            img={securityData.hero.img}
          />

          <TechOverview
            title={securityData.overview.title}
            content={securityData.overview.content}
            image={securityData.overview.image}
            stats={securityData.overview.stats}
          />

          <TechFeatures
            title={securityData.features.title}
            items={securityData.features.items}
          />

          <SecurityToolsComparison
            title={securityData.toolComparison.title}
            subtitle={securityData.toolComparison.subtitle}
            tools={securityData.toolComparison.tools}
          />

          <TechStack
            title={securityData.technologies.title}
            description={securityData.technologies.description}
            items={securityData.technologies.items}
          />

          <TechUseCases
            title={securityData.useCases.title}
            cases={securityData.useCases.cases}
          />

          <AutomationSection
            title={securityData.benefits.title}
            description={securityData.benefits.description}
            features={securityData.benefits.features}
          />

          <PageCTA
            badge="Secure Now"
            title="Ready to Secure Your Servers?"
            description="Let's implement comprehensive security with Fail2Ban, UFW, and CrowdSec. Our experts deliver multi-layer protection that blocks 99.9% of attacks automatically."
            primaryButtonText="Secure Your Servers"
            secondaryButtonText="View Solutions"
            footerText="Free consultation • Security experts • 24/7 protection"
          />
        </main>
      </div>
    </>
  );
}
