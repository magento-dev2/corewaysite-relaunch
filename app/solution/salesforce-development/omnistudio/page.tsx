import salesforceOmnistudioData from "@/data/salesforceOmnistudioData.json";
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
    title: "Salesforce Omnistudio Development Services | Omnistudio Experts | Coreway Solution",
    description:
        "Coreway Solution provides Salesforce Omnistudio development services including Omniscripts, FlexCards, DataRaptors, and integrations to automate workflows and improve digital experiences.",
    keywords:
        "Salesforce Omnistudio, Omnistudio development services, Omniscript development, FlexCard development, DataRaptor configuration, Salesforce integration",
    openGraph: {
        title: "Salesforce Omnistudio Development Services | Omnistudio Experts | Coreway Solution",
        description:
            "Salesforce Omnistudio development services including Omniscripts, FlexCards, DataRaptors, and integrations to automate workflows and improve digital experiences.",
        url: "https://corewaysolution.com/solution/salesforce-development/omnistudio",
        type: "website",
    },
};

export default function OmnistudioPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Salesforce Omnistudio",
        description:
            "Salesforce Omnistudio development services for guided digital experiences, workflow automation, and enterprise integrations.",
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
                            { label: "Salesforce Omnistudio" },
                        ]}
                    />
                </div>
            </header>

            <main>
                <Hero
                    title={salesforceOmnistudioData.hero.title}
                    title2={salesforceOmnistudioData.hero.title2}
                    subtitle={salesforceOmnistudioData.hero.subtitle}
                    buttons={salesforceOmnistudioData.hero.buttons}
                    img={salesforceOmnistudioData.hero.img}
                />

                <SubHeader title="Salesforce Omnistudio" items={subHeaderItems} />

                <div id="overview">
                    <Overview
                        title={salesforceOmnistudioData.overview.title}
                        content={salesforceOmnistudioData.overview.content}
                        image={salesforceOmnistudioData.overview.image}
                        highlights={salesforceOmnistudioData.overview.listItems}
                    />
                </div>

                <div id="services">
                    <Solutions
                        title={salesforceOmnistudioData.solutions.title}
                        items={salesforceOmnistudioData.solutions.items}
                    />
                </div>

                <div id="industry-solutions">
                    <SaaSIntegration
                        title={salesforceOmnistudioData.saasSection.title}
                        subtitle={salesforceOmnistudioData.saasSection.subtitle}
                        items={salesforceOmnistudioData.saasSection.items}
                        img={salesforceOmnistudioData.saasSection.img}
                    />
                </div>

                <div id="approach">
                    <Process
                        title={salesforceOmnistudioData.process.title}
                        description={salesforceOmnistudioData.process.description}
                        steps={salesforceOmnistudioData.process.steps}
                    />
                </div>

                <WhyCorewaySection
                    badge={salesforceOmnistudioData.whyChoose.badge}
                    title={salesforceOmnistudioData.whyChoose.title}
                    subtitle={salesforceOmnistudioData.whyChoose.subtitle}
                    reasons={salesforceOmnistudioData.whyChoose.reasons}
                />

                <div id="tech">
                    <Technologies
                        title={salesforceOmnistudioData.technologies.title}
                        description={salesforceOmnistudioData.technologies.description}
                        items={salesforceOmnistudioData.technologies.items}
                    />
                </div>

                <div id="contact">
                    <PageCTA
                        badge={salesforceOmnistudioData.cta.badge}
                        title={salesforceOmnistudioData.cta.title}
                        description={salesforceOmnistudioData.cta.description}
                        primaryButtonText={salesforceOmnistudioData.cta.primaryButtonText}
                        secondaryButtonText={salesforceOmnistudioData.cta.secondaryButtonText}
                        secondaryButtonlink="/contact"
                    />
                </div>
            </main>
        </div>
    );
}
