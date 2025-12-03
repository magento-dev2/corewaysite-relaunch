import os

def add_use_client_directive(file_list_path):
    try:
        with open(file_list_path, "r", encoding="utf-8") as f:
            files_to_fix = [line.strip() for line in f.readlines() if line.strip()]
            
        fixed_count = 0
        for file_path in files_to_fix:
            try:
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()
                
                # Double check if it already has the directive (to be safe)
                if '"use client"' not in content and "'use client'" not in content:
                    new_content = '"use client";\n\n' + content
                    with open(file_path, "w", encoding="utf-8") as f:
                        f.write(new_content)
                    print(f"Fixed: {file_path}")
                    fixed_count += 1
                else:
                    print(f"Skipped (already has directive): {file_path}")
                    
            except Exception as e:
                print(f"Error fixing {file_path}: {e}")
                
        print(f"\nTotal files fixed: {fixed_count}")
        
    except Exception as e:
        print(f"Error reading file list: {e}")

if __name__ == "__main__":
    file_list = "missing_use_client_files.txt"
    add_use_client_directive(file_list)
