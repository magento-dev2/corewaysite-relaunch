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
  }},
  canonical: "https://www.corewaysolution.com{url_path}",
}};

'''

def get_page_metadata(file_path):
    """Determine metadata based on file path"""
    path = file_path.replace('\\\\', '/').replace('app/', '')
    
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
    
    # Default fallback
    page_name = path.replace('/', ' ').replace('-', ' ').replace('page.tsx', '').strip().title()
    url = '/' + path.replace('\\\\page.tsx', '').replace('page.tsx', '')
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
