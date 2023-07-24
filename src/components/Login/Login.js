import React from "react";
import "./Login.css";
import Form from "../Form/Form";

function Login() {
  return (
    <Form
      title="Рады видеть!"
      buttonName="Войти"
      text="Ещё не зарегистрированы?"
      linkName="Регистрация"
      path="/signup"
    >
      <fieldset className="form__fieldset">
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

export default Login;