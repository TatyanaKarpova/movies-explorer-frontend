import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const history = useNavigate();
  const goBack = () => history(-1);

  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">Страница не найдена</p>
      <button onClick={goBack} className="not-found__button">
        Назад
      </button>
    </section>
  );
}

export default NotFound;