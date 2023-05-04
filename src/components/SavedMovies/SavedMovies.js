import React from 'react';

import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

function SavedMovies() {
  return (
    <main className="content section">
      <SearchForm/>
      <MoviesCardList/>

      <section className="saved-movies__devider section"></section>
    </main>
  )
}

export default SavedMovies;
