import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavTab() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' ? (
        <>
        <nav className="header__wrapper-menu">
          <Link to="movies" className={`header__menu-link link-hover ${location.pathname === '/movies' ? 'header__menu-link_bold' : ''}`}>Фильмы</Link>

          <Link to="saved-movies" className={`header__menu-link link-hover ${location.pathname === '/saved-movies' ? 'header__menu-link_bold' : ''}`}>Сохранённые фильмы</Link>
        </nav>
        
        <Link to="profile" className="header__action-account link-hover">Аккаунт</Link>
        </>
        
      ) : (
        <nav className="header__wrapper-menu header__wrapper-menu_unlogged">
          <Link to="signup" className="header__action-reigister link-hover">Регистрация</Link>

          <Link to="signin" className="header__action-login link-hover">Войти</Link>
        </nav>
      )}
    </>
  )
}

export default NavTab;
