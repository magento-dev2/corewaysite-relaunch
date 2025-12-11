import CategoryHeroSide from "@/components/category/CategoryHeroSide";
import CategoryGrid from "@/components/category/CategoryGrid";
import PageCTA from "@/components/PageCTA";
import Breadcrumb from "@/components/about/Breadcrumb";
import WhyCorewaySection from "@/components/WhyCorewaySection";
import FAQ from "@/components/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Technologies | Coreway Solution - Our Technology Stack & Expertise",
    description: "Explore our technology expertise including React, Node.js, Python, Laravel, PostgreSQL, MongoDB, AWS, IoT protocols, and security tools.",
    keywords: "react development, nodejs, python, laravel php, postgresql, mongodb, aws cloud, iot protocols, mqtt, security tools, technology stack",
};

export default function TechnologiesPage() {
    const technologies = [
        // Frontend & Backend
        {
            title: "React.js",
            description: "Build modern, responsive web applications with React, Next.js, and cutting-edge frontend technologies.",
            href: "/technologies/react",
            icon: "code",
        },
        {
            title: "Node.js",
            description: "Scalable backend services with Node.js, Express, and real-time capabilities using WebSockets.",
            href: "/technologies/nodejs",
            icon: "server",
        },
        {
            title: "Python (Flask, FastAPI)",
            description: "High-performance APIs and data processing with Python, Flask, FastAPI, and machine learning integration.",
            href: "/technologies/python",
            icon: "code-2",
        },
        {
            title: "Laravel / PHP",
            description: "Enterprise web applications with Laravel framework, robust architecture, and scalable solutions.",
            href: "/technologies/laravel-php",
            icon: "box",
        },
        // Databases & Storage
        {
            title: "PostgreSQL / MongoDB",
            description: "Reliable data storage with PostgreSQL for relational data and MongoDB for flexible document storage.",
            href: "/technologies/databases",
            icon: "database",
        },
        {
            title: "AWS / Wasabi / MinIO / Cloudflare R2",
            description: "Multi-cloud storage solutions with AWS S3, Wasabi, MinIO, and Cloudflare R2 for optimal cost and performance.",
            href: "/technologies/cloud-storage",
            icon: "hard-drive",
        },
        {
            title: "S3 Operations",
            description: "Advanced S3 operations including lifecycle management, versioning, replication, and cost optimization.",
            href: "/technologies/s3-process",
            icon: "cloud",
        },
        // IoT & Security
        {
            title: "MQTT / IoT Protocols / WebSockets",
            description: "Real-time communication with MQTT, WebSockets, and IoT protocols for connected device ecosystems.",
            href: "/technologies/iot-protocols",
            icon: "radio",
        },
        {
            title: "Fail2Ban / UFW / CrowdSec",
            description: "Comprehensive security with intrusion prevention, firewall management, and collaborative threat intelligence.",
            href: "/technologies/security-tools",
            icon: "shield-check",
        },
    ];
    
const whyCorewayReasons = [
    {
        icon: "cpu", // Modern Tech Stack
        title: "Modern Tech Stack",
        description: "We use the latest technologies and frameworks to build future-proof, scalable solutions."
    },
    {
        icon: "layers", // Full-Stack Expertise
        title: "Full-Stack Expertise",
        description: "50+ technologies mastered across frontend, backend, databases, cloud, and security."
    },
    {
        icon: "check-circle", // Best Practices
        title: "Best Practices",
        description: "Clean code, comprehensive testing, CI/CD pipelines, and industry-standard development practices."
    },
    {
        icon: "zap", // Continuous Learning
        title: "Continuous Learning",
        description: "Our team stays updated with emerging technologies to deliver cutting-edge solutions."
    }
];


    const faqs = [
        {
            question: "What technologies do you specialize in?",
            answer: "We specialize in modern web technologies including React, Node.js, Python, Laravel, PostgreSQL, MongoDB, AWS, IoT protocols, and security tools. Our expertise spans 50+ technologies."
        },
        {
            question: "Can you work with legacy systems?",
            answer: "Yes, we have extensive experience modernizing legacy systems and integrating them with modern technologies while ensuring data integrity and minimal disruption."
        },
        {
            question: "Do you follow coding best practices?",
            answer: "Absolutely! We follow industry best practices including clean code principles, comprehensive testing, code reviews, CI/CD pipelines, and security-first development."
        },
        {
            question: "How do you choose the right technology stack?",
            answer: "We analyze your requirements, scalability needs, team expertise, budget, and long-term goals to recommend the optimal technology stack for your project."
        },
        {
            question: "Do you provide training on technologies?",
            answer: "Yes, we offer knowledge transfer and training sessions to ensure your team can effectively maintain and extend the solutions we build."
        }
    ];

    return (
        <div className="min-h-screen bg-[#0E0918]">
            <header className="page-content">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumb items={[{ label: "Technologies" }]} />
                </div>
            </header>

            <main>
                <CategoryHeroSide
                    badge="Our Technology Stack"
                    title="Cutting-Edge"
                    titleHighlight="Technologies"
                    subtitle="Modern Tools for Modern Solutions"
                    description="We leverage the latest technologies and frameworks to build robust, scalable, and secure solutions. Our expertise spans across frontend, backend, databases, cloud infrastructure, IoT, and security."
                    primaryButton={{ label: "Discuss Your Tech Stack", href: "/contact" }}
                    secondaryButton={{ label: "View Our Projects", href: "/case-studies" }}
                    imageSrc="/assets/images/technologies.png"
                    imageAlt="Technology Stack"
                />

                <CategoryGrid items={technologies} columns={3} />

                <WhyCorewaySection
                    badge="Why Choose Coreway"
                    title="Technology Excellence & Innovation"
                    subtitle="We combine deep technical expertise with a passion for innovation to deliver exceptional results."
                    reasons={whyCorewayReasons}
                />

                <FAQ
                    badge="Help Center"
                    title="Frequently Asked Questions"
                    description="Everything you need to know about our technology expertise"
                    faqs={faqs}
                    columns={1}
                    showContactCTA={true}
                    contactText="Still have questions?"
                    contactButtonText="Contact Our Team"
                />

                <PageCTA
                    badge="Technology Excellence"
                    title="Build with the Best Technologies"
                    description="Our technology experts will help you choose the right stack and build solutions that scale with your business."
                    primaryButtonText="Discuss Your Tech Stack"
                    secondaryButtonText="View Our Projects"
                    footerText="Expert developers • Modern technologies • Best practices"
                />
            </main>
        </div>
    );
}
