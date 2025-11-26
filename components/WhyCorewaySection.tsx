"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Trophy,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Clock,
  CheckCircle2,
  Star,
  LucideIcon
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const iconMap: Record<string, LucideIcon> = {
  trophy: Trophy,
  zap: Zap,
  shield: Shield,
  users: Users,
  trending: TrendingUp,
  clock: Clock,
  star: Star
};

export interface Reason {
  icon: string;
  title: string;
  description: string;
  stat?: string;
  statLabel?: string;
}

interface WhyCorewaySectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  reasons?: Reason[];
}

const defaultReasons: Reason[] = [
  {
    icon: "trophy",
    title: "Award Winning Agency",
    description: "Recognized for excellence in digital innovation and software development.",
  },
  {
    icon: "zap",
    title: "Fast Delivery",
    description: "Rapid prototyping and agile development to get your product to market sooner.",
  },
  {
    icon: "shield",
    title: "Enterprise Security",
    description: "Bank-grade security protocols ensuring your data remains protected at all times.",
  },
  {
    icon: "users",
    title: "Expert Team",
    description: "A dedicated team of senior developers and designers working on your project.",
  }
];

export default function WhyCorewaySection({
  badge = "Why Choose Us",
  title = "Why Choose Coreway Solutions",
  subtitle = "We're not just another software company. We're your technology partner committed to delivering exceptional results.",
  reasons = defaultReasons
}: WhyCorewaySectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(".why-header-content", {
        opacity: 0,
        x: -50,
        duration: 1,
        scrollTrigger: {
          trigger: ".why-header-content",
          start: "top 80%",
        }
      });

      // List items animation
      const reasonItems = gsap.utils.toArray<HTMLElement>('.reason-item');
      gsap.from(reasonItems, {
        opacity: 0,
        x: 50,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".reasons-list",
          start: "top 80%",
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918] relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Header Content */}
          <div className="why-header-content">
            {badge && (
              <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
                <Star className="text-purple-500" size={16} fill="currentColor" />
                <span className="text-gray-300 text-sm font-medium">{badge}</span>
              </div>
            )}

            <h2 className="text-3xl md:text-4xl  font-bold text-white mb-6 leading-tight">
              {title.split(' ').map((word, index) => {
                const shouldHighlight = word.toLowerCase().includes('coreway') || word.toLowerCase().includes('choose');
                return shouldHighlight ? (
                  <span key={index} className="text-purple-500"> {word}</span>
                ) : (
                  <span key={index}> {word}</span>
                );
              })}
            </h2>

            {subtitle && (
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                {subtitle}
              </p>
            )}

            {/* <div className="mt-10">
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full"></div>
            </div> */}
          </div>

          {/* Right Column: Dynamic Reasons List */}
          <div className="reasons-list space-y-6">
            {reasons.map((reason, index) => {
              const Icon = iconMap[reason.icon] || Star;
              return (
                <div key={index} className="reason-item group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-start gap-6 p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-900/20 flex items-center justify-center border border-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-purple-400" strokeWidth={2} />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {reason.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {reason.description}
                      </p>
                      {reason.stat && (
                        <div className="mt-3 flex items-center gap-2">
                          <span className="text-purple-400 font-bold">{reason.stat}</span>
                          {reason.statLabel && <span className="text-gray-500 text-xs uppercase tracking-wider">{reason.statLabel}</span>}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
}
