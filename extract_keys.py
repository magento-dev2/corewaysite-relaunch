import re
import json

# Read all .tsx files and extract whyCorewayData keys
keys = set()

# Read the grep output to extract keys
grep_results = """
whyCorewayData["security-tools"]
whyCorewayData["s3-process"]
whyCorewayData["react"]
whyCorewayData["python"]
whyCorewayData["nodejs"]
whyCorewayData["laravel-php"]
whyCorewayData["iot-protocols"]
whyCorewayData["databases"]
whyCorewayData["ugs-ads"]
whyCorewayData["ai-consulting"]
whyCorewayData["replatforming-migration"]
whyCorewayData["saas-infrastructure-devops"]
whyCorewayData["product-development-forstartups"]
whyCorewayData["iot-application-development"]
whyCorewayData["infrastructure-security-ai"]
whyCorewayData["digital-commerce-transformation"]
whyCorewayData["business-workflow-automation"]
whyCorewayData["custom-api-systems-integration"]
whyCorewayData["ai-powered-application-platforms"]
whyCorewayData["ai-integration-services"]
whyCorewayData["ai-chat-with-pdf"]
whyCorewayData["pharmaceuticals-healthcare"]
whyCorewayData["furniture-home-decor"]
whyCorewayData["food-beverage"]
whyCorewayData["manufacturing-iot"]
whyCorewayData["fashion-apparel"]
whyCorewayData["automotive"]
whyCorewayData["ecommerce-stores"]
whyCorewayData["custom-dashboards"]
whyCorewayData["gpt-automation"]
whyCorewayData["metadata-extraction-ai"]
whyCorewayData["dataset-management-delivery"]
whyCorewayData["aws-s3-optimization"]
whyCorewayData["cloud-storage"]
whyCorewayData["DBDashbot"]
"""

pattern = r'whyCorewayData\["([^"]+)"\]'
matches = re.findall(pattern, grep_results)
keys = sorted(set(matches))

print("Found keys:")
for key in keys:
    print(f"  - {key}")

print(f"\nTotal: {len(keys)} unique keys")
