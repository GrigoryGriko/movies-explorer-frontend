import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import AuthTop from './AuthTop/AuthTop';
import AuthForm from './AuthForm/AuthForm';
import AuthBottom from './AuthBottom/AuthBottom';

import * as auth from '../../utils/Auth';


function Register(props) {
  const [isErrorText, setIsErrorText] = useState('');
  const [dataForm, setDataForm] = useState({});

  const history = useHistory();

  function handleChange(e) {
    const {name, value} = e.target;
    setDataForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { name, email, password } = dataForm;
    auth.register(name, email, password)
    .then((res) => {
      props.handleLogin({email, password});
    })
    .catch(() => {
      setIsErrorText('При регистрации произошла ошибка.');
    });
  }

  return (
  <main className="content section">
    <AuthTop/>
    <AuthForm
      setValidation={props.setValidation}
      isDisabled={props.isDisabled}
      setIsDisabled={props.setIsDisabled}
      dataForm={props.dataForm}
      setDataForm={props.setDataForm}
      handleChange={handleChange}
    />
    <AuthBottom
      isDisabled={props.isDisabled}
      handleSubmit={handleSubmit}
      isErrorText={isErrorText}
    />
  </main>
  )
}

export default Register;
