"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Image, Video, FileText, Database, Archive, Share2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const useCases = [
  {
    icon: Image,
    title: "Media Storage",
    description: "Store and serve images, videos, and rich media content at scale with automatic optimization."
  },
  {
    icon: FileText,
    title: "Document Management",
    description: "Centralized document storage with version control, search, and collaboration features."
  },
  {
    icon: Database,
    title: "Data Lakes",
    description: "Build massive data lakes for analytics, machine learning, and business intelligence."
  },
  {
    icon: Archive,
    title: "Backup & Archive",
    description: "Automated backup solutions with long-term archival and disaster recovery capabilities."
  },
  {
    icon: Video,
    title: "Streaming Content",
    description: "Deliver video and audio content globally with low latency and high quality."
  },
  {
    icon: Share2,
    title: "File Sharing",
    description: "Secure file sharing with expiring links, access controls, and usage tracking."
  }
];

export default function S3UseCases() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.usecase-card');

      cards.forEach((card, index) => {
        const delay = index * 0.1;

        gsap.from(card, {
          opacity: 0,
          y: 50,
          rotation: index % 3 === 0 ? -5 : index % 3 === 1 ? 0 : 5,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 60%",
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
            <span className="text-sm font-medium text-gray-300">Use Cases</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-purple-500">Endless</span> Possibilities
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From media storage to data lakes, S3 powers every use case
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div key={index} className="usecase-card">
                <div className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-2">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-xl flex items-center justify-center border border-purple-500/40 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-purple-400" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {useCase.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
