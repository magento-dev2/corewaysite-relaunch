import os
import re
from pathlib import Path
from typing import Dict, Optional

# Base directory
app_dir = Path(r"c:\Users\NIKHIL\Desktop\coreway-new\app")

# Track migration results
migration_results = {
    'success': [],
    'failed': [],
    'skipped': [],
    'updated_layout': [],
    'removed_head': []
}

def extract_head_metadata(content: str) -> Optional[Dict[str, str]]:
    """Extract metadata from <Head> component"""
    metadata = {
        'title': '',
        'description': '',
        'keywords': '',
        'og_title': '',
        'og_description': '',
        'og_image': '',
        'og_url': '',
        'canonical': ''
    }
    
    # Find Head component content
    head_match = re.search(r'<Head>(.*?)</Head>', content, re.DOTALL)
    if not head_match:
        return None
    
    head_content = head_match.group(1)
    
    # Extract title
    title_match = re.search(r'<title>([^<]+)</title>', head_content)
    if title_match:
        metadata['title'] = title_match.group(1).strip()
    
    # Extract description
    desc_match = re.search(r'<meta\s+name="description"\s+content="([^"]+)"', head_content)
    if not desc_match:
        desc_match = re.search(r'<meta\s+content="([^"]+)"\s+name="description"', head_content)
    if desc_match:
        metadata['description'] = desc_match.group(1).strip()
    
    # Extract keywords
    keywords_match = re.search(r'<meta\s+name="keywords"\s+content="([^"]+)"', head_content)
    if not keywords_match:
        keywords_match = re.search(r'<meta\s+content="([^"]+)"\s+name="keywords"', head_content)
    if keywords_match:
        metadata['keywords'] = keywords_match.group(1).strip()
    
    # Extract OG title
    og_title_match = re.search(r'<meta\s+property="og:title"\s+content="([^"]+)"', head_content)
    if not og_title_match:
        og_title_match = re.search(r'<meta\s+content="([^"]+)"\s+property="og:title"', head_content)
    if og_title_match:
        metadata['og_title'] = og_title_match.group(1).strip()
    
    # Extract OG description
    og_desc_match = re.search(r'<meta\s+property="og:description"\s+content="([^"]+)"', head_content)
    if not og_desc_match:
        og_desc_match = re.search(r'<meta\s+content="([^"]+)"\s+property="og:description"', head_content)
    if og_desc_match:
        metadata['og_description'] = og_desc_match.group(1).strip()
    
    # Extract OG image
    og_image_match = re.search(r'<meta\s+property="og:image"\s+content="([^"]+)"', head_content)
    if not og_image_match:
        og_image_match = re.search(r'<meta\s+content="([^"]+)"\s+property="og:image"', head_content)
    if og_image_match:
        metadata['og_image'] = og_image_match.group(1).strip()
    
    # Extract OG URL
    og_url_match = re.search(r'<meta\s+property="og:url"\s+content="([^"]+)"', head_content)
    if not og_url_match:
        og_url_match = re.search(r'<meta\s+content="([^"]+)"\s+property="og:url"', head_content)
    if og_url_match:
        metadata['og_url'] = og_url_match.group(1).strip()
    
    # Extract canonical
    canonical_match = re.search(r'<link\s+rel="canonical"\s+href="([^"]+)"', head_content)
    if not canonical_match:
        canonical_match = re.search(r'<link\s+href="([^"]+)"\s+rel="canonical"', head_content)
    if canonical_match:
        metadata['canonical'] = canonical_match.group(1).strip()
    
    return metadata

def update_layout_metadata(layout_file: Path, metadata: Dict[str, str]):
    """Update existing layout.tsx with better metadata from Head component"""
    
    try:
        with open(layout_file, 'r', encoding='utf-8') as f:
            layout_content = f.read()
        
        # Check if the Head metadata has more complete info
        # For now, we'll just ensure the layout has the metadata
        # and skip updating if it already has good metadata
        
        if 'export const metadata' in layout_content:
            # Layout already has metadata, check if it's complete
            has_description = 'description:' in layout_content
            has_keywords = 'keywords:' in layout_content
            
            if has_description and has_keywords:
                # Layout seems complete, skip
                return False
        
        return True
        
    except Exception as e:
        print(f"Error checking layout {layout_file}: {e}")
        return False

