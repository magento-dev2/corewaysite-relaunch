"use client";

import CategoryCard from "./CategoryCard";

interface GridItem {
    title: string;
    description: string;
    href: string;
    icon?: string;
    gradient?: string;
}

interface CategoryGridProps {
    items: GridItem[];
    columns?: 2 | 3 | 4;
    title?: string;
    description?: string;
}

export default function CategoryGrid({
    items,
    columns = 3,
    title,
    description,
}: CategoryGridProps) {
    const gridCols = {
        2: "md:grid-cols-2",
        3: "md:grid-cols-2 lg:grid-cols-3",
        4: "md:grid-cols-2 lg:grid-cols-4",
    };

    return (
        <section className="relative py-24 bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                {(title || description) && (
                    <div className="text-center mb-16">
                        {title && (
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                {title}
                            </h2>
                        )}
                        {description && (
                            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                                {description}
                            </p>
                        )}
                    </div>
                )}

                {/* Grid */}
                <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
                    {items.map((item, index) => (
                        <CategoryCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            href={item.href}
                            icon={item.icon}
                            gradient={item.gradient}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
