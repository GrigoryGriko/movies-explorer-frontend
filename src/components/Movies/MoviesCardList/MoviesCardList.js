import React from 'react';

function MoviesCardList() {
  return(
    <section className="movies-cardlist section">
      <ul className="movies-cardlist__list wrapper" src="../../../images/movies-cardlist__image.jpg">
        <li className="movies-cardlist__item">
          <img className="movies-cardlist__image"/>
          <h5>33 слова о дизайне</h5>
        </li>
      </ul>
    </section>
  )
}

export default MoviesCardList;
