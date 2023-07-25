import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Form.css";
import logo from "../../images/logo.svg";

function Form({ title, children, buttonName, linkName, path, text }) {
  const { pathname } = useLocation();

  return (
    <div className="form">
      <Link to="/">
        <img className="form__logo" src={logo} alt="Лого" />
      </Link>
      <h2 className="form__title">{title}</h2>
      <form className="form__container">
        {children}
        {pathname === "/signup" ? (
          <button
            className="form__button form__button_register"
            type="submit"
            aria-label="Зарегистрироваться"
          >
            {buttonName}
          </button>
        ) : (
          <button
            className="form__button form__button_login"
            type="submit"
            aria-label="Войти"
          >
            {buttonName}
          </button>
        )}
        <div className="form__wrapper">
          <p className="form__text">{text}</p>
          <NavLink to={path} className="form__link">
            {linkName}
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default Form;
