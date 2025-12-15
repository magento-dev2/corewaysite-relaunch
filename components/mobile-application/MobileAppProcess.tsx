"use client";

import { Lightbulb, PenTool, Code, TestTube, Rocket, HeadphonesIcon } from "lucide-react";

const processSteps = [
  {
    icon: Lightbulb,
    step: "01",
    title: "Discovery & Planning",
    description: "We analyze your requirements, define project scope, create wireframes, and develop a comprehensive project roadmap."
  },
  {
    icon: PenTool,
    step: "02",
    title: "UI/UX Design",
    description: "Our designers create stunning, user-friendly interfaces with interactive prototypes that align with your brand identity."
  },
  {
    icon: Code,
    step: "03",
    title: "Development",
    description: "Expert developers build your app using best practices, clean code architecture, and agile development methodology."
  },
  {
    icon: TestTube,
    step: "04",
    title: "Testing & QA",
    description: "Rigorous testing across devices ensures bug-free performance, security compliance, and optimal user experience."
  },
  {
    icon: Rocket,
    step: "05",
    title: "Deployment",
    description: "We handle app store submissions, approvals, and launch strategies to ensure a successful market entry."
  },
  {
    icon: HeadphonesIcon,
    step: "06",
    title: "Support & Maintenance",
    description: "Ongoing support, updates, performance monitoring, and feature enhancements to keep your app competitive."
  }
];

export default function MobileAppProcess() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a0f2b] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-300">Our Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-purple-500">Proven</span> Development Process
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            From concept to launch, our streamlined process ensures timely delivery and exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>

                <div className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-2xl flex items-center justify-center border border-purple-500/40 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-8 h-8 text-purple-400" strokeWidth={2} />
                    </div>
                    <div className="text-4xl font-bold text-purple-500/30">
                      {step.step}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-sm">
                    {step.description}
                  </p>

                  <div className="mt-6 h-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">12-16</div>
              <div className="text-gray-400 text-sm">Weeks Average</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-gray-400 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
