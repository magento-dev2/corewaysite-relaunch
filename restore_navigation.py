import os
import re

def restore_4_section_navigation(file_path):
    """Restore subHeaderItems to have 4 sections"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Standard 4-section navigation
    new_items = """const subHeaderItems = [
    { label: "Overview", sectionId: "overview" },
    { label: "Capabilities", sectionId: "features" },
    { label: "Our Process", sectionId: "process" },
    { label: "FAQ", sectionId: "faq" },
  ];"""
    
    # Replace existing subHeaderItems
    pattern = r'const subHeaderItems = \[.*?\];'
    if re.search(pattern, content, re.DOTALL):
        new_content = re.sub(pattern, new_items, content, flags=re.DOTALL)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        return True
    
    return False

def main():
    base_path = r'c:\Users\NIKHIL\Desktop\coreway-new\app'
    
    # Pages that were customized (need to be reverted)
    pages_to_revert = [
        # Technology pages
        r'technologies\nodejs\page.tsx',
        r'technologies\cloud-storage\page.tsx',
        r'technologies\databases\page.tsx',
        r'technologies\iot-protocols\page.tsx',
        r'technologies\laravel-php\page.tsx',
        r'technologies\python\page.tsx',
        r'technologies\react\page.tsx',
        r'technologies\security-tools\page.tsx',
        r'technologies\s3-process\page.tsx',
        # Solution pages
        r'solution\product-development-forstartups\page.tsx',
        r'solution\business-workflow-automation\page.tsx',
        r'solution\ugs-ads\page.tsx',
    ]
    
    print("=" * 80)
    print("RESTORING 4-SECTION NAVIGATION")
    print("=" * 80)
    
    fixed_count = 0
    
    for rel_path in pages_to_revert:
        full_path = os.path.join(base_path, rel_path)
        
        if not os.path.exists(full_path):
            print(f"⚠️  File not found: {rel_path}")
            continue
        
        if restore_4_section_navigation(full_path):
            print(f"✅ Restored: {rel_path}")
            fixed_count += 1
        else:
            print(f"❌ Failed: {rel_path}")
    
    print(f"\n{'='*80}")
    print("SUMMARY")
    print(f"{'='*80}")
    print(f"✅ Restored {fixed_count} pages to 4-section navigation")
    print(f"\nAll pages now show: Overview, Capabilities, Our Process, FAQ")

if __name__ == "__main__":
    main()
