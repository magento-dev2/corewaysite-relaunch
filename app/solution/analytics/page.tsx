import AnalyticsHero from '@/components/analytics/AnalyticsHero';
import AnalyticsServices from '@/components/analytics/AnalyticsServices';
import AnalyticsFeatures from '@/components/analytics/AnalyticsFeatures';
import AnalyticsDashboards from '@/components/analytics/AnalyticsDashboards';
import AnalyticsInsights from '@/components/analytics/AnalyticsInsights';
import AnalyticsIntegrations from '@/components/analytics/AnalyticsIntegrations';
import AnalyticsMetrics from '@/components/analytics/AnalyticsMetrics';
import PageCTA from '@/components/PageCTA';
import FAQ from '@/components/FAQ';
import WhyCorewaySection from '@/components/WhyCorewaySection';
import sampleFAQs from '@/data/faqs.json';
import whyCorewayData from '@/data/why-coreway.json';
import SubHeader from "@/components/SubHeader";

export default function AnalyticsPage() {
  const subHeaderItems = [
    { label: "Overview", sectionId: "overview" },
    { label: "Services", sectionId: "services" },
    { label: "Features", sectionId: "features" },
    { label: "Insights", sectionId: "insights" },
    { label: "FAQ", sectionId: "faq" },
  ];

  return (
    <div className="overflow-hidden">
      <div id="overview">
        <AnalyticsHero />
      </div>

      <SubHeader title="Analytics & BI" items={subHeaderItems} />

      <div id="services">
        <AnalyticsServices />
      </div>

      <div id="features">
        <AnalyticsFeatures />
      </div>

      <AnalyticsDashboards />

      <div id="insights">
        <AnalyticsInsights />
      </div>

      <AnalyticsIntegrations />

      <AnalyticsMetrics />

      <WhyCorewaySection
        badge={whyCorewayData["analytics"].badge}
        title={whyCorewayData["analytics"].title}
        subtitle={whyCorewayData["analytics"].subtitle}
        reasons={whyCorewayData["analytics"].reasons}
      />

      <div id="faq">
        <FAQ
          badge="Help Center"
          title="Common Questions & Answers"
          description="Everything you need to know about our analytics services"
          faqs={sampleFAQs["analytics"]}
          columns={1}
          showContactCTA={true}
          contactText="Still have questions?"
          contactButtonText="Contact Our Team"
        />
      </div>

      <PageCTA
        badge="Analytics & BI"
        title="Ready to Transform Your Data?"
        description="Let our experts help you unlock the full potential of your data with powerful analytics and insights."
        primaryButtonText="Start Analytics Journey"
        secondaryButtonText="Schedule Demo"
        footerText="Free consultation • Custom dashboards • Expert support"
      />
    </div>
  );
}
