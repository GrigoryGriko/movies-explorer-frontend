import React from 'react';

import moviesCardListImage from '../../../images/movies-cardlist__image.jpg';


function MoviesCard(props) {
  return(
    <>
      <li className="movies-cardlist__item">
        <img className="movies-cardlist__image" src={moviesCardListImage} alt="карточка фильма"/>

        <div className={`movies-cardlist__action-save ${props.isSaved ? 'movies-cardlist_disabled-element' : ''}`}>Сохранить</div>

        <div className={`movies-cardlist__marker-saved ${!props.isSaved ? 'movies-cardlist_disabled-element' : ''}`}></div>

        <div className="movies-cardlist__wrapper-text">
          <h5 className="movies-cardlist__title-film">33 слова о дизайне</h5>
          <p className="movies-cardlist__duration-film">1ч 17м</p>
        </div>
      </li>
    </>
    )
  }
  
  export default MoviesCard;
