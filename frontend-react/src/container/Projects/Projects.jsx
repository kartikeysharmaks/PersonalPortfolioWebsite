import { useMemo, useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { usePortfolio } from "../../context/PortfolioContext";
import { urlForImage } from "../../lib/sanity";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { Reveal } from "../../components/ui/Reveal";
import { ProjectsSkeleton } from "../../components/Skeleton/Skeleton";
import "./Projects.scss";

const FILTERS = ["All", "UI/UX", "Web App", "Mobile App", "React JS"];
const TAG_COLORS = ["red", "blue", "yellow", "green"];

function Projects() {
  const { portfolio, loading } = usePortfolio();
  const works = useMemo(() => portfolio?.works ?? [], [portfolio?.works]);
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () =>
      filter === "All"
        ? works
        : works.filter((w) => w.tags?.includes(filter)),
    [works, filter]
  );

  return (
    <section id="projects" className="projects section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeader
          index="02"
          label="Projects"
          funk="Ship it loud."
          titleBefore="Things I've"
          highlight="shipped"
          highlightVariant="red"
          subtitle="Product, brand, and full-stack builds — from concept through deployment."
        />

        <div className="projects__filters" role="tablist" aria-label="Filter projects">
          {FILTERS.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={filter === item}
              className={`projects__filter ${filter === item ? "projects__filter--active" : ""}`}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {loading && works.length === 0 ? (
          <ProjectsSkeleton />
        ) : filtered.length === 0 ? (
          <p className="mono projects__empty">No projects in this category yet.</p>
        ) : (
          <div className="projects__grid">
            {filtered.map((project, i) => (
              <Reveal
                as="article"
                key={project._id}
                className={`projects__card brutal-card ${i % 2 === 1 ? "projects__card--offset" : ""}`}
                delay={(i % 4) * 60}
              >
                <div className="projects__img-wrap">
                  <span
                    className={`projects__tag projects__tag--${TAG_COLORS[i % TAG_COLORS.length]}`}
                  >
                    {project.tags?.[0] || "Case study"}
                  </span>
                  <img
                    src={urlForImage(project.imgUrl, { width: 700, quality: 85 })}
                    alt={project.title}
                    loading="lazy"
                    width="400"
                    height="280"
                  />
                  <div className="projects__overlay">
                    {project.projectLink && (
                      <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title}`}
                      >
                        <AiFillEye aria-hidden="true" />
                      </a>
                    )}
                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Source code for ${project.title}`}
                      >
                        <AiFillGithub aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="projects__body">
                  <h3 className="projects__title display">{project.title}</h3>
                  <p className="projects__desc">{project.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
