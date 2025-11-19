"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MapPin, Clock, Users, Briefcase } from "lucide-react";

interface CaseStudyHeroProps {
  title: string;
  subtitle: string;
  bannerImage: string;
  client: string;
  industry: string;
  location: string;
  services: string[];
  duration: string;
  teamSize: string;
  gradient: string;
}

export default function CaseStudyHero({
  title,
  subtitle,
  bannerImage,
  client,
  industry,
  location,
  services,
  duration,
  teamSize,
  gradient,
}: CaseStudyHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1 }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1.2 },
          "-=0.8"
        )
        .fromTo(
          infoRef.current?.children || [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
          "-=0.6"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0A]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h1
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            {title}
          </h1>
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto"
          >
            {subtitle}
          </p>
        </div>

        <div
          ref={imageRef}
          className="relative rounded-2xl overflow-hidden mb-16 border border-white/10 shadow-2xl"
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20`}
          ></div>
          <img
            src={bannerImage}
            alt={title}
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          />
        </div>

        <div
          ref={infoRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500/10 rounded-xl mb-3">
              <Briefcase className="w-6 h-6 text-cyan-400" />
            </div>
            <p className="text-sm text-gray-500 mb-1">Client</p>
            <p className="text-white font-semibold">{client}</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500/10 rounded-xl mb-3">
              <MapPin className="w-6 h-6 text-cyan-400" />
            </div>
            <p className="text-sm text-gray-500 mb-1">Location</p>
            <p className="text-white font-semibold">{location}</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500/10 rounded-xl mb-3">
              <Clock className="w-6 h-6 text-cyan-400" />
            </div>
            <p className="text-sm text-gray-500 mb-1">Duration</p>
            <p className="text-white font-semibold">{duration}</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500/10 rounded-xl mb-3">
              <Users className="w-6 h-6 text-cyan-400" />
            </div>
            <p className="text-sm text-gray-500 mb-1">Team Size</p>
            <p className="text-white font-semibold">{teamSize}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
