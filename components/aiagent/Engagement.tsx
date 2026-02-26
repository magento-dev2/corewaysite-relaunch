"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Calendar, Users, Briefcase, Plus, ArrowRight, LifeBuoy, Zap } from 'lucide-react';

interface EngagementItem {
    id: string;
    title: string;
    desc: string;
    link?: string;
}

interface EngagementProps {
    title: string;
    items: EngagementItem[];
}

const iconMap: Record<string, any> = {
    'dedicated-team': Users,
    'retainer': Calendar,
    'fixed-scope': Briefcase,
    'integration': Zap,
    'support': LifeBuoy,
};

export default function Engagement({ title, items }: EngagementProps) {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-24 bg-gradient-to-b from-[#1a1325] to-[#0E0918] relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Flexible engagement models designed to meet your business needs
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {items.map((item, index) => {
                        const Icon = iconMap[item.id] || Plus;
                        return (
                            <div
                                key={item.id}
                                className={`relative group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-700 hover:border-purple-500/50 hover:bg-white/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                                    } ${item.link ? 'cursor-pointer' : ''}`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                                onClick={() => item.link && router.push(item.link)}
                            >
                                <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Icon className="text-purple-400" size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    {item.desc}
                                </p>
                                {item.link && (
                                    <div className="flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
                                        <span>Learn alignment</span>
                                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
