"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Breadcrumb from "@/components/about/Breadcrumb";
import ApplicationModal from "@/components/careers/ApplicationModal";
import {
  Lightbulb, Users, Book, Heart, Globe, Target,
  MapPin, Clock, Briefcase, ChevronDown, ChevronUp
} from "lucide-react";
import careersData from "../../data/careersData.json";

gsap.registerPlugin(ScrollTrigger);

const iconMap: any = {
  lightbulb: Lightbulb,
  users: Users,
  book: Book,
  heart: Heart,
  globe: Globe,
  target: Target,
};

export default function CareersPage() {
  const siteUrl = "https://www.corewaysolution.com";
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<{ id: number; title: string } | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );

      sectionsRef.current.forEach((section, index) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const handleApply = (jobId: number, jobTitle: string) => {
    setSelectedJob({ id: jobId, title: jobTitle });
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0E0918]">
      <header className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Careers" },
            ]}
          />
        </div>
      </header>

      <main className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section ref={contentRef} className="mb-20">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {careersData.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-purple-400 mb-6">
                {careersData.hero.subtitle}
              </p>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                {careersData.hero.description}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {careersData.hero.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          <section ref={addToRefs} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {careersData.culture.title}
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                {careersData.culture.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careersData.culture.values.map((value, idx) => {
                const IconComponent = iconMap[value.icon] || Target;
                return (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-white/5 to-gray-900/30 border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-white/80">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section ref={addToRefs} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {careersData.benefits.title}
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-6">
                {careersData.cta.description}
              </p>
              <button
                onClick={() => handleApply(0, "General Application")}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300"
              >
                {careersData.cta.buttonText}
              </button>
              <p className="text-sm text-white/60 mt-4">
                Email us at{" "}
                <a href={`mailto:${careersData.cta.email}`} className="text-purple-400 hover:text-purple-300">
                  {careersData.cta.email}
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jobTitle={selectedJob?.title || ""}
        jobId={selectedJob?.id || 0}
      />
    </div>
  );
}

