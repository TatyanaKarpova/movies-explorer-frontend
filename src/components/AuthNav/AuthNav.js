import React from "react";
import { NavLink } from "react-router-dom";
import "./AuthNav.css";

function AuthNav() {
  return (
    <nav className="auth-nav">
      <NavLink to="/signup" className="auth-nav__link">
        Регистрация
      </NavLink>
      <NavLink to="/signin" className="auth-nav__link-button">
        Войти
      </NavLink>
    </nav>
  );
}

export default AuthNav;