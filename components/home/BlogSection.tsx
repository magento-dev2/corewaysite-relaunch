"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

// Sample data — replace with your API data if needed
const posts = [
  {
    id: 1,
    category: "AI & Machine Learning",
    title: "How AI is Transforming Business Process Automation",
    excerpt:
      "Discover how artificial intelligence is revolutionizing the way businesses automate their workflows and increase productivity.",
    author: "Sarah Chen",
    date: "Nov 10, 2025",
    readTime: "5 min read",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600",
    featured: true,
    slug: "how-to-perform-a-comprehensive-ecommerce-audit-performance-code-technical-and-seo-audit-steps",
  },
  {
    id: 2,
    category: "Cloud",
    title: "AWS vs Azure: Choosing the Right Cloud Platform",
    excerpt: "A short guide to pick the cloud that fits your product and team.",
    author: "Mike Johnson",
    date: "Nov 8, 2025",
    readTime: "7 min read",
    image:
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1600",
      slug: "aws-vs-azure-choosing-the-right-cloud-platform",
  },
  {
    id: 3,
    category: "IoT",
    title: "Building Scalable IoT Solutions for Manufacturing",
    excerpt: "Best practices for reliable, large-scale IoT deployments.",
    author: "Emma Williams",
    date: "Nov 5, 2025",
    readTime: "6 min read",
    image:
      "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1600",
      slug: "building-scalable-iot-solutions-for-manufacturing",
  },
  {
    id: 4,
    category: "E-commerce",
    title: "The Future of Digital Commerce in 2025",
    excerpt: "Trends and technologies shaping online shopping experiences.",
    author: "David Park",
    date: "Nov 3, 2025",
    readTime: "4 min read",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1600",
      slug: "the-future-of-digital-commerce-in-2025",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28, rotateX: 6 },
  show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] } },
  hover: { scale: 1.02, boxShadow: "0px 30px 60px rgba(2,6,23,0.6)" },
};

const featuredVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

export default function BlogSectionAnimated() {
  const featured = posts.find((p) => p.featured) as typeof posts[0] | undefined;
  const others = posts.filter((p) => !p.featured);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#07040a] via-[#0d0714] to-[#120722] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-1 bg-white/6 rounded-full text-sm text-slate-200 border border-white/8 mb-4">Latest Insights</div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">Insights & Stories</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">Cutting-edge takes, practical tutorials, and product thinking from our team.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Featured */}
          {featured && (
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={featuredVariants}
              className="lg:col-span-7"
            >
              <Link href={`/blog/${featured.slug}`} className="group block">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/3 to-white/2 border border-white/6 shadow-xl">
                  <div className="relative h-80 md:h-96 lg:h-[420px]">
                    <motion.div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${featured.image})` }}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.9 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="p-8 md:p-12 lg:p-14">
                    <span className="inline-block px-3 py-1 bg-white/6 text-xs rounded-full border border-white/8 mb-4">{featured.category}</span>
                    <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-3 group-hover:text-slate-100">{featured.title}</h3>
                    <p className="text-slate-300 mb-6 max-w-2xl">{featured.excerpt}</p>

                    <div className="flex items-center gap-4 text-sm text-slate-300">
                      <div className="w-10 h-10 rounded-full bg-white/6 flex items-center justify-center font-semibold">{featured.author.split(" ").map(n => n[0]).join("")}</div>
                      <div>
                        <div className="text-sm font-medium">{featured.author}</div>
                        <div className="text-xs text-slate-400">{featured.date} • {featured.readTime}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Grid of cards */}
          <motion.div
            className="lg:col-span-5 grid grid-cols-1 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {others.map((post) => (
              <motion.article
                key={post.id}
                className="group"
                variants={cardVariants}
                whileHover="hover"
                initial="hidden"
                animate="show"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative rounded-xl overflow-hidden bg-white/3 border border-white/6 transition-transform will-change-transform">
                    <div className="flex gap-0 md:gap-4">
                      <div className="w-36 md:w-44 flex-shrink-0 relative">
                        <motion.div
                          className="h-full bg-cover bg-center"
                          style={{ backgroundImage: `url(${post.image})` }}
                          whileHover={{ scale: 1.06 }}
                          transition={{ duration: 0.7 }}
                        />
                      </div>

                      <div className="p-4 md:p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <span className="inline-block px-2 py-0.5 text-xs rounded-full bg-white/6 mb-2">{post.category}</span>
                          <h4 className="font-semibold text-lg leading-tight mb-2 group-hover:text-white">{post.title}</h4>
                          <p className="text-sm text-slate-300 line-clamp-3">{post.excerpt}</p>
                        </div>

                        <div className="flex items-center justify-between mt-3 text-xs text-slate-400">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/6 flex items-center justify-center font-medium">{post.author.split(" ").map(n => n[0]).join("")}</div>
                            <div>
                              <div className="text-sm text-slate-200">{post.author}</div>
                              <div className="text-xs text-slate-400">{post.date}</div>
                            </div>
                          </div>

                          <div className="text-xs text-slate-400">{post.readTime}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}

            <motion.div className="mt-2 text-center">
              <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/6 border border-white/8 text-sm font-semibold">
                View all articles
        </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
