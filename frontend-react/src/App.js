import "./App.scss";
import { About, Header, Footer, Work, Skills, Testimonials } from "./container";
import { Navbar } from "./components";
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <div className="app">
      <Helmet>
        <title>Kartikey Sharma | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Kartikey Sharma - Web Developer & Freelancer"
        />
        <meta
          name="google-site-verification"
          content="your-verification-code"
        />
        <link rel="canonical" href="https://kartikeysharmaks.vercel.app/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://kartikeysharmaks.vercel.app",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "About",
                item: "https://kartikeysharmaks.vercel.app/#about",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Work",
                item: "https://kartikeysharmaks.vercel.app/#work",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Skills",
                item: "https://kartikeysharmaks.vercel.app/#skills",
              },
              {
                "@type": "ListItem",
                position: 5,
                name: "Contact",
                item: "https://kartikeysharmaks.vercel.app/#contact",
              },
            ],
          })}
        </script>
      </Helmet>

      <Navbar />
      <main role="main">
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
