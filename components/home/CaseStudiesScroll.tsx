"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, TrendingUp, CheckCircle2 } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    title: "Headless eCommerce Migration",
    slug: "headless-ecommerce-migration",
    description:
      "Developed a unified platform integrating telehealth and EHR workflows for more connected services.",
    category: "Healthcare",
    stats: [
      { value: "500+", label: "Hours Freed" },
      { value: "85%", label: "Faster Load Time" }
    ],
    impactPoints: [
      "Reduced operational costs by 40%",
      "Improved customer satisfaction by 60%",
      "Increased conversion rate by 35%"
    ],
    color: "from-blue-500 to-cyan-500",
    bgImage:
      "https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    title: "AI Dataset Delivery Platform",
    slug: "ai-dataset-delivery-platform-for-enterprises",
    description:
      "Built a multi-cloud data delivery platform with GPT-based metadata extraction and secure access.",
    category: "Enterprise AI",
    stats: [
      { value: "70%", label: "Faster Delivery" },
      { value: "99.9%", label: "Uptime" }
    ],
    impactPoints: [
      "Automated 80% of manual processes",
      "Reduced data delivery time from days to hours",
      "Enhanced security with zero breaches"
    ],
    color: "from-green-500 to-emerald-500",
    bgImage:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    title: "Smart IoT Lighting Dashboard",
    slug: "smart-iot-lighting-dashboard",
    description:
      "Developed an IoT dashboard with MQTT integration, predictive maintenance, and group control.",
    category: "Smart City",
    stats: [
      { value: "1,000+", label: "Devices Monitored" },
      { value: "45%", label: "Energy Saved" }
    ],
    impactPoints: [
      "Reduced maintenance costs by 50%",
      "Improved system reliability to 99.8%",
      "Decreased response time by 75%"
    ],
    color: "from-orange-500 to-red-500",
    bgImage:
      "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
];

export default function CaseStudiesScroll() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof window === "undefined") return;

    const totalHeight = caseStudies.length * window.innerHeight;

    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${totalHeight}`,
      pin: ".case-study-sticky",
      pinSpacing: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const index = Math.floor(progress * caseStudies.length);
        setActiveIndex(Math.min(Math.max(index, 0), caseStudies.length - 1));
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${caseStudies.length * 100}vh` }}
    >
      <div className="case-study-sticky sticky top-0 h-screen w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={caseStudies[activeIndex].title}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${caseStudies[activeIndex].bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${caseStudies[activeIndex].color} opacity-50`}
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 flex h-full items-center bg-black/50 backdrop-blur-sm px-6">
          <motion.div
            key={`content-${caseStudies[activeIndex].title}`}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full max-w-7xl mx-auto"
          >
            {/* Grid Layout - Left Content, Right Stats */}
            <div className="grid lg:grid-cols-[1fr,350px] gap-12 items-start">
              {/* Left Side - Main Content */}
              <div className="text-left">
                <p className="text-cyan-300 uppercase tracking-widest mb-4 text-sm font-semibold">
                  {caseStudies[activeIndex].category}
                </p>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  {caseStudies[activeIndex].title}
                </h2>
                <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8">
                  {caseStudies[activeIndex].description}
                </p>

                {/* CTA Button - Desktop */}
                <div className="hidden lg:block">
                  <Link
                    href={`/case-studies/${caseStudies[activeIndex].slug}`}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 rounded-full text-white font-semibold transition-all hover:scale-105 group shadow-lg shadow-purple-500/50"
                  >
                    Read full case study
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>

                {/* Progress Dots */}
                <div className="flex gap-3 mt-8">
                  {caseStudies.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex
                          ? "w-12 bg-white"
                          : "w-6 bg-white/30"
                        }`}
                    />
                  ))}
                </div>
              </div>

              {/* Right Side - Stats and Impact */}
              <div className="space-y-6">
                {/* Two Statistics */}
                <div className="flex flex-col gap-6">
                  {caseStudies[activeIndex].stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="relative group"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500 rounded-2xl" />
                      <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-2">
                          <TrendingUp className="w-5 h-5 text-purple-400" />
                          <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
                            {stat.value}
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm font-medium">{stat.label}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Impact Points */}
                <div>
                  <h3 className="text-purple-300 text-sm font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Key Impact
                  </h3>
                  <div className="space-y-3">
                    {caseStudies[activeIndex].impactPoints.map((point, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-start gap-2 text-gray-200 text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button - Mobile */}
            <div className="lg:hidden mt-8 text-center">
              <Link
                href={`/case-studies/${caseStudies[activeIndex].slug}`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 rounded-full text-white font-semibold transition-all hover:scale-105 group shadow-lg shadow-purple-500/50"
              >
                Read full case study
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
