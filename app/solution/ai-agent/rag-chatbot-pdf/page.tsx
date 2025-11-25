"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, ChevronDown, ChevronUp, ArrowRight, FileText, Brain, Database, Zap, Shield, Clock, Sparkle } from 'lucide-react';
import Image from 'next/image';

// Steps data for RAG Chatbot
const stepsData = [
    {
        id: 1,
        title: "Document Upload & Processing",
        description: "Intelligent PDF parsing and text extraction",
        features: [
            {
                text: "Support for multiple PDF formats (scanned, text-based, mixed)",
                isPositive: true
            },
            {
                text: "Automatic OCR for scanned documents",
                isPositive: true
            },
            {
                text: "Preserves document structure and formatting",
                isPositive: true
            },
            {
                text: "Handles large documents (up to 1000 pages)",
                isPositive: true
            },
            {
                text: "Batch processing for multiple PDFs",
                isPositive: true
            }
        ],
        bgColor: "bg-gray-800/50",
        numberColor: "bg-purple-600"
    },
    {
        id: 2,
        title: "Intelligent Text Chunking",
        description: "Smart segmentation for optimal retrieval",
        features: [
            {
                text: "Context-aware chunking (maintains semantic meaning)",
                isPositive: true
            },
            {
                text: "Configurable chunk size (default: 1000 tokens)",
                isPositive: true
            },
            {
                text: "Overlap strategy to prevent information loss",
                isPositive: true
            },
            {
                text: "Respects paragraph and section boundaries",
                isPositive: true
            }
        ],
        bgColor: "bg-gray-800/50",
        numberColor: "bg-purple-600"
    },
    {
        id: 3,
        title: "Vector Embedding & Storage",
        description: "High-performance semantic search infrastructure",
        features: [
            {
                text: "OpenAI text-embedding-3-large model (3072 dimensions)",
                isPositive: true
            },
            {
                text: "Pinecone vector database for lightning-fast retrieval",
                isPositive: true
            },
            {
                text: "Automatic indexing and metadata tagging",
                isPositive: true
            },
            {
                text: "Scalable to millions of document chunks",
                isPositive: true
            }
        ],
        bgColor: "bg-gray-800/50",
        numberColor: "bg-purple-600"
    },
    {
        id: 4,
        title: "Contextual Query Processing",
        description: "Advanced RAG pipeline for accurate answers",
        features: [
            {
                text: "Semantic similarity search (top-k retrieval)",
                isPositive: true
            },
            {
                text: "Re-ranking for relevance optimization",
                isPositive: true
            },
            {
                text: "Context window management (up to 128k tokens)",
                isPositive: true
            },
            {
                text: "GPT-4 Turbo for answer generation",
                isPositive: true
            },
            {
                text: "Source citation with page numbers",
                isPositive: true
            }
        ],
        bgColor: "bg-gray-800/50",
        numberColor: "bg-purple-600"
    }
];

// Key features
const keyFeatures = [
    {
        icon: <Brain className="w-6 h-6" />,
        title: "Advanced AI Understanding",
        description: "Powered by GPT-4 Turbo for deep comprehension and accurate responses"
    },
    {
        icon: <Database className="w-6 h-6" />,
        title: "Persistent Memory",
        description: "Vector database stores all document knowledge for instant retrieval"
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Real-time Responses",
        description: "Sub-second query processing with streaming responses"
    },
    {
        icon: <Shield className="w-6 h-6" />,
        title: "Enterprise Security",
        description: "End-to-end encryption, SOC 2 compliant infrastructure"
    },
    {
        icon: <FileText className="w-6 h-6" />,
        title: "Multi-format Support",
        description: "PDFs, Word docs, presentations, and more"
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: "24/7 Availability",
        description: "Always-on chatbot accessible from anywhere"
    }
];

// Use cases
const useCases = [
    {
        title: "Legal Document Analysis",
        description: "Quickly extract insights from contracts, case files, and legal briefs",
        benefits: ["Contract review", "Case law research", "Compliance checking"]
    },
    {
        title: "Research & Academia",
        description: "Accelerate literature review and research paper analysis",
        benefits: ["Paper summarization", "Citation extraction", "Methodology comparison"]
    },
    {
        title: "Customer Support",
        description: "Instant answers from product manuals and documentation",
        benefits: ["Troubleshooting guides", "FAQ automation", "Product knowledge base"]
    },
    {
        title: "Financial Services",
        description: "Analyze reports, statements, and regulatory documents",
        benefits: ["Financial report analysis", "Risk assessment", "Compliance monitoring"]
    }
];

export default function RAGChatbotPage() {
    const [expandedSteps, setExpandedSteps] = useState([1, 2, 3, 4]);

    const toggleStep = (stepId: number) => {
        setExpandedSteps(prev =>
            prev.includes(stepId)
                ? prev.filter(id => id !== stepId)
                : [...prev, stepId]
        );
    };

    const renderFeature = (feature: any, index: number) => (
        <div key={index} className="flex items-start gap-3 mb-3">
            <div className={`mt-1 ${feature.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                {feature.isPositive ? (
                    <Check className="w-5 h-5" />
                ) : (
                    <X className="w-5 h-5" />
                )}
            </div>
            <span className="text-gray-300 leading-relaxed">{feature.text}</span>
        </div>
    );

    return (
        <motion.div
            className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Hero Section */}
            <div className="relative overflow-hidden border-b border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
                <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12">
                        {/* Left Side Text + Button */}
                        <div className="flex-1 flex flex-col justify-start items-start space-y-6">
                            <div className="inline-block px-4 py-2 bg-purple-600/20 border border-purple-500/50 rounded-full">
                                <span className="text-purple-400 font-semibold">🤖 AI-Powered Document Intelligence</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                                RAG Chatbot - <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Chat with PDF</span>
                            </h1>

                            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                                Transform your PDFs into intelligent conversational assistants. Ask questions, extract insights, and get instant answers from your documents using advanced Retrieval Augmented Generation (RAG) technology.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <button className="cursor-pointer group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-purple-500/50">
                                    Try Demo
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="cursor-pointer px-8 py-4 bg-transparent border-2 border-gray-700 hover:border-purple-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2">
                                    View Documentation
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6 pt-8">
                                <div>
                                    <div className="text-3xl font-bold text-purple-400">99.9%</div>
                                    <div className="text-sm text-gray-400">Accuracy Rate</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-blue-400">&lt;2s</div>
                                    <div className="text-sm text-gray-400">Response Time</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-green-400">24/7</div>
                                    <div className="text-sm text-gray-400">Availability</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side Image */}
                        <div className="flex-1 flex justify-center md:justify-end">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 blur-3xl"></div>
                                <img
                                    src="/assets/home/coreway-ai.png"
                                    alt="RAG Chatbot Illustration"
                                    className="relative w-full max-w-2xl rounded-2xl shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Features Grid */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Powerful Features
                    </h2>
                    <p className="text-xl text-gray-400">
                        Everything you need for intelligent document interaction
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {keyFeatures.map((feature, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-purple-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                        >
                            <div className="w-14 h-14 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg flex items-center justify-center text-purple-400 mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* N8N Workflow Diagram */}
            <div className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-800">
                <div className="bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            N8N Workflow Architecture
                        </h2>
                        <p className="text-xl text-gray-400">
                            Complete RAG pipeline from document upload to intelligent responses
                        </p>
                    </div>

                    <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700">
                        <img
                            src="/assets/agent/rag_chatbot.png"
                            alt="N8N RAG Workflow Diagram"
                            className="w-full rounded-lg"
                        />
                    </div>

                    <div className="mt-8 grid md:grid-cols-2 gap-6">
                        <div className="bg-purple-900/20 border border-purple-700/50 rounded-lg p-6">
                            <h3 className="text-lg font-bold text-purple-400 mb-3">Document Processing Pipeline</h3>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-400 mt-1">1.</span>
                                    <span>PDF upload via webhook trigger</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-400 mt-1">2.</span>
                                    <span>Text extraction and OCR processing</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-400 mt-1">3.</span>
                                    <span>Intelligent chunking with overlap</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-400 mt-1">4.</span>
                                    <span>Vector embedding generation (OpenAI)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-400 mt-1">5.</span>
                                    <span>Storage in Pinecone vector database</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-6">
                            <h3 className="text-lg font-bold text-blue-400 mb-3">Query Processing Pipeline</h3>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">1.</span>
                                    <span>User query received via chat interface</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">2.</span>
                                    <span>Query embedding generation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">3.</span>
                                    <span>Semantic similarity search in vector DB</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">4.</span>
                                    <span>Context retrieval and re-ranking</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">5.</span>
                                    <span>GPT-4 answer generation with citations</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        How It Works
                    </h2>
                    <p className="text-xl text-gray-400">
                        Discover the technology behind intelligent document conversations
                    </p>
                </div>

                <div className="space-y-6">
                    {stepsData.map((step) => (
                        <div
                            key={step.id}
                            className={`${step.bgColor} rounded-2xl border border-gray-700 overflow-hidden transition-all duration-300 hover:border-purple-600`}
                        >
                            <div
                                className="p-6 cursor-pointer"
                                onClick={() => toggleStep(step.id)}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`${step.numberColor} text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-lg`}>
                                        {step.id}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-2xl font-bold text-white">
                                                {step.title}
                                            </h3>
                                            {expandedSteps.includes(step.id) ? (
                                                <ChevronUp className="w-6 h-6 text-gray-400" />
                                            ) : (
                                                <ChevronDown className="w-6 h-6 text-gray-400" />
                                            )}
                                        </div>
                                        {step.description && (
                                            <p className="text-gray-400 mt-2">{step.description}</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {expandedSteps.includes(step.id) && (
                                <div className="px-6 pb-6">
                                    <div className="mt-4 pl-16">
                                        {step.features.map((feature, idx) =>
                                            renderFeature(feature, idx)
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Real-World Applications Section */}
            <motion.div
                className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
                        <div className="flex items-center gap-1">
                            <Sparkle className="w-4 h-4 text-purple-600" />
                            <span className="text-sm font-medium text-gray-300">Real-World Applications</span>
                        </div>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Transform Your Business Operations
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        See how businesses leverage RAG chatbots across industries to boost efficiency, reduce costs, and unlock new insights.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {useCases.map((useCase, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-8 hover:border-purple-600 transition-all duration-300"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <h3 className="text-2xl font-bold text-white mb-3">{useCase.title}</h3>
                            <p className="text-gray-400 mb-6">{useCase.description}</p>
                            <div className="space-y-2">
                                {useCase.benefits.map((benefit, benefitIdx) => (
                                    <div key={benefitIdx} className="flex items-center gap-2 text-gray-300">
                                        <Check className="w-4 h-4 text-green-400" />
                                        <span>{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Technical Specifications */}
            <motion.div
                className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
                    <div className="flex items-center gap-1">
                        <Sparkle className="w-4 h-4 text-purple-600" />
                        <span className="text-sm font-medium text-gray-300">Technical Specs</span>
                    </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                    Technical Specifications
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-xl font-bold text-purple-400 mb-4">AI Models</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex justify-between">
                                <span>Embedding Model:</span>
                                <span className="text-white font-semibold">text-embedding-3-large</span>
                            </li>
                            <li className="flex justify-between">
                                <span>LLM:</span>
                                <span className="text-white font-semibold">GPT-4 Turbo</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Context Window:</span>
                                <span className="text-white font-semibold">128K tokens</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Embedding Dimensions:</span>
                                <span className="text-white font-semibold">3072</span>
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div
                        className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-xl font-bold text-blue-400 mb-4">Infrastructure</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex justify-between">
                                <span>Vector Database:</span>
                                <span className="text-white font-semibold">Pinecone</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Orchestration:</span>
                                <span className="text-white font-semibold">N8N</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Max Document Size:</span>
                                <span className="text-white font-semibold">100 MB</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Supported Formats:</span>
                                <span className="text-white font-semibold">PDF, DOCX, TXT</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </motion.div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-700/50 rounded-2xl p-12 text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Ready to Transform Your Documents?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join hundreds of businesses using RAG chatbots to unlock insights from their documents. Start your free trial today.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/50">
                            Start Free Trial
                        </button>
                        <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 border border-white/20">
                            Schedule Demo
                        </button>
                    </div>
                    <p className="text-sm text-gray-400 mt-6">
                        No credit card required • 14-day free trial • Cancel anytime
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
