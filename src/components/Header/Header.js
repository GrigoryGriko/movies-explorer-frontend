import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header section">
      <div className="header__container-content wrapper">
        <Link to="/" className="logo"></Link>

        <nav className="header__wrapper-auth">
            <Link to="signup" className="header__action-reigister">Регистрация</Link>

            <Link to="signin" className="header__action-login">Войти</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header;
