import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Header from "./container/Header/Header";
import { Navbar } from "./components";
import {
  SITE_URL,
  SITE_NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  OG_IMAGE,
} from "./constants/site";
import { jsonLdGraph } from "./constants/seo";

const About = lazy(() => import("./container/About/About"));
const Projects = lazy(() => import("./container/Projects/Projects"));
const Education = lazy(() => import("./container/Education/Education"));
const Work = lazy(() => import("./container/Work/Work"));
const Skills = lazy(() => import("./container/Skills/Skills"));
const Testimonials = lazy(() => import("./container/Testimonials/Testimonials"));
const Footer = lazy(() => import("./container/Footer/Footer"));

function SectionFallback() {
  return <div className="section-fallback" aria-hidden="true" />;
}

function App() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{SITE_TITLE}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="keywords" content={SITE_KEYWORDS} />
        <meta name="author" content={SITE_NAME} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={SITE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={SITE_URL} />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:creator" content="@Kartikey0302" />

        <script type="application/ld+json">{JSON.stringify(jsonLdGraph)}</script>
      </Helmet>

      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />
      <main id="main-content">
        <Header />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Projects />
          <Education />
          <Work />
          <Skills />
          <Testimonials />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

export default App;
