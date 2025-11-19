import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    return [
      // ======== STATIC PAGE REDIRECTS ========
      {
        source: "/company/about-us.html",
        destination: "/about/company-overview",
        permanent: true,
      },
      {
        source: "/case-studies.html",
        destination: "/portfolio/case-studies",
        permanent: true,
      },
      {
        source: "/portfolio.html",
        destination: "/portfolio/projects",
        permanent: true,
      },
      {
        source: "/contact-us.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/career.html",
        destination: "/careers",
        permanent: true,
      },
      {
        source: "/blog.html",
        destination: "/blog",
        permanent: true,
      },

      // ======== BLOG DETAILS (slug based) ========
      {
        source: "/:slug*.html",
        destination: "/blog/:slug*",
        permanent: true,
      },

      // ======== CATEGORY REDIRECTS ========
      {
        source: "/category/:category*",
        destination: "/blog/category/:category*",
        permanent: true,
      },

      // ======== BLOG PAGINATION ========
      {
        source: "/blog.html/page/:page",
        destination: "/blog?page=:page",
        permanent: true,
      },

      // ======== CASE STUDY REDIRECTS ========
      {
        source: "/case-study/:slug*",
        destination: "/portfolio/case-studies/:slug*",
        permanent: true,
      },

      // ======== PORTFOLIO QUERY REDIRECTS ========
      {
        source: "/portfolio.html",
        has: [{ type: "query", key: "cat" }],
        destination: "/portfolio/projects",
        permanent: true,
      },

      // ======== FALLBACK: REMOVE .HTML ========
      {
        source: "/:path*.html",
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
