import React, { useState } from 'react';
import { Route, Switch, useLocation, useHistory } from "react-router-dom";

import AuthTop from '../Register/AuthTop/AuthTop';
import AuthForm from '../Register/AuthForm/AuthForm';
import AuthBottom from '../Register/AuthBottom/AuthBottom';

import * as auth from '../../utils/Auth';

function Login(props) {
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

    const { email, password } = dataForm;
    props.handleLogin({email, password});
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

export default Login;
