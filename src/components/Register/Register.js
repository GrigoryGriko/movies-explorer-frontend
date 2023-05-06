import React from 'react';

import AuthTop from './AuthTop/AuthTop';
import AuthForm from './AuthForm/AuthForm';
import AuthBottom from './AuthBottom/AuthBottom';

function Register() {
  return (
  <main className="content section">
    <AuthTop/>
    <AuthForm/>
    <AuthBottom/>
  </main>
  )
}

export default Register;
