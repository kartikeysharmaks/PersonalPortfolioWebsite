import { useState } from "react";
import "./Navbar.scss";
import { images } from "../../constants";
import { HiX, HiMenuAlt4 } from "react-icons/hi";
import { motion } from "framer-motion";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.portfolio} alt="logo - Kartikey Sharma Portfolio Frontend Developer(React.js)" />
      </div>
      <ul className="app__navbar-link">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app_flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`} aria-label={`${item} - Kartikey Sharma (Software Developer)`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} aria-label={`${item} - Kartikey Sharma (Software Developer)`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
