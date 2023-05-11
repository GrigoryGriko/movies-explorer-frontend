import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";

import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';




function MoviesCardList(props) {
  //localStorage.removeItem("searchFormData");


  const [maxCountCards, setMaxCountCards] = useState(4);
  const [isShowButton, setIsShowButton] = useState(false);

  const [searchFormData, SetSearchFormData] = useState({});
  const [textMovie, setTextMovie] = useState('');
  const [shorthsFilms, setShorthsFilms] = useState('');
  const [allCountCards, setAllCountCards] = useState([]);
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    SetSearchFormData(JSON.parse(localStorage.getItem("searchFormData")));

    setTextMovie(searchFormData.textMovie);
    setShorthsFilms(searchFormData.shorthsFilms);

    setAllCountCards(searchFormData.cards ? searchFormData.cards : []);
    setCards(searchFormData.cards ? searchFormData.cards.splice(0, maxCountCards) : []);

    console.log(cards.length);
    console.log(allCountCards.length);
  }, [props.isPreloader])

  /*useEffect(() => {
    setCards(searchedCards ? searchedCards.splice(0, maxCountCards) : []);
  }, [searchFormData]);*/
  

  /*useEffect(() => {
    setMaxCountCards(maxCountCards + 1);
  }, [cards]);
  console.log(searchedCards);*/
  
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
        {(!searchFormData && !props.isPreloader && props.isSearchMovies) ?
        props.isSearchMovies : '' }
      </section>
         
      <Switch>
        <Route path="/movies">
          {(!cards & cards.length !== allCountCards.length) ? 
            <section className="movies-more section">
            <button className="movies-more__button-more wrapper-movies-more button-hover">
              Ещё
            </button>
          </section> : ''
          }
        </Route>
      </Switch>
    </>
  )
}

export default MoviesCardList;
