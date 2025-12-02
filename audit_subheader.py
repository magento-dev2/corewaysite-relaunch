import os
import re
import json

def analyze_page(file_path):
    """Analyze a page.tsx file for SubHeader usage and section IDs"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    result = {
        'path': file_path,
        'has_subheader': False,
        'subheader_title': None,
        'subheader_items': [],
        'section_ids': [],
        'missing_ids': [],
        'issues': []
    }
    
    # Check if SubHeader is imported
    if 'import SubHeader from' in content or 'import { SubHeader }' in content:
        result['has_subheader'] = True
        
        # Extract SubHeader title
        title_match = re.search(r'<SubHeader\s+title="([^"]+)"', content)
        if title_match:
            result['subheader_title'] = title_match.group(1)
            if title_match.group(1) == "Home":
                result['issues'].append("SubHeader title is hardcoded as 'Home'")
        
        # Extract subHeaderItems
        items_match = re.search(r'const subHeaderItems = \[(.*?)\];', content, re.DOTALL)
        if items_match:
            items_str = items_match.group(1)
            # Extract labels and sectionIds
            label_matches = re.findall(r'label:\s*"([^"]+)"', items_str)
            section_matches = re.findall(r'sectionId:\s*"([^"]+)"', items_str)
            result['subheader_items'] = list(zip(label_matches, section_matches))
    else:
        result['issues'].append("No SubHeader component found")
    
    # Find all section IDs in the page
    section_id_matches = re.findall(r'<div\s+id="([^"]+)"', content)
    result['section_ids'] = section_id_matches
    
    # Check for missing section IDs
    if result['has_subheader']:
        declared_sections = [item[1] for item in result['subheader_items']]
        for section in declared_sections:
            if section not in result['section_ids']:
                result['missing_ids'].append(section)
    
    # Check for common sections that should be wrapped
    common_sections = ['overview', 'features', 'process', 'faq', 'benefits', 'capabilities']
    for section in common_sections:
        # Check if component exists but not wrapped in div with id
        if section.lower() in content.lower() and section not in result['section_ids']:
            if result['has_subheader']:
                # Only flag if SubHeader exists but section is not in items
                declared_sections = [item[1] for item in result['subheader_items']]
                if section not in declared_sections:
                    result['issues'].append(f"Potential unwrapped section: {section}")
    
    return result

def main():
    base_path = r'c:\Users\NIKHIL\Desktop\coreway-new\app'
    
    # Categories to audit
    categories = {
        'solutions': 'solution',
        'ai-data': 'ai-data',
        'industries': 'industries',
        'technologies': 'technologies'
    }
    
    all_results = {}
    
    for category_name, category_path in categories.items():
        full_path = os.path.join(base_path, category_path)
        if not os.path.exists(full_path):
            continue
        
        all_results[category_name] = []
        
        # Walk through all subdirectories
        for root, dirs, files in os.walk(full_path):
            if 'page.tsx' in files:
                page_path = os.path.join(root, 'page.tsx')
                result = analyze_page(page_path)
                all_results[category_name].append(result)
    
    # Generate report
    print("=" * 80)
    print("SUBHEADER AUDIT REPORT")
    print("=" * 80)
    
    for category, results in all_results.items():
        print(f"\n{'='*80}")
        print(f"{category.upper()} PAGES ({len(results)} total)")
        print(f"{'='*80}")
        
        for result in results:
            rel_path = result['path'].replace(base_path, '').replace('\\', '/')
            print(f"\n📄 {rel_path}")
            print(f"   SubHeader: {'✅' if result['has_subheader'] else '❌'}")
            
            if result['has_subheader']:
                print(f"   Title: {result['subheader_title']}")
                print(f"   Items: {len(result['subheader_items'])}")
                for label, section_id in result['subheader_items']:
                    status = '✅' if section_id in result['section_ids'] else '❌'
                    print(f"      {status} {label} → #{section_id}")
            
            if result['issues']:
                print(f"   ⚠️  Issues:")
                for issue in result['issues']:
                    print(f"      - {issue}")
            
            if result['missing_ids']:
                print(f"   ❌ Missing IDs: {', '.join(result['missing_ids'])}")
    
    # Summary statistics
    print(f"\n{'='*80}")
    print("SUMMARY")
    print(f"{'='*80}")
    
    total_pages = sum(len(results) for results in all_results.values())
    pages_with_subheader = sum(
        sum(1 for r in results if r['has_subheader']) 
        for results in all_results.values()
    )
    pages_with_issues = sum(
        sum(1 for r in results if r['issues']) 
        for results in all_results.values()
    )
    
    print(f"Total pages analyzed: {total_pages}")
    print(f"Pages with SubHeader: {pages_with_subheader}")
    print(f"Pages with issues: {pages_with_issues}")
    print(f"Pages needing fixes: {total_pages - pages_with_subheader + pages_with_issues}")
    
    # Save detailed report to JSON
    with open('subheader_audit_report.json', 'w', encoding='utf-8') as f:
        json.dump(all_results, f, indent=2)
    
    print(f"\n✅ Detailed report saved to: subheader_audit_report.json")

if __name__ == "__main__":
    main()
