import React from 'react';
import { Route, Switch } from "react-router-dom";

import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';




function MoviesCardList(props) {
  //localStorage.removeItem("searchFormData");

  const searchFormData = JSON.parse(localStorage.getItem("searchFormData"));
  
  const {
    textMovie,
    shorthsFilms,
    cards,
  } = searchFormData || {};

  return ( 
    <>
      <section className="movies-cardlist section">
        {props.isPreloader ? <Preloader/> : ''}
        {searchFormData ? 
          <ul className="movies-cardlist__list wrapper">       
            <Switch>
              <Route path="/movies">
              {cards ? cards.map((card) => (
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
          <section className="movies-more section">
            <button className="movies-more__button-more wrapper-movies-more button-hover">
              Ещё
            </button>
          </section>
        </Route>
      </Switch>
    </>
  )
}

export default MoviesCardList;
