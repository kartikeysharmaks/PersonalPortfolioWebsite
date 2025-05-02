import React from "react";
import "./Header.scss";
import { images } from "../../constants";
import { Appwrap } from "../../Wrapper";

function Header() {
  return (
    <div id="home" className="app__header app__flex">
      <div className="app__header-info">
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Kartikey</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </div>
      <div className="app__header-img">
        <img src={images.cropped} alt="profile" className="profile-bg" />
        <img
          className="overlay__circle"
          src={images.circle}
          alt="profile_circle"
        />
      </div>
      <div className="app__header-circles">
        {[images.Reactnative, images.redux, images.sass].map(
          (circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle" />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Appwrap(Header, "home");
