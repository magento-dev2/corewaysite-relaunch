"use client";

import Head from "next/head";
import laravelData from "../../../data/phpLaravelData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import TechHero from "@/components/technologies/TechHero";
import TechOverview from "@/components/technologies/TechOverview";
import TechFeatures from "@/components/technologies/TechFeatures";
import TechStack from "@/components/technologies/TechStack";
import TechUseCases from "@/components/technologies/TechUseCases";
import ProcessDiagram from "@/components/commerce/ProcessDiagram";
import AutomationSection from "@/components/commerce/AutomationSection";
import PageCTA from "@/components/PageCTA";
import FAQ from '@/components/FAQ';
import WhyCorewaySection from '@/components/WhyCorewaySection';
import sampleFAQs from '@/data/faq.json';

export default function LaravelPHPTechnologyPage() {
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
        name: "Laravel / PHP Development",
        item: `${siteUrl}/technologies/laravel-php`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Laravel / PHP Development Services",
    description:
      "Expert Laravel and PHP development for web applications, APIs, e-commerce, and SaaS platforms. Modern PHP solutions.",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "Laravel / PHP Development",
    areaServed: "Worldwide",
  };

  return (
    <>
      <Head>
        <title>Laravel / PHP Development Services | Coreway Solution</title>
        <meta
          name="description"
          content="Expert Laravel and PHP development for building elegant web applications, APIs, e-commerce platforms, and SaaS solutions with modern architecture."
        />
        <meta
          property="og:title"
          content="Laravel / PHP Development Services | Coreway"
        />
        <meta
          property="og:description"
          content="Build powerful Laravel applications with elegant syntax and enterprise capabilities. Expert PHP development team."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${siteUrl}/technologies/laravel-php`}
        />
        <link rel="canonical" href={`${siteUrl}/technologies/laravel-php`} />
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
                { label: "Laravel / PHP Development" },
              ]}
            />
          </div>
        </header>

        <main>
          <TechHero
            title={laravelData.hero.title}
            title2={laravelData.hero.title2}
            subtitle={laravelData.hero.subtitle}
            buttons={laravelData.hero.buttons}
            img={laravelData.hero.img}
          />

          <TechOverview
            title={laravelData.overview.title}
            content={laravelData.overview.content}
            image={laravelData.overview.image}
            stats={laravelData.overview.stats}
          />

          <TechFeatures
            title={laravelData.features.title}
            items={laravelData.features.items}
          />

          <TechStack
            title={laravelData.technologies.title}
            description={laravelData.technologies.description}
            items={laravelData.technologies.items}
          />

          <TechUseCases
            title={laravelData.useCases.title}
            cases={laravelData.useCases.cases}
          />

          {/* <ProcessDiagram
            title={laravelData.process.title}
            description={laravelData.process.description}
            steps={laravelData.process.steps}
          /> */}

          <AutomationSection
            title={laravelData.benefits.title}
            description={laravelData.benefits.description}
            features={laravelData.benefits.features}
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
            badge="Start Building"
            title="Ready to Build with Laravel?"
            description="Let's create elegant, powerful web applications with Laravel and PHP. Our expert team delivers enterprise-grade solutions with modern architecture and best practices."
            primaryButtonText="Start Your Project"
            secondaryButtonText="View Portfolio"
            footerText="Free consultation • Expert developers • Proven results"
          />
        </main>
      </div>
    </>
  );
}
