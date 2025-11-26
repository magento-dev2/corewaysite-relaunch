"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useState, useRef } from "react";
import { gsap } from "gsap";

interface Project {
    id: number;
    title: string;
    category: string;
    categories: string[];
    description: string;
    image: string;
    technologies: string[];
    gradient: string;
    metrics: { value: string; label: string }[];
    liveUrl?: string;
}

interface PortfolioCardProps {
    project: Project;
    index: number;
    onClick: () => void;
}

export default function PortfolioCard({ project, index, onClick }: PortfolioCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current || window.innerWidth < 768) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        gsap.to(cardRef.current, {
            rotationY: x * 10,
            rotationX: -y * 10,
            transformPerspective: 1000,
            ease: "power2.out",
            duration: 0.3,
        });
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;

        gsap.to(cardRef.current, {
            rotationY: 0,
            rotationX: 0,
            ease: "power2.out",
            duration: 0.5,
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                handleMouseLeave();
            }}
            onMouseMove={handleMouseMove}
            className="relative group cursor-pointer"
            onClick={onClick}
        >
            {/* Glow Effect */}
            <div
                className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500 rounded-3xl`}
            />

            {/* Card */}
            <div
                ref={cardRef}
                className="relative h-full min-h-[500px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden group-hover:border-white/20 transition-all duration-500"
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        animate={{ scale: isHovered ? 1.1 : 1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                        <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium">
                            {project.category}
                        </span>
                    </div>

                    {/* External Link Icon */}
                    {project.liveUrl && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
                            className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center"
                        >
                            <ExternalLink className="w-5 h-5 text-white" />
                        </motion.div>
                    )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed">
                        {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-gray-400 text-xs font-medium"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > 4 && (
                            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-gray-400 text-xs font-medium">
                                +{project.technologies.length - 4}
                            </span>
                        )}
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                        {project.metrics.slice(0, 2).map((metric, i) => (
                            <div key={i}>
                                <p
                                    className={`text-xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                                >
                                    {metric.value}
                                </p>
                                <p className="text-gray-400 text-xs">{metric.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* View Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                        transition={{ duration: 0.3 }}
                        className="pt-2"
                    >
                        <button className="group/btn inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors">
                            <span>View Details</span>
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
