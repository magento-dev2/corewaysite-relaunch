import {
    getWebPageSchema,
    getServiceSchema,
    getFAQSchema,
    getAboutPageSchema,
    getCollectionPageSchema,
    getContactPageSchema,
} from "./schema";
import faqDataRaw from "../data/faqs.json";

const faqData = faqDataRaw as Record<string, Array<{ question: string; answer: string }>>;

export const getPageSchemas = (pathname: string) => {
    const schemas: any[] = [];

    // Solution Pages
    if (pathname.startsWith('/solution/')) {
        const slug = pathname.replace('/solution/', '');
        const solutionData = getSolutionData(slug);

        if (solutionData) {
            // 1. WebPage Schema
            schemas.push(getWebPageSchema(
                solutionData.name,
                solutionData.description,
                pathname,
                solutionData.breadcrumbs
            ));

            // 2. Service Schema
            schemas.push(getServiceSchema(
                solutionData.serviceType,
                solutionData.description
            ));

            // 3. FAQ Schema
            if (faqData[solutionData.faqKey]) {
                schemas.push(getFAQSchema(faqData[solutionData.faqKey]));
            }
        }
    }

    // AI & Data Pages
    if (pathname.startsWith('/ai-data/')) {
        const slug = pathname.replace('/ai-data/', '');
        const solutionData = getAiData(slug);

        if (solutionData) {
            schemas.push(getWebPageSchema(
                solutionData.name,
                solutionData.description,
                pathname,
                solutionData.breadcrumbs
            ));

            schemas.push(getServiceSchema(
                solutionData.serviceType,
                solutionData.description
            ));

            if (faqData[solutionData.faqKey]) {
                schemas.push(getFAQSchema(faqData[solutionData.faqKey]));
            }
        }
    }

    // Specialized Pages
    switch (pathname) {
        case '/about':
            schemas.push(getAboutPageSchema(
                "Coreway Solution is a leading software development company specializing in AI-powered solutions, custom software, and digital transformation.",
                [{ name: "Home", url: "/" }, { name: "About Us", url: "/about" }]
            ));
            if (faqData['about']) schemas.push(getFAQSchema(faqData['about']));
            break;

        case '/contact':
            schemas.push(getContactPageSchema(
                "Contact Coreway Solution for expert AI development, custom software solutions, and technical consulting.",
                [{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }]
            ));
            break;

        case '/portfolio':
            schemas.push(getCollectionPageSchema(
                "Portfolio | Coreway Solution",
                "Explore our successful projects and digital transformations across various industries.",
                "/portfolio",
                [{ name: "Home", url: "/" }, { name: "Portfolio", url: "/portfolio" }]
            ));
            if (faqData['portfolio']) schemas.push(getFAQSchema(faqData['portfolio']));
            break;

        case '/blog':
            schemas.push(getCollectionPageSchema(
                "Blog | Coreway Solution",
                "Insights on AI, software development, and digital innovation from our expert team.",
                "/blog",
                [{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }]
            ));
            break;

        case '/careers':
            schemas.push(getWebPageSchema(
                "Careers | Coreway Solution",
                "Join our team of innovative developers and technology experts.",
                "/careers",
                [{ name: "Home", url: "/" }, { name: "Careers", url: "/careers" }]
            ));
            if (faqData['careers']) schemas.push(getFAQSchema(faqData['careers']));
            break;

        case '/technologies':
            schemas.push(getCollectionPageSchema(
                "Technologies | Coreway Solution",
                "Explore our technology expertise including React, Node.js, Python, Laravel, and more.",
                "/technologies",
                [{ name: "Home", url: "/" }, { name: "Technologies", url: "/technologies" }]
            ));
            if (faqData['technologies']) schemas.push(getFAQSchema(faqData['technologies']));
            break;

        case '/industries':
            schemas.push(getCollectionPageSchema(
                "Industries We Serve | Coreway Solution",
                "Specialized solutions for eCommerce, automotive, manufacturing, and more.",
                "/industries",
                [{ name: "Home", url: "/" }, { name: "Industries", url: "/industries" }]
            ));
            if (faqData['industries']) schemas.push(getFAQSchema(faqData['industries']));
            break;

        case '/dedicated-developers':
            schemas.push(getWebPageSchema(
                "Hire Dedicated Developers | Coreway Solution",
                "Get access to skilled developers who work exclusively for you. Scale your team flexibly.",
                "/dedicated-developers",
                [{ name: "Home", url: "/" }, { name: "Dedicated Developers", url: "/dedicated-developers" }]
            ));
            if (faqData['dedicated-developers']) schemas.push(getFAQSchema(faqData['dedicated-developers']));
            break;
    }

    // Technology Subpages
    if (pathname.startsWith('/technologies/')) {
        const slug = pathname.replace('/technologies/', '');
        const techData = getTechnologyData(slug);
        if (techData) {
            schemas.push(getWebPageSchema(techData.name, techData.description, pathname, techData.breadcrumbs));
            schemas.push(getServiceSchema(techData.serviceType, techData.description));
        }
    }

    // Industry Subpages
    if (pathname.startsWith('/industries/')) {
        const slug = pathname.replace('/industries/', '');
        const industryData = getIndustryData(slug);
        if (industryData) {
            schemas.push(getWebPageSchema(industryData.name, industryData.description, pathname, industryData.breadcrumbs));
            schemas.push(getServiceSchema(industryData.serviceType, industryData.description));
        }
    }

    // Dedicated Developers Subpages
    if (pathname.startsWith('/dedicated-developers/')) {
        const slug = pathname.replace('/dedicated-developers/', '');
        const devData = getDedicatedDevData(slug);
        if (devData) {
            schemas.push(getWebPageSchema(devData.name, devData.description, pathname, devData.breadcrumbs));
            schemas.push(getServiceSchema(devData.serviceType, devData.description));
        }
    }

    return schemas;
};

