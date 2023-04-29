import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import NavTab from '../Main/NavTab/NavTab';

function Header() {
  const location = useLocation();

  return (
    <header className={`header section ${location.pathname !== '/' ? 'header_light-theme' : ''}`}>
      <div className="header__container-content wrapper">
        <Link to="/" className="logo"></Link>

        <NavTab/>
      </div>
    </header>
  )
}

export default Header;
