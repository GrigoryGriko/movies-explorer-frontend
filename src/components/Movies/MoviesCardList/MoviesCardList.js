import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";

import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';




function MoviesCardList(props) {
  //localStorage.removeItem("searchFormData");
/*cards.length !== allCountCards.length*/

  const [maxCountCards, setMaxCountCards] = useState(12);
  const [isShowButton, setIsShowButton] = useState(true);

  const [searchFormData, SetSearchFormData] = useState({});
  const [textMovie, setTextMovie] = useState('');
  const [shorthsFilms, setShorthsFilms] = useState('');
  const [allCountCards, setAllCountCards] = useState([]);
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    const searchFormStorage = JSON.parse(localStorage.getItem("searchFormData"));
    SetSearchFormData(searchFormStorage ? searchFormStorage : {});

    setTextMovie(searchFormData.textMovie ? searchFormData.textMovie : '');
    setShorthsFilms(searchFormData.shorthsFilms ? searchFormData.shorthsFilms: '');

    setAllCountCards(searchFormData.cards ? searchFormData.cards : []);
    setCards(searchFormData.cards ? searchFormData.cards.splice(0, maxCountCards) : []);

    if (cards.length < allCountCards.length) {
      setIsShowButton(true);
    } else {
      setIsShowButton(false);
    }

  }, [props.isPreloader, maxCountCards])

  console.log(useWindowSize());

  function useWindowSize() {
    const [windowWidth, setWindowWidth] = useState();
  
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
    }, [])

    return windowWidth;
  }

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  function handleMore() {
    setMaxCountCards(prevMaxCount => prevMaxCount + 3);
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
