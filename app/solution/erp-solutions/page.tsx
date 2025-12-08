import Breadcrumb from "@/components/about/Breadcrumb";
import ERPHero from "@/components/erp/ERPHero";
import ERPOverview from "@/components/erp/ERPOverview";
import ERPModules from "@/components/erp/ERPModules";
import ERPProcess from "@/components/erp/ERPProcess";
import ERPBenefits from "@/components/erp/ERPBenefits";
import PageCTA from "@/components/PageCTA";
import WhyCorewaySection from "@/components/WhyCorewaySection";
import FAQ from "@/components/FAQ";
import SubHeader from "@/components/SubHeader";
import erpData from "@/data/erpData.json";
import sampleFAQs from '@/data/faqs.json';
import whyCorewayData from '@/data/why-coreway.json';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ERP Solutions | Enterprise Resource Planning Software | Coreway Solution",
    description: "Transform your business with our comprehensive ERP solutions. Integrate finance, HR, inventory, CRM, and more into one unified platform. Reduce costs by 40% and boost productivity.",
    keywords: "ERP software, enterprise resource planning, business management software, ERP implementation, ERP modules, financial management, inventory management, HR software",
};

export default function ERPSolutionsPage() {
    const subHeaderItems = [
        { label: "Overview", sectionId: "overview" },
        { label: "Modules", sectionId: "modules" },
        { label: "Process", sectionId: "process" },
        { label: "FAQ", sectionId: "faq" },
    ];

    return (
        <div className="min-h-screen bg-[#0E0918]">
            <header className="page-content">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumb
                        items={[
                            { label: "Solutions", href: "/solutions" },
                            { label: "ERP Solutions" },
                        ]}
                    />
                </div>
            </header>

            <main>
                <ERPHero
                    title={erpData.hero.title}
                    titleHighlight={erpData.hero.titleHighlight}
                    subtitle={erpData.hero.subtitle}
                    description={erpData.hero.description}
                    buttons={erpData.hero.buttons}
                />

                <SubHeader title="ERP Solutions" items={subHeaderItems} />

                <div id="overview">
                    <ERPOverview
                        title={erpData.overview.title}
                        description={erpData.overview.description}
                        benefits={erpData.overview.benefits}
                        stats={erpData.overview.stats}
                    />
                </div>

                <div id="modules">
                    <ERPModules
                        title={erpData.modules.title}
                        description={erpData.modules.description}
                        modules={erpData.modules.items}
                    />
                </div>

                <div id="process">
                    <ERPProcess
                        title={erpData.process.title}
                        description={erpData.process.description}
                        steps={erpData.process.steps}
                    />
                </div>

                <ERPBenefits
                    title={erpData.benefits.title}
                    description={erpData.benefits.description}
                    benefits={erpData.benefits.items}
                />

                <WhyCorewaySection
                    badge={whyCorewayData["erp-solutions"].badge}
                    title={whyCorewayData["erp-solutions"].title}
                    subtitle={whyCorewayData["erp-solutions"].subtitle}
                    reasons={whyCorewayData["erp-solutions"].reasons}
                />

                <div id="faq">
                    <FAQ
                        badge="Help Center"
                        title="Common Questions & Answers"
                        description="Everything you need to know about our ERP solutions"
                        faqs={sampleFAQs["erp-solutions"]}
                        columns={1}
                        showContactCTA={true}
                        contactText="Still have questions?"
                        contactButtonText="Contact Our Team"
                    />
                </div>

                <PageCTA
                    badge="Ready to Transform?"
                    title="Let's Build Your ERP Solution Together"
                    description="Our team of experts is ready to help you implement a powerful ERP system tailored to your business needs."
                    primaryButtonText="Get Started"
                    secondaryButtonText="Schedule Demo"
                    footerText="Free consultation • Custom implementation • Expert support"
                />
            </main>
        </div>
    );
}
