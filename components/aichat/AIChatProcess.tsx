"use client";

import { motion } from "framer-motion";
import { Upload, MessageSquare, Zap } from "lucide-react";

const processSteps = [
  {
    icon: Upload,
    number: "01",
    title: "Upload Your PDF",
    description: "Drag and drop your document into our intuitive interface. Support for multiple PDFs simultaneously.",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: MessageSquare,
    number: "02",
    title: "Ask Your Question",
    description: "Type in your query in natural language. Our AI understands context and intent.",
    color: "from-violet-500 to-purple-600"
  },
  {
    icon: Zap,
    number: "03",
    title: "Receive Instant Answers",
    description: "The AI scans the content and provides precise, context-aware responses within seconds.",
    color: "from-purple-600 to-violet-600"
  }
];

export default function AIChatProcess() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0E0918] via-[#1a0f2b] to-[#0E0918] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-300">How It Works</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple Three-Step Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get started with AI-powered document insights in just three easy steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105">
                  <div className="absolute top-6 right-6 text-6xl font-bold text-white/5">
                    {step.number}
                  </div>

                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
