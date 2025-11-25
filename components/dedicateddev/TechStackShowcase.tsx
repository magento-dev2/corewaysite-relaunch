"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Monitor, Code, Smartphone, Database, Cloud, Cpu } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const techStacks = [
  {
    category: "Frontend",
    icon: Monitor,
    color: "from-purple-600 to-fuchsia-600",
    technologies: [
      { name: "React", logo: "⚛️" },
      { name: "Vue.js", logo: "🟢" },
      { name: "Angular", logo: "🔴" },
      { name: "Next.js", logo: "▲" },
      { name: "Svelte", logo: "🧡" },
      { name: "TypeScript", logo: "🔷" },
      { name: "JavaScript", logo: "💛" },
      { name: "Tailwind", logo: "🎨" }
    ]
  },
  {
    category: "Backend",
    icon: Code,
    color: "from-purple-600 to-fuchsia-600",
    technologies: [
      { name: "Node.js", logo: "💚" },
      { name: "Python", logo: "🐍" },
      { name: "Java", logo: "☕" },
      { name: "PHP", logo: "🐘" },
      { name: ".NET", logo: "🔵" },
      { name: "Ruby", logo: "💎" },
      { name: "Go", logo: "🔵" },
      { name: "Rust", logo: "🦀" }
    ]
  },
  {
    category: "Mobile",
    icon: Smartphone,
    color: "from-purple-600 to-fuchsia-600",
    technologies: [
      { name: "React Native", logo: "⚛️" },
      { name: "Flutter", logo: "🦋" },
      { name: "Swift", logo: "🍎" },
      { name: "Kotlin", logo: "🤖" },
      { name: "Xamarin", logo: "💙" },
      { name: "Ionic", logo: "⚡" }
    ]
  },
  {
    category: "Database",
    icon: Database,
    color: "from-purple-600 to-fuchsia-600",
    technologies: [
      { name: "PostgreSQL", logo: "🐘" },
      { name: "MongoDB", logo: "🍃" },
      { name: "MySQL", logo: "🐬" },
      { name: "Redis", logo: "🔴" },
      { name: "Cassandra", logo: "💫" },
      { name: "DynamoDB", logo: "☁️" },
      { name: "Firebase", logo: "🔥" }
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    color: "from-purple-600 to-fuchsia-600",
    technologies: [
      { name: "AWS", logo: "☁️" },
      { name: "Azure", logo: "🔷" },
      { name: "Google Cloud", logo: "🌐" },
      { name: "Docker", logo: "🐋" },
      { name: "Kubernetes", logo: "☸️" },
      { name: "Jenkins", logo: "🔧" },
      { name: "Terraform", logo: "🏗️" }
    ]
  },
  {
    category: "AI & Emerging Tech",
    icon: Cpu,
    color: "from-purple-600 to-fuchsia-600",
    technologies: [
      { name: "TensorFlow", logo: "🧠" },
      { name: "PyTorch", logo: "🔥" },
      { name: "OpenAI", logo: "🤖" },
      { name: "Blockchain", logo: "⛓️" },
      { name: "IoT", logo: "📡" },
      { name: "AR/VR", logo: "🥽" },
      { name: "GraphQL", logo: "🔺" }
    ]
  }
];

export default function TechStackShowcase() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const categories = gsap.utils.toArray<HTMLElement>('.tech-category');

      categories.forEach((category, index) => {
        gsap.from(category, {
          opacity: 0,
          y: 50,
          scrollTrigger: {
            trigger: category,
            start: "top 85%",
            end: "top 50%",
            scrub: 1,
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a0f2b] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-300">No Technology Limitations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-purple-500">Unlimited</span> Technology Access
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whatever technology your project needs, we have experts ready to deliver
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStacks.map((stack, index) => {
            const Icon = stack.icon;
            return (
              <div key={index} className="tech-category group">
                <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.03] hover:bg-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stack.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {stack.category}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {stack.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center gap-2 bg-purple-500/10 rounded-lg p-3 hover:bg-purple-500/20 transition-all cursor-pointer border border-purple-500/20 hover:border-purple-500/40 hover:scale-105"
                      >
                        <span className="text-2xl">{tech.logo}</span>
                        <span className="text-sm font-medium text-gray-300">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 text-xl mb-6">
            Don't see your technology? <span className="text-purple-400 font-semibold">We've got you covered.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-lg hover:from-purple-600 hover:to-violet-700 transition-all font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105">
              Request Custom Stack
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 hover:border-purple-500/50 transition-all font-medium">
              View Full Tech List
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
