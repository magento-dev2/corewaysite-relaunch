"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const companyLogos = [
  { name: "Boxify", logo: "/assets/brand/boxifylogo.png" },
  { name: "Rightsify", logo: "/assets/brand/rightsify.png" },
  { name: "Zuuro", logo: "/assets/brand/zuurologo.png" },
  { name: "Melodiez", logo: "/assets/brand/melodiezlogo.svg" },
  { name: "Magecaptain", logo: "/assets/brand/magecaptainlogo.png" },
  { name: "Scholar9", logo: "/assets/brand/scholar9logo.webp" },
  { name: "Groupon", logo: "/assets/brand/grouponlogo.png" },
  { name: "Orabel", logo: "/assets/brand/orabellogo.png" },
  { name: "Geliyoo", logo: "/assets/brand/geliyoologo.png" },
  { name: "Loreal", logo: "/assets/brand/loreal-white.png" },
  { name: "EasyAsk", logo: "/assets/brand/easyask-white.png" },
];

export default function TrustedBy() {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let animationFrame;
    let position = 0;
    const speed = 0.6; // adjust speed here

    const animate = () => {
      if (!isPaused && containerRef.current) {
        position -= speed;
        const width = containerRef.current.scrollWidth / 2;

        if (Math.abs(position) >= width) {
          position = 0;
        }

        containerRef.current.style.transform = `translateX(${position}px)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0E0918] via-[#1a0f2b] to-[#0E0918] overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative max-w-1440 mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-4">
            <span className="text-sm font-medium text-gray-300">
              {t('trustedBy.badge')}
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white">
            {t('trustedBy.title')}
          </h2>
        </motion.div>

        {/* LOGO SCROLLER */}
        <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-[0_0_60px_rgba(255,255,255,0.1)]">
          <div
            ref={containerRef}
            className="flex items-center gap-20 py-10 w-max"
          >
            {[...companyLogos, ...companyLogos].map((company, index) => (
              <div
                key={index}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-16 w-auto object-contain filter invert brightness-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {/* Gradient edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0E0918] via-[#0E0918]/60 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0E0918] via-[#0E0918]/60 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
