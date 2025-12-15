"use client";

import {
  Smartphone,
  Layers,
  ShoppingCart,
  Users,
  Gamepad2,
  HeartPulse,
  GraduationCap,
  Utensils,
  Wallet
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Native iOS Development",
    description: "Build high-performance iOS applications using Swift and SwiftUI with pixel-perfect designs and seamless integration with Apple ecosystem."
  },
  {
    icon: Layers,
    title: "Native Android Development",
    description: "Create robust Android apps using Kotlin and Jetpack Compose, optimized for various screen sizes and Android versions."
  },
  {
    icon: Users,
    title: "Cross-Platform Development",
    description: "Develop once, deploy everywhere with React Native and Flutter. Save time and costs while maintaining native performance."
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Mobile Apps",
    description: "Build feature-rich shopping apps with secure payment gateways, inventory management, and personalized shopping experiences."
  },
  {
    icon: Gamepad2,
    title: "Gaming Applications",
    description: "Create engaging mobile games with stunning graphics, smooth gameplay, and social features using Unity and Unreal Engine."
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Fitness Apps",
    description: "Develop HIPAA-compliant health apps with wearable integration, telemedicine features, and health data analytics."
  },
  {
    icon: GraduationCap,
    title: "Educational Apps",
    description: "Build interactive learning platforms with video streaming, assessments, progress tracking, and gamification features."
  },
  {
    icon: Utensils,
    title: "Food Delivery Apps",
    description: "Create comprehensive food ordering platforms with real-time tracking, payment integration, and restaurant management."
  },
  {
    icon: Wallet,
    title: "Fintech Applications",
    description: "Develop secure banking and payment apps with biometric authentication, blockchain integration, and compliance features."
  }
];

export default function MobileAppServices() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#1a0f2b] to-[#0E0918] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-300">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comprehensive <span className="text-purple-500">Mobile App Solutions</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            From concept to launch, we deliver end-to-end mobile app development services across all platforms and industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group">
                <div className="h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-2xl flex items-center justify-center border border-purple-500/40 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-8 h-8 text-purple-400" strokeWidth={2} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-sm">
                    {service.description}
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
