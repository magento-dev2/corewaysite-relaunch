"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
];

export default function TrustedBy() {
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const animation = setInterval(() => {
      setOffset((prev) => (prev - 0.15) % 100);
    }, 20);
    return () => clearInterval(animation);
  }, [isPaused]);

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0E0918] via-[#1a0f2b] to-[#0E0918] overflow-hidden">
      {/* Background gradient circles */}
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
            <span className="text-sm font-medium text-gray-300">Trusted by</span>
          </div>
          <h2 className="text-4xl font-bold text-white">
            Innovative Teams Worldwide
          </h2>
        </motion.div>

        <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-[0_0_60px_rgba(255,255,255,0.1)]">
          <motion.div
            className="flex items-center gap-20 py-10"
            style={{
              transform: `translateX(${offset}%)`,
            }}
            transition={{ duration: 0.05, ease: "linear" }}
          >
            {[...companyLogos, ...companyLogos].map((company, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex-shrink-0 cursor-pointer"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-16 w-auto object-contain filter invert brightness-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0E0918] via-[#0E0918]/60 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0E0918] via-[#0E0918]/60 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
