"use client";

import S3ProcessHero from '@/components/s3process/S3ProcessHero';
import S3Features from '@/components/s3process/S3Features';
import S3WorkflowSteps from '@/components/s3process/S3WorkflowSteps';
import S3Benefits from '@/components/s3process/S3Benefits';
import S3UseCases from '@/components/s3process/S3UseCases';
import S3SecurityCompliance from '@/components/s3process/S3SecurityCompliance';
import PageCTA from '@/components/PageCTA';
import DatasetAutomation from '@/components/dataset/DatasetAutomation';

const automotiveData =   {
    title: "AI-Powered Automotive Intelligence",
    description: "Our automotive solutions leverage artificial intelligence and machine learning to enable predictive maintenance, autonomous features, and intelligent driver assistance. With computer vision, sensor fusion, and deep learning, we help vehicles make smart decisions, optimize performance, and enhance safety in real-time.",
    features: [
      "AI-powered predictive maintenance and diagnostics",
      "Computer vision for object detection and recognition",
      "Real-time vehicle health monitoring and alerts",
      "Intelligent route optimization and energy management"
    ]
  }

export default function S3ProcessPage() {
  return (
    <div className="overflow-hidden">
      <S3ProcessHero />
      <S3Features />
      <S3WorkflowSteps />
      <S3Benefits />
      <S3UseCases />
      <S3SecurityCompliance />
       <DatasetAutomation
                  title={automotiveData.title}
                  description={automotiveData.description}
                  features={automotiveData.features}
                />
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
