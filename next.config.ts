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
      // {
      //   source: "/case-study/:slug*",
      //   destination: "/portfolio/case-studies/:slug*",
      //   permanent: true,
      // },

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






// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   async redirects() {
//     return [
//       // About pages
//       {
//         source: '/company/about-us.html',
//         destination: '/about',
//         permanent: true,
//       },

//       // Services - Web Development
//       {
//         source: '/services/web-development-india.html',
//         destination: '/technologies/laravel-php',
//         permanent: true,
//       },
//       {
//         source: '/offshore-development-services.html',
//         destination: '/dedicated-developers',
//         permanent: true,
//       },

//       // E-commerce Services
//       {
//         source: '/offshore-ecommerce-solutions.html',
//         destination: '/industries/ecommerce-stores',
//         permanent: true,
//       },
//       {
//         source: '/hire-magento-developer-team.html',
//         destination: '/industries/ecommerce-stores',
//         permanent: true,
//       },
//       {
//         source: '/hire-dedicated-shopify-developer-india.html',
//         destination: '/industries/ecommerce-stores',
//         permanent: true,
//       },
//       {
//         source: '/hire-woocommerce-team.html',
//         destination: '/industries/ecommerce-stores',
//         permanent: true,
//       },

//       // CMS Development
//       {
//         source: '/outsource-cms-web-development-india.html',
//         destination: '/solution/digital-commerce-transformation',
//         permanent: true,
//       },
//       {
//         source: '/wordpress-website-development-india.html',
//         destination: '/solution/digital-commerce-transformation',
//         permanent: true,
//       },

//       // Framework Development
//       {
//         source: '/framework-development.html',
//         destination: '/technologies/laravel-php',
//         permanent: true,
//       },
//       {
//         source: '/laravel-rapid-web-development-framework.html',
//         destination: '/technologies/laravel-php',
//         permanent: true,
//       },
//       {
//         source: '/offshore-codeigniter-web-development.html',
//         destination: '/technologies/laravel-php',
//         permanent: true,
//       },

//       // ERP Solutions
//       {
//         source: '/erp-solution.html',
//         destination: '/solution/business-workflow-automation',
//         permanent: true,
//       },
//       {
//         source: '/odoo-openerp.html',
//         destination: '/solution/business-workflow-automation',
//         permanent: true,
//       },

//       // Maintenance & Support
//       {
//         source: '/website-maintenance-and-support.html',
//         destination: '/solution/saas-infrastructure-devops',
//         permanent: true,
//       },

//       // Mobile App Development
//       {
//         source: '/mobile-application-development-india.html',
//         destination: '/solution/ai-powered-application-platforms',
//         permanent: true,
//       },
//       {
//         source: '/hire-ios-development-company-india.html',
//         destination: '/solution/ai-powered-application-platforms',
//         permanent: true,
//       },
//       {
//         source: '/hire-android-developer-india.html',
//         destination: '/solution/ai-powered-application-platforms',
//         permanent: true,
//       },
//       {
//         source: '/enterprise-mobility-services-india.html',
//         destination: '/solution/ai-powered-application-platforms',
//         permanent: true,
//       },

//       // Dedicated Team
//       {
//         source: '/dedicated-team.html',
//         destination: '/dedicated-developers',
//         permanent: true,
//       },

//       // Frontend Technologies
//       {
//         source: '/frontend-technologies.html',
//         destination: '/technologies/react',
//         permanent: true,
//       },
//       {
//         source: '/hire-angular-node-js-hire-developer-india',
//         destination: '/technologies/nodejs',
//         permanent: true,
//       },

//       // IoT Development
//       {
//         source: '/iot-app-development-company.html',
//         destination: '/solution/iot-application-development',
//         permanent: true,
//       },

//       // Cloud Services
//       {
//         source: '/amazon-cloud-services.html',
//         destination: '/solution/saas-infrastructure-devops',
//         permanent: true,
//       },

//       // Ready-to-use Applications
//       {
//         source: '/ready-to-use-applications.html',
//         destination: '/solution/ai-powered-application-platforms',
//         permanent: true,
//       },
//       {
//         source: '/openemr.html',
//         destination: '/industries/pharmaceuticals-healthcare',
//         permanent: true,
//       },

