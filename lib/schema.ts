// Structured Data (Schema.org) utilities for SEO

export interface OrganizationSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs: string[];
  contactPoint: {
    '@type': string;
    telephone: string;
    contactType: string;
    areaServed: string;
    availableLanguage: string[];
  };
  address?: {
    '@type': string;
    addressCountry: string;
  };
}

export interface WebSiteSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  potentialAction?: {
    '@type': string;
    target: {
      '@type': string;
      urlTemplate: string;
    };
    'query-input': string;
  };
}

export interface BreadcrumbSchema {
  '@context': string;
  '@type': string;
  itemListElement: Array<{
    '@type': string;
    position: number;
    name: string;
    item?: string;
  }>;
}

export interface ServiceSchema {
  '@context': string;
  '@type': string;
  serviceType: string;
  provider: {
    '@type': string;
    name: string;
  };
  areaServed: string;
  description: string;
}

export interface FAQSchema {
  '@context': string;
  '@type': string;
  mainEntity: Array<{
    '@type': string;
    name: string;
    acceptedAnswer: {
      '@type': string;
      text: string;
    };
  }>;
}

// Organization Schema for Coreway Solution
export const getOrganizationSchema = (): OrganizationSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Coreway Solution',
  url: 'https://www.corewaysolution.com',
  logo: 'https://www.corewaysolution.com/logo.png',
  description:
    'Transform your business with AI-powered solutions, custom software development, and workflow automation. Expert team delivering cutting-edge technology solutions worldwide.',
  sameAs: [
    'https://twitter.com/corewaysolution',
    'https://www.linkedin.com/company/coreway-solution',
    'https://www.facebook.com/corewaysolution',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-XXX-XXX-XXXX', // Update with actual phone
    contactType: 'Customer Service',
    areaServed: 'Worldwide',
    availableLanguage: ['English'],
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
});

// Website Schema with Search Action
export const getWebSiteSchema = (): WebSiteSchema => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Coreway Solution',
  url: 'https://www.corewaysolution.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.corewaysolution.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
});

// Generate Breadcrumb Schema
export const getBreadcrumbSchema = (items: Array<{ name: string; url?: string }>): BreadcrumbSchema => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    ...(item.url && { item: item.url }),
  })),
});

// Service Schema Generator
export const getServiceSchema = (
  serviceType: string,
  description: string
): ServiceSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType,
  provider: {
    '@type': 'Organization',
    name: 'Coreway Solution',
  },
  areaServed: 'Worldwide',
  description,
});

// FAQ Schema Generator
export const getFAQSchema = (
  faqs: Array<{ question: string; answer: string }>
): FAQSchema => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

// Helper to convert schema to JSON-LD script
export const schemaToJsonLd = (schema: any) => {
  return {
    __html: JSON.stringify(schema),
  };
};
