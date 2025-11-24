"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Smartphone, Database, Cloud, Cpu, Globe } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const expertiseAreas = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Expert developers in React, Vue, Angular, Next.js, and modern frontend frameworks. Build stunning, responsive user interfaces.",
    technologies: ["React", "Vue.js", "Angular", "Next.js", "TypeScript"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Scalable backend solutions with Node.js, Python, Java, .NET, PHP, and more. Build robust APIs and server-side applications.",
    technologies: ["Node.js", "Python", "Java", ".NET", "PHP"],
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps for iOS and Android. Flutter, React Native, Swift, and Kotlin expertise.",
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Xamarin"],
    gradient: "from-blue-600 to-cyan-600"
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Cloud infrastructure on AWS, Azure, GCP. CI/CD pipelines, Docker, Kubernetes, and modern DevOps practices.",
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins"],
    gradient: "from-cyan-600 to-blue-500"
  },
  {
    icon: Database,
    title: "Database Expertise",
    description: "Design and optimize databases. SQL, NoSQL, PostgreSQL, MongoDB, Redis, and modern database technologies.",
    technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Cassandra"],
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Build intelligent applications with AI/ML expertise. TensorFlow, PyTorch, NLP, Computer Vision, and more.",
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "NLP", "Computer Vision"],
    gradient: "from-cyan-400 to-blue-600"
  }
];

export default function MultiTechExpertise() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>('.expertise-panel');

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${rightRef.current?.offsetHeight || 0}`,
        pin: leftRef.current,
        pinSpacing: false,
      });

      panels.forEach((panel) => {
        gsap.from(panel, {
          opacity: 0,
          x: 100,
          scale: 0.9,
          scrollTrigger: {
            trigger: panel,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-b from-[#1a0f2b] to-[#0E0918] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 min-h-screen items-start">
          <div ref={leftRef} className="lg:sticky lg:top-24 py-24">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                <span className="text-sm font-medium text-gray-300">Multi-Technology Expertise</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Masters of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Every Technology</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Access developers skilled in 50+ technologies across frontend, backend, mobile, cloud, and emerging tech stacks.
              </p>

              <div className="pt-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Tech Stacks</span>
                      <span className="text-2xl font-bold text-white">50+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Expert Developers</span>
                      <span className="text-2xl font-bold text-white">500+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Years Experience</span>
                      <span className="text-2xl font-bold text-white">10+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ref={rightRef} className="py-24 space-y-8">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div key={index} className="expertise-panel">
                  <div className="group bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${area.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 opacity-80`}>
                        <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>
                      <div className="text-right">
                        <span className="text-3xl font-bold text-white/10">0{index + 1}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      {area.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-6">
                      {area.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {area.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-300">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
