"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CaseStudyOverviewProps {
  overview: string;
  sideImage?: string;
  fullImage?: string;
}

export default function CaseStudyOverview({
  overview,
  sideImage,
  fullImage,
}: CaseStudyOverviewProps) {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const bottomImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      leftRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: leftRef.current, start: "top 85%" },
      }
    );

    gsap.fromTo(
      rightRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: rightRef.current, start: "top 85%" },
      }
    );

    gsap.fromTo(
      bottomImgRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: bottomImgRef.current, start: "top 85%" },
      }
    );
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-[#0A0014] to-[#120020]">

      {/* LEFT TEXT — RIGHT IMAGE */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT: OVERVIEW TEXT */}
        <div ref={leftRef} className="space-y-6 md:sticky md:top-24">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Overview
          </h2>
         
        </div>

        {/* RIGHT: IMAGE */}
        <div ref={rightRef} className="flex justify-center">
          <p className="text-lg text-gray-300 leading-relaxed">
            {overview}
          </p>
        </div>

      </div>

      {/* FULL WIDTH IMAGE BELOW */}
      <div ref={bottomImgRef} className="max-w-5xl mx-auto mt-20 px-6">
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop&q=80"
            alt="case study full preview"
            className="rounded-2xl w-full shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]"
          />

          {/* Glow */}
          <div className="absolute inset-0 rounded-2xl bg-purple-600 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
        </div>
      </div>

    </section>
  );
}
