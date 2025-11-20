"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ContactInfo {
  company: string;
  email?: string;
  website?: string;
  dpo?: string;
  privacy?: string;
}

interface Section {
  id: number;
  title: string;
  content?: string[];
  list?: string[];
  additionalContent?: string[];
  additionalList?: string[];
  highlightList?: Array<{ title: string; text: string }>;
  contact?: ContactInfo;
  subsections?: Array<{
    title: string;
    content?: string[];
    list?: string[];
  }>;
}

interface LegalPageRendererProps {
  title: string;
  lastUpdated: string;
  sections: Section[];
}

export default function LegalPageRenderer({
  title,
  lastUpdated,
  sections,
}: LegalPageRendererProps) {
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
    <div
      ref={contentRef}
      className="bg-gradient-to-br from-white/5 to-gray-900/30 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {title}
      </h1>
      <p className="text-white/60 text-lg mb-12">Last Updated: {lastUpdated}</p>

      <div className="space-y-12">
        {sections.map((section) => (
          <section key={section.id} ref={addToRefs}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {section.title}
            </h2>

            {section.content && section.content.map((paragraph, idx) => (
              <p key={idx} className="text-white/90 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}

            {section.list && (
              <ul className="list-disc list-inside text-white/90 space-y-2 ml-4 mb-4">
                {section.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}

            {section.additionalContent && section.additionalContent.map((paragraph, idx) => (
              <p key={idx} className="text-white/90 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}

            {section.additionalList && (
              <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
                {section.additionalList.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}

            {section.highlightList && (
              <ul className="list-disc list-inside text-white/90 space-y-3 ml-4">
                {section.highlightList.map((item, idx) => (
                  <li key={idx}>
                    <strong className="text-white">{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
            )}

            {section.subsections && section.subsections.map((subsection, subIdx) => (
              <div key={subIdx} className="mt-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {subsection.title}
                </h3>
                {subsection.content && subsection.content.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-white/90 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
                {subsection.list && (
                  <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
                    {subsection.list.map((item, lIdx) => (
                      <li key={lIdx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {section.contact && (
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm mt-6">
                <p className="text-white font-semibold text-lg mb-3">
                  {section.contact.company}
                </p>
                {section.contact.email && (
                  <p className="text-white/90 mb-2">
                    Email: {section.contact.email}
                  </p>
                )}
                {section.contact.dpo && (
                  <p className="text-white/90 mb-2">
                    DPO: {section.contact.dpo}
                  </p>
                )}
                {section.contact.privacy && (
                  <p className="text-white/90 mb-2">
                    Privacy: {section.contact.privacy}
                  </p>
                )}
                {section.contact.website && (
                  <p className="text-white/90">
                    Website: {section.contact.website}
                  </p>
                )}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
