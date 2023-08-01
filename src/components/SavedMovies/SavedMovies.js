import { React, useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader.js";
import "./SavedMovies.css";
import CurrentSavedMoviesContext from "../../contexts/CurrentSavedMoviesContext";

function SavedMovies({ isLoading, onMovieDelete }) {
  const currentSavedMovie = useContext(CurrentSavedMoviesContext);

  const [values, setValues] = useState({
    search: "",
    shortFilms: false,
  });

  const [movies, setMovies] = useState(currentSavedMovie);

  useEffect(() => {
    handleUpdateMoviesList(values);
  }, [currentSavedMovie]);

  const handleFilterShortFilms = (_values) => {
    const newValues = {
      ...values,
      shortFilms: _values.shortFilms,
    };
    handleUpdateMoviesList(newValues);
    setValues(newValues);
  };

  const handleSearchSavedMovies = (values) => {
    handleUpdateMoviesList(values);
    setValues(values);
    return Promise.resolve();
  };

  const handleUpdateMoviesList = (values) => {
    const handleFilterMoviesByName = (movies, name) => {
      return movies.filter((item) => {
        return item.nameRU.toLowerCase().includes(name.toLowerCase());
      });
    };
    const handleFilterMoviesByDuration = (movies) => {
      return movies.filter((item) => {
        return item.duration <= 52;
      });
    };

    const shownMoviesList = handleFilterMoviesByName(
      currentSavedMovie,
      values.search
    );

    const filteredMoviesList = values.shortFilms
      ? handleFilterMoviesByDuration(shownMoviesList)
      : shownMoviesList;

    setMovies(filteredMoviesList);
  };

  return (
    <>
      <Header isLoggedIn={true} />
      <main>
        <SearchForm
          name="search-saved-movies"
          onSearch={handleSearchSavedMovies}
          onFilter={handleFilterShortFilms}
          isLoading={isLoading}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            movie={movies}
            isLiked={true}
            onMovieDelete={onMovieDelete}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;