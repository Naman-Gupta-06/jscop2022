import React from "react";
import "./Navbar.css";
import landingi from "../images/logo-white.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        {/* <img src="./images/logo-black.png" alt="Optica logo" /> */}
        <img src={landingi} alt="Optica logo" className="logo" />
      </div>
      <div className="navbar__right">
        <h3> <a href="#about">About</a> </h3>
        <h3> <a href="#timeline">Timeline</a> </h3>
        <h3> <a href="#events">Events</a> </h3>
        <h3> <a href="#contact-us">Contact</a> </h3>
        <h3> <a href="#speaker">speakers</a> </h3>
        <h3> <a href="#sponsor">sponsors</a> </h3>
        <h3> <a href="#team">Our Team</a> </h3>
      </div>
    </div>
  );
}

export default Navbar;