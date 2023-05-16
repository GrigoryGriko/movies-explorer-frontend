import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import AuthTop from './AuthTop/AuthTop';
import AuthForm from './AuthForm/AuthForm';
import AuthBottom from './AuthBottom/AuthBottom';

import * as auth from '../../utils/Auth';



function Register(props) {
  const [isDisabled, setIsDisabled] = useState('');
  const [dataForm, setDataForm] = useState({});
  
  const history = useHistory();

  function handleSubmit(e) {
    console.log('reg');
    e.preventDefault();

    const { name, email, password } = this.state; //надо получить валуисы
    auth.register(name, email, password)
    .then((res) => {
        this.props.history.push('/signin');
    })
    .catch(() => {
      console.log('Что-то пошло не так! Попробуйте ещё раз.');
    });
  }

  return (
  <main className="content section">
    <AuthTop/>
    <AuthForm
      isDisabled={isDisabled}
      setIsDisabled={setIsDisabled}
      dataForm={dataForm}
      setDataForm={setDataForm}
    />
    <AuthBottom
      isDisabled={isDisabled}
      handleSubmit={handleSubmit}
      dataForm={dataForm}
    />
  </main>
  )
}

export default Register;
