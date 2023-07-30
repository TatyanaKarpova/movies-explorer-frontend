import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({ movie }) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__items">
        {movie.map((item) => (
          <MoviesCard key={item.id} movie={item} />
        ))}
      </ul>
      <button className="movies-card-list__button">Ещё</button>
    </section>
  );
}

export default MoviesCardList;