import { useMemo } from "react";
import { usePortfolio } from "../../context/PortfolioContext";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { Reveal } from "../../components/ui/Reveal";
import { EducationSkeleton } from "../../components/Skeleton/Skeleton";
import { FALLBACK_EDUCATIONS } from "../../constants/fallbackEducation";
import "./Education.scss";

const CARD_COLORS = ["yellow", "green", "blue", "red"];

function Education() {
  const { portfolio, loading } = usePortfolio();
  const fromCms = useMemo(
    () => portfolio?.educations ?? [],
    [portfolio?.educations]
  );

  const educations = useMemo(() => {
    if (fromCms.length > 0) return fromCms;
    return FALLBACK_EDUCATIONS;
  }, [fromCms]);

  const usingFallback = fromCms.length === 0 && !loading;

  return (
    <section
      id="education"
      className="education section"
      aria-labelledby="education-title"
    >
      <div className="container">
        <SectionHeader
          index="03"
          label="Education"
          funk="Brains on, always learning."
          titleBefore="School &"
          highlight="self-taught"
          highlightVariant="green"
          subtitle="Formal training mixed with a stubborn habit of learning in public."
        />

        {usingFallback && (
          <p className="education__cms-hint mono" role="status">
            Add your degrees in Sanity Studio → <strong>Education</strong> to replace
            these placeholders.
          </p>
        )}

        {loading && fromCms.length === 0 ? (
          <EducationSkeleton />
        ) : (
          <div className="education__grid">
            {educations.map((item, index) => (
              <Reveal
                as="article"
                key={item._id || `${item.degree}-${index}`}
                className={`education__card brutal-card education__card--${CARD_COLORS[index % CARD_COLORS.length]}`}
                delay={index * 70}
              >
                <div className="education__card-head">
                  <span className="education__icon" aria-hidden="true">
                    🎓
                  </span>
                  {item.period && (
                    <span className="education__period mono">{item.period}</span>
                  )}
                </div>
                <h3 className="education__degree display">
                  {item.degree}
                </h3>
                <p className="education__institution mono">{item.institution}</p>
                {item.description && (
                  <p className="education__desc">{item.description}</p>
                )}
                {item.tag && (
                  <span className="education__tag mono">{item.tag}</span>
                )}
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Education;
