import { useState } from "react";
import { Reveal } from "../../components/ui/Reveal";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { HiPaperAirplane } from "react-icons/hi";
import { writeClient } from "../../lib/sanity";
import { BrutalButton } from "../../components/ui/BrutalButton";
import "./Footer.scss";

const SOCIAL = [
  { Icon: FaGithub, href: "https://github.com/kartikeysharmaks", label: "GitHub", color: "black" },
  { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/kartikeysharmaks/", label: "LinkedIn", color: "blue" },
  { Icon: BsTwitter, href: "https://twitter.com/Kartikey0302", label: "Twitter", color: "sky" },
  { Icon: FaInstagram, href: "https://www.instagram.com/kartikeysharmaks/", label: "Instagram", color: "pink" },
  { Icon: FaFacebook, href: "https://www.facebook.com/kartikeysharma1616", label: "Facebook", color: "blue2" },
];

function Footer() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    writeClient
      .create({ _type: "contact", ...form })
      .then(() => setSent(true))
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <section id="contact" className="contact section" aria-label="Contact">
        <div className="container contact__grid">
          <Reveal
            as="div"
            direction="left"
            className="contact__headline"
          >
            <p className="mono contact__label">/ Get in touch</p>
            <h2 className="contact__title display">
              <span className="contact__title-line">Let&apos;s make</span>
              <span className="contact__title-line contact__title-line--noise">
                some <span className="contact__noise">noise.</span>
              </span>
            </h2>
            <p className="contact__sub">
              Open for freelance, contracts, and full-time roles. Based in
              Haridwar — working globally.
            </p>
            <a href="mailto:kartikeysharma1616@gmail.com" className="mono contact__email">
              kartikeysharma1616@gmail.com
            </a>
          </Reveal>

          <Reveal
            as="div"
            direction="right"
            className="contact__form-wrap brutal-card"
            delay={100}
          >
            {!sent ? (
              <form onSubmit={handleSubmit} className="contact__form">
                <p className="mono contact__form-label">/ Send a message</p>
                {["name", "email"].map((field) => (
                  <div key={field} className="contact__field">
                    <label htmlFor={field} className="mono">
                      {field}
                    </label>
                    <input
                      id={field}
                      name={field}
                      type={field === "email" ? "email" : "text"}
                      placeholder={field === "name" ? "Your name" : "you@domain.com"}
                      value={form[field]}
                      onChange={handleChange}
                      required
                    />
                  </div>
                ))}
                <div className="contact__field">
                  <label htmlFor="message" className="mono">
                    message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell me about your project…"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <BrutalButton type="submit" variant="red" disabled={loading}>
                  {loading ? "Sending…" : (
                    <>
                      Send message <HiPaperAirplane />
                    </>
                  )}
                </BrutalButton>
              </form>
            ) : (
              <div className="contact__success">
                <h3 className="display">Message sent!</h3>
                <p>Thanks for reaching out — I&apos;ll reply soon.</p>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      <footer className="site-footer" role="contentinfo">
        <div className="container site-footer__inner">
          <div className="site-footer__brand">
            <h2 className="display site-footer__title">
              Built with
              <br />
              <span className="site-footer__yellow">coffee &amp;</span>
              <br />
              <span className="site-footer__red">curiosity.</span>
            </h2>
          </div>

          <div className="site-footer__aside">
            <p className="mono site-footer__label">/ Find me elsewhere</p>
            <div className="site-footer__social">
              {SOCIAL.map(({ Icon, href, label, color }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`site-footer__icon site-footer__icon--${color}`}
                >
                  <Icon />
                </a>
              ))}
              <a
                href="mailto:kartikeysharma1616@gmail.com"
                aria-label="Email"
                className="site-footer__icon site-footer__icon--white"
              >
                @
              </a>
            </div>
            <div className="site-footer__actions">
              <button type="button" className="brutal-btn brutal-btn--white" onClick={scrollTop}>
                Back to top ↑
              </button>
              <BrutalButton href="#contact" variant="red">
                Start a project +
              </BrutalButton>
            </div>
          </div>

          <p className="mono site-footer__copy">
            © {new Date().getFullYear()} Kartikey Sharma — All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
