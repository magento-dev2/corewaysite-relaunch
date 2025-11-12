"use client";

import Link from 'next/link';

interface DropdownMenuItem {
  label: string;
  href: string;
}

interface DropdownMenuProps {
  items: DropdownMenuItem[];
  isOpen: boolean;
  onClose?: () => void; 
}

export default function DropdownMenu({ items, isOpen, onClose }: DropdownMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 mt-2 bg-[#1a1a1a]/98 backdrop-blur-xl border border-white/5 rounded-lg shadow-2xl min-w-[280px] py-2 z-50 animate-slideDown">
      <ul className="space-y-1">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
               onClick={onClose} 
              className="block px-5 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
          background: black;
        }
      `}</style>
    </div>
  );
}
