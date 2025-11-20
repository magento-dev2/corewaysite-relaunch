"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Head from "next/head";
import Breadcrumb from "@/components/about/Breadcrumb";
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

  return (
    <>
      <Head>
        <title>Careers | Coreway Solution</title>
        <meta
          name="description"
          content="Join our team at Coreway Solution. Explore career opportunities and be part of shaping the future of technology."
        />
        <link rel="canonical" href={`${siteUrl}/careers`} />
      </Head>

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
                <p className="text-lg text-white/80 max-w-3xl mx-auto">
                  {careersData.benefits.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {careersData.benefits.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-6"
                  >
                    <h3 className="text-xl font-bold text-white mb-4">
                      {item.category}
                    </h3>
                    <ul className="space-y-2">
                      {item.benefits.map((benefit, bIdx) => (
                        <li
                          key={bIdx}
                          className="text-white/80 text-sm flex items-start gap-2"
                        >
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section ref={addToRefs} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  Open Positions
                </h2>
                <p className="text-lg text-white/80 max-w-3xl mx-auto">
                  Join our team and work on exciting projects that make a real impact.
                </p>
              </div>

              <div className="space-y-4">
                {careersData.openPositions.map((job) => (
                  <div
                    key={job.id}
                    className="bg-gradient-to-br from-white/5 to-gray-900/30 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300"
                  >
                    <div
                      className="p-6 cursor-pointer"
                      onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-3">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap gap-3 mb-3">
                            <span className="flex items-center gap-1 text-sm text-white/70">
                              <Briefcase className="w-4 h-4" />
                              {job.department}
                            </span>
                            <span className="flex items-center gap-1 text-sm text-white/70">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1 text-sm text-white/70">
                              <Clock className="w-4 h-4" />
                              {job.type}
                            </span>
                            <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-lg text-xs text-purple-300">
                              {job.experience}
                            </span>
                          </div>
                          <p className="text-white/80">{job.description}</p>
                        </div>
                        <button className="ml-4 text-purple-400 hover:text-purple-300">
                          {expandedJob === job.id ? (
                            <ChevronUp className="w-6 h-6" />
                          ) : (
                            <ChevronDown className="w-6 h-6" />
                          )}
                        </button>
                      </div>
                    </div>

                    {expandedJob === job.id && (
                      <div className="px-6 pb-6 border-t border-white/10 pt-6">
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">
                              Responsibilities
                            </h4>
                            <ul className="space-y-2">
                              {job.responsibilities.map((resp, idx) => (
                                <li key={idx} className="text-white/80 flex items-start gap-2">
                                  <span className="text-purple-400 mt-1">•</span>
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">
                              Requirements
                            </h4>
                            <ul className="space-y-2">
                              {job.requirements.map((req, idx) => (
                                <li key={idx} className="text-white/80 flex items-start gap-2">
                                  <span className="text-purple-400 mt-1">•</span>
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">
                              Nice to Have
                            </h4>
                            <ul className="space-y-2">
                              {job.niceToHave.map((item, idx) => (
                                <li key={idx} className="text-white/80 flex items-start gap-2">
                                  <span className="text-blue-400 mt-1">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300">
                            Apply for this position
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section ref={addToRefs} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  {careersData.hiringProcess.title}
                </h2>
                <p className="text-lg text-white/80 max-w-3xl mx-auto">
                  {careersData.hiringProcess.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {careersData.hiringProcess.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6 relative"
                  >
                    <div className="absolute -top-4 left-6 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 mt-2">
                      {step.title}
                    </h3>
                    <p className="text-white/80 mb-3">{step.description}</p>
                    <span className="text-sm text-green-400">{step.duration}</span>
                  </div>
                ))}
              </div>
            </section>

            <section ref={addToRefs} className="mb-20">
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-3xl p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {careersData.cta.title}
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto mb-6">
                  {careersData.cta.description}
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300">
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
      </div>
    </>
  );
}
