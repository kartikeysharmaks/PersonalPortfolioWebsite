import {
  SITE_URL,
  SITE_NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
  OG_IMAGE,
} from "./site";

export const NAV_SECTIONS = [
  { id: "home", name: "Home" },
  { id: "about", name: "About" },
  { id: "projects", name: "Projects" },
  { id: "education", name: "Education" },
  { id: "work", name: "Work" },
  { id: "skills", name: "Skills" },
  { id: "testimonials", name: "Testimonials" },
  { id: "contact", name: "Contact" },
];

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: SITE_NAME,
  url: SITE_URL,
  image: OG_IMAGE,
  jobTitle: "Full Stack Software Developer",
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Haridwar",
    addressRegion: "Uttarakhand",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/kartikeysharmaks",
    "https://www.linkedin.com/in/kartikeysharmaks/",
    "https://www.instagram.com/kartikeysharmaks/",
    "https://twitter.com/Kartikey0302",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "React Native",
    "TypeScript",
    "MongoDB",
    "Sanity CMS",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_TITLE,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#person` },
};

export const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: SITE_TITLE,
  description: SITE_DESCRIPTION,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#person` },
  primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
  inLanguage: "en",
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `${SITE_NAME} — Web & Mobile Development`,
  url: SITE_URL,
  image: OG_IMAGE,
  description: SITE_DESCRIPTION,
  areaServed: "Worldwide",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Haridwar",
    addressCountry: "IN",
  },
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: NAV_SECTIONS.map((section, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: section.name,
    item: `${SITE_URL}/#${section.id}`,
  })),
};

export const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    personSchema,
    websiteSchema,
    profilePageSchema,
    professionalServiceSchema,
    breadcrumbSchema,
  ],
};
