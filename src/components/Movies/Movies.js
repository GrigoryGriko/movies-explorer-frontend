import React from 'react';

import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies({ isPreloader, setIsPreloader, isSearchMovies, setIsSearchMovies, isSearchError, setIsSearchError }) {
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
    </main>
  )
}

export default Movies;
