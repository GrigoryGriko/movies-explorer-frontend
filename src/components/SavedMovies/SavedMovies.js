import React from 'react';

import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

function SavedMovies() {
  return (
    <>
      <SearchForm/>
      <MoviesCardList/>

      <section className="saved-movies__devider section"></section>
    </>
  )
}

export default SavedMovies;
