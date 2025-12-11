import CategoryHeroSide from "@/components/category/CategoryHeroSide";
import CategoryGrid from "@/components/category/CategoryGrid";
import PageCTA from "@/components/PageCTA";
import Breadcrumb from "@/components/about/Breadcrumb";
import WhyCorewaySection from "@/components/WhyCorewaySection";
import FAQ from "@/components/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI & Data Engineering | Coreway Solution - AI Solutions & Data Infrastructure",
    description: "Expert AI and data engineering services including dataset management, AWS S3 optimization, GPT automation, metadata extraction, and custom data dashboards.",
    keywords: "AI engineering, data engineering, dataset management, AWS S3, GPT automation, metadata extraction, data dashboards, AI infrastructure",
};

export default function AIDataPage() {
    const services = [
        {
            title: "Dataset Management & Delivery Systems",
            description: "Enterprise-grade dataset management with secure delivery, version control, and multi-cloud support.",
            href: "/ai-data/dataset-management-delivery",
            icon: "database",
        },
        {
            title: "AWS S3 Architecture & Cost Optimization",
            description: "Optimize your cloud storage with intelligent tiering, lifecycle policies, and cost reduction strategies.",
            href: "/ai-data/aws-s3-optimization",
            icon: "hard-drive",
        },
        {
            title: "Metadata Extraction using GPT / Vision AI",
            description: "Automate metadata extraction from documents and images using advanced AI and computer vision.",
            href: "/ai-data/metadata-extraction-ai",
            icon: "sparkles",
        },
        {
            title: "Automation via GPT, APIs, and Workflow Tools",
            description: "Build intelligent automation workflows with GPT integration, API orchestration, and smart triggers.",
            href: "/ai-data/gpt-automation",
            icon: "zap",
        },
        {
            title: "Custom Data Dashboards & Access Portals",
            description: "Create interactive dashboards with real-time analytics, custom visualizations, and secure access control.",
            href: "/ai-data/custom-dashboards",
            icon: "trending-up",
        },
        {
            title: "Secure Infrastructure Automation",
            description: "Automate infrastructure security with AI-powered monitoring, threat detection, and automated responses.",
            href: "/ai-data/infrastructure-security-ai",
            icon: "shield-check",
        },
    ];

    const whyCorewayReasons = [
        {
            icon: "star",
            title: "AI Expertise",
            description: "Deep expertise in GPT, Vision AI, and machine learning technologies for intelligent data solutions."
        },
        {
            icon: "trending",
            title: "Scalable Architecture",
            description: "Build data infrastructure that scales seamlessly with your growing business needs."
        },
        {
            icon: "trophy",
            title: "Cost Optimization",
            description: "Reduce cloud storage costs by up to 70% with our intelligent optimization strategies."
        },
        {
            icon: "shield",
            title: "Security First",
            description: "Enterprise-grade security with encryption, access controls, and compliance standards."
        }
    ];

    const faqs = [
        {
            question: "What AI technologies do you work with?",
            answer: "We specialize in GPT models, Vision AI, machine learning frameworks, and custom AI solutions. Our expertise includes OpenAI, TensorFlow, PyTorch, and various cloud AI services."
        },
        {
            question: "How much can I save on cloud storage costs?",
            answer: "Our clients typically see 50-70% reduction in cloud storage costs through intelligent tiering, lifecycle policies, and multi-cloud optimization strategies."
        },
        {
            question: "Can you handle large-scale datasets?",
            answer: "Yes, we've successfully managed and delivered datasets ranging from gigabytes to petabytes, with robust version control and secure delivery systems."
        },
        {
            question: "What about data security and compliance?",
            answer: "We implement enterprise-grade security with encryption at rest and in transit, role-based access controls, and compliance with GDPR, HIPAA, and other regulations."
        },
        {
            question: "Do you provide ongoing support for AI systems?",
            answer: "Yes, we offer comprehensive support including monitoring, model retraining, performance optimization, and continuous improvement of AI systems."
        }
    ];

    return (
        <div className="min-h-screen bg-[#0E0918]">
            <header className="page-content">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumb items={[{ label: "AI & Data Engineering" }]} />
                </div>
            </header>

            <main>
                <CategoryHeroSide
                    badge="AI & Data Engineering"
                    title="Intelligent Data"
                    titleHighlight="Solutions"
                    subtitle="Powered by AI & Advanced Analytics"
                    description="Transform your data infrastructure with our AI-powered engineering services. From dataset management to intelligent automation, we help you unlock the full potential of your data assets with cutting-edge technology."
                    primaryButton={{ label: "Start Your Project", href: "/contact" }}
                    secondaryButton={{ label: "View Our Work", href: "/case-studies" }}
                    imageSrc="/assets/images/aisec.png"
                    imageAlt="AI & Data Engineering"
                />

                <CategoryGrid items={services} columns={3} />

                <WhyCorewaySection
                    badge="Why Choose Coreway"
                    title="Leading AI & Data Engineering Partner"
                    subtitle="We combine AI expertise with data engineering excellence to deliver intelligent, scalable solutions."
                    reasons={whyCorewayReasons}
                />

                <FAQ
                    badge="Help Center"
                    title="Frequently Asked Questions"
                    description="Everything you need to know about our AI and data engineering services"
                    faqs={faqs}
                    columns={1}
                    showContactCTA={true}
                    contactText="Still have questions?"
                    contactButtonText="Contact Our Team"
                />

                <PageCTA
                    badge="Data-Driven Success"
                    title="Ready to Harness the Power of AI & Data?"
                    description="Our AI and data engineering experts are ready to help you build scalable, intelligent data solutions that drive business value."
                    primaryButtonText="Start Your Project"
                    secondaryButtonText="View Our Work"
                    footerText="Free data assessment • Expert consultation • Proven methodologies"
                />
            </main>
        </div>
    );
}
