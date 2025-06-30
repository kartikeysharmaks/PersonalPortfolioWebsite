import "./Header.scss";
import { images } from "../../constants";
import { Appwrap } from "../../Wrapper";

function Header() {
  return (
    <header
      id="home"
      className="app__header app__flex"
      role="banner"
      aria-label="Hero section for Kartikey Sharma"
    >
      <section className="app__header-info" aria-labelledby="intro-heading">
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span aria-hidden="true" role="img">
              👋
            </span>
            <div className="badge-text">
              <p id="intro-heading" className="p-text">
                Hello, I am
              </p>
              <h1 className="head-text" aria-label="Kartikey Sharma">
                Kartikey
              </h1>
            </div>
          </div>
          <div className="tag-cmp app__flex" aria-label="Professional roles">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </section>
      <section className="app__header-img" aria-hidden="true">
        <img
          src={images.cropped}
          alt="Portrait of Kartikey Sharma"
          className="profile-bg"
          loading="eager"
          decoding="async"
          width="300"
          height="300"
          fetchpriority="high"
        />
        <img
          className="overlay__circle"
          src={images.circle}
          alt=""
          loading="lazy"
          decoding="async"
          width="320"
          height="320"
          aria-hidden="true"
          fetchpriority="high"
        />
      </section>
      <section
        className="app__header-circles"
        aria-label="Technologies I work with"
      >
        {[images.Reactnative, images.redux, images.sass].map((icon, index) => (
          <div
            className="circle-cmp app__flex"
            key={`tech-circle-${index}`}
            aria-label={`Technology ${index + 1}`}
          >
            <img
              src={icon}
              alt={`Technology logo ${index + 1}`}
              loading="lazy"
              decoding="async"
              width="50"
              height="50"
            />
          </div>
        ))}
      </section>
    </header>
  );
}

export default Appwrap(Header, "home");
