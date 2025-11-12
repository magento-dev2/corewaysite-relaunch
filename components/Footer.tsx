"use client";

import { Github, Twitter, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
  Product: ['Features', 'Integrations', 'Pricing', 'Changelog', 'Security'],
  Resources: ['Documentation', 'API Reference', 'Tutorials', 'Blog', 'Community'],
  Company: ['About', 'Careers', 'Partners', 'Contact', 'Press Kit'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
};

export default function Footer() {
  return (
    <footer className="bg-[#0E0918] border-t border-white/10">
      <div className="max-w-1440 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              {/* <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                C
              </div>
              <span className="text-white font-bold text-xl">Coreway</span> */}
              <Link href="/">
                <img src="/assets/logo/logo.png" className=' h-8 cursor-pointer' /></Link>

            </div>
            <p className="text-gray-400 text-sm mb-6">
              Automate your workflows without limits
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
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
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
