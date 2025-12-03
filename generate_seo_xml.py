import os
import re
from pathlib import Path
from xml.etree.ElementTree import Element, SubElement, ElementTree, tostring
from xml.dom import minidom

# Base directory
app_dir = Path(r"c:\Users\NIKHIL\Desktop\coreway-new\app")
base_url = "https://www.corewaysolution.com"

def extract_metadata_from_layout(file_path):
    """Extract metadata from layout.tsx file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        metadata = {
            'title': '',
            'description': '',
            'keywords': ''
        }
        
        # Find metadata object
        metadata_match = re.search(r'export const metadata[:\s]*=\s*\{([^}]+(?:\{[^}]*\}[^}]*)*)\}', content, re.DOTALL)
        
        if metadata_match:
            metadata_content = metadata_match.group(1)
            
            # Extract title
            title_match = re.search(r'title:\s*["\']([^"\']+)["\']', metadata_content)
            if not title_match:
                title_match = re.search(r'title:\s*\{[^}]*default:\s*["\']([^"\']+)["\']', metadata_content)
            if not title_match:
                title_match = re.search(r'title:\s*`([^`]+)`', metadata_content)
            if title_match:
                metadata['title'] = title_match.group(1)
            
            # Extract description
            desc_match = re.search(r'description:\s*["\']([^"\']+)["\']', metadata_content)
            if not desc_match:
                desc_match = re.search(r'description:\s*`([^`]+)`', metadata_content)
            if desc_match:
                metadata['description'] = desc_match.group(1)
            
            # Extract keywords
            keywords_match = re.search(r'keywords:\s*["\']([^"\']+)["\']', metadata_content)
            if not keywords_match:
                keywords_match = re.search(r'keywords:\s*`([^`]+)`', metadata_content)
            if keywords_match:
                metadata['keywords'] = keywords_match.group(1)
        
        return metadata
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return {'title': '', 'description': '', 'keywords': ''}

def path_to_url(dir_path, app_dir, base_url):
    """Convert directory path to URL"""
    rel_path = dir_path.relative_to(app_dir)
    path_parts = list(rel_path.parts) if str(rel_path) != '.' else []
    
    # Handle dynamic routes
    url_parts = []
    for part in path_parts:
        if part.startswith('[') and part.endswith(']'):
            param_name = part[1:-1]
            url_parts.append(f'{{{param_name}}}')
        else:
            url_parts.append(part)
    
    if not url_parts:
        return base_url + "/"
    else:
        return base_url + "/" + "/".join(url_parts)

def create_seo_xml():
    """Create XML file with SEO metadata"""
    
    # Create root element
    root = Element('urlset')
    root.set('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9')
    root.set('xmlns:xhtml', 'http://www.w3.org/1999/xhtml')
    
    # Find all page.tsx files
    page_files = list(app_dir.rglob("page.tsx"))
    processed_dirs = set()
    
    print(f"Processing {len(page_files)} pages...\n")
    
    for page_file in sorted(page_files):
        page_dir = page_file.parent
        
        # Skip if already processed
        if page_dir in processed_dirs:
            continue
        processed_dirs.add(page_dir)
        
        # Skip admin pages
        if 'admin' in str(page_file):
            continue
        
        # Get URL
        url = path_to_url(page_dir, app_dir, base_url)
        
        # Get metadata from layout.tsx
        layout_file = page_dir / "layout.tsx"
        metadata = {'title': '', 'description': '', 'keywords': ''}
        
        if layout_file.exists():
            metadata = extract_metadata_from_layout(layout_file)
        
        # Create URL element
        url_element = SubElement(root, 'url')
        
        # Add loc (URL)
        loc = SubElement(url_element, 'loc')
        loc.text = url
        
        # Add title as a custom element
        if metadata['title']:
            title = SubElement(url_element, 'title')
            title.text = metadata['title']
        
        # Add description
        if metadata['description']:
            description = SubElement(url_element, 'description')
            description.text = metadata['description']
        
        # Add keywords
        if metadata['keywords']:
            keywords = SubElement(url_element, 'keywords')
            keywords.text = metadata['keywords']
        
        # Add priority (higher for homepage)
        priority = SubElement(url_element, 'priority')
        if url == base_url + "/":
            priority.text = "1.0"
        elif len(url.split('/')) <= 4:  # Top-level pages
            priority.text = "0.8"
        else:
            priority.text = "0.6"
        
        # Add changefreq
        changefreq = SubElement(url_element, 'changefreq')
        if url == base_url + "/":
            changefreq.text = "daily"
        elif 'blog' in url or 'case-studies' in url:
            changefreq.text = "weekly"
        else:
            changefreq.text = "monthly"
        
        print(f"✓ Added: {url}")
    
    # Pretty print XML
    xml_str = minidom.parseString(tostring(root)).toprettyxml(indent="  ")
    
    # Remove extra blank lines
    xml_str = '\n'.join([line for line in xml_str.split('\n') if line.strip()])
    
    # Write to file
    output_file = r"c:\Users\NIKHIL\Desktop\coreway-new\seo_metadata.xml"
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(xml_str)
    
    print(f"\n{'='*80}")
    print(f"✓ XML file created: {output_file}")
    print(f"Total URLs: {len(processed_dirs) - 1}")  # -1 for admin pages
    print(f"{'='*80}")

if __name__ == "__main__":
    print("="*80)
    print("Creating SEO Metadata XML File")
    print("="*80)
    print()
    create_seo_xml()
