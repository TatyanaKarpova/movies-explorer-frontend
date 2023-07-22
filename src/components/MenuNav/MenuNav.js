import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import './MenuNav.css';
import profileIcon from '../../images/profile-icon.svg';
import '../../vendor/hover.css';


function MenuNav() {

    const [isMenuClicked, setIsMenuClicked] = useState(false);

    function handleMenuClick() {
      setIsMenuClicked(!isMenuClicked);
    }

    return (
        <nav className={`menu-nav ${isMenuClicked ? 'menu-nav_mobile' : ''}`}>
            <button
                type='button'
                className={`menu-nav__button_desktop hover ${
                    isMenuClicked
                    ? 'menu-nav__button_invisible'
                    : 'menu-nav__button hover'
                }`}
                onClick={handleMenuClick}
            ></button>
            <div className='menu-nav__links-container'>
                <NavLink to='/movies' className='menu-nav__link-movie hover menu-nav__link_active'>Фильмы</NavLink>
                <NavLink to='/saved-movies' className='menu-nav__link-movie hover'>Сохранённые фильмы</NavLink>
            </div>
            <div className='menu-nav__links-container'>
                <NavLink to='/profile' className='menu-nav__link-account hover'>Аккаунт</NavLink>
                <NavLink to='/profile' className='menu-nav__link-account hover'>
                    <div className='menu-nav__profile-icon-wrapper hover'>
                        <img className='menu-nav__profile-icon hover' src={profileIcon} alt='Лого'></img>
                    </div>
                </NavLink>
            </div>
        </nav>
    )
};

export default MenuNav;