import os
import re

# Page title mappings based on category
CATEGORY_TITLES = {
    'solution': 'Solutions',
    'ai-data': 'AI & Data',
    'industries': 'Industries',
    'technologies': 'Technologies'
}

def get_page_category(file_path):
    """Determine the category of a page based on its path"""
    if '\\solution\\' in file_path:
        return 'solution'
    elif '\\ai-data\\' in file_path:
        return 'ai-data'
    elif '\\industries\\' in file_path:
        return 'industries'
    elif '\\technologies\\' in file_path:
        return 'technologies'
    return None

def fix_subheader_title(file_path):
    """Fix the SubHeader title in a page file"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    category = get_page_category(file_path)
    if not category:
        print(f"⚠️  Skipping {file_path} - unknown category")
        return False
    
    correct_title = CATEGORY_TITLES[category]
    
    # Check if SubHeader exists
    if 'SubHeader' not in content:
        print(f"⚠️  Skipping {file_path} - no SubHeader found")
        return False
    
    # Pattern to match SubHeader with title prop
    pattern1 = r'<SubHeader\s+title="([^"]+)"'
    match = re.search(pattern1, content)
    
    if match:
        current_title = match.group(1)
        if current_title == correct_title:
            print(f"✅ {file_path} - already has correct title: {correct_title}")
            return False
        
        # Replace the title
        new_content = re.sub(
            r'<SubHeader\s+title="[^"]+"',
            f'<SubHeader title="{correct_title}"',
            content
        )
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"✅ Fixed {file_path}: '{current_title}' → '{correct_title}'")
        return True
    else:
        # SubHeader without title prop - need to add it
        new_content = re.sub(
            r'<SubHeader\s+items=',
            f'<SubHeader title="{correct_title}" items=',
            content
        )
        
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"✅ Added title to {file_path}: '{correct_title}'")
            return True
        else:
            print(f"⚠️  Could not fix {file_path} - manual intervention needed")
            return False

def add_missing_section_ids(file_path):
    """Add missing section ID wrappers to components"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract declared section IDs from subHeaderItems
    items_match = re.search(r'const subHeaderItems = \[(.*?)\];', content, re.DOTALL)
    if not items_match:
        return False
    
    items_str = items_match.group(1)
    declared_sections = re.findall(r'sectionId:\s*"([^"]+)"', items_str)
    
    # Find existing section IDs
    existing_sections = re.findall(r'<div\s+id="([^"]+)"', content)
    
    # Find missing sections
    missing_sections = [s for s in declared_sections if s not in existing_sections]
    
    if not missing_sections:
        return False
    
    print(f"\n📝 Processing {file_path}")
    print(f"   Missing sections: {', '.join(missing_sections)}")
    
    modified = False
    new_content = content
    
    # Try to wrap common component patterns
    for section_id in missing_sections:
        # Common patterns to look for
        patterns = {
            'overview': [
                (r'(<\w+Overview\s[^>]*>)', r'<div id="overview">\n          \1'),
                (r'(</\w+Overview>)', r'\1\n          </div>')
            ],
            'features': [
                (r'(<\w+Features\s[^>]*>)', r'<div id="features">\n          \1'),
                (r'(</\w+Features>)', r'\1\n          </div>')
            ],
            'process': [
                (r'(<\w+Process\s[^>]*>)', r'<div id="process">\n          \1'),
                (r'(</\w+Process>)', r'\1\n          </div>')
            ],
            'faq': [
                (r'(<FAQ\s[^>]*>)', r'<div id="faq">\n          \1'),
                (r'(</FAQ>)', r'\1\n          </div>')
            ]
        }
        
        if section_id in patterns:
            for pattern, replacement in patterns[section_id]:
                if re.search(pattern, new_content):
                    new_content = re.sub(pattern, replacement, new_content, count=1)
                    modified = True
                    print(f"   ✅ Wrapped {section_id} section")
                    break
    
    if modified:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    
    return False

def main():
    base_path = r'c:\Users\NIKHIL\Desktop\coreway-new\app'
    
    categories = ['solution', 'ai-data', 'industries', 'technologies']
    
    print("=" * 80)
    print("FIXING SUBHEADER TITLES AND SECTION IDS")
    print("=" * 80)
    
    title_fixes = 0
    section_fixes = 0
    
    for category in categories:
        category_path = os.path.join(base_path, category)
        if not os.path.exists(category_path):
            continue
        
        print(f"\n{'='*80}")
        print(f"Processing {category.upper()} pages")
        print(f"{'='*80}")
        
        # Walk through all subdirectories
        for root, dirs, files in os.walk(category_path):
            if 'page.tsx' in files:
                page_path = os.path.join(root, 'page.tsx')
                
                # Skip dynamic routes for now
                if '[' in page_path:
                    print(f"⏭️  Skipping dynamic route: {page_path}")
                    continue
                
                # Fix title
                if fix_subheader_title(page_path):
                    title_fixes += 1
                
                # Add missing section IDs
                if add_missing_section_ids(page_path):
                    section_fixes += 1
    
    print(f"\n{'='*80}")
    print("SUMMARY")
    print(f"{'='*80}")
    print(f"✅ Fixed {title_fixes} SubHeader titles")
    print(f"✅ Added section IDs to {section_fixes} pages")
    print(f"\n🔍 Run 'python audit_subheader.py' to verify changes")

if __name__ == "__main__":
    main()
