import React from "react";
import "./Header.css";

import Logo from "../../assets/logo.png";
import { Link } from "react-scroll";
export const Header = () => {
  return (
    <div className="Header">
      <img className="Logo" src={Logo} />
      <ul className="Header-menu">
        <li>
          <Link to="Home">Home</Link>
        </li>
        <li>
          <Link to="Programs" smooth={true}>
            Programs
          </Link>
        </li>
        <li>
          <Link to="WhyUS" smooth={true}>
            Why us
          </Link>
        </li>
        <li>
          <Link to="Plans" smooth={true}>
            Plans
          </Link>
        </li>
      </ul>
    </div>
  );
};
