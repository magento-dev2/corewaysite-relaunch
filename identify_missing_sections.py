import os
import re
import json

def analyze_missing_sections():
    """Identify which pages need sections added to have 4 navigation items"""
    
    with open('subheader_customization_report.json', 'r', encoding='utf-8') as f:
        pages_data = json.load(f)
    
    base_path = r'c:\Users\NIKHIL\Desktop\coreway-new\app'
    
    # Standard 4-section navigation
    standard_sections = ['overview', 'features', 'process', 'faq']
    
    pages_needing_sections = []
    
    for page in pages_data:
        existing = page['existing_sections']
        missing = [s for s in standard_sections if s not in existing]
        
        if missing:
            rel_path = page['path'].replace(base_path, '').replace('\\', '/')
            pages_needing_sections.append({
                'path': page['path'],
                'rel_path': rel_path,
                'existing': existing,
                'missing': missing
            })
    
    # Print report
    print("=" * 80)
    print("PAGES NEEDING SECTIONS TO REACH 4 NAVIGATION ITEMS")
    print("=" * 80)
    print(f"\nFound {len(pages_needing_sections)} pages that need sections added\n")
    
    # Group by what's missing
    missing_process = [p for p in pages_needing_sections if 'process' in p['missing']]
    missing_overview = [p for p in pages_needing_sections if 'overview' in p['missing']]
    missing_features = [p for p in pages_needing_sections if 'features' in p['missing']]
    missing_multiple = [p for p in pages_needing_sections if len(p['missing']) > 1]
    
    print(f"📊 Summary:")
    print(f"   - Missing 'process' section: {len(missing_process)} pages")
    print(f"   - Missing 'overview' section: {len(missing_overview)} pages")
    print(f"   - Missing 'features' section: {len(missing_features)} pages")
    print(f"   - Missing multiple sections: {len(missing_multiple)} pages")
    
    print(f"\n{'='*80}")
    print("DETAILED BREAKDOWN")
    print(f"{'='*80}")
    
    # Technology pages missing process
    tech_pages = [p for p in missing_process if '/technologies/' in p['rel_path']]
    if tech_pages:
        print(f"\n🔧 Technology Pages Missing 'process' ({len(tech_pages)} pages):")
        for page in tech_pages:
            print(f"   {page['rel_path']}")
            print(f"      Has: {', '.join(page['existing'])}")
            print(f"      Needs: process section")
    
    # Solution pages
    solution_pages = [p for p in pages_needing_sections if '/solution/' in p['rel_path']]
    if solution_pages:
        print(f"\n💡 Solution Pages Needing Sections ({len(solution_pages)} pages):")
        for page in solution_pages:
            print(f"   {page['rel_path']}")
            print(f"      Has: {', '.join(page['existing'])}")
            print(f"      Needs: {', '.join(page['missing'])}")
    
    # Save detailed report
    with open('pages_needing_sections.json', 'w', encoding='utf-8') as f:
        json.dump(pages_needing_sections, f, indent=2)
    
    print(f"\n{'='*80}")
    print(f"✅ Detailed report saved to: pages_needing_sections.json")
    print(f"{'='*80}")
    
    return pages_needing_sections

if __name__ == "__main__":
    analyze_missing_sections()
