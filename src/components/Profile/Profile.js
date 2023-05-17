import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";

import {useInput, displayError} from '../../utils/ValidationForm';

import AuthBottom from '../Register/AuthBottom/AuthBottom';
import * as auth from '../../utils/Auth';

function Profile(props) {
  const [isButtonEdit, setIsButtonEdit] = useState(false);
  const [dataForm, setDataForm] = useState({});

  const {
    name,
    email,
  } = props.setValidation(props, useInput, useEffect);

  function handleClick() {
    setIsButtonEdit(true);
  }

  function handleChange(e) {
    const {name, value} = e.target;
    setDataForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { name, email} = dataForm;
    auth.register(name, email)
    .then((res) => {
      props.handleLogin({name, email});
    })
    .catch(() => {
      console.log('Что-то пошло не так! Попробуйте ещё раз.');
    });
  }
  
  return (
    <main className="content section">
      <section className="profile">
        <h2 className="profile__greeting-text">Привет, Григорий!</h2>


        {isButtonEdit ?
          <form 
            className="auth-form__wrapper"
          >
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
                  handleChange(e);
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
                  handleChange(e);
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
          </form>
          :
          <>
            <div className="profile__stroke-info profile__stroke-info_fix-size">
              <p className="profile__username-text">
                Имя
              </p>
              <p className="profile__username-data">
                Григорий
              </p>
            </div>

            <div className="profile__stroke-line profile__stroke-line_fix-size"></div>

            <div className="profile__stroke-info profile__stroke-info_fix-size">
              <p className="profile__username-text">
                E-mail
              </p>
              <p className="profile__username-data">
                griko1996@gmail.com
              </p>
            </div>
          </>
        }

        
        {isButtonEdit ?
          <div className="profile__edit-button">
            <AuthBottom
              isDisabled={props.isDisabled}
              handleSubmit={handleSubmit}
            />
          </div>
          :
          <button 
            onClick={handleClick}
            className="profile__edit-info button-hover"
          >
            Редактировать
          </button>
        }
        
        <button className="profile__logout button-hover">
          Выйти из аккаунта
        </button>
      </section>
    </main>
  )
}

export default withRouter(Profile);
