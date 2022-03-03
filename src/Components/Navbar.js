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
        <h3>About</h3>
        <h3>Timeline</h3>
        <h3>Events</h3>
        <h3>Contact</h3>
        <h3>speakers</h3>
        <h3>sponsors</h3>
        <h3>Our Team</h3>
      </div>
    </div>
  );
}

export default Navbar;
