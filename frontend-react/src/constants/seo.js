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
  jobTitle: "Freelance Web & App Developer",
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Haridwar",
    addressRegion: "Uttarakhand",
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "Organization",
    name: "Self-Employed"
  },
  nationality: {
    "@type": "Country",
    name: "India"
  },
  knowsLanguage: [
    "English",
    "Hindi"
  ],
  sameAs: [
    "https://github.com/kartikeysharmaks",
    "https://www.linkedin.com/in/kartikeysharmaks/",
    "https://www.instagram.com/kartikeysharmaks/",
    "https://www.facebook.com/kartikeysharma1616",
    "https://x.com/kartikey0302",              // X (Twitter)
    "https://www.threads.com/@kartikeysharmaks",  // Threads
    "https://www.youtube.com/@kartikeysharmaks",  // YouTube
    "https://www.behance.net/kartikeysharmaks",   // Behance
    "https://www.producthunt.com/@kartikeysharmaks",
    "https://medium.com/@kartikeysharmaks",
    "https://dev.to/kartikeysharmaks",
    "https://hashnode.com/@kartikeysharmaks",
    "https://stackoverflow.com/users/21231774/kartikeysharmaks",
    "https://codepen.io/kartikeysharmaks",
    "https://codesandbox.io/u/kartikeysharmaks",
    "https://www.pinterest.com/kartikeysharmaks/"
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "React Native",
    "MongoDB",
    "Sanity CMS",
    "REST APIs",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Responsive Web Design",
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "Web Application Development",
    "Mobile Application Development",
    "Progressive Web Apps",
    "UI/UX Development",
    "Performance Optimization",
    "Search Engine Optimization (SEO)",
    "API Integration",
    "E-commerce Development",
    "Custom Web Applications",
    "AI-Powered Web Applications",
    "Software Engineering",
    "Cloud Deployment",
    "Vercel",
    "Web Development",
    "Mobile Development",
    "Full Stack Development",
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
  mainEntity: { "@id": `${SITE_URL}/#person` },
  about: { "@id": `${SITE_URL}/#person` },
  primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
  inLanguage: "en",
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#service`,
  name: "Kartikeysharmaks - Freelance Web & App Developer",
  url: SITE_URL,
  image: OG_IMAGE,
  description: SITE_DESCRIPTION,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Haridwar",
    addressRegion: "Uttarakhand",
    addressCountry: "IN",
  },
  areaServed: ["Worldwide", "India"],
  hasMap: "https://www.google.com/maps/search/?api=1&query=Kartikeysharmaks+-+Freelance+Web+%26+App+Developer",
  sameAs: [
    "https://www.google.com/search?q=Kartikeysharmaks+-+Freelance+Web+%26+App+Developer",
    "https://github.com/kartikeysharmaks",
    "https://www.linkedin.com/in/kartikeysharmaks/",
    "https://www.facebook.com/kartikeysharma1616",
    "https://www.instagram.com/kartikeysharmaks/",
  ],
  serviceType: [
    "Web Development",
    "AI Website Development",
    "Vibe Coding",
    "Mobile App Development",
    "Full Stack Development",
    "Custom Web Applications",
    "Full Stack Web Development",
    "Frontend Development",
    "Backend Development",
    "React.js Development",
    "Next.js Development",
    "Node.js Development",
    "React Native App Development",
    "Custom Website Development",
    "Custom Web Application Development",
    "E-commerce Website Development",
    "Progressive Web App (PWA) Development",
    "API Development & Integration",
    "Headless CMS Development",
    "Sanity CMS Development",
    "Performance Optimization",
    "Technical SEO",
    "Website Maintenance",
    "UI Implementation",
    "Website Redesign",
    "Software Consulting"
  ],
  identifier: {
    "@type": "PropertyValue",
    name: "Google Business Store Code",
    value: "09553991736879594017",
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
