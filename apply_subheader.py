import os
import re

def update_page_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Check if SubHeader is already imported
        if 'import SubHeader' in content:
            print(f"Skipping {file_path}: SubHeader already present")
            return False

        # 1. Add Import
        # Find the last import
        last_import_match = list(re.finditer(r'^import .*?;', content, re.MULTILINE))
        if not last_import_match:
            print(f"Skipping {file_path}: No imports found")
            return False
        
        last_import_end = last_import_match[-1].end()
        content = content[:last_import_end] + '\nimport SubHeader from "@/components/SubHeader";' + content[last_import_end:]

        # 2. Determine Page Title
        # Try to find title in metadata or breadcrumb
        title = "Solutions" # Default
        title_match = re.search(r'name:\s*"([^"]+)"', content)
        if title_match:
            title = title_match.group(1)
        
        # Simplify title (remove "Solutions", "Development", etc. if too long)
        if len(title) > 30:
            title = title.split(" | ")[0]
            title = title.replace(" Solutions", "").replace(" Development", "").replace(" Transformation", "")

        # 3. Add subHeaderItems constant
        # Find the start of the component function
        func_match = re.search(r'export default function \w+\(\) \{', content)
        if not func_match:
            print(f"Skipping {file_path}: Component function not found")
            return False
        
        func_start = func_match.end()
        
        subheader_items_code = f'''
  const subHeaderItems = [
    {{ label: "Overview", sectionId: "overview" }},
    {{ label: "Capabilities", sectionId: "features" }},
    {{ label: "Our Process", sectionId: "process" }},
    {{ label: "FAQ", sectionId: "faq" }},
  ];
'''
        content = content[:func_start] + subheader_items_code + content[func_start:]

        # 4. Insert <SubHeader /> and Wrap Sections
        # This is the tricky part. We need to find specific components and wrap them.
        # We'll look for common patterns.

        # Insert SubHeader after Hero
        # Patterns: <CommerceHero, <DatasetHero, <TechHero, <AutomotiveHero (if exists)
        hero_pattern = r'(<\w+Hero[^>]*\/>)'
        hero_match = re.search(hero_pattern, content)
        if hero_match:
            hero_end = hero_match.end()
            content = content[:hero_end] + f'\n\n          <SubHeader title="{title}" items={{subHeaderItems}} />' + content[hero_end:]
        else:
             print(f"Warning {file_path}: Hero component not found")

        # Wrap Overview
        # Patterns: <CommerceOverview, <DatasetOverview, <TechOverview
        overview_pattern = r'(<\w+Overview[^>]*\/>)'
        content = re.sub(overview_pattern, r'<div id="overview">\n            \1\n          </div>', content)

        # Wrap Features/Capabilities
        # Patterns: <CommerceFeatures, <DatasetFeatures, <TechFeatures
        # Also PlatformExpertise/DatasetTechnologies often go here. 
        # Let's wrap the main Features component first.
        features_pattern = r'(<\w+Features[^>]*\/>)'
        content = re.sub(features_pattern, r'<div id="features">\n            \1\n          </div>', content)

        # Wrap Process
        # Patterns: <ProcessDiagram, <DatasetProcess
        process_pattern = r'(<\w+Process(?:Diagram)?[^>]*\/>)'
        content = re.sub(process_pattern, r'<div id="process">\n            \1\n          </div>', content)

        # Wrap FAQ
        # Patterns: <FAQ
        faq_pattern = r'(<FAQ[^>]*\/>)'
        content = re.sub(faq_pattern, r'<div id="faq">\n            \1\n          </div>', content)

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Updated {file_path}")
        return True

    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

# Directories to process
directories = [
    r"c:\Users\NIKHIL\Desktop\coreway-new\app\solution",
    r"c:\Users\NIKHIL\Desktop\coreway-new\app\ai-data",
    r"c:\Users\NIKHIL\Desktop\coreway-new\app\industries",
    r"c:\Users\NIKHIL\Desktop\coreway-new\app\technologies"
]

count = 0
for directory in directories:
    if not os.path.exists(directory):
        print(f"Directory not found: {directory}")
        continue
        
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file == "page.tsx":
                if update_page_file(os.path.join(root, file)):
                    count += 1

print(f"Total pages updated: {count}")
