import { useState } from "react";
import { images } from "../../constants";
import { Appwrap, Motionwrap } from "../../Wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const contact = {
      _type: "contact",
      name,
      email,
      message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <h2 className="head-text" aria-label="Contact Invitation">Take a coffee & chat with me</h2>
      <div className="app__footer-cards" aria-label="Contact Information">
        <div className="app__footer-card">
          <img
            src={images.email}
            alt="Email icon"
            loading="lazy"
            decoding="async"
            width="24"
            height="24"
          />
          <a
            href="mailto:kartikeysharma1616@gmail.com"
            className="p-text"
            aria-label="Send email to Kartikey Sharma"
          >
            kartikeysharma1616@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img
            src={images.mobile}
            alt="Phone icon"
            loading="lazy"
            decoding="async"
            width="24"
            height="24"
          />
          <a
            href="tel:+917466887311"
            className="p-text"
            aria-label="Call Kartikey Sharma"
          >
            +91 7466887311
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form
          className="app__footer-form app__flex"
          onSubmit={handleSubmit}
          aria-label="Contact Form"
        >
          <div className="app__flex form-group">
            <label htmlFor="name" className="visually-hidden">Name</label>
            <input
              className="p-text"
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={handleChangeInput}
              required
              aria-required="true"
            />
          </div>
          <div className="app__flex form-group">
            <label htmlFor="email" className="visually-hidden">Email</label>
            <input
              className="p-text"
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={handleChangeInput}
              required
              aria-required="true"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="visually-hidden">Message</label>
            <textarea
              className="p-text"
              id="message"
              name="message"
              placeholder="Your Message"
              value={message}
              onChange={handleChangeInput}
              rows="5"
              required
              aria-required="true"
            ></textarea>
          </div>
          <button
            type="submit"
            className="p-text"
            aria-label="Send message"
            disabled={loading}
          >
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </form>
      ) : (
        <div role="status" aria-live="polite">
          <h3 className="head-text">
            Thank you for <span>getting in touch!</span>
          </h3>
        </div>
      )}
    </>
  );
};

export default Appwrap(
  Motionwrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
