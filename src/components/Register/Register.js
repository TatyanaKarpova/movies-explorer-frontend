import React from "react";
import "./Register.css";
import Form from "../Form/Form";
import useFormValidation from "../../hooks/useFormValidation";

function Register({ onRegister }) {
  const { values, errors, handleInputChange } = useFormValidation();

  return (
    <Form
      title="Добро пожаловать!"
      buttonName="Зарегистрироваться"
      text="Уже зарегистрированы?"
      linkName="Войти"
      path="/signin"
      onSubmit={onRegister}
    >
      <fieldset className="form__fieldset">
        <div className="form__field">
          <label className="form__label">Имя</label>
          <input
            className={
              errors.name ? "form__input form__input_type_error" : "form__input"
            }
            type="text"
            id="name"
            name="name"
            placeholder="Имя"
            required
            minLength="2"
            maxLength="40"
            value={values.name || ""}
            pattern="^(?!\s)[A-Za-zА-Яа-я\-\s]+$"
            onChange={handleInputChange}
          ></input>
          <span className={errors.name ? "form__error" : ""}>
            {errors.name}
          </span>
        </div>
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

export default Register;