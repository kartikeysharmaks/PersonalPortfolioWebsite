import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <FaGithub onClick={()=>window.open('https://github.com/kartikeysharmaks',"_blank")} />
      </div>
      <div>
        <FaLinkedinIn onClick={()=>window.open('https://www.linkedin.com/in/kartikeysharmaks/',"_blank")} />
      </div>{" "}
      <div>
        <FaFacebook onClick={()=>window.open('https://www.facebook.com/kartikey.sharma.9480111',"_blank")}/>
      </div>{" "}
      <div>
        <BsInstagram onClick={()=>window.open('https://www.instagram.com/kartikey_sharma.ks/',"_blank")}/>
      </div>{" "}
      <div>
        <BsTwitter onClick={()=>window.open('https://twitter.com/Kartikey0302',"_blank")} />
      </div>
    </div>
  );
};

export default SocialMedia;
