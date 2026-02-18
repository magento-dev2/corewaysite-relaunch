import Link from 'next/link';
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

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

                <Overview
                    title={aiDocumentProcessing.overview.title}
                    content={aiDocumentProcessing.overview.content}
                    image={aiDocumentProcessing.overview.image}
                    highlights={aiDocumentProcessing.overview.listItems}
                />

                <Solutions
                    title={aiDocumentProcessing.solutions.title}
                    items={aiDocumentProcessing.solutions.items}
                />

                <SaaSIntegration
                    title={aiDocumentProcessing.saasSection.title}
                    subtitle={aiDocumentProcessing.saasSection.subtitle}
                    items={aiDocumentProcessing.saasSection.items}
                    img={aiDocumentProcessing.saasSection.img}
                />

                <UseCases
                    title={aiDocumentProcessing.caseStudies.title}
                    cases={aiDocumentProcessing.caseStudies.cases}
                    hideButton={true}
                />

                <Process
                    title={aiDocumentProcessing.process.title}
                    description={aiDocumentProcessing.process.description}
                    steps={aiDocumentProcessing.process.steps}
                />

                <Overview
                    title={whyCorewayData["ai-document-processing"].title}
                    content={whyCorewayData["ai-document-processing"].subtitle}
                    image={aiDocumentProcessing.whyChoose.image}
                    highlights={aiDocumentProcessing.whyChoose.items}
                />

                <Technologies
                    title={aiDocumentProcessing.technologies.title}
                    description={aiDocumentProcessing.technologies.description}
                    items={aiDocumentProcessing.technologies.items}
                />

                <WhyCorewaySection
                    badge={whyCorewayData["ai-document-processing"].badge}
                    title={whyCorewayData["ai-document-processing"].title}
                    subtitle={whyCorewayData["ai-document-processing"].subtitle}
                    reasons={whyCorewayData["ai-document-processing"].reasons}
                />

                <Engagement
                    title={aiDocumentProcessing.engagement.title}
                    items={aiDocumentProcessing.engagement.items}
                />

                <PageCTA
                    badge={aiDocumentProcessing.cta.badge}
                    title={aiDocumentProcessing.cta.title}
                    description={aiDocumentProcessing.cta.description}
                    primaryButtonText={aiDocumentProcessing.cta.primaryButtonText}
                    secondaryButtonText={aiDocumentProcessing.cta.secondaryButtonText}
                />
            </main>
        </div>
    );
}
