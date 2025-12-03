import os

def scan_for_missing_use_client(directory):
    missing_directive_files = []
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".tsx") or file.endswith(".ts") or file.endswith(".js") or file.endswith(".jsx"):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, "r", encoding="utf-8") as f:
                        content = f.read()
                        
                        # Check for hooks usage
                        has_hooks = "useState" in content or "useEffect" in content or "useRef" in content or "useContext" in content or "useReducer" in content or "useCallback" in content or "useMemo" in content
                        
                        # Check for "use client" directive
                        has_directive = '"use client"' in content or "'use client'" in content
                        
                        if has_hooks and not has_directive:
                            missing_directive_files.append(file_path)
                except Exception as e:
                    print(f"Error reading {file_path}: {e}")

    return missing_directive_files

if __name__ == "__main__":
    components_dir = r"c:\Users\NIKHIL\Desktop\coreway-new\components"
    missing_files = scan_for_missing_use_client(components_dir)
    
    with open("missing_use_client_files.txt", "w", encoding="utf-8") as f:
        for file in missing_files:
            f.write(file + "\n")
    print(f"Found {len(missing_files)} files. List saved to missing_use_client_files.txt")
