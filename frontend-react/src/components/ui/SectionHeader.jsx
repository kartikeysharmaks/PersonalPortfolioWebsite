import { Reveal } from "./Reveal";

export function SectionHeader({
  index,
  label,
  funk,
  titleBefore,
  highlight,
  highlightVariant = "yellow",
  titleAfter,
  subtitle,
  className = "",
}) {
  return (
    <header className={`section-header ${className}`.trim()}>
      <Reveal as="span" className="section-tag" delay={0}>
        {index} / {label}
      </Reveal>

      {funk && (
        <Reveal as="p" className="section-funk display" delay={40}>
          {funk}
        </Reveal>
      )}

      <Reveal as="h2" className="section-title" delay={80} id={`${label.toLowerCase()}-title`}>
        <span className="section-title__line">
          {titleBefore}
          {highlight && (
            <>
              {" "}
              <span
                className={`section-highlight section-highlight--${highlightVariant}`}
              >
                {highlight}
              </span>
            </>
          )}
          {titleAfter ? ` ${titleAfter}` : ""}
        </span>
      </Reveal>

      {subtitle && (
        <Reveal as="p" className="section-sub" delay={120}>
          {subtitle}
        </Reveal>
      )}
    </header>
  );
}
