"use client";

import { Zap, Cloud, Bell, Shield, Palette, Code2 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Performance",
    description: "Optimized code and efficient architecture ensure blazing-fast load times and smooth 60fps animations across all devices."
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Seamless integration with AWS, Azure, Google Cloud, and Firebase for scalable backend infrastructure and real-time data sync."
  },
  {
    icon: Bell,
    title: "Push Notifications",
    description: "Engage users with targeted push notifications, in-app messaging, and real-time alerts using FCM and APNs."
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description: "Implement biometric authentication, SSL pinning, code obfuscation, and secure data storage to protect user information."
  },
  {
    icon: Palette,
    title: "Beautiful UI/UX",
    description: "Stunning, intuitive interfaces designed following Material Design and Human Interface Guidelines for optimal user experience."
  },
  {
    icon: Code2,
    title: "Clean Architecture",
    description: "Maintainable, scalable codebase using MVVM, Clean Architecture, and industry best practices for long-term success."
  }
];

export default function MobileAppFeatures() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a0f2b] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-300">Core Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful <span className="text-purple-500">App Capabilities</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Every app we build includes enterprise-grade features designed for performance, security, and user satisfaction
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group">
                <div className="h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-2xl flex items-center justify-center border border-purple-500/40 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-8 h-8 text-purple-400" strokeWidth={2} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
