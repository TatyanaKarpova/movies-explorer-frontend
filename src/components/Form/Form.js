import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Form.css";
import "../../vendor/hover.css";
import logo from "../../images/logo.svg";

function Form({ title, children, buttonName, linkName, path, text }) {
  const { pathname } = useLocation();

  return (
    <div className='form__container'>
      <Link to='/'>
        <img className='form__logo hover' src={logo} alt='Лого' />
      </Link>
      <h2 className='form__title'>{title}</h2>
      <form className='form'>
        {children}
        {pathname === "/signup" ? (
          <button
            className='form__button form__button_register hover'
            type='submit'
            aria-label='Зарегистрироваться'
          >
            {buttonName}
          </button>
        ) : (
          <button
            className='form__button form__button_login hover'
            type='submit'
            aria-label='Войти'
          >
            {buttonName}
          </button>
        )}
        <div className='form__wrapper'>
          <p className='form__text'>{text}</p>
          <NavLink to={path} className='form__link hover'>
            {linkName}
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default Form;
