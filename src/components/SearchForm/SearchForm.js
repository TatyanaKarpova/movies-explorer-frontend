import { React, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm({ handleSearchMovie }) {
  const { pathname } = useLocation();

  const [error, setError] = useState(false);
  const [shortFilms, setShortFilms] = useState(false);

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (pathname === "/movies") {
      const savedInputValue = localStorage.getItem("query");
      const savedShortFilms = JSON.parse(localStorage.getItem("shortFilms"));
      if (savedInputValue) {
        setInputValue(savedInputValue);
      }
      if (savedShortFilms) {
        setShortFilms(savedShortFilms);
      }
      if (savedInputValue || savedShortFilms === true) {
        handleSearchMovie(savedInputValue, savedShortFilms);
      }
    }
  }, []);

  const handleInputValue = (evt) => {
    setInputValue(evt.target.value);
  };

  const handleCheckboxSwitch = () => {
    setShortFilms(!shortFilms);
    handleSearchMovie(inputValue, !shortFilms);
    if (pathname === "/movies") {
      localStorage.setItem("shortFilms", !shortFilms);
    }
  };

  const handleSearchMovieSubmit = (evt) => {
    evt.preventDefault();
    if (!inputValue) {
      setError(true);
      evt.target.elements["search-query"].focus();
      return;
    }
    setError(false);
    if (pathname === "/movies") {
      localStorage.setItem("query", inputValue);
    }
    handleSearchMovie(inputValue, shortFilms);
  };

  return (
    <section className="search-form">
      <form
        className="search-form__form"
        onSubmit={handleSearchMovieSubmit}
        autoComplete="off"
        noValidate
      >
        <div className="search-form__loupe-icon"></div>
        <div className="search-form__input-container">
          <input
            className="search-form__input"
            type="text"
            placeholder="Фильм"
            required
            name="search"
            onChange={handleInputValue}
            value={inputValue}
          />
          <button
            className="search-form__button"
            type="submit"
            aria-label="Искать"
          ></button>
        </div>
        <span
          className={error ? "search-form__error" : "search-form__error_hidden"}
        >
          {error}
        </span>
      </form>
      <FilterCheckbox value={shortFilms} onChange={handleCheckboxSwitch} />
    </section>
  );
}

export default SearchForm;