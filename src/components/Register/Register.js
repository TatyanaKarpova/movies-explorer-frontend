import React from "react";
import "./Register.css";
import Form from "../Form/Form";

function Register() {
  return (
    <Form
      title="Добро пожаловать!"
      buttonName="Зарегистрироваться"
      text="Уже зарегистрированы?"
      linkName="Войти"
      path="/signin"
    >
      <fieldset className="form__fieldset">
        <div className="form__field">
          <label className="form__label">Имя</label>
          <input
            className="form__input"
            type="text"
            id="name"
            name="name"
            placeholder="Имя"
            required
            minLength="2"
            maxLength="40"
          ></input>
          <span className="form__error" id="form-error-name"></span>
        </div>
        <div className="form__field">
          <label className="form__label">E-mail</label>
          <input
            className="form__input"
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            required
          ></input>
          <span className="form__error" id="form-error-email"></span>
        </div>
        <div className="form__field">
          <label className="form__label">Пароль</label>
          <input
            className="form__input"
            type="password"
            id="password"
            name="password"
            placeholder="Пароль"
            required
          ></input>
          <span className="form__error" id="form-error-password"></span>
        </div>
      </fieldset>
    </Form>
  );
}

export default Register;