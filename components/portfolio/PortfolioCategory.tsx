"use client";

import React, { useRef } from "react";
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

  const categories = Array.from(
    new Set(data.map((p) => p.language))
  ).map((lang) => ({
    language: lang,
    projects: data.filter((p) => p.language === lang),
  }));

  return (
    <div className="bg-[#0E0918] text-white py-16 space-y-32">
      {categories.map((cat, idx) => (
        <CategoryScroller key={idx} category={cat} />
      ))}
    </div>
  );
}

/*  CATEGORY SCROLLER */
function CategoryScroller({ category }: { category: { language: string; projects: Project[] } }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!containerRef.current || !rowRef.current) return;

    const totalImages = category.projects.reduce((sum, p) => sum + p.images.length, 0);

    if (totalImages > 2) {
      const row = rowRef.current;
      const container = containerRef.current;

      const totalWidth = row.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollLength = totalWidth - viewportWidth;

      gsap.to(row, {
        x: -scrollLength,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
        },
      });

      const handleResize = () => ScrollTrigger.refresh();
      window.addEventListener("resize", handleResize);

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [category.projects]);

  return (
    <section ref={containerRef} className="relative h-[800px] flex flex-col justify-center gap-5">
      <h2 className="text-4xl md:text-5xl font-bold px-16">{category.language}</h2>
      <div className=" h-[420px] flex-1 flex items-center overflow-hidden">
        <div ref={rowRef} className="flex gap-10 px-16 will-change-transform">
          {category.projects.flatMap((project) =>
            project.images.map((img, i) => (
              <PortfolioCard key={project.id + "-" + i} language={project.language} src={img} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}


/*  CARD COMPONENT */
function PortfolioCard({ src, language }: { src: string; language: string }) {
  const imgRef = useRef<HTMLDivElement>(null);

  const onHover = () => {
    if (!imgRef.current) return;
    gsap.to(imgRef.current, { scale: 1.1, transformOrigin: "center center", duration: 0.5, ease: "power2.out" });
  };

  const onLeave = () => {
    if (!imgRef.current) return;
    gsap.to(imgRef.current, { scale: 1, transformOrigin: "center center", duration: 0.5, ease: "power2.out" });
  };

  return (
    <div
      className="group relative flex-shrink-0  w-[593px]  h-[420px] cursor-pointer"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Glow effect */}
      <div
        className="absolute -inset-3 rounded-3xl blur-2xl opacity-0 
          bg-gradient-to-r from-purple-500/30 to-cyan-500/30 
          group-hover:opacity-70 transition"
      />

      {/* Card container */}
      <div className="relative w-full h-full rounded-3xl overflow-hidden bg-transparent border border-white/40">
        {/* Image wrapper */}
        <div ref={imgRef} className="w-full h-full relative">
          <Image
            src={src}
            alt={language}
            fill
            quality={100}
            className="object-cover w-full h-full"
            style={{ imageRendering: "auto" }}
          />

          {/* Language label button */}
          <span className="absolute bottom-4 left-10 z-10 bg-white/5 border border-white/10 text-black px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            {language}
          </span>
        </div>
      </div>
    </div>
  );
}
