import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.REACT_APP_SANITY_PROJECT_ID;
const dataset = "production";
const apiVersion = "2022-02-01";
const CACHE_KEY = "portfolio_data_v6";

/** Read-only client — no token so Sanity CDN can serve cached responses. */
export const readClient = sanityClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

/** Write client — used only for contact form submissions. */
export const writeClient = sanityClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

/** @deprecated Use readClient — kept for backward compatibility. */
export const client = readClient;

const builder = imageUrlBuilder(readClient);

export const urlFor = (source) => builder.image(source);

export const urlForImage = (
  source,
  { width = 800, quality = 80, format = "webp" } = {}
) => {
  if (!source) return "";
  return builder
    .image(source)
    .width(width)
    .quality(quality)
    .format(format)
    .auto("format")
    .url();
};

export const PORTFOLIO_QUERY = `{
  "abouts": *[_type == "abouts"] { title, description, imgUrl },
  "works": *[_type == "works"] | order(_createdAt desc) {
    _id, title, description, projectLink, codeLink, imgUrl, tags
  },
  "experiences": *[_type == "experiences"] { year, works },
  "educations": *[_type == "educations"] | order(coalesce(sortOrder, 999) asc, _createdAt asc) {
    _id, degree, institution, period, description, tag, sortOrder
  },
  "skills": *[_type == "skills"] { name, bgColor, icon },
  "testimonials": *[_type == "testimonials"] { name, company, imgurl, feedback },
  "brands": *[_type == "brands"] { _id, name, imgUrl }
}`;

/** Returns cached portfolio data (including stale) for instant first paint. */
export function readPortfolioCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { data } = JSON.parse(raw);
    return data ?? null;
  } catch {
    return null;
  }
}

function writePortfolioCache(data) {
  try {
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ data, timestamp: Date.now() })
    );
  } catch {
    /* quota exceeded or private mode */
  }
}

export async function fetchPortfolioData() {
  const data = await readClient.fetch(PORTFOLIO_QUERY);
  writePortfolioCache(data);
  return data;
}
