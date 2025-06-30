import { useState, useEffect } from "react";
import "./About.scss";
import { urlFor, client } from "../../client";
import { Appwrap, Motionwrap } from "../../Wrapper";

function About() {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type== "abouts"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <section aria-labelledby="about-heading" className="app__about-section">
      <h2 id="about-heading" className="head-text">
        I know that <span>Good Design</span>
        <br />
        means <span>Good Business</span>
      </h2>
      <div className="app__profiles" >
        {abouts.map((about, index) => (
          <article
            className="app__profile-item"
            key={about.title + index}
            // role="listitem"
            aria-label={`About ${about.title}`}
          >
            <img
              src={urlFor(about.imgUrl)}
              alt={`Illustration representing ${about.title}`}
              loading="lazy"
              decoding="async"
              width="250"
              height="250"
              className="about-img"
            />
            <h3 className="bold-text">{about.title}</h3>
            <p className="p-text">{about.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Appwrap(
  Motionwrap(About, "app__about"),
  "about",
  "app__whitebg"
);

