import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import "./SavedMovies.css";
import movies from "../../utils/movies";

function SavedMovies() {
  return (
    <>
      <Header isLoggedIn={true} />
      <main>
        <SearchForm />
        <MoviesCardList movie={movies} />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;