import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import '../../vendor/hover.css';

function MoviesCardList({ movie }) {

  return (
    <section className='movies-card-list'>
        <ul className='movies-card-list__items'>
            {movie.map(item => <MoviesCard key={item._id} movie={item} />)}
        </ul>
        <button className='movies-card-list__button hover'>Ещё</button>
    </section>
  );
};

export default MoviesCardList;
