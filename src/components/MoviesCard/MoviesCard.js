import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import '../../vendor/hover.css';

function MoviesCard({ movie }) {

    const { pathname } = useLocation();

    const [isLiked, setisLiked] = React.useState(false);

    function handleMoviesCardLikeToogle() {
        setisLiked(!isLiked);
    }

    return (
        <section className='movies-card'>
            <img className='movies-card__image' src={movie.image} alt={movie.title}></img>
            <div className='movies-card__bottom-items-container'>
                <div className='movies-card__info'>
                    <h2 className='movies-card__title'>{movie.title}</h2>
                    <p className='movies-card__duration'>{movie.duration}</p>
                </div>
                {pathname === '/saved-movies' ? (
                    <button
                    className='movies-card__delete hover'
                    ></button>
                ) : (
                    <button 
                        className={`movies-card__like hover ${isLiked ? 'movies-card__like_active' : ''}`} 
                        type='button' 
                        onClick={handleMoviesCardLikeToogle}
                    ></button>
                )}
            </div>
        </section>
    );
};

export default MoviesCard;
