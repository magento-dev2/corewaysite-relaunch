import json

# Template for each section
def create_section(key, title_suffix=""):
    # Convert kebab-case to Title Case
    title_words = key.replace('-', ' ').title()
    
    return {
        "badge": "Why Choose Us",
        "title": f"Why Choose Our {title_words}{title_suffix}",
        "subtitle": f"Expert {title_words} solutions that drive results and deliver exceptional value.",
        "reasons": [
            {
                "icon": "trophy",
                "title": "Proven Expertise",
                "description": f"Years of experience delivering exceptional {title_words} solutions."
            },
            {
                "icon": "zap",
                "title": "Fast Delivery",
                "description": "Rapid implementation with agile methodologies and efficient processes."
            },
            {
                "icon": "shield",
                "title": "Enterprise Security",
                "description": "Bank-grade security protocols ensuring your data remains protected."
            },
            {
                "icon": "users",
                "title": "Expert Team",
                "description": "Dedicated team of senior professionals working on your project."
            }
        ]
    }

# All required keys
keys = [
    "home", "DBDashbot", "ai-chat-with-pdf", "ai-consulting", "ai-integration-services",
    "ai-powered-application-platforms", "automotive", "aws-s3-optimization",
    "business-workflow-automation", "cloud-storage", "custom-api-systems-integration",
    "custom-dashboards", "databases", "dataset-management-delivery",
    "digital-commerce-transformation", "ecommerce-stores", "fashion-apparel",
    "food-beverage", "furniture-home-decor", "gpt-automation",
    "infrastructure-security-ai", "iot-application-development", "iot-protocols",
    "laravel-php", "manufacturing-iot", "metadata-extraction-ai", "nodejs",
    "pharmaceuticals-healthcare", "product-development-forstartups", "python",
    "react", "replatforming-migration", "s3-process", "saas-infrastructure-devops",
    "security-tools", "ugs-ads"
]

# Generate the complete JSON
data = {}
for key in keys:
    data[key] = create_section(key)

# Write to file
with open('data/why-coreway.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print(f"✓ Generated why-coreway.json with {len(keys)} sections")
print("Keys:", list(data.keys())[:10], "...")
