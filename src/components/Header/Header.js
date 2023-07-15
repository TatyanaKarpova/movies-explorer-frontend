import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import headerLogo from '../../images/logo.svg';
import '../../vendor/hover.css';
import './Header.css';

function Header () {
    return (
        <header className='header'>
            <Link to='/'>
                <img className='header__logo hover' src={headerLogo} alt='Лого'/>
            </Link>
            <Navigation />
        </header>
    )
};

export default Header;