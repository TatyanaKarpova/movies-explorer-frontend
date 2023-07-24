import "./Promo.css";
import promoImage from "../../images/promo-image.svg";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <p className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и&nbsp;его
          создателя.
        </p>
        <a className="promo__link-button" href="#about-project">
          Узнать больше
        </a>
      </div>
      <img
        className="promo__image"
        src={promoImage}
        alt="Изображение, напоминающее земной шар"
      ></img>
    </section>
  );
}

export default Promo;