"""
Script to add SEO metadata to all Next.js pages
"""
import os
import re

# Metadata templates for different page types
METADATA_TEMPLATES = {
    "home": {
        "title": "Coreway Solution | AI Development, Automation & Digital Transformation",
        "description": "Transform your business with AI-powered solutions, custom software development, and workflow automation. Expert team delivering cutting-edge technology solutions worldwide.",
        "keywords": "AI development, workflow automation, custom software development, digital transformation, AI consulting, software solutions"
    },
    "contact": {
        "title": "Contact Us | Get in Touch with Coreway Solution",
        "description": "Contact Coreway Solution for AI development, automation, and digital transformation services. Get expert consultation for your business needs.",
        "keywords": "contact coreway, business inquiry, AI consultation, software development contact, get quote"
    },
    "about": {
        "title": "About Coreway Solution | Leading AI & Software Development Company",
        "description": "Learn about Coreway Solution - a leading provider of AI development, automation, and digital transformation services with expert teams worldwide.",
        "keywords": "about coreway, AI company, software development company, digital transformation, technology solutions"
    },
    "careers": {
        "title": "Careers at Coreway | Join Our Team of Innovators",
        "description": "Join Coreway Solution and work on cutting-edge AI and software development projects. Explore career opportunities with our global team.",
        "keywords": "careers, jobs, AI developer jobs, software engineer careers, remote work, technology jobs"
    },
    "portfolio": {
        "title": "Our Portfolio | Successful Projects by Coreway Solution",
        "description": "Explore our portfolio of successful AI, automation, and software development projects. See how we've helped businesses transform digitally.",
        "keywords": "portfolio, case studies, successful projects, AI projects, software development projects"
    }
}

# Industry-specific metadata
INDUSTRY_META = {
    "automotive": ("Automotive Industry Solutions | AI & IoT Development", 
                   "Transform automotive operations with AI-powered solutions, IoT integration, and digital transformation services.", 
                   "automotive software, automotive AI, IoT automotive, connected vehicles, automotive digital transformation"),
    "ecommerce-stores": ("E-Commerce Solutions | Online Store Development & Automation", 
                         "Build and scale your e-commerce business with custom development, AI-powered recommendations, and automation solutions.", 
                         "ecommerce development, online store, ecommerce automation, AI recommendations, digital commerce"),
    "fashion-apparel": ("Fashion & Apparel Solutions | Digital Transformation for Fashion Industry", 
                        "Modernize fashion retail with AI-powered inventory, personalization, and omnichannel solutions.", 
                        "fashion technology, apparel software, fashion AI, retail technology, fashion digital transformation"),
    "food-beverage": ("Food & Beverage Solutions | Restaurant & F&B Technology", 
                      "Streamline food service operations with AI, automation, and digital solutions for restaurants and F&B businesses.", 
                      "restaurant technology, food service software, F&B automation, restaurant AI, food delivery solutions"),
    "furniture-home-decor": ("Furniture & Home Decor Solutions | Retail Technology", 
                             "Transform furniture retail with AR visualization, inventory management, and e-commerce solutions.", 
                             "furniture technology, home decor software, AR furniture, retail automation, furniture ecommerce"),
    "manufacturing-iot": ("Manufacturing & IoT Solutions | Smart Factory Technology", 
                          "Implement Industry 4.0 with IoT sensors, AI analytics, and automation for smart manufacturing.", 
                          "manufacturing IoT, smart factory, Industry 4.0, manufacturing automation, IoT sensors"),
    "pharmaceuticals-healthcare": ("Healthcare & Pharma Solutions | Medical Technology Development", 
                                   "Develop HIPAA-compliant healthcare solutions with AI diagnostics, patient management, and automation.", 
                                   "healthcare technology, pharma software, medical AI, HIPAA compliance, healthcare automation")
}

