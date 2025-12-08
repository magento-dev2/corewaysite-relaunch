import Breadcrumb from "@/components/about/Breadcrumb";
import LegalPageRenderer from "@/components/legal/LegalPageRenderer";
import privacyData from "../../data/privacyPolicyData.json";

export default function PrivacyPolicyPage() {
  const siteUrl = "https://www.corewaysolution.com";

  return (
    <div className="min-h-screen bg-[#0E0918]">
        <header className="page-content pb-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Privacy Policy" },
              ]}
            />
          </div>
        </header>

        <main className="pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <LegalPageRenderer
              title={privacyData.title}
              lastUpdated={privacyData.lastUpdated}
              sections={privacyData.sections}
            />
          </div>
        </main>
      </div>
  );
}
