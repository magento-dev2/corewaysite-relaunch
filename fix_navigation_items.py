import os
import re
import json

def fix_subheader_items(file_path, recommended_items):
    """Fix subHeaderItems to match actual sections on the page"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if not recommended_items:
        # If no sections exist, remove SubHeader entirely
        print(f"⚠️  {file_path} - No sections found, consider removing SubHeader")
        return False
    
    # Build the new subHeaderItems array
    new_items_str = "const subHeaderItems = [\n"
    for item in recommended_items:
        new_items_str += f'    {{ label: "{item["label"]}", sectionId: "{item["sectionId"]}" }},\n'
    new_items_str += "  ];"
    
    # Replace the existing subHeaderItems
    pattern = r'const subHeaderItems = \[.*?\];'
    if re.search(pattern, content, re.DOTALL):
        new_content = re.sub(pattern, new_items_str, content, flags=re.DOTALL)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        return True
    
    return False

def main():
    # Load the customization report
    with open('subheader_customization_report.json', 'r', encoding='utf-8') as f:
        pages_to_fix = json.load(f)
    
    print("=" * 80)
    print("FIXING SUBHEADER NAVIGATION ITEMS")
    print("=" * 80)
    
    fixed_count = 0
    skipped_count = 0
    
    for page in pages_to_fix:
        rel_path = page['path'].replace(r'c:\Users\NIKHIL\Desktop\coreway-new\app', '').replace('\\', '/')
        
        # Skip pages with no sections (need manual review)
        if not page['recommended']:
            print(f"\n⏭️  Skipping {rel_path} - No sections found (needs manual review)")
            skipped_count += 1
            continue
        
        # Check if current items match recommended (already fixed)
        current_ids = [item[1] for item in page['current_items']]
        recommended_ids = [item['sectionId'] for item in page['recommended']]
        
        if current_ids == recommended_ids:
            print(f"\n✅ {rel_path} - Already correct")
            continue
        
        # Fix the page
        if fix_subheader_items(page['path'], page['recommended']):
            print(f"\n✅ Fixed {rel_path}")
            print(f"   Removed: {', '.join(page['missing'])}")
            print(f"   Kept: {', '.join(recommended_ids)}")
            fixed_count += 1
        else:
            print(f"\n❌ Failed to fix {rel_path}")
    
    print(f"\n{'='*80}")
    print("SUMMARY")
    print(f"{'='*80}")
    print(f"✅ Fixed: {fixed_count} pages")
    print(f"⏭️  Skipped: {skipped_count} pages (need manual review)")
    print(f"\n🔍 Run 'python audit_subheader.py' to verify changes")

if __name__ == "__main__":
    main()
