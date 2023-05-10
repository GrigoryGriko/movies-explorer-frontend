import React from 'react';

import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies(props) {
  return (
    <main className="content section">
      <SearchForm
        setIsPreloader={props.setIsPreloader}
        setIsSearchMovies={props.setIsSearchMovies}
        setIsSearchError={props.setIsSearchError}
      />
      <MoviesCardList
        isPreloader={props.isPreloader}
        isSearchMovies={props.isSearchMovies}
        isSearchError={props.isSearchError}
      />
    </main>
  )
}

export default Movies;
