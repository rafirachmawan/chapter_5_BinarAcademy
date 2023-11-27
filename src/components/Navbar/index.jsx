import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h1>Logo</h1>
      </div>
      <div className="navbar-right">
        <p>Our Services</p>
        <p>Why Us</p>
        <p>Testimonila</p>
        <p>Faq</p>
      </div>
    </div>
  );
};

export default Navbar;
