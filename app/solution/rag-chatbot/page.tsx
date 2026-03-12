"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, X, ChevronDown, ChevronUp, ArrowRight, FileText, Brain, Database, Zap, Shield, Clock, Sparkles, BookOpen } from 'lucide-react';
import Breadcrumb from "@/components/about/Breadcrumb";
import SubHeader from "@/components/SubHeader";
import PageCTA from "@/components/PageCTA";
import FAQ from "@/components/FAQ";
import sampleFAQs from '@/data/faqs.json';



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
    ]
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
    ]
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
    ]
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
    ]
  }
];

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

  const [caseStudy, setCaseStudy] = useState<any>(null);

  useEffect(() => {
    fetch("/api/case-studies/cmihgzaq000027ya7i1xp0siu")
      .then(res => res.json())
      .then(setCaseStudy);
  }, []);

  const subHeaderItems = [
    { label: "Overview", sectionId: "overview" },
    { label: "How It Works", sectionId: "process" },
    { label: "Features", sectionId: "features" },
    { label: "Use Cases", sectionId: "use-cases" },
    { label: "FAQ", sectionId: "faq" },
  ];

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Solutions", url: "/solutions" },
    { name: "AI Consulting", url: "/solution/ai-consulting" },
    { name: "RAG Chatbot", url: "/solution/rag-chatbot" },
  ];

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
    <div className="min-h-screen bg-[#0E0918]">
      <header className="page-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Solutions", href: "/solutions" },
              { label: "AI Consulting", href: "/solution/ai-consulting" },
              { label: "RAG Chatbot" },
            ]}
          />
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-gray-800/50">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5"></div>

          <div className="max-w-7xl mx-auto px-6 py-10 lg:py-15 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">

              {/* LEFT CONTENT – CENTERED */}
              <div className="flex-1 flex flex-col items-center space-y-6 text-center">

                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  RAG Chatbot
                  <span className="block text-transparent bg-clip-text bg-purple-500 mt-2">
                    Smart PDFs
                  </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                  Transform your PDFs into intelligent conversational assistants.
                  Ask questions, extract insights, and get instant answers from your
                  documents using advanced Retrieval Augmented Generation (RAG) technology.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 pt-4 justify-center">
                  <Link
                    href="/contact"
                    className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-purple-500/20"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/case-studies/ai-agent-rag-chatbot"
                    className="px-8 py-4 bg-white/5 border border-gray-700 hover:border-purple-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2"
                  >
                    <BookOpen className="w-5 h-5" />
                    View Case Study
                  </Link>
                </div>

                {/* Stats */}
                {/* <div className="grid grid-cols-3 gap-6 pt-8">
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
        </div> */}
              </div>

              {/* RIGHT IMAGE – SAME AS BEFORE */}
              <div className="flex-1 flex justify-center md:justify-end">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl"></div>
                  <img
                    src="/assets/home/coreway-ai.png"
                    alt="RAG Chatbot Illustration"
                    className="relative w-full max-w-2xl rounded-2xl shadow-2xl"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>



        <SubHeader title="RAG Chatbot Service" items={subHeaderItems} />

        {/* Overview Section */}
        <section id="overview" className="py-20 bg-gradient-to-b from-[#0E0918] to-[#1a0f2b]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-4 py-2 mb-6">
                  <Sparkles className="text-purple-500" size={16} />
                  <span className="text-purple-300 text-sm font-medium">Advanced Technology</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Unlock Knowledge from Your Documents
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Our RAG Chatbot service combines the power of large language models with your organization's documents to create an intelligent assistant that can answer questions, provide insights, and help you make data-driven decisions.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Whether you're dealing with legal contracts, research papers, technical manuals, or business reports, our RAG technology ensures accurate, contextual responses backed by your actual documents.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8">
                <img
                  src="/assets/agent/rag_chatbot.png"
                  alt="RAG Workflow Diagram"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="process" className="py-20 bg-[#0E0918]">
          <div className="max-w-6xl mx-auto px-6">
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
                  className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-purple-600/50"
                >
                  <div
                    className="p-6 cursor-pointer"
                    onClick={() => toggleStep(step.id)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-lg">
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
        </section>

        {/* Key Features Grid */}
        <section id="features" className="py-20 bg-gradient-to-b from-[#1a0f2b] to-[#0E0918]">
          <div className="max-w-7xl mx-auto px-6">
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
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg flex items-center justify-center text-purple-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="py-20 bg-[#0E0918]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
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
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-8 hover:border-purple-600/50 transition-all duration-300"
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
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-20 bg-[#0E0918]">
          <div className="max-w-7xl mx-auto px-6">

            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-medium text-gray-300">Success Story</span>
                </div>
              </div>

              <h2 className="text-4xl font-bold text-white mb-4">
                See {caseStudy?.title} in Action
              </h2>

              <p className="text-xl text-gray-400">
                {caseStudy?.subtitle}
              </p>
            </div>

            {/* Card */}
            <Link href={`/case-studies/${caseStudy?.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group cursor-pointer relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500"
              >
                <div className="grid md:grid-cols-2">

                  {/* Image */}
                  <div className="relative h-80 md:h-auto overflow-hidden">
                    <img
                      src={caseStudy?.bannerImage}
                      alt={caseStudy?.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0E0918]/80 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <span className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full text-purple-300 text-sm mb-4 w-fit">
                      {caseStudy?.industry}
                    </span>

                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {caseStudy?.title}
                    </h3>

                    <p className="text-lg text-gray-300 mb-6">
                      {caseStudy?.overview}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {caseStudy?.stats.slice(0, 3).map((stat: any, i: number) => (
                        <div
                          key={i}
                          className="bg-white/5 border border-white/10 rounded-lg p-4 text-center"
                        >
                          <div className="text-2xl font-bold text-purple-400">
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-400">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <span className="text-purple-400 font-semibold text-lg flex items-center gap-2">
                      Read Full Case Study
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 bg-gradient-to-b from-[#1a0f2b] to-[#0E0918]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-medium text-gray-300">Technical Specs</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Technical Specifications
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
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
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
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
                    <span className="text-white font-semibold">100 MB</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Supported Formats:</span>
                    <span className="text-white font-semibold">PDF, DOCX, TXT</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <div id="faq" className="bg-[#0E0918]">
          <FAQ
            badge="Help Center"
            title="Common Questions & Answers"
            description="Everything you need to know about our RAG Chatbot service"
            faqs={sampleFAQs["ai-consulting"]}
            columns={1}
            showContactCTA={true}
            contactText="Still have questions?"
            contactButtonText="Contact Our Team"
          />
        </div>

        {/* CTA Section */}
        <PageCTA
          badge="Ready to Transform?"
          title="Ready to Transform Your Documents?"
          description="Join hundreds of businesses using RAG chatbots to unlock insights from their documents. Start your AI journey today and experience the power of intelligent document interaction."
          primaryButtonText="Get Started"
          secondaryButtonText="View Case Study"
          secondaryButtonlink="/case-studies/ai-agent-rag-chatbot"
          footerText="Free consultation • Custom implementation • Proven results"
        />
      </main>
    </div>
  );
}
