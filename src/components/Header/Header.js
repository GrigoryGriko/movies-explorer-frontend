import React from 'react';
import { Link,  useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <header className={`header section ${location.pathname !== '/' ? 'header_light-theme' : ''}`}>
      <div className="header__container-content wrapper">
        <Link to="/" className="logo"></Link>

      {location.pathname !== '/' ? (
        <>
        <nav className="header__wrapper-menu">
          <Link to="movies" className={`header__menu-link ${location.pathname === '/movies' ? 'header__menu-link_bold' : ''}`}>Фильмы</Link>

          <Link to="saved-movies" className={`header__menu-link ${location.pathname === '/saved-movies' ? 'header__menu-link_bold' : ''}`}>Сохранённые фильмы</Link>
        </nav>
        
        <Link to="profile" className="header__action-account">Аккаунт</Link>
        </>
        
      ) : (
        <nav className="header__wrapper-menu header__wrapper-menu_unlogged">
          <Link to="signup" className="header__action-reigister">Регистрация</Link>

          <Link to="signin" className="header__action-login">Войти</Link>
        </nav>
      )}
      </div>
    </header>
  )
}

export default Header;
