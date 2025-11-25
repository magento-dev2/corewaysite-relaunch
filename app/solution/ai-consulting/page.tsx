"use client";

import Head from "next/head";
import aiConsultingData from "../../../data/aiConsultingData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import AIConsultingHero from "@/components/aiconsulting/AIConsultingHero";
import AIConsultingOverview from "@/components/aiconsulting/AIConsultingOverview";
import AIConsultingFeatures from "@/components/aiconsulting/AIConsultingFeatures";
import AIConsultingTechnologies from "@/components/aiconsulting/AIConsultingTechnologies";
import AIConsultingCaseStudies from "@/components/aiconsulting/AIConsultingCaseStudies";
import AIConsultingProcess from "@/components/aiconsulting/AIConsultingProcess";
import AIConsultingAutomation from "@/components/aiconsulting/AIConsultingAutomation";
import PageCTA from "@/components/PageCTA";
import WhyCorewaySection from "@/components/WhyCorewaySection";
import FAQ from "@/components/FAQ";
import sampleFAQs from '@/data/faq.json';


export default function AIConsulting() {
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
        name: "AI Consulting",
        item: `${siteUrl}/solution/ai-consulting`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Consulting Services",
    description:
      "Strategic AI implementation and machine learning solutions that deliver measurable business value",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "AI Consulting & Machine Learning",
    areaServed: "Worldwide",
  };

  return (
    <>
      <Head>
        <title>AI Consulting Services | Coreway Solution</title>
        <meta
          name="description"
          content="Transform your business with AI consulting expertise. Custom machine learning models, NLP solutions, and strategic AI implementation for measurable ROI."
        />
        <meta property="og:title" content="AI Consulting Services | Coreway" />
        <meta
          property="og:description"
          content="Strategic AI implementation and machine learning solutions that deliver measurable business value."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${siteUrl}/solution/ai-consulting`}
        />
        <link
          rel="canonical"
          href={`${siteUrl}/solution/ai-consulting`}
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
                { label: "AI Consulting" },
              ]}
            />
          </div>
        </header>

        <main>
          <AIConsultingHero
            title={aiConsultingData.hero.title}
            title2={aiConsultingData.hero.title2}
            subtitle={aiConsultingData.hero.subtitle}
            buttons={aiConsultingData.hero.buttons}
          />

          <AIConsultingOverview
            title={aiConsultingData.overview.title}
            content={aiConsultingData.overview.content}
            image={aiConsultingData.overview.image}
          />

          <AIConsultingFeatures
            title={aiConsultingData.features.title}
            items={aiConsultingData.features.items}
          />

          <AIConsultingTechnologies
            title={aiConsultingData.platforms.title}
            description={aiConsultingData.platforms.description}
            items={aiConsultingData.platforms.items}
          />

          <AIConsultingCaseStudies
            title={aiConsultingData.caseStudies.title}
            cases={aiConsultingData.caseStudies.cases}
          />

          <AIConsultingProcess
            title={aiConsultingData.process.title}
            description={aiConsultingData.process.description}
            steps={aiConsultingData.process.steps}
          />

          <AIConsultingAutomation
            title={aiConsultingData.automation.title}
            description={aiConsultingData.automation.description}
            features={aiConsultingData.automation.features}
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
            badge="Ready to innovate?"
            title="Ready to Transform with AI?"
            description="Let's build intelligent AI solutions that drive real business value. Our expert team is ready to help you unlock the power of artificial intelligence and machine learning."
            primaryButtonText="Start AI Journey"
            secondaryButtonText="View Case Studies"
            footerText="Free AI consultation • Custom ML solutions • Proven expertise"
          />
        </main>
      </div>
    </>
  );
}
