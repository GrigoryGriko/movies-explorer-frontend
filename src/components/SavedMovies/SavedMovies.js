import React from 'react';

import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

function SavedMovies({ isPreloader, setIsPreloader, isSearchError, setIsSearchError }) {
  return (
    <main className="content section">
      <SearchForm
        setIsPreloader={setIsPreloader}
        setIsSearchError={setIsSearchError}
      />
      <MoviesCardList
        isPreloader={isPreloader}
        isSearchError={isSearchError}
      />

      <section className="saved-movies__devider section"></section>
    </main>
  )
}

export default SavedMovies;
