import React from 'react';

import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <main className="content">
      <SearchForm/>
      <MoviesCardList/>
    </main>
  )
}

export default Movies;
