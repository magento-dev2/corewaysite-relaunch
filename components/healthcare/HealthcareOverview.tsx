"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Lock, CheckCircle, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface HealthcareOverviewProps {
  title: string;
  content: string;
  image: string;
}

export default function HealthcareOverview({
  title,
  content,
  image,
}: HealthcareOverviewProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      tl.fromTo(
        contentRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1 }
      ).fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9, x: 50 },
        { opacity: 1, scale: 1, x: 0, duration: 1 },
        "-=0.7"
      );

      gsap.fromTo(
        badgesRef.current?.children || [],
        { opacity: 0, y: 30, rotateX: -20 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: badgesRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a1325] relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div ref={contentRef} className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-4 py-2">
              <Shield className="text-purple-400" size={16} />
              <span className="text-purple-400 text-sm font-semibold">
                HIPAA Compliant Solutions
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white">
              {title}
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">{content}</p>
          </div>

          <div ref={imageRef} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={image}
                alt={title}
                className="w-full h-[450px] object-cover shadow-2xl border border-white/10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1325]/60 to-transparent"></div>
            </div>
          </div>
        </div>

        <div ref={badgesRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group relative bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 hover:from-purple-500/15 transition-all">
            <div className="absolute inset-0 bg-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                HIPAA Compliant
              </h3>
              <p className="text-gray-400 text-sm">
                Full compliance with healthcare data protection standards
              </p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/20 rounded-xl p-6 hover:border-violet-500/40 hover:from-violet-500/15 transition-all">
            <div className="absolute inset-0 bg-violet-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Lock className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                End-to-End Encryption
              </h3>
              <p className="text-gray-400 text-sm">
                Military-grade encryption for all patient data
              </p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 hover:from-purple-500/15 transition-all">
            <div className="absolute inset-0 bg-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                99.9% Uptime
              </h3>
              <p className="text-gray-400 text-sm">
                Reliable infrastructure with 24/7 monitoring
              </p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/20 rounded-xl p-6 hover:border-violet-500/40 hover:from-violet-500/15 transition-all">
            <div className="absolute inset-0 bg-violet-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                SOC 2 Certified
              </h3>
              <p className="text-gray-400 text-sm">
                Industry-leading security and compliance standards
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
