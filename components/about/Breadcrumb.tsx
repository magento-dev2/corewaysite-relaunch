import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';


interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link
            href="/"
            className="flex items-center text-gray-400 hover:text-purple-500 transition-colors"
          >
            <Home size={16} className="mr-1" />
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <ChevronRight size={16} className="text-gray-600" />
            {item.href ? (
              <Link
                href={item.href}
                className="text-gray-400 hover:text-purple-500 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-300">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
