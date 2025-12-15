"use client";

import { Shield, Lock, Fingerprint, Key, FileCheck, AlertTriangle } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Data Encryption",
    description: "AES-256 encryption for data at rest and in transit"
  },
  {
    icon: Lock,
    title: "Secure Authentication",
    description: "OAuth 2.0, JWT tokens, and session management"
  },
  {
    icon: Fingerprint,
    title: "Biometric Security",
    description: "Face ID, Touch ID, and fingerprint authentication"
  },
  {
    icon: Key,
    title: "SSL Pinning",
    description: "Certificate pinning to prevent MITM attacks"
  },
  {
    icon: FileCheck,
    title: "Code Obfuscation",
    description: "Protection against reverse engineering"
  },
  {
    icon: AlertTriangle,
    title: "Threat Detection",
    description: "Real-time monitoring and anomaly detection"
  }
];

export default function MobileAppSecurity() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#1a0f2b] to-[#0E0918] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 border-4 border-purple-500/20 border-dashed rounded-full"></div>
          <div className="w-64 h-64 border-4 border-purple-500/20 border-dashed rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-300">Security & Privacy</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-purple-500">Enterprise-Grade</span> Security
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
            Your users&apos; data is protected with military-grade security measures and industry-leading privacy standards
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-full flex items-center justify-center border-2 border-purple-500/40 group-hover:scale-110 transition-transform">
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
          <h3 className="text-3xl font-bold text-white mb-6">
            Compliance & Certifications
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We ensure your mobile app meets all regulatory requirements and industry standards for data protection and privacy
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['GDPR', 'HIPAA', 'PCI-DSS', 'SOC 2', 'ISO 27001', 'CCPA'].map((cert, index) => (
              <div key={index} className="px-6 py-3 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-colors">
                <span className="text-white font-semibold">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">256-bit</div>
            <div className="text-gray-300">Encryption Standard</div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-gray-300">Security Score</div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">Zero</div>
            <div className="text-gray-300">Data Breaches</div>
          </div>
        </div>
      </div>
    </section>
  );
}
