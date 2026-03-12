// Structured Data (Schema.org) utilities for SEO

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.corewaysolution.com';

export interface PersonSchema {
  '@type': string;
  name: string;
  jobTitle?: string;
  worksFor?: {
    '@type': string;
    name: string;
  };
  sameAs?: string[];
  image?: string;
}

export interface PostalAddressSchema {
  '@type': string;
  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry: string;
}

export interface OrganizationSchema {
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
  address?: PostalAddressSchema;
  founder?: PersonSchema;
  foundingDate?: string;
}

export interface ProfessionalServiceSchema extends OrganizationSchema {
  image?: string;
  priceRange?: string;
  openingHours?: string | string[];
  currenciesAccepted?: string;
  paymentAccepted?: string;
  geo?: {
    '@type': string;
    latitude: number;
    longitude: number;
  };
}

export interface WebSiteSchema {
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
  '@type': string;
  itemListElement: Array<{
    '@type': string;
    position: number;
    name: string;
    item?: string;
  }>;
}

export interface ServiceSchema {
  '@type': string;
  name: string;
  serviceType: string;
  provider: {
    '@type': string;
    name: string;
  };
  areaServed: string;
  description: string;
}

export interface WebPageSchema {
  '@type': string;
  name: string;
  description: string;
  url: string;
  breadcrumb?: BreadcrumbSchema;
}

export interface AboutPageSchema extends WebPageSchema {
  '@type': 'AboutPage';
  mainEntity?: PersonSchema | OrganizationSchema;
}

export interface BlogPostingSchema {
  '@type': 'BlogPosting';
  headline: string;
  description: string;
  image: string;
  author: PersonSchema | OrganizationSchema;
  publisher: OrganizationSchema;
  datePublished: string;
  dateModified?: string;
  mainEntityOfPage: {
    '@type': string;
    '@id': string;
  };
}

export interface JobPostingSchema {
  '@type': 'JobPosting';
  title: string;
  description: string;
  datePosted: string;
  validThrough?: string;
  employmentType: string | string[];
  hiringOrganization: OrganizationSchema;
  jobLocation: {
    '@type': string;
    address: PostalAddressSchema;
  };
  baseSalary?: {
    '@type': string;
    currency: string;
    value: {
      '@type': string;
      value: number;
      unitText: string;
    };
  };
}

export interface FAQSchema {
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
  '@type': 'Organization',
  name: 'Coreway Solution',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    'Transform your business with AI-powered solutions, custom software development, and workflow automation. Expert team delivering cutting-edge technology solutions worldwide.',
  sameAs: [
    'https://twitter.com/corewaysolution',
    'https://www.linkedin.com/company/coreway-solution',
    'https://www.facebook.com/corewaysolution',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91 81608 80977',
    contactType: 'Customer Service',
    areaServed: 'Worldwide',
    availableLanguage: ['English', 'Hindi', 'Gujarati'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Leela Plaza, 602, near TNTC, Nikol',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    postalCode: '382350',
    addressCountry: 'India',
  },
  founder: {
    '@type': 'Person',
    name: 'Mr. Alpesh Radadiya',
  },

});

// Professional Service Schema
export const getProfessionalServiceSchema = (): ProfessionalServiceSchema => ({
  ...getOrganizationSchema(),
  '@type': 'ProfessionalService',
  image: `${SITE_URL}/logo.png`,
  openingHours: 'Mo-Fr 10:00-19:00',
});

// Website Schema with Search Action
export const getWebSiteSchema = (): WebSiteSchema => ({
  '@type': 'WebSite',
  name: 'Coreway Solution',
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
});

// Generate Breadcrumb Schema
export const getBreadcrumbSchema = (items: Array<{ name: string; url?: string }>): BreadcrumbSchema => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    ...(item.url && { item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}` }),
  })),
});

// WebPage Schema Generator
export const getWebPageSchema = (
  name: string,
  description: string,
  path: string,
  breadcrumbItems?: Array<{ name: string; url?: string }>
): WebPageSchema => ({
  '@type': 'WebPage',
  name,
  description,
  url: `${SITE_URL}${path}`,
  ...(breadcrumbItems && { breadcrumb: getBreadcrumbSchema(breadcrumbItems) }),
});

// ContactPage Schema
export const getContactPageSchema = (
  description: string,
  breadcrumbItems?: Array<{ name: string; url?: string }>
): WebPageSchema => ({
  ...getWebPageSchema('Contact Us | Coreway Solution', description, '/contact', breadcrumbItems),
  '@type': 'ContactPage',
});

// AboutPage Schema
export const getAboutPageSchema = (
  description: string,
  breadcrumbItems?: Array<{ name: string; url?: string }>
): AboutPageSchema => {
  const organization = getOrganizationSchema();
  return {
    ...getWebPageSchema('About Us | Coreway Solution', description, '/about', breadcrumbItems),
    '@type': 'AboutPage',
    mainEntity: organization,
  };
};

// BlogPosting Schema
export const getBlogPostingSchema = (blog: {
  title: string;
  excerpt?: string;
  coverImage?: string;
  createdAt: string | Date;
  slug: string;
  authorName?: string;
}): BlogPostingSchema => {
  const organization = getOrganizationSchema();
  const siteUrl = organization.url;
  return {
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.excerpt || blog.title,
    image: blog.coverImage
      ? (blog.coverImage.startsWith('http') ? blog.coverImage : `${siteUrl}/${blog.coverImage}`)
      : `${siteUrl}/og-image.jpg`,
    author: {
      '@type': 'Organization',
      name: 'Coreway Solution',
    },
    publisher: organization,
    datePublished: new Date(blog.createdAt).toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${blog.slug}`,
    },
  };
};

// JobPosting Schema
export const getJobPostingSchema = (job: {
  title: string;
  description: string;
  datePosted: string | Date;
  department: string;
  location: string;
  type: string;
}): JobPostingSchema => {
  const organization = getOrganizationSchema();
  return {
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    datePosted: new Date(job.datePosted).toISOString(),
    employmentType: job.type,
    hiringOrganization: organization,
    jobLocation: {
      '@type': 'Place',
      address: organization.address!,
    },
  };
};

// CollectionPage Schema
export const getCollectionPageSchema = (
  name: string,
  description: string,
  path: string,
  breadcrumbItems?: Array<{ name: string; url?: string }>
): WebPageSchema => ({
  ...getWebPageSchema(name, description, path, breadcrumbItems),
  '@type': 'CollectionPage',
});

// Service Schema Generator
export const getServiceSchema = (
  serviceType: string,
  description: string,
  path?: string,
  breadcrumbItems?: Array<{ name: string; url?: string }>
): ServiceSchema => ({
  '@type': 'Service',
  name: serviceType,
  serviceType,
  provider: {
    '@type': 'Organization',
    name: 'Coreway Solution',
  },
  areaServed: 'Worldwide',
  description,
  // We can add more specific service fields if needed
});

// FAQ Schema Generator
export const getFAQSchema = (
  faqs: Array<{ question: string; answer: string }>
): FAQSchema => ({
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
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      ...schema,
    }),
  };
};
