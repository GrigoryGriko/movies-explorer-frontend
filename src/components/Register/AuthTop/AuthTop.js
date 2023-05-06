import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

function AuthTop() {
  return (
  <section className="auth-top section">
    <div className="auth-top__wrapper">
      <Link to="/" className="logo"></Link>
      <Switch>
        <Route path="/signup">
          <h2 className="auth-top__greeting-text">Добро пожаловать!</h2>
        </Route>
        <Route path="/signin">
          <h2 className="auth-top__greeting-text">Рады видеть!</h2>
        </Route>
      </Switch>
    </div>
  </section>
  )
}

export default AuthTop;
