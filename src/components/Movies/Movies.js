import React from 'react';

import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function getSearchFormData() {
  return JSON.parse(localStorage.getItem("searchFormData"));
}

function Movies({ isPreloader, setIsPreloader, isSearchMovies, setIsSearchMovies, isSearchError, setIsSearchError }) {
  return (
    <main className="content section">
      <SearchForm
        setIsPreloader={setIsPreloader}
        setIsSearchMovies={setIsSearchMovies}
        setIsSearchError={setIsSearchError}
        getSearchFormData={getSearchFormData}
      />
      <MoviesCardList
        isPreloader={isPreloader}
        isSearchMovies={isSearchMovies}
        isSearchError={isSearchError}
        getSearchFormData={getSearchFormData}
      />
    </main>
  )
}

export default Movies;
