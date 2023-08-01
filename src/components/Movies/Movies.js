import { useEffect, useState } from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import "./Movies.css";

function Movies({
  isLoading,
  movies,
  onSearch,
  onFilter,
  onMovieLike,
  onMovieDelete,
}) {
  const [values, setValues] = useState(
    JSON.parse(localStorage.getItem("search-new-movies")) || {
      search: "",
      shortFilms: false,
    }
  );

  useEffect(() => {
    localStorage.setItem("search-new-movies", JSON.stringify(values));
  }, [values]);

  const filterShortFilms = (_values) => {
    const newValues = {
      ...values,
      shortFilms: _values.shortFilms,
    };
    onFilter(newValues);
    setValues(newValues);
  };

  const searchNewMovies = (values) => {
    return onSearch(values).then(() => {
      setValues(values);
    });
  };

  return (
    <div className="movies">
      <Header isLoggedIn={true} />
      <main>
        <SearchForm
          name="search-new-movies"
          onSearch={searchNewMovies}
          onFilter={filterShortFilms}
          isLoading={isLoading}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            movie={movies}
            onMovieDelete={onMovieDelete}
            onMovieLike={onMovieLike}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Movies;
