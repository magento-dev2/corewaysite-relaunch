"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Upload, MessageSquare, Zap, CheckCircle, Sparkle } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const processSteps = [
  {
    icon: Upload,
    number: "01",
    title: "Upload Your PDF",
    description: "Drag and drop your document into our intuitive interface. Support for multiple PDFs simultaneously with instant processing.",
  },
  {
    icon: MessageSquare,
    number: "02",
    title: "Ask Your Question",
    description: "Type in your query in natural language. Our AI understands context and intent to provide accurate responses.",
  },
  {
    icon: Zap,
    number: "03",
    title: "Receive Instant Answers",
    description: "The AI scans the content and provides precise, context-aware responses within seconds with source references.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Export & Share",
    description: "Save your conversation history and share insights with your team effortlessly across multiple formats.",
  }
];

export default function AIChatProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
            rotationY: index % 2 === 0 ? -20 : 20,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 40%",
              scrub: 1.5,
            }
          });

          gsap.to(card.querySelector('.step-icon'), {
            rotation: 360,
            duration: 3 + index,
            repeat: -1,
            ease: "none",
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-[#1a0f2b] to-[#0E0918] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
 <div className="flex items-center gap-1">
          <Sparkle className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-gray-300">How It Works</span>
            </div>
            </div>
          <h2 className="text-3xl md:text-4 xl font-bold text-white mb-6">
            Simple <span className="bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">Four-Step</span> Process
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Get started with AI-powered document insights in just four easy steps
          </p>
        </div>

        <div className="space-y-24">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                ref={(el) => { cardsRef.current[index] = el; }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>

                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-12 hover:border-purple-500/50 transition-all duration-500">
                      <div className="absolute top-6 right-6 text-8xl font-bold text-white/5">
                        {step.number}
                      </div>

                      <div className="step-icon w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6 shadow-2xl shadow-purple-500/50">
                        <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                      </div>

                      <h3 className="text-3xl font-bold text-white mb-4">
                        {step.title}
                      </h3>

                      <p className="text-lg text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex items-center justify-center">
                  <div className="relative w-full max-w-md">
                    <div className="aspect-square rounded-full bg-gradient-to-br from-purple-500/10 to-violet-500/10 border-2 border-dashed border-purple-500/30 flex items-center justify-center">
                      <div className="text-9xl font-bold text-white/10">{step.number}</div>
                    </div>

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/50">
                        <Icon className="w-16 h-16 text-white" strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
          <div className="relative bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your PDFs?</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Join thousands of users who are already experiencing the power of AI-driven document intelligence</p>
            <button className="cursor-pointer bg-gradient-to-r from-purple-500 to-violet-600 text-white px-10 py-4 rounded-xl hover:from-purple-600 hover:to-violet-700 transition-all font-semibold shadow-lg shadow-purple-500/30 hover:scale-105">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
