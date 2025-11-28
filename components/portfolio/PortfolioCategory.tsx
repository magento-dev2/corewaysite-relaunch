"use client";

import { useState, useCallback } from "react";


// Example project data structure
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

// Example category data
const portfolioData: Record<string, Project[]> = {
    "NodeJS": [
        {
            id: 1,
            title: "NodeJS Project 1",
            category: "NodeJS",
            categories: ["NodeJS"],
            description: "Example NodeJS project description",
            image: "/assets/portfolio/afl.png",
            technologies: ["NodeJS", "Express", "MongoDB"],
            gradient: "from-purple-500 to-violet-600",
            metrics: [{ value: "90%", label: "Performance" }],
            liveUrl: "#",
        },
        {
            id: 2,
            title: "NodeJS Project 2",
            category: "NodeJS",
            categories: ["NodeJS"],
            description: "Another NodeJS project",
            image: "/assets/portfolio/alhinepng",
            technologies: ["NodeJS", "GraphQL"],
            gradient: "from-pink-500 to-red-500",
            metrics: [{ value: "95%", label: "Performance" }],
            liveUrl: "#",
        },
    ],
    "WooCommerce": [
        {
            id: 3,
            title: "Alhine White",
            category: "WooCommerce",
            categories: ["WooCommerce"],
            description: "WooCommerce shop project",
            image: "/assets/portfolio/woocommerce1.png",
            technologies: ["WordPress", "WooCommerce"],
            gradient: "from-yellow-400 to-yellow-500",
            metrics: [{ value: "85%", label: "Performance" }],
            liveUrl: "#",
        },
    ],
    "CodeIgniter": [
        {
            id: 4,
            title: "AFL Masters",
            category: "CodeIgniter",
            categories: ["CodeIgniter"],
            description: "CodeIgniter project example",
            image: "/assets/portfolio/codeigniter1.png",
            technologies: ["CodeIgniter", "PHP", "MySQL"],
            gradient: "from-green-400 to-green-500",
            metrics: [{ value: "80%", label: "Performance" }],
            liveUrl: "#",
        },
    ],
};

export default function PortfolioPage() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleProjectClick = useCallback((project: Project) => {
        setSelectedProject(project);
        console.log("Project clicked:", project);
    }, []);

    return (
        <div className="space-y-32 px-6 py-12 bg-[#0E0918]">
            {Object.entries(portfolioData).map(([category, projects]) => (
                <div key={category} className="space-y-12">
                    {/* Category Title */}
                    <h2 className="text-4xl font-bold text-white">{category}</h2>

                    
                    {/* Scroll Progress Indicator */}
                    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
                        <div className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium flex items-center gap-3">
                            <span>Scroll to explore</span>
                            <span className="text-purple-400">→</span>
                            <span className="text-gray-400">{projects.length} projects</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
