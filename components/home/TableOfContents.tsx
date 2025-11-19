"use client";

import { useEffect, useState } from "react";

interface TOCItem {
  title: string;
}

export default function TableOfContents({ tableOfContents }: { tableOfContents: TOCItem[] }) {
  const [active, setActive] = useState("");

  // find <h2> whose innerText matches
  const getHeadingElement = (title: string): HTMLElement | null => {
    const headings = Array.from(document.querySelectorAll("h2"));
    return headings.find(h => h.innerText.trim() === title.trim()) || null;
  };

  useEffect(() => {
    const onScroll = () => {
      let current = "";

      tableOfContents.forEach((item) => {
        const el = getHeadingElement(item.title);
        if (!el) return;

        const top = el.getBoundingClientRect().top;

        if (top <= 120) current = item.title;
      });

      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [tableOfContents]);

  const handleScroll = (title: string) => {
    const el = getHeadingElement(title);
    if (!el) return;

    const offset = 100;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <nav className="space-y-3">
      {tableOfContents.map((item) => (
        <button
          key={item.title}
          onClick={() => handleScroll(item.title)}
          className={`block text-left text-sm transition-colors cursor-pointer
            ${active === item.title ? "text-purple-600 font-semibold" : "text-gray-700 hover:text-purple-600"}`}
        >
          {item.title}
        </button>
      ))}
    </nav>
  );
}
