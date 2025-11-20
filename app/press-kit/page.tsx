"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Head from "next/head";
import Breadcrumb from "@/components/about/Breadcrumb";
import {
  Download, Package, Image, FileText, Camera, Monitor, Book,
  CheckCircle, Users, Globe, Star, Briefcase, Headphones
} from "lucide-react";
import pressKitData from "../../data/pressKitData.json";

gsap.registerPlugin(ScrollTrigger);

const iconMap: any = {
  package: Package,
  image: Image,
  "file-text": FileText,
  camera: Camera,
  monitor: Monitor,
  book: Book,
  "check-circle": CheckCircle,
  users: Users,
  globe: Globe,
  star: Star,
  briefcase: Briefcase,
  headphones: Headphones,
};

export default function PressKitPage() {
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
        <title>Press Kit | Coreway Solution</title>
        <meta
          name="description"
          content="Download our brand assets, company information, and media resources for editorial use."
        />
        <link rel="canonical" href={`${siteUrl}/press-kit`} />
      </Head>

      <div className="min-h-screen bg-[#0E0918]">
        <header className="pt-20 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Press Kit" },
              ]}
            />
          </div>
        </header>

        <main className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <section ref={contentRef} className="mb-20">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  {pressKitData.hero.title}
                </h1>
                <p className="text-xl md:text-2xl text-purple-400 mb-6">
                  {pressKitData.hero.subtitle}
                </p>
                <p className="text-lg text-white/80 max-w-3xl mx-auto">
                  {pressKitData.hero.description}
                </p>
              </div>
            </section>

            <section ref={addToRefs} className="mb-20">
              <div className="bg-gradient-to-br from-white/5 to-gray-900/30 border border-white/10 rounded-3xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-6">
                  {pressKitData.companyOverview.title}
                </h2>
                <p className="text-white/90 leading-relaxed mb-8">
                  {pressKitData.companyOverview.description}
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                  {Object.entries(pressKitData.companyOverview.details).map(([key, value]) => (
                    <div
                      key={key}
                      className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4 text-center"
                    >
                      <div className="text-2xl font-bold text-white mb-1">{value}</div>
                      <div className="text-sm text-white/70 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Company Boilerplate</h3>
                  <p className="text-white/90 leading-relaxed italic">
                    {pressKitData.companyOverview.boilerplate}
                  </p>
                </div>
              </div>
            </section>

            <section ref={addToRefs} className="mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center">
                {pressKitData.brandAssets.title}
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto text-center mb-12">
                {pressKitData.brandAssets.description}
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {pressKitData.brandAssets.logos.map((logo, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-white/5 to-gray-900/30 border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300"
                  >
                    <div className="w-full h-32 bg-white/10 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-4xl">🎨</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{logo.name}</h3>
                    <p className="text-sm text-white/70 mb-4">{logo.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {logo.formats.map((format) => (
                        <span
                          key={format}
                          className="px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded text-xs text-purple-300"
                        >
                          {format}
                        </span>
                      ))}
                    </div>
                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Brand Colors</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-white/70 mb-3">Primary</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {pressKitData.brandAssets.colors.primary.map((color) => (
                          <div key={color.name} className="flex items-center gap-3">
                            <div
                              className="w-12 h-12 rounded-lg border border-white/10"
                              style={{ backgroundColor: color.hex }}
                            ></div>
                            <div>
                              <p className="text-white font-semibold text-sm">{color.name}</p>
                              <p className="text-white/60 text-xs">{color.hex}</p>
                              <p className="text-white/60 text-xs">RGB: {color.rgb}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white/70 mb-3">Neutral</h4>
                      <div className="grid grid-cols-3 gap-3">
                        {pressKitData.brandAssets.colors.neutral.map((color) => (
                          <div key={color.name}>
                            <div
                              className="w-full h-12 rounded-lg border border-white/10 mb-2"
                              style={{ backgroundColor: color.hex }}
                            ></div>
                            <p className="text-white text-xs">{color.name}</p>
                            <p className="text-white/60 text-xs">{color.hex}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Typography</h3>
                  <p className="text-white/90 mb-4">
                    Primary Font: <span className="font-bold text-purple-400">{pressKitData.brandAssets.typography.primary}</span>
                  </p>
                  <div className="space-y-2">
                    {pressKitData.brandAssets.typography.weights.map((weight) => (
                      <div
                        key={weight}
                        className="bg-white/5 rounded-lg p-3 text-white"
                      >
                        {weight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section ref={addToRefs} className="mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center">
                {pressKitData.stats.title}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pressKitData.stats.figures.map((stat, idx) => {
                  const IconComponent = iconMap[stat.icon] || CheckCircle;
                  return (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-6 text-center"
                    >
                      <IconComponent className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                      <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-white/70">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section ref={addToRefs} className="mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center">
                {pressKitData.achievements.title}
              </h2>

              <div className="space-y-4">
                {pressKitData.achievements.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6 flex items-start gap-6"
                  >
                    <div className="text-3xl font-bold text-green-400 flex-shrink-0 w-20">
                      {item.year}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/80">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section ref={addToRefs} className="mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center">
                {pressKitData.pressReleases[0] && "Recent Press Releases"}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {pressKitData.pressReleases.map((release, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300"
                  >
                    <div className="text-sm text-purple-400 mb-2">{release.date}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{release.title}</h3>
                    <p className="text-white/80 mb-4">{release.excerpt}</p>
                    <a
                      href={release.link}
                      className="text-purple-400 hover:text-purple-300 font-semibold inline-flex items-center gap-2"
                    >
                      Read More →
                    </a>
                  </div>
                ))}
              </div>
            </section>

            <section ref={addToRefs} className="mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center">
                {pressKitData.downloads.title}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pressKitData.downloads.items.map((item, idx) => {
                  const IconComponent = iconMap[item.icon] || Package;
                  return (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-white/5 to-gray-900/30 border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300"
                    >
                      <IconComponent className="w-10 h-10 text-purple-400 mb-4" />
                      <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                      <p className="text-sm text-white/70 mb-4">{item.description}</p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs text-white/60">{item.format}</span>
                        <span className="text-xs text-white/60">{item.fileSize}</span>
                      </div>
                      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </div>
                  );
                })}
              </div>
            </section>

            <section ref={addToRefs} className="mb-20">
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-3xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">
                  {pressKitData.mediaContact.title}
                </h2>
                <p className="text-white/80 text-center max-w-2xl mx-auto mb-8">
                  {pressKitData.mediaContact.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {pressKitData.mediaContact.contacts.map((contact, idx) => (
                    <div
                      key={idx}
                      className="bg-white/10 border border-white/10 rounded-2xl p-6"
                    >
                      <h3 className="text-xl font-bold text-white mb-2">{contact.name}</h3>
                      <p className="text-purple-400 mb-4">{contact.title}</p>
                      <p className="text-white/90 mb-2">
                        Email: <a href={`mailto:${contact.email}`} className="text-purple-400 hover:text-purple-300">{contact.email}</a>
                      </p>
                      <p className="text-white/90">
                        Phone: <a href={`tel:${contact.phone}`} className="text-purple-400 hover:text-purple-300">{contact.phone}</a>
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-center text-sm text-white/60">
                  {pressKitData.mediaContact.responseTime}
                </p>
              </div>
            </section>

            <section ref={addToRefs}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  {pressKitData.guidelines.title}
                </h2>
                <ul className="space-y-3">
                  {pressKitData.guidelines.rules.map((rule, idx) => (
                    <li key={idx} className="text-white/80 flex items-start gap-3">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
