"use client";

import { motion } from "framer-motion";
import {
    Database,
    Shield,
    Zap,
    BarChart3,
    RefreshCw,
    Lock,
    Cloud,
    FileCheck,
    Workflow
} from "lucide-react";

const services = [
    {
        icon: Database,
        title: "S3 Bucket Architecture & Setup",
        description: "Design and implement scalable S3 bucket structures with proper naming conventions, folder hierarchies, and access patterns optimized for your use case."
    },
    {
        icon: Shield,
        title: "Security & Access Control",
        description: "Configure IAM policies, bucket policies, ACLs, and encryption (SSE-S3, SSE-KMS) to ensure enterprise-grade security and compliance."
    },
    {
        icon: Zap,
        title: "Performance Optimization",
        description: "Implement transfer acceleration, multipart uploads, CloudFront CDN integration, and intelligent caching strategies for lightning-fast performance."
    },
    {
        icon: BarChart3,
        title: "Cost Optimization & Lifecycle Management",
        description: "Reduce storage costs by up to 70% with intelligent tiering, lifecycle policies, and automated archival to Glacier and Deep Archive."
    },
    {
        icon: RefreshCw,
        title: "Versioning & Backup Solutions",
        description: "Enable versioning, cross-region replication, and automated backup strategies to protect against data loss and ensure business continuity."
    },
    {
        icon: Lock,
        title: "Compliance & Data Governance",
        description: "Implement object lock, legal hold, retention policies, and audit logging to meet regulatory requirements (GDPR, HIPAA, SOC 2)."
    },
    {
        icon: Cloud,
        title: "Multi-Cloud Storage Integration",
        description: "Integrate S3 with Wasabi, MinIO, Cloudflare R2, and other storage providers for redundancy and cost optimization."
    },
    {
        icon: FileCheck,
        title: "Data Migration & Transfer",
        description: "Migrate large datasets from on-premise or other cloud providers to S3 with zero downtime using AWS DataSync, Transfer Family, and custom solutions."
    },
    {
        icon: Workflow,
        title: "Automation & Event-Driven Workflows",
        description: "Set up S3 event notifications, Lambda triggers, and automated workflows for file processing, transformation, and distribution."
    }
];

export default function S3ServicesGrid() {
    return (
        <section className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a0f2b] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05),transparent_70%)] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
                        <span className="text-sm font-medium text-gray-300">What We Do</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Comprehensive <span className="text-purple-500">S3 Operations</span> Services
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        From architecture design to ongoing optimization, we handle every aspect of your AWS S3 infrastructure
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-2xl flex items-center justify-center border border-purple-500/40 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                        <Icon className="w-8 h-8 text-purple-400" strokeWidth={2} />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        {service.description}
                                    </p>

                                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
