"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Head from "next/head";
import Breadcrumb from "@/components/about/Breadcrumb";
import { Cookie, Check, X } from "lucide-react";
import cookieData from "../../data/cookiePolicyData.json";

gsap.registerPlugin(ScrollTrigger);

export default function CookiePolicyPage() {
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
        <title>Cookie Policy | Coreway Solution</title>
        <meta
          name="description"
          content="Cookie Policy for Coreway Solution. Learn about how we use cookies and tracking technologies."
        />
        <meta property="og:title" content="Cookie Policy | Coreway Solution" />
        <link rel="canonical" href={`${siteUrl}/cookie-policy`} />
      </Head>

      <div className="min-h-screen bg-[#0E0918]">
        <header className="pt-20 pb-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Cookie Policy" },
              ]}
            />
          </div>
        </header>

        <main className="pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              ref={contentRef}
              className="bg-gradient-to-br from-white/5 to-gray-900/30 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <Cookie className="w-12 h-12 text-purple-400" />
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  {cookieData.title}
                </h1>
              </div>
              <p className="text-white/60 text-lg mb-12">
                Last Updated: {cookieData.lastUpdated}
              </p>

              <div className="space-y-12">
                {cookieData.sections.map((section: any) => (
                  <section key={section.id} ref={addToRefs}>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {section.title}
                    </h2>

                    {section.content && section.content.map((paragraph: string, idx: number) => (
                      <p key={idx} className="text-white/90 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}

                    {section.highlightList && (
                      <ul className="list-disc list-inside text-white/90 space-y-3 ml-4 mb-4">
                        {section.highlightList.map((item: any, idx: number) => (
                          <li key={idx}>
                            <strong className="text-white">{item.title}</strong> {item.text}
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.cookieTypes && (
                      <div className="grid gap-6 mt-6">
                        {section.cookieTypes.map((cookie: any, idx: number) => (
                          <div
                            key={idx}
                            className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-6"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                  {cookie.name}
                                </h3>
                                <div className="flex flex-wrap gap-2 mb-3">
                                  <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-lg text-xs text-purple-300">
                                    {cookie.purpose}
                                  </span>
                                  <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-lg text-xs text-blue-300">
                                    {cookie.duration}
                                  </span>
                                  <span className={`px-3 py-1 border rounded-lg text-xs flex items-center gap-1 ${
                                    cookie.canDisable
                                      ? 'bg-green-500/20 border-green-500/30 text-green-300'
                                      : 'bg-red-500/20 border-red-500/30 text-red-300'
                                  }`}>
                                    {cookie.canDisable ? (
                                      <><Check className="w-3 h-3" /> Can Disable</>
                                    ) : (
                                      <><X className="w-3 h-3" /> Required</>
                                    )}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <p className="text-white/90 mb-4">{cookie.description}</p>
                            {cookie.examples && (
                              <div>
                                <p className="text-sm text-white/70 mb-2">Examples:</p>
                                <ul className="list-disc list-inside text-sm text-white/80 space-y-1 ml-4">
                                  {cookie.examples.map((example: string, exIdx: number) => (
                                    <li key={exIdx}>{example}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {section.thirdPartyServices && (
                      <div className="space-y-3 mt-4">
                        {section.thirdPartyServices.map((service: any, idx: number) => (
                          <div
                            key={idx}
                            className="bg-white/5 border border-white/10 rounded-xl p-4"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-1">
                                  {service.name}
                                </h4>
                                <p className="text-white/80 text-sm">{service.purpose}</p>
                              </div>
                              {service.link && (
                                <a
                                  href={service.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-purple-400 hover:text-purple-300 text-sm underline"
                                >
                                  Privacy Policy
                                </a>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.additionalContent && section.additionalContent.map((paragraph: string, idx: number) => (
                      <p key={idx} className="text-white/90 leading-relaxed mt-4">
                        {paragraph}
                      </p>
                    ))}

                    {section.contact && (
                      <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm mt-6">
                        <p className="text-white font-semibold text-lg mb-3">
                          {section.contact.company}
                        </p>
                        <p className="text-white/90 mb-2">Email: {section.contact.email}</p>
                        <p className="text-white/90">Website: {section.contact.website}</p>
                      </div>
                    )}
                  </section>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
