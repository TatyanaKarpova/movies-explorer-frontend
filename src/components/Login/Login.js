import React from "react";
import "./Login.css";
import Form from "../Form/Form";
import useFormValidation from "../../hooks/useFormValidation";

function Login({ onlogin }) {
  const { values, errors, handleInputChange } = useFormValidation();

  return (
    <Form
      title="Рады видеть!"
      buttonName="Войти"
      text="Ещё не зарегистрированы?"
      linkName="Регистрация"
      path="/signup"
      onSubmit={onlogin}
    >
      <fieldset className="form__fieldset">
        <div className="form__field">
          <label className="form__label">E-mail</label>
          <input
            className={
              errors.email
                ? "form__input form__input_type_error"
                : "form__input"
            }
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            required
            value={values.email || ""}
            pattern="^.+@.+\..+$"
            onChange={handleInputChange}
          ></input>
          <span className={errors.email ? "form__error" : ""}>
            {errors.email}
          </span>
        </div>
        <div className="form__field">
          <label className="form__label">Пароль</label>
          <input
            className={
              errors.password
                ? "form__input form__input_type_error"
                : "form__input"
            }
            type="password"
            id="password"
            name="password"
            placeholder="Пароль"
            required
            minLength="3"
            value={values.password || ""}
            onChange={handleInputChange}
          ></input>
          <span className={errors.password ? "form__error" : ""}>
            {errors.password}
          </span>
        </div>
      </fieldset>
    </Form>
  );
}

export default Login;
