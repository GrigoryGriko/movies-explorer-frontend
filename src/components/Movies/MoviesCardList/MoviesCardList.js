import React from 'react';
import { Route, Switch } from "react-router-dom";

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return(
      <section className="movies-cardlist section">
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
  )
}

export default MoviesCardList;
