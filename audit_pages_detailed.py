import os
import re
import json

# Directories to scan
directories = [
    'app/page.tsx',  # Home page
    'app/solution',
    'app/technologies',
    'app/industries',
    'app/ai-data'
]

def check_page_components(file_path):
    """Check if a page has FAQ, WhyCoreway, and PageCTA components"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        has_faq = '<FAQ' in content
        has_why_coreway = '<WhyCorewaySection' in content
        has_page_cta = '<PageCTA' in content
        
        # Extract page key if using whyCorewayData
        why_key_match = re.search(r'whyCorewayData\["([^"]+)"\]', content)
        why_key = why_key_match.group(1) if why_key_match else None
        
        # Extract FAQ key if using sampleFAQs
        faq_key_match = re.search(r'sampleFAQs\["([^"]+)"\]', content)
        faq_key = faq_key_match.group(1) if faq_key_match else None
        
        return {
            'has_faq': has_faq,
            'has_why_coreway': has_why_coreway,
            'has_page_cta': has_page_cta,
            'why_key': why_key,
            'faq_key': faq_key
        }
    except Exception as e:
        return None

def scan_directory(dir_path):
    """Recursively scan directory for page.tsx files"""
    results = []
    
    if os.path.isfile(dir_path):
        # Single file (home page)
        result = check_page_components(dir_path)
        if result:
            results.append({
                'path': dir_path,
                'page_name': 'home',
                **result
            })
    else:
        # Directory
        for root, dirs, files in os.walk(dir_path):
            if 'page.tsx' in files:
                file_path = os.path.join(root, 'page.tsx')
                result = check_page_components(file_path)
                if result:
                    # Extract page name from path
                    page_name = os.path.basename(root)
                    results.append({
                        'path': file_path,
                        'page_name': page_name,
                        **result
                    })
    
    return results

# Scan all directories
all_results = []
for directory in directories:
    results = scan_directory(directory)
    all_results.extend(results)

# Generate detailed report
print("=" * 100)
print("DETAILED FAQ AND CTA AUDIT REPORT")
print("=" * 100)
print(f"\nTotal pages scanned: {len(all_results)}\n")

# Missing components
missing_faq = [r for r in all_results if not r['has_faq']]
missing_why = [r for r in all_results if not r['has_why_coreway']]
missing_cta = [r for r in all_results if not r['has_page_cta']]

print("\n" + "=" * 100)
print(f"PAGES MISSING FAQ ({len(missing_faq)} pages)")
print("=" * 100)
for page in missing_faq:
    print(f"  ✗ {page['page_name']:<40} {page['path']}")

print("\n" + "=" * 100)
print(f"PAGES MISSING WHY COREWAY ({len(missing_why)} pages)")
print("=" * 100)
for page in missing_why:
    print(f"  ✗ {page['page_name']:<40} {page['path']}")

print("\n" + "=" * 100)
print(f"PAGES MISSING PAGE CTA ({len(missing_cta)} pages)")
print("=" * 100)
for page in missing_cta:
    print(f"  ✗ {page['page_name']:<40} {page['path']}")

# Pages with all components
complete_pages = [r for r in all_results if r['has_faq'] and r['has_why_coreway'] and r['has_page_cta']]
print("\n" + "=" * 100)
print(f"✓ COMPLETE PAGES ({len(complete_pages)} pages)")
print("=" * 100)
for page in complete_pages[:10]:  # Show first 10
    print(f"  ✓ {page['page_name']:<40} FAQ: {page['faq_key'] or 'N/A':<30} Why: {page['why_key'] or 'N/A'}")
if len(complete_pages) > 10:
    print(f"  ... and {len(complete_pages) - 10} more")

# Summary
print("\n" + "=" * 100)
print("SUMMARY")
print("=" * 100)
print(f"FAQ Coverage:         {len(all_results) - len(missing_faq):>2}/{len(all_results)} ({(len(all_results) - len(missing_faq))/len(all_results)*100:>5.1f}%)")
print(f"Why Coreway Coverage: {len(all_results) - len(missing_why):>2}/{len(all_results)} ({(len(all_results) - len(missing_why))/len(all_results)*100:>5.1f}%)")
print(f"PageCTA Coverage:     {len(all_results) - len(missing_cta):>2}/{len(all_results)} ({(len(all_results) - len(missing_cta))/len(all_results)*100:>5.1f}%)")
print(f"Complete Pages:       {len(complete_pages):>2}/{len(all_results)} ({len(complete_pages)/len(all_results)*100:>5.1f}%)")

# Save results to JSON for further processing
report = {
    'total_pages': len(all_results),
    'missing_faq': [{'name': p['page_name'], 'path': p['path']} for p in missing_faq],
    'missing_why_coreway': [{'name': p['page_name'], 'path': p['path']} for p in missing_why],
    'missing_cta': [{'name': p['page_name'], 'path': p['path']} for p in missing_cta],
    'complete_pages': [{'name': p['page_name'], 'faq_key': p['faq_key'], 'why_key': p['why_key']} for p in complete_pages]
}

with open('audit_report.json', 'w') as f:
    json.dump(report, f, indent=2)

print("\n✓ Detailed report saved to audit_report.json")
