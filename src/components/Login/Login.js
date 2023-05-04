import React from 'react';

import AuthTop from '../Register/AuthTop/AuthTop';
import AuthForm from '../Register/AuthForm/AuthForm';
import AuthBottom from '../Register/AuthBottom/AuthBottom';

function Login() {
  return (
    <main className="content section">
      <AuthTop/>
      <AuthForm/>
      <AuthBottom/>
    </main>
  )
}

export default Login;
