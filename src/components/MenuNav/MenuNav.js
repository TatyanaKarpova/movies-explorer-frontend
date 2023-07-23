import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./MenuNav.css";
import profileIcon from "../../images/profile-icon.svg";
import "../../vendor/hover.css";

function MenuNav() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  function handleMenuClick() {
    setIsMenuClicked(!isMenuClicked);
  }

  return (
    <>
      <nav className={`menu-nav ${isMenuClicked ? "menu-nav_mobile" : ""}`}>
        <div
          className={`menu-nav__links-container ${
            isMenuClicked ? "menu-nav__links-container_mobile" : ""
          }`}
        >
          <NavLink to='/' className='menu-nav__link-main hover'>
            Главная
          </NavLink>
          <NavLink
            to='/movies'
            className='menu-nav__link-movie hover menu-nav__link_active'
          >
            Фильмы
          </NavLink>
          <NavLink to='/saved-movies' className='menu-nav__link-movie hover'>
            Сохранённые фильмы
          </NavLink>
        </div>
        <div
          className={`menu-nav__links-container ${
            isMenuClicked ? "menu-nav__links-container_mobile" : ""
          }`}
        >
          <NavLink to='/profile' className='menu-nav__link-account hover'>
            Аккаунт
          </NavLink>
          <NavLink to='/profile' className='menu-nav__link-account hover'>
            <div className='menu-nav__profile-icon-wrapper hover'>
              <img
                className='menu-nav__profile-icon hover'
                src={profileIcon}
                alt='Лого'
              ></img>
            </div>
          </NavLink>
        </div>
      </nav>
      <div
        className={`menu-nav__overlay ${
          isMenuClicked ? "menu-nav__overlay_visible" : ""
        }`}
      ></div>
      <button
        type='button'
        className={`menu-nav__button_desktop hover ${
          isMenuClicked
            ? "menu-nav__button menu-nav__button_close"
            : "menu-nav__button menu-nav__button_menu hover"
        }`}
        aria-label='Открыть или закрыть меню'
        onClick={handleMenuClick}
      ></button>
    </>
  );
}

export default MenuNav;