import React, { useState, useEffect} from 'react';
import { Switch, Route, withRouter, useLocation } from 'react-router-dom';


function MoviesCard({
    card,
    onCardSave,
    onCardDelete,
  }) 
{
  const location = useLocation();
  const [isSaved, setIsSaved] = useState(card.isSaved);
  
  function handleSaveClick() {
    onCardSave(card);
  }

  function handleDeleteClick() {
    setIsSaved(false);
    onCardDelete(card);
  }

  function formatTime(minutes) {
    let hours = Math.floor(minutes / 60);
    let remainingMinutes = minutes % 60;
    return `${hours}ч ${remainingMinutes}м`;
  }
  function generateUrlImageCard() {
    let urlImageCard;
    if (location.pathname === '/movies') urlImageCard = `https://api.nomoreparties.co/${card.image.url}`;
    else if (location.pathname === '/saved-movies') urlImageCard = card.image;
    
    return urlImageCard;
  }
  useEffect(() => {
    setIsSaved(card.isSaved);
  }, [card.isSaved]);
  
  return(
    <>
      <li className="movies-cardlist__item">
        <a className="movies-cardlist__link-trailer" href={card.trailerLink} target="_blank" rel="noopener noreferrer">
          <img className="movies-cardlist__image" src={generateUrlImageCard()} alt={card.nameRU}/>
        </a>

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
            <button 
              className="movies-cardlist__action-delete button-hover"
              onClick={handleDeleteClick}
            >

            </button>
          </Route>
        </Switch>

        <div className="movies-cardlist__wrapper-text">
          <h5 className="movies-cardlist__title-film">{card.nameRU}</h5>
          <p className="movies-cardlist__duration-film">{formatTime(card.duration)}</p>
        </div>
      </li>
    </>
  );
}

export default withRouter(MoviesCard);
