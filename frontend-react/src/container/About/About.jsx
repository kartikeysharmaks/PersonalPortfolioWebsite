import React from "react";
import "./About.scss";
import { useState, useEffect } from "react";
import { urlFor, client } from "../../client";
import { Appwrap, Motionwrap } from "../../Wrapper";

function About() {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type== "abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Design </span>
        <br />
        means <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <div className="app__profile-item" key={about.title + index}>
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Appwrap(
  Motionwrap(About, "app__about"),
  "about",
  "app__whitebg"
);