# Solution-specific metadata
SOLUTION_META = {
    "ai-consulting": ("AI Consulting Services | Strategic AI Implementation",
                      "Expert AI consulting to transform your business with machine learning, deep learning, and intelligent automation solutions.",
                      "AI consulting, machine learning consulting, AI strategy, AI implementation, AI transformation"),
    "ai-integration-services": ("AI Integration Services | Seamless AI Implementation",
                                "Integrate cutting-edge AI capabilities into your existing systems with our expert AI integration services.",
                                "AI integration, AI implementation, AI services, machine learning integration, AI solutions"),
    "ai-powered-application-platforms": ("AI-Powered Application Platforms | Intelligent Software Solutions",
                                         "Build intelligent applications with AI-powered platforms that deliver exceptional user experiences and business value.",
                                         "AI applications, AI platforms, intelligent software, AI-powered apps, machine learning platforms"),
    "custom-api-systems-integration": ("Custom API & Systems Integration | Connect Your Tech Stack",
                                       "Seamlessly integrate your systems with custom APIs, middleware, and integration solutions for unified operations.",
                                       "API development, systems integration, custom API, API integration, middleware solutions"),
    "digital-commerce-transformation": ("Digital Commerce Transformation | Modern E-commerce Solutions",
                                        "Transform your commerce experience with headless, AI-driven, and composable commerce solutions.",
                                        "digital commerce, ecommerce transformation, headless commerce, composable commerce, AI commerce"),
    "iot-application-development": ("IoT Application Development | Connected Device Solutions",
                                    "Build scalable IoT applications that connect devices, collect data, and deliver real-time insights.",
                                    "IoT development, IoT applications, connected devices, IoT solutions, smart devices"),
    "replatforming-migration": ("Replatforming & Migration Services | Seamless System Modernization",
                                "Modernize your technology stack with zero-downtime migration and replatforming services.",
                                "replatforming, system migration, platform migration, cloud migration, legacy modernization"),
    "saas-infrastructure-devops": ("SaaS Infrastructure & DevOps | Scalable Cloud Solutions",
                                   "Build and scale SaaS infrastructure with modern DevOps practices, CI/CD, and cloud-native architecture.",
                                   "SaaS infrastructure, DevOps services, cloud infrastructure, CI/CD, cloud native"),
    "ai-agent": ("AI Agent Solutions | Intelligent Automation Agents",
                 "Deploy intelligent AI agents that automate complex workflows and deliver autonomous decision-making capabilities.",
                 "AI agents, intelligent agents, AI automation, autonomous AI, AI workflows"),
    "ai-chat-with-pdf": ("AI Chat with PDF | Document Intelligence Solutions",
                         "Extract insights from PDFs using AI-powered chat interfaces and intelligent document processing.",
                         "AI PDF chat, PDF AI, document intelligence, PDF processing, AI document analysis"),
    "DBDashbot": ("Database Dashboard Bot | Intelligent Data Visualization",
                  "Transform database queries into intelligent dashboards with AI-powered analytics and visualization.",
                  "database dashboard, AI analytics, data visualization, database bot, intelligent dashboards"),
    "ugs-ads": ("User-Generated Content & Ads | AI-Powered Marketing Solutions",
                "Leverage AI to create, optimize, and manage user-generated content and advertising campaigns.",
                "UGC, AI advertising, content generation, AI marketing, automated ads"),
}

# AI/Data service metadata
AI_DATA_META = {
    "aws-s3-optimization": ("AWS S3 Optimization | Cloud Storage Performance",
                            "Optimize AWS S3 storage costs and performance with intelligent data management and automation.",
                            "AWS S3, S3 optimization, cloud storage, AWS optimization, storage performance"),
    "custom-dashboards": ("Custom Dashboards | Data Visualization Solutions",
                          "Build custom dashboards and data visualization solutions that deliver actionable business insights.",
                          "custom dashboards, data visualization, business intelligence, analytics dashboards, BI solutions"),
    "dataset-management-delivery": ("Dataset Management & Delivery | AI Data Pipeline Solutions",
                                    "Manage and deliver datasets at scale with automated pipelines, quality control, and versioning.",
                                    "dataset management, data pipeline, data delivery, ML datasets, data versioning"),
    "gpt-automation": ("GPT Automation | AI-Powered Workflow Automation",
                       "Automate business processes with GPT-powered AI solutions for content generation, analysis, and decision-making.",
                       "GPT automation, AI automation, GPT-4, AI workflows, content automation"),
    "infrastructure-security-ai": ("Infrastructure Security Using AI | Intelligent Threat Detection",
                                   "Protect your infrastructure with AI-powered security monitoring, threat detection, and automated response.",
                                   "AI security, infrastructure security, threat detection, AI cybersecurity, security automation"),
    "metadata-extraction-ai": ("Metadata Extraction Using AI | Intelligent Document Processing",
                               "Extract and classify metadata from documents, images, and videos using GPT-4 and Vision AI.",
                               "metadata extraction, AI extraction, document processing, Vision AI, GPT-4 extraction"),
}

