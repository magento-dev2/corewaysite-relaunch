import json
import re

# Read the corrupted file
with open('data/why-coreway.json', 'r', encoding='utf-8') as f:
    content = f.read()

# Try to find the first opening brace and work from there
# The file should start with a single {
# Let's find all top-level keys and remove duplicates

# Simple approach: find the original structure before corruption
# The error mentioned line 645, so let's see if we can salvage the beginning

# Read the backup
with open('data/why-coreway.json.backup', 'r', encoding='utf-8') as f:
    backup_content = f.read()

# Find where the corruption starts - look for duplicate "pharmaceuticals-healthcare"
lines = backup_content.split('\n')

# Find the line with the first "s3-process" entry
s3_start = None
for i, line in enumerate(lines):
    if '"s3-process"' in line:
        s3_start = i
        break

if s3_start:
    print(f"Found s3-process at line {s3_start + 1}")
    # Print surrounding lines to see the structure
    for i in range(max(0, s3_start - 5), min(len(lines), s3_start + 50)):
        print(f"{i+1}: {lines[i][:100]}")