function getSolutionData(slug: string) {
    const solutions: Record<string, any> = {
        'ai-consulting': {
            name: "AI Consulting | Coreway Solution",
            description: "Expert AI consulting services to help your business leverage machine learning, data science, and intelligent automation.",
            serviceType: "AI Consulting",
            faqKey: "ai-consulting",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Solutions", url: "/solutions" }, { name: "AI Consulting", url: "/solution/ai-consulting" }]
        },
        'rag-chatbot': {
            name: "RAG Chatbot | Coreway Solution",
            description: "Transform your PDFs into intelligent conversational assistants using advanced Retrieval Augmented Generation (RAG) technology.",
            serviceType: "RAG Chatbot Development",
            faqKey: "ai-consulting",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Solutions", url: "/solutions" }, { name: "AI Consulting", url: "/solution/ai-consulting" }, { name: "RAG Chatbot", url: "/solution/rag-chatbot" }]
        },
        'ugs-ads': {
            name: "AI-Powered UGC Ads | Coreway Solution",
            description: "Create authentic, high-converting UGC ads with AI. Get professional-looking video ads in 24 hours — no filming required.",
            serviceType: "UGC Ad Creation",
            faqKey: "ugs-ads",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Solutions", url: "/solutions" }, { name: "UGC Ads", url: "/solution/ugs-ads" }]
        },
        'replatforming-migration': {
            name: "Replatforming & Migration | Coreway Solution",
            description: "Seamlessly transition your digital platforms with our expert migration services, ensuring zero downtime and complete data integrity.",
            serviceType: "Platform Migration Services",
            faqKey: "replatforming-migration",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Solutions", url: "/solutions" }, { name: "Replatforming & Migration", url: "/solution/replatforming-migration" }]
        },
        'saas-infrastructure-devops': {
            name: "SaaS Infrastructure & DevOps | Coreway Solution",
            description: "Scalable cloud infrastructure and DevOps automation to power your SaaS applications and accelerate development cycles.",
            serviceType: "DevOps and Cloud Infrastructure",
            faqKey: "saas-infrastructure-devops",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Solutions", url: "/solutions" }, { name: "SaaS Infrastructure & DevOps", url: "/solution/saas-infrastructure-devops" }]
        },
        'product-development-forstartups': {
            name: "Product Development for Startups | Coreway Solution",
            description: "We help startups build scalable MVPs and full-scale products with modern technology and agile development practices.",
            serviceType: "Startup Product Development",
            faqKey: "product-development-for-startups",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Solutions", url: "/solutions" }, { name: "Product Development for Startups", url: "/solution/product-development-forstartups" }]
        },
        'mobile-application': {
            name: "Mobile Application Development | Coreway Solution",
            description: "Custom iOS and Android mobile apps designed for performance, usability, and scale.",
            serviceType: "Mobile App Development",
            faqKey: "mobileApplication",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Solutions", url: "/solutions" }, { name: "Mobile Application Development", url: "/solution/mobile-application" }]
        },
        'product-development': {
            name: "Product Development | Coreway Solution",
            description: "End-to-end product development services from concept to launch and scale.",
            serviceType: "Custom Product Development",
            faqKey: "solutions",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Solutions", url: "/solutions" }, { name: "Product Development", url: "/solution/product-development" }]
        },
        'digital-commerce-transformation': {
            name: "Digital Commerce Transformation | Coreway Solution",
            description: "Transform your retail business with AI-powered eCommerce solutions and seamless digital shopping experiences.",
            serviceType: "eCommerce Development",
            faqKey: "digital",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Solutions", url: "/solutions" }, { name: "Digital Commerce Transformation", url: "/solution/digital-commerce-transformation" }]
        },
        'analytics': {
            name: "Analytics & BI | Coreway Solution",
            description: "Data-driven insights to help your business grow. Custom dashboards, predictive analytics, and business intelligence.",
            serviceType: "Business Intelligence and Analytics",
            faqKey: "analytics",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Solutions", url: "/solutions" }, { name: "Analytics & BI", url: "/solution/analytics" }]
        },
        'ai-data-services': {
            name: "AI Data Services | Coreway Solution",
            description: "High-quality data collection, annotation, and management to power your AI models.",
            serviceType: "AI Data Solutions",
            faqKey: "ai-data-services",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Solutions", url: "/solutions" }, { name: "AI Data Services", url: "/solution/ai-data-services" }]
        },
        'iot-application-development': {
            name: "IoT Application Development | Coreway Solution",
            description: "Connecting devices and intelligent systems with custom IoT applications for real-time monitoring and automation.",
            serviceType: "IoT Development",
            faqKey: "iot-application-development",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Solutions", url: "/solutions" }, { name: "IoT Application Development", url: "/solution/iot-application-development" }]
        },
        'business-workflow-automation': {
            name: "Business Workflow Automation | Coreway Solution",
            description: "Streamline your business operations and reduce manual effort with custom automation solutions.",
            serviceType: "Workflow Automation",
            faqKey: "business-workflow-automation",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Solutions", url: "/solutions" }, { name: "Business Workflow Automation", url: "/solution/business-workflow-automation" }]
        },
        'ai-integration-services': {
            name: "AI Integration Services | Coreway Solution",
            description: "Seamlessly integrate AI technologies into your existing systems and workflows.",
            serviceType: "AI Integration",
            faqKey: "ai-integration-services",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Solutions", url: "/solutions" }, { name: "AI Integration Services", url: "/solution/ai-integration-services" }]
        },
        'DBDashbot': {
            name: "DB Dashbot | Coreway Solution",
            description: "Interact with your data using natural language. Intelligent database-connected chatbots for instant insights.",
            serviceType: "AI Dashboard Solutions",
            faqKey: "DBDashbot",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Solutions", url: "/solutions" }, { name: "DB Dashbot", url: "/solution/DBDashbot" }]
        },
        'ai-chat-with-pdf': {
            name: "AI Chat with PDF | Coreway Solution",
            description: "Extract insights and answers from your PDFs with intelligent AI-powered chat.",
            serviceType: "AI Document Solutions",
            faqKey: "ai-chat-with-pdf",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Solutions", url: "/solutions" }, { name: "AI Chat with PDF", url: "/solution/ai-chat-with-pdf" }]
        },
        'metadata-extraction-ai': {
            name: "Metadata Extraction AI | Coreway Solution",
            description: "Automate data extraction and tagging with AI-powered metadata extraction services.",
            serviceType: "AI Data Extraction",
            faqKey: "metadata-extraction-ai",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Solutions", url: "/solutions" }, { name: "Metadata Extraction AI", url: "/solution/metadata-extraction-ai" }]
        },
        'gpt-automation': {
            name: "GPT Automation | Coreway Solution",
            description: "Leverage large language models to automate content, customer support, and business tasks.",
            serviceType: "GPT Solutions",
            faqKey: "gpt-automation",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Solutions", url: "/solutions" }, { name: "GPT Automation", url: "/solution/gpt-automation" }]
        },
        'dataset-management-delivery': {
            name: "Dataset Management & Delivery | Coreway Solution",
            description: "Efficiently manage and deliver high-quality datasets for AI and machine learning.",
            serviceType: "Data Management",
            faqKey: "dataset-management-delivery",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Solutions", url: "/solutions" }, { name: "Dataset Management & Delivery", url: "/solution/dataset-management-delivery" }]
        },
        'custom-api-systems-integration': {
            name: "Custom API & Systems Integration | Coreway Solution",
            description: "Connecting disparate systems and creating custom APIs for seamless business integration.",
            serviceType: "Systems Integration",
            faqKey: "custom-api-systems-integration",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Solutions", url: "/solutions" }, { name: "Custom API & Systems Integration", url: "/solution/custom-api-systems-integration" }]
        },
        'salesforce-development': {
            name: "Salesforce Development | Coreway Solution",
            description: "Expert Salesforce customization, integration, and development services to optimize your CRM.",
            serviceType: "Salesforce Consulting",
            faqKey: "solutions",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Solutions", url: "/solutions" }, { name: "Salesforce Development", url: "/solution/salesforce-development" }]
        },
        'ai-powered-application-platforms': {
            name: "AI-Powered Application Platforms | Coreway Solution",
            description: "Build intelligent, scalable, and data-driven applications powered by cutting-edge AI technologies.",
            serviceType: "AI Platform Development",
            faqKey: "ai-powered-application-platforms",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Solutions", url: "/solutions" }, { name: "AI-Powered Application Platforms", url: "/solution/ai-powered-application-platforms" }]
        },
        'erp-solutions': {
            name: "ERP Solutions | Coreway Solution",
            description: "Custom ERP development and integration to streamline your business processes and resource management.",
            serviceType: "ERP Development",
            faqKey: "solutions",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Solutions", url: "/solutions" }, { name: "ERP Solutions", url: "/solution/erp-solutions" }]
        },
        'image-reorganization-tool': {
            name: "Image Reorganization Tool | Coreway Solution",
            description: "AI-powered image organization and categorization tools to manage your digital assets efficiently.",
            serviceType: "AI Image Solutions",
            faqKey: "ai-data-services",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Solutions", url: "/solutions" }, { name: "Image Reorganization Tool", url: "/solution/image-reorganization-tool" }]
        },
        'infrastructure-security-ai': {
            name: "Infrastructure Security AI | Coreway Solution",
            description: "Protect your IT infrastructure with AI-driven threat detection and automated security responses.",
            serviceType: "AI Security Services",
            faqKey: "infrastructure-security-ai",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Solutions", url: "/solutions" }, { name: "Infrastructure Security AI", url: "/solution/infrastructure-security-ai" }]
        },
        'ai-agent': {
            name: "AI Agent Development | Coreway Solution",
            description: "Custom AI agents designed to automate complex tasks and provide intelligent interactions.",
            serviceType: "AI Agent Solutions",
            faqKey: "ai-consulting",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Solutions", url: "/solutions" }, { name: "AI Agent", url: "/solution/ai-agent" }]
        },
        'salesforce-development/architect': {
            name: "Salesforce Architect Services | Coreway Solution",
            description: "Hire Salesforce architects to design scalable and secure CRM solutions with architecture consulting and integration planning.",
            serviceType: "Salesforce Architecture",
            faqKey: "solutions",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Solutions", url: "/solutions" }, { name: "Salesforce Development", url: "/solution/salesforce-development" }, { name: "Salesforce Architect", url: "/solution/salesforce-development/architect" }]
        },
        'salesforce-development/omnistudio': {
            name: "Salesforce Omnistudio Development | Coreway Solution",
            description: "Salesforce Omnistudio development services for guided digital experiences, workflow automation, and enterprise integrations.",
            serviceType: "Salesforce Omnistudio Development",
            faqKey: "solutions",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Solutions", url: "/solutions" }, { name: "Salesforce Development", url: "/solution/salesforce-development" }, { name: "Salesforce Omnistudio", url: "/solution/salesforce-development/omnistudio" }]
        }
    };

    return solutions[slug] || null;
}
function getAiData(slug: string) {
    const aiData: Record<string, any> = {
        'ai-agent-development': {
            name: "AI Agent Development & Automation | Coreway Solution",
            description: "Replace manual work with intelligent AI agents. Custom development and SaaS integration experts.",
            serviceType: "AI Agent Development",
            faqKey: "ai-agent-development",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "AI & Data", url: "/ai-data" }, { name: "AI Agent Development", url: "/ai-data/ai-agent-development" }]
        },
        'ai-document-processing': {
            name: "AI Document Processing Services | Coreway Solution",
            description: "Automate document processing using AI. OCR, data extraction, and intelligent document workflow automation systems.",
            serviceType: "AI Document Processing",
            faqKey: "ai-document-processing",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "AI & Data", url: "/ai-data" }, { name: "AI Document Processing", url: "/ai-data/ai-document-processing" }]
        },
        'ai-for-saas-products': {
            name: "AI for SaaS Products | Coreway Solution",
            description: "Scale your SaaS product with intelligent AI integration. Custom development and automation experts.",
            serviceType: "AI for SaaS",
            faqKey: "ai-for-saas-products",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "AI & Data", url: "/ai-data" }, { name: "AI for SaaS Products", url: "/ai-data/ai-for-saas-products" }]
        },
        'ai-workflow-automation': {
            name: "AI Workflow Automation | Coreway Solution",
            description: "Automate your business workflows with intelligent AI logic. Expert automation solutions for modern businesses.",
            serviceType: "AI Workflow Automation",
            faqKey: "ai-workflow-automation",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "AI & Data", url: "/ai-data" }, { name: "AI Workflow Automation", url: "/ai-data/ai-workflow-automation" }]
        },
        'aws-s3-optimization': {
            name: "AWS S3 Architecture & Cost Optimization | Coreway Solution",
            description: "Optimize your cloud storage with intelligent tiering, lifecycle policies, and cost reduction strategies.",
            serviceType: "Cloud Storage Optimization",
            faqKey: "ai-data-services",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "AI & Data", url: "/ai-data" }, { name: "AWS S3 Optimization", url: "/ai-data/aws-s3-optimization" }]
        },
        'custom-dashboards': {
            name: "Custom Data Dashboards & Access Portals | Coreway Solution",
            description: "Create interactive dashboards with real-time analytics, custom visualizations, and secure access control.",
            serviceType: "Data Visualization Services",
            faqKey: "ai-data-services",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "AI & Data", url: "/ai-data" }, { name: "Custom Dashboards", url: "/ai-data/custom-dashboards" }]
        },
        'dataset-management-delivery': {
            name: "Dataset Management & Delivery | Coreway Solution",
            description: "Enterprise-grade dataset management with secure delivery, version control, and multi-cloud support.",
            serviceType: "Data Management",
            faqKey: "dataset-management-delivery",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "AI & Data", url: "/ai-data" }, { name: "Dataset Management", url: "/ai-data/dataset-management-delivery" }]
        },
        'gpt-automation': {
            name: "GPT Automation | Coreway Solution",
            description: "Build intelligent automation workflows with GPT integration, API orchestration, and smart triggers.",
            serviceType: "GPT Automation",
            faqKey: "gpt-automation",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "AI & Data", url: "/ai-data" }, { name: "GPT Automation", url: "/ai-data/gpt-automation" }]
        },
        'infrastructure-security-ai': {
            name: "Infrastructure Security AI | Coreway Solution",
            description: "Automate infrastructure security with AI-powered monitoring, threat detection, and automated responses.",
            serviceType: "AI Security Operations",
            faqKey: "infrastructure-security-ai",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "AI & Data", url: "/ai-data" }, { name: "Infrastructure Security AI", url: "/ai-data/infrastructure-security-ai" }]
        },
        'metadata-extraction-ai': {
            name: "Metadata Extraction AI | Coreway Solution",
            description: "Automate metadata extraction from documents and images using advanced AI and computer vision.",
            serviceType: "AI Metadata Extraction",
            faqKey: "metadata-extraction-ai",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "AI & Data", url: "/ai-data" }, { name: "Metadata Extraction AI", url: "/ai-data/metadata-extraction-ai" }]
        }
    };

    return aiData[slug] || null;
}

