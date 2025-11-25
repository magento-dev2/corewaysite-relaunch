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

interface Reason {
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

}

export default function WhyCorewaySection({
  badge = "Why Choose Us",
  title = "Why Choose Coreway Solutions",
  subtitle = "We're not just another software company. We're your technology partner committed to delivering exceptional results.",
  
}: WhyCorewaySectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".why-header", {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: ".why-header",
          start: "top 80%",
        }
      });

      const reasonCards = gsap.utils.toArray<HTMLElement>('.reason-card');
      reasonCards.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 60%",
            scrub: 1,
          }
        });
      });

      // if (showStats) {
      //   const statCards = gsap.utils.toArray<HTMLElement>('.stat-card');
      //   statCards.forEach((card) => {
      //     gsap.from(card, {
      //       opacity: 0,
      //       scale: 0.8,
      //       scrollTrigger: {
      //         trigger: card,
      //         start: "top 90%",
      //         end: "top 70%",
      //         scrub: 1,
      //       }
      //     });
      //   });
      // }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918] relative overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.03] hover:bg-white/10">
        <div className="why-header text-center mb-16">
          {badge && (
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
              <Star className="text-purple-500" size={16} fill="currentColor" />
              <span className="text-gray-300 text-sm font-medium">{badge}</span>
            </div>
          )}

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        </div>
          

{/* 
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = iconMap[reason.icon] || Star;
            return (
              <div key={index} className="reason-card group">
                <div className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.03] hover:bg-white/10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-all"></div>

                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/30">
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {reason.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-6">
                      {reason.description}
                    </p>

                    {reason.stat && (
                      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                        <div className="flex-1">
                          <div className="text-3xl font-bold text-purple-400 mb-1">
                            {reason.stat}
                          </div>
                          {reason.statLabel && (
                            <div className="text-sm text-gray-500">
                              {reason.statLabel}
                            </div>
                          )}
                        </div>
                        <CheckCircle2 className="text-green-400 flex-shrink-0" size={24} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </section>
  );
}
