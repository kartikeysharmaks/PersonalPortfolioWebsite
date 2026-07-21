import "./SkillsMarquee.scss";

const DEFAULT_SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "React Native",
  "MongoDB",
  "Sanity",
  "Tailwind",
  "Framer Motion",
  "Sass",
  "GraphQL",
  "Figma",
];

function splitRows(items, rows = 3) {
  const result = Array.from({ length: rows }, () => []);
  items.forEach((item, i) => {
    result[i % rows].push(item);
  });
  return result;
}

function MarqueeRow({ items, direction = "left", duration, rowIndex }) {
  const doubled = [...items, ...items];

  return (
    <div
      className={`skills-marquee__row skills-marquee__row--${rowIndex} skills-marquee__row--${direction}`}
      style={{ "--marquee-duration": `${duration}s` }}
    >
      <div className="skills-marquee__track">
        {doubled.map((name, i) => (
          <span
            key={`${name}-${rowIndex}-${i}`}
            className={`skills-marquee__item ${
              i % 3 === 0
                ? "skills-marquee__item--accent"
                : i % 3 === 1
                  ? "skills-marquee__item--outline"
                  : ""
            }`}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SkillsMarquee({ skillNames = [] }) {
  const items = skillNames.length > 0 ? skillNames : DEFAULT_SKILLS;
  const rows = splitRows(items, 3);

  const configs = [
    { direction: "left", duration: 38 },
    { direction: "right", duration: 32 },
    { direction: "left", duration: 44 },
  ];

  return (
    <div className="skills-marquee" aria-hidden="true">
      {rows.map((rowItems, i) => (
        <MarqueeRow
          key={i}
          items={rowItems.length ? rowItems : items}
          direction={configs[i].direction}
          duration={configs[i].duration}
          rowIndex={i}
        />
      ))}
    </div>
  );
}
