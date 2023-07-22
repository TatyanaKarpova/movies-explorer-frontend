import { NavLink } from 'react-router-dom';
import './MoviesNav.css';
import profileIcon from '../../images/profile-icon.svg';
import '../../vendor/hover.css';


function MoviesNav() {
    return (
        <nav className='movies-nav'>
            <div className='movies-nav__links-container'>
                <NavLink to='/movies' className='movies-nav__link hover'>Фильмы</NavLink>
                <NavLink to='/saved-movies' className='movies-nav__link hover'>Сохранённые фильмы</NavLink>
            </div>
            <div className='movies-nav__links-container'>
                <NavLink to='/profile' className='movies-nav__link hover'>Аккаунт</NavLink>
                <NavLink to='/profile' className='movies-nav__link hover'>
                    <div className='movies-nav__profile-icon-wrapper hover'>
                        <img className='movies-nav__profile-icon hover' src={profileIcon} alt='Лого'></img>
                    </div>
                </NavLink>
            </div>
        </nav>
    )
};

export default MoviesNav;