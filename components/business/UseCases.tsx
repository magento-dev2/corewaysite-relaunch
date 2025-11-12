"use client";

import { useEffect, useState, useRef } from "react";
import {
  ShoppingCart,
  Users,
  Database,
  BarChart,
  Mail,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const workflows = [
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Automate order processing, inventory management, and customer communications effortlessly.",
    image: "/images/workflow-ecommerce.jpg",
  },
  {
    icon: Users,
    title: "Marketing",
    description:
      "Run omnichannel campaigns that sync your CRM, email, and ad platforms automatically.",
    image: "/images/workflow-marketing.jpg",
  },
  {
    icon: Database,
    title: "Data Operations",
    description:
      "Transform, sync, and clean data pipelines across your internal and external systems.",
    image: "/images/workflow-dataops.jpg",
  },
  {
    icon: BarChart,
    title: "Analytics",
    description:
      "Aggregate metrics and reports across departments to make smarter, faster decisions.",
    image: "/images/workflow-analytics.jpg",
  },
  {
    icon: Mail,
    title: "Communication",
    description:
      "Personalize internal and customer messages across Slack, email, and chatbots.",
    image: "/images/workflow-communication.jpg",
  },
  {
    icon: Zap,
    title: "DevOps",
    description:
      "Deploy, monitor, and resolve infrastructure issues automatically with zero downtime.",
    image: "/images/workflow-devops.jpg",
  },
];

export default function UseCases() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Detect scroll progress within the section
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const totalHeight = rect.height;
      const progress = Math.min(
        1,
        Math.max(0, (scrollPosition - sectionTop) / totalHeight)
      );
      const newIndex = Math.floor(progress * workflows.length);
      setActiveIndex(Math.min(workflows.length - 1, Math.max(0, newIndex)));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[400vh] bg-gradient-to-b from-[#1a1325] to-[#0E0918]"
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Workflow List */}
          <div className="space-y-6">
            {workflows.map((workflow, index) => {
              const Icon = workflow.icon;
              return (
                <div
                  key={index}
                  className={`transition-all duration-500 border rounded-xl p-6 backdrop-blur-sm cursor-default ${
                    index === activeIndex
                      ? "bg-white/10 border-purple-500 shadow-lg shadow-purple-500/20"
                      : "bg-white/5 border-white/10 opacity-70"
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 rounded-md bg-purple-600/40">
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {workflow.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {workflow.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Scroll-based Image Preview */}
          <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-xl border border-white/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={workflows[activeIndex].title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <img
                  src={workflows[activeIndex].image}
                  alt={workflows[activeIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-2xl font-bold">
                    {workflows[activeIndex].title}
                  </h4>
                  <p className="text-sm text-gray-300 max-w-sm">
                    {workflows[activeIndex].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
