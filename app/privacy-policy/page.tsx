"use client";

import Head from "next/head";
import Breadcrumb from "@/components/about/Breadcrumb";
import LegalPageRenderer from "@/components/legal/LegalPageRenderer";
import privacyData from "../../data/privacyPolicyData.json";

export default function PrivacyPolicyPage() {
  const siteUrl = "https://www.corewaysolution.com";

  return (
    <>
      <Head>
        <title>Privacy Policy | Coreway Solution</title>
        <meta
          name="description"
          content="Privacy Policy for Coreway Solution. Learn how we collect, use, and protect your personal information."
        />
        <meta property="og:title" content="Privacy Policy | Coreway Solution" />
        <meta
          property="og:description"
          content="Our commitment to protecting your privacy and personal data."
        />
        <link rel="canonical" href={`${siteUrl}/privacy-policy`} />
      </Head>

      <div className="min-h-screen bg-[#0E0918]">
        <header className="pt-20 pb-8">
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
    </>
  );
}
