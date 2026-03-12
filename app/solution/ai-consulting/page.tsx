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
import sampleFAQs from '@/data/faqs.json';
import whyCorewayData from '@/data/why-coreway.json';
import SubHeader from "@/components/SubHeader";
import PortfolioHighlights from "@/components/about/PortfolioHighlights";

const subHeaderItems = [
  { label: "Overview", sectionId: "overview" },
  { label: "Capabilities", sectionId: "features" },
  { label: "Our Process", sectionId: "process" },
  { label: "FAQ", sectionId: "faq" },
];

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Solutions", url: "/solutions" },
  { name: "AI Consulting", url: "/solution/ai-consulting" },
];

const projectData = [
  {
    id: 1,
    language: "Wordpress",
    images: ["/images/Wordpress/american.png"]
  },
  {
    id: 2,
    language: "Shopify",
    images: ["/images/Shopify/aurus.png"]
  },
  {
    id: 3,
    language: "WooCommerce",
    images: ["/images/WooCommerce/alhine.png"]
  },
  {
    id: 4,
    language: "Android",
    images: ["/images/Android/bapuji-1.png"]
  },
  {
    id: 5,
    language: "Magento",
    images: ["/images/Magento/knir.png"]
  },
  {
    id: 6,
    language: "Laravel",
    images: ["/images/Laravel/delaware.png"]
  }
];
export default function AIConsulting() {
  return (
    <div className="min-h-screen bg-[#0E0918]">
      <header className="page-content">
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

        <SubHeader title="AI Consulting" items={subHeaderItems} />

        <div id="overview">
          <AIConsultingOverview
            title={aiConsultingData.overview.title}
            content={aiConsultingData.overview.content}
            image={aiConsultingData.overview.image}
          />
        </div>

        <div id="features">
          <AIConsultingFeatures
            title={aiConsultingData.features.title}
            items={aiConsultingData.features.items}
          />
        </div>

        <AIConsultingTechnologies
          title={aiConsultingData.platforms.title}
          description={aiConsultingData.platforms.description}
          items={aiConsultingData.platforms.items}
        />

        {/* <AIConsultingCaseStudies
            title={aiConsultingData.caseStudies.title}
            cases={aiConsultingData.caseStudies.cases}
          /> */}

        <PortfolioHighlights data={projectData} highlightCount={6} />

        <div id="process">
          <AIConsultingProcess
            title={aiConsultingData.process.title}
            description={aiConsultingData.process.description}
            steps={aiConsultingData.process.steps}
          />
        </div>

        <AIConsultingAutomation
          title={aiConsultingData.automation.title}
          description={aiConsultingData.automation.description}
          features={aiConsultingData.automation.features}
        />
        <WhyCorewaySection
          badge={whyCorewayData["ai-consulting"].badge}
          title={whyCorewayData["ai-consulting"].title}
          subtitle={whyCorewayData["ai-consulting"].subtitle}
          reasons={whyCorewayData["ai-consulting"].reasons}
        />
        <div id="faq">
          <FAQ
            badge="Help Center"
            title="Common Questions & Answers"
            description="Everything you need to know about our services and how we work"
            faqs={sampleFAQs["ai-consulting"]}
            columns={1}
            showContactCTA={true}
            contactText="Still have questions?"
            contactButtonText="Contact Our Team"
          />
        </div>

        <PageCTA
          badge="Ready to innovate?"
          title="Ready to Transform with AI?"
          description="Let's build intelligent AI solutions that drive real business value. Our expert team is ready to help you unlock the power of artificial intelligence and machine learning."
          primaryButtonText="Start AI Journey"
          secondaryButtonText="View Case Studies"
          footerText="Free AI consultation • Custom ML solutions • Proven expertise"
          primaryButtonlink="/ai-data"
        />
      </main>
    </div>
  );
}
