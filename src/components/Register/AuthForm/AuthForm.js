import React from 'react';

function AuthForm() {
  return (
  <section className="auth-form">
    <form className="auth-form__wrapper">
      <label className="auth-form__field">
        <p className="auth-form__caption">
          Имя
        </p>
        <input className="auth-form__input"></input>
        <div className="auth-form__stroke-line"></div>

        <span className="auth-form__input-error" style={{ display: 'none' }}>Что-то пошло не так...</span>
      </label>

      <label className="auth-form__field">
        <p className="auth-form__caption">
          E-mail
        </p>
        <input className="auth-form__input"></input>
        <div className="auth-form__stroke-line"></div>

        <span className="auth-form__input-error" style={{ display: 'none' }}>Что-то пошло не так...</span>
      </label>

      <label className="auth-form__field">
        <p className="auth-form__caption">
          Пароль
        </p>
        <input className="auth-form__input auth-form__input-error-data"></input>
        <div className="auth-form__stroke-line"></div>

        <span className="auth-form__input-error">Что-то пошло не так...</span>
      </label>
    </form>
  </section>
  )
}

export default AuthForm;
