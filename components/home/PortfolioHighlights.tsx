"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, TrendingUp, Award } from "lucide-react";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  challenges: string;
  solutions: string;
  stats: { value: string; label: string; icon?: string }[];
  imageUrl: string;
  imageAlt: string;
  slug: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Headless eCommerce Migration",
    slug: "headless-ecommerce-migration",
    challenges:
      "Patients struggled with fragmented care journeys due to disconnected systems and records.",
    solutions:
      "Developed a unified platform integrating telehealth and EHR workflows for more connected services.",
    stats: [
      { value: "500+", label: "Hours Freed from Manual Work", icon: "clock" },
      { value: "~1200", label: "In-Person Visits Avoided", icon: "users" },
    ],
    imageUrl:
      "https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg?auto=compress&cs=tinysrgb&w=1920",
    imageAlt: "Telehealth Dashboard",
    tags: ["Healthcare", "Telehealth", "Integration"]
  },
  {
    id: 2,
    title: "AI Dataset Delivery Platform for Enterprises",
    slug: "ai-dataset-delivery-platform-for-enterprises",
    challenges:
      "Data teams faced long delays in preparing large-scale AI datasets securely across regions.",
    solutions:
      "Built a multi-cloud data delivery platform with GPT-based metadata extraction and secure access.",
    stats: [
      { value: "70%", label: "Faster Data Delivery", icon: "zap" },
      { value: "35%", label: "Lower Storage Cost", icon: "trending-down" },
    ],
    imageUrl:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920",
    imageAlt: "AI Data Delivery Dashboard",
    tags: ["AI/ML", "Data", "Cloud"]
  },
  {
    id: 3,
    slug: "smart-iot-lighting-dashboard",
    title: "Smart IoT Lighting Dashboard",
    challenges:
      "City operators lacked unified control and insights for thousands of connected lighting devices.",
    solutions:
      "Developed an IoT dashboard with MQTT integration, predictive maintenance, and group control.",
    stats: [
      { value: "1,000+", label: "Devices Monitored Live", icon: "activity" },
      { value: "80%", label: "Manual Work Saved", icon: "check" },
    ],
    imageUrl:
      "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1920",
    imageAlt: "IoT Lighting System",
    tags: ["IoT", "Smart City", "Dashboard"]
  },
];

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const current = projects[activeIndex];
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8
    })
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="relative bg-gradient-to-b from-[#0E0918] via-[#1a0f2b] to-[#0E0918] py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 items-start mb-20 gap-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-full mb-6">
              <Award className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">Success Stories</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent mb-4 leading-tight">
              Case Studies
            </h2>
          </div>

          <div className="flex items-center">
            <p className="text-slate-300 text-lg leading-relaxed">
              We understand the challenges of startups and SMEs. Discover how we deliver measurable results through innovative solutions across web, mobile, and enterprise platforms.
            </p>
          </div>
        </motion.div>

        <div className="relative">
          <button
            onClick={handlePrev}
            className="absolute left-[-60px] top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-slate-800/60 hover:bg-slate-700/80 backdrop-blur-md text-white p-4 rounded-full border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:scale-110 shadow-xl hidden lg:flex items-center justify-center"
            aria-label="Previous case study"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-[-60px] top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-slate-800/60 hover:bg-slate-700/80 backdrop-blur-md text-white p-4 rounded-full border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:scale-110 shadow-xl hidden lg:flex items-center justify-center"
            aria-label="Next case study"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 }
              }}
              ref={containerRef}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-8">
                <div className="flex flex-wrap gap-2">
                  {current.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 rounded-full text-xs font-semibold border border-emerald-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {current.title}
                </h3>

                <div className="space-y-6">
                  <div className="relative pl-6 border-l-2 border-emerald-500/30">
                    <div className="absolute left-[-5px] top-0 w-2 h-2 bg-emerald-500 rounded-full" />
                    <p className="text-sm font-semibold text-emerald-400 mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Challenge
                    </p>
                    <p className="text-slate-300 leading-relaxed">{current.challenges}</p>
                  </div>

                  <div className="relative pl-6 border-l-2 border-teal-500/30">
                    <div className="absolute left-[-5px] top-0 w-2 h-2 bg-teal-500 rounded-full" />
                    <p className="text-sm font-semibold text-teal-400 mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Solution
                    </p>
                    <p className="text-slate-300 leading-relaxed">{current.solutions}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-6">
                  {current.stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 + 0.3 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 hover:border-emerald-500/30 transition-all duration-300">
                        <p className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
                          {stat.value}
                        </p>
                        <p className="text-sm text-slate-400 leading-snug">{stat.label}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <Link href={`/case-studies/${current.slug}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/40"
                  >
                    View Full Case Study
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </Link>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl" />
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50 group">
                  <img
                    src={current.imageUrl}
                    alt={current.imageAlt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-center gap-3">
          {projects.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => {
                setDirection(i > activeIndex ? 1 : -1);
                setActiveIndex(i);
              }}
              className="relative group"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? 'w-12 bg-gradient-to-r from-emerald-500 to-teal-500'
                    : 'w-2 bg-slate-600 group-hover:bg-slate-500'
                }`}
              />
            </motion.button>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-8 lg:hidden">
          <button
            onClick={handlePrev}
            className="cursor-pointer bg-slate-800/60 hover:bg-slate-700/80 backdrop-blur-md text-white p-3 rounded-full border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300"
            aria-label="Previous case study"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="cursor-pointer bg-slate-800/60 hover:bg-slate-700/80 backdrop-blur-md text-white p-3 rounded-full border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300"
            aria-label="Next case study"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
