"use client";

import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Target, Users, GitBranch, Scaling } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Optimized Workflow with AI",
    description: "Speeds up data retrieval, reduces manual effort, and increases operational efficiency dramatically.",
    stats: "3x Faster"
  },
  {
    icon: DollarSign,
    title: "Cost Efficiency for Businesses",
    description: "Automates document management, cuts labor costs, and enhances ROI with intelligent automation.",
    stats: "60% Cost Reduction"
  },
  {
    icon: Target,
    title: "Improved Decision Making with AI Insights",
    description: "Provides instant access to critical data for faster, more informed decision-making processes.",
    stats: "Real-time Insights"
  },
  {
    icon: Users,
    title: "Enhanced Productivity for Teams",
    description: "Shifts focus from manual searches to high-value tasks, boosting team efficiency and output.",
    stats: "80% Time Saved"
  },
  {
    icon: GitBranch,
    title: "Streamlined Collaboration Across Teams",
    description: "Empowers teams with shared document access and AI query resolution for seamless collaboration.",
    stats: "Team-wide Access"
  },
  {
    icon: Scaling,
    title: "Scalable Solution for Growing Businesses",
    description: "Handles increased document loads and complex queries as your business grows and evolves.",
    stats: "Unlimited Scale"
  }
];

export default function AIChatBenefits() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#1a0f2b] to-[#0E0918] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
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
            <span className="text-sm font-medium text-gray-300">Key Benefits</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transform Your Business Operations
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience measurable improvements across all aspects of document management and team productivity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative"
              >
                <div className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-purple-500/40">
                      <Icon className="w-6 h-6 text-purple-400" strokeWidth={2} />
                    </div>
                    <div className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full">
                      <span className="text-xs font-semibold text-purple-300">{benefit.stats}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {benefit.description}
                  </p>

                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-violet-500/0 group-hover:from-purple-500/5 group-hover:to-violet-500/5 rounded-2xl transition-all duration-300"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
