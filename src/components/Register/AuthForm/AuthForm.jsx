import React, { useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import {useInput, displayError} from '../../../utils/ValidationForm';

function AuthForm(props) {
  const {
    name,
    email,
    password,
    isValid,
  } = props.useValidation(props, useInput, useEffect);

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
              name="name"
              type="text"
              onChange={e => {
                name.onChange(e);
                props.handleChange(e);
              }}
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
              name="email"
              type="email"
              onChange={e => {
                email.onChange(e);
                props.handleChange(e);
              }}
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
              name="password"
              type="password"
              onChange={e => {
                password.onChange(e);
                props.handleChange(e);
              }}
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
              name="email"
              type="email"
              onChange={e => {
                email.onChange(e);
                props.handleChange(e);
              }}
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
              name="password"
              type="password"
              onChange={e => {
                password.onChange(e);
                props.handleChange(e);
              }}
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
      </Switch>
    </form>
  </section>
  )
}

export default withRouter(AuthForm);
