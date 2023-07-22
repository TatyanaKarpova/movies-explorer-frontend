import Portfolio from '../Portfolio/Portfolio';
import './AboutMe.css';
import myPhoto from '../../images/photo-of-mine.jpeg';
import '../../vendor/hover.css';

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__container'>
        <img className='about-me__info-photo' src={myPhoto} alt='Лого'></img>
        <div className='about-me__info-container'>
            <h3 className='about-me__info-title'>Татьяна</h3>
            <p className='about-me__info-subtitle'>Веб-разработчик, 26 лет</p>
            <p className='about-me__info-description'>
                Я&nbsp;родилась в&nbsp;Забайкальском крае, в&nbsp;данный момент проживаю в&nbsp;г. Калининград. Имею высшее лингвистическое образование. Увлекаюсь чтением книг в&nbsp;жанре фэнтези, домашними HIIT-тренировками и&nbsp;люблю готовить выпечку. Год назад приняла для себя решение о&nbsp;смене профессиональной деятельности, таким образом попала на&nbsp;факультет &laquo;Веб-разработки в&nbsp;&laquo;Яндекс.Практикум&raquo;. Невероятно нравится данное направление, планирую и&nbsp;дальше самостоятельно развиваться в&nbsp;нем.
            </p>
            <a className='about-me__info-link hover' target='_blank' rel='noreferrer' href='https://github.com/TatyanaKarpova'>Github</a>
        </div>
      </div>
      <Portfolio />
    </section>
  );
};

export default AboutMe;
