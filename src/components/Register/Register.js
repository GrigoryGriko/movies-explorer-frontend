import React from 'react';
import { useHistory } from 'react-router-dom';

import AuthTop from './AuthTop/AuthTop';
import AuthForm from './AuthForm/AuthForm';
import AuthBottom from './AuthBottom/AuthBottom';

import * as auth from '../../utils/Auth';

function Register() {
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
    <AuthForm/>
    <AuthBottom
      handleSubmit={handleSubmit}
    />
  </main>
  )
}

export default Register;
