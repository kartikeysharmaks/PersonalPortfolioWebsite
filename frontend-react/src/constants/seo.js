import {
  SITE_URL,
  SITE_NAME,
  SITE_HANDLE,
  SITE_TITLE,
  SITE_DESCRIPTION,
  OG_IMAGE,
} from "./site";


export const personSchema = {
  "@type": "Person",
  "@id": `${SITE_URL}#person`,
  name: SITE_NAME,
  alternateName: [
    SITE_HANDLE,
    `@${SITE_HANDLE}`,
  ],
  url: `${SITE_URL}`,
  image: {
    "@type": "ImageObject",
    "@id": `${SITE_URL}#primaryimage`,
    url: OG_IMAGE,
  },
  jobTitle: "Software Engineer",
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Haridwar",
    addressRegion: "Uttarakhand",
    addressCountry: "IN",
  },
  nationality: {
    "@type": "Country",
    name: "India",
  },
  knowsLanguage: [
    "English",
    "Hindi",
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
    "https://medium.com/@kartikeysharmaks",
    "https://dev.to/kartikeysharmaks",
    "https://hashnode.com/@kartikeysharmaks",
    "https://stackoverflow.com/users/21231774/kartikeysharmaks",
    "https://codepen.io/kartikeysharmaks",
    "https://codesandbox.io/u/kartikeysharmaks",
    "https://www.pinterest.com/kartikeysharmaks/",
    "https://leetcode.com/u/kartikeysharmaks/",
    "https://www.freelancer.in/u/Kartikeysharmaks",
    "https://www.reddit.com/user/Kartikeysharmaks",
    "https://remoteok.com/@kartikeysharmaks",
    "https://wellfound.com/u/kartikeysharmaks",
    "https://www.facebook.com/kartikeysharmaks/",
  ],

  knowsAbout: [
    "Software Engineering",
    "Frontend Development",
    "Full Stack Development",
    "Web Development",
    "Mobile App Development",
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "React Native",
    "Travel Content Creation",
    "Travel Photography",
    "Uttarakhand Travel",
    "India Travel",
    "MongoDB",
    "Sanity CMS",
    "REST APIs",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Responsive Web Design",
    "Backend Development",
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
    "Cloud Deployment",
    "Vercel",
    "Mobile Development",
    "Full Stack Development",
  ],
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE_URL}#website`,
  url: `${SITE_URL}`,
  name: SITE_NAME,
  alternateName: SITE_HANDLE,
  description: SITE_DESCRIPTION,
  inLanguage: "en-IN",
  publisher: {
    "@id": `${SITE_URL}#person`,
  },
};

export const profilePageSchema = {
  "@type": "ProfilePage",
  "@id": `${SITE_URL}#webpage`,
  url: `${SITE_URL}`,
  name: SITE_TITLE,
  headline: SITE_TITLE,
  description: SITE_DESCRIPTION,
  isPartOf: {
    "@id": `${SITE_URL}#website`,
  },
  mainEntity: {
    "@id": `${SITE_URL}#person`,
  },
  about: {
    "@id": `${SITE_URL}#person`,
  },
  primaryImageOfPage: {
    "@id": `${SITE_URL}#primaryimage`,
  },
  inLanguage: "en-IN",
};


export const jsonLdGraph = {
  "@context": "https://schema.org",

  "@graph": [
    personSchema,
    websiteSchema,
    profilePageSchema,
  ],
};
