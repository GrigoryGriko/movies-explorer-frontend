import React from 'react';
import { Route, Switch } from "react-router-dom";

import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';


const {
  textMovie,
  shorthsFilms,
  cards,
} = JSON.parse(localStorage.getItem("searchFormData"));

function MoviesCardList() {
  return(
    <>
      <section className="movies-cardlist section">
        <Preloader/>
        <ul className="movies-cardlist__list wrapper">
          <Switch>
            <Route path="/movies">
            {cards.map((card) => (
              <MoviesCard 
                key={card.id} 
                card={card}
              />
            ))}
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
        </ul>
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
