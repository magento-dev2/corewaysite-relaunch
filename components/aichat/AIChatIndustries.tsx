"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, BookOpen, Scale, PenTool, User, Sparkle } from "lucide-react";

const industries = [
  {
    icon: GraduationCap,
    title: "Students and Researchers",
    description: "Extract key insights from academic papers, research documents, and study materials instantly.",
    useCases: ["Research papers", "Study materials", "Thesis documents"]
  },
  {
    icon: Briefcase,
    title: "Business Professionals",
    description: "Quickly find information in reports, contracts, and business documents to make informed decisions.",
    useCases: ["Business reports", "Contracts", "Market analysis"]
  },
  {
    icon: BookOpen,
    title: "Educators and Trainers",
    description: "Access teaching materials, curriculum documents, and educational resources with ease.",
    useCases: ["Course materials", "Training docs", "Educational content"]
  },
  {
    icon: Scale,
    title: "Legal Professionals",
    description: "Navigate through legal documents, case files, and regulations efficiently and accurately.",
    useCases: ["Legal briefs", "Case files", "Regulations"]
  },
  {
    icon: PenTool,
    title: "Content Creators",
    description: "Research and extract information from multiple sources to create compelling content.",
    useCases: ["Source materials", "Reference docs", "Research notes"]
  },
  {
    icon: User,
    title: "General Users",
    description: "Anyone needing quick answers from PDFs, manuals, guides, or any document type.",
    useCases: ["User manuals", "Guides", "Documentation"]
  }
];

export default function AIChatIndustries() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a0f2b] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <div className="flex items-center gap-1">
              <Sparkle className="w-4 h-4 text-purple-600" />   
              
            <span className="text-sm font-medium text-gray-300">Who Benefits</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Perfect for Every Professional
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            From students to legal professionals, our AI-powered system adapts to your specific needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-purple-500/30">
                    <Icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {industry.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {industry.description}
                  </p>

                  <div className="space-y-2">
                    {industry.useCases.map((useCase, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                        <span className="text-sm text-gray-500">{useCase}</span>
                      </div>
                    ))}
                  </div>

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
