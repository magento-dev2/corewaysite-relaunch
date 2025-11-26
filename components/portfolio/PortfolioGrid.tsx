"use client";

import { AnimatePresence, motion } from "framer-motion";
import PortfolioCard from "./PortfolioCard";

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

interface PortfolioGridProps {
    projects: Project[];
    onProjectClick: (project: Project) => void;
}

export default function PortfolioGrid({ projects, onProjectClick }: PortfolioGridProps) {
    return (
        <section className="relative py-16 bg-gradient-to-b from-[#1a0f2e] to-[#0E0918]">
            <div className="max-w-7xl mx-auto px-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={projects.map(p => p.id).join('-')}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {projects.map((project, index) => (
                            <PortfolioCard
                                key={project.id}
                                project={project}
                                index={index}
                                onClick={() => onProjectClick(project)}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Empty State */}
                {projects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-20"
                    >
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-2xl font-bold text-white mb-2">No Projects Found</h3>
                        <p className="text-gray-400">Try selecting a different category</p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
