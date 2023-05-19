import React from 'react';

import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies({ isPreloader, setIsPreloader, isSearchError, setIsSearchError }) {
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
    </main>
  )
}

export default Movies;
