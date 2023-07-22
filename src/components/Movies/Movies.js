import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './Movies.css';
import movies from '../../utils/movies';

const isLoading = false;

function Movies() {
  return (
    <div className='movies'>
      <Header isLoggedIn={true} />
      <SearchForm />
        {isLoading ? <Preloader /> :
          <MoviesCardList movie={movies} />
        }
      <Footer />
    </div>
  );
};

export default Movies;
