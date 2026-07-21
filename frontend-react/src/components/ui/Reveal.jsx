import { useInView } from "../../hooks/useInView";

export function Reveal({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
  direction = "up",
  ...rest
}) {
  const [ref, inView] = useInView({ once: true, rootMargin: "-60px" });

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${direction}${inView ? " reveal--visible" : ""}${className ? ` ${className}` : ""}`}
      style={{ "--reveal-delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
