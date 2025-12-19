"use client";

import { motion } from "framer-motion";
import { Camera, ShoppingBag, Briefcase, Building2, Heart, Newspaper } from "lucide-react";

const useCases = [
  {
    icon: <Camera className="w-8 h-8" />,
    industry: "Photography Studios",
    title: "Wedding & Event Photography",
    description: "Automatically organize thousands of photos from shoots by date, location, and subject. Tag faces, group similar shots, and create client-ready galleries in minutes.",
    results: ["90% faster sorting", "Zero missed photos", "Happy clients"],
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    industry: "E-commerce",
    title: "Product Catalogs",
    description: "Categorize product images by SKU, category, color, and angle. Detect duplicates, ensure quality standards, and maintain consistent naming across thousands of items.",
    results: ["10x faster uploads", "Consistent quality", "Better SEO"],
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    industry: "Marketing Agencies",
    title: "Brand Asset Management",
    description: "Keep client assets organized by campaign, brand, format, and usage rights. Smart tagging makes finding the perfect image instant, even with 100K+ files.",
    results: ["5min to find assets", "Version control", "Rights tracking"],
    gradient: "from-purple-600 to-violet-500",
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    industry: "Real Estate",
    title: "Property Listings",
    description: "Organize property photos by address, room type, and listing status. Automatically create virtual tour sequences and remove outdated or sold property images.",
    results: ["Faster listings", "Better showcases", "Auto-updates"],
    gradient: "from-violet-600 to-purple-500",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    industry: "Healthcare",
    title: "Medical Imaging",
    description: "Securely organize patient scans, X-rays, and diagnostic images with HIPAA compliance. Categorize by patient ID, date, procedure, and body part.",
    results: ["HIPAA compliant", "Instant retrieval", "Audit trails"],
    gradient: "from-purple-500 to-violet-700",
  },
  {
    icon: <Newspaper className="w-8 h-8" />,
    industry: "Media & Publishing",
    title: "News Archives",
    description: "Manage vast photo archives with intelligent tagging by event, person, location, and date. Facial recognition groups photos of the same person across years.",
    results: ["Archive 1M+ photos", "Fast search", "Face grouping"],
    gradient: "from-violet-500 to-purple-700",
  },
];

export default function ImageReorgUseCases() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0E0918] to-[#0A0F1E] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold mb-4">
            Use Cases
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Built for Every Industry
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how different industries use our tool to solve their unique image management challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:border-purple-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-violet-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${useCase.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <div className="text-white">{useCase.icon}</div>
                  </div>

                  <div className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-xs font-semibold mb-3">
                    {useCase.industry}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {useCase.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed text-sm">{useCase.description}</p>

                  <div className="space-y-2 pt-4 border-t border-white/10">
                    <div className="text-sm font-semibold text-purple-400 mb-2">Key Results:</div>
                    {useCase.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span className="text-sm text-gray-400">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-purple-900/30 to-violet-900/30 border border-purple-500/30 rounded-2xl backdrop-blur-sm">
            <p className="text-xl text-white font-semibold">Don't see your industry?</p>
            <p className="text-gray-300">Our tool is highly customizable for any image management need</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
            >
              Contact Us for Custom Solutions
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
