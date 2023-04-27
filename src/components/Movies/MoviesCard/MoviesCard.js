import React from 'react';
import { Switch, Route } from 'react-router-dom';

import moviesCardListImage from '../../../images/movies-cardlist__image.jpg';


function MoviesCard(props) {
  return(
    <>
      <li className="movies-cardlist__item">
        <img className="movies-cardlist__image" src={moviesCardListImage} alt="карточка фильма"/>

        <Switch>
          <Route path="/movies">
            <button className={`movies-cardlist__action-save link-hover ${props.isSaved ? 'movies-cardlist_disabled-element' : ''}`}>Сохранить</button>

            <button className={`movies-cardlist__marker-saved link-hover ${!props.isSaved ? 'movies-cardlist_disabled-element' : ''}`}></button>
          </Route>

          <Route path="/saved-movies">
            <button className="movies-cardlist__action-delete link-hover"></button>
          </Route>
        </Switch>

        <div className="movies-cardlist__wrapper-text">
          <h5 className="movies-cardlist__title-film">33 слова о дизайне</h5>
          <p className="movies-cardlist__duration-film">1ч 17м</p>
        </div>
      </li>
    </>
    )
  }
  
  export default MoviesCard;
