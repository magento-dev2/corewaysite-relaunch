import ecommerceStoresData from "../../../data/ecommerceStoresData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import DatasetHero from "@/components/dataset/DatasetHero";
import EcommerceOverview from "@/components/ecommerce/EcommerceOverview";
import EcommerceFeatures from "@/components/ecommerce/EcommerceFeatures";
import EcommerceShowcase from "@/components/ecommerce/EcommerceShowcase";
import AISecurityTechnologies from "@/components/aisecurity/AISecurityTechnologies";
import AISecurityProcess from "@/components/aisecurity/AISecurityProcess";
import PageCTA from "@/components/PageCTA";
import sampleFAQs from '@/data/faqs.json';
import FAQ from '@/components/FAQ';
import WhyCorewaySection from '@/components/WhyCorewaySection';
import whyCorewayData from '@/data/why-coreway.json';
import SubHeader from "@/components/SubHeader";
import PortfolioHighlights from "@/components/about/PortfolioHighlights";


const projectData = [
  {
    id: 1,
    language: "Wordpress",
    images: ["/images/Wordpress/american.png"]
  },
  {
    id: 2,
    language: "Shopify",
    images: ["/images/Shopify/aurus.png"]
  },
  {
    id: 3,
    language: "WooCommerce",
    images: ["/images/WooCommerce/alhine.png"]
  },
  {
    id: 4,
    language: "Android",
    images: ["/images/Android/bapuji-1.png"]
  },
  {
    id: 5,
    language: "Magento",
    images: ["/images/Magento/knir.png"]
  },
  {
    id: 6,
    language: "Laravel",
    images: ["/images/Laravel/delaware.png"]
  }
];


export default function EcommerceStores() {
  const subHeaderItems = [
    { label: "Overview", sectionId: "overview" },
    { label: "Capabilities", sectionId: "features" },
    { label: "Our Process", sectionId: "process" },
    { label: "FAQ", sectionId: "faq" },
  ];

  return (
    <div className="min-h-screen bg-[#0E0918]">
      <header className="page-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Industries", href: "/industries" },
              { label: "eCommerce & Virtual Product Stores" },
            ]}
          />
        </div>
      </header>

      <main>
        <DatasetHero
          title={ecommerceStoresData.hero.title}
          title2={ecommerceStoresData.hero.title2}
          subtitle={ecommerceStoresData.hero.subtitle}
          buttons={ecommerceStoresData.hero.buttons}
          img="/assets/images/ecommerce.png"
        />

        <SubHeader title="E-Commerce Stores" items={subHeaderItems} />

        <div id="overview">
          <EcommerceOverview
            title={ecommerceStoresData.overview.title}
            content={ecommerceStoresData.overview.content}
            image={ecommerceStoresData.overview.image}
          />
        </div>

        <div id="features">
          <EcommerceFeatures
            title={ecommerceStoresData.features.title}
            items={ecommerceStoresData.features.items}
          />
        </div>

        <AISecurityTechnologies
          title={ecommerceStoresData.platforms.title}
          description={ecommerceStoresData.platforms.description}
          items={ecommerceStoresData.platforms.items}
        />

        {/* <EcommerceShowcase
          title={ecommerceStoresData.showcase.title}
          stores={ecommerceStoresData.showcase.stores}
        /> */}

        <PortfolioHighlights data={projectData} highlightCount={6} />

        <div id="process">
          <AISecurityProcess
            title={ecommerceStoresData.process.title}
            description={ecommerceStoresData.process.description}
            steps={ecommerceStoresData.process.steps}
          />
        </div>

        <section className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a1325]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {ecommerceStoresData.benefits.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ecommerceStoresData.benefits.items.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 text-center hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500"
                >
                  <div className="text-5xl mb-3">{benefit.icon}</div>
                  <div className="text-4xl font-bold text-purple-400 mb-3 font-mono">
                    {benefit.metric}
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        <WhyCorewaySection
          badge={whyCorewayData["ecommerce-stores"].badge}
          title={whyCorewayData["ecommerce-stores"].title}
          subtitle={whyCorewayData["ecommerce-stores"].subtitle}
          reasons={whyCorewayData["ecommerce-stores"].reasons}
        />
        <div id="faq">
          <FAQ
            badge="Help Center"
            title="Common Questions & Answers"
            description="Everything you need to know about our services and how we work"
            faqs={sampleFAQs["ecommerce-stores"]}
            columns={1}
            showContactCTA={true}
            contactText="Still have questions?"
            contactButtonText="Contact Our Team"
          />
        </div>


        <PageCTA
          badge="Start Selling Online"
          title="Ready to Launch Your Online Store?"
          description="Let's build a high-converting eCommerce platform that drives sales and delights customers. From Shopify to custom solutions, we've got you covered."
          primaryButtonText="Start Your Store"
          secondaryButtonText="View Case-studies"
          footerText="Free consultation • 2-4 weeks to launch • Proven results"
        />
      </main>
    </div>
  );
}
