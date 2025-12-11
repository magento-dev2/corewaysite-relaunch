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
  {
    id: 1,
    language: "Wordpress",
    images: [
      "/images/Wordpress/american.png",
      "/images/Wordpress/apa.png",
      "/images/Wordpress/bapuji-2.png",
      "/images/Wordpress/beauty.png",
      "/images/Wordpress/cardiology.png",
      "/images/Wordpress/community-1.png",
      "/images/Wordpress/culinery.png",
      "/images/Wordpress/dcrcc-1.png",
      "/images/Wordpress/discovery-sf-1.png",
      "/images/Wordpress/growing.png",
      "/images/Wordpress/gsg-1.png",
      "/images/Wordpress/handy-app.png",
      "/images/Wordpress/hazm-1.png",
      "/images/Wordpress/luxury.png",
      "/images/Wordpress/pierr.png",
      "/images/Wordpress/preservation-1.png",
      "/images/Wordpress/rancho-1.png",
      "/images/Wordpress/rkimagine.png",
      "/images/Wordpress/sdapa-1.png",
      "/images/Wordpress/sf-1.png",
      "/images/Wordpress/sol.png",
      "/images/Wordpress/tsm.png",
      "/images/Wordpress/usgm-3.png"
    ]
  },
  {
    id: 2,
    language: "NationBuilder",
    images: [
      "/images/NationBuilder/amandla-1.png",
      "/images/NationBuilder/coulpa.png",
      "/images/NationBuilder/dan.png",
      "/images/NationBuilder/democra.png",
      "/images/NationBuilder/democrac.png",
      "/images/NationBuilder/fix.png",
      "/images/NationBuilder/giving.png",
      "/images/NationBuilder/grati.png",
      "/images/NationBuilder/hope.png",
      "/images/NationBuilder/labor.png",
      "/images/NationBuilder/social.png"
    ]
  },
  {
    id: 3,
    language: "Shopify",
    images: [
      "/images/Shopify/aurus.png",
      "/images/Shopify/jhh.png",
      "/images/Shopify/jill.png",
      "/images/Shopify/kya.png",
      "/images/Shopify/lil.png",
      "/images/Shopify/orabel-2.png",
      "/images/Shopify/tildas.png",
      "/images/Shopify/zoey-1.png"
    ]
  },
  {
    id: 4,
    language: "WooCommerce",
    images: [
      "/images/WooCommerce/alhine.png",
      "/images/WooCommerce/bme.png",
      "/images/WooCommerce/dafine.png",
      "/images/WooCommerce/ezy.png",
      "/images/WooCommerce/urban.png",
      "/images/WooCommerce/white.png"
    ]
  },
  {
    id: 5,
    language: "Android",
    images: [
      "/images/Android/bapuji-1.png",
      "/images/Android/eclinics.png",
      "/images/Android/handy-app-1.png",
      "/images/Android/qr-code-auth.png",
      "/images/Android/qr-scanner-1.png",
      "/images/Android/radadiya-1.png"
    ]
  },
  {
    id: 6,
    language: "Photoshop",
    images: [
      "/images/Photoshop/bapuji-1.png",
      "/images/Photoshop/eclinics.png",
      "/images/Photoshop/handy-app-1.png",
      "/images/Photoshop/qr-code-auth.png",
      "/images/Photoshop/qr-scanner-1.png",
      "/images/Photoshop/radadiya-1.png"
    ]
  },
  {
    id: 7,
    language: "Magento",
    images: [
      "/images/Magento/knir.png",
      "/images/Magento/lockcenter.png",
      "/images/Magento/sleep.png",
      "/images/Magento/star.png",
      "/images/Magento/vanel.png"
    ]
  },
  {
    id: 8,
    language: "codelgniter",
    images: [
      "/images/codelgniter/afl.png",
      "/images/codelgniter/compare.png",
      "/images/codelgniter/style.png",
      "/images/codelgniter/virtu.png"
    ]
  },
  {
    id: 9,
    language: "Laravel",
    images: [
      "/images/Laravel/delaware.png",
      "/images/Laravel/geliyoo-2.png",
      "/images/Laravel/motive.png",
      "/images/Laravel/neighbor.png"
    ]
  },
  {
    id: 10,
    language: "ios",
    images: [
      "/images/ios/handy-app-1.png",
      "/images/ios/qr-code-auth.png"
    ]
  },
  {
    id: 11,
    language: "Angular",
    images: [
      "/images/Angular/gratitude.png",
      "/images/Angular/tailor.png"
    ]
  },
  {
    id: 12,
    language: "Aws",
    images: [
      "/images/Aws/right.png"
    ]
  }
];
  const categories = Array.from(new Set(data.map((p) => p.language))).map((lang) => ({
    language: lang,
    projects: data.filter((p) => p.language === lang),
  }));

  return (
    <div className="bg-[#05030D] text-white py-20 space-y-40">
      {categories.map((cat, idx) => (
        <CategoryScroller key={idx} category={cat} />
      ))}
    </div>
  );
}

/* -------------------------------- CATEGORY SCROLLER ----------------------------- */
function CategoryScroller({ category }: { category: { language: string; projects: Project[] } }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  const visibleImages = category.projects.flatMap((p) => p.images);
  const itemCount = visibleImages.length;

  useEffect(() => {
    const container = containerRef.current;
    const row = rowRef.current;
    if (!container || !row) return;

    function initScroll() {
      let totalWidth = row!.scrollWidth - window.innerWidth;

      // 🔥 FIX FOR 1–2 IMAGES → artificially increase scroll space
      if (itemCount <= 2) {
        totalWidth = Math.max(totalWidth, 1200); // force enough scroll area
      }

      gsap.to(row, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    }

    // Wait for Next.js Image to render
    setTimeout(() => initScroll(), 300);

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [itemCount]);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      <h2 className="absolute top-20 left-10 z-20 text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
        {category.language}
      </h2>

      <div className="h-full flex items-center overflow-hidden">
        <div ref={rowRef} className="flex gap-10 px-20 will-change-transform">
          {visibleImages.map((img, index) => (
            <PortfolioCard
              key={index}
              src={img}
              title={category.language}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


/* ----------------------------- PORTFOLIO CARD ----------------------------- */
function PortfolioCard({
  src,
  title,
  index,
}: {
  src: string;
  title: string;
  index: number;
}) {
  return (
    <div className="relative w-[30vw] h-[60vh] rounded-3xl flex-shrink-0 cursor-pointer group">

      {/* Glow Hover */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-purple-500/30 to-cyan-500/30 blur-3xl opacity-0 group-hover:opacity-50 transition-all duration-500 scale-90 group-hover:scale-100" />

      <div className="relative h-full overflow-hidden rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl 
      group-hover:border-white/40 transition-all duration-500">

        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

        <div className="absolute bottom-10 left-10 space-y-4">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm">
            {title}
          </span>

          <h3 className="text-2xl md:text-3xl font-extrabold leading-tight">{title} Project</h3>

          <button className="text-purple-300 underline underline-offset-4 text-lg">
            Explore Project →
          </button>
        </div>

        <div className="absolute top-6 right-6 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-xl font-bold">
          {String(index + 1).padStart(2, "0")}
        </div>

      </div>
    </div>
  );
}
