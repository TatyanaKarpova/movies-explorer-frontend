import { React, useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({ movie, isLiked, onMovieDelete, onMovieLike }) {
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [hiddenMovies, setHiddenMovies] = useState([]);

  const [isMaxMoviesNumber, setIsMaxMoviesNumber] = useState(0);
  const [isMoviesQty, setIsMoviesQty] = useState(0);

  useEffect(() => {
    setShownMoviesNumber();
    window.addEventListener("resize", () => {
      setTimeout(() => {
        setShownMoviesNumber();
      }, 500);
    });
  }, []);

  useEffect(() => {
    setDisplayedMovies(movie.slice(0, isMaxMoviesNumber));
    setHiddenMovies(movie.slice(isMaxMoviesNumber));
  }, [movie, isMaxMoviesNumber]);

  function showMoreFoundMovies() {
    const moviesList = [
      ...displayedMovies,
      ...hiddenMovies.slice(0, isMoviesQty),
    ];
    setDisplayedMovies(moviesList);
    setHiddenMovies(hiddenMovies.slice(isMoviesQty));
  }

  const setShownMoviesNumber = (windowWidth) => {
    if (windowWidth >= 1161) {
      setIsMaxMoviesNumber(12);
      setIsMoviesQty(3);
    } else if (windowWidth <= 1160) {
      setIsMaxMoviesNumber(8);
      setIsMoviesQty(2);
    } else {
      setIsMaxMoviesNumber(5);
      setIsMoviesQty(1);
    }
  };

  return (
    <section className="movies-card-list">
      {displayedMovies.length > 0 ? (
        <ul className="movies-card-list__items">
          {displayedMovies.map((item) => (
            <MoviesCard
              key={item.id || item.movieId}
              isLiked={isLiked}
              onMovieDelete={onMovieDelete}
              onMovieLike={onMovieLike}
            />
          ))}
        </ul>
      ) : (
        <div className="movies-card-list__text">Ничего не найдено</div>
      )}
      {displayedMovies.length > 0 && hiddenMovies.length > 0 && (
        <button
          className="movies-card-list__button"
          type="button"
          onClick={showMoreFoundMovies}
        >
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;