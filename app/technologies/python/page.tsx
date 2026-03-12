import pythonData from "../../../data/pythonData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import TechHero from "@/components/technologies/TechHero";
import TechOverview from "@/components/technologies/TechOverview";
import TechFeatures from "@/components/technologies/TechFeatures";
import TechStack from "@/components/technologies/TechStack";

import ProcessDiagram from "@/components/commerce/ProcessDiagram";
import AutomationSection from "@/components/commerce/AutomationSection";
import PageCTA from "@/components/PageCTA";
import FAQ from '@/components/FAQ';
import WhyCorewaySection from '@/components/WhyCorewaySection';
import sampleFAQs from '@/data/faqs.json';
import whyCorewayData from '@/data/why-coreway.json';
import SubHeader from "@/components/SubHeader";
import CaseStudySection from "@/components/technologies/CaseStudySection";
import caseStudiesData from '@/data/caseStudies.json';

export default function PythonTechnologyPage() {
  const subHeaderItems = [
    { label: "Overview", sectionId: "overview" },
    { label: "Capabilities", sectionId: "features" },
    { label: "Our Process", sectionId: "process" },
    { label: "FAQ", sectionId: "faq" },
  ];

  return (
    <div className="min-h-screen bg-[#0E0918]">
      <header className="page-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Technologies", href: "/technologies" },
              { label: "Python Development" },
            ]}
          />
        </div>
      </header>

      <main>
        <TechHero
          title={pythonData.hero.title}
          title2={pythonData.hero.title2}
          subtitle={pythonData.hero.subtitle}
          buttons={pythonData.hero.buttons}
          img="/assets/images/python.png"
        />

        <SubHeader title="Python Development" items={subHeaderItems} />

        <div id="overview">
          <TechOverview
            title={pythonData.overview.title}
            content={pythonData.overview.content}
            image={pythonData.overview.image}
            stats={pythonData.overview.stats}
          />
        </div>

        <div id="features">
          <TechFeatures
            title={pythonData.features.title}
            items={pythonData.features.items}
          />
        </div>

        <TechStack
          title={pythonData.technologies.title}
          description={pythonData.technologies.description}
          items={pythonData.technologies.items}
        />



        <div id="process">
          <ProcessDiagram
            title={pythonData.process.title}
            description={pythonData.process.description}
            steps={pythonData.process.steps}
          />
        </div>

        <AutomationSection
          title={pythonData.benefits.title}
          description={pythonData.benefits.description}
          features={pythonData.benefits.features}
        />

        <CaseStudySection
          technology="Python"
          caseStudies={caseStudiesData}
          title="Our Work"
          description="Explore our portfolio of successful projects"
        />

        <WhyCorewaySection
          badge={whyCorewayData["python"].badge}
          title={whyCorewayData["python"].title}
          subtitle={whyCorewayData["python"].subtitle}
          reasons={whyCorewayData["python"].reasons}
        />
        <div id="faq">
          <FAQ
            badge="Help Center"
            title="Common Questions & Answers"
            description="Everything you need to know about our services and how we work"
            faqs={sampleFAQs["python"]}
            columns={1}
            showContactCTA={true}
            contactText="Still have questions?"
            contactButtonText="Contact Our Team"
          />
        </div>

        <PageCTA
          badge="Start Building"
          title="Ready to Build with Python?"
          description="Let's create powerful, scalable Python applications for your business. Our expert team specializes in Flask, FastAPI, Django, data science, and machine learning solutions."
          primaryButtonText="Start Your Project"
          secondaryButtonText="View Case-studies"
          footerText="Free consultation • Expert developers • Proven results"
        />
      </main>
    </div>
  );
}
