import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Form.css";
import logo from "../../images/logo.svg";
import useFormValidation from "../../hooks/useFormValidation";

function Form({
  title,
  children,
  buttonName,
  linkName,
  path,
  text,
  onSubmitForm,
}) {
  const { pathname } = useLocation();

  const { values, isValid, setErrorMessage, resetForm } = useFormValidation();

  function handleSubmit(evt) {
    evt.preventDefault();

    onSubmitForm(values)
      .then(() => {
        resetForm();
      })
      .catch((exception) => {
        let { data, err } = exception;
        if (err) {
          return Promise.reject(err);
        }
        setErrorMessage(data.message);
      });
  }

  return (
    <div className="form">
      <Link to="/">
        <img className="form__logo" src={logo} alt="Лого" />
      </Link>
      <h2 className="form__title">{title}</h2>
      <form className="form__container" onSubmit={handleSubmit} noValidate>
        {children}
        {pathname === "/signup" ? (
          <button
            className={
              isValid
                ? "form__button form__button_register"
                : "form__button form__button_register form__button_disabled"
            }
            type="submit"
            aria-label="Зарегистрироваться"
            disabled={isValid ? false : true}
          >
            {buttonName}
          </button>
        ) : (
          <button
            className={
              isValid
                ? "form__button form__button_login"
                : "form__button form__button_login form__button_disabled"
            }
            type="submit"
            aria-label="Войти"
            disabled={isValid ? false : true}
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
