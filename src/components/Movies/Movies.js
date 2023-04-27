import React from 'react';

import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <>
      <SearchForm/>
      <MoviesCardList/>

      <section className="movies-more section">
        <button className="movies-more__button-more wrapper link-hover">
          Ещё
        </button>
      </section>
    </>
  )
}

export default Movies;
