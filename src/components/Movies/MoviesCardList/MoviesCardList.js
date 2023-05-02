import React from 'react';
import { Route, Switch } from "react-router-dom";

import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList() {
  return(
    <>
      <section className="movies-cardlist section">
        <Preloader/>
        <ul className="movies-cardlist__list wrapper">
          <Switch>
            <Route path="/movies">
              <MoviesCard
                isSaved={false}
              />
              <MoviesCard
                isSaved={true}
              />
              <MoviesCard
                isSaved={false}
              />
              <MoviesCard
                isSaved={false}
              />
              <MoviesCard
                isSaved={false}
              />
              <MoviesCard
                isSaved={true}
              />
              <MoviesCard
                isSaved={false}
              />
              <MoviesCard
                isSaved={false}
              />
              <MoviesCard
                isSaved={true}
              />
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
              <button className="movies-more__button-more wrapper button-hover">
                Ещё
              </button>
            </section>
          </Route>
        </Switch>
    </>
  )
}

export default MoviesCardList;
