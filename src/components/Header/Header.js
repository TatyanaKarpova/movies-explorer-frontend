import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';
import headerLogo from '../../images/logo.svg';
import '../../vendor/hover.css';

function Header() {
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

/*
function Header({loggedIn}) {
    return (
        <header className={loggedIn ? 'header' : 'header_type_light'}>
            <Link to='/'>
                <img className='header__logo hover' src={headerLogo} alt='Лого'/>
            </Link>
            <Navigation loggedIn={loggedIn} />
        </header>
    )
};
*/
