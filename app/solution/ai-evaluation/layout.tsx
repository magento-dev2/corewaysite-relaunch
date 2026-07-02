import React from 'react';

export const metadata = {
  title: 'AI Evaluation | Coreway',
  description: 'AI Evaluation and Data Quality Services',
};

export default function AIEvaluationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col min-h-screen">
      {children}
    </section>
  );
}
