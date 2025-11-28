"use client";

import { useState } from "react";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioScroll from "@/components/portfolio/PortfolioScroll";
import PortfolioModal from "@/components/portfolio/PortfolioModal";
import PortfolioCategory from "@/components/portfolio/PortfolioCategory";
import PageCTA from "@/components/PageCTA";
import portfolioData from "@/data/portfolio.json";
import FAQ from "@/components/FAQ";
import sampleFAQs from '@/data/faqs.json';

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
    icon: string;
    metrics: { value: string; label: string }[];
    liveUrl?: string;
    githubUrl?: string;
    featured: boolean;
}

export default function PortfolioPage() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const projects = portfolioData.projects as Project[];

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProject(null), 300);
    };

    return (
        <div className="overflow-x-hidden">
            {/* Hero Section */}
            <PortfolioHero
                title="Visual"
                title2="Storytelling"
                subtitle="Explore our creative work and digital craftsmanship — where strategy, design, and technology come together to deliver impactful experiences."
                buttons={[
                    { label: "View Projects", link: "#projects" },
                    { label: "Contact Us", link: "#contact" },
                ]}
            />

            {/* Horizontal Scroll Portfolio */}
            <PortfolioScroll
                projects={projects}
                onProjectClick={handleProjectClick}
            />

            <PortfolioCategory/>

            {/* FAQ Section */}
            <FAQ
                badge="Help Center"
                title="Common Questions & Answers"
                description="Everything you need to know about our services and how we work"
                faqs={sampleFAQs["portfolio"]}
                columns={1}
                showContactCTA={true}
                contactText="Still have questions?"
                contactButtonText="Contact Our Team"
            />

            {/* CTA Section */}
            <div className="bg-gradient-to-b from-[#0E0918] to-[#1a0f2e]">
                <PageCTA
                    badge="Ready to Start?"
                    title="Let's Build Something Amazing Together"
                    description="Have a project in mind? We'd love to hear about it."
                    primaryButtonText="Start Your Project"
                    secondaryButtonText="View Services"
                    footerText="Trusted by 100+ companies worldwide"
                />
            </div>

            {/* Project Detail Modal */}
            <PortfolioModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </div>
    );
}
