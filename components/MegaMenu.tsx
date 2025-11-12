"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  ShoppingCart,
  Rocket,
  Brain,
  Wifi,
  Cloud,
  Zap,
  Lightbulb,
  Plug,
  RefreshCw,
  Code,
  Shield,
  Server,
  Code2,
  Box,
  Database,
  HardDrive,
  Radio,
  ShieldCheck,
} from 'lucide-react';

interface MegaMenuItem {
  label: string;
  href: string;
  icon?: string;
}

interface MegaMenuColumn {
  title: string;
  items: MegaMenuItem[];
}

interface MegaMenuProps {
  columns: MegaMenuColumn[];
  isOpen: boolean;
  menuLabel?: string;
}

const iconMap: Record<string, any> = {
  'shopping-cart': ShoppingCart,
  rocket: Rocket,
  brain: Brain,
  wifi: Wifi,
  cloud: Cloud,
  zap: Zap,
  lightbulb: Lightbulb,
  plug: Plug,
  'refresh-cw': RefreshCw,
  code: Code,
  shield: Shield,
  server: Server,
  'code-2': Code2,
  box: Box,
  database: Database,
  'hard-drive': HardDrive,
  radio: Radio,
  'shield-check': ShieldCheck,
};

export default function MegaMenu({ columns, isOpen, menuLabel }: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-16 left-0 right-0 w-full bg-[#1a1a1a]/98 backdrop-blur-xl border-b border-white/5 shadow-2xl z-40 animate-slideDown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-start gap-12">
          {menuLabel && (
            <div className="flex-shrink-0">
              <Link
                href="#"
                className="group flex items-center space-x-2 text-white hover:text-purple-400 transition-colors"
              >
                <span className="text-base font-medium">All {menuLabel}</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}

          <div className="flex-1 border-l border-white/10 pl-12">
            <div className={`grid gap-x-12 gap-y-8 ${columns.length === 4 ? 'grid-cols-4' : columns.length === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
              {columns.map((column, index) => (
                <div key={index}>
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-5">
                    {column.title}
                  </h3>
                  <ul className="space-y-4">
                    {column.items.map((item, itemIndex) => {
                      const Icon = item.icon ? iconMap[item.icon] : null;
                      return (
                        <li key={itemIndex}>
                          <Link
                            href={item.href}
                            className="group flex items-start space-x-3 transition-all"
                          >
                            {Icon && (
                              <div className="mt-0.5 flex-shrink-0">
                                <Icon
                                  size={16}
                                  className="text-gray-500 group-hover:text-purple-400 transition-colors"
                                />
                              </div>
                            )}
                            <span className="text-sm text-gray-300 group-hover:text-white transition-colors leading-relaxed">
                              {item.label}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

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