function getTechnologyData(slug: string) {
    const tech: Record<string, any> = {
        'react': {
            name: "React.js Development | Coreway Solution",
            description: "Build modern, responsive web applications with React, Next.js, and cutting-edge frontend technologies.",
            serviceType: "React.js Development",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Technologies", url: "/technologies" }, { name: "React.js", url: "/technologies/react" }]
        },
        'nodejs': {
            name: "Node.js Development | Coreway Solution",
            description: "Scalable backend services with Node.js, Express, and real-time capabilities using WebSockets.",
            serviceType: "Node.js Development",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Technologies", url: "/technologies" }, { name: "Node.js", url: "/technologies/nodejs" }]
        },
        'python': {
            name: "Python Development | Coreway Solution",
            description: "High-performance APIs and data processing with Python, Flask, FastAPI, and machine learning integration.",
            serviceType: "Python Development",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Technologies", url: "/technologies" }, { name: "Python", url: "/technologies/python" }]
        },
        'laravel-php': {
            name: "Laravel / PHP Development | Coreway Solution",
            description: "Enterprise web applications with Laravel framework, robust architecture, and scalable solutions.",
            serviceType: "Laravel Development",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Technologies", url: "/technologies" }, { name: "Laravel / PHP", url: "/technologies/laravel-php" }]
        },
        'databases': {
            name: "Database Solutions | Coreway Solution",
            description: "Reliable data storage with PostgreSQL for relational data and MongoDB for flexible document storage.",
            serviceType: "Database Development",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Technologies", url: "/technologies" }, { name: "Databases", url: "/technologies/databases" }]
        },
        'cloud-storage': {
            name: "Cloud Storage Solutions | Coreway Solution",
            description: "Multi-cloud storage solutions with AWS S3, Wasabi, MinIO, and Cloudflare R2 for optimal cost and performance.",
            serviceType: "Cloud Storage Services",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Technologies", url: "/technologies" }, { name: "Cloud Storage", url: "/technologies/cloud-storage" }]
        },
        's3-process': {
            name: "S3 Operations & Optimization | Coreway Solution",
            description: "Advanced S3 operations including lifecycle management, versioning, replication, and cost optimization.",
            serviceType: "S3 Management Services",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Technologies", url: "/technologies" }, { name: "S3 Process", url: "/technologies/s3-process" }]
        },
        'iot-protocols': {
            name: "IoT Protocols & Connectivity | Coreway Solution",
            description: "Real-time communication with MQTT, WebSockets, and IoT protocols for connected device ecosystems.",
            serviceType: "IoT Connectivity Solutions",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Technologies", url: "/technologies" }, { name: "IoT Protocols", url: "/technologies/iot-protocols" }]
        },
        'security-tools': {
            name: "Security Tools & Services | Coreway Solution",
            description: "Comprehensive security with intrusion prevention, firewall management, and collaborative threat intelligence.",
            serviceType: "Security Consulting",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Technologies", url: "/technologies" }, { name: "Security Tools", url: "/technologies/security-tools" }]
        }
    };
    return tech[slug] || null;
}

