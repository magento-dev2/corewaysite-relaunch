"use client";


import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const workflows = [
  {
    title: "Lead enrichment",
    description:
      "Automatically enrich leads from your CRM with data from multiple sources.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Customer onboarding",
    description:
      "Create seamless onboarding experiences that sync across all your tools.",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Data synchronization",
    description: "Keep your databases, spreadsheets, and apps in perfect sync.",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Support automation",
    description:
      "Route tickets, gather context, and respond faster to customers.",
    color: "from-purple-500 to-violet-500",
  },
];

export default function WorkflowZigZagScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollSection = scrollRef.current;

    if (!container || !scrollSection) return;

    const totalScrollWidth = scrollSection.scrollWidth;
    const scrollDistance = totalScrollWidth - window.innerWidth;

    gsap.to(scrollSection, {
      x: () => -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${scrollDistance}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#0E0918] py-32 overflow-hidden"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1537498425277-c283d32ef9db?auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Subtle dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div className="relative z-10 text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Workflows for every team
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Pre-built templates to get you started in minutes
        </p>
      </div>

      {/* Horizontal Scroll Section */}
      <div
        ref={scrollRef}
        className="flex space-x-24 px-[10vw] relative z-10 items-center"
      >
        {workflows.map((item, i) => (
          <div
            key={i}
            className={`relative flex-shrink-0 w-[30vw] h-[30vh] rounded-xl p-3 bg-gradient-to-br ${item.color}`}
          >
            {/* Subtle connecting line */}
            {i !== 0 && (
              <div className="absolute top-1/2 -left-[15vw] w-[15vw] h-[2px] bg-gradient-to-r from-white/10 to-white/0"></div>
            )}

            {/* Card content */}
            <div className="bg-[#0E0918]/90 h-full rounded-xl p-10 flex flex-col justify-center border border-white/10 backdrop-blur-sm shadow-xl shadow-black/20">
              <h3 className="text-3xl font-bold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                {item.description}
              </p>
              <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition">
                Learn more <ArrowRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Gradient fade edges for polish */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0E0918] to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0E0918] to-transparent pointer-events-none"></div>
    </section>
  );
}
