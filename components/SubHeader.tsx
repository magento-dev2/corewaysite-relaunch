"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SubHeaderProps {
    title: string;
    items: {
        label: string;
        sectionId: string;
    }[];
}

export default function SubHeader({ title, items }: SubHeaderProps) {
    const [activeSection, setActiveSection] = useState<string>("");
    const [isSticky, setIsSticky] = useState(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Navbar visibility logic
            if (currentScrollY < 10) {
                setIsNavbarVisible(true);
            } else if (currentScrollY > lastScrollY) {
                setIsNavbarVisible(false); // Scrolling down
            } else {
                setIsNavbarVisible(true); // Scrolling up
            }

            // Sticky state
            setIsSticky(currentScrollY > 100);

            // Determine active section
            const sections = items.map((item) => document.getElementById(item.sectionId));
            // Use a consistent offset for active section detection
            const offset = 200; // Account for main header + subheader
            const scrollPosition = window.scrollY + offset;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(items[i].sectionId);
                    break;
                }
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [items, lastScrollY, isNavbarVisible]);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            // Increased offset to account for main header + subheader
            const headerOffset = 160;
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <div
            className={cn(
                "w-full z-40 transition-all duration-300 border-b border-white/10 bg-[#0E0918]/80 backdrop-blur-md fixed left-0 right-0 top-[73px]",
                // isSticky ? "fixed left-0 right-0 shadow-lg shadow-purple-900/10" : "relative",
                // isSticky && isNavbarVisible ? "top-[73px]" : "",
                // isSticky && !isNavbarVisible ? "top-0" : ""
            )}
        >
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-4">
                    {/* Left Side: Title */}
                    <div className="hidden md:block">
                        <h2 className="text-lg font-semibold text-white tracking-wide">
                            {title}
                        </h2>
                    </div>

                    {/* Right Side: Navigation Items */}
                    <div className="flex items-center space-x-8 overflow-x-auto no-scrollbar w-full md:w-auto">
                        {items.map((item) => (
                            <button
                                key={item.sectionId}
                                onClick={() => scrollToSection(item.sectionId)}
                                className={cn(
                                    "whitespace-nowrap cursor-pointer text-sm font-medium transition-colors relative pb-1",
                                    activeSection === item.sectionId
                                        ? "text-purple-400"
                                        : "text-gray-400 hover:text-white"
                                )}
                            >
                                {item.label}
                                {activeSection === item.sectionId && (
                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500 rounded-full" />
                                )}
           
                            </button>
                        ))}
      {/* <a
  href="/contact"
  className="group whitespace-nowrap cursor-pointer text-sm font-medium transition-colors relative pb-1 text-gray-400 hover:text-white"
>
  Contact
  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
</a> */}

                    </div>
                </div>
            </div>
        </div>
    );
}