function getIndustryData(slug: string) {
    const industries: Record<string, any> = {
        'ecommerce-stores': {
            name: "eCommerce Industry Solutions | Coreway Solution",
            description: "Build scalable online stores with headless commerce, virtual showrooms, and omnichannel experiences.",
            serviceType: "eCommerce Solutions",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Industries", url: "/industries" }, { name: "eCommerce", url: "/industries/ecommerce-stores" }]
        },
        'automotive': {
            name: "Automotive Industry Solutions | Coreway Solution",
            description: "Digital solutions for automotive industry including connected vehicles, dealer management, and customer portals.",
            serviceType: "Automotive Technology",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Industries", url: "/industries" }, { name: "Automotive", url: "/industries/automotive" }]
        },
        'manufacturing-iot': {
            name: "Manufacturing & IoT Solutions | Coreway Solution",
            description: "Smart manufacturing solutions with IoT integration, predictive maintenance, and real-time monitoring.",
            serviceType: "Manufacturing IoT",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Industries", url: "/industries" }, { name: "Manufacturing", url: "/industries/manufacturing-iot" }]
        },
        'food-beverage': {
            name: "Food & Beverage Industry Solutions | Coreway Solution",
            description: "Digital transformation for food industry with supply chain optimization, quality tracking, and eCommerce platforms.",
            serviceType: "Food & Beverage Tech",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Industries", url: "/industries" }, { name: "Food & Beverage", url: "/industries/food-beverage" }]
        },
        'furniture-home-decor': {
            name: "Furniture & Home Decor Solutions | Coreway Solution",
            description: "Virtual showrooms, AR visualization, and seamless eCommerce experiences for furniture retailers.",
            serviceType: "Furniture eCommerce",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Industries", url: "/industries" }, { name: "Furniture & Home Decor", url: "/industries/furniture-home-decor" }]
        },
        'fashion-apparel': {
            name: "Fashion & Apparel Industry Solutions | Coreway Solution",
            description: "Modern retail solutions with virtual try-on, inventory management, and personalized shopping experiences.",
            serviceType: "Fashion Retail Tech",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Industries", url: "/industries" }, { name: "Fashion & Apparel", url: "/industries/fashion-apparel" }]
        },
        'pharmaceuticals-healthcare': {
            name: "Healthcare & Pharma Industry Solutions | Coreway Solution",
            description: "Compliant healthcare solutions with patient portals, telemedicine, and secure data management.",
            serviceType: "Healthcare Technology",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Industries", url: "/industries" }, { name: "Healthcare & Pharma", url: "/industries/pharmaceuticals-healthcare" }]
        }
    };
    return industries[slug] || null;
}

function getDedicatedDevData(slug: string) {
    const dev: Record<string, any> = {
        'hire-developers': {
            name: "Hire Dedicated Developers | Coreway Solution",
            description: "Get access to skilled developers who work exclusively for you. Scale your team up or down based on your needs with complete flexibility.",
            serviceType: "Staff Augmentation",
            breadcrumbs: [{ name: "Home", url: "/" }, { name: "Dedicated Developers", url: "/dedicated-developers" }, { name: "Hire Developers", url: "/dedicated-developers/hire-developers" }]
        }
    };
    return dev[slug] || null;
}