# Technology-specific metadata
TECHNOLOGY_META = {
    "cloud-storage": ("Cloud Storage Solutions | Scalable Data Storage",
                      "Implement scalable cloud storage solutions with AWS, Azure, and Google Cloud for your data needs.",
                      "cloud storage, AWS storage, Azure storage, Google Cloud storage, data storage"),
    "databases": ("Database Solutions | SQL & NoSQL Database Services",
                  "Expert database design, optimization, and management for SQL, NoSQL, and distributed databases.",
                  "database solutions, SQL, NoSQL, database design, database optimization"),
    "iot-protocols": ("IoT Protocols & Communication | Connected Device Standards",
                      "Implement IoT protocols including MQTT, CoAP, and LoRaWAN for reliable device communication.",
                      "IoT protocols, MQTT, CoAP, LoRaWAN, IoT communication"),
    "laravel-php": ("Laravel & PHP Development | Modern Web Applications",
                    "Build robust web applications with Laravel framework and modern PHP development practices.",
                    "Laravel development, PHP development, Laravel framework, PHP web apps, Laravel services"),
    "nodejs": ("Node.js Development | Scalable JavaScript Applications",
               "Develop high-performance, scalable applications with Node.js and modern JavaScript frameworks.",
               "Node.js development, JavaScript backend, Node.js services, scalable Node.js, Node.js apps"),
    "python": ("Python Development | AI & Data Science Solutions",
               "Build AI, machine learning, and data science solutions with Python and modern frameworks.",
               "Python development, Python AI, Python ML, data science, Python services"),
    "react": ("React Development | Modern Frontend Applications",
              "Create dynamic, responsive web applications with React and modern frontend technologies.",
              "React development, React apps, frontend development, React services, React solutions"),
    "s3-process": ("S3 Processing Solutions | Automated Cloud Storage Workflows",
                   "Automate S3 data processing with serverless functions, ETL pipelines, and intelligent workflows.",
                   "S3 processing, AWS Lambda, S3 automation, cloud processing, serverless S3"),
    "security-tools": ("Security Tools & Solutions | Cybersecurity Infrastructure",
                       "Implement comprehensive security tools and solutions to protect your infrastructure and data.",
                       "security tools, cybersecurity, security solutions, security infrastructure, security services"),
}

def create_metadata_export(title, description, keywords, url_path):
    """Generate metadata export code"""
    return f'''
export const metadata = {{
  title: "{title}",
  description: "{description}",
  keywords: "{keywords}",
  openGraph: {{
    title: "{title}",
    description: "{description}",
    type: "website",
    url: "https://www.corewaysolution.com{url_path}",
    images: [{{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }}]
  }},
  twitter: {{
    card: "summary_large_image",
    title: "{title}",
    description: "{description}",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  }},
  alternates: {{
    canonical: "https://www.corewaysolution.com{url_path}"
  }}
}};

'''

