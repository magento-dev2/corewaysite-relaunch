"use client";

import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import MegaMenu from './MegaMenu';
import DropdownMenu from './DropdownMenu';
import navigationData from '../data/navigationData.json';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';


const languages = [
  { "code": "en", "name": "English", "country": "us" },
  { "code": "fr", "name": "Français", "country": "fr" },
  { "code": "de", "name": "Deutsch", "country": "de" },
  { "code": "es", "name": "Español", "country": "es" }
]



export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpenMenus, setMobileOpenMenus] = useState<string[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const selectedLang = languages.find(lang => lang.code === language) || languages[0];

  const handleLangSelect = (lang: any) => {
    setLanguage(lang.code);
    setIsLangOpen(false);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);


  const handleMouseEnter = (menuId: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(menuId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };
  const handleCloseMenu = () => {
    setActiveMenu(null);

  };

  const toggleMobileMenu = (menuId: string) => {
    setMobileOpenMenus((prev) =>
      prev.includes(menuId) ? prev.filter((id) => id !== menuId) : [...prev, menuId]
    );
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0E0918]/95 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-1440 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/assets/logo/logo.png"
                alt="Coreway Solution Logo"
                width={214}
                height={40}
                priority
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>


          {/* <div className="hidden lg:flex items-center space-x-1">
            {navigationData.menuItems.map((item) => {
              if (item.type === 'link') {
                return (
                  <Link
                    key={item.id}
                    href={item.href || '#'}
                    className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5">
                    <span>{item.label}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${activeMenu === item.id ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {item.type === 'dropdown' && item.items && (
                    <DropdownMenu items={item.items} isOpen={activeMenu === item.id} />
                  )}

                  {item.type === 'mega' && item.columns && (
                    <MegaMenu
                      columns={item.columns}
                      isOpen={activeMenu === item.id}
                      menuLabel={item.label}
                    />
                  )}
                </div>
              );
            })}
          </div> */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationData.menuItems.map((item) => {
              const isDropdownOrMega = item.type === 'dropdown' || item.type === 'mega';

              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => isDropdownOrMega && handleMouseEnter(item.id)}
                  onMouseLeave={() => isDropdownOrMega && handleMouseLeave()}
                >
                  {/* Make label clickable */}
                  <Link
                    href={item.href || '#'}
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
                  >
                    <span>{item.label}</span>
                    {isDropdownOrMega && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${activeMenu === item.id ? 'rotate-180' : ''}`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.type === 'dropdown' && item.items && (
                    <DropdownMenu items={item.items} isOpen={activeMenu === item.id} onClose={handleCloseMenu} />
                  )}

                  {/* Mega Menu */}
                  {item.type === 'mega' && item.columns && (
                    <MegaMenu
                      columns={item.columns}
                      isOpen={activeMenu === item.id}
                      menuLabel={item.label}
                    />
                  )}
                </div>
              );
            })}
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            {/* 🌐 Language Selector */}
            <div ref={langRef} className="relative cursor-pointer">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 cursor-pointer text-gray-300 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-lg"
              >
                <Image
                  src={`https://flagcdn.com/w20/${selectedLang.country}.png`}
                  alt={selectedLang.name}
                  width={20}
                  height={14}

                />
                <span>{selectedLang.name}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transition-transform ${isLangOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-[#1a1325] border border-white/10 rounded-lg shadow-lg z-50 overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLangSelect(lang)}
                      className={`w-full flex items-center cursor-pointer space-x-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 transition-colors ${selectedLang.code === lang.code ? "text-white font-medium" : ""
                        }`}
                    >
                      <Image
                        src={`https://flagcdn.com/w20/${lang.country}.png`}
                        alt={lang.name}
                        width={20}
                        height={14}

                      />
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 💌 Contact Button */}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-violet-700 transition-all font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
            >
              Contact
            </Link>
          </div>







          {/* <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-violet-700 transition-all font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
            >
              Contact
            </Link>
          </div> */}

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-[#0E0918] border-t border-white/10 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-2">
            {navigationData.menuItems.map((item) => {
              if (item.type === 'link') {
                return (
                  <Link
                    key={item.id}
                    href={item.href || '#'}
                    className="block text-gray-300 hover:text-white transition-colors py-2.5 px-3 rounded-lg hover:bg-white/5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              }

              const isOpen = mobileOpenMenus.includes(item.id);

              return (
                <div key={item.id} className="space-y-2">
                  <button
                    onClick={() => toggleMobileMenu(item.id)}
                    className="w-full flex items-center justify-between text-gray-300 hover:text-white transition-colors py-2.5 px-3 rounded-lg hover:bg-white/5"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {isOpen && (
                    <div className="pl-4 space-y-1">
                      {item.type === 'dropdown' &&
                        item.items?.map((subItem, index) => (
                          <Link
                            key={index}
                            href={subItem.href}
                            className="block text-sm text-gray-400 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}

                      {item.type === 'mega' &&
                        item.columns?.map((column, colIndex) => (
                          <div key={colIndex} className="mb-4">
                            <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2 px-3">
                              {column.title}
                            </div>
                            {column.items.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subItem.href}
                                className="block text-sm text-gray-400 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-4 mt-4 border-t border-white/10">
              <Link
                href="/contact"
                className="block w-full bg-gradient-to-r from-purple-500 to-violet-600 text-white text-center px-6 py-3 rounded-lg hover:from-purple-600 hover:to-violet-700 transition-all font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
