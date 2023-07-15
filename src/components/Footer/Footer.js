import './Footer.css';
import '../../vendor/hover.css';

function Footer() {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.</h2>
      <div className='footer__container'>
        <p className='footer__copyright'>&copy; 2023</p>
        <ul className='footer__links'>
            <li className='footer__link-item'>
                <a className='footer__link hover' target='_blank' rel='noreferrer' href='https://practicum.yandex.ru/'>Яндекс.Практикум</a>
            </li>
            <li className='footer__link-item'>
                <a className='footer__link hover' target='_blank' rel='noreferrer' href='https://github.com/TatyanaKarpova'>Github</a>
            </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;