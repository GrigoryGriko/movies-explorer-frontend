import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

function AuthBottom() {
  return (
  <section className="auth-bottom" aria-label="Действие с авторизацией">
    <Switch>
      <Route path="/signup">
        <button className="auth-bottom__button-auth link-hover">
          Зарегистрироваться
        </button>
        <div className="auth-bottom__wrapper-text">
          <p className="auth-bottom__caption">
            Уже зарегистрированы?
          </p>
          <Link to="/signin" className="auth-bottom__link-auth link-hover">
            Войти
          </Link>
        </div>
      </Route>

      <Route path="/signin">
        <button className="auth-bottom__button-auth auth-bottom__button-auth_route-signin link-hover">
          Войти
        </button>
        <div className="auth-bottom__wrapper-text">
          <p className="auth-bottom__caption">
            Еще не зарегистрированы?
          </p>
          <Link to="/signup" className="auth-bottom__link-auth link-hover">
            Регистрация
          </Link>
        </div>
      </Route>

      <Route path="/profile">
        <div className="auth-bottom__wrapper-error">
          <p className="auth-bottom__input-error">
            При обновлении профиля произошла ошибка.
          </p>
        </div>
        <button className="auth-bottom__button-auth auth-bottom__button-auth_route-profile link-hover">
          Сохранить
        </button>
      </Route>
    </Switch>
  </section>
  )
}

export default AuthBottom;
