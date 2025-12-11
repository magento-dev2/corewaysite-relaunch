import manufacturingIoTData from "../../../data/manufacturingIoTData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import DatasetHero from "@/components/dataset/DatasetHero";
import ManufacturingOverview from "@/components/manufacturing/ManufacturingOverview";
import ManufacturingFeatures from "@/components/manufacturing/ManufacturingFeatures";
import ManufacturingCases from "@/components/manufacturing/ManufacturingCases";
import AISecurityProcess from "@/components/aisecurity/AISecurityProcess";
import PageCTA from "@/components/PageCTA";
import sampleFAQs from '@/data/faqs.json';
import FAQ from '@/components/FAQ';
import WhyCorewaySection from '@/components/WhyCorewaySection';
import whyCorewayData from '@/data/why-coreway.json';
import SubHeader from "@/components/SubHeader";


export default function ManufacturingIoT() {
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
    <div className="min-h-screen bg-[#0E0918]">
      <header className="page-content">
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
        <DatasetHero
          title={manufacturingIoTData.hero.title}
          title2={manufacturingIoTData.hero.title2}
          subtitle={manufacturingIoTData.hero.subtitle}
          buttons={manufacturingIoTData.hero.buttons}
          img="/assets/images/Manufacturing.png"
        />

        <SubHeader title="Manufacturing & IoT" items={subHeaderItems} />

        <div id="overview">
          <ManufacturingOverview
            title={manufacturingIoTData.overview.title}
            content={manufacturingIoTData.overview.content}
            image={manufacturingIoTData.overview.image}
          />
        </div>

        <div id="features">
          <ManufacturingFeatures
            title={manufacturingIoTData.features.title}
            items={manufacturingIoTData.features.items}
          />
        </div>

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

        <div id="process">
          <AISecurityProcess
            title={manufacturingIoTData.process.title}
            description={manufacturingIoTData.process.description}
            steps={manufacturingIoTData.process.steps}
          />
        </div>

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


        <WhyCorewaySection
          badge={whyCorewayData["manufacturing-iot"].badge}
          title={whyCorewayData["manufacturing-iot"].title}
          subtitle={whyCorewayData["manufacturing-iot"].subtitle}
          reasons={whyCorewayData["manufacturing-iot"].reasons}
        />
        <div id="faq">
          <FAQ
            badge="Help Center"
            title="Common Questions & Answers"
            description="Everything you need to know about our services and how we work"
            faqs={sampleFAQs["manufacturing-iot"]}
            columns={1}
            showContactCTA={true}
            contactText="Still have questions?"
            contactButtonText="Contact Our Team"
          />
        </div>


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
  );
}
