import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import headerLogo from '../../images/logo.svg';
import './Header.css';

function Header () {
    return (
        <header className='header'>
            <Link to='/'>
                <img className='header__logo' src={headerLogo} alt='Лого'/>
            </Link>
            <Navigation />
        </header>
    )
};

export default Header;