"use client";

import S3ProcessHero from '@/components/s3process/S3ProcessHero';
import S3Features from '@/components/s3process/S3Features';
import S3WorkflowSteps from '@/components/s3process/S3WorkflowSteps';
import S3Benefits from '@/components/s3process/S3Benefits';
import S3UseCases from '@/components/s3process/S3UseCases';
import S3SecurityCompliance from '@/components/s3process/S3SecurityCompliance';
import PageCTA from '@/components/PageCTA';

export default function S3ProcessPage() {
  return (
    <div className="overflow-hidden">
      <S3ProcessHero />
      <S3Features />
      <S3WorkflowSteps />
      <S3Benefits />
      <S3UseCases />
      <S3SecurityCompliance />
      <PageCTA
        badge="AWS S3 Optimization"
        title="Ready to Optimize Your Cloud Storage?"
        description="Let our experts help you build a scalable, secure, and cost-effective S3 infrastructure for your business."
        primaryButtonText="Get Started"
        secondaryButtonText="Schedule Consultation"
        footerText="Free consultation • Custom solutions • Expert support"
      />
    </div>
  );
}
