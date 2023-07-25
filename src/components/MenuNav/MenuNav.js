import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./MenuNav.css";
import profileIcon from "../../images/profile-icon.svg";

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
          <NavLink to="/" className="menu-nav__link menu-nav__link_type_main">
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className="menu-nav__link menu-nav__link_type_movie menu-nav__link_active"
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className="menu-nav__link menu-nav__link_type_movie"
          >
            Сохранённые фильмы
          </NavLink>
        </div>
        <div
          className={`menu-nav__links-container ${
            isMenuClicked ? "menu-nav__links-container_mobile" : ""
          }`}
        >
          <NavLink
            to="/profile"
            className="menu-nav__link menu-nav__link_type_account"
          >
            Аккаунт
          </NavLink>
          <NavLink
            to="/profile"
            className="menu-nav__link menu-nav__link_type_account"
          >
            <div className="menu-nav__profile-icon-wrapper">
              <img
                className="menu-nav__profile-icon"
                src={profileIcon}
                alt="Лого"
              ></img>
            </div>
          </NavLink>
        </div>
      </nav>
      <div
        className={`menu-nav-overlay ${
          isMenuClicked ? "menu-nav-overlay_visible" : ""
        }`}
      ></div>
      <button
        type="button"
        className={`menu-nav-button_desktop ${
          isMenuClicked
            ? "menu-nav-button menu-nav-button_close"
            : "menu-nav-button menu-nav-button_menu"
        }`}
        aria-label="Открыть или закрыть меню"
        onClick={handleMenuClick}
      ></button>
    </>
  );
}

export default MenuNav;