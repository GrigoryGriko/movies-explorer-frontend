import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {useInput, displayError} from '../../../utils/ValidationForm';

function AuthForm() {
  const nameInput = {
    name: useInput('', {isEmpty: true, minLength: 3, maxLength: 30, isName: true}),
    email: useInput('', {isEmpty: true, isEmail: true}),
    password: useInput('', {isEmpty: true, minLength: 3, maxLength: 30}),
  }

  const {name, email, password} = nameInput;

  return (
  <section className="auth-form" aria-label="форма с полями ввода">
    <form 
      className="auth-form__wrapper"
    >
      <Switch>
        <Route path="/signup">
          <label className="auth-form__field">
            <span className="auth-form__caption">
              Имя
            </span>
            <input 
              className={`auth-form__input ${displayError(name).isValueError}`}
              type="text"
              onChange={e => name.onChange(e)}
              value={name.value}
            ></input>
            <span className={`auth-form__stroke-line ${displayError(name).isUnderlinError}`}></span>

            <span
              className="auth-form__input-error" 
              style={{ display: displayError(name).isTextError }}
            >
              {name.textError}
            </span>
          </label>

          <label className="auth-form__field">
            <span className="auth-form__caption">
              E-mail
            </span>
            <input 
              className={`auth-form__input ${displayError(email).isValueError}`}
              type="email"
              onChange={e => email.onChange(e)}
              value={email.value}
            ></input>
            <span className={`auth-form__stroke-line ${displayError(email).isUnderlinError}`}></span>

            <span
              className="auth-form__input-error" 
              style={{ display: displayError(email).isTextError }}
            >
              {email.textError}
            </span>
          </label>

          <label className="auth-form__field">
            <span className="auth-form__caption">
              Пароль
            </span>
            <input 
              className={`auth-form__input ${displayError(password).isValueError}`}
              type="password"
              onChange={e => password.onChange(e)}
              value={password.value}
            ></input>
            <span className={`auth-form__stroke-line ${displayError(password).isUnderlinError}`}></span>

            <span
              className="auth-form__input-error" 
              style={{ display: displayError(password).isTextError }}
            >
              {password.textError}
            </span>
          </label>
        </Route>

        <Route path="/signin">
          <label className="auth-form__field">
            <span className="auth-form__caption">
              E-mail
            </span>
            <input 
              className={`auth-form__input ${displayError(email).isValueError}`}
              type="email"
              onChange={e => password.onChange(e)}
              value={password.value}
            ></input>
            <span className={`auth-form__stroke-line ${displayError(email).isUnderlinError}`}></span>

            <span
              className="auth-form__input-error" 
              style={{ display: displayError(email).isTextError }}
            >
              {password.textError}
            </span>
          </label>

          <label className="auth-form__field auth-form__field_route-signin">
            <span className="auth-form__caption">
              Пароль
            </span>
            <input 
              className={`auth-form__input ${displayError(email).isValueError}`}
              type="password"
              onChange={e => password.onChange(e)}
              value={password.value}
            ></input>
            <span className={`auth-form__stroke-line ${displayError(password).isUnderlinError}`}></span>

            <span
              className="auth-form__input-error" 
              style={{ display: displayError(password).isTextError }}
            >
            </span>
          </label>
        </Route>
      </Switch>
    </form>
  </section>
  )
}

export default AuthForm;