//       // Case Studies
//       {
//         source: '/case-studies.html',
//         destination: '/case-studies',
//         permanent: true,
//       },
//       {
//         source: '/case-study/geliyoo-search-engine-revolution-for-turkey.html',
//         destination: '/case-studies',
//         permanent: true,
//       },
//       {
//         source: '/case-study/pioneers-beauty-canada-orabel.html',
//         destination: '/case-studies',
//         permanent: true,
//       },
//       {
//         source: '/case-study/streamlining-candidate-verificaiton-process.html',
//         destination: '/case-studies',
//         permanent: true,
//       },

//       // Portfolio
//       {
//         source: '/portfolio.html',
//         destination: '/portfolio',
//         permanent: true,
//       },
//       {
//         source: '/portfolio.html/page/:page',
//         destination: '/portfolio',
//         permanent: true,
//       },

//       // Portfolio Categories
//       {
//         source: '/portfolio.html',
//         has: [
//           {
//             type: 'query',
//             key: 'cat',
//             value: '(?<cat>.*)',
//           },
//         ],
//         destination: '/portfolio',
//         permanent: true,
//       },

//       // Blog
//       {
//         source: '/blog.html',
//         destination: '/blog',
//         permanent: true,
//       },
//       {
//         source: '/blog.html/page/:page',
//         destination: '/blog',
//         permanent: true,
//       },

//       // Blog Categories
//       {
//         source: '/category/:category',
//         destination: '/blog',
//         permanent: true,
//       },
//       {
//         source: '/category/:category/page/:page',
//         destination: '/blog',
//         permanent: true,
//       },

//       // Blog Tags
//       {
//         source: '/tag/:tag',
//         destination: '/blog',
//         permanent: true,
//       },

//       // Blog Author
//       {
//         source: '/author/:author',
//         destination: '/blog',
//         permanent: true,
//       },
//       {
//         source: '/author/:author/page/:page',
//         destination: '/blog',
//         permanent: true,
//       },

