import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="not-found section">
      <h1 className="not-found__title">
        404
      </h1>
      <p className="not-found__caption">
        Страница не найдена
      </p>

      <Link to="/" className="not-found__link-back link-hover">
        Назад
      </Link>
    </main>  
  )
}

export default NotFound;
