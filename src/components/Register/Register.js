import React, { useState } from 'react';
import { Route, Switch, useLocation, useHistory } from "react-router-dom";

import AuthTop from './AuthTop/AuthTop';
import AuthForm from './AuthForm/AuthForm';
import AuthBottom from './AuthBottom/AuthBottom';

import * as auth from '../../utils/Auth';


function Register(props) {
  const history = useHistory();

  function handleChange(e) {
    const {name, value} = e.target;
    props.setDataForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(props.dataForm);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { name, email, password } = props.dataForm;
    auth.register(name, email, password)
    .then((res) => {
      history.push('/signin');
    })
    .catch(() => {
      console.log('Что-то пошло не так! Попробуйте ещё раз.');
    });
  }

  return (
  <main className="content section">
    <AuthTop/>
    <AuthForm
      isDisabled={props.isDisabled}
      setIsDisabled={props.setIsDisabled}
      dataForm={props.dataForm}
      setDataForm={props.setDataForm}
      handleChange={handleChange}
    />
    <AuthBottom
      isDisabled={props.isDisabled}
      handleSubmit={handleSubmit}
    />
  </main>
  )
}

export default Register;
