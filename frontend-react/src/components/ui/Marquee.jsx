export function Marquee({ items, className = "" }) {
  const doubled = [...items, ...items];

  return (
    <div className={`marquee ${className}`} aria-hidden="true">
      <div className="marquee__track">
        {doubled.map((item, i) => (
          <span
            key={`${item.text}-${i}`}
            className={`marquee__item ${item.outline ? "marquee__item--outline" : ""} ${item.accent ? "marquee__item--accent" : ""}`}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
