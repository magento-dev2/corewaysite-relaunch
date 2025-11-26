"use client";

import { useState, useEffect, useRef } from "react";
import {
  ShoppingCart,
  Users,
  Database,
  BarChart,
  Mail,
  Zap,
  ArrowRight,
  LucideIcon
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Workflow {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  color: string;
}

const workflows: Workflow[] = [
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Automate order processing, inventory management, and customer communications effortlessly.",
    image: "/images/workflow-ecommerce.jpg",
    color: "text-blue-400",
  },
  {
    icon: Users,
    title: "Marketing",
    description:
      "Run omnichannel campaigns that sync your CRM, email, and ad platforms automatically.",
    image: "/images/workflow-marketing.jpg",
    color: "text-pink-400",
  },
  {
    icon: Database,
    title: "Data Operations",
    description:
      "Transform, sync, and clean data pipelines across your internal and external systems.",
    image: "/images/workflow-dataops.jpg",
    color: "text-cyan-400",
  },

  {
    icon: Mail,
    title: "Communication",
    description:
      "Personalize internal and customer messages across Slack, email, and chatbots.",
    image: "/images/workflow-communication.jpg",
    color: "text-green-400",
  },
  {
    icon: Zap,
    title: "DevOps",
    description:
      "Deploy, monitor, and resolve infrastructure issues automatically with zero downtime.",
    image: "/images/workflow-devops.jpg",
    color: "text-yellow-400",
  },
];

export default function UseCases() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const Icon = workflows[activeIndex].icon;

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // Calculate progress based on how much of the section has been scrolled
      // We start counting when the section hits the top of the viewport
      const scrollDistance = -sectionTop;
      const maxScroll = sectionHeight - viewportHeight;

      // Normalize progress between 0 and 1
      let progress = scrollDistance / maxScroll;
      progress = Math.max(0, Math.min(1, progress));

      const newIndex = Math.min(
        Math.floor(progress * workflows.length),
        workflows.length - 1
      );

      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0E0918]"
      style={{ height: `${workflows.length * 50 + 50}vh` }} // Dynamic height based on content
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden py-12">

        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Built for every department
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From marketing to engineering, empower every team to build their own solutions without waiting for IT.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">

            {/* Left Column: Interactive List */}
            <div className="lg:col-span-5 space-y-4">
              {workflows.map((workflow, index) => {
                const Icon = workflow.icon;
                const isActive = index === activeIndex;
                return (
                  <div
                    key={index}
                    onClick={() => {
                      // Optional: Scroll to the position corresponding to this item
                      // For now, just setting state for immediate feedback if clicked
                      setActiveIndex(index);
                    }}
                    className={`group relative p-4 rounded-xl transition-all duration-300 cursor-pointer border ${isActive
                      ? "bg-white/10 border-purple-500/50 shadow-lg shadow-purple-500/10"
                      : "bg-transparent border-transparent hover:bg-white/5 hover:border-white/10"
                      }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-lg transition-colors duration-300 ${isActive ? 'bg-purple-500/20' : 'bg-white/5 group-hover:bg-white/10'}`}>
                        <Icon size={24} className={`${isActive ? workflow.color : 'text-gray-400 group-hover:text-white'} transition-colors duration-300`} />
                      </div>
                      <div>
                        <h3 className={`text-lg font-semibold mb-1 transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                          {workflow.title}
                        </h3>
                        <p className={`text-sm leading-relaxed transition-colors duration-300 ${isActive ? 'text-gray-300' : 'text-gray-500 group-hover:text-gray-400'}`}>
                          {workflow.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Image Preview */}
            <div className="lg:col-span-7 relative h-[400px] lg:h-[500px] xl:h-[600px] max-h-[60vh] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  {/* Image Placeholder - In a real app this would be the actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center relative group">
                    {/* Abstract Background Pattern */}
                    <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${workflows[activeIndex].color.replace('text-', 'from-').replace('-400', '-600')} to-transparent`}></div>

                    <img
                      src={workflows[activeIndex].image}
                      alt={workflows[activeIndex].title}
                      className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                      onError={(e) => {
                        // Fallback if image fails to load
                        e.currentTarget.style.display = 'none';
                      }}
                    />

                    <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center z-10">
                      <div className={`w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-8 shadow-2xl`}>
                        <Icon size={40} className={workflows[activeIndex].color} />
                      </div>
                      <h3 className="text-4xl font-bold text-white mb-4">{workflows[activeIndex].title}</h3>
                      <p className="text-xl text-gray-300 max-w-md mb-8">{workflows[activeIndex].description}</p>

                      <button className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
                        See {workflows[activeIndex].title} templates <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}