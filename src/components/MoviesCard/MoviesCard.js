import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard({ movie }) {
  const { pathname } = useLocation();

  const [isLiked, setisLiked] = React.useState(false);

  function handleMoviesCardLikeToogle() {
    setisLiked(!isLiked);
  }

  return (
    <li className="movies-card">
      <img
        className="movies-card__image"
        src={movie.image}
        alt={movie.title}
      ></img>
      <div className="movies-card__bottom-items-container">
        <div className="movies-card__info">
          <h2 className="movies-card__title">{movie.title}</h2>
          <p className="movies-card__duration">{movie.duration}</p>
        </div>
        {pathname === "/saved-movies" ? (
          <button
            className="movies-card__delete"
            aria-label="Удалить фильм из избранного"
          ></button>
        ) : (
          <button
            className={`movies-card__like ${
              isLiked ? "movies-card__like_active" : ""
            }`}
            type="button"
            aria-label="Добавить фильм в избранное"
            onClick={handleMoviesCardLikeToogle}
          ></button>
        )}
      </div>
    </li>
  );
}

export default MoviesCard;
