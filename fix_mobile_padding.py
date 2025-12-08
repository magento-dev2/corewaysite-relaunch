import os
import re

def fix_mobile_padding(directory):
    """Fix mobile padding issues by replacing pt-X classes with page-content utility class"""
    
    fixed_files = []
    
    for root, dirs, files in os.walk(directory):
        # Skip node_modules, .next, and other non-essential directories
        dirs[:] = [d for d in dirs if d not in ['node_modules', '.next', 'dist', '.git']]
        
        for file in files:
            if file.endswith('.tsx'):
                filepath = os.path.join(root, file)
                
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    original_content = content
                    
                    # Pattern 1: Fix header tags with pt-20
                    content = re.sub(
                        r'<header className="pt-20\s*"',
                        '<header className="page-content"',
                        content
                    )
                    
                   # Pattern 2: Fix header with pt-20 and additional text after
                    content = re.sub(
                        r'<header className="pt-20\s',
                        '<header className="page-content ',
                        content
                    )
                    
                    # Pattern 3: Fix main container divs with min-h-screen and pt-32
                    content = re.sub(
                        r'className="min-h-screen bg-\[#0E0918\] text-white pt-32',
                        'className="min-h-screen bg-[#0E0918] text-white page-content',
                        content
                    )
                    
                    # Pattern 4: Fix main container divs with pt-24
                    content = re.sub(
                        r'className="min-h-screen bg-\[#0E0918\] pt-24',
                        'className="min-h-screen bg-[#0E0918] page-content',
                        content
                    )
                    
                    # Pattern 5: Fix blog page style pt-32
                    content = re.sub(
                        r'className="min-h-screen bg-\[#0E0918\] text-white pt-32',
                        'className="min-h-screen bg-[#0E0918] text-white page-content',
                        content
                    )
                    
                    # Only write if changes were made
                    if content != original_content:
                        with open(filepath, 'w', encoding='utf-8') as f:
                            f.write(content)
                        fixed_files.append(filepath)
                        print(f"✓ Fixed: {filepath}")
                
                except Exception as e:
                    print(f"✗ Error processing {filepath}: {e}")
    
    return fixed_files

if __name__ == "__main__":
    directory = r"c:\Users\NIKHIL\Desktop\coreway-new\app"
    print("Fixing mobile padding issues...")
    print("="  * 60)
    
    fixed = fix_mobile_padding(directory)
    
    print("=" * 60)
    print(f"\nTotal files fixed: {len(fixed)}")
    
    if fixed:
        print("\nFiles modified:")
        for file in fixed:
            print(f"  - {os.path.basename(file)}")
