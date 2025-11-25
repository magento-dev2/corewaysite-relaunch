"use client";

import { Github, Twitter, Linkedin, Youtube, X, Facebook } from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
  Product: [
    { name: "Features", url: "/features" },
    { name: "Integrations", url: "/integrations" },
    { name: "Pricing", url: "/pricing" },
    { name: "Changelog", url: "/changelog" },
    { name: "Security", url: "/security" },
  ],
  Resources: [
    { name: "Documentation", url: "/documentation" },
    { name: "API Reference", url: "/api-reference" },
    { name: "Tutorials", url: "/tutorials" },
    
   
  ],
  Company: [
    { name: "About", url: "/about" },
    { name: "Careers", url: "/careers" },
    { name: "Contact", url: "/contact" },
    { name: "Blog", url: "/blog" },

  ],
  Legal: [
    { name: "Privacy Policy", url: "/privacy-policy" },
    { name: "Terms of Service", url: "/terms-of-service" },
    { name: "Cookie Policy", url: "/refund-policy" },
    { name: "GDPR", url: "/gdpr-compliance" },
  ],
};


export default function Footer() {
  return (
    <footer className="bg-[#0E0918] border-t border-white/10 ">
      <div className="max-w-1440 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              {/* <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                C
              </div>
              <span className="text-white font-bold text-xl">Coreway</span> */}
              <Link href="/">
                <img src="/assets/logo/logo.png" className=' h-8 cursor-pointer' />
                <p className='text-3xl font-bold text-white'>SOLUTION</p>
                </Link>

            </div>
            <p className="text-gray-400 text-sm mb-6">
              Automate your workflows without limits
            </p>
            <div className="flex space-x-4">
              {/* X (Twitter new logo) */}
              <a href="https://twitter.com/corewaysolution" className="text-gray-400 hover:text-white transition-colors">
                <X size={20} />
              </a>

              {/* Facebook */}
              <a href="https://www.facebook.com/corewaysolution" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/coreway-solution" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>

              {/* Behance */}
              <a href="https://www.behance.net/corewaysolution" className="text-gray-400 hover:text-white transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7.5 11.5a2.5 2.5 0 0 0 0-5H2v11h6a3 3 0 0 0 0-6zm-3.5-3h3a1.5 1.5 0 0 1 0 3h-3zm3.5 7h-3v-3h3a1.5 1.5 0 0 1 0 3zm13-4.5h-4a2 2 0 0 1 4 0zm-6 1a3 3 0 0 0 3 3h2a3 3 0 1 1-3-4h2.5a4.5 4.5 0 1 0 0 9h-2.5a4.5 4.5 0 0 1-4.5-4.5zm.5-4h5v-1.5h-5z" />
                </svg>
              </a>
            </div>

          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map(({ name, url }) => (
                  <li key={name}>
                    <a
                      href={url}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Coreway Solution. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Status
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Support
            </a>
            <a href="/sitemap" className="text-gray-400 hover:text-white transition-colors text-sm">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
