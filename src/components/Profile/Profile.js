import React, { useState, useEffect, useContext } from 'react';
import { withRouter } from "react-router-dom";

import {useInput, displayError} from '../../utils/ValidationForm';

import AuthBottom from '../Register/AuthBottom/AuthBottom';
import * as auth from '../../utils/Auth';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function Profile(props) {
  
  const {currentUser, setCurrentUser} = useContext(CurrentUserContext);
  console.log(currentUser);
  const [isButtonEdit, setIsButtonEdit] = useState(false);
  const [dataForm, setDataForm] = useState({});
  const [isFirstClickEdit, setIsFirstClickEdit] = useState(true);
  

  const {
    name,
    email,
  } = props.setValidation(props, useInput, useEffect);
  


console.log("isFirst ", isFirstClickEdit);

  //isFirstClickEdit сдеклать false
console.log('value ', name.value);

  function handleClick() {
    setIsButtonEdit(true);
    setIsFirstClickEdit(true);
  }

  function handleChange(e) {
    if (isFirstClickEdit) {
      setIsFirstClickEdit(false);
    }
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
      console.log('Что-то пошло не так! Попробуйте ещё раз.');
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
                value={isFirstClickEdit ? currentUser.name : name.value }
                
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
                value={isFirstClickEdit ? currentUser.email : email.value }
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