def get_page_metadata(file_path):
    """Determine metadata based on file path"""
    path = file_path.replace('\\', '/').replace('app/', '')
    
    # Home page
    if path == 'page.tsx':
        meta = METADATA_TEMPLATES["home"]
        return meta["title"], meta["description"], meta["keywords"], "/"
    
    # Contact page
    if 'contact' in path:
        meta = METADATA_TEMPLATES["contact"]
        return meta["title"], meta["description"], meta["keywords"], "/contact"
    
    # About pages
    if 'about' in path:
        if 'company-overview' in path:
            return ("Company Overview | About Coreway Solution", 
                    "Learn about Coreway Solution's mission, vision, and values. Discover our journey in AI and software development.",
                    "company overview, about us, coreway mission, company values",
                    "/about/company-overview")
        elif 'why-coreway' in path:
            return ("Why Choose Coreway | Our Competitive Advantages",
                    "Discover why businesses choose Coreway Solution for AI development, automation, and digital transformation services.",
                    "why coreway, competitive advantages, why choose us, benefits",
                    "/about/why-coreway")
        else:
            meta = METADATA_TEMPLATES["about"]
            return meta["title"], meta["description"], meta["keywords"], "/about"
    
    # Careers
    if 'careers' in path:
        meta = METADATA_TEMPLATES["careers"]
        return meta["title"], meta["description"], meta["keywords"], "/careers"
    
    # Portfolio
    if 'portfolio' in path:
        meta = METADATA_TEMPLATES["portfolio"]
        return meta["title"], meta["description"], meta["keywords"], "/portfolio"
    
    # Industries
    for industry, (title, desc, keywords) in INDUSTRY_META.items():
        if industry in path:
            return (f"{title} | Coreway", desc, keywords, f"/industries/{industry}")
    
    # Solutions
    for solution, (title, desc, keywords) in SOLUTION_META.items():
        if solution in path:
            return (f"{title} | Coreway", desc, keywords, f"/solution/{solution}")
    
    # AI/Data services
    for service, (title, desc, keywords) in AI_DATA_META.items():
        if service in path:
            return (f"{title} | Coreway", desc, keywords, f"/ai-data/{service}")
    
    # Technologies
    for tech, (title, desc, keywords) in TECHNOLOGY_META.items():
        if tech in path:
            return (f"{title} | Coreway", desc, keywords, f"/technologies/{tech}")
    
    # Special pages
    if 'dedicated-developers' in path:
        return ("Dedicated Developers | Hire Expert Development Teams | Coreway",
                "Hire dedicated developers for your projects. Expert teams in AI, web, mobile, and cloud development.",
                "dedicated developers, hire developers, development team, remote developers, tech talent",
                "/dedicated-developers")
    
    if 'privacy-policy' in path:
        return ("Privacy Policy | Coreway Solution",
                "Read our privacy policy to understand how we collect, use, and protect your personal information.",
                "privacy policy, data protection, privacy, GDPR, data security",
                "/privacy-policy")
    
    if 'cookie-policy' in path:
        return ("Cookie Policy | Coreway Solution",
                "Learn about our cookie policy and how we use cookies to improve your browsing experience.",
                "cookie policy, cookies, website cookies, tracking, privacy",
                "/cookie-policy")
    
    if 'gdpr-compliance' in path:
        return ("GDPR Compliance | Data Protection | Coreway Solution",
                "Learn about our GDPR compliance measures and commitment to protecting your data privacy.",
                "GDPR compliance, data protection, GDPR, privacy compliance, data security",
                "/gdpr-compliance")
    
    if 'terms-of-service' in path:
        return ("Terms of Service | Coreway Solution",
                "Read our terms of service to understand the rules and regulations for using our services.",
                "terms of service, terms and conditions, legal, service agreement",
                "/terms-of-service")
    
    if 'api-reference' in path:
        return ("API Reference | Developer Documentation | Coreway Solution",
                "Comprehensive API reference and documentation for developers integrating with Coreway services.",
                "API reference, API documentation, developer docs, API guide, integration",
                "/api-reference")
    
    if 'documentation' in path:
        return ("Documentation | Developer Guides | Coreway Solution",
                "Complete documentation and guides for using Coreway's services and APIs.",
                "documentation, developer guides, docs, technical documentation, guides",
                "/documentation")
    
    if 'community' in path:
        return ("Community | Join Coreway Developer Community",
                "Join our developer community to connect, learn, and collaborate with other developers.",
                "developer community, community, developers, collaboration, networking",
                "/community")
    
    if 'partners' in path:
        return ("Partners | Technology Partners | Coreway Solution",
                "Explore our technology partnerships and collaboration opportunities.",
                "partners, technology partners, partnerships, collaboration, alliances",
                "/partners")
    
    if 'press-kit' in path:
        return ("Press Kit | Media Resources | Coreway Solution",
                "Download our press kit with logos, brand assets, and company information for media use.",
                "press kit, media kit, brand assets, logos, press resources",
                "/press-kit")
    
    if 'sitemap' in path:
        return ("Sitemap | Coreway Solution",
                "Browse our complete sitemap to find all pages and resources on our website.",
                "sitemap, site map, website structure, navigation",
                "/sitemap")
    
    # Default fallback
    page_name = path.replace('/', ' ').replace('-', ' ').replace('page.tsx', '').strip().title()
    url = '/' + path.replace('\\page.tsx', '').replace('page.tsx', '')
    return (
        f"{page_name} | Coreway Solution",
        f"Explore {page_name} services and solutions by Coreway Solution. Expert AI development and digital transformation.",
        f"{page_name.lower()}, coreway solution, AI development, automation",
        url
    )