//       // Individual Blog Posts - Map to blog list for now
//       // You may want to update these with actual blog post URLs if they exist
//       {
//         source: '/node-js-ecommerce-industries-will-dominate-forecast-period.html',
//         destination: '/blog',
//         permanent: true,
//       },
//       {
//         source: '/future-prospect-cross-platform-app-development-approach-budding-enterprise.html',
//         destination: '/blog',
//         permanent: true,
//       },
//       {
//         source: '/top-compelling-reasons-ecommerce-store-owner-invest-m-commerce-app.html',
//         destination: '/blog',
//         permanent: true,
//       },
//       {
//         source: '/e-commerce-market-moving-multi-channel-nowadays-boost-sales.html',
//         destination: '/blog',
//         permanent: true,
//       },
//       {
//         source: '/nationbuilder-development-agency.html',
//         destination: '/blog',
//         permanent: true,
//       },
//       {
//         source: '/an-overview-of-the-4-most-promising-content-management-systems.html',
//         destination: '/blog',
//         permanent: true,
//       },
//       {
//         source: '/10-points-for-responsive-web-development-with-php.html',
//         destination: '/blog',
//         permanent: true,
//       },
//       {
//         source: '/odoo-vs-magento-or-odoo-plus-magento.html',
//         destination: '/blog',
//         permanent: true,
//       },
//       {
//         source: '/nearshore-vs-offshore-software-website-development.html',
//         destination: '/blog',
//         permanent: true,
//       },
//       {
//         source: '/beware-ios-developed-non-professional-may-prove-riskier.html',
//         destination: '/blog',
//         permanent: true,
//       },
//       {
//         source: '/develop-mobile-app-tight-budget.html',
//         destination: '/blog',
//         permanent: true,
//       },
//       {
//         source: '/must-consider-find-right-wordpress-development-company-html.html',
//         destination: '/blog',
//         permanent: true,
//       },
//       {
//         source: '/shopify-brings-potential-apples-ar-quick-look-platform.html',
//         destination: '/blog',
//         permanent: true,
//       },
//       {
//         source: '/top-15-successful-mobile-app-ideas-you-should-try.html',
//         destination: '/blog',
//         permanent: true,
//       },
//       {
//         source: '/innovative-iot-technology-trends-mainstream-year-2019.html',
//         destination: '/blog',
//         permanent: true,
//       },
//       {
//         source: '/various-ways-cutting-edge-technology-disrupts-modern-ecommerce-industry.html',
//         destination: '/blog',
//         permanent: true,
//       },
//       {
//         source: '/8-key-challenges-future-internet-things.html',
//         destination: '/blog',
//         permanent: true,
//       },
//       {
//         source: '/ada-compliance-necessary-ecommerce-project.html',
//         destination: '/blog',
//         permanent: true,
//       },
//       {
//         source: '/9-tips-e-wallet-app-development-win-trust.html',
//         destination: '/blog',
//         permanent: true,
//       },
//       {
//         source: '/valid-reasons-cross-platform-app-development-nativescript-dominate-mobile-app-industry.html',
//         destination: '/blog',
//         permanent: true,
//       },
//       {
//         source: '/proven-ecommerce-growth-hacking-steps-beginners-startups.html',
//         destination: '/blog',
//         permanent: true,
//       },
//       {
//         source: '/magento-2-2-2-magento-2-3-reason-upgrade-magento-2-3.html',
//         destination: '/blog',
//         permanent: true,
//       },
//       {
//         source: '/top-magento-extensions-winning-customer-experience-2019.html',
//         destination: '/blog',
//         permanent: true,
//       },
//       {
//         source: '/secure-ecommerce-site-assure-safe-shopping-platform-online-shoppers.html',
//         destination: '/blog',
//         permanent: true,
//       },
//       {
//         source: '/iot-arvr-technologies-launch-will-cause-business-redefine-progress-future.html',
//         destination: '/blog',
//         permanent: true,
//       },
//       {
//         source: '/latest-ai-trends-will-improve-productivity-business-2019.html',
//         destination: '/blog',
//         permanent: true,
//       },
//       {
//         source: '/reality-technology-trends-take-2019-market-storm.html',
//         destination: '/blog',
//         permanent: true,
//       },
//       {
//         source: '/various-ways-influence-ecommerce-industry-blockchain-technology.html',
//         destination: '/blog',
//         permanent: true,
//       },
//       {
//         source: '/extended-reality-provided-endless-options-modern-industry-people.html',
//         destination: '/blog',
//         permanent: true,
//       },
//       {
//         source: '/mixed-reality-different-ar-vr.html',
//         destination: '/blog',
//         permanent: true,
//       },

//       // Contact & Request Quote
//       {
//         source: '/request-quote.html',
//         destination: '/contact',
//         permanent: true,
//       },
//       {
//         source: '/contact-us.html',
//         destination: '/contact',
//         permanent: true,
//       },

//       // Career
//       {
//         source: '/career.html',
//         destination: '/careers',
//         permanent: true,
//       },

//       // Policies
//       {
//         source: '/privacy-policy',
//         destination: '/privacy-policy',
//         permanent: true,
//       },
//       {
//         source: '/refund-policy.html',
//         destination: '/terms-of-service',
//         permanent: true,
//       },
//       {
//         source: '/claim-refund.html',
//         destination: '/terms-of-service',
//         permanent: true,
//       },

//       // Testimonials
//       {
//         source: '/testimonials.html',
//         destination: '/about',
//         permanent: true,
//       },

//       // Catch-all for any other .html pages
//       {
//         source: '/:path*.html',
//         destination: '/',
//         permanent: true,
//       },

//       // Handle UTM parameters and redirect to appropriate page
//       {
//         source: '/wordpress-website-development-india.html',
//         has: [
//           {
//             type: 'query',
//             key: 'utm_source',
//           },
//         ],
//         destination: '/solution/digital-commerce-transformation',
//         permanent: true,
//       },
//       {
//         source: '/contact-us.html',
//         has: [
//           {
//             type: 'query',
//             key: 'utm_source',
//           },
//         ],
//         destination: '/contact',
//         permanent: true,
//       },
//       {
//         source: '/request-quote.html',
//         has: [
//           {
//             type: 'query',
//             key: 'utm_source',
//           },
//         ],
//         destination: '/contact',
//         permanent: true,
//       },
//     ];
//   },
// };

// export default nextConfig;

