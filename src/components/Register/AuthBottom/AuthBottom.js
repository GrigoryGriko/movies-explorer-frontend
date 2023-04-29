import React from 'react';
import { Link } from 'react-router-dom';

function AuthBottom() {
  return (
  <section className="auth-bottom">
    <button className="auth-bottom__button-register link-hover">
      Зарегистрироваться
    </button>
    <div className="auth-bottom__wrapper-text">
      <p className="auth-bottom__caption">
        Уже зарегистрированы?
      </p>
      <Link to="/signin" className="auth-bottom__link-signin link-hover">
        Войти
      </Link>
    </div>
  </section>
  )
}

export default AuthBottom;
