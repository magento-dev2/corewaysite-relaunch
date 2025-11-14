"use client";

import ServicesGSAP from './ServicesGSAP';

interface ServicesWrapperProps {
  t: {
    badge: string;
    title: string;
    subtitle: string;
    cards: Array<{ title: string; description: string }>;
    mainServices: Array<{
      title: string;
      subtitle: string;
      description: string;
      items: string[];
    }>;
  };
}

export default function ServicesWrapper({ t }: ServicesWrapperProps) {
  return <ServicesGSAP t={t} />;
}
