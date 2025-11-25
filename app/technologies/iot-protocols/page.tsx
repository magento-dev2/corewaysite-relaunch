"use client";

import Head from "next/head";
import iotData from "../../../data/iotProtocolsData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import TechHero from "@/components/technologies/TechHero";
import TechOverview from "@/components/technologies/TechOverview";
import TechFeatures from "@/components/technologies/TechFeatures";
import TechStack from "@/components/technologies/TechStack";
import ProtocolComparison from "@/components/iot/ProtocolComparison";
import TechUseCases from "@/components/technologies/TechUseCases";
import AutomationSection from "@/components/commerce/AutomationSection";
import PageCTA from "@/components/PageCTA";
import FAQ from '@/components/FAQ';
import WhyCorewaySection from '@/components/WhyCorewaySection';
import sampleFAQs from '@/data/faq.json';

export default function IoTProtocolsPage() {
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
        name: "IoT Protocols",
        item: `${siteUrl}/technologies/iot-protocols`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "IoT Protocols - MQTT & WebSockets",
    description:
      "Expert implementation of MQTT, WebSockets, and IoT protocols for real-time communication and device connectivity.",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "IoT Protocol Implementation",
    areaServed: "Worldwide",
  };

  return (
    <>
      <Head>
        <title>
          IoT Protocols - MQTT & WebSockets | Coreway Solution
        </title>
        <meta
          name="description"
          content="Expert MQTT, WebSockets, and IoT protocol implementation for real-time communication, device connectivity, and live applications."
        />
        <meta
          property="og:title"
          content="IoT Protocols - MQTT & WebSockets | Coreway"
        />
        <meta
          property="og:description"
          content="Professional real-time communication with MQTT, WebSockets, and IoT protocols. Handle millions of messages per second."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${siteUrl}/technologies/iot-protocols`}
        />
        <link rel="canonical" href={`${siteUrl}/technologies/iot-protocols`} />
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
                { label: "IoT Protocols" },
              ]}
            />
          </div>
        </header>

        <main>
          <TechHero
            title={iotData.hero.title}
            title2={iotData.hero.title2}
            subtitle={iotData.hero.subtitle}
            buttons={iotData.hero.buttons}
            img={iotData.hero.img}
          />

          <TechOverview
            title={iotData.overview.title}
            content={iotData.overview.content}
            image={iotData.overview.image}
            stats={iotData.overview.stats}
          />

          <TechFeatures
            title={iotData.features.title}
            items={iotData.features.items}
          />

          <ProtocolComparison
            title={iotData.protocolComparison.title}
            subtitle={iotData.protocolComparison.subtitle}
            protocols={iotData.protocolComparison.protocols}
          />

          <TechStack
            title={iotData.technologies.title}
            description={iotData.technologies.description}
            items={iotData.technologies.items}
          />

          <TechUseCases
            title={iotData.useCases.title}
            cases={iotData.useCases.cases}
          />

          <AutomationSection
            title={iotData.benefits.title}
            description={iotData.benefits.description}
            features={iotData.benefits.features}
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
            badge="Get Started"
            title="Ready to Build Real-Time Systems?"
            description="Let's implement MQTT, WebSockets, or IoT protocols that handle millions of messages with low latency. Our experts deliver reliable real-time communication at scale."
            primaryButtonText="Start Your Project"
            secondaryButtonText="View Solutions"
            footerText="Free consultation • Protocol experts • Proven results"
          />
        </main>
      </div>
    </>
  );
}
