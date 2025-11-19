"use client";

import Head from "next/head";
import iotApplicationsData from "../../../data/iotApplicationsData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import IoTHero from "@/components/iot/IoTHero";
import IoTOverview from "@/components/iot/IoTOverview";
import IoTFeatures from "@/components/iot/IoTFeatures";
import IoTTechnologies from "@/components/iot/IoTTechnologies";
import IoTCaseStudies from "@/components/iot/IoTCaseStudies";
import IoTProcess from "@/components/iot/IoTProcess";
import IoTAutomation from "@/components/iot/IoTAutomation";
import PageCTA from "@/components/PageCTA";

export default function IoTApplicationDevelopment() {
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
        name: "IoT Application Development",
        item: `${siteUrl}/solution/iot-application-development`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "IoT Application Development",
    description:
      "End-to-end IoT solutions connecting devices to cloud platforms with real-time monitoring, analytics, and automation",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "IoT Development",
    areaServed: "Worldwide",
  };

  return (
    <>
      <Head>
        <title>IoT Application Development | Coreway Solution</title>
        <meta
          name="description"
          content="Build connected IoT applications with end-to-end solutions from devices to cloud platforms. Real-time monitoring, analytics, and intelligent automation."
        />
        <meta property="og:title" content="IoT Application Development | Coreway" />
        <meta
          property="og:description"
          content="End-to-end IoT solutions connecting devices to cloud platforms with real-time monitoring and automation."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${siteUrl}/solution/iot-application-development`}
        />
        <link
          rel="canonical"
          href={`${siteUrl}/solution/iot-application-development`}
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
                { label: "IoT Application Development" },
              ]}
            />
          </div>
        </header>

        <main>
          <IoTHero
            title={iotApplicationsData.hero.title}
            title2={iotApplicationsData.hero.title2}
            subtitle={iotApplicationsData.hero.subtitle}
            buttons={iotApplicationsData.hero.buttons}
          />

          <IoTOverview
            title={iotApplicationsData.overview.title}
            content={iotApplicationsData.overview.content}
            image={iotApplicationsData.overview.image}
          />

          <IoTFeatures
            title={iotApplicationsData.features.title}
            items={iotApplicationsData.features.items}
          />

          <IoTTechnologies
            title={iotApplicationsData.platforms.title}
            description={iotApplicationsData.platforms.description}
            items={iotApplicationsData.platforms.items}
          />

          <IoTCaseStudies
            title={iotApplicationsData.caseStudies.title}
            cases={iotApplicationsData.caseStudies.cases}
          />

          <IoTProcess
            title={iotApplicationsData.process.title}
            description={iotApplicationsData.process.description}
            steps={iotApplicationsData.process.steps}
          />

          <IoTAutomation
            title={iotApplicationsData.automation.title}
            description={iotApplicationsData.automation.description}
            features={iotApplicationsData.automation.features}
          />

          <PageCTA
            badge="Ready to connect?"
            title="Ready to Build Your IoT Solution?"
            description="Let's create intelligent IoT systems that transform your operations and unlock real-time insights. Our team is ready to help you connect devices to powerful cloud platforms."
            primaryButtonText="Book Consultation"
            secondaryButtonText="View IoT Projects"
            footerText="Free consultation • Custom IoT solutions • Proven expertise"
          />
        </main>
      </div>
    </>
  );
}
