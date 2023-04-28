import React from 'react';
import { Link } from 'react-router-dom';

function AuthTop() {
  return (
  <section className="auth-top section">
    <div className="auth-top__wrapper">
      <Link to="/" className="logo"></Link>
      <h2 className="auth-top__greeting-text">Добро пожаловать!</h2>
    </div>
  </section>
  )
}

export default AuthTop;
