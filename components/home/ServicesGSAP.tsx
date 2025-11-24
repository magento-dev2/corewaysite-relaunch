"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

import AnimatedIcon from "./AnimatedIcon";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesGSAP() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

const services = [
  {
    animationPath: "/animations/architect.json",
    staticPath: "/animations/architect-static.svg",
    ariaLabel: "Blueprint showing system architecture with connected nodes and grid structure",
    title: t('services.architect.title'),
    subtitle: t('services.architect.subtitle'),
    description: t('services.architect.description'),
    items: t('services.architect.items') as string[],
  },
  {
    animationPath: "/animations/build.json",
    staticPath: "/animations/build-static.svg",
    ariaLabel: "Code brackets with animated lines representing software development",
    title: t('services.build.title'),
    subtitle: t('services.build.subtitle'),
    description: t('services.build.description'),
    items: t('services.build.items') as string[],
  },
  {
    animationPath: "/animations/automate.json",
    staticPath: "/animations/automate-static.svg",
    ariaLabel: "Infinity loop symbol representing continuous automation and optimization",
    title: t('services.automate.title'),
    subtitle: t('services.automate.subtitle'),
    description: t('services.automate.description'),
    items: t('services.automate.items') as string[],
  },
];


 useEffect(() => {
  if (!sectionRef.current || !headerRef.current || !cardsRef.current) return;

  const mm = gsap.matchMedia();

  const ctx = gsap.context(() => {

    /* ================= DESKTOP ================= */
    mm.add("(min-width: 768px)", () => {
      gsap.fromTo(
        headerRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      const cards = cardsRef.current?.children;
      if (!cards) return;

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 100,
          rotationX: -15,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });


    /* ================= MOBILE ================= */
    mm.add("(max-width: 767px)", () => {
      gsap.fromTo(
        headerRef.current,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );

      const cards = cardsRef.current?.children;
      if (!cards) return;

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 40,
          scale: 0.97
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

  }, sectionRef);

  return () => {
    mm.revert();
    ctx.revert();
  };
}, []);


   const lines = [
    "Strategy — We craft solutions that fit your business goals.",
    "Automation — We streamline processes to reduce manual work.",
    "Analytics — Data-driven insights to make smarter business decisions."
  ];
  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918] min-h-[90vh] flex items-center py-16 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-1440 mx-auto px-6 md:px-12 w-full">
        {/* <div ref={headerRef} className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-300">What We Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From strategy to automation — we engineer complete digital ecosystems that scale intelligently.
          </p>
        </div> */}

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="grid md:grid-cols-2  items-start mb-18">

          {/* Left Side: Heading + Text */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            // className="space-y-6"
          >
            {/* <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
              <span className="text-sm font-medium text-gray-300">What We Do</span>
            </div> */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('services.title')}
            </h2>
            {/* <p className="text-lg text-gray-300 max-w-md leading-relaxed">
              From strategy to automation — we engineer complete digital ecosystems that scale intelligently.
            </p> */}
          </motion.div>

          {/* Right Side: Animated Text Lines */}
          <div className=" ">
            
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                className="text-gray-300 text-lg"
              >
                {t('services.description')}
              </motion.p>
            
          </div>

        </div>
      </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative perspective-1000">
              <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.03] hover:bg-white/10">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="w-24 h-24 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-all duration-300 mb-6 p-3">
                      <AnimatedIcon
                        animationPath={service.animationPath}
                        staticFallbackPath={service.staticPath}
                        ariaLabel={service.ariaLabel}
                        className="w-full h-full"
                        playOnHover={false}
                        autoplay={true}
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-400 mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-3 flex-grow">
                    {service.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className="mt-1">
                          <Check className="w-4 h-4 text-purple-400 group-hover/item:text-purple-300 transition-colors" strokeWidth={2} />
                        </div>
                        <span className="text-sm text-gray-400 group-hover/item:text-gray-300 transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
