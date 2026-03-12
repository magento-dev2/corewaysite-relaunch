import aiForSaaSProducts from "../../../data/aiForSaaSProducts.json";
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
    title: 'AI for SaaS Products | AI Integration for SaaS Platforms | Coreway Solution',
    description: 'Add AI to your SaaS product with Coreway Solution. We build intelligent automation, predictive features, and AI-powered workflows to help SaaS companies scale faster.',
    keywords: 'AI for SaaS, SaaS AI integration, intelligent automation, predictive insights, AI workflow, SaaS scale, AI-powered features',
    openGraph: {
        title: 'AI for SaaS Products | AI Integration for SaaS Platforms | Coreway Solution',
        description: 'Scale your SaaS product with intelligent AI integration. Custom development and automation experts.',
        url: 'https://corewaysolution.com/ai-data/ai-for-saas-products',
        type: 'website',
    }
};

export default function AiForSaaSProducts() {
    const subHeaderItems = [
        { label: "Overview", sectionId: "overview" },
        { label: "Services", sectionId: "services" },
        { label: "Industry Solutions", sectionId: "industry-solutions" },
        { label: "Use Cases", sectionId: "use-cases" },
        { label: "Approach", sectionId: "approach" },
        { label: "Why AI", sectionId: "why-ai" },
        { label: "Tech", sectionId: "tech" },
        { label: "Engagement", sectionId: "engagement" },
        { label: "Contact", sectionId: "contact" },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "AI for SaaS Products",
        "description": "Expert AI integration and development services for SaaS platforms.",
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
                            { label: "AI for SaaS Products" },
                        ]}
                    />
                </div>
            </header>

            <main>
                <Hero
                    title={aiForSaaSProducts.hero.title}
                    title2={aiForSaaSProducts.hero.title2}
                    subtitle={aiForSaaSProducts.hero.subtitle}
                    buttons={aiForSaaSProducts.hero.buttons}
                    img={aiForSaaSProducts.hero.img}
                    variant="saas"
                />

                <SubHeader title="AI for SaaS Products" items={subHeaderItems} />

                <div id="overview">
                    <Overview
                        title={aiForSaaSProducts.overview.title}
                        content={aiForSaaSProducts.overview.content}
                        image={aiForSaaSProducts.overview.image}
                        highlights={aiForSaaSProducts.overview.listItems}
                    />
                </div>

                <div id="services">
                    <Solutions
                        title={aiForSaaSProducts.solutions.title}
                        items={aiForSaaSProducts.solutions.items}
                    />
                </div>

                <div id="industry-solutions">
                    <SaaSIntegration
                        title={aiForSaaSProducts.saasSection.title}
                        subtitle={aiForSaaSProducts.saasSection.subtitle}
                        items={aiForSaaSProducts.saasSection.items}
                        img={aiForSaaSProducts.saasSection.img}
                    />
                </div>

                <div id="use-cases">
                    <UseCases
                        title={aiForSaaSProducts.caseStudies.title}
                        cases={aiForSaaSProducts.caseStudies.cases}
                        hideButton={true}
                    />
                </div>

                <div id="approach">
                    <Process
                        title={aiForSaaSProducts.process.title}
                        description={aiForSaaSProducts.process.description}
                        steps={aiForSaaSProducts.process.steps}
                    />
                </div>

                <div id="why-ai">
                    <Overview
                        title={aiForSaaSProducts.whyAI.title}
                        content={aiForSaaSProducts.whyAI.subtitle}
                        image={aiForSaaSProducts.whyAI.image}
                        highlights={aiForSaaSProducts.whyAI.items}
                    />
                </div>

                <div id="tech">
                    <Technologies
                        title={aiForSaaSProducts.technologies.title}
                        description={aiForSaaSProducts.technologies.description}
                        items={aiForSaaSProducts.technologies.items}
                    />
                </div>

                <WhyCorewaySection
                    badge={whyCorewayData["ai-for-saas-products"].badge}
                    title={whyCorewayData["ai-for-saas-products"].title}
                    subtitle={whyCorewayData["ai-for-saas-products"].subtitle}
                    reasons={whyCorewayData["ai-for-saas-products"].reasons}
                />

                <div id="engagement">
                    <Engagement
                        title={aiForSaaSProducts.engagement.title}
                        items={aiForSaaSProducts.engagement.items}
                    />
                </div>

                <div id="contact">
                    <PageCTA
                        badge={aiForSaaSProducts.cta.badge}
                        title={aiForSaaSProducts.cta.title}
                        description={aiForSaaSProducts.cta.description}
                        primaryButtonText={aiForSaaSProducts.cta.primaryButtonText}
                        secondaryButtonText={aiForSaaSProducts.cta.secondaryButtonText}
                    />
                </div>
            </main>
        </div>
    );
}
