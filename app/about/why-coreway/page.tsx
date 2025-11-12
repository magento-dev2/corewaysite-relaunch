"use client";

import Head from "next/head";
import whyCorewayData from "../../../data/whyCorewayData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import WhyHero from "@/components/why/WhyHero";
import WhyAdvantages from "@/components/why/WhyAdvantages";
import OurProcess from "@/components/about/OurProcess";
import Testimonials from "@/components/home/Testimonials";
import PageCTA from "@/components/PageCTA";

export default function WhyCoreway() {
  const siteUrl = "https://www.corewaysolution.com";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "About", item: `${siteUrl}/about` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Why Coreway",
        item: `${siteUrl}/about/why-coreway`,
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Why Choose Coreway Solution | Your Trusted Technology Partner</title>
        <meta
          name="description"
          content="Discover why 200+ companies chose Coreway as their technology partner. Deep expertise, proven track record, and exceptional results."
        />
        <meta property="og:title" content="Why Choose Coreway Solution" />
        <meta
          property="og:description"
          content="Deep technical expertise, proven track record, agile methodology, and 24/7 support. See why we're different."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${siteUrl}/about/why-coreway`}
        />
        <link
          rel="canonical"
          href={`${siteUrl}/about/why-coreway`}
        />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Head>

      <div className="min-h-screen bg-[#0E0918]">
        <header className="pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "About", href: "/about" },
                { label: "Why Coreway" },
              ]}
            />
          </div>
        </header>

        <main>
          <WhyHero
            title={whyCorewayData.hero.title}
            subtitle={whyCorewayData.hero.subtitle}
            buttons={whyCorewayData.hero.buttons}
          />

          <WhyAdvantages
            title={whyCorewayData.advantages.title}
            items={whyCorewayData.advantages.items}
          />

          <OurProcess />

          <section className="py-24 bg-gradient-to-b from-[#1a1325] to-[#0E0918]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {whyCorewayData.results.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {whyCorewayData.results.cases.map((result, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 text-center hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500"
                  >
                    <div className="text-5xl font-bold text-purple-400 mb-3 font-mono">
                      {result.metric}
                    </div>
                    <p className="text-gray-300 mb-2 leading-relaxed">
                      {result.description}
                    </p>
                    <div className="text-xs text-purple-400 font-medium uppercase tracking-wider">
                      {result.category}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Testimonials />

          <PageCTA
            badge="Your Success Partner"
            title="Ready to Experience the Coreway Difference?"
            description="Join 200+ companies who chose excellence. Let's discuss how our proven expertise can accelerate your success."
            primaryButtonText="Schedule Consultation"
            secondaryButtonText="View Case Studies"
            footerText="Free consultation • No obligation • Fast response"
          />
        </main>
      </div>
    </>
  );
}
