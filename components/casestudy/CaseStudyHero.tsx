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
  const imageRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !imageRef.current || !detailsRef.current) return;

    const tl = gsap.timeline();

    tl.fromTo(
      heroRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" },
        "-=0.7"
      )
      .fromTo(
        detailsRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
        "-=0.5"
      );
  }, []);

  return (
    <section className="relative pt-32 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div ref={heroRef} className="lg:col-span-2 lg:sticky lg:top-32">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-6">
              Case Study
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-400 mb-8">{subtitle}</p>

            <div ref={detailsRef} className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Briefcase className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-sm text-gray-500">Client</p>
                  <p className="font-semibold">{client}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-semibold">{location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <Clock className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-semibold">{duration}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <Users className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-sm text-gray-500">Team Size</p>
                  <p className="font-semibold">{teamSize}</p>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm text-gray-500 mb-3">Services Provided</p>
                <div className="flex flex-wrap gap-2">
                  {services.map((service, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1.5 bg-gradient-to-r ${gradient} bg-opacity-10 border border-white/10 rounded-full text-sm text-white`}
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm text-gray-500 mb-2">Industry</p>
                <p className="text-white font-semibold">{industry}</p>
              </div>
            </div>
          </div>

          <div
            ref={imageRef}
            className="lg:col-span-3 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 blur-3xl`}
            ></div>
            <img
              src={bannerImage}
              alt={title}
              className="w-full h-[500px] lg:h-[700px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
