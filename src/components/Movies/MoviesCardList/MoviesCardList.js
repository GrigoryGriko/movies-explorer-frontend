import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";

import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';


function MoviesCardList(props) {
  //localStorage.removeItem("searchFormData");

  const windowWidth = useWindowSize();

  const [maxCountCards, setMaxCountCards] = useState(0);
  const [countAppendCards, setCountAppendCards] = useState(0);

  const [isShowButton, setIsShowButton] = useState(false);

  const [searchFormData, SetSearchFormData] = useState({});
  const [textMovie, setTextMovie] = useState('');
  const [shortsFilms, setshortsFilms] = useState('');
  const [allCountCards, setAllCountCards] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setterSearchFormData();
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
  }, [props.isPreloader, windowWidth]);

  useEffect(() => {
    setterSearchFormData();

    if (cards.length < allCountCards.length) {
      setIsShowButton(true);
    } else {
      setIsShowButton(false);
    }
  }, [props.isPreloader, maxCountCards])

  function setterSearchFormData() {
    const searchFormStorage = JSON.parse(localStorage.getItem("searchFormData"));
    SetSearchFormData(searchFormStorage ? searchFormStorage : {});

    setTextMovie(searchFormStorage !== null ? searchFormStorage.textMovie : '');
    setshortsFilms(searchFormStorage !== null ? searchFormStorage.shortsFilms: '');

    setAllCountCards(searchFormStorage !== null ? searchFormStorage.cards : []);
    setCards(searchFormStorage !== null ? searchFormStorage.cards.splice(0, maxCountCards) : []);
    
    console.log(textMovie);
    console.log(shortsFilms);
    console.log(allCountCards);
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

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  function handleMore() {
    setMaxCountCards(prevMaxCount => prevMaxCount + countAppendCards);
    setCards(allCountCards ? allCountCards.splice(0, maxCountCards) : []);
  }
  
  return ( 
    <>
      <section className="movies-cardlist section">
        {props.isPreloader ? <Preloader/> : ''}
        {searchFormData ? 
          <ul className="movies-cardlist__list wrapper">       
            <Switch>
              <Route path="/movies">
                {cards ? cards.map((card, index) => (
                  <MoviesCard 
                    key={card.id} 
                    card={card}
                  />
                )) : ''}
              </Route>

              <Route path="/saved-movies">
                <MoviesCard
                  isSaved={true}
                />
                <MoviesCard
                  isSaved={true}
                />
                <MoviesCard
                  isSaved={true}
                />
              </Route>
            </Switch>
          </ul> : ''
        }
        {(isEmpty(searchFormData) && !props.isPreloader && props.isSearchMovies) ?
        props.isSearchMovies : '' }
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
/*cards & cards.length !== allCountCards.length*/

export default MoviesCardList;
