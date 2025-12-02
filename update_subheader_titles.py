import os
import re

# Complete mapping of page paths to their specific titles
PAGE_TITLES = {
    # Solution pages
    'solution/ai-consulting': 'AI Consulting',
    'solution/ai-chat-with-pdf': 'AI Chat with PDF',
    'solution/ai-integration-services': 'AI Integration Services',
    'solution/ai-powered-application-platforms': 'AI-Powered Application Platforms',
    'solution/custom-api-systems-integration': 'Custom API & Systems Integration',
    'solution/DBDashbot': 'DB Dashbot',
    'solution/digital-commerce-transformation': 'Digital Commerce Transformation',
    'solution/infrastructure-security-ai': 'Infrastructure Security AI',
    'solution/iot-application-development': 'IoT Application Development',
    'solution/product-development-forstartups': 'Product Development for Startups',
    'solution/replatforming-migration': 'Replatforming & Migration',
    'solution/saas-infrastructure-devops': 'SaaS Infrastructure & DevOps',
    
    # AI/Data pages
    'ai-data/metadata-extraction-ai': 'Metadata Extraction AI',
    'ai-data/aws-s3-optimization': 'AWS S3 Optimization',
    'ai-data/custom-dashboards': 'Custom Dashboards',
    'ai-data/dataset-management-delivery': 'Dataset Management & Delivery',
    'ai-data/gpt-automation': 'GPT Automation',
    'ai-data/infrastructure-security-ai': 'Infrastructure Security AI',
    
    # Industry pages
    'industries/fashion-apparel': 'Fashion & Apparel',
    'industries/manufacturing-iot': 'Manufacturing & IoT',
    'industries/pharmaceuticals-healthcare': 'Pharmaceuticals & Healthcare',
    'industries/ecommerce-stores': 'E-Commerce Stores',
    'industries/automotive': 'Automotive',
    'industries/food-beverage': 'Food & Beverage',
    'industries/furniture-home-decor': 'Furniture & Home Decor',
    
    # Technology pages
    'technologies/nodejs': 'Node.js Development',
    'technologies/cloud-storage': 'Cloud Storage',
    'technologies/databases': 'Databases',
    'technologies/iot-protocols': 'IoT Protocols',
    'technologies/laravel-php': 'Laravel / PHP',
    'technologies/python': 'Python Development',
    'technologies/react': 'React Development',
    'technologies/s3-process': 'S3 Process',
    'technologies/security-tools': 'Security Tools',
    
    # About pages
    'about/company-overview': 'Company Overview',
    'about/why-coreway': 'Why Coreway',
}

def update_subheader_title(file_path, new_title):
    """Update SubHeader title in a page"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern to match SubHeader with title prop
    pattern = r'<SubHeader\s+title="[^"]*"'
    replacement = f'<SubHeader title="{new_title}"'
    
    if re.search(pattern, content):
        new_content = re.sub(pattern, replacement, content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        return True
    
    return False

def main():
    base_path = r'c:\Users\NIKHIL\Desktop\coreway-new\app'
    
    print("=" * 80)
    print("UPDATING ALL SUBHEADER TITLES TO PAGE-SPECIFIC NAMES")
    print("=" * 80)
    
    updated_count = 0
    not_found_count = 0
    skipped_count = 0
    
    for rel_path, title in sorted(PAGE_TITLES.items()):
        full_path = os.path.join(base_path, rel_path, 'page.tsx')
        
        if not os.path.exists(full_path):
            print(f"⚠️  File not found: {rel_path}")
            not_found_count += 1
            continue
        
        if update_subheader_title(full_path, title):
            print(f"✅ {rel_path:<50} → '{title}'")
            updated_count += 1
        else:
            print(f"⏭️  {rel_path:<50} (no SubHeader)")
            skipped_count += 1
    
    print(f"\n{'='*80}")
    print("SUMMARY")
    print(f"{'='*80}")
    print(f"✅ Updated: {updated_count} pages")
    print(f"⏭️  Skipped: {skipped_count} pages (no SubHeader)")
    print(f"⚠️  Not found: {not_found_count} pages")
    print(f"\n🎉 All pages now show their specific names in SubHeader!")

if __name__ == "__main__":
    main()
