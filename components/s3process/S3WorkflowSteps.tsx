"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileUp, Settings, Shield, CheckCircle } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    icon: FileUp,
    step: "01",
    title: "Upload & Ingest",
    description: "Files are uploaded to S3 with automatic validation, virus scanning, and metadata extraction.",
    features: ["Multi-part upload", "Auto-retry logic", "Progress tracking"]
  },
  {
    icon: Settings,
    step: "02",
    title: "Process & Transform",
    description: "Automated processing pipeline handles file conversion, compression, and optimization.",
    features: ["Format conversion", "Image optimization", "Video transcoding"]
  },
  {
    icon: Shield,
    step: "03",
    title: "Secure & Store",
    description: "Files are encrypted and stored with appropriate access controls and lifecycle policies.",
    features: ["AES-256 encryption", "Access control", "Lifecycle rules"]
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Deliver & Monitor",
    description: "Content delivery through CloudFront with real-time monitoring and analytics.",
    features: ["CDN delivery", "Real-time logs", "Performance metrics"]
  }
];

export default function S3WorkflowSteps() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const stepCards = gsap.utils.toArray<HTMLElement>('.workflow-step');

      gsap.to(".timeline-progress", {
        height: "100%",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        }
      });

      stepCards.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
          rotation: index % 2 === 0 ? -10 : 10,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#1a0f2b] to-[#0E0918] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-300">Workflow Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-purple-500">Step-by-Step</span> S3 Workflow
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From upload to delivery, every step optimized for performance and security
          </p>
        </div>

        <div className="relative">
          <div ref={timelineRef} className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full hidden lg:block">
            <div className="absolute inset-0 bg-white/10 rounded-full"></div>
            <div className="timeline-progress absolute top-0 left-0 right-0 h-0 bg-gradient-to-b from-purple-500 to-violet-500 rounded-full"></div>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`workflow-step flex items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className={`inline-block ${isEven ? 'lg:float-right' : 'lg:float-left'}`}>
                      <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 max-w-md">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-2xl flex items-center justify-center border border-purple-500/40">
                            <Icon className="w-8 h-8 text-purple-400" strokeWidth={2} />
                          </div>
                          <div className="text-5xl font-bold text-purple-500/20">{step.step}</div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-3">
                          {step.title}
                        </h3>

                        <p className="text-gray-400 mb-4 leading-relaxed">
                          {step.description}
                        </p>

                        <div className="space-y-2">
                          {step.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              <span className="text-sm text-gray-400">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:block relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-full flex items-center justify-center border-4 border-[#1a0f2b]">
                      <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                    </div>
                  </div>

                  <div className="flex-1"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
