import { Link } from "react-router-dom";
import "./NotFound.css";
import "../../vendor/hover.css";

function NotFound() {
  return (
    <section className='not-found'>
      <h1 className='not-found__title'>404</h1>
      <p className='not-found__text'>Страница не найдена</p>
      <Link to='/' className='not-found__link hover'>
        Назад
      </Link>
    </section>
  );
}

export default NotFound;