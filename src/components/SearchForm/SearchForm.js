import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__form">
        <div className="search-form__loupe-icon"></div>
        <div className="search-form__input-container">
          <input
            className="search-form__input"
            type="text"
            placeholder="Фильм"
            required
          />
          <button
            className="search-form__button"
            type="submit"
            aria-label="Искать"
          ></button>
        </div>
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;