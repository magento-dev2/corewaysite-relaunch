"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, ArrowRight } from "lucide-react";
import { useEffect } from "react";

interface Project {
    id: number;
    title: string;
    category: string;
    categories: string[];
    description: string;
    longDescription: string;
    image: string;
    images: string[];
    technologies: string[];
    gradient: string;
    metrics: { value: string; label: string }[];
    liveUrl?: string;
    githubUrl?: string;
}

interface PortfolioModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function PortfolioModal({ project, isOpen, onClose }: PortfolioModalProps) {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 overflow-y-auto">
                        <div className="min-h-screen px-4 flex items-center justify-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ type: "spring", duration: 0.5 }}
                                className="relative w-full max-w-5xl bg-gradient-to-br from-[#1a0f2e] to-[#0E0918] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={onClose}
                                    className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group"
                                >
                                    <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-300" />
                                </button>

                                {/* Hero Image */}
                                <div className="relative h-80 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E0918] via-[#0E0918]/50 to-transparent" />

                                    {/* Category Badge */}
                                    <div className="absolute top-6 left-6">
                                        <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 md:p-12 space-y-8">
                                    {/* Title & Description */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <h2 className="text-4xl font-bold text-white mb-4">{project.title}</h2>
                                        <p className="text-gray-300 text-lg leading-relaxed">
                                            {project.longDescription}
                                        </p>
                                    </motion.div>

                                    {/* Metrics Grid */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="grid grid-cols-2 md:grid-cols-4 gap-6"
                                    >
                                        {project.metrics.map((metric, index) => (
                                            <div
                                                key={index}
                                                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                                            >
                                                <p
                                                    className={`text-3xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-2`}
                                                >
                                                    {metric.value}
                                                </p>
                                                <p className="text-gray-400 text-sm">{metric.label}</p>
                                            </div>
                                        ))}
                                    </motion.div>

                                    {/* Technologies */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
                                        <div className="flex flex-wrap gap-3">
                                            {project.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 border border-white/10 rounded-xl text-white font-medium hover:border-white/20 transition-all duration-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* Action Buttons */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="flex flex-wrap gap-4 pt-4"
                                    >
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                                            >
                                                <span>View Live Project</span>
                                                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </a>
                                        )}

                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
                                            >
                                                <Github className="w-5 h-5" />
                                                <span>View Code</span>
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </a>
                                        )}
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
