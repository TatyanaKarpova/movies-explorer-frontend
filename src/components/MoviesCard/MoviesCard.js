import { React, useContext } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import CurrentSavedMoviesContext from "../../contexts/CurrentSavedMoviesContext";

function MoviesCard({ movie, isLiked, onMovieDelete, onMovieLike }) {
  const { pathname } = useLocation();

  const currentSavedMovie = useContext(CurrentSavedMoviesContext);

  const removedMovie = isLiked
    ? movie
    : currentSavedMovie.find((item) => {
        return movie.id === item.movieId;
      });

  const handleMovieCardLike = () => {
    onMovieLike(movie);
  }

  const handleMovieCardLikeRemove = () => {
    onMovieDelete(removedMovie._id);
  }

  return (
    <li className="movies-card">
      <a
        className="movies-card__trailer-container"
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="movies-card__image"
          src={
            isLiked
              ? `${movie.image}`
              : `https://api.nomoreparties.co/${movie.image.url}`
          }
          alt={movie.nameRU}
        ></img>
      </a>
      <div className="movies-card__bottom-items-container">
        <div className="movies-card__info">
          <h2 className="movies-card__title">{movie.nameRU}</h2>
          <p className="movies-card__duration">{`${Math.floor(
            movie.duration / 60
          )}ч ${movie.duration % 60}м`}</p>
        </div>
        {pathname === "/saved-movies" ? (
          <button
            className="movies-card__delete"
            aria-label="Удалить фильм из избранного"
            onClick={handleMovieCardLikeRemove}
          ></button>
        ) : (
          <button
            className={`movies-card__like ${
              isLiked ? "movies-card__like_active" : ""
            }`}
            type="button"
            aria-label="Добавить фильм в избранное"
            onClick={handleMovieCardLike}
          ></button>
        )}
      </div>
    </li>
  );
}

export default MoviesCard;
