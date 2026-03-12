// Structured Data (Schema.org) utilities for SEO

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.corewaysolution.com';

export interface PersonSchema {
  '@type': string;
  '@id'?: string;
  name: string;
  jobTitle?: string;
  worksFor?: {
    '@type': string;
    name: string;
  };
  sameAs?: string[];
  image?: string;
  description?: string;
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
  '@type': string | string[];
  '@id': string;
  name: string;
  url: string;
  logo: string;
  image?: string;
  description: string;
  sameAs: string[];
  knowsAbout?: string[];
  hasOfferCatalog?: {
    '@type': 'OfferCatalog';
    name: string;
    itemListElement: Array<{
      '@type': 'OfferCatalog' | 'ListItem';
      name: string;
      item?: any;
      itemListElement?: any[];
    }>;
  };
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
  priceRange?: string;
  openingHours?: string | string[];
  currenciesAccepted?: string;
  paymentAccepted?: string;
  geo?: {
    '@type': 'GeoCoordinates';
    latitude: number;
    longitude: number;
  };
  hasMap?: string;
}


export interface WebSiteSchema {
  '@type': string;
  '@id': string;
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
  provider: { '@id': string } | { '@type': string; name: string };
  areaServed: string;
  description: string;
}

export interface WebPageSchema {
  '@type': string;
  '@id': string;
  name: string;
  description: string;
  url: string;
  isPartOf?: { '@id': string };
  breadcrumb?: BreadcrumbSchema;
  publisher?: { '@id': string };
  about?: Array<{ '@type': string; name: string }>;
  keywords?: string;
  speakable?: {
    '@type': string;
    cssSelector: string[];
  };
}

export interface AboutPageSchema extends WebPageSchema {
  '@type': 'AboutPage';
  mainEntity?: PersonSchema | OrganizationSchema;
}

export interface BlogPostingSchema {
  '@type': 'BlogPosting';
  '@id': string;
  headline: string;
  description: string;
  image: string;
  author: { '@id': string };
  publisher: { '@id': string };
  datePublished: string;
  dateModified?: string;
  mainEntityOfPage: {
    '@type': string;
    '@id': string;
  };
}

export interface JobPostingSchema {
  '@type': 'JobPosting';
  '@id': string;
  title: string;
  description: string;
  datePosted: string;
  validThrough?: string;
  employmentType: string | string[];
  hiringOrganization: { '@id': string };
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
// Founder Schema
export const getFounderSchema = (): PersonSchema => ({
  '@type': 'Person',
  '@id': `${SITE_URL}/#founder`,
  name: 'Mr. Alpesh Radadiya',
  jobTitle: 'Founder',
  worksFor: {
    '@type': 'Organization',
    name: 'Coreway Solution'
  },
  sameAs: ['https://www.linkedin.com/company/coreway-solution/'], // To be populated with social links
  description: 'Founder of Coreway Solution, leading digital transformation and AI innovation.'
});

// Organization & Local Business Schema for Coreway Solution
export const getOrganizationSchema = (): OrganizationSchema => ({
  '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
  '@id': `${SITE_URL}/#organization`,
  name: 'Coreway Solution',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  description:
    'Transform your business with AI-powered solutions, custom software development, and workflow automation. Expert team delivering cutting-edge technology solutions worldwide.',

  openingHours: 'Mo-Fr 10:00-19:00',
  knowsAbout: [
    'Artificial Intelligence',
    'Machine Learning',
    'Workflow Automation',
    'SaaS Development',
    'Digital Transformation',
    'Custom Software Development',
    'Cloud Infrastructure'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Software Development & AI Services',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'AI Solutions',
        itemListElement: [
          { '@type': 'ListItem', name: 'AI Consulting' },
          { '@type': 'ListItem', name: 'RAG Chatbot Development' },
          { '@type': 'ListItem', name: 'AI Workflow Automation' }
        ]
      },
      {
        '@type': 'OfferCatalog',
        name: 'SaaS & Web',
        itemListElement: [
          { '@type': 'ListItem', name: 'SaaS Infrastructure' },
          { '@type': 'ListItem', name: 'Custom Web Development' },
          { '@type': 'ListItem', name: 'Product Engineering' }
        ]
      },
      {
        '@type': 'OfferCatalog',
        name: 'Mobile & IoT',
        itemListElement: [
          { '@type': 'ListItem', name: 'Mobile App Development' },
          { '@type': 'ListItem', name: 'IoT Application Systems' }
        ]
      }
    ]
  },
  sameAs: [
    'https://twitter.com/corewaysolution',
    'https://www.linkedin.com/company/coreway-solution/',
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
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 23.0396,
    longitude: 72.6800,
  },
  hasMap: `https://www.google.com/maps/search/?api=1&query=Coreway+Solution+Leela+Plaza+Nikol+Ahmedabad`,
  founder: getFounderSchema(),
});


// Website Schema with Search Action
export const getWebSiteSchema = (): WebSiteSchema => ({
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
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
  breadcrumbItems?: Array<{ name: string; url?: string }>,
  keywords?: string,
  aboutNames?: string[]
): WebPageSchema => ({
  '@type': 'WebPage',
  '@id': `${SITE_URL}${path}#webpage`,
  name,
  description,
  url: `${SITE_URL}${path}`,
  isPartOf: { '@id': `${SITE_URL}/#website` },
  publisher: { '@id': `${SITE_URL}/#organization` },
  ...(keywords && { keywords }),
  ...(aboutNames && {
    about: aboutNames.map((name) => ({
      '@type': 'Thing',
      name,
    })),
  }),
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2'],
  },
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
  const siteUrl = SITE_URL;
  return {
    '@type': 'BlogPosting',
    '@id': `${siteUrl}/blog/${blog.slug}#blogposting`,
    headline: blog.title,
    description: blog.excerpt || blog.title,
    image: blog.coverImage
      ? (blog.coverImage.startsWith('http') ? blog.coverImage : `${siteUrl}/${blog.coverImage}`)
      : `${siteUrl}/og-image.jpg`,
    author: { '@id': `${siteUrl}/#founder` },
    publisher: { '@id': `${siteUrl}/#organization` },
    datePublished: new Date(blog.createdAt).toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${blog.slug}#webpage`,
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
  slug?: string;
}): JobPostingSchema => {
  const organization = getOrganizationSchema();
  return {
    '@type': 'JobPosting',
    '@id': `${SITE_URL}/careers/${job.slug || job.title.toLowerCase().replace(/ /g, '-')}#jobposting`,
    title: job.title,
    description: job.description,
    datePosted: new Date(job.datePosted).toISOString(),
    employmentType: job.type,
    hiringOrganization: { '@id': `${SITE_URL}/#organization` },
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
  provider: { '@id': `${SITE_URL}/#organization` },
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
