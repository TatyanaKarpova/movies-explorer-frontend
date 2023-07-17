import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import headerLogo from '../../images/logo.svg';
import '../../vendor/hover.css';
import './Header.css';

function Header ({loggedIn}) {
    return (
        <header className={loggedIn ? 'header' : 'header_type_light'}>
            <Link to='/'>
                <img className='header__logo hover' src={headerLogo} alt='Лого'/>
            </Link>
            <Navigation loggedIn={loggedIn} />
        </header>
    )
};

export default Header;
