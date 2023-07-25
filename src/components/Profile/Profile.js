import { React } from "react";
import Header from "../Header/Header";
import "./Profile.css";
import userData from "../../utils/myUserData";

function Profile() {
  const { name, email } = userData;

  return (
    <>
      <Header isLoggedIn={true} />
      <section className="profile">
        <h1 className="profile__title">{`Привет, ${name}!`}</h1>
        <form className="profile__form">
          <fieldset className="profile__form-fieldset">
            <label className="profile__form-field">Имя</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Имя"
              className="profile__item"
              required
              minLength="2"
              maxLength="40"
              value={name || ""}
              disabled={true}
            />
          </fieldset>
          <fieldset className="profile__form-fieldset">
            <label className="profile__form-field">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              className="profile__item"
              required
              value={email || ""}
              disabled={true}
            />
          </fieldset>
          <div className="profile__buttons-container">
            <button
              className="profile__button profile__button_edit"
              type="submit"
            >
              Редактировать
            </button>
            <button
              className="profile__button profile__button_exit"
              type="submit"
            >
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Profile;