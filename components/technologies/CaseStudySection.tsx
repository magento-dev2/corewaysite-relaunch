"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface CaseStudyStat {
    value: string;
    label: string;
}

interface CaseStudy {
    id: number;
    slug: string;
    title: string;
    subtitle: string;
    client: string;
    industry: string;
    imageUrl: string;
    stats: CaseStudyStat[];
    gradient: string;
    technologies?: string[];
}

interface CaseStudySectionProps {
    technology?: string;
    caseStudies: CaseStudy[];
    title?: string;
    description?: string;
}

export default function CaseStudySection({
    technology,
    caseStudies,
    title = "Success Stories",
    description = "See how we've helped businesses achieve their goals"
}: CaseStudySectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    // Filter case studies by technology if specified
    const filteredCaseStudies = technology
        ? caseStudies.filter(cs =>
            cs.technologies?.some(tech =>
                tech.toLowerCase().includes(technology.toLowerCase()) ||
                technology.toLowerCase().includes(tech.toLowerCase())
            )
        )
        : caseStudies;

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = gridRef.current?.children || [];
            Array.from(items).forEach((item, index) => {
                gsap.fromTo(
                    item,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: index * 0.1,
                        scrollTrigger: {
                            trigger: item,
                            start: "top 85%",
                        },
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [filteredCaseStudies]);

    // If no case studies match, show a CTA to view all
    if (filteredCaseStudies.length === 0) {
        return (
            <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a1325] relative">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Explore Our Work
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Discover how we've helped businesses across various industries achieve their goals
                    </p>
                    <Link
                        href="/case-studies"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-all hover:scale-105 shadow-lg"
                    >
                        View All Case Studies
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a1325] relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>

                <div ref={gridRef} className={`grid ${filteredCaseStudies.length === 1 ? 'md:grid-cols-1 max-w-3xl mx-auto' : filteredCaseStudies.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'} gap-8`}>
                    {filteredCaseStudies.map((caseStudy) => (
                        <Link
                            key={caseStudy.id}
                            href={`/case-studies/${caseStudy.slug}`}
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all hover:transform hover:scale-105"
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={caseStudy.imageUrl}
                                    alt={caseStudy.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${caseStudy.gradient} opacity-60`}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1325] via-[#1a1325]/50 to-transparent"></div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-purple-400 text-sm mb-3">
                                    <span className="font-semibold">{caseStudy.client}</span>
                                    <span className="text-gray-500">•</span>
                                    <span className="text-gray-400">{caseStudy.industry}</span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                                    {caseStudy.subtitle}
                                </h3>

                                {/* Stats */}
                                {caseStudy.stats && caseStudy.stats.length > 0 && (
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        {caseStudy.stats.slice(0, 2).map((stat, index) => (
                                            <div key={index} className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                                                <div className="text-2xl font-bold text-purple-400 mb-1">
                                                    {stat.value}
                                                </div>
                                                <div className="text-xs text-gray-400">
                                                    {stat.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className="flex items-center text-purple-400 font-semibold group-hover:gap-2 transition-all">
                                    <span>Read Case Study</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>

                            {/* Hover effect */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -mr-20 -mt-20"></div>
                        </Link>
                    ))}
                </div>

                {/* View All Link */}
                {filteredCaseStudies.length > 0 && (
                    <div className="text-center mt-12">
                        <Link
                            href="/case-studies"
                            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                        >
                            View All Case Studies
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
