import json
import re

# Read the faqs.json file
with open('data/faqs.json', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the position where cloud-storage section starts
cloud_storage_start = content.find('"cloud-storage": [')

# Find the position where the error occurs (around line 895)
error_pos = content.find('  "cloud-storage": [\n},')

if error_pos != -1:
    # Remove the erroneous closing brace and fix the structure
    # Find the end of iot-protocols section
    iot_end = content.rfind(']', 0, error_pos)
    
    # Extract everything before cloud-storage
    before_cloud = content[:iot_end + 1]
    
    # Add proper cloud-storage section
    cloud_storage_section = ''',
  "cloud-storage": [
    {
      "question": "What cloud storage solutions do you provide?",
      "answer": "We provide cloud storage architecture, migration, optimization, backup solutions, and integration with AWS S3, Azure Blob, Google Cloud Storage, and other platforms."
    },
    {
      "question": "Can you migrate data to cloud storage?",
      "answer": "Yes! We provide seamless cloud migration with minimal downtime, data validation, security measures, and post-migration optimization."
    },
    {
      "question": "Do you provide multi-cloud storage solutions?",
      "answer": "Absolutely! We implement multi-cloud strategies with data replication, failover, and unified management across AWS, Azure, and GCP."
    },
    {
      "question": "Can you optimize cloud storage costs?",
      "answer": "Yes! We reduce costs through intelligent tiering, lifecycle policies, compression, deduplication, and optimal storage class selection."
    },
    {
      "question": "Do you provide cloud backup solutions?",
      "answer": "Yes! We implement automated backup strategies, disaster recovery plans, versioning, and compliance-ready backup solutions."
    }
  ],
  "erp-solutions": [
    {
      "question": "What is an ERP system?",
      "answer": "An ERP (Enterprise Resource Planning) system is a unified software platform that integrates all core business processes including finance, HR, inventory, CRM, supply chain, and manufacturing into one centralized system for improved efficiency and visibility."
    },
    {
      "question": "How long does ERP implementation take?",
      "answer": "Implementation timelines vary based on company size and complexity. Small businesses typically take 3-6 months, while enterprise implementations can take 6-18 months. We provide detailed timelines during the discovery phase."
    },
    {
      "question": "Can you customize the ERP system for our specific needs?",
      "answer": "Absolutely! We build fully customizable ERP solutions tailored to your industry, workflows, and business requirements. All modules can be configured to match your exact processes."
    },
    {
      "question": "Will ERP integrate with our existing systems?",
      "answer": "Yes! Our ERP solutions seamlessly integrate with your existing CRM, accounting software, e-commerce platforms, payment gateways, and third-party tools through APIs and custom connectors."
    },
    {
      "question": "How much does an ERP system cost?",
      "answer": "ERP costs vary based on modules, users, customization, and deployment (cloud vs on-premise). We offer flexible pricing models including subscription-based and one-time licensing. Contact us for a customized quote."
    },
    {
      "question": "Do you provide training and support after implementation?",
      "answer": "Yes! We provide comprehensive user training, admin training, documentation, 24/7 support, regular updates, and ongoing optimization to ensure successful ERP adoption and long-term success."
    }
  ]
}'''
    
    # Write the fixed content
    with open('data/faqs.json', 'w', encoding='utf-8') as f:
        f.write(before_cloud + cloud_storage_section)
    
    print("Fixed faqs.json successfully!")
    
    # Validate the JSON
    with open('data/faqs.json', 'r', encoding='utf-8') as f:
        json.load(f)
    print("JSON is now valid!")
else:
    print("Could not find the error position")
