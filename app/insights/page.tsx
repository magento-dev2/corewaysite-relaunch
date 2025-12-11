import CategoryHeroSide from "@/components/category/CategoryHeroSide";
import CategoryGrid from "@/components/category/CategoryGrid";
import PageCTA from "@/components/PageCTA";
import Breadcrumb from "@/components/about/Breadcrumb";
import WhyCorewaySection from "@/components/WhyCorewaySection";
import FAQ from "@/components/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Insights | Coreway Solution - Portfolio, Case Studies & Success Stories",
    description: "Explore our portfolio, case studies, project snapshots, client testimonials, and dedicated developer services. See how we deliver exceptional results.",
    keywords: "portfolio, case studies, success stories, testimonials, project snapshots, dedicated developers, client reviews",
};

export default function InsightsPage() {
    const insights = [
        {
            title: "Portfolio",
            description: "Explore our comprehensive portfolio showcasing diverse projects across industries and technologies.",
            href: "/portfolio",
            icon: "briefcase",
        },
        {
            title: "Case Studies",
            description: "Deep dive into our success stories with detailed case studies highlighting challenges, solutions, and measurable results.",
            href: "/case-studies",
            icon: "trending-up",
        },
        {
            title: "Project Snapshots",
            description: "Quick glimpses of our recent projects with key highlights, technologies used, and outcomes achieved.",
            href: "/portfolio/projects",
            icon: "sparkles",
        },
        {
            title: "Testimonials",
            description: "Hear from our satisfied clients about their experience working with us and the results we delivered.",
            href: "/testimonials",
            icon: "users",
        },
        {
            title: "Dedicated Developers",
            description: "Scale your team with our dedicated developers who integrate seamlessly with your workflow and culture.",
            href: "/dedicated-developers",
            icon: "award",
        },
    ];

    const whyCorewayReasons = [
        {
            icon:"",
            title: "Proven Track Record",
            description: "100+ successful projects delivered with measurable impact on business growth and efficiency."
        },
        {
             icon:"",
            title: "Client-Focused Approach",
            description: "95% client retention rate through transparent communication and exceptional service delivery."
        },
        {
             icon:"",
            title: "Quality Assurance",
            description: "Rigorous testing and quality control processes ensure flawless execution every time."
        },
        {
             icon:"",
            title: "Long-Term Partnership",
            description: "We build lasting relationships, providing ongoing support and continuous improvement."
        }
    ];

    const faqs = [
        {
            question: "Can I see examples of your previous work?",
            answer: "Yes! Browse our portfolio and case studies to see detailed examples of projects across various industries and technologies. We showcase challenges, solutions, and measurable results."
        },
        {
            question: "Do you have client references?",
            answer: "Absolutely! We have numerous client testimonials and can provide references upon request. Our 95% client retention rate speaks to our quality of service."
        },
        {
            question: "What makes your case studies valuable?",
            answer: "Our case studies provide in-depth analysis of real projects, including business challenges, technical solutions, implementation process, and quantifiable results with metrics."
        },
        {
            question: "How do dedicated developers work?",
            answer: "Our dedicated developers integrate with your team, follow your processes, and work exclusively on your projects. They provide the flexibility of in-house talent with the expertise of a specialized agency."
        },
        {
            question: "Can I request a custom project showcase?",
            answer: "Yes! Contact us to discuss your specific interests, and we can provide relevant case studies and project examples tailored to your industry or technology needs."
        }
    ];

    return (
        <div className="min-h-screen bg-[#0E0918]">
            <header className="page-content">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumb items={[{ label: "Insights" }]} />
                </div>
            </header>

            <main>
                <CategoryHeroSide
                    badge="Insights & Success Stories"
                    title="Our Work Speaks"
                    titleHighlight="for Itself"
                    subtitle="Real Projects, Real Results"
                    description="Discover how we've helped businesses transform through technology. From detailed case studies to client testimonials, explore the impact of our solutions across industries and technologies."
                    primaryButton={{ label: "Start Your Project", href: "/contact" }}
                    secondaryButton={{ label: "Talk to Our Team", href: "/contact" }}
                    imageSrc="/assets/images/insights.png"
                    imageAlt="Success Stories"
                />

                <CategoryGrid items={insights} columns={3} />

                <WhyCorewaySection
                    badge="Why Choose Coreway"
                    title="Your Success Is Our Success"
                    subtitle="We measure our success by the tangible results we deliver to our clients."
                    reasons={whyCorewayReasons}
                />

                <FAQ
                    badge="Help Center"
                    title="Frequently Asked Questions"
                    description="Everything you need to know about our work and success stories"
                    faqs={faqs}
                    columns={1}
                    showContactCTA={true}
                    contactText="Still have questions?"
                    contactButtonText="Contact Our Team"
                />

                <PageCTA
                    badge="Join Our Success Stories"
                    title="Ready to Create Your Success Story?"
                    description="Let's work together to build solutions that drive real business results. Our proven track record speaks for itself."
                    primaryButtonText="Start Your Project"
                    secondaryButtonText="Talk to Our Team"
                    footerText="Proven expertise • Measurable results • Client-focused approach"
                />
            </main>
        </div>
    );
}
