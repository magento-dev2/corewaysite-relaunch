"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Rocket, Award, Globe, Building } from "lucide-react";

const iconMap = {
  "Global Team": Users,
  "Years of Experience": TrendingUp,
  "Revenue Empowered": Rocket,
  "Industries Served": Globe,
  "Stores / Sites Launched": Building,
  "Awards Won": Award,
};

interface MagicalNumbersProps {
  t: {
    title: string;
    description: string;
    stats: Array<{ value: string; label: string }>;
    cta: string;
  };
}

export default function MagicalNumbersElegant({ t }: MagicalNumbersProps) {
  const highlights = t.stats.map((stat, index) => ({
    ...stat,
    icon: Object.values(iconMap)[index]
  }));
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0E0918] via-[#1a0f2b] to-[#0E0918] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08),transparent_70%)] pointer-events-none" />

      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-slate-500/10 rounded-full blur-[80px]"></div>

      <div className="relative z-10 max-w-1440 mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text max-w-[780px] mx-auto  mb-12"
        >
          {/* <div className="inline-block text-center px-3 py-1.5 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full mb-4">
            <span className="text-xs font-medium text-slate-300">Why Choose Coreway</span>
          </div> */}
          <h2 className="text-3xl text-center md:text-4xl font-bold leading-tight mb-3 text-white">
            {t.title}
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            {t.description}
          </p>
          {/* <p className="text-base text-slate-400 leading-relaxed">
            Our team brings deep technical expertise and a solution-first mindset to turn ideas into reliable, secure, and high-performance digital products.          </p>

          <p className="text-base text-slate-400 leading-relaxed">
            We partner with startups, SMBs, and enterprises across the world—delivering technology that drives growth, efficiency, and long-term impact.          </p> */}
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="group relative"
              >
                <div className="relative h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 transition-all duration-300 hover:border-slate-600 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700 group-hover:bg-slate-700 transition-colors">
                      <Icon className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  <div className="text-center space-y-1">
                    <h3 className="text-3xl font-bold text-white tracking-tight">
                      {item.value}
                    </h3>
                    <p className="text-slate-400 text-xs font-medium leading-tight">
                      {item.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href="#"
            className="group bg-white text-slate-900 px-8 py-3 rounded-lg hover:bg-slate-100 transition-all font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
          >
            {t.cta}
            <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
