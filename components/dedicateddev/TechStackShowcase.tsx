"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const techStacks = {
  frontend: ["React", "Vue.js", "Angular", "Next.js", "Svelte", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind"],
  backend: ["Node.js", "Python", "Java", "PHP", ".NET", "Ruby", "Go", "Rust", "Spring", "Django"],
  mobile: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic", "Cordova"],
  database: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Cassandra", "DynamoDB", "Firebase"],
  cloud: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins", "CircleCI"],
  emerging: ["AI/ML", "Blockchain", "IoT", "AR/VR", "GraphQL", "WebAssembly", "Edge Computing"]
};

export default function TechStackShowcase() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const categories = gsap.utils.toArray<HTMLElement>('.tech-category');

      categories.forEach((category) => {
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

      const tags = gsap.utils.toArray<HTMLElement>('.tech-tag');
      tags.forEach((tag) => {
        gsap.to(tag, {
          scale: 1.05,
          duration: 0.3,
          paused: true,
          ease: "power2.out"
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a0f2b] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-300">No Technology Limitations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Unlimited</span> Technology Access
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whatever technology your project needs, we have experts ready to deliver
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(techStacks).map(([category, technologies], idx) => (
            <div key={idx} className="tech-category">
              <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:border-blue-500/50 transition-all duration-300 h-full">
                <h3 className="text-xl font-bold text-white mb-4 capitalize">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="tech-tag px-3 py-1.5 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg text-sm text-blue-300 hover:from-blue-500/30 hover:to-cyan-500/30 cursor-pointer transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg mb-6">
            Don't see your technology? <span className="text-blue-400 font-semibold">We've got you covered.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all font-medium">
              Request Custom Stack
            </button>
            <button className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-all font-medium">
              View Full Tech List
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