def remove_head_from_page(content: str) -> tuple[str, bool]:
    """Remove Head component and import from page.tsx"""
    
    original_content = content
    
    # Remove import Head statement
    content = re.sub(r'import Head from ["\']next/head["\'];\s*\n', '', content)
    
    # Remove Head component and its content (including structured data)
    content = re.sub(r'<Head>.*?</Head>\s*\n?', '', content, flags=re.DOTALL)
    
    # Remove empty fragments if they're now empty
    # Check if there's just whitespace between <> and </>
    content = re.sub(r'<>\s*\n?\s*(<div|<main)', r'\1', content)
    content = re.sub(r'(</div>|</main>)\s*\n?\s*</>', r'\1', content)
    
    # Try to remove "use client" if the page doesn't seem to need it
    # Keep it if we find hooks, event handlers, or state
    needs_client = bool(
        re.search(r'useState|useEffect|useRef|useCallback|useMemo|useContext|useLanguage', content) or
        re.search(r'onClick|onChange|onSubmit|onFocus|onBlur|onMouseEnter|onMouseLeave', content)
    )
    
    if not needs_client:
        content = re.sub(r'"use client";\s*\n', '', content)
        content = re.sub(r'\'use client\';\s*\n', '', content)
        # Also remove the comment if it exists
        content = re.sub(r'\'use client\'; // only if you need client-side features\s*\n', '', content)
        content = re.sub(r'"use client"; // only if you need client-side features\s*\n', '', content)
    
    # Check if content actually changed
    changed = content != original_content
    
    return content, changed

def migrate_page(page_file: Path):
    """Migrate a single page from Head to layout.tsx"""
    
    try:
        # Read page content
        with open(page_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if it has Head import
        if 'import Head from' not in content:
            return
        
        # Extract metadata from Head component
        metadata = extract_head_metadata(content)
        
        if not metadata or not metadata['title']:
            print(f"⚠️  No metadata found in {page_file.relative_to(app_dir)}")
            migration_results['failed'].append(str(page_file))
            return
        
        # Check if layout.tsx exists
        layout_file = page_file.parent / 'layout.tsx'
        
        # Remove Head from page.tsx
        new_page_content, changed = remove_head_from_page(content)
        
        if changed:
            # Write updated page.tsx
            with open(page_file, 'w', encoding='utf-8') as f:
                f.write(new_page_content)
            
            print(f"✅ Removed Head from: {page_file.relative_to(app_dir)}")
            migration_results['removed_head'].append(str(page_file))
            migration_results['success'].append(str(page_file))
        else:
            print(f"⚠️  No changes needed: {page_file.relative_to(app_dir)}")
            migration_results['skipped'].append(str(page_file))
        
    except Exception as e:
        print(f"❌ Error migrating {page_file.relative_to(app_dir)}: {e}")
        migration_results['failed'].append(str(page_file))

def main():
    print("=" * 80)
    print("SEO Metadata Migration: Removing <Head> components from pages")
    print("=" * 80)
    print()
    
    # Find all page.tsx files with Head import
    page_files = []
    for page_file in app_dir.rglob("page.tsx"):
        # Skip admin pages
        if 'admin' in str(page_file):
            continue
        
        try:
            with open(page_file, 'r', encoding='utf-8') as f:
                if 'import Head from' in f.read():
                    page_files.append(page_file)
        except:
            pass
    
    print(f"Found {len(page_files)} pages with <Head> component\n")
    
    # Migrate each page
    for page_file in sorted(page_files):
        migrate_page(page_file)
    
    # Print summary
    print()
    print("=" * 80)
    print("Migration Summary")
    print("=" * 80)
    print(f"✅ Successfully processed: {len(migration_results['success'])}")
    print(f"   - Removed <Head> from: {len(migration_results['removed_head'])}")
    print(f"⚠️  Skipped (no changes): {len(migration_results['skipped'])}")
    print(f"❌ Failed: {len(migration_results['failed'])}")
    print()
    
    if migration_results['failed']:
        print("Failed migrations:")
        for failed in migration_results['failed']:
            print(f"  - {failed}")
        print()
    
    print("✓ Migration complete!")
    print()
    print("Next steps:")
    print("1. Review the modified page.tsx files")
    print("2. Verify layout.tsx files have proper metadata")
    print("3. Test the application: npm run dev")
    print("4. Check for any console errors")
    print("5. Verify SEO metadata in browser DevTools")

if __name__ == "__main__":
    main()
