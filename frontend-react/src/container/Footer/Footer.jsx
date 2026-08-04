import { useState } from "react";
import { Reveal } from "../../components/ui/Reveal";

import {
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import { BsTwitter } from "react-icons/bs";
import { HiPaperAirplane } from "react-icons/hi";

import { writeClient } from "../../lib/sanity";
import { BrutalButton } from "../../components/ui/BrutalButton";

import "./Footer.scss";

const SOCIAL = [
  {
    Icon: FaInstagram,
    href: "https://www.instagram.com/kartikeysharmaks/",
    label: "Instagram",
    title: "Kartikey Sharma on Instagram",
    color: "pink",
  },
  {
    Icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/kartikeysharmaks/",
    label: "LinkedIn",
    title: "Kartikey Sharma on LinkedIn",
    color: "blue",
  },
  {
    Icon: FaGithub,
    href: "https://github.com/kartikeysharmaks",
    label: "GitHub",
    title: "Kartikey Sharma on GitHub",
    color: "black",
  },
  {
    Icon: FaYoutube,
    href: "https://www.youtube.com/@kartikeysharmaks",
    label: "YouTube",
    title: "Kartikey Sharma on YouTube",
    color: "red",
  },
  {
    Icon: BsTwitter,
    href: "https://x.com/kartikey0302",
    label: "X",
    title: "Kartikey Sharma on X",
    color: "sky",
  },
  {
    Icon: FaFacebook,
    href: "https://www.facebook.com/kartikeysharmaks/",
    label: "Facebook",
    title: "Kartikey Sharma on Facebook",
    color: "blue2",
  },
];

function Footer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      await writeClient.create({
        _type: "contact",
        ...form,
      });

      setSent(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Unable to send contact message:", error);
    } finally {
      setLoading(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section
        id="contact"
        className="contact section"
        aria-labelledby="contact-title"
      >
        <div className="container contact__grid">
          <Reveal as="div" direction="left" className="contact__headline">
            <p className="mono contact__label">/ Get in touch</p>

            <h2 id="contact-title" className="contact__title display">
              <span className="contact__title-line">Let&apos;s make</span>

              <span className="contact__title-line contact__title-line--noise">
                some <span className="contact__noise">noise.</span>
              </span>
            </h2>

            <p className="contact__sub">
              Open for freelance, contracts, and full-time software engineering
              opportunities. Based in Haridwar, Uttarakhand — working globally.
            </p>

            <a
              href="mailto:kartikeysharma1616@gmail.com"
              className="mono contact__email"
            >
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

                <div className="contact__field">
                  <label htmlFor="name" className="mono">
                    name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="email" className="mono">
                    email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    placeholder="you@domain.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

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
                  {loading ? (
                    "Sending…"
                  ) : (
                    <>
                      Send message <HiPaperAirplane aria-hidden="true" />
                    </>
                  )}
                </BrutalButton>
              </form>
            ) : (
              <div
                className="contact__success"
                role="status"
                aria-live="polite"
              >
                <h3 className="display">Message sent!</h3>

                <p>Thanks for reaching out — I&apos;ll reply soon.</p>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <div className="site-footer__brand">
            <h2 className="display site-footer__title">
              Built with
              <br />
              <span className="site-footer__yellow">coffee &amp;</span>
              <br />
              <span className="site-footer__red">curiosity.</span>
            </h2>

            <p className="mono site-footer__identity">
              Kartikey Sharma · @kartikeysharmaks
            </p>
          </div>

          <div className="site-footer__aside">
            <p className="mono site-footer__label">/ Find me elsewhere</p>

            <nav
              className="site-footer__social"
              aria-label="Kartikey Sharma social profiles"
            >
              {SOCIAL.map(({ Icon, href, label, title, color }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="me noopener noreferrer"
                  aria-label={`${label} — Kartikey Sharma`}
                  title={title}
                  className={`site-footer__icon site-footer__icon--${color}`}
                >
                  <Icon aria-hidden="true" />
                </a>
              ))}

              <a
                href="mailto:kartikeysharma1616@gmail.com"
                aria-label="Email Kartikey Sharma"
                title="Email Kartikey Sharma"
                className="site-footer__icon site-footer__icon--white"
              >
                <span aria-hidden="true">@</span>
              </a>
            </nav>

            <div className="site-footer__actions">
              <button
                type="button"
                className="brutal-btn brutal-btn--white"
                onClick={scrollTop}
              >
                Back to top ↑
              </button>

              <BrutalButton href="#contact" variant="red">
                Start a project +
              </BrutalButton>
            </div>
          </div>

          <p className="mono site-footer__copy">
            © {new Date().getFullYear()} Kartikey Sharma (@kartikeysharmaks) —
            All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
