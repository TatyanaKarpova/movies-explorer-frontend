import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";
import headerLogo from "../../images/logo.svg";

function Header({ isLoggedIn }) {
  return (
    <header
      className={`header ${
        isLoggedIn ? "header_type_white" : "header_type_pink"
      }`}
    >
      <Link to="/">
        <img className="header__logo" src={headerLogo} alt="Лого" />
      </Link>
      <Navigation isLoggedIn={isLoggedIn} />
    </header>
  );
}

export default Header;