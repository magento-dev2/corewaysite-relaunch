"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Lock, Eye, FileCheck, AlertCircle, CheckCircle } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const securityFeatures = [
  {
    icon: Shield,
    title: "Encryption at Rest",
    description: "AES-256 encryption for all stored data"
  },
  {
    icon: Lock,
    title: "Encryption in Transit",
    description: "TLS/SSL for all data transfers"
  },
  {
    icon: Eye,
    title: "Access Control",
    description: "IAM policies and bucket policies"
  },
  {
    icon: FileCheck,
    title: "Audit Logging",
    description: "Complete audit trails with CloudTrail"
  },
  {
    icon: AlertCircle,
    title: "Threat Detection",
    description: "Automated security monitoring"
  },
  {
    icon: CheckCircle,
    title: "Compliance",
    description: "HIPAA, PCI-DSS, GDPR certified"
  }
];

export default function S3SecurityCompliance() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const badges = gsap.utils.toArray<HTMLElement>('.security-badge');

      badges.forEach((badge, index) => {
        gsap.from(badge, {
          opacity: 0,
          scale: 0,
          rotation: 180,
          scrollTrigger: {
            trigger: badge,
            start: "top 90%",
            end: "top 60%",
            scrub: 1,
          }
        });
      });

      gsap.to(".shield-pulse", {
        scale: 1.2,
        opacity: 0.5,
        duration: 2,
        repeat: -1,
        ease: "power1.inOut",
        stagger: 0.3
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a0f2b] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="shield-pulse w-96 h-96 border-4 border-purple-500/20 rounded-full"></div>
          <div className="shield-pulse w-64 h-64 border-4 border-purple-500/20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-300">Security & Compliance</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-purple-500">Enterprise-Grade</span> Security
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
            Your data is protected with military-grade security and compliance certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="security-badge">
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-full flex items-center justify-center border-2 border-purple-500/40">
                      <Icon className="w-8 h-8 text-purple-400" strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/30 rounded-3xl p-8 md:p-12 text-center backdrop-blur-xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Compliance Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['SOC 2', 'ISO 27001', 'HIPAA', 'PCI-DSS', 'GDPR', 'FedRAMP'].map((cert, index) => (
              <div key={index} className="px-6 py-3 bg-white/10 border border-white/20 rounded-full">
                <span className="text-white font-semibold">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
