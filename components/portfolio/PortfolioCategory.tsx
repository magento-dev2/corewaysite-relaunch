"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
    <div className="bg-[#05030D] text-white py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 space-y-6">
        {categories.map((cat, idx) => (
          <CategorySection key={idx} category={cat} />
        ))}
      </div>
    </div>
  );
}

/* -------------------------------- CATEGORY SECTION ----------------------------- */
function CategorySection({ category }: { category: { language: string; projects: Project[] } }) {
  const [isOpen, setIsOpen] = useState(true);
  const visibleImages = category.projects.flatMap((p) => p.images);

  return (
    <section className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
      {/* Technology Title - Clickable Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer p-6 md:p-8 flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
      >
        <div className="flex items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {category.language}
          </h2>
          <span className="px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-gray-300">
            {visibleImages.length} {visibleImages.length === 1 ? 'Project' : 'Projects'}
          </span>
        </div>

        {/* Toggle Icon */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </motion.div>
      </motion.div>

      {/* Collapsible Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 md:p-8 pt-0 border-t border-white/10">
              {/* Grid - 3 Cards Per Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          </motion.div>
        )}
      </AnimatePresence>
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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative h-[400px] rounded-3xl cursor-pointer group"
    >
      {/* Glow Hover */}
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-purple-500/30 to-cyan-500/30 blur-2xl opacity-0 group-hover:opacity-50 transition-all duration-500" />

      <div className="relative h-full overflow-hidden rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl 
      group-hover:border-white/40 transition-all duration-500">

        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

        <div className="absolute bottom-6 left-6 space-y-3">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm">
            {title}
          </span>

          <h3 className="text-xl md:text-2xl font-extrabold leading-tight">{title} Project</h3>

          <button className="text-purple-300 underline underline-offset-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Explore Project →
          </button>
        </div>

        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-lg font-bold">
          {String(index + 1).padStart(2, "0")}
        </div>

      </div>
    </motion.div>
  );
}
