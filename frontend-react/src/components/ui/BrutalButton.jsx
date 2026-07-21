export function BrutalButton({
  children,
  href,
  variant = "red",
  className = "",
  onClick,
  type = "button",
  ...rest
}) {
  const classes = `brutal-btn brutal-btn--${variant} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
