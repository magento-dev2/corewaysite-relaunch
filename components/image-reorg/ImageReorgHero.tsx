"use client";
import { ReactNode } from "react";

import { motion } from "framer-motion";
import { Sparkles, Zap, Tag, Palette } from "lucide-react";
import Link from "next/link";


type InfoCardProps = {
  icon: ReactNode;
  title: string;
  value: string;
};

export default function ImageReorgHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918]">
      {/* Glow background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center justify-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-semibold text-purple-300">AI-Powered Image Intelligence</span>
            </div> */}

            {/* TWO-LINE TITLE */}
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              <span className="block">Recognition</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500">
                Any Image
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-xl mb-10">
              Instantly analyze product images and extract materials, colors,
              attributes, and specifications with enterprise-grade accuracy.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-10">
              {[{ v: "50+", l: "Attributes" }, { v: "99.9%", l: "Accuracy" }, { v: "<2s", l: "Speed" }].map(
                (item) => (
                  <div
                    key={item.l}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
                  >
                    <div className="text-3xl font-bold text-purple-400">{item.v}</div>
                    <div className="text-sm text-gray-400">{item.l}</div>
                  </div>
                )
              )}
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 cursor-pointer py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/30">
                  Contact
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="px-8 py-4 cursor-pointer bg-white/10 border border-white/20 rounded-xl text-white font-semibold">
                  View Demo
                </button>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT IMAGE + DESCRIPTION ABOVE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* DESCRIPTION ABOVE IMAGE */}
            {/* <div className="mb-6 text-center">
              <p className="text-sm uppercase tracking-wider text-purple-300 font-semibold mb-1">
                Example Analysis
              </p>
              <h3 className="text-xl font-semibold text-white">
                Jewelry Image Breakdown
              </h3>
            </div> */}

            <div className="relative bg-gradient-to-br from-purple-900/30 mt-8 to-violet-900/30 border border-purple-500/30 rounded-3xl p-6 backdrop-blur-xl overflow-hidden">

              {/* Image */}
              <img
                src="/assets/agent/neckless.jpg"
                alt="Necklace"
                className="w-full h-[50vh] object-cover object-bottom rounded-2xl"
              />

              {/* Overlay Container */}
              <div className="absolute inset-0 flex justify-between items-center px-6">

                {/* LEFT SIDE INFO */}
                <div className="flex flex-col gap-4">
                  <InfoCard
                    icon={<Tag className="w-5 h-5 text-purple-400" />}
                    title="Material"
                    value="18K Gold"
                  />
                  <InfoCard
                    icon={<Palette className="w-5 h-5 text-violet-400" />}
                    title="Color"
                    value="Gold #FFD700"
                  />
                </div>

                {/* RIGHT SIDE INFO */}
                <div className="flex flex-col gap-4">
                  <InfoCard
                    icon={<Zap className="w-5 h-5 text-purple-400" />}
                    title="Carat"
                    value="1.5 Carat"
                  />
                  <InfoCard
                    icon={<Tag className="w-5 h-5 text-purple-400" />}
                    title="Cut"
                    value="Round • VS1"
                  />
                </div>

              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, value }: InfoCardProps) {
  return (
    <div className="flex items-center gap-4 p-2 bg-purple-200 border border-white/10 rounded-xl">
      <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <div>
        <div className="text-sm text-gray-400">{title}</div>
        <div className="text-purple-500 font-semibold">{value}</div>
      </div>
    </div>
  );
}
