import React from 'react';
import { Link, useHistory, Switch, Route } from 'react-router-dom';

function Header() {
  return (
    <header className="header section">
      <div className="header__container-content">
        <a className="logo" href='/'></a>

        <div className="header__wrapper-auth">
          <Switch>
            <route path="signup">
                <Link to="signup" className="header__action-auth">Регистрация</Link>
            </route>

            <route path="signin">
                <Link to="signin" className="header__action-auth">Войти</Link>
            </route>
          </Switch>
        </div>
      </div>
    </header>
  )
}

export default Header;
