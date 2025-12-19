import CategoryHeroSide from "@/components/category/CategoryHeroSide";
import CategoryGrid from "@/components/category/CategoryGrid";
import PageCTA from "@/components/PageCTA";
import Breadcrumb from "@/components/about/Breadcrumb";
import WhyCorewaySection from "@/components/WhyCorewaySection";
import FAQ from "@/components/FAQ";
import { Metadata } from "next";
import sampleFAQs from '@/data/faqs.json';

export const metadata: Metadata = {
    title: "Industries We Serve | Coreway Solution - Industry-Specific Solutions",
    description: "Specialized solutions for eCommerce, automotive, manufacturing, food & beverage, furniture, fashion, and pharmaceuticals industries.",
    keywords: "ecommerce solutions, automotive technology, manufacturing IoT, food beverage tech, furniture ecommerce, fashion retail, healthcare pharma",
};

export default function IndustriesPage() {
    const industries = [
        {
            title: "eCommerce & Virtual Product Stores",
            description: "Build scalable online stores with headless commerce, virtual showrooms, and omnichannel experiences.",
            href: "/industries/ecommerce-stores",
            icon: "shopping-cart",
        },
        {
            title: "Automotive",
            description: "Digital solutions for automotive industry including connected vehicles, dealer management, and customer portals.",
            href: "/industries/automotive",
            icon: "zap",
        },
        {
            title: "Manufacturing & Industrial IoT",
            description: "Smart manufacturing solutions with IoT integration, predictive maintenance, and real-time monitoring.",
            href: "/industries/manufacturing-iot",
            icon: "wifi",
        },
        {
            title: "Food & Beverage",
            description: "Digital transformation for food industry with supply chain optimization, quality tracking, and eCommerce platforms.",
            href: "/industries/food-beverage",
            icon: "sparkles",
        },
        {
            title: "Furniture & Home Decor",
            description: "Virtual showrooms, AR visualization, and seamless eCommerce experiences for furniture retailers.",
            href: "/industries/furniture-home-decor",
            icon: "box",
        },
        {
            title: "Fashion & Apparel",
            description: "Modern retail solutions with virtual try-on, inventory management, and personalized shopping experiences.",
            href: "/industries/fashion-apparel",
            icon: "sparkles",
        },
        {
            title: "Pharmaceuticals & Healthcare",
            description: "Compliant healthcare solutions with patient portals, telemedicine, and secure data management.",
            href: "/industries/pharmaceuticals-healthcare",
            icon: "shield-check",
        },
    ];

  const whyCorewayReasons = [
    {
        icon: "star",
        title: "Industry Expertise",
        description: "Deep understanding of industry-specific challenges and regulatory requirements across 7+ sectors."
    },
    {
        icon: "check-circle",
        title: "Proven Solutions",
        description: "100+ successful projects delivered with measurable impact on efficiency and revenue."
    },
    {
        icon: "shield",
        title: "Compliance Ready",
        description: "Solutions built with industry standards and regulatory compliance from day one."
    },
    {
        icon: "trending-up",
        title: "Scalable Architecture",
        description: "Future-proof solutions that grow with your business and adapt to market changes."
    }
];

    

    return (
        <div className="min-h-screen bg-[#0E0918]">
            <header className="page-content">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumb items={[{ label: "Industries" }]} />
                </div>
            </header>

            <main>
                <CategoryHeroSide
                    badge="Industries We Serve"
                    title="Industry-Specific"
                    titleHighlight="Expertise"
                    subtitle="Tailored Solutions for Your Sector"
                    description="We understand that every industry has unique challenges and requirements. Our specialized solutions are designed to address the specific needs of your sector, leveraging industry best practices and cutting-edge technology."
                    primaryButton={{ label: "Discuss Your Industry", href: "/contact" }}
                    secondaryButton={{ label: "View Success Stories", href: "/case-studies" }}
                    imageSrc="/assets/images/industries.png"
                    imageAlt="Industry Solutions"
                />

                <CategoryGrid items={industries} columns={3} />

                <WhyCorewaySection
                    badge="Why Choose Coreway"
                    title="Your Industry-Focused Technology Partner"
                    subtitle="We combine industry knowledge with technical excellence to deliver solutions that drive real business results."
                    reasons={whyCorewayReasons}
                />

                <FAQ
                    badge="Help Center"
                    title="Frequently Asked Questions"
                    description="Everything you need to know about our industry-specific solutions"
                    faqs={sampleFAQs["industries"]}
                    columns={1}
                    showContactCTA={true}
                    contactText="Still have questions?"
                    contactButtonText="Contact Our Team"
                />

                <PageCTA
                    badge="Industry Expertise"
                    title="Transform Your Industry with Technology"
                    description="Partner with us to leverage industry-specific solutions that drive growth, efficiency, and innovation in your sector."
                    primaryButtonText="Discuss Your Industry"
                    secondaryButtonText="View Success Stories"
                    footerText="Industry expertise • Proven solutions • Measurable results"
                />
            </main>
        </div>
    );
}
