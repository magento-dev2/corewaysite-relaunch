"use client";

import { Apple, Smartphone, Layers, Globe } from "lucide-react";

const platforms = [
  {
    icon: Apple,
    title: "iOS Development",
    description: "Native iOS apps built with Swift and SwiftUI",
    technologies: ["Swift", "SwiftUI", "Xcode", "Core Data"],
    gradient: "from-purple-500/20 to-violet-500/20"
  },
  {
    icon: Smartphone,
    title: "Android Development",
    description: "High-performance Android apps with Kotlin",
    technologies: ["Kotlin", "Jetpack Compose", "Android Studio", "Room"],
    gradient: "from-violet-500/20 to-purple-500/20"
  },
  {
    icon: Layers,
    title: "Cross-Platform",
    description: "Write once, deploy to both iOS and Android",
    technologies: ["React Native", "Flutter", "Expo", "Dart"],
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Globe,
    title: "Progressive Web Apps",
    description: "App-like experience in the browser",
    technologies: ["Next.js", "PWA", "Service Workers", "TypeScript"],
    gradient: "from-pink-500/20 to-purple-500/20"
  }
];

export default function MobileAppPlatforms() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#1a0f2b] to-[#0E0918] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-300">Platforms</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Build for <span className="text-purple-500">Every Platform</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We develop applications for all major platforms using the latest technologies and frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <div key={index} className="group">
                <div className={`h-full bg-gradient-to-br ${platform.gradient} backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20`}>
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-2xl flex items-center justify-center border border-purple-500/40 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-8 h-8 text-purple-400" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {platform.title}
                      </h3>
                      <p className="text-gray-400">
                        {platform.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {platform.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-white/5 border border-white/20 rounded-full text-sm text-gray-300 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
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
