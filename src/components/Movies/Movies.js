import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import movies from '../../utils/movies';
import './Movies.css';

const isLoading = false;

function Movies() {
  return (
    <div className='movies'>
      <Header loggedIn={true} />
      <SearchForm />
        {isLoading ? <Preloader /> :
          <MoviesCardList movie={movies} />
        }
      <Footer />
    </div>
  );
};

export default Movies;
