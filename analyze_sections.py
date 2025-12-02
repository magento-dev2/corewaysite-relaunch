import os
import re
import json

def analyze_page_sections(file_path):
    """Analyze which sections actually exist on a page"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    result = {
        'path': file_path,
        'has_subheader': False,
        'current_items': [],
        'existing_sections': [],
        'recommended_items': []
    }
    
    # Check if SubHeader exists
    if 'SubHeader' not in content:
        return result
    
    result['has_subheader'] = True
    
    # Extract current subHeaderItems
    items_match = re.search(r'const subHeaderItems = \[(.*?)\];', content, re.DOTALL)
    if items_match:
        items_str = items_match.group(1)
        labels = re.findall(r'label:\s*"([^"]+)"', items_str)
        sections = re.findall(r'sectionId:\s*"([^"]+)"', items_str)
        result['current_items'] = list(zip(labels, sections))
    
    # Find all section IDs in the page
    section_ids = re.findall(r'<div\s+id="([^"]+)"', content)
    result['existing_sections'] = section_ids
    
    # Determine recommended items based on what exists
    # Common section mappings
    section_map = {
        'overview': 'Overview',
        'features': 'Capabilities',
        'process': 'Our Process',
        'faq': 'FAQ',
        'benefits': 'Benefits',
        'technologies': 'Technologies',
        'use-cases': 'Use Cases',
        'case-studies': 'Case Studies'
    }
    
    for section_id in section_ids:
        if section_id in section_map:
            result['recommended_items'].append({
                'label': section_map[section_id],
                'sectionId': section_id
            })
    
    return result

def generate_fix_recommendations():
    """Generate recommendations for fixing subHeaderItems"""
    base_path = r'c:\Users\NIKHIL\Desktop\coreway-new\app'
    
    categories = ['solution', 'ai-data', 'industries', 'technologies']
    
    all_results = {}
    pages_to_fix = []
    
    for category in categories:
        category_path = os.path.join(base_path, category)
        if not os.path.exists(category_path):
            continue
        
        all_results[category] = []
        
        for root, dirs, files in os.walk(category_path):
            if 'page.tsx' in files:
                page_path = os.path.join(root, 'page.tsx')
                
                # Skip dynamic routes
                if '[' in page_path:
                    continue
                
                result = analyze_page_sections(page_path)
                if not result['has_subheader']:
                    continue
                
                all_results[category].append(result)
                
                # Check if current items match existing sections
                current_section_ids = [item[1] for item in result['current_items']]
                existing_section_ids = result['existing_sections']
                
                # Find mismatches
                missing_in_page = [s for s in current_section_ids if s not in existing_section_ids]
                
                if missing_in_page:
                    pages_to_fix.append({
                        'path': page_path,
                        'current_items': result['current_items'],
                        'existing_sections': existing_section_ids,
                        'missing': missing_in_page,
                        'recommended': result['recommended_items']
                    })
    
    # Print report
    print("=" * 80)
    print("SUBHEADER NAVIGATION CUSTOMIZATION REPORT")
    print("=" * 80)
    
    if not pages_to_fix:
        print("\n✅ All pages have matching SubHeader items and sections!")
        return
    
    print(f"\n📋 Found {len(pages_to_fix)} pages with mismatched navigation items\n")
    
    for page in pages_to_fix:
        rel_path = page['path'].replace(base_path, '').replace('\\', '/')
        print(f"\n{'='*80}")
        print(f"📄 {rel_path}")
        print(f"{'='*80}")
        
        print("\n❌ Declared but missing on page:")
        for missing in page['missing']:
            label = next((item[0] for item in page['current_items'] if item[1] == missing), missing)
            print(f"   - {label} (#{missing})")
        
        print("\n✅ Sections that exist:")
        for section in page['existing_sections']:
            print(f"   - #{section}")
        
        print("\n💡 Recommended subHeaderItems:")
        print("   const subHeaderItems = [")
        for item in page['recommended']:
            print(f'     {{ label: "{item["label"]}", sectionId: "{item["sectionId"]}" }},')
        print("   ];")
    
    # Save to JSON
    with open('subheader_customization_report.json', 'w', encoding='utf-8') as f:
        json.dump(pages_to_fix, f, indent=2)
    
    print(f"\n{'='*80}")
    print(f"✅ Detailed report saved to: subheader_customization_report.json")
    print(f"{'='*80}")

if __name__ == "__main__":
    generate_fix_recommendations()
