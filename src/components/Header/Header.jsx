import React from "react";
import "./Header.css";

import Logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <div className="Header">
      <img className="Logo" src={Logo} />
      <ul className="Header-menu">
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
};
