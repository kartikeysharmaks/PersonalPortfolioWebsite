import { usePortfolio } from "../../context/PortfolioContext";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { Reveal } from "../../components/ui/Reveal";
import { WorkSkeleton } from "../../components/Skeleton/Skeleton";
import "./Work.scss";

const NODE_COLORS = ["red", "blue", "yellow", "green"];

function Work() {
  const { portfolio, loading } = usePortfolio();
  const experiences = portfolio?.experiences ?? [];

  let roleIndex = 0;

  return (
    <section id="work" className="work section" aria-labelledby="work-title">
      <div className="container">
        <SectionHeader
          index="04"
          label="Work"
          funk="Clocked hours, real wins."
          titleBefore="Where I've"
          highlight="worked"
          highlightVariant="yellow"
          subtitle="Teams, brands, and indie experiments I've contributed to over the years."
        />

        {loading && experiences.length === 0 ? (
          <WorkSkeleton />
        ) : (
          <div className="work__timeline">
            <div className="work__line" aria-hidden="true" />
            {experiences.map((exp) =>
              exp.works?.map((role, roleIdx) => {
                const side = roleIndex % 2 === 0 ? "left" : "right";
                const color = NODE_COLORS[roleIndex % NODE_COLORS.length];
                const key = `${exp.year}-${role.name}-${roleIdx}`;
                const idx = roleIndex;
                roleIndex += 1;

                return (
                  <Reveal
                    as="article"
                    key={key}
                    className={`work__item work__item--${side}`}
                    direction={side === "left" ? "left" : "right"}
                    delay={idx * 60}
                  >
                    <span
                      className={`work__node work__node--${color}`}
                      aria-hidden="true"
                    />
                    <div className="work__card brutal-card">
                      <span className="work__date mono">{exp.year}</span>
                      <h3 className="work__role display">{role.name}</h3>
                      <p className="work__company mono">↳ {role.company}</p>
                      <p className="work__desc">{role.desc}</p>
                    </div>
                  </Reveal>
                );
              })
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Work;
