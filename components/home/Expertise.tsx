"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Brain, ShoppingCart, Workflow, Smartphone, BarChart3, Cloud } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const expertiseAreas = [
  {
    icon: Brain,
    title: "AI & Data Engineering",
    description:
      "We create intelligent systems powered by GPT, Vision AI, and advanced data pipelines — enabling smarter analytics, automation, and decision-making.",
    link: "#",
    linkText: "Explore AI & Data",
  },
  {
    icon: ShoppingCart,
    title: "Commerce Solutions",
    description:
      "We design scalable eCommerce and marketplace platforms — from new store development to replatforming, omnichannel growth, and system integration.",
    link: "#",
    linkText: "Explore Commerce",
  },
  {
    icon: Workflow,
    title: "Automation & Integration",
    description:
      "We automate your workflows and connect platforms — linking payments, ERP, CRM, logistics, and marketing tools into one intelligent system.",
    link: "#",
    linkText: "Explore Automation",
  },
  {
    icon: Smartphone,
    title: "Mobile & Web Applications",
    description:
      "We build high-performance mobile and web applications with intuitive UX, modern frameworks, and secure architecture tailored to your goals.",
    link: "#",
    linkText: "Explore App Development",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "We transform data into clarity with real-time dashboards, predictive analytics, and performance tracking to drive measurable growth.",
    link: "#",
    linkText: "Explore Analytics",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "We design reliable, automated, and secure cloud infrastructures — ensuring seamless deployment, scalability, and performance optimization.",
    link: "#",
    linkText: "Explore Cloud & DevOps",
  },
];

export default function Expertise() {
  const sectionRef = useRef(null);
  const leftSideRef = useRef(null);
  const rightSideRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const leftSide = leftSideRef.current;
    const rightSide = rightSideRef.current;

    if (!section || !leftSide || !rightSide) return;

    // Pin the left side while right side scrolls
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${rightSide.offsetHeight - window.innerHeight + 200}`,
      pin: leftSide,
      pinSpacing: false,
      anticipatePin: 1,
    });

    // Animate each expertise card on scroll
    const cards = rightSide.querySelectorAll(".expertise-card");
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative  bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918] overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE - PINNED */}
          <div ref={leftSideRef} className="md:sticky md:top-24">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Expertise
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                We understand the pain of start ups and SMEs very well, to reduce this pain we come up with the best set of services for WEB, MOBILE and ENTERPRISE with next generation technologies.
              </p>
              
              {/* Optional CTA or additional content */}
              <div className="pt-6">
                <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors">
                  View All Services
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - SCROLLING CONTENT */}
          <div ref={rightSideRef} className="space-y-12">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className="expertise-card group"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {area.title}
                      </h3>
                    </div>

                    <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
                      {area.description}
                    </p>
                    
                    <a
                      href={area.link}
                      className="group/link inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-all text-sm"
                    >
                      <span>{area.linkText}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
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
