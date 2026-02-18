import Link from 'next/link';
import aiWorkflowAutomation from "../../../data/aiWorkflowAutomation.json";
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
    title: 'AI Workflow Automation Services | Business Process Automation | Coreway Solution',
    description: 'Automate business workflows using AI. Coreway Solution builds intelligent workflow automation systems that improve efficiency, reduce manual work, and scale operations.',
    keywords: 'AI workflow automation, business process automation, workflow AI, task automation, approval automation, document automation, Coreway Solution',
    openGraph: {
        title: 'AI Workflow Automation Services | Business Process Automation | Coreway Solution',
        description: 'Automate your business workflows with intelligent AI logic. Expert automation solutions for modern businesses.',
        url: 'https://corewaysolution.com/ai-data/ai-workflow-automation',
        type: 'website',
    }
};

export default function AiWorkflowAutomation() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "AI Workflow Automation",
        "description": "Custom AI-powered workflow automation solutions to eliminate manual processes.",
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
                            { label: "AI Workflow Automation" },
                        ]}
                    />
                </div>
            </header>

            <main>
                <Hero
                    title={aiWorkflowAutomation.hero.title}
                    title2={aiWorkflowAutomation.hero.title2}
                    subtitle={aiWorkflowAutomation.hero.subtitle}
                    buttons={aiWorkflowAutomation.hero.buttons}
                    img={aiWorkflowAutomation.hero.img}
                    variant="workflow"
                />

                <Overview
                    title={aiWorkflowAutomation.overview.title}
                    content={aiWorkflowAutomation.overview.content}
                    image={aiWorkflowAutomation.overview.image}
                    highlights={aiWorkflowAutomation.overview.listItems}
                />

                <Solutions
                    title={aiWorkflowAutomation.solutions.title}
                    items={aiWorkflowAutomation.solutions.items}
                />

                <SaaSIntegration
                    title={aiWorkflowAutomation.saasSection.title}
                    subtitle={aiWorkflowAutomation.saasSection.subtitle}
                    items={aiWorkflowAutomation.saasSection.items}
                    img={aiWorkflowAutomation.saasSection.img}
                />

                <UseCases
                    title={aiWorkflowAutomation.caseStudies.title}
                    cases={aiWorkflowAutomation.caseStudies.cases}
                    hideButton={true}
                />

                <Process
                    title={aiWorkflowAutomation.process.title}
                    description={aiWorkflowAutomation.process.description}
                    steps={aiWorkflowAutomation.process.steps}
                />

                <Overview
                    title={whyCorewayData["ai-workflow-automation"].title}
                    content={whyCorewayData["ai-workflow-automation"].subtitle}
                    image={aiWorkflowAutomation.whyChoose.image}
                    highlights={aiWorkflowAutomation.whyChoose.items}
                />

                <Technologies
                    title={aiWorkflowAutomation.technologies.title}
                    description={aiWorkflowAutomation.technologies.description}
                    items={aiWorkflowAutomation.technologies.items}
                />

                <WhyCorewaySection
                    badge={whyCorewayData["ai-workflow-automation"].badge}
                    title={whyCorewayData["ai-workflow-automation"].title}
                    subtitle={whyCorewayData["ai-workflow-automation"].subtitle}
                    reasons={whyCorewayData["ai-workflow-automation"].reasons}
                />

                <Engagement
                    title={aiWorkflowAutomation.engagement.title}
                    items={aiWorkflowAutomation.engagement.items}
                />

                <PageCTA
                    badge={aiWorkflowAutomation.cta.badge}
                    title={aiWorkflowAutomation.cta.title}
                    description={aiWorkflowAutomation.cta.description}
                    primaryButtonText={aiWorkflowAutomation.cta.primaryButtonText}
                    secondaryButtonText={aiWorkflowAutomation.cta.secondaryButtonText}
                />
            </main>
        </div>
    );
}
