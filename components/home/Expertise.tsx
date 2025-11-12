"use client";

import { motion } from "framer-motion";
import { ArrowRight, Brain, ShoppingCart, Workflow, Smartphone, BarChart3, Cloud } from "lucide-react";

const expertiseAreas = [
  {
    icon: Brain,
    title: "AI & Data Engineering",
    description:
      "We create intelligent systems powered by GPT, Vision AI, and advanced data pipelines — enabling smarter analytics, automation, and decision-making.",
    link: "#",
    linkText: "Explore AI & Data",
  },
  {
    icon: ShoppingCart,
    title: "Commerce Solutions",
    description:
      "We design scalable eCommerce and marketplace platforms — from new store development to replatforming, omnichannel growth, and system integration.",
    link: "#",
    linkText: "Explore Commerce",
  },
  {
    icon: Workflow,
    title: "Automation & Integration",
    description:
      "We automate your workflows and connect platforms — linking payments, ERP, CRM, logistics, and marketing tools into one intelligent system.",
    link: "#",
    linkText: "Explore Automation",
  },
  {
    icon: Smartphone,
    title: "Mobile & Web Applications",
    description:
      "We build high-performance mobile and web applications with intuitive UX, modern frameworks, and secure architecture tailored to your goals.",
    link: "#",
    linkText: "Explore App Development",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "We transform data into clarity with real-time dashboards, predictive analytics, and performance tracking to drive measurable growth.",
    link: "#",
    linkText: "Explore Analytics",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "We design reliable, automated, and secure cloud infrastructures — ensuring seamless deployment, scalability, and performance optimization.",
    link: "#",
    linkText: "Explore Cloud & DevOps",
  },
];

export default function Expertise() {
  return (
    <section className="relative bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918] py-24 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-300">What We Specialize In</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Expertise
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions across technology domains to power your digital transformation
          </p>
        </motion.div>

        <div className="space-y-12">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {area.title}
                    </h3>
                  </div>

                  <div className="md:col-span-8">
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
                      {area.description}
                    </p>
                    <a
                      href={area.link}
                      className="group/link inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-all text-sm"
                    >
                      <span>{area.linkText}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
