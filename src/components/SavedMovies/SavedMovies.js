import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './SavedMovies.css';
import movies from '../../utils/movies';

function SavedMovies() {

  return (
    <>
      <Header isLoggedIn={true} />
      <SearchForm />
      <MoviesCardList movie={movies} />
      <Footer />
    </>
  );
};

export default SavedMovies;