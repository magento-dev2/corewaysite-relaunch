"use client";

import Head from "next/head";
import ecommerceStoresData from "../../../data/ecommerceStoresData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import EcommerceHero from "@/components/ecommerce/EcommerceHero";
import EcommerceOverview from "@/components/ecommerce/EcommerceOverview";
import EcommerceFeatures from "@/components/ecommerce/EcommerceFeatures";
import EcommerceShowcase from "@/components/ecommerce/EcommerceShowcase";
import AISecurityTechnologies from "@/components/aisecurity/AISecurityTechnologies";
import AISecurityProcess from "@/components/aisecurity/AISecurityProcess";
import PageCTA from "@/components/PageCTA";
import sampleFAQs from '@/data/faq.json';
import FAQ from '@/components/FAQ';


export default function EcommerceStores() {
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
        name: "eCommerce & Virtual Product Stores",
        item: `${siteUrl}/industries/ecommerce-stores`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "eCommerce & Virtual Product Stores",
    description:
      "Build high-converting online stores with AI-powered personalization, seamless checkout experiences, and omnichannel integration.",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "eCommerce Development",
    areaServed: "Worldwide",
  };

  return (
    <>
      <Head>
        <title>eCommerce & Virtual Product Stores | Coreway Solution</title>
        <meta
          name="description"
          content="Build high-converting online stores with AI-powered personalization, seamless checkout, and omnichannel integration. Shopify to headless commerce."
        />
        <meta property="og:title" content="eCommerce Development | Coreway" />
        <meta
          property="og:description"
          content="Create digital storefronts that drive sales with AI personalization and seamless experiences."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${siteUrl}/industries/ecommerce-stores`}
        />
        <link
          rel="canonical"
          href={`${siteUrl}/industries/ecommerce-stores`}
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
                { label: "eCommerce & Virtual Product Stores" },
              ]}
            />
          </div>
        </header>

        <main>
          <EcommerceHero
            title={ecommerceStoresData.hero.title}
            subtitle={ecommerceStoresData.hero.subtitle}
            buttons={ecommerceStoresData.hero.buttons}
          />

          <EcommerceOverview
            title={ecommerceStoresData.overview.title}
            content={ecommerceStoresData.overview.content}
            image={ecommerceStoresData.overview.image}
          />

          <EcommerceFeatures
            title={ecommerceStoresData.features.title}
            items={ecommerceStoresData.features.items}
          />

          <AISecurityTechnologies
            title={ecommerceStoresData.platforms.title}
            description={ecommerceStoresData.platforms.description}
            items={ecommerceStoresData.platforms.items}
          />

          <EcommerceShowcase
            title={ecommerceStoresData.showcase.title}
            stores={ecommerceStoresData.showcase.stores}
          />

          <AISecurityProcess
            title={ecommerceStoresData.process.title}
            description={ecommerceStoresData.process.description}
            steps={ecommerceStoresData.process.steps}
          />

          <section className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a1325]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {ecommerceStoresData.benefits.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {ecommerceStoresData.benefits.items.map((benefit, index) => (
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
            badge="Start Selling Online"
            title="Ready to Launch Your Online Store?"
            description="Let's build a high-converting eCommerce platform that drives sales and delights customers. From Shopify to custom solutions, we've got you covered."
            primaryButtonText="Start Your Store"
            secondaryButtonText="View Portfolio"
            footerText="Free consultation • 2-4 weeks to launch • Proven results"
          />
        </main>
      </div>
    </>
  );
}
