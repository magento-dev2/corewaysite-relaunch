import gptAutomationData from "../../../data/gptAutomationData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import DatasetHero from "@/components/dataset/DatasetHero";
import DatasetOverview from "@/components/dataset/DatasetOverview";
import DatasetFeatures from "@/components/dataset/DatasetFeatures";
import DatasetTechnologies from "@/components/dataset/DatasetTechnologies";
import DatasetCaseStudies from "@/components/dataset/DatasetCaseStudies";
import DatasetProcess from "@/components/dataset/DatasetProcess";
import DatasetAutomation from "@/components/dataset/DatasetAutomation";
import PageCTA from "@/components/PageCTA";
import sampleFAQs from '@/data/faqs.json';
import FAQ from '@/components/FAQ';
import WhyCorewaySection from '@/components/WhyCorewaySection';
import whyCorewayData from '@/data/why-coreway.json';
import SubHeader from "@/components/SubHeader";

export default function GPTAutomation() {
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
      { "@type": "ListItem", position: 2, name: "Solutions", item: `${siteUrl}/solution` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Automation via GPT, APIs & Workflow Tools",
        item: `${siteUrl}/solution/gpt-automation`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Automation via GPT, APIs & Workflow Tools",
    description:
      "Build intelligent automation workflows that combine GPT models, external APIs, and workflow orchestration to eliminate manual tasks and scale operations.",
    provider: {
      "@type": "Organization",
      name: "Coreway Solution",
    },
    serviceType: "Intelligent Automation",
    areaServed: "Worldwide",
  };

  return (
    <div className="min-h-screen bg-[#0E0918]">
        <header className="page-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Solutions", href: "/solution" },
                { label: "Automation via GPT, APIs & Workflow Tools" },
              ]}
            />
          </div>
        </header>

        <main>
          <DatasetHero
            title={gptAutomationData.hero.title}
            subtitle={gptAutomationData.hero.subtitle}
            buttons={gptAutomationData.hero.buttons}
            title2={gptAutomationData.hero.title2}
            img={gptAutomationData.hero.img}
          />

          <SubHeader title="GPT Automation" items={subHeaderItems} />

          <div id="overview">
            <DatasetOverview
            title={gptAutomationData.overview.title}
            content={gptAutomationData.overview.content}
            image={gptAutomationData.overview.image}
          />
          </div>

          <div id="features">
            <DatasetFeatures
            title={gptAutomationData.features.title}
            items={gptAutomationData.features.items}
          />
          </div>

          <DatasetTechnologies
            title={gptAutomationData.platforms.title}
            description={gptAutomationData.platforms.description}
            items={gptAutomationData.platforms.items}
          />

          <DatasetCaseStudies
            title={gptAutomationData.caseStudies.title}
            cases={gptAutomationData.caseStudies.cases}
          />

          <div id="process">
            <DatasetProcess
            title={gptAutomationData.process.title}
            description={gptAutomationData.process.description}
            steps={gptAutomationData.process.steps}
          />
          </div>

          <DatasetAutomation
            title={gptAutomationData.automation.title}
            description={gptAutomationData.automation.description}
            features={gptAutomationData.automation.features}
          />

          <WhyCorewaySection
            badge={whyCorewayData["gpt-automation"].badge}
            title={whyCorewayData["gpt-automation"].title}
            subtitle={whyCorewayData["gpt-automation"].subtitle}
            reasons={whyCorewayData["gpt-automation"].reasons}
          />
          <div id="faq">
            <FAQ
            badge="Help Center"
            title="Common Questions & Answers"
            description="Everything you need to know about our services and how we work"
            faqs={sampleFAQs["gpt-automation"]}
            columns={1}
            showContactCTA={true}
            contactText="Still have questions?"
            contactButtonText="Contact Our Team"
          />
          </div>

          <PageCTA
            badge="Automate Everything"
            title="Ready to Build Intelligent Automation?"
            description="Let's design and implement GPT-powered workflows that eliminate manual tasks and scale your operations. Our automation solutions integrate seamlessly with your existing tech stack."
            primaryButtonText="Start Automating"
            secondaryButtonText="View Examples"
            footerText="Free workflow consultation • API integration • Custom automation"
          />
        </main>
      </div>
  );
}
