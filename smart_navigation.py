import os
import re
import json

def analyze_all_sections_on_page(file_path):
    """Find all potential sections on a page"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all div IDs
    section_ids = re.findall(r'<div\s+id="([^"]+)"', content)
    
    # Also look for common component names that could be sections
    potential_sections = {
        'overview': ['Overview', 'Hero'],
        'features': ['Features', 'Capabilities'],
        'process': ['Process', 'Workflow'],
        'benefits': ['Benefits', 'Advantages'],
        'technologies': ['Technologies', 'TechStack'],
        'use-cases': ['UseCases', 'Cases'],
        'case-studies': ['CaseStudies'],
        'why-coreway': ['WhyCoreway'],
        'story': ['Story', 'About'],
        'automation': ['Automation'],
        'expertise': ['Expertise'],
    }
    
    # Check which components exist
    found_components = []
    for section_id, component_names in potential_sections.items():
        for comp_name in component_names:
            if comp_name in content and section_id not in section_ids:
                found_components.append((section_id, comp_name))
                break
    
    return {
        'existing_ids': section_ids,
        'potential_sections': found_components
    }

def create_smart_navigation(file_path):
    """Create smart 4-item navigation based on what exists"""
    sections = analyze_all_sections_on_page(file_path)
    existing = sections['existing_ids']
    potential = [s[0] for s in sections['potential_sections']]
    
    # Priority order for sections
    priority = ['overview', 'features', 'process', 'benefits', 'technologies', 'use-cases', 'why-coreway', 'faq']
    
    # Label mapping
    labels = {
        'overview': 'Overview',
        'features': 'Capabilities',
        'process': 'Our Process',
        'benefits': 'Benefits',
        'technologies': 'Technologies',
        'use-cases': 'Use Cases',
        'case-studies': 'Case Studies',
        'why-coreway': 'Why Coreway',
        'faq': 'FAQ',
        'automation': 'Automation',
        'expertise': 'Expertise',
    }
    
    # Combine existing and potential
    all_available = list(set(existing + potential))
    
    # Select top 4 based on priority
    selected = []
    for section in priority:
        if section in all_available and len(selected) < 4:
            selected.append({
                'label': labels.get(section, section.title()),
                'sectionId': section,
                'exists': section in existing,
                'needs_wrapper': section in potential
            })
    
    # If we don't have 4 yet, add FAQ if it exists
    if len(selected) < 4 and 'faq' in all_available:
        selected.append({
            'label': 'FAQ',
            'sectionId': 'faq',
            'exists': 'faq' in existing,
            'needs_wrapper': False
        })
    
    return selected

def main():
    base_path = r'c:\Users\NIKHIL\Desktop\coreway-new\app'
    
    # Load pages that need fixing
    with open('subheader_customization_report.json', 'r', encoding='utf-8') as f:
        pages_data = json.load(f)
    
    print("=" * 80)
    print("SMART NAVIGATION RECOMMENDATIONS")
    print("=" * 80)
    
    recommendations = []
    
    for page in pages_data:
        if not page['missing']:
            continue  # Page already has all 4 sections
        
        smart_nav = create_smart_navigation(page['path'])
        
        rel_path = page['path'].replace(base_path, '').replace('\\', '/')
        
        print(f"\n📄 {rel_path}")
        print(f"   Currently missing: {', '.join(page['missing'])}")
        print(f"   Recommended navigation:")
        for item in smart_nav:
            status = '✅' if item['exists'] else '⚠️ needs wrapper'
            print(f"      {status} {item['label']} → #{item['sectionId']}")
        
        recommendations.append({
            'path': page['path'],
            'rel_path': rel_path,
            'current_missing': page['missing'],
            'recommended': smart_nav
        })
    
    # Save recommendations
    with open('smart_navigation_recommendations.json', 'w', encoding='utf-8') as f:
        json.dump(recommendations, f, indent=2)
    
    print(f"\n{'='*80}")
    print(f"✅ Saved to: smart_navigation_recommendations.json")
    print(f"{'='*80}")

if __name__ == "__main__":
    main()
