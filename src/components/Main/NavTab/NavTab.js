import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { CurrentUserContext } from '../../../context/CurrentUserContext';


function NavTab() {
  const { loggedIn } = useContext(CurrentUserContext);

  const [popupMenuVisible, setPopupMenuVisible] = useState('');

  const location = useLocation();
  let classHeaderMenuLink;
  let classHeaderActionAccount;
  let classHeaderPopupMenuButton;
  
  let classHeaderPopupButtonRegister;
  let classHeaderPopupButtonLogin;

  if (location.pathname === '/') {
    classHeaderMenuLink = 'header__menu-link_dark';
    classHeaderActionAccount = 'header__action-account_dark';
    classHeaderPopupMenuButton = 'header__popup-menu-button_dark';

    classHeaderPopupButtonRegister = '';
    classHeaderPopupButtonLogin = '';
  } else {
    classHeaderMenuLink = '';
    classHeaderActionAccount = '';
    classHeaderPopupMenuButton = '';
    
    classHeaderPopupButtonRegister = 'header__action-reigister_light';
    classHeaderPopupButtonLogin = 'header__action-login_light';
  }

  function handleClickButtonOpen() {
    setPopupMenuVisible('popup-menu__change_visible');
  }

  function handleClickButtonClose() {
    setPopupMenuVisible('');
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

          <button
            className={`header__popup-menu-button button-hover ${classHeaderPopupMenuButton}`}
            onClick={handleClickButtonOpen}
          ></button>

          <div 
            className={`popup-menu ${popupMenuVisible}`}
          >
            <div className="popup-menu__wrapper-content">
              <button 
                className="popup-menu__button-close"
                onClick={handleClickButtonClose}
              ></button>

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
                  </li><li className="popup-menu__wrap"><br></br></li>
                  
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
                  </li><li className="popup-menu__wrap"><br></br></li>

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
          <div 
            className={`popup-menu-cover ${popupMenuVisible}`}
          ></div>
        </>
        
      ) : (
        <nav className="header__wrapper-menu header__wrapper-menu_unlogged">
          <Link to="signup" className={`header__action-reigister link-hover ${classHeaderPopupButtonRegister}`}>Регистрация</Link>

          <Link to="signin" className={`header__action-login link-hover ${classHeaderPopupButtonLogin}`}>Войти</Link>
        </nav>
      )}
    </>
  )
}

export default NavTab;
