import salesforceArchitectData from "@/data/salesforceArchitectData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import Hero from "@/components/aiagent/Hero";
import Overview from "@/components/aiagent/Overview";
import Solutions from "@/components/aiagent/Solutions";
import SaaSIntegration from "@/components/aiagent/SaaSIntegration";
import Process from "@/components/aiagent/Process";
import WhyCorewaySection from "@/components/WhyCorewaySection";
import Technologies from "@/components/aiagent/Technologies";
import PageCTA from "@/components/PageCTA";
import { Metadata } from "next";
import SubHeader from "@/components/SubHeader";

export const metadata: Metadata = {
    title: "Salesforce Architect Services | Salesforce Architecture Consulting | Coreway Solution",
    description:
        "Hire Salesforce architects to design scalable and secure CRM solutions. Coreway Solution provides Salesforce architecture consulting, integration planning, and optimization services.",
    keywords:
        "Salesforce Architect, Salesforce Architecture Services, Salesforce Architecture Consulting, CRM Architecture, Salesforce Integration Architecture",
    openGraph: {
        title: "Salesforce Architect Services | Salesforce Architecture Consulting | Coreway Solution",
        description:
            "Hire Salesforce architects to design scalable and secure CRM solutions with architecture consulting, integration planning, and optimization services.",
        url: "https://corewaysolution.com/solution/salesforce-development/architect",
        type: "website",
    },
};

export default function ArchitectPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Salesforce Architect",
        description:
            "Salesforce architecture consulting services including system design, integration planning, data architecture, security architecture, and performance optimization.",
        provider: {
            "@type": "Organization",
            name: "Coreway Solution",
        },
    };

    const subHeaderItems = [
        { label: "Overview", sectionId: "overview" },
        { label: "Services", sectionId: "services" },
        { label: "Industry Solutions", sectionId: "industry-solutions" },
        { label: "Approach", sectionId: "approach" },
        { label: "Tech", sectionId: "tech" },
        { label: "Contact", sectionId: "contact" },
    ];

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
                            { label: "Solutions", href: "/solutions" },
                            { label: "Salesforce Development", href: "/solution/salesforce-development" },
                            { label: "Salesforce Architect" },
                        ]}
                    />
                </div>
            </header>

            <main>
                <Hero
                    title={salesforceArchitectData.hero.title}
                    title2={salesforceArchitectData.hero.title2}
                    subtitle={salesforceArchitectData.hero.subtitle}
                    buttons={salesforceArchitectData.hero.buttons}
                    img={salesforceArchitectData.hero.img}
                />

                <SubHeader title="Salesforce Architect" items={subHeaderItems} />

                <div id="overview">
                    <Overview
                        title={salesforceArchitectData.overview.title}
                        content={salesforceArchitectData.overview.content}
                        image={salesforceArchitectData.overview.image}
                        highlights={salesforceArchitectData.overview.listItems}
                    />
                </div>

                <div id="services">
                    <Solutions
                        title={salesforceArchitectData.solutions.title}
                        items={salesforceArchitectData.solutions.items}
                    />
                </div>

                <div id="industry-solutions">
                    <SaaSIntegration
                        title={salesforceArchitectData.saasSection.title}
                        subtitle={salesforceArchitectData.saasSection.subtitle}
                        items={salesforceArchitectData.saasSection.items}
                        img={salesforceArchitectData.saasSection.img}
                    />
                </div>

                <div id="approach">
                    <Process
                        title={salesforceArchitectData.process.title}
                        description={salesforceArchitectData.process.description}
                        steps={salesforceArchitectData.process.steps}
                    />
                </div>

                <WhyCorewaySection
                    badge={salesforceArchitectData.whyChoose.badge}
                    title={salesforceArchitectData.whyChoose.title}
                    subtitle={salesforceArchitectData.whyChoose.subtitle}
                    reasons={salesforceArchitectData.whyChoose.reasons}
                />

                <div id="tech">
                    <Technologies
                        title={salesforceArchitectData.technologies.title}
                        description={salesforceArchitectData.technologies.description}
                        items={salesforceArchitectData.technologies.items}
                    />
                </div>

                <div id="contact">
                    <PageCTA
                        badge={salesforceArchitectData.cta.badge}
                        title={salesforceArchitectData.cta.title}
                        description={salesforceArchitectData.cta.description}
                        primaryButtonText={salesforceArchitectData.cta.primaryButtonText}
                        secondaryButtonText={salesforceArchitectData.cta.secondaryButtonText}
                        secondaryButtonlink="/contact"
                    />
                </div>
            </main>
        </div>
    );
}
