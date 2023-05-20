import React from 'react';
import { useHistory } from 'react-router-dom';

function NotFound() {
  const history = useHistory();

  function handleClick() {
    history.goBack();
  }

  return (
    <main className="not-found section">
      <h1 className="not-found__title">
        404
      </h1>
      <p className="not-found__caption">
        Страница не найдена
      </p>

      <button 
        onClick={handleClick}
        className="not-found__link-back link-hover"
      >
        Назад
      </button>
    </main>  
  )
}

export default NotFound;
