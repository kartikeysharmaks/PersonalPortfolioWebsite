import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="app__social">
      <div
        style={{
          cursor: "pointer",
        }}
        // aria-label="Kartikey Sharma Github"
      >
        <FaGithub
          onClick={() =>
            window.open("https://github.com/kartikeysharmaks", "_blank")
          }
        />
      </div>
      <div
        style={{
          cursor: "pointer",
        }}
        // aria-label="Kartikey Sharma Linkedin"
      >
        <FaLinkedinIn
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/kartikeysharmaks/",
              "_blank"
            )
          }
        />
      </div>{" "}
      <div
        style={{
          cursor: "pointer",
        }}
        // aria-label="Kartikey Sharma Facebook"
      >
        <FaFacebook
          onClick={() =>
            window.open("https://www.facebook.com/kartikeysharma1616", "_blank")
          }
        />
      </div>{" "}
      <div
        style={{
          cursor: "pointer",
        }}
        // aria-label="Kartikey Sharma Instagram"
      >
        <BsInstagram
          onClick={() =>
            window.open("https://www.instagram.com/kartikeysharmaks/", "_blank")
          }
        />
      </div>{" "}
      <div
        style={{
          cursor: "pointer",
        }}
        // aria-label="Kartikey Sharma Twitter"
      >
        <BsTwitter
          onClick={() =>
            window.open("https://twitter.com/Kartikey0302", "_blank")
          }
        />
      </div>
    </div>
  );
}

export default SocialMedia;
