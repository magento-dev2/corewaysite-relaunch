"use client";

import { motion } from "framer-motion";
import { Brain, FileStack, Zap, Puzzle, Shield, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Natural Language Processing (NLP)",
    description: "Understands queries in human language for accurate and intuitive results. Our advanced NLP engine comprehends context and intent."
  },
  {
    icon: FileStack,
    title: "Multi-Document Support",
    description: "Allows users to upload and query multiple PDFs simultaneously. Manage entire document libraries effortlessly."
  },
  {
    icon: Zap,
    title: "Speed and Accuracy",
    description: "Processes and delivers precise answers within seconds. Lightning-fast response times without compromising accuracy."
  },
  {
    icon: Puzzle,
    title: "Customizable Integration",
    description: "Seamlessly integrates with existing workflows and platforms. API support for custom implementations."
  },
  {
    icon: Shield,
    title: "Secure Data Handling",
    description: "Ensures the highest level of privacy and security for uploaded documents. Enterprise-grade encryption and compliance."
  },
  {
    icon: BarChart3,
    title: "Search History and Analytics",
    description: "Tracks queries and provides insights to improve efficiency and decision-making. Detailed usage analytics and reports."
  }
];

export default function AIChatFeatures() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a0f2b] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-300">Powerful Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Advanced AI Capabilities
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leveraging the latest advancements in AI and machine learning to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-purple-500/30">
                    <Icon className="w-7 h-7 text-purple-400 group-hover:text-purple-300 transition-colors" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
