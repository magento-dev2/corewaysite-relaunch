"use client";

import { Zap, Cloud, Lock, RefreshCw, Smartphone, Globe } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Zap,
    title: "Real-Time Processing",
    description: "Process millions of events per second with low-latency data pipelines and instant dashboard updates.",
    metric: "<100ms",
    color: "from-purple-500 to-violet-600"
  },
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description: "Scalable infrastructure that grows with your data needs, powered by AWS, Azure, and Google Cloud.",
    metric: "Auto-Scale",
    color: "from-violet-500 to-purple-600"
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-level encryption, role-based access control, and compliance with GDPR, HIPAA, and SOC 2.",
    metric: "256-bit",
    color: "from-purple-600 to-pink-600"
  },
  {
    icon: RefreshCw,
    title: "Automated Workflows",
    description: "Set up intelligent alerts, scheduled reports, and automated actions based on data triggers.",
    metric: "24/7",
    color: "from-pink-600 to-purple-600"
  },
  {
    icon: Smartphone,
    title: "Mobile Access",
    description: "Access your dashboards and reports anytime, anywhere with native iOS and Android apps.",
    metric: "iOS & Android",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "Lightning-fast data delivery worldwide with edge caching and geo-distributed infrastructure.",
    metric: "50+ Regions",
    color: "from-violet-600 to-purple-500"
  }
];

export default function AnalyticsFeatures() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-[#1a0f2b] to-[#0E0918] relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/30 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-300">Core Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-purple-500">Powerful</span> Analytics Engine
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Built with cutting-edge technology to deliver insights at scale
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-2xl transition-all duration-500 ${
                    isHovered ? 'animate-pulse-glow' : ''
                  }`}
                ></div>

                <div className="relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 rounded-full blur-3xl transition-all duration-500 ${
                      isHovered ? 'scale-150' : 'scale-100'
                    }`}
                  ></div>

                  <div className="relative">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center border border-purple-500/40 transition-all duration-300 ${
                        isHovered ? 'scale-110 rotate-6' : ''
                      }`}>
                        <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>

                      <div className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full">
                        <span className="text-xs font-bold text-purple-300">{feature.metric}</span>
                      </div>
                    </div>

                    <h3 className={`text-2xl font-bold text-white mb-4 transition-all duration-300 ${
                      isHovered ? 'text-purple-300' : ''
                    }`}>
                      {feature.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transition-all duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }

        .animate-twinkle {
          animation: twinkle ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
