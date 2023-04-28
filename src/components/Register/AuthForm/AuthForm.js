import React from 'react';

function AuthForm() {
  return (
  <section className="auth-form">
    <form className="auth-form__wrapper">
      <p className="auth-form__caption">
        Имя
      </p>
      <input className="auth-form__input"></input>
      <div className="auth-form__stroke-line"></div>

      <p className="auth-form__caption">
        E-mail
      </p>
      <input className="auth-form__input"></input>
      <div className="auth-form__stroke-line"></div>

      <p className="auth-form__caption">
        Пароль
      </p>
      <input className="auth-form__input"></input>
      <div className="auth-form__stroke-line"></div>
    </form>
  </section>
  )
}

export default AuthForm;
