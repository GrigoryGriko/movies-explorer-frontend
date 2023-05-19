import React from 'react';

import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

function SavedMovies({ isPreloader, setIsPreloader, isSearchMovies, setIsSearchMovies, isSearchError, setIsSearchError }) {
  return (
    <main className="content section">
      <SearchForm
        setIsPreloader={setIsPreloader}
        setIsSearchMovies={setIsSearchMovies}
        setIsSearchError={setIsSearchError}
      />
      <MoviesCardList
        isPreloader={isPreloader}
        isSearchMovies={isSearchMovies}
        isSearchError={isSearchError}
      />

      <section className="saved-movies__devider section"></section>
    </main>
  )
}

export default SavedMovies;
