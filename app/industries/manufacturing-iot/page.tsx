"use client";

import Head from "next/head";
import manufacturingIoTData from "../../../data/manufacturingIoTData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import ManufacturingHero from "@/components/manufacturing/ManufacturingHero";
import ManufacturingOverview from "@/components/manufacturing/ManufacturingOverview";
import ManufacturingFeatures from "@/components/manufacturing/ManufacturingFeatures";
import ManufacturingCases from "@/components/manufacturing/ManufacturingCases";
import AISecurityProcess from "@/components/aisecurity/AISecurityProcess";
import PageCTA from "@/components/PageCTA";
import sampleFAQs from '@/data/faq.json';
import FAQ from '@/components/FAQ';


export default function ManufacturingIoT() {
  const siteUrl = "https://www.corewaysolution.com";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Industries", item: `${siteUrl}/industries` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Manufacturing & Industrial IoT",
        item: `${siteUrl}/industries/manufacturing-iot`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Manufacturing & Industrial IoT",
    description:
      "Transform your factory floor with smart sensors, predictive maintenance, and real-time production monitoring. Industry 4.0 IoT solutions.",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "Industrial IoT Solutions",
    areaServed: "Worldwide",
  };

  return (
    <>
      <Head>
        <title>Manufacturing & Industrial IoT Solutions | Coreway Solution</title>
        <meta
          name="description"
          content="Transform your factory with smart sensors, predictive maintenance, and real-time monitoring. Industry 4.0 IoT solutions that reduce downtime by 40%."
        />
        <meta property="og:title" content="Manufacturing & Industrial IoT | Coreway" />
        <meta
          property="og:description"
          content="Smart factory transformation with IoT sensors, predictive maintenance, and production optimization."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${siteUrl}/industries/manufacturing-iot`}
        />
        <link
          rel="canonical"
          href={`${siteUrl}/industries/manufacturing-iot`}
        />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Head>

      <div className="min-h-screen bg-[#0E0918]">
        <header className="pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Industries", href: "/industries" },
                { label: "Manufacturing & Industrial IoT" },
              ]}
            />
          </div>
        </header>

        <main>
          <ManufacturingHero
            title={manufacturingIoTData.hero.title}
            subtitle={manufacturingIoTData.hero.subtitle}
            buttons={manufacturingIoTData.hero.buttons}
          />

          <ManufacturingOverview
            title={manufacturingIoTData.overview.title}
            content={manufacturingIoTData.overview.content}
            image={manufacturingIoTData.overview.image}
          />

          <ManufacturingFeatures
            title={manufacturingIoTData.features.title}
            items={manufacturingIoTData.features.items}
          />

          <section className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a1325]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {manufacturingIoTData.sensors.title}
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {manufacturingIoTData.sensors.items.map((sensor, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 text-center hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group"
                  >
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{sensor.icon}</div>
                    <div className="text-lg font-bold text-white mb-2">{sensor.name}</div>
                    <p className="text-xs text-gray-400 leading-relaxed">{sensor.use}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <ManufacturingCases
            title={manufacturingIoTData.cases.title}
            items={manufacturingIoTData.cases.items}
          />

          <AISecurityProcess
            title={manufacturingIoTData.process.title}
            description={manufacturingIoTData.process.description}
            steps={manufacturingIoTData.process.steps}
          />

          <section className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a1325]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {manufacturingIoTData.benefits.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {manufacturingIoTData.benefits.items.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 text-center hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500"
                  >
                    <div className="text-5xl mb-3">{benefit.icon}</div>
                    <div className="text-4xl font-bold text-purple-400 mb-3 font-mono">
                      {benefit.metric}
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>


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
            badge="Industry 4.0 Ready"
            title="Ready to Transform Your Factory?"
            description="Let's implement IoT solutions that reduce downtime, improve efficiency, and deliver measurable ROI. From sensors to insights in weeks, not months."
            primaryButtonText="Schedule Assessment"
            secondaryButtonText="View Case Studies"
            footerText="Free factory assessment • Proven ROI • 40% downtime reduction"
          />
        </main>
      </div>
    </>
  );
}
