"use client";

import Head from "next/head";
import Breadcrumb from "@/components/about/Breadcrumb";
import LegalPageRenderer from "@/components/legal/LegalPageRenderer";
import termsData from "../../data/termsOfServiceData.json";

export default function TermsOfServicePage() {
  const siteUrl = "https://www.corewaysolution.com";

  return (
    <>
      <Head>
        <title>Terms of Service | Coreway Solution</title>
        <meta
          name="description"
          content="Terms of Service for Coreway Solution. Review the terms and conditions for using our website and services."
        />
        <meta property="og:title" content="Terms of Service | Coreway Solution" />
        <meta
          property="og:description"
          content="Legal terms and conditions for using Coreway Solution services."
        />
        <link rel="canonical" href={`${siteUrl}/terms-of-service`} />
      </Head>

      <div className="min-h-screen bg-[#0E0918]">
        <header className="pt-20 pb-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Terms of Service" },
              ]}
            />
          </div>
        </header>

        <main className="pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <LegalPageRenderer
              title={termsData.title}
              lastUpdated={termsData.lastUpdated}
              sections={termsData.sections}
            />
          </div>
        </main>
      </div>
    </>
  );
}
