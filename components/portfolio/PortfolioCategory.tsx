"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  language: string;
  images: string[];
}

export default function PortfolioCategory() {
  const data: Project[] = [
    { id: 1, language: "Angular", images: ["/images/Angular/gratitude.png", "/images/Angular/tailor.png"] },
    { id: 2, language: "Android", images: ["/images/Android/bapuji-1.png", "/images/Android/eclinics.png", "/images/Android/handy-app-1.png", "/images/Android/qr-code-auth.png", "/images/Android/qr-scanner-1.png", "/images/Android/radadiya-1.png"] },
    { id: 3, language: "codelgniter", images: ["/images/codelgniter/afl.png", "/images/codelgniter/compare.png", "/images/codelgniter/style.png", "/images/codelgniter/virtu.png"] },
    { id: 4, language: "Aws", images: ["/images/Aws/right.png"] },
    { id: 5, language: "ios", images: ["/images/ios/handy-app-1.png", "/images/ios/qr-code-auth.png"] },
    { id: 6, language: "Laravel", images: ["/images/Laravel/delaware.png", "/images/Laravel/geliyoo-2.png", "/images/Laravel/motive.png", "/images/Laravel/neighbor.png"] },
    { id: 7, language: "Magento", images: ["/images/Magento/knir.png", "/images/Magento/lockcenter.png", "/images/Magento/sleep.png", "/images/Magento/star.png", "/images/Magento/vanel.png"] },
    { id: 8, language: "NationBuilder", images: ["/images/NationBuilder/amandla-1.png","/images/NationBuilder/coulpa.png","/images/NationBuilder/dan.png","/images/NationBuilder/democra.png","/images/NationBuilder/democrac.png","/images/NationBuilder/fix.png","/images/NationBuilder/giving.png","/images/NationBuilder/grati.png","/images/NationBuilder/hope.png","/images/NationBuilder/labor.png","/images/NationBuilder/social.png"] },
    { id: 9, language: "Photoshop", images: ["/images/Photoshop/bapuji-1.png","/images/Photoshop/eclinics.png","/images/Photoshop/handy-app-1.png","/images/Photoshop/qr-code-auth.png","/images/Photoshop/qr-scanner-1.png","/images/Photoshop/radadiya-1.png"] },
    { id: 10, language: "Shopify", images: ["/images/Shopify/aurus.png","/images/Shopify/jhh.png","/images/Shopify/jill.png","/images/Shopify/kya.png","/images/Shopify/lil.png","/images/Shopify/orabel-2.png","/images/Shopify/tildas.png","/images/Shopify/zoey-1.png"] },
    { id: 11, language: "WooCommerce", images: ["/images/WooCommerce/alhine.png","/images/WooCommerce/bme.png","/images/WooCommerce/dafine.png","/images/WooCommerce/ezy.png","/images/WooCommerce/urban.png","/images/WooCommerce/white.png"] },
    { id: 12, language: "Wordpress", images: ["/images/Wordpress/american.png","/images/Wordpress/apa.png","/images/Wordpress/bapuji-2.png","/images/Wordpress/beauty.png","/images/Wordpress/cardiology.png","/images/Wordpress/community-1.png","/images/Wordpress/culinery.png","/images/Wordpress/dcrcc-1.png","/images/Wordpress/discovery-sf-1.png","/images/Wordpress/growing.png","/images/Wordpress/gsg-1.png","/images/Wordpress/handy-app.png","/images/Wordpress/hazm-1.png","/images/Wordpress/luxury.png","/images/Wordpress/pierr.png","/images/Wordpress/preservation-1.png","/images/Wordpress/rancho-1.png","/images/Wordpress/rkimagine.png","/images/Wordpress/sdapa-1.png","/images/Wordpress/sf-1.png","/images/Wordpress/sol.png","/images/Wordpress/tsm.png","/images/Wordpress/usgm-3.png"] }
  ];

  const categories = Array.from(new Set(data.map((p) => p.language))).map((lang) => ({
    language: lang,
    projects: data.filter((p) => p.language === lang),
  }));

  return (
    <div className="bg-[#05030D] text-white py-16 space-y-32 relative overflow-hidden">
      {categories.map((cat, idx) => (
        <CategoryScroller key={idx} category={cat} />
      ))}
    </div>
  );
}

/* ---------------------- CATEGORY SCROLLER ---------------------- */
function CategoryScroller({ category }: { category: { language: string; projects: Project[] } }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !rowRef.current) return;

    const row = rowRef.current;
    const totalWidth = row.scrollWidth - window.innerWidth;

    if (totalWidth > 0) {
      gsap.to(row, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=" + totalWidth,
          scrub: 1.2,
          pin: true,
        },
      });
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen flex flex-col gap-6">

      <h2 className="text-4xl md:text-5xl font-extrabold px-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
        {category.language}
      </h2>

      <div className="h-full flex items-center overflow-hidden">
        <div ref={rowRef} className="flex gap-5 px-10 will-change-transform">
          {category.projects.flatMap((project) =>
            project.images.map((img, i) => (
              <ThreeCardImage key={project.id + "-" + i} language={project.language} src={img} index={i} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

//* ---------------------- SINGLE CARD — AUTO WIDTH WITH GRID EFFECT ---------------------- */
function ThreeCardImage({ src, language, index }: { src: string; language: string; index: number }) {
  const imgRef = useRef<HTMLDivElement>(null);

  // Array of gradient backgrounds to cycle through
  const gradients = [
    "from-purple-700/40 to-cyan-700/40",
    "from-pink-800/40 to-yellow-800/40",
    "from-indigo-800/40 to-green-800/40",
    "from-red-800/40 to-orange-800/40",
    "from-blue-900/40 to-purple-900/40",
  ];
  const gradient = gradients[index % gradients.length];

  return (
    <div
      className="group relative flex-shrink-0 min-w-[300px] sm:min-w-[350px] md:min-w-[400px] h-[80vh] rounded-xl cursor-pointer"
      onMouseEnter={() => gsap.to(imgRef.current, { scale: 1.05, duration: 0.4 })}
      onMouseLeave={() => gsap.to(imgRef.current, { scale: 1, duration: 0.4 })}
    >
      {/* Dark Grid / Gradient Background */}
      <div className={`absolute -inset-2 rounded-xl blur-xl opacity-70 bg-gradient-to-br ${gradient}`}></div>

      {/* Card */}
      <div className="relative w-[50vw] h-[80vh] overflow-hidden bg-white/5 border border-white/20 shadow-lg rounded-xl">
        <div ref={imgRef} className="w-full h-full relative">
          <Image src={src} alt={language} fill className="object-cover w-full h-full" />

          <span className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium border border-white/10">
            {language}
          </span>
        </div>
      </div>
    </div>
  );
}
