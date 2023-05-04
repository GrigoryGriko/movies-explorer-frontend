import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavTab() {
  const location = useLocation();
  const loggedIn = true;
  let classHeaderMenuLink;
  let classHeaderActionAccount;
  let classHeaderPopupMenuButton;

  if (location.pathname === '/') {
    classHeaderMenuLink = 'header__menu-link_dark';
    classHeaderActionAccount = 'header__action-account_dark';
    classHeaderPopupMenuButton = 'header__popup-menu-button_dark';
  } else {
    classHeaderMenuLink = '';
    classHeaderActionAccount = '';
    classHeaderPopupMenuButton = '';
  }

  return (
    <>
      {loggedIn ? (
        <>
          <nav className="header__wrapper-menu header__wrapper-menu_site-visibility">
            <Link to="/movies" className={`header__menu-link link-hover ${classHeaderMenuLink} ${location.pathname === '/movies' ? 'header__menu-link_bold' : ''}`}>Фильмы</Link>

            <Link to="/saved-movies" className={`header__menu-link link-hover ${classHeaderMenuLink} ${location.pathname === '/saved-movies' ? 'header__menu-link_bold' : ''}`}>Сохранённые фильмы</Link>
          </nav>
          
          <Link to="/profile" className={`header__action-account link-hover ${classHeaderActionAccount} header__wrapper-menu_site-visibility`}>Аккаунт</Link>

          <button className={`header__popup-menu-button button-hover ${classHeaderPopupMenuButton}`}></button>

          <div className="popup-menu">
            <div className="popup-menu__wrapper-content">
              <button className="popup-menu__button-close"></button>

              <nav className="popup-menu__wrapper-menu">
                <ul className="popup-menu__wrapper-menu-list">
                  <li className="popup-menu__wrapper-menu-item">
                    <Link 
                      to="/" 
                      className="popup-menu__menu-link link-hover">
                        Главная
                    </Link>
                    <div className={`popup-menu__page-marker 
                        ${location.pathname === '/' ?
                        'popup-menu__page-marker_visibility' : ''}`}>
                    </div>
                  </li><br></br>
                  
                  <li className="popup-menu__wrapper-menu-item">
                    <Link 
                      to="/movies" 
                      className="popup-menu__menu-link link-hover">
                        Фильмы
                    </Link>
                    <div className={`popup-menu__page-marker 
                        ${location.pathname === '/movies' ?
                        'popup-menu__page-marker_visibility' : ''}`}>
                    </div>
                  </li><br></br>

                  <li className="popup-menu__wrapper-menu-item">
                    <Link
                      to="/saved-movies"
                      className="popup-menu__menu-link link-hover">
                        Сохранённые фильмы
                    </Link>
                    <div className={`popup-menu__page-marker 
                        ${location.pathname === '/saved-movies' ?
                        'popup-menu__page-marker_visibility' : ''}`}>
                    </div>
                  </li>
                </ul>
              </nav>
              
              <Link to="/profile" className="popup-menu__action-account link-hover">Аккаунт</Link>
            </div>
          </div>
          <div className="popup-menu-cover"></div>
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
