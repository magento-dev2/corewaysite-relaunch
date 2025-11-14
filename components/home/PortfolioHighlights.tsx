"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, CheckCircle2, Target, Zap } from "lucide-react";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  challenges: string;
  solutions: string;
  stats: { value: string; label: string }[];
  imageUrl: string;
  imageAlt: string;
  slug: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Headless eCommerce Migration",
    slug: "headless-ecommerce-migration",
    category: "Healthcare",
    challenges:
      "Patients struggled with fragmented care journeys due to disconnected systems and records.",
    solutions:
      "Developed a unified platform integrating telehealth and EHR workflows for more connected services.",
    stats: [
      { value: "500+", label: "Hours Freed from Manual Work" },
      { value: "~1200", label: "In-Person Visits Avoided" },
    ],
    imageUrl:
      "https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg?auto=compress&cs=tinysrgb&w=1920",
    imageAlt: "Telehealth Dashboard",
  },
  {
    id: 2,
    title: "AI Dataset Delivery Platform for Enterprises",
    slug: "ai-dataset-delivery-platform-for-enterprises",
    category: "AI & Data",
    challenges:
      "Data teams faced long delays in preparing large-scale AI datasets securely across regions.",
    solutions:
      "Built a multi-cloud data delivery platform with GPT-based metadata extraction and secure access.",
    stats: [
      { value: "70%", label: "Faster Data Delivery" },
      { value: "35%", label: "Lower Storage Cost" },
    ],
    imageUrl:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920",
    imageAlt: "AI Data Delivery Dashboard",
  },
  {
    id: 3,
    slug: "smart-iot-lighting-dashboard",
    title: "Smart IoT Lighting Dashboard",
    category: "IoT Solutions",
    challenges:
      "City operators lacked unified control and insights for thousands of connected lighting devices.",
    solutions:
      "Developed an IoT dashboard with MQTT integration, predictive maintenance, and group control.",
    stats: [
      { value: "1,000+", label: "Devices Monitored Live" },
      { value: "80%", label: "Manual Work Saved" },
    ],
    imageUrl:
      "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1920",
    imageAlt: "IoT Lighting System",
  },
];

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const current = projects[activeIndex];

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
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      rotateY: direction > 0 ? -45 : 45,
    })
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="relative bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918] py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-fuchsia-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500/20 to-violet-500/20 backdrop-blur-xl border border-purple-500/30 rounded-full mb-6 shadow-lg shadow-purple-500/20">
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="text-sm font-semibold text-purple-300">Success Stories</span>
          </div>

          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight">
            Case <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Studies</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We understand the challenges of startups and SMEs. Discover how we deliver <span className="text-purple-400 font-semibold">measurable results</span> through innovative solutions.
          </p>
        </motion.div>

        <div className="relative">
          <button
            onClick={handlePrev}
            className="absolute left-[-70px] top-1/2 -translate-y-1/2 z-30 cursor-pointer group hidden lg:block"
            aria-label="Previous case study"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl group-hover:bg-purple-500/40 transition-all duration-300"></div>
              <div className="relative bg-black/60 hover:bg-purple-900/60 backdrop-blur-md text-white p-4 rounded-full border-2 border-purple-500/50 hover:border-purple-400 transition-all duration-300 group-hover:scale-110">
                <ChevronLeft className="w-7 h-7" />
              </div>
            </div>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-[-70px] top-1/2 -translate-y-1/2 z-30 cursor-pointer group hidden lg:block"
            aria-label="Next case study"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl group-hover:bg-purple-500/40 transition-all duration-300"></div>
              <div className="relative bg-black/60 hover:bg-purple-900/60 backdrop-blur-md text-white p-4 rounded-full border-2 border-purple-500/50 hover:border-purple-400 transition-all duration-300 group-hover:scale-110">
                <ChevronRight className="w-7 h-7" />
              </div>
            </div>
          </button>

          <div className="perspective-1000">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 200, damping: 25 },
                  opacity: { duration: 0.5 },
                  rotateY: { duration: 0.5 }
                }}
              >
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="space-y-8"
                  >
                    <div className="inline-block">
                      <div className="px-4 py-2 bg-gradient-to-r from-purple-500/30 to-violet-500/30 backdrop-blur-sm border border-purple-400/40 rounded-full">
                        <span className="text-sm font-bold text-purple-300">{current.category}</span>
                      </div>
                    </div>

                    <h3 className="text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                      {current.title}
                    </h3>

                    <div className="space-y-8">
                      <div className="group">
                        <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-purple-900/20 to-violet-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl hover:border-purple-500/40 transition-all duration-300">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                              <Target className="w-5 h-5 text-white" />
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-purple-400 mb-2 uppercase tracking-wide">Challenge</p>
                            <p className="text-gray-300 leading-relaxed text-lg">{current.challenges}</p>
                          </div>
                        </div>
                      </div>

                      <div className="group">
                        <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-violet-900/20 to-fuchsia-900/20 backdrop-blur-sm border border-violet-500/20 rounded-2xl hover:border-violet-500/40 transition-all duration-300">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-fuchsia-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/30">
                              <Zap className="w-5 h-5 text-white" />
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-violet-400 mb-2 uppercase tracking-wide">Solution</p>
                            <p className="text-gray-300 leading-relaxed text-lg">{current.solutions}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-5 pt-4">
                      {current.stats.map((stat, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          className="group relative"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/10 to-purple-500/0 rounded-2xl blur-xl group-hover:from-purple-500/20 group-hover:via-purple-500/30 group-hover:to-purple-500/20 transition-all duration-500"></div>
                          <div className="relative bg-gradient-to-br from-purple-950/50 to-violet-950/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400/60 transition-all duration-300 hover:scale-105">
                            <div className="flex items-center gap-2 mb-3">
                              <CheckCircle2 className="w-5 h-5 text-purple-400" />
                              <p className="text-4xl font-black bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                                {stat.value}
                              </p>
                            </div>
                            <p className="text-sm text-gray-400 font-medium leading-tight">{stat.label}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <Link href={`/case-studies/${current.slug}`}>
                      <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-purple-500/40 transition-all duration-300 hover:shadow-purple-500/60 relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative">View Full Case Study</span>
                        <ArrowRight className="w-6 h-6 relative group-hover:translate-x-2 transition-transform duration-300" />
                      </motion.button>
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="relative group"
                  >
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 via-violet-500/30 to-fuchsia-500/30 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500 animate-pulse"></div>

                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-violet-500/20 rounded-3xl"></div>
                      <div className="relative h-[550px] rounded-3xl overflow-hidden border-2 border-purple-500/30 shadow-2xl group-hover:border-purple-400/50 transition-all duration-500">
                        <img
                          src={current.imageUrl}
                          alt={current.imageAlt}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/20 to-transparent"></div>

                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-4">
                            <p className="text-white font-semibold text-lg">{current.title}</p>
                            <p className="text-purple-300 text-sm">{current.category}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-center gap-4">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > activeIndex ? 1 : -1);
                setActiveIndex(i);
              }}
              className="group relative"
            >
              {activeIndex === i ? (
                <motion.div
                  layoutId="activeIndicator"
                  className="h-3 w-16 bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500 rounded-full shadow-lg shadow-purple-500/50"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              ) : (
                <div className="h-3 w-3 bg-gray-600 rounded-full group-hover:bg-purple-500/50 transition-all duration-300"></div>
              )}
            </button>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-8 lg:hidden">
          <button
            onClick={handlePrev}
            className="cursor-pointer bg-black/60 hover:bg-purple-900/60 backdrop-blur-md text-white p-4 rounded-full border-2 border-purple-500/50 hover:border-purple-400 transition-all duration-300"
            aria-label="Previous case study"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="cursor-pointer bg-black/60 hover:bg-purple-900/60 backdrop-blur-md text-white p-4 rounded-full border-2 border-purple-500/50 hover:border-purple-400 transition-all duration-300"
            aria-label="Next case study"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
