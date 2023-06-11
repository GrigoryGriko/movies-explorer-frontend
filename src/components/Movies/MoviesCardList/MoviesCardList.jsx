import React, { useState, useEffect } from 'react';
import { Route, Switch, withRouter, useLocation } from "react-router-dom";
import mainApi from '../../../utils/MainApi';

import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

import { getFilterFormData, getFilterFormDataSavedMovies } from '../../../utils/SearchMovies';

function MoviesCardList({
  isPreloader,
  isSearchError,
  setIsSearchError,
  setterFilterFormData,
  setMaxCountCards,
  cards,
  setCards,
  maxCountCards,
  filterFormData,
  setFilterFormData,
}) {
  const windowWidth = useWindowSize();

  const [countAppendCards, setCountAppendCards] = useState(0);
  const [isShowButton, setIsShowButton] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setterFilterFormData();
  }, []);
  
  if (location.pathname === '/movies') {
    useEffect(() => {
      if (windowWidth >= 1280) {
        setMaxCountCards(12);
        setCountAppendCards(3);
      } 
      else if (windowWidth >= 768 && windowWidth < 1280) {
        setMaxCountCards(8);
        setCountAppendCards(2);
      }
      else if (windowWidth > 480 && windowWidth < 768) {
        setMaxCountCards(8);
        setCountAppendCards(2);
      }
      else if (windowWidth >= 320 && windowWidth <= 480) {
        setMaxCountCards(5);
        setCountAppendCards(2);
      }
    }, [isPreloader, windowWidth]);
  }

  useEffect(() => {
    setterFilterFormData();
    if (cards && filterFormData.cards) {
      if (filterFormData.cards.length === 0 && !isPreloader) {
        setIsSearchError('ничего не найдено');
      } else {
        setIsSearchError('');
      }
    }
  }, [isPreloader, filterFormData.cards.length])

  if (location.pathname === '/movies') {
    useEffect(() => {
      if (Array.isArray(cards) && Array.isArray(filterFormData.cards)) {
        if (cards.length < filterFormData.cards.length) {
          setIsShowButton(true);
        } else {
          setIsShowButton(false);
        }
      }
    }, [cards, filterFormData])
  }
  
  function useWindowSize() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      let debounceTimeout = null;
  
      function handleResize() {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
          setWindowWidth(window.innerWidth);
        }, 300);
      }
  
      window.addEventListener("resize", handleResize);
      handleResize();
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return windowWidth;
  }

  function handleMore() {
    const newFilmsArray = [...filterFormData.cards];

    setCards(filterFormData ? newFilmsArray.splice(cards.length, maxCountCards) : []);
    setMaxCountCards(prevMaxCount => prevMaxCount + countAppendCards);
  }
  
  function handleCard(action, card) {
    function cardForEach(flag) {
      if (location.pathname === '/movies') {
        const filterFormData = getFilterFormData();
        const newCards = [...cards];
        newCards.forEach((i) => {
          if (i.id === card.movieId || i.movieId === card.movieId) {
            const foundIndex = filterFormData.cards.findIndex((item) => item.id === i.id);

            if (action === 'save') {
              i.movieId = card._id;
              filterFormData.cards[foundIndex].isSaved = true;
              i.isSaved = true;
            } else {
              delete i.movieId;
              filterFormData.cards[foundIndex].isSaved = false;
              i.isSaved = false;
            }
            return;
          }
        });
        localStorage.setItem("filterFormData", JSON.stringify(filterFormData));
        setCards(newCards);
      } else if (location.pathname === '/saved-movies') {
        let newCards;
        const filterFormData = getFilterFormData();
        const filterFormDataSavedMovies = getFilterFormDataSavedMovies();

        newCards = filterFormDataSavedMovies.cards || [];

        newCards.forEach((i, index) => {
          if (i.movieId === card.movieId) {

            newCards.splice(index, 1);
          
            i.isSaved = flag;
            return;
          }
        });

        filterFormDataSavedMovies.cards = newCards; 

        if (filterFormData) {
          const cardsMovies = filterFormData.cards || [];

          cardsMovies.forEach((i) => {
            delete i.movieId;
            i.isSaved = false;
          })
          filterFormData.cards = cardsMovies;
        }
        localStorage.setItem("filterFormDataSavedMovies", JSON.stringify(filterFormDataSavedMovies));
        setCards(newCards);
      }
    }
    const flag = action === 'save';
    cardForEach(flag);
  }

  function handleCardSave(card) {
    mainApi.addMovie({
      ...card,
      movieId: card.id,
      image: `https://api.nomoreparties.co${card.image.url}` || 'https://example.com', 
      thumbnail: card.thumbnail || 'https://example.com'
    })
      .then((cardData) => {
        handleCard('save', cardData);
      })
      .catch((err) => {
        console.log(err)
      });
  }

  function handleCardDelete(card) {
    let cardId;
    if (location.pathname === '/movies') cardId = card.movieId
    else if (location.pathname === '/saved-movies') cardId = card._id
  
    mainApi.deleteMovie(cardId)
      .then(() => {
        handleCard('delete', card);
      })
      .catch(err => console.log(err));
  }
  return ( 
    <>
      <section className="movies-cardlist section">
        {isPreloader ? <Preloader/> : ''}
        {filterFormData ? 
          <ul className="movies-cardlist__list wrapper">       
            <Switch>
              <Route path="/movies">
                {cards ? cards.map((card, index) => (
                  <MoviesCard 
                    key={card.id}
                    card={card}
                    onCardSave={handleCardSave}
                    onCardDelete={handleCardDelete}
                  />
                )) : ''}
              </Route>

              <Route path="/saved-movies">
                {cards ? cards.map((card, index) => (
                  <MoviesCard 
                    key={card.id} 
                    card={card}
                    onCardDelete={handleCardDelete}
                  />
                )) : ''}
              </Route>
            </Switch>
          </ul> : ''
        }
        <p className="movies-cardlist__text wrapper">
          {isSearchError}
        </p>
      </section>
        {(isShowButton && location.pathname === '/movies') ? 
          <section className="movies-more section">
          <button 
            className="movies-more__button-more wrapper-movies-more button-hover"
            onClick={handleMore}
          >
            Ещё
          </button>
        </section> : ''
        }
    </>
  )
}

export default withRouter(MoviesCardList);
