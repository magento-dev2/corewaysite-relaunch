"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Brain, FileStack, Zap, Puzzle, Shield, BarChart3 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    icon: Brain,
    title: "Natural Language Processing (NLP)",
    description: "Understands queries in human language for accurate and intuitive results. Our advanced NLP engine comprehends context and intent.",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: FileStack,
    title: "Multi-Document Support",
    description: "Allows users to upload and query multiple PDFs simultaneously. Manage entire document libraries effortlessly.",
    color: "from-violet-500 to-purple-600"
  },
  {
    icon: Zap,
    title: "Speed and Accuracy",
    description: "Processes and delivers precise answers within seconds. Lightning-fast response times without compromising accuracy.",
    color: "from-purple-600 to-violet-600"
  },
  {
    icon: Puzzle,
    title: "Customizable Integration",
    description: "Seamlessly integrates with existing workflows and platforms. API support for custom implementations.",
    color: "from-violet-600 to-purple-500"
  },
  {
    icon: Shield,
    title: "Secure Data Handling",
    description: "Ensures the highest level of privacy and security for uploaded documents. Enterprise-grade encryption and compliance.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: BarChart3,
    title: "Search History and Analytics",
    description: "Tracks queries and provides insights to improve efficiency and decision-making. Detailed usage analytics and reports.",
    color: "from-pink-500 to-violet-500"
  }
];

export default function AIChatFeatures() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom bottom",
          toggleActions: "play none none reverse"
        }
      });

      tl.from(".feature-header", {
        opacity: 0,
        y: 50,
        duration: 0.8,
      });

      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            opacity: 0,
            y: 100,
            scale: 0.8,
            rotationX: -15,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 50%",
              scrub: 1,
            }
          });

          gsap.to(card, {
            y: -15,
            duration: 2 + (index % 3) * 0.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.2
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-[#0E0918] to-[#1a0f2b] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="feature-header text-center mb-20">
          <div className="inline-block px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
            <span className="text-sm font-medium text-gray-300">Powerful Features</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Advanced AI <span className="bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leveraging the latest advancements in AI and machine learning to deliver exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="group perspective-1000"
              >
                <div className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform-gpu">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-2xl"></div>

                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-transparent to-violet-500/0 group-hover:from-purple-500/10 group-hover:to-violet-500/10 rounded-3xl transition-all duration-500"></div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-3xl"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
