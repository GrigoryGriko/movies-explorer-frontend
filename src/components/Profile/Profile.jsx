import React, { useState, useEffect, useContext } from 'react';
import { withRouter } from "react-router-dom";

import {useInput, displayError} from '../../utils/ValidationForm';

import AuthBottom from '../Register/AuthBottom/AuthBottom';
import * as auth from '../../utils/Auth';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function Profile(props) {
  
  const {currentUser, setCurrentUser, signOut} = useContext(CurrentUserContext);

  const [isErrorText, setIsErrorText] = useState('');
  const [isButtonEdit, setIsButtonEdit] = useState(false);
  const [dataForm, setDataForm] = useState({name: '', email: ''});
  

  const {
    name,
    email,
  } = props.useValidation(props, useInput, useEffect);

  function handleClick() {
    setIsButtonEdit(true);
  }

  useEffect(() => {
    setDataForm({
      name: currentUser.name,
      email: currentUser.email
    })
  }, [currentUser])

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
    auth.updateProfile(name, email)
    .then((res) => {
      setCurrentUser(res);
    })
    .catch(() => {
      setIsErrorText('При обновлении профиля произошла ошибка.');
    });
  }
  
  return (
    <main className="content section">
      <section className="profile">
        <h2 className="profile__greeting-text">Привет, {currentUser.name}!</h2>

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
                value={dataForm.name}
                
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
                value={dataForm.email}
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
                {currentUser.name}
              </p>
            </div>

            <div className="profile__stroke-line profile__stroke-line_fix-size"></div>

            <div className="profile__stroke-info profile__stroke-info_fix-size">
              <p className="profile__username-text">
                E-mail
              </p>
              <p className="profile__username-data">
                {currentUser.email}
              </p>
            </div>
          </>
        }

        
        {isButtonEdit ?
          <div className="profile__edit-button">
            <AuthBottom
              isDisabled={props.isDisabled}
              handleSubmit={handleSubmit}
              isErrorText={isErrorText}
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
        
        <button 
          onClick={signOut}
          className="profile__logout button-hover"
        >
          Выйти из аккаунта
        </button>
      </section>
    </main>
  )
}

export default withRouter(Profile);
