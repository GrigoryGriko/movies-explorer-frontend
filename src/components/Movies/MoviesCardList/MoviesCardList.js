import React, { useState, useEffect } from 'react';
import { Route, Switch, withRouter, useLocation } from "react-router-dom";
import mainApi from '../../../utils/MainApi';

import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

import { getFilterFormData, getFilterFormDataSavedMovies } from '../../../utils/SearchMovies';

function MoviesCardList({isPreloader, isSearchError }) {
  //localStorage.removeItem("searchMovies"); //SyntaxError: "undefined" is not valid JSON Проверка, если в локал стораж нет данных поиска

  const windowWidth = useWindowSize();

  const [maxCountCards, setMaxCountCards] = useState(0);
  const [countAppendCards, setCountAppendCards] = useState(0);

  const [isShowButton, setIsShowButton] = useState(false);

  const [filterFormData, SetFilterFormData] = useState({});
  const [cards, setCards] = useState([]);

  const location = useLocation();
  const isSearchMovies = 'ничего не найдено';

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

  function setterFilterFormData() {
    let filterFormData;

    if (location.pathname === '/movies') filterFormData = getFilterFormData();
    else if (location.pathname === '/saved-movies')  filterFormData = getFilterFormDataSavedMovies();

    SetFilterFormData(filterFormData ? filterFormData : {});

    setCards(filterFormData ? filterFormData.cards.splice(0, maxCountCards) : []);
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
    setMaxCountCards(prevMaxCount => prevMaxCount + countAppendCards);
    setCards(filterFormData ? filterFormData.cards.splice(0, maxCountCards) : []);
  }
  
  function handleCard(action, card) {   //здесь меняем сохраненность фильма в общем массиве. А надло не в общем а в новом отфильтрованном
    const flag = (action === 'save') ? true : false;

    let filterFormData;

    if (location.pathname === '/movies') filterFormData = getFilterFormData();
    else if (location.pathname === '/saved-movies') filterFormData = getFilterFormDataSavedMovies();

   

    const cards = filterFormData.cards || [];
    
    cards.forEach((i, index) => {
      if (i.id === card.id) {
        i.isSaved = flag;
        return;
      }
    });
    
    filterFormData.cards = cards;

    localStorage.setItem("filterFormData", JSON.stringify(filterFormData)); //помечаем фильмы, которые сохраннены. Надо меня другой локал стораж
  }

  function handleCardSave(card) {
    console.log('handlecardsave ', card);
    mainApi.addMovie(card)
      .then(() => {
        handleCard('save', card);
      })
      .catch((err) => {
        console.log(err)
      });
  }

  function handleCardDelete(card) {
    mainApi.addMovie(card.id)
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
        <p class="movies-cardlist__text">
          {(filterFormData.cards && filterFormData.cards.length === 0 && !isPreloader) ?
          isSearchMovies : '' }
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
