import { NavLink } from 'react-router-dom';
import promoImage from '../../images/promo-image.svg';
import './Promo.css';
import '../../vendor/hover.css';


function Promo() {
  return (
    <section className='promo'>
        <div className='promo__container'>
            <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
            <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и&nbsp;его создателя.</p>
            <NavLink to='/'>
                <button className='promo__button hover'>Узнать больше</button>
            </NavLink>
        </div>
        <img className='promo__image' src={promoImage} alt='Изображение, напоминающее земной шар'></img>
    </section>
  );
};

export default Promo;