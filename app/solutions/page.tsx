import CategoryHeroSide from "@/components/category/CategoryHeroSide";
import CategoryGrid from "@/components/category/CategoryGrid";
import PageCTA from "@/components/PageCTA";
import Breadcrumb from "@/components/about/Breadcrumb";
import WhyCorewaySection from "@/components/WhyCorewaySection";
import FAQ from "@/components/FAQ";
import { Metadata } from "next";
import sampleFAQs from '@/data/faqs.json';


export const metadata: Metadata = {
    title: "Solutions | Coreway Solution - Digital Transformation & AI Services",
    description: "Explore our comprehensive solutions including digital commerce transformation, AI integration, IoT development, SaaS infrastructure, and custom API systems integration.",
    keywords: "digital solutions, AI integration, IoT development, SaaS infrastructure, API integration, business automation, cloud solutions",
};

export default function SolutionsPage() {
    const solutions = [
        // Digital Solutions
        {
            title: "Digital Commerce Transformation",
            description: "Transform your commerce platform with headless architecture, omnichannel experiences, and scalable infrastructure.",
            href: "/solution/digital-commerce-transformation",
            icon: "shopping-cart",
        },
        {
            title: "Product Development for Startups",
            description: "Launch your MVP faster with our agile development approach, from ideation to market-ready products.",
            href: "/solution/product-development-forstartups",
            icon: "rocket",
        },
        {
            title: "AI-Powered Application Platforms",
            description: "Build intelligent applications with GPT integration, machine learning, and advanced AI capabilities.",
            href: "/solution/ai-powered-application-platforms",
            icon: "brain",
        },
        // Development & Integration
        {
            title: "IoT Application Development",
            description: "Connect devices and build smart IoT solutions with MQTT, real-time dashboards, and predictive analytics.",
            href: "/solution/iot-application-development",
            icon: "wifi",
        },
        {
            title: "SaaS Infrastructure & DevOps",
            description: "Scale your SaaS platform with robust infrastructure, CI/CD pipelines, and automated deployments.",
            href: "/solution/saas-infrastructure-devops",
            icon: "cloud",
        },
        {
            title: "Business Workflow Automation",
            description: "Streamline operations with intelligent automation, workflow orchestration, and process optimization.",
            href: "/solution/business-workflow-automation",
            icon: "zap",
        },
        {
            title: "Salesforce Development",
            description: "Implement, customize, and integrate Salesforce CRM to improve customer management and operational efficiency.",
            href: "/solution/salesforce-development",
            icon: "layers",
        },
        // AI & Consulting
        {
            title: "AI Agent",
            description: "Deploy autonomous AI agents for customer service, data processing, and intelligent task automation.",
            href: "/solution/ai-agent",
            icon: "code",
        },
        {
            title: "AI Consulting",
            description: "Strategic AI consulting to identify opportunities, design solutions, and implement AI across your organization.",
            href: "/solution/ai-consulting",
            icon: "lightbulb",
        },
        {
            title: "AI Integration Services",
            description: "Seamlessly integrate AI capabilities into your existing systems with minimal disruption.",
            href: "/solution/ai-integration-services",
            icon: "plug",
        },
        {
            title: "Replatforming & Migration",
            description: "Migrate legacy systems to modern platforms with zero downtime and data integrity.",
            href: "/solution/replatforming-migration",
            icon: "refresh-cw",
        },
        {
            title: "UGS Ads",
            description: "Advanced advertising solutions with user-generated content and AI-powered targeting.",
            href: "/solution/ugs-ads",
            icon: "shield",
        },
        {
            title: "DBDashbot",
            description: "Intelligent database dashboard with AI-powered insights and automated reporting.",
            href: "/solution/DBDashbot",
            icon: "database",
        },
        {
            title: "AI Chat with PDF",
            description: "Extract insights from documents using AI-powered chat interface and intelligent search.",
            href: "/solution/ai-chat-with-pdf",
            icon: "sparkles",
        },
        // Infrastructure & Security
        {
            title: "Custom API & Systems Integration",
            description: "Build robust APIs and integrate disparate systems for seamless data flow and automation.",
            href: "/solution/custom-api-systems-integration",
            icon: "code",
        },
        {
            title: "Infrastructure Security Using AI",
            description: "Protect your infrastructure with AI-powered threat detection, automated responses, and security monitoring.",
            href: "/solution/infrastructure-security-ai",
            icon: "shield-check",
        },
    ];

const whyCorewayReasons = [
    {
        icon: "layers", // End-to-End expertise
        title: "End-to-End Expertise",
        description: "From strategy to implementation, we handle every aspect of your digital transformation journey."
    },
    {
        icon: "award", // Proven track record
        title: "Proven Track Record",
        description: "50+ successful projects delivered across industries with 100% client satisfaction."
    },
    {
        icon: "cpu", // Cutting-edge technology
        title: "Cutting-Edge Technology",
        description: "We leverage the latest technologies and frameworks to build future-proof solutions."
    },
    {
        icon: "git-branch", // Agile approach
        title: "Agile Approach",
        description: "Flexible, iterative development process that adapts to your changing needs."
    }
];




    return (
        <div className="min-h-screen bg-[#0E0918]">
            <header className="page-content">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumb items={[{ label: "Solutions" }]} />
                </div>
            </header>

            <main>
                <CategoryHeroSide
                    title="Comprehensive Digital"
                    titleHighlight="Solutions"
                    subtitle="From Strategy to Execution"
                    description="We deliver end-to-end solutions that transform businesses through cutting-edge technology, AI integration, and scalable infrastructure. Explore our comprehensive suite of services designed to accelerate your digital transformation journey."
                    primaryButton={{ label: "Schedule Consultation", href: "/contact" }}
                    secondaryButton={{ label: "View Case Studies", href: "/case-studies" }}
                    imageSrc="/assets/images/solution11.png"
                    imageAlt="Digital Solutions"
                />

                <CategoryGrid items={solutions} columns={3} />

                <WhyCorewaySection
                    badge="Why Choose Coreway"
                    title="Your Trusted Technology Partner"
                    subtitle="We combine technical excellence with business understanding to deliver solutions that drive real results."
                    reasons={whyCorewayReasons}
                />

                <FAQ
                    badge="Help Center"
                    title="Frequently Asked Questions"
                    description="Everything you need to know about our solutions and services"
                    faqs={sampleFAQs["solutions"]}
                    columns={1}
                    showContactCTA={true}
                    contactText="Still have questions?"
                    contactButtonText="Contact Our Team"
                />

                <PageCTA
                    badge="Ready to Transform?"
                    title="Let's Build Your Solution Together"
                    description="Our team of experts is ready to help you choose the right solution and create a custom implementation plan tailored to your business needs."
                    primaryButtonText="Schedule Consultation"
                    secondaryButtonText="View Case Studies"
                    footerText=" • Free consultation • Expert guidance • Proven results"
                    primaryButtonlink="/contact"
                    secondaryButtonlink="/case-studies"
            
                />
            </main>
        </div>
    );
}
