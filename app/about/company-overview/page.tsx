import companyOverviewData from "../../../data/companyOverviewData.json";
import Breadcrumb from "@/components/about/Breadcrumb";
import CompanyHero from "@/components/company/CompanyHero";
import CompanyStory from "@/components/company/CompanyStory";
import CompanyMission from "@/components/company/CompanyMission";
import CompanyValues from "@/components/company/CompanyValues";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import OurTeam from "@/components/about/OurTeam";
import PageCTA from "@/components/PageCTA";
import SubHeader from "@/components/SubHeader";

export default function CompanyOverview() {
  const subHeaderItems = [
    { label: "Our Story", sectionId: "story" },
    { label: "Mission & Vision", sectionId: "mission" },
    { label: "Our Values", sectionId: "values" },
    { label: "Our Team", sectionId: "team" },
  ];

  const siteUrl = "https://www.corewaysolution.com";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "About", item: `${siteUrl}/about` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Company Overview",
        item: `${siteUrl}/about/company-overview`,
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Coreway Solution",
    description:
      "Global technology partner specializing in AI-powered solutions, custom software development, and digital transformation.",
    url: siteUrl,
    foundingDate: "2015",
    numberOfEmployees: "50+",
  };

  return (
    <div className="min-h-screen bg-[#0E0918]">
        <header className="pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "About", href: "/about" },
                { label: "Company Overview" },
              ]}
            />
          </div>
        </header>

        <main>
          <CompanyHero
            title={companyOverviewData.hero.title}
            subtitle={companyOverviewData.hero.subtitle}
            buttons={companyOverviewData.hero.buttons}
          />

          <SubHeader title="Company Overview" items={subHeaderItems} />

          <div id="story">
            <CompanyStory
              title={companyOverviewData.story.title}
              content={companyOverviewData.story.content}
              stats={companyOverviewData.story.stats}
            />
          </div>

          <div id="mission">
            <CompanyMission
              title={companyOverviewData.mission.title}
              mission={companyOverviewData.mission.mission}
              vision={companyOverviewData.mission.vision}
            />
          </div>

          <div id="values">
            <CompanyValues
              title={companyOverviewData.values.title}
              items={companyOverviewData.values.items}
            />
          </div>

          <JourneyTimeline />

          <div id="team">
            <OurTeam members={[
              {
                id: "1",
                name: "John Smith",
                role: "CEO & Founder",
                bio: "Visionary leader with 15+ years in enterprise software",
                imageUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
                linkedinUrl: "#",
                twitterUrl: "#"
              },
              {
                id: "2",
                name: "Sarah Johnson",
                role: "CTO",
                bio: "Former Google engineer specializing in AI/ML systems",
                imageUrl: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg",
                linkedinUrl: "#",
                twitterUrl: null
              },
              {
                id: "3",
                name: "Michael Chen",
                role: "Head of Design",
                bio: "Award-winning designer focused on user experience",
                imageUrl: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg",
                linkedinUrl: "#",
                twitterUrl: "#"
              },
              {
                id: "4",
                name: "Emma Williams",
                role: "VP Engineering",
                bio: "Cloud architecture expert with Fortune 500 experience",
                imageUrl: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg",
                linkedinUrl: "#",
                twitterUrl: null
              }
            ]} />
          </div>

          <PageCTA
            badge="Join Our Journey"
            title="Ready to Build Something Amazing?"
            description="Let's transform your vision into reality. Partner with a team that's delivered 200+ successful projects across 30+ countries."
            primaryButtonText="Start Your Project"
            secondaryButtonText="Meet the Team"
            footerText="Free consultation • Global expertise • Proven track record"
          />
        </main>
      </div>
  );
}
