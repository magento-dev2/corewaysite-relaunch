import aiDocumentProcessing from "../../../data/aiDocumentProcessing.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import Hero from "@/components/aiagent/Hero";
import Overview from "@/components/aiagent/Overview";
import Solutions from "@/components/aiagent/Solutions";
import SaaSIntegration from "@/components/aiagent/SaaSIntegration";
import UseCases from "@/components/aiagent/UseCases";
import Process from "@/components/aiagent/Process";
import Technologies from "@/components/aiagent/Technologies";
import Engagement from "@/components/aiagent/Engagement";
import WhyCorewaySection from "@/components/WhyCorewaySection";
import whyCorewayData from "@/data/why-coreway.json";
import PageCTA from "@/components/PageCTA";
import { Metadata } from 'next';
import SubHeader from "@/components/SubHeader";

export const metadata: Metadata = {
    title: 'AI Document Processing Services | OCR & Document Automation | Coreway Solution',
    description: 'Automate document processing using AI. Coreway Solution builds OCR, data extraction, and intelligent document workflow automation systems for businesses and SaaS platforms.',
    keywords: 'AI document processing, OCR automation, document data extraction, intelligent document processing, business automation, Coreway Solution',
    openGraph: {
        title: 'AI Document Processing Services | OCR & Document Automation | Coreway Solution',
        description: 'Transform unstructured documents into structured data with AI. Scale your document workflows with intelligent automation.',
        url: 'https://corewaysolution.com/ai-data/ai-document-processing',
        type: 'website',
    }
};

export default function AiDocumentProcessing() {
    const subHeaderItems = [
        { label: "Overview", sectionId: "overview" },
        { label: "Services", sectionId: "services" },
        { label: "Industry Solutions", sectionId: "industry-solutions" },
        { label: "Use Cases", sectionId: "use-cases" },
        { label: "Approach", sectionId: "approach" },
        { label: "Why Coreway", sectionId: "why-coreway" },
        { label: "Tech", sectionId: "tech" },
        { label: "Engagement", sectionId: "engagement" },
        { label: "Contact", sectionId: "contact" },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "AI Document Processing",
        "description": "Expert AI-powered document processing, OCR, and data extraction services.",
        "provider": {
            "@type": "Organization",
            "name": "Coreway Solution"
        }
    };

    return (
        <div className="min-h-screen bg-[#0E0918]">

            <header className="page-content">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumb
                        items={[
                            { label: "AI & Data Engineering", href: "/ai-data" },
                            { label: "AI Document Processing" },
                        ]}
                    />
                </div>
            </header>

            <main>
                <Hero
                    title={aiDocumentProcessing.hero.title}
                    title2={aiDocumentProcessing.hero.title2}
                    subtitle={aiDocumentProcessing.hero.subtitle}
                    buttons={aiDocumentProcessing.hero.buttons}
                    img={aiDocumentProcessing.hero.img}
                    variant="document"
                />

                <SubHeader title="AI Document Processing" items={subHeaderItems} />

                <div id="overview">
                    <Overview
                        title={aiDocumentProcessing.overview.title}
                        content={aiDocumentProcessing.overview.content}
                        image={aiDocumentProcessing.overview.image}
                        highlights={aiDocumentProcessing.overview.listItems}
                    />
                </div>

                <div id="services">
                    <Solutions
                        title={aiDocumentProcessing.solutions.title}
                        items={aiDocumentProcessing.solutions.items}
                    />
                </div>

                <div id="industry-solutions">
                    <SaaSIntegration
                        title={aiDocumentProcessing.saasSection.title}
                        subtitle={aiDocumentProcessing.saasSection.subtitle}
                        items={aiDocumentProcessing.saasSection.items}
                        img={aiDocumentProcessing.saasSection.img}
                    />
                </div>

                <div id="use-cases">
                    <UseCases
                        title={aiDocumentProcessing.caseStudies.title}
                        cases={aiDocumentProcessing.caseStudies.cases}
                        hideButton={true}
                    />
                </div>

                <div id="approach">
                    <Process
                        title={aiDocumentProcessing.process.title}
                        description={aiDocumentProcessing.process.description}
                        steps={aiDocumentProcessing.process.steps}
                    />
                </div>

                <div id="why-coreway">
                    <Overview
                        title={whyCorewayData["ai-document-processing"].title}
                        content={whyCorewayData["ai-document-processing"].subtitle}
                        image={aiDocumentProcessing.whyChoose.image}
                        highlights={aiDocumentProcessing.whyChoose.items}
                    />
                </div>

                <div id="tech">
                    <Technologies
                        title={aiDocumentProcessing.technologies.title}
                        description={aiDocumentProcessing.technologies.description}
                        items={aiDocumentProcessing.technologies.items}
                    />
                </div>

                <WhyCorewaySection
                    badge={whyCorewayData["ai-document-processing"].badge}
                    title={whyCorewayData["ai-document-processing"].title}
                    subtitle={whyCorewayData["ai-document-processing"].subtitle}
                    reasons={whyCorewayData["ai-document-processing"].reasons}
                />

                <div id="engagement">
                    <Engagement
                        title={aiDocumentProcessing.engagement.title}
                        items={aiDocumentProcessing.engagement.items}
                    />
                </div>

                <div id="contact">
                    <PageCTA
                        badge={aiDocumentProcessing.cta.badge}
                        title={aiDocumentProcessing.cta.title}
                        description={aiDocumentProcessing.cta.description}
                        primaryButtonText={aiDocumentProcessing.cta.primaryButtonText}
                        secondaryButtonText={aiDocumentProcessing.cta.secondaryButtonText}
                    />
                </div>
            </main>
        </div>
    );
}
