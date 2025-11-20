"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "@/components/about/Breadcrumb";
import {
  Home, Users, Briefcase, Cpu, Building, Code, FileText,
  ChevronRight, MapPin
} from "lucide-react";
import sitemapData from "../../data/sitemapData.json";

gsap.registerPlugin(ScrollTrigger);

const iconMap: any = {
  home: Home,
  users: Users,
  briefcase: Briefcase,
  cpu: Cpu,
  building: Building,
  code: Code,
  "file-text": FileText,
};

export default function SitemapPage() {
  const siteUrl = "https://www.corewaysolution.com";
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);

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
        <title>Sitemap | Coreway Solution</title>
        <meta
          name="description"
          content="Navigate our website with ease. Complete sitemap of all pages and services offered by Coreway Solution."
        />
        <link rel="canonical" href={`${siteUrl}/sitemap`} />
      </Head>

      <div className="min-h-screen bg-[#0E0918]">
        <header className="pt-20 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Sitemap" },
              ]}
            />
          </div>
        </header>

        <main className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <section ref={contentRef} className="mb-16">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <MapPin className="w-12 h-12 text-purple-400" />
                  <h1 className="text-4xl md:text-6xl font-bold text-white">
                    {sitemapData.hero.title}
                  </h1>
                </div>
                <p className="text-xl md:text-2xl text-purple-400 mb-4">
                  {sitemapData.hero.subtitle}
                </p>
                <p className="text-lg text-white/80 max-w-3xl mx-auto">
                  {sitemapData.hero.description}
                </p>
              </div>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
              {sitemapData.sections.map((section: any) => {
                const IconComponent = iconMap[section.icon] || FileText;

                return (
                  <section
                    key={section.id}
                    ref={addToRefs}
                    className="bg-gradient-to-br from-white/5 to-gray-900/30 border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-purple-400" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">
                        {section.title}
                      </h2>
                    </div>

                    {section.pages && (
                      <ul className="space-y-3">
                        {section.pages.map((page: any, idx: number) => (
                          <li key={idx}>
                            <Link
                              href={page.href}
                              className="group flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                            >
                              <ChevronRight className="w-5 h-5 text-purple-400 mt-0.5 group-hover:translate-x-1 transition-transform" />
                              <div className="flex-1">
                                <div className="text-white font-semibold group-hover:text-purple-400 transition-colors">
                                  {page.label}
                                </div>
                                {page.description && (
                                  <div className="text-sm text-white/60 mt-1">
                                    {page.description}
                                  </div>
                                )}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.subsections && (
                      <div className="space-y-6">
                        {section.subsections.map((subsection: any, subIdx: number) => (
                          <div key={subIdx}>
                            <h3 className="text-lg font-semibold text-white/90 mb-3 pl-3">
                              {subsection.title}
                            </h3>
                            <ul className="space-y-2">
                              {subsection.pages.map((page: any, pageIdx: number) => (
                                <li key={pageIdx}>
                                  <Link
                                    href={page.href}
                                    className="group flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                                  >
                                    <ChevronRight className="w-4 h-4 text-purple-400 mt-0.5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                                    <div className="flex-1">
                                      <div className="text-white text-sm font-medium group-hover:text-purple-400 transition-colors">
                                        {page.label}
                                      </div>
                                      {page.description && (
                                        <div className="text-xs text-white/60 mt-1">
                                          {page.description}
                                        </div>
                                      )}
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </section>
                );
              })}
            </div>

            <section ref={addToRefs} className="mt-12">
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-3xl p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Can't Find What You're Looking For?
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto mb-6">
                  Our team is here to help. Contact us directly and we'll guide you to the right solution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 inline-block"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/"
                    className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 inline-block"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </section>

            <section ref={addToRefs} className="mt-12">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <Link
                    href="/about/company-overview"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/solution/ai-consulting"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    AI Solutions
                  </Link>
                  <Link
                    href="/industries/ecommerce-stores"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Industries
                  </Link>
                  <Link
                    href="/technologies/react"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Technologies
                  </Link>
                  <Link
                    href="/careers"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Careers
                  </Link>
                  <Link
                    href="/partners"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Partners
                  </Link>
                  <Link
                    href="/press-kit"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Press Kit
                  </Link>
                  <Link
                    href="/contact"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
