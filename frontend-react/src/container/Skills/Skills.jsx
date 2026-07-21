import { useMemo } from "react";
import { usePortfolio } from "../../context/PortfolioContext";
import { urlForImage } from "../../lib/sanity";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { Reveal } from "../../components/ui/Reveal";
import { SkillsMarquee } from "../../components/SkillsMarquee";
import { SkillsSkeleton } from "../../components/Skeleton/Skeleton";
import "./Skills.scss";

const CATEGORIES = [
  { key: "frontend", label: "Frontend", accent: "red", keywords: ["react", "next", "html", "css", "sass", "tailwind", "vue", "typescript", "javascript", "redux"] },
  { key: "backend", label: "Backend", accent: "blue", keywords: ["node", "python", "api", "graphql", "mongo", "express"] },
  { key: "mobile", label: "Mobile", accent: "yellow", keywords: ["native", "flutter", "mobile", "android", "ios"] },
  { key: "tools", label: "Tools & Design", accent: "green", keywords: ["git", "figma", "sanity", "docker", "aws"] },
];

function categorizeSkill(name = "") {
  const lower = name.toLowerCase();
  for (const cat of CATEGORIES) {
    if (cat.keywords.some((k) => lower.includes(k))) return cat.key;
  }
  return "tools";
}

function Skills() {
  const { portfolio, loading } = usePortfolio();
  const skills = useMemo(() => portfolio?.skills ?? [], [portfolio?.skills]);

  const grouped = useMemo(() => {
    const map = Object.fromEntries(CATEGORIES.map((c) => [c.key, []]));
    skills.forEach((skill) => {
      const key = categorizeSkill(skill.name);
      map[key].push(skill);
    });
    return map;
  }, [skills]);

  const skillNames = useMemo(
    () => skills.map((s) => s.name).filter(Boolean),
    [skills]
  );

  return (
    <section
      id="skills"
      className="skills section section--dark"
      aria-labelledby="skills-title"
    >
      <div className="container">
        <SectionHeader
          index="05"
          label="Skills"
          funk="Stack goes brrr."
          titleBefore="Tools of the"
          highlight="trade"
          highlightVariant="yellow"
          subtitle="The stack I reach for when shipping fast, accessible, production-ready software."
        />

        <SkillsMarquee skillNames={skillNames} />

        {loading && skills.length === 0 ? (
          <SkillsSkeleton />
        ) : (
          <div className="skills__grid">
            {CATEGORIES.map((cat, i) => (
              <Reveal
                key={cat.key}
                className={`skills__card brutal-card skills__card--${cat.accent}`}
                delay={i * 70}
              >
                <span className={`skills__accent skills__accent--${cat.accent}`} />
                <p className="skills__label mono">{cat.label}</p>
                <ul className="skills__list">
                  {(grouped[cat.key].length ? grouped[cat.key] : []).map((skill) => (
                    <li key={skill.name} className="skills__item">
                      {skill.icon && (
                        <img
                          src={urlForImage(skill.icon, { width: 48, quality: 85 })}
                          alt=""
                          width="20"
                          height="20"
                          loading="lazy"
                        />
                      )}
                      <span>{skill.name}</span>
                    </li>
                  ))}
                  {!grouped[cat.key].length && (
                    <li className="skills__item skills__item--empty mono">—</li>
                  )}
                </ul>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;
