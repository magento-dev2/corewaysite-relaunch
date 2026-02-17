import Link from 'next/link';
import aiAgentDevelopment from "../../../data/aiAgentDevelopment.json";
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
    title: 'AI Agent Development & Automation Services | Coreway Solution',
    description: 'Transform your business operations with custom AI Agents. We build intelligent agents that automate manual work, integrate with your SaaS tools, and scale your productivity.',
    keywords: 'AI agent development, business automation, GPT agents, custom AI solutions, workflow automation, AI integration',
    openGraph: {
        title: 'AI Agent Development & Automation Services | Coreway Solution',
        description: 'Replace manual work with intelligent AI agents. Custom development and SaaS integration experts.',
        url: 'https://corewaysolution.com/ai-data/ai-agent-development',
        type: 'website',
    }
};

export default function AiAgentDevelopment() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "AI Agent Development & Automation",
        "description": "Custom AI Agent development to automate business processes and manual work.",
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
                            { label: "AI Agent Development" },
                        ]}
                    />
                </div>
            </header>

            <main>
                <Hero
                    title={aiAgentDevelopment.hero.title}
                    title2={aiAgentDevelopment.hero.title2}
                    subtitle={aiAgentDevelopment.hero.subtitle}
                    buttons={aiAgentDevelopment.hero.buttons}
                    img={aiAgentDevelopment.hero.img}
                />

                <Overview
                    title={aiAgentDevelopment.overview.title}
                    content={aiAgentDevelopment.overview.content}
                    image={aiAgentDevelopment.overview.image}
                    highlights={aiAgentDevelopment.overview.listItems}
                />

                <Solutions
                    title={aiAgentDevelopment.solutions.title}
                    items={aiAgentDevelopment.solutions.items}
                />

                <SaaSIntegration
                    title={aiAgentDevelopment.saasSection.title}
                    subtitle={aiAgentDevelopment.saasSection.subtitle}
                    items={aiAgentDevelopment.saasSection.items}
                    img={aiAgentDevelopment.saasSection.img}
                />

                <UseCases
                    title={aiAgentDevelopment.caseStudies.title}
                    cases={aiAgentDevelopment.caseStudies.cases}
                />

                <Process
                    title={aiAgentDevelopment.process.title}
                    description={aiAgentDevelopment.process.description}
                    steps={aiAgentDevelopment.process.steps}
                />

                <Technologies
                    title={aiAgentDevelopment.technologies.title}
                    description={aiAgentDevelopment.technologies.description}
                    items={aiAgentDevelopment.technologies.items}
                />

                <WhyCorewaySection
                    badge={whyCorewayData["ai-agent-development"].badge}
                    title={whyCorewayData["ai-agent-development"].title}
                    subtitle={whyCorewayData["ai-agent-development"].subtitle}
                    reasons={whyCorewayData["ai-agent-development"].reasons}
                />

                <Engagement
                    title={aiAgentDevelopment.engagement.title}
                    items={aiAgentDevelopment.engagement.items}
                />

                <PageCTA
                    badge={aiAgentDevelopment.cta.badge}
                    title={aiAgentDevelopment.cta.title}
                    description={aiAgentDevelopment.cta.description}
                    primaryButtonText={aiAgentDevelopment.cta.primaryButtonText}
                    secondaryButtonText={aiAgentDevelopment.cta.secondaryButtonText}
                />
            </main>
        </div>
    );
}
