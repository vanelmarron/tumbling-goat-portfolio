import "./Header.scss";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import HeaderMenu from "../HeaderMenu/HeaderMenu";
import menuIcon from "../../assets/icons/menu_24.svg";
import logo from "../../assets/logos/main-logo.png";

function Header({ }) {

  return (
    <header className="header">
      <img src={logo} alt="Tumbling Goat Logo" className="header__logo" />
      <ul className="header__list" >
        <li className="header__item" >Home</li>
        <li className="header__item">About</li>
        <li className="header__item">Find Us</li>
        <li className="header__item">Order Form</li>
      </ul>
    </header>
  );
}

export default Header;
