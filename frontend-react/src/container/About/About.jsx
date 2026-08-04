import { usePortfolio } from "../../context/PortfolioContext";
import { urlForImage } from "../../lib/sanity";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { Reveal } from "../../components/ui/Reveal";
import { AboutSkeleton } from "../../components/Skeleton/Skeleton";
import "./About.scss";

const CARD_COLORS = ["yellow", "green", "blue", "red"];

function About() {
  const { portfolio, loading } = usePortfolio();
  const abouts = portfolio?.abouts ?? [];

  return (
    <section id="about" className="about section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeader
          index="01"
          label="About"
          funk="Hot takes, cold code."
          titleBefore="What I"
          highlight="believe"
          highlightVariant="green"
          subtitle="Good design isn't decoration — it's how products earn trust, convert users, and scale with clarity."
        />

        <Reveal as="div" className="about__intro" delay={160}>
          <span className="about__intro-label mono">/ Who I am</span>

          <p className="about__intro-text">
            I&apos;m <strong>Kartikey Sharma</strong>, also known online as{" "}
            <span className="about__intro-handle mono">@kartikeysharmaks</span>.
            I&apos;m a Software Engineer and Full Stack Developer based in
            Haridwar, Uttarakhand, building modern web and mobile products while
            creating travel content across Uttarakhand and India.
          </p>
        </Reveal>

        {loading && abouts.length === 0 ? (
          <AboutSkeleton />
        ) : (
          <div className="about__grid">
            {abouts.map((item, index) => (
              <Reveal
                as="article"
                key={`${item.title}-${index}`}
                className={`about__card brutal-card about__card--${
                  CARD_COLORS[index % CARD_COLORS.length]
                }`}
                delay={index * 80}
              >
                <div className="about__card-top">
                  <span className="about__icon" aria-hidden="true">
                    ◆
                  </span>

                  <span className="about__index mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {item.imgUrl && (
                  <div className="about__img">
                    <img
                      src={urlForImage(item.imgUrl, {
                        width: 400,
                        quality: 82,
                      })}
                      alt={item.title || ""}
                      loading="lazy"
                      width="320"
                      height="200"
                    />
                  </div>
                )}

                <h3 className="about__card-title display">{item.title}</h3>

                <p className="about__card-desc">{item.description}</p>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default About;
