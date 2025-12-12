"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Zap, ExternalLink, Workflow } from "lucide-react";
import Link from "next/link";
import projects from "../../data/caseStudies.json";

interface Project {
  id: number;
  title: string;
  subtitle?: string;
  challenge: string;
  solution: string;
  imageUrl: string;
  slug: string;
  overview?: string;
  process?: string[];
  impact?: {
    title: string;
    description: string;
    points: string[];
  };
  stats: { value: string; label: string }[];
  gradient: string;
  icon: string;
  industry?: string;
  client?: string;
}

const iconMap: Record<string, any> = {
  search: Sparkles,
  trending: TrendingUp,
  shield: Zap,
};

export default function PortfolioHighlights() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const current = projects[activeIndex];
  const IconComponent = iconMap[current.icon] || Sparkles;

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-[#0E0918] via-[#1a0f2e] to-[#0E0918]">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 overflow-hidden">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 md:mb-20">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-block mb-6">
            <div className="px-5 flex justify-center items-center py-2 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold backdrop-blur-sm">
              <Workflow className="w-5 h-5 mr-2" />
              Our Work
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-fuchsia-200 bg-clip-text text-transparent leading-tight">
            Case Studies
          </h2>

          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Transforming visions into reality with cutting-edge solutions that drive measurable results
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-12 gap-6 mb-12">
          {/* Large Main Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-8 relative group"
              onMouseEnter={() => setHoveredCard(current.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${current.gradient} opacity-20 group-hover:opacity-30 blur-2xl transition-all duration-500 rounded-3xl`} />

              <div className="relative h-full min-h-[400px] md:min-h-[600px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden group-hover:border-white/20 transition-all duration-500">
                <div className="absolute inset-0">
                  <motion.img
                    src={current.imageUrl}
                    alt={current.title}
                    className="w-full h-full object-cover"
                    animate={{ scale: hoveredCard === current.id ? 1.05 : 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
                </div>

                <div className="relative h-full flex flex-col justify-end p-6 md:p-8 lg:p-10">
                  {/* Icon */}
                  <motion.div
                    className="absolute top-8 right-8 w-14 h-14 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center"
                    animate={{ y: hoveredCard === current.id ? -5 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Industry */}
                  {current.industry && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 mb-4 w-fit">
                      <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium">
                        {current.industry}
                      </span>
                    </motion.div>
                  )}

                  <motion.h3 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                    {current.title}
                  </motion.h3>

                  {current.subtitle && (
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-gray-300 text-base md:text-lg mb-4 md:mb-6 line-clamp-2">
                      {current.subtitle}
                    </motion.p>
                  )}

                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                    <Link href={`/case-studies/${current.slug}`}>
                      <motion.button whileHover={{ scale: 1.02, x: 5 }} whileTap={{ scale: 0.98 }} className="cursor-pointer inline-flex items-center gap-3 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-lg">
                        <span>View Case Study</span>
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT SIDE – Stats & Impact */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 gap-4 md:gap-x-6 md:gap-y-4">
            {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4 md:gap-6">
  <AnimatePresence mode="wait">
    {current.stats.slice(0, 4).map((stat, idx) => (
      <motion.div
        key={`${current.id}-${idx}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ delay: idx * 0.1 }}
        whileHover={{ scale: 1.05, y: -5 }}
        className="relative group/stat w-full"
      >
        {/* Hover Gradient */}
        <div className={`absolute -inset-1 bg-gradient-to-br ${current.gradient} opacity-0 group-hover/stat:opacity-30 blur-xl transition-all duration-500 rounded-2xl`} />

        {/* Card */}
        <div className="relative h-[150px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-5 group-hover/stat:border-white/20 transition-all duration-300 flex flex-col justify-center items-center text-center w-full">
          {/* Icon */}
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${current.gradient} opacity-20 mb-2`} />

          {/* Value */}
          <p className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${current.gradient} bg-clip-text text-transparent`}>
            {stat.value}
          </p>

          {/* Label */}
          <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
        </div>
      </motion.div>
    ))}
  </AnimatePresence>
</div>



            {/* Impact Box */}
            {current.impact && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="col-span-2 relative group mt-6"
              >
                <div className={`absolute -inset-1 bg-gradient-to-br ${current.gradient} opacity-20 group-hover:opacity-40 blur-2xl transition-all duration-500 rounded-2xl`} />
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 group-hover:border-white/20 transition-all duration-300">
                  {/* <h3 className="text-lg md:text-xl lg:text-[21px] font-bold text-white mb-3">{current.impact.title}</h3> */}
                  {/* <p className="text-gray-300 text-base md:text-lg lg:text-[20px] mb-3">{current.impact.description}</p> */}
                  <ul className="text-white space-y-2 text-lg md:text-lg lg:text-[20px] leading-relaxed list-disc list-inside">
                    {current.impact.points.map((point, idx) => (
                      <li key={idx}>
                        {point}
                      </li>
                    ))}
                    {/* <li>  3× Faster development cycles</li>
<li>40% Reduction in technical overhead</li>
<li>100% Roadmap Clarity achieved</li>
<li>50% Faster vendor coordination</li> */}



                  
                  </ul>
                </div>
              </motion.div>
            )}


          </div>
        </div>

        {/* Navigation */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.8 }} className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {projects.map((project, i) => (
            <motion.button key={project.id} onClick={() => setActiveIndex(i)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`relative transition-all duration-300 ${activeIndex === i ? "opacity-100" : "opacity-50 hover:opacity-75"}`}>
              {activeIndex === i && (
                <motion.div layoutId="activeGlow" className={`absolute -inset-2 bg-gradient-to-r ${project.gradient} opacity-30 blur-lg rounded-2xl`} transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
              )}
              <div className={`relative cursor-pointer px-4 md:px-6 py-2 md:py-3 rounded-xl border transition-all duration-300 ${activeIndex === i ? "bg-white/10 border-white/30 backdrop-blur-md" : "bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20"}`}>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${project.gradient} ${activeIndex === i ? "opacity-100" : "opacity-50"} flex items-center justify-center`}>
                    {(() => {
                      const Icon = iconMap[project.icon] || Sparkles;
                      return <Icon className="w-4 h-4 text-white" />;
                    })()}
                  </div>
                  <span className="text-white font-medium text-xs md:text-sm">{project.client || `Project ${i + 1}`}</span>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* View All */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1 }} className="text-center mt-16">
          <Link href="/case-studies">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-pointer inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
              <span>View All Case Studies</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
