'use client'

import { motion } from 'framer-motion'
import { Brain, Cog, Link2, BarChart3, Shield, Zap, Database, Cloud, Cpu, Network, CheckCircle } from 'lucide-react'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SolutionScope({ data }: { data: any }) {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef(null);

  useEffect(() => {
    if (!data.quote || !bgRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        y: "-20%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [data.quote]);

  const steps = data.solution?.steps || []

  return (
    <section className="relative bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918] py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            {data.solution?.title || "Our Solution"}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {data.solution?.description}
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-purple-500/50 transition-all"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center flex-shrink-0 shadow-xl">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {data.solution?.image && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <img
              src={data.solution.image}
              alt="Solution Architecture"
              className="w-full rounded-3xl shadow-2xl border border-purple-500/20"
            />
          </motion.div>
        )}

      </div>

      {data.quote && (
        <motion.section
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-screen overflow-hidden mt-32"
        >
          {/* Background image layer */}
          <div
            ref={bgRef}
            className="absolute inset-0 bg-center bg-cover "
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800')`, // Placeholder or use a specific image
            }}
          />

          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content on top */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-white text-3xl md:text-5xl font-serif italic leading-tight max-w-4xl">
              "{data.quote.text}"
            </h2>
            <span className="mt-6 text-gray-300 text-lg">
              — {data.quote.author}
            </span>
          </div>
        </motion.section>
      )}
    </section>
  )
}
