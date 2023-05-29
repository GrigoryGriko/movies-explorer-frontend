import React, { useState } from 'react';
import { useLocation } from "react-router-dom";

import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

import { getFilterFormData, getFilterFormDataSavedMovies } from '../../utils/SearchMovies';

function Movies({ isPreloader, setIsPreloader }) {
  const [isSearchError, setIsSearchError] = useState('');
  const [cards, setCards] = useState([]);
  const [maxCountCards, setMaxCountCards] = useState(0);
  
  const [filterFormData, setFilterFormData] = useState({});

  const location = useLocation();
  
  function setterFilterFormData() {
    let filterFormData;

    if (location.pathname === '/movies') filterFormData = getFilterFormData();
    else if (location.pathname === '/saved-movies')  filterFormData = getFilterFormDataSavedMovies();

    setFilterFormData(filterFormData ? filterFormData : {});
    setCards(filterFormData ? filterFormData.cards.splice(0, maxCountCards) : []);
  }

  return (
    <main className="content section">
      <SearchForm
        setIsPreloader={setIsPreloader}
        setIsSearchError={setIsSearchError}
        setterFilterFormData={setterFilterFormData}
      />
      <MoviesCardList
        isPreloader={isPreloader}
        isSearchError={isSearchError}
        setIsSearchError={setIsSearchError}
        setterFilterFormData={setterFilterFormData}
        setMaxCountCards={setMaxCountCards}
        cards={cards}
        setCards={setCards}
        maxCountCards={maxCountCards}
        filterFormData={filterFormData}
        setFilterFormData={setFilterFormData}
      />
    </main>
  )
}

export default Movies;
