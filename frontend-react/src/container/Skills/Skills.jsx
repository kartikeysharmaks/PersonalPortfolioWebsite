import { useState, useEffect } from "react";
import { Appwrap, Motionwrap } from "../../Wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';
    client.fetch(query).then((data) => setExperiences(data));
    client.fetch(skillsQuery).then((data) => setSkills(data));
  }, []);

  return (
    <section aria-labelledby="skills-heading">
      <h2 className="head-text" id="skills-heading">
        Skills & Experiences
      </h2>
      <div className="app__skills-container">
        <div className="app__skills-list" role="list" aria-label="Skill Icons">
          {skills?.map((skill, index) => (
            <div
              className="app__skills-item app__flex"
              key={skill.name + index}
              role="listitem"
              aria-label={`Skill: ${skill.name}`}
            >
              <div
                className="app__flex skill-icon-wrapper"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img
                  src={urlFor(skill.icon)}
                  alt={`Icon of ${skill.name}`}
                  loading="lazy"
                  decoding="async"
                  width="40"
                  height="40"
                />
              </div>
              <p className="p-text">{skill.name}</p>
            </div>
          ))}
        </div>
        <div className="app__skills-exp" aria-label="Experience Timeline">
          {experiences?.map((experience, expIndex) => (
            <div className="app__skills-exp-item" key={experience.year + expIndex}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <div className="app__skills-exp-works">
                {experience?.works?.map((work, workIndex) => (
                  <article
                    className="app__skills-exp-work"
                    key={`${work.name}-${workIndex}`}
                    aria-label={`Work: ${work.name} at ${work.company}`}
                  >
                    <h3 className="bold-text">{work.name}</h3>
                    <p className="p-text">{work.company}</p>
                    <p className="p-desc">{work.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Appwrap(
  Motionwrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
