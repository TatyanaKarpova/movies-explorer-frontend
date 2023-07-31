import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Form.css";
import logo from "../../images/logo.svg";

function Form({
  title,
  children,
  linkName,
  path,
  text,
  onSubmitForm,
  values,
  resetForm,
  setErrorMessage
}) {

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
