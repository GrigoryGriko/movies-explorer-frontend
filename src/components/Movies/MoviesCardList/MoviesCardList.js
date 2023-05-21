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
}) {
  //localStorage.removeItem("searchMovies"); //SyntaxError: "undefined" is not valid JSON Проверка, если в локал стораж нет данных поиска

  const windowWidth = useWindowSize();

  const [countAppendCards, setCountAppendCards] = useState(0);
  const [isShowButton, setIsShowButton] = useState(false);

  const location = useLocation();


  useEffect(() => {
    setterFilterFormData();
  }, []);

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

  useEffect(() => {
    setterFilterFormData();
    
    if (cards && filterFormData.cards) {
      console.log('cards.length', cards.length);
      console.log('filterFormData.cards.length ', filterFormData.cards.length);

      if (filterFormData.cards.length === 0 && !isPreloader) {
        setIsSearchError('ничего не найдено');
      }

      if (cards.length < filterFormData.cards.length) {
        setIsShowButton(true);
      } else {
        setIsShowButton(false);
      }
    }
     else {
      setIsShowButton(false);
    }
  }, [isPreloader, maxCountCards])

  

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
    setMaxCountCards(prevMaxCount => prevMaxCount + countAppendCards);
    setCards(filterFormData ? filterFormData.cards.splice(0, maxCountCards) : []);
  }
  
  function handleCard(action, card) {   //здесь меняем сохраненность фильма в общем массиве. А надло не в общем а в новом отфильтрованном
    function cardForEach() {
      const cards = filterFormData.cards || [];
    
      cards.forEach((i, index) => {
        if (i.id === card.id) {
          i.isSaved = flag;
          return;
        }
      });
      
      filterFormData.cards = cards;
    }
    const flag = (action === 'save') ? true : false;
    let filterFormData;
    if (flag) {
      filterFormData = getFilterFormData();
      cardForEach();
      localStorage.setItem("filterFormData", JSON.stringify(filterFormData));
    } else {
        filterFormData = getFilterFormDataSavedMovies();
        cardForEach();
        localStorage.setItem("filterFormDataSavedMovies", JSON.stringify(filterFormData));
    }
  }

  function handleCardSave(card) {
    console.log('handlecardsave ', card);
    mainApi.addMovie({
      ...card,
      movieId: card.id,
      image: `https://api.nomoreparties.co${card.image.url}` || 'http://example.com', 
      thumbnail: card.thumbnail || 'http://example.com'
    })
      .then((cardData) => {
        handleCard('save', cardData);
      })
      .catch((err) => {
        console.log(err)
      });
  }

  function handleCardDelete(card) {
    mainApi.deleteMovie(card.id)
      .then(() => {
        handleCard('delete', card);
      })
      .catch(err => console.log(err));
  }
  console.log('filterFormData.cards ', filterFormData.cards);
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
         
      <Switch>
        <Route path="/movies">
          {isShowButton ? 
            <section className="movies-more section">
            <button 
              className="movies-more__button-more wrapper-movies-more button-hover"
              onClick={handleMore}
            >
              Ещё
            </button>
          </section> : ''
          }
        </Route>
      </Switch>
    </>
  )
}

export default withRouter(MoviesCardList);
