import React, { useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';

import moviesCardListImage from '../../../images/movies-cardlist__image.jpg';


function MoviesCard (props) {
  const [isSaved, setIsSaved] = useState(props.card.isSaved);

  function handleSaveClick() {
    setIsSaved(true);
    props.onCardSave(props.card);
  }

  function handleDeleteClick() {
    setIsSaved(false);
    props.onCardDelete(props.card);
  }

  useEffect(() => {
    setIsSaved(props.card.isSaved);
  }, [props.card.isSaved]);

  return(
    <>
      <li className="movies-cardlist__item">
        <img className="movies-cardlist__image" src={moviesCardListImage} alt="карточка фильма"/>

        <Switch>
          <Route path="/movies">
            <button 
              className={`movies-cardlist__action-save button-hover
                ${isSaved ? 'movies-cardlist_disabled-element' : ''}`}
              onClick={handleSaveClick}
            >
              Сохранить
            </button>

            <button 
              className={`movies-cardlist__marker-saved button-hover
                ${!isSaved ? 'movies-cardlist_disabled-element' : ''}`}
              onClick={handleDeleteClick}
            >

            </button>
          </Route>

          <Route path="/saved-movies">
            <button className="movies-cardlist__action-delete button-hover"></button>
          </Route>
        </Switch>

        <div className="movies-cardlist__wrapper-text">
          <h5 className="movies-cardlist__title-film">{''+props.card.isSaved} 33 слова о дизайне</h5>
          <p className="movies-cardlist__duration-film">1ч 17м</p>
        </div>
      </li>
    </>
  );
}

export default MoviesCard;
