import { BrutalButton } from "../../components/ui/BrutalButton";
import "./Header.scss";

const profilePicUrl = `${process.env.PUBLIC_URL}/profilepic.webp`;

function Header() {
  return (
    <section id="home" className="hero section" aria-label="Introduction">
      <div className="container hero__grid">
        <div className="hero__content">
          <div className="hero__badges animate-hero-fade-up" style={{ animationDelay: "0.15s" }}>
            <span className="brutal-badge">
              <span className="brutal-badge__dot" aria-hidden="true" />
              Available for work
            </span>
            <span className="brutal-badge">Haridwar, India</span>
          </div>

          <p className="hero__funk display animate-hero-fade-up" style={{ animationDelay: "0.25s" }}>
            Let&apos;s make some{" "}
            <span className="hero__funk-accent">noise.</span>
          </p>

          <h1 className="hero__title display animate-hero-fade-up" style={{ animationDelay: "0.35s" }}>
            Kartikey Sharma
          </h1>

          <p className="hero__role mono animate-hero-fade-up" style={{ animationDelay: "0.45s" }}>
            {"// Full Stack Developer & Freelancer"}
          </p>

          <p className="hero__tagline animate-hero-fade-up" style={{ animationDelay: "0.55s" }}>
            Crafting bold digital experiences that punch above their weight —
            web, mobile, and everything in between.
          </p>

          <div className="hero__actions animate-hero-fade-up" style={{ animationDelay: "0.65s" }}>
            <BrutalButton href="#projects" variant="red">
              View work ↓
            </BrutalButton>
            <BrutalButton href="#contact" variant="white">
              ★ Work with me
            </BrutalButton>
          </div>
        </div>

        <div className="hero__visual animate-hero-visual">
          <div className="hero__frame brutal-card">
            <span className="hero__est mono">Est. 2020</span>
            <picture>
              <source
                media="(max-width: 480px)"
                srcSet={`${process.env.PUBLIC_URL}/profilepic-mobile.webp`}
                type="image/webp"
              />
              <img
                src={profilePicUrl}
                alt="Portrait of Kartikey Sharma"
                width="480"
                height="600"
                loading="eager"
                fetchpriority="high"
                decoding="async"
              />
            </picture>
            <div className="hero__sticker animate-hero-sticker">
              Open
              <br />
              for
              <br />
              projects
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;

