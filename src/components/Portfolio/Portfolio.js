import "./Portfolio.css";
import "../../vendor/hover.css";

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__links'>
        <li className='portfolio__link-item'>
          <a
            className='portfolio__link hover'
            target='_blank'
            rel='noreferrer'
            href='https://github.com/TatyanaKarpova/how-to-learn'
          >
            Статичный сайт
            <p className='portfolio__link-arrow'>↗</p>
          </a>
        </li>
        <li className='portfolio__link-item'>
          <a
            className='portfolio__link hover'
            target='_blank'
            rel='noreferrer'
            href='https://github.com/TatyanaKarpova/russian-travel'
          >
            Адаптивный сайт
            <p className='portfolio__link-arrow'>↗</p>
          </a>
        </li>
        <li className='portfolio__link-item'>
          <a
            className='portfolio__link hover'
            target='_blank'
            rel='noreferrer'
            href='https://github.com/TatyanaKarpova/react-mesto-api-full-gha'
          >
            Одностраничное приложение
            <p className='portfolio__link-arrow'>↗</p>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;