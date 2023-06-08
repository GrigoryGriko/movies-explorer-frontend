import React, { useState } from 'react';
import { useLocation } from "react-router-dom";

import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

import { getFilterFormData, getFilterFormDataSavedMovies } from '../../utils/SearchMovies';

function SavedMovies({ isPreloader, setIsPreloader }) {
  const [isSearchError, setIsSearchError] = useState('');
  const [cards, setCards] = useState([]);
  const [maxCountCards, setMaxCountCards] = useState(0);
  
  const [filterFormData, setFilterFormData] = useState({textMovie: '', shortsFilms: false, cards: []});

  const location = useLocation();

  function setterFilterFormData() {
    let filterFormData;

    if (location.pathname === '/movies') filterFormData = getFilterFormData();
    else if (location.pathname === '/saved-movies')  filterFormData = getFilterFormDataSavedMovies();
    setFilterFormData(filterFormData ? filterFormData : {textMovie: '', shortsFilms: false, cards: []});

    setCards(filterFormData ? filterFormData.cards.slice().splice(0, maxCountCards) : []); 
  }

  return (
    <main className="content section">
      <SearchForm
        setIsPreloader={setIsPreloader}
        setIsSearchError={setIsSearchError}
        setterFilterFormData={setterFilterFormData}
        setCards={setCards}
        maxCountCards={maxCountCards}
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

      <section className="saved-movies__devider section"></section>
    </main>
  )
}

export default SavedMovies;
