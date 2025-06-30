import { useEffect, useState } from "react";
import "./Work.scss";
import { Appwrap, Motionwrap } from "../../Wrapper";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { urlFor, client } from "../../client";
import { motion } from "framer-motion";

function Work() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type== "works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
      setFilterWork(
        item === "All" ? works : works.filter((work) => work.tags.includes(item))
      );
    }, 500);
  };

  return (
    <section aria-labelledby="portfolio-heading">
      <h2 className="head-text" id="portfolio-heading">
        My Creative <span><br />Portfolio</span> And <span>Works</span>
      </h2>
      <div className="app__work-filter" role="tablist" aria-label="Work Filters">
        {["UI/UX", "Web App", "Mobile App", "React JS", "All"].map((item, index) => (
          <button
            key={item + index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
            role="tab"
            aria-selected={activeFilter === item}
            aria-label={`Filter by ${item}`}
          >
            {item}
          </button>
        ))}
      </div>
      <motion.div
        className="app__work-portfolio"
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        // role="list"
        aria-label="Portfolio Projects"
      >
        {filterWork.map((work) => (
          <article
            className="app__work-item app__flex"
            key={work._id}
            // role="listitem"
            aria-label={`Project: ${work.title}`}
          >
            <div className="app__work-img app__flex">
              <img
                src={urlFor(work.imgUrl)}
                alt={`Screenshot of project ${work.title}`}
                loading="lazy"
                decoding="async"
                width="300"
                height="200"
                crossorigin="anonymous"
              />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: "easeInOut", staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                {work.projectLink && (
                  <a
                    href={work.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${work.title} live`}
                  >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                )}
                {work.codeLink && (
                  <a
                    href={work.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View code of ${work.title} on GitHub`}
                  >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                )}
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h3 className="bold-text">{work.title}</h3>
              <p className="p-text mt-10">{work.description}</p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags?.[0]}</p>
              </div>
            </div>
          </article>
        ))}
      </motion.div>
    </section>
  );
}

export default Appwrap(
  Motionwrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
