"use client";

import DBDashbotHero from '@/components/dbdashbot/DBDashbotHero';
import DBDashbotFeatures from '@/components/dbdashbot/DBDashbotFeatures';
import DBDashbotBenefits from '@/components/dbdashbot/DBDashbotBenefits';
import DBDashbotIndustries from '@/components/dbdashbot/DBDashbotIndustries';
import DBDashbotTechnology from '@/components/dbdashbot/DBDashbotTechnology';
import DBDashbotProcess from '@/components/dbdashbot/DBDashbotProcess';
import PageCTA from '@/components/PageCTA';

export default function DBDashbotPage() {
  return (
    <div className="overflow-hidden">
      <DBDashbotHero />
      <DBDashbotFeatures />
      <DBDashbotProcess />
      <DBDashbotBenefits />
      <DBDashbotTechnology />
      <DBDashbotIndustries />
      <PageCTA
        badge="Free Setup Available"
        title="Let's Talk Your Success!"
        description="Transform your database queries with AI-driven intelligence. Get started with our free setup and experience the power of natural language database interactions."
        primaryButtonText="Request for Demo"
        secondaryButtonText="Get Started"
        footerText="Free setup • No SQL expertise required • Instant insights"
      />
    </div>
  );
}
