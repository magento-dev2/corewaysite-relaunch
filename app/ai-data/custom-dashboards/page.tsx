"use client";

import Head from "next/head";
import customDashboardData from "../../../data/customDashboardData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import DashboardHero from "@/components/dashboard/DashboardHero";
import DashboardOverview from "@/components/dashboard/DashboardOverview";
import DashboardFeatures from "@/components/dashboard/DashboardFeatures";
import DashboardTechnologies from "@/components/dashboard/DashboardTechnologies";
import DashboardCaseStudies from "@/components/dashboard/DashboardCaseStudies";
import DashboardProcess from "@/components/dashboard/DashboardProcess";
import DashboardAutomation from "@/components/dashboard/DashboardAutomation";
import PageCTA from "@/components/PageCTA";

export default function CustomDashboards() {
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
        name: "Custom Data Dashboards & Access Portals",
        item: `${siteUrl}/ai-data/custom-dashboards`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Data Dashboards & Access Portals",
    description:
      "Build interactive, real-time data dashboards and secure access portals that transform complex datasets into actionable insights.",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "Dashboard Development",
    areaServed: "Worldwide",
  };

  return (
    <>
      <Head>
        <title>Custom Data Dashboards & Access Portals | Coreway Solution</title>
        <meta
          name="description"
          content="Build interactive, real-time data dashboards and secure access portals that transform complex datasets into actionable insights."
        />
        <meta property="og:title" content="Custom Data Dashboards | Coreway" />
        <meta
          property="og:description"
          content="Interactive dashboards with real-time updates, advanced visualizations, and role-based access control."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${siteUrl}/ai-data/custom-dashboards`}
        />
        <link
          rel="canonical"
          href={`${siteUrl}/ai-data/custom-dashboards`}
        />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Head>

      <div className="min-h-screen bg-[#0E0918]">
        <header className="pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "AI & Data", href: "/ai-data" },
                { label: "Custom Data Dashboards & Access Portals" },
              ]}
            />
          </div>
        </header>

        <main>
          <DashboardHero
            title={customDashboardData.hero.title}
            title2={customDashboardData.hero.title2}
            subtitle={customDashboardData.hero.subtitle}
            buttons={customDashboardData.hero.buttons}
          />

          <DashboardOverview
            title={customDashboardData.overview.title}
            content={customDashboardData.overview.content}
            image={customDashboardData.overview.image}
          />

          <DashboardFeatures
            title={customDashboardData.features.title}
            items={customDashboardData.features.items}
          />

          <DashboardTechnologies
            title={customDashboardData.platforms.title}
            description={customDashboardData.platforms.description}
            items={customDashboardData.platforms.items}
          />

          <DashboardCaseStudies
            title={customDashboardData.caseStudies.title}
            cases={customDashboardData.caseStudies.cases}
          />

          <DashboardProcess
            title={customDashboardData.process.title}
            description={customDashboardData.process.description}
            steps={customDashboardData.process.steps}
          />

          <DashboardAutomation
            title={customDashboardData.automation.title}
            description={customDashboardData.automation.description}
            features={customDashboardData.automation.features}
          />

          <PageCTA
            badge="Visualize Your Data"
            title="Ready to Build Your Custom Dashboard?"
            description="Let's transform your data into interactive, actionable insights. Our expert team delivers dashboards that handle millions of data points with sub-second response times."
            primaryButtonText="Get Started"
            secondaryButtonText="View Demo"
            footerText="Free consultation • Real-time updates • Role-based access"
          />
        </main>
      </div>
    </>
  );
}
