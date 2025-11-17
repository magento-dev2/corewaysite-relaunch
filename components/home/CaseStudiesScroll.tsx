"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    title: "Headless eCommerce Migration",
    slug: "headless-ecommerce-migration",
    description:
      "Developed a unified platform integrating telehealth and EHR workflows for more connected services.",
    category: "Healthcare",
    stats: "500+ Hours Freed",
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
    stats: "70% Faster Delivery",
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
    stats: "1,000+ Devices Monitored",
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

        <div className="relative z-10 flex h-full items-center justify-center bg-black/50 backdrop-blur-sm px-6">
          <motion.div
            key={`content-${caseStudies[activeIndex].title}`}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center max-w-4xl"
          >
            <p className="text-cyan-300 uppercase tracking-widest mb-4 text-sm font-semibold">
              {caseStudies[activeIndex].category}
            </p>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {caseStudies[activeIndex].title}
            </h2>
            <p className="text-gray-200 text-xl md:text-2xl leading-relaxed mb-8">
              {caseStudies[activeIndex].description}
            </p>

            <div className="flex flex-col items-center gap-6 mt-10">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                {caseStudies[activeIndex].stats}
              </div>

              <Link
                href={`/case-studies/${caseStudies[activeIndex].slug}`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold transition-all hover:scale-105 group"
              >
                Read full case study
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            <div className="flex justify-center gap-3 mt-12">
              {caseStudies.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-12 bg-white"
                      : "w-6 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