def add_metadata_to_file(file_path):
    """Add metadata to a page file or create layout.tsx if client component"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if already has metadata
        if 'export const metadata' in content:
            print(f"✓ Skipped (already has metadata): {file_path}")
            return False

        # Get metadata info
        title, description, keywords, url_path = get_page_metadata(file_path)
        metadata_code = create_metadata_export(title, description, keywords, url_path)

        # Check if client component
        is_client_component = 'use client' in content or "'use client'" in content or '"use client"' in content
        
        if is_client_component:
            # For client components, we must put metadata in layout.tsx
            dir_path = os.path.dirname(file_path)
            layout_path = os.path.join(dir_path, 'layout.tsx')
            
            if os.path.exists(layout_path):
                # If layout exists, check if it has metadata
                with open(layout_path, 'r', encoding='utf-8') as f:
                    layout_content = f.read()
                
                if 'export const metadata' in layout_content:
                    print(f"✓ Skipped (layout already has metadata): {layout_path}")
                    return False
                else:
                    # Add metadata to existing layout
                    # This is complex to do safely with regex, so we'll append it before the component
                    # For now, let's just log it as needing manual attention to avoid breaking existing layouts
                    print(f"! Manual attention needed: {layout_path} exists but needs metadata")
                    return False
            else:
                # Create new layout.tsx
                layout_content = f'''import type {{ Metadata }} from "next";

{metadata_code.strip()}

export default function Layout({{
  children,
}}: {{
  children: React.ReactNode;
}}) {{
  return <div className="w-full">{{children}}</div>;
}}
'''
                with open(layout_path, 'w', encoding='utf-8') as f:
                    f.write(layout_content)
                print(f"✓ Created layout.tsx with metadata: {layout_path}")
                return True
        else:
            # Server component - add directly to page.tsx
            lines = content.split('\\n')
            insert_index = 0
            
            # Find insertion point (after imports)
            last_import_idx = -1
            for i, line in enumerate(lines):
                if line.strip().startswith('import '):
                    last_import_idx = i
            
            insert_index = last_import_idx + 1
            
            # Insert metadata
            lines.insert(insert_index, metadata_code)
            new_content = '\\n'.join(lines)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print(f"✓ Added metadata to page: {file_path}")
            return True
    
    except Exception as e:
        print(f"✗ Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all pages"""
    app_dir = 'app'
    pages_processed = 0
    pages_skipped = 0
    
    print("Starting SEO metadata addition...\\n")
    
    for root, dirs, files in os.walk(app_dir):
        for file in files:
            if file == 'page.tsx':
                file_path = os.path.join(root, file)
                if add_metadata_to_file(file_path):
                    pages_processed += 1
                else:
                    pages_skipped += 1
    
    print(f"\\n=== Summary ===")
    print(f"Pages processed: {pages_processed}")
    print(f"Pages skipped: {pages_skipped}")
    print(f"Total: {pages_processed + pages_skipped}")

if __name__ == "__main__":
    main()
