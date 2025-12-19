"use client";

import { motion } from "framer-motion";
import { Clock, TrendingUp, Users, Shield, DollarSign, Zap } from "lucide-react";

const benefits = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Save 95% of Your Time",
    description: "What used to take days now takes minutes. Automate tedious manual organization work.",
    stat: "40+ hours saved per month",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Boost Productivity",
    description: "Find images instantly with smart categorization. No more endless scrolling through folders.",
    stat: "10x faster search & retrieval",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Reduce Storage Costs",
    description: "Eliminate duplicates and compress intelligently. Save up to 60% on storage expenses.",
    stat: "$5,000+ saved annually",
    color: "from-purple-600 to-violet-500",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Team Collaboration",
    description: "Standardized organization makes it easy for teams to find and share assets.",
    stat: "3x better collaboration",
    color: "from-violet-600 to-purple-500",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with GDPR, HIPAA, and SOC 2 standards.",
    stat: "99.99% data integrity",
    color: "from-purple-500 to-violet-700",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description: "Process 100,000+ images per hour with parallel processing and GPU acceleration.",
    stat: "100K images/hour",
    color: "from-violet-500 to-purple-700",
  },
];

export default function ImageReorgBenefits() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0A0F1E] to-[#0E0918] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold mb-4">
            Key Benefits
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transform Your Image Workflow
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from companies using our image Recognitiontool
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:border-purple-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-violet-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <div className="text-white">{benefit.icon}</div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">{benefit.description}</p>

                  <div className="pt-6 border-t border-white/10">
                    <div className="text-2xl font-bold text-purple-400 mb-1">{benefit.stat}</div>
                    <div className="text-sm text-gray-400">Average customer result</div>
                  </div>
                </div>
              </div>

              <div className={`absolute -inset-0.5 bg-gradient-to-r ${benefit.color} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity -z-10`}></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-purple-900/30 to-violet-900/30 border border-purple-500/30 rounded-2xl p-8 backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Join 500+ Companies Already Saving Time
              </h3>
              <p className="text-gray-300 mb-6">
                From Fortune 500 enterprises to creative agencies, teams trust our tool to manage millions of images
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-purple-400 mb-1">2.5B+</div>
                  <div className="text-sm text-gray-400">Images Processed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-violet-400 mb-1">500+</div>
                  <div className="text-sm text-gray-400">Enterprise Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-400 mb-1">99.9%</div>
                  <div className="text-sm text-gray-400">Uptime SLA</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
