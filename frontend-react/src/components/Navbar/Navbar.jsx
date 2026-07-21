import { useState, useEffect } from "react";
import { BrutalButton } from "../ui/BrutalButton";
import { useActiveSection } from "../../hooks/useActiveSection";
import "./Navbar.scss";

const LINKS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection([
    "home",
    ...LINKS.map((l) => l.id),
    "testimonials",
  ]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (id) =>
    activeSection === id || (id === "about" && activeSection === "home");

  return (
    <header
      className={`nav ${scrolled ? "nav--scrolled" : ""}`}
      role="banner"
    >
      <div className="nav__sticky">
        <div className="nav__inner container">
          <a href="#home" className="nav__logo" aria-label="Kartikey Sharma — Home">
            <span className="nav__logo-mark" aria-hidden="true" />
            <span className="nav__logo-text">Kartikey.</span>
          </a>

          <nav className="nav__links" aria-label="Primary">
            {LINKS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`nav__link ${isActive(id) ? "nav__link--active" : ""}`}
                aria-current={isActive(id) ? "page" : undefined}
              >
                {label}
              </a>
            ))}
          </nav>

          <BrutalButton href="#contact" variant="black" className="nav__cta">
            Hire me
          </BrutalButton>

          <button
            type="button"
            className="nav__burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div
          className="nav__mobile nav__mobile--open"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <nav
            id="mobile-nav"
            className="nav__mobile-panel"
            aria-label="Mobile"
            onClick={(e) => e.stopPropagation()}
          >
            {LINKS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={isActive(id) ? "nav__link--active" : ""}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
            <BrutalButton
              href="#contact"
              variant="red"
              onClick={() => setOpen(false)}
            >
              Hire me →
            </BrutalButton>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
