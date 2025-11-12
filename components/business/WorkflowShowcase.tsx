"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const workflows = [
  {
    title: "Lead enrichment",
    description:
      "Automatically enrich leads from your CRM with data from multiple sources",
    category: "Sales",
    bgImage: "/images/workflows/lead-enrichment.jpg",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Customer onboarding",
    description:
      "Create seamless onboarding experiences that sync across all your tools",
    category: "Success",
    bgImage: "/images/workflows/customer-onboarding.jpg",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Data synchronization",
    description:
      "Keep your databases, spreadsheets, and apps in perfect sync",
    category: "Operations",
    bgImage: "/images/workflows/data-sync.jpg",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Support automation",
    description:
      "Route tickets, gather context, and respond faster to customers",
    category: "Support",
    bgImage: "/images/workflows/support-automation.jpg",
    color: "from-violet-500 to-fuchsia-500",
  },
];

export default function WorkflowScrollShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const { top } = sectionRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = window.innerHeight * workflows.length; // each = 100vh

      // Calculate scroll progress relative to this section
      const progress = (scrollTop - sectionTop) / sectionHeight;
      const index = Math.floor(progress * workflows.length);

      // Clamp index between 0 and 3
      setActiveIndex(Math.min(Math.max(index, 0), workflows.length - 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative`}
      style={{ height: `${workflows.length * 100}vh` }} // e.g. 400vh
    >
      {/* Sticky full-screen container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Animated background */}
        <AnimatePresence mode="wait">
          <motion.div
            key={workflows[activeIndex].category}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${workflows[activeIndex].bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Gradient overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${workflows[activeIndex].color} opacity-40`}
            />
          </motion.div>
        </AnimatePresence>

        {/* Text Overlay */}
        <div className="relative z-10 flex h-full items-center justify-center bg-black/40 backdrop-blur-sm">
          <motion.div
            key={workflows[activeIndex].title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="text-center px-6 max-w-3xl"
          >
            <p className="text-cyan-300 uppercase tracking-widest mb-4 text-sm font-semibold">
              {workflows[activeIndex].category}
            </p>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {workflows[activeIndex].title}
            </h2>
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
              {workflows[activeIndex].description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
