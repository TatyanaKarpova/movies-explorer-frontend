import { React, useState, useContext, useEffect } from "react";
import Header from "../Header/Header";
import "./Profile.css";
import useFormValidation from "../../hooks/useFormValidation";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Profile({ onClick, onSubmit }) {
  const currentUser = useContext(CurrentUserContext);

  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const {
    values,
    setValues,
    errors,
    isValid,
    successMessage,
    setSuccessMessage,
    errorMessage,
    setErrorMessage,
    handleInputChange,
  } = useFormValidation({ defaultIsValid: false });

  useEffect(() => {
    if (
      values.name !== currentUser.name ||
      values.email !== currentUser.email
    ) {
      setIsEnabled(true);
    } else {
      setIsEnabled(false);
    }
  }, [currentUser.name, currentUser.email, values.name, values.email]);

  useEffect(() => {
    setValues(currentUser);
  }, [setValues, currentUser]);

  function handleButtonChange() {
    setErrorMessage("");
    setSuccessMessage("");
    setIsVisible(true);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onSubmit({
      name: values.name,
      email: values.email,
    })
      .then((message) => {
        setSuccessMessage(message);
        setIsVisible(false);
      })
      .catch((exception) => {
        let { data, err } = exception;
        if (err) {
          return Promise.reject(err);
        }
        setErrorMessage(data.message);
        return Promise.reject(exception);
      });
  }

  return (
    <>
      <Header isLoggedIn={true} />
      <section className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <form className="profile__form" onSubmit={handleSubmit}>
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
              value={values.name || ""}
              disabled={isVisible ? false : true}
              pattern="^(?!\s)[A-Za-zА-Яа-я\-\s]+$"
              onChange={handleInputChange}
            />
          </fieldset>
          <span
            className={
              errors.name
                ? "profile__error"
                : "profile__error profile__error_type_margin"
            }
          >
            {errors.name}
          </span>
          <fieldset className="profile__form-fieldset">
            <label className="profile__form-field">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              className="profile__item"
              required
              value={values.email || ""}
              disabled={isVisible ? false : true}
              pattern="^.+@.+\..+$"
              onChange={handleInputChange}
            />
          </fieldset>
          <span
            className={
              errors.email
                ? "profile__error"
                : "profile__error profile__error_type_margin"
            }
          >
            {errors.email}
          </span>
          <div className="profile__buttons-container">
            {isVisible ? (
              <>
                <span
                  className={`profile__error profile__error_server ${
                    !errorMessage ? "profile__error_hidden" : ""
                  }`}
                >
                  {errorMessage}
                </span>
                <button
                  key="save"
                  className={
                    !isValid || !isEnabled
                      ? "profile__button profile__button_type_save profile__button_disabled"
                      : "profile__button profile__button_type_save"
                  }
                  type="submit"
                  disabled={isValid && isEnabled ? false : true}
                >
                  Сохранить
                </button>
              </>
            ) : (
              <>
                <span
                  className={`profile__success ${
                    !successMessage ? "profile__success_hidden" : ""
                  }`}
                >
                  {successMessage}
                </span>
                <button
                  key="edit"
                  className="profile__button profile__button_edit"
                  type="button"
                  onClick={handleButtonChange}
                >
                  Редактировать
                </button>
                <button
                  key="exit"
                  className="profile__button profile__button_exit"
                  type="button"
                  onClick={onClick}
                >
                  Выйти из аккаунта
                </button>
              </>
            )}
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