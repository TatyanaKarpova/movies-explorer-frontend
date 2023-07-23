import React from "react";
import { NavLink } from "react-router-dom";
import "./AuthNav.css";
import "../../vendor/hover.css";

function AuthNav() {
  return (
    <nav className='auth-nav'>
      <NavLink to='/signup' className='auth-nav__link hover'>
        Регистрация
      </NavLink>
      <NavLink to='/signin'>
        <button className='auth-nav__button hover' aria-label='Войти'>
          Войти
        </button>
      </NavLink>
    </nav>
  );
}

export default AuthNav;