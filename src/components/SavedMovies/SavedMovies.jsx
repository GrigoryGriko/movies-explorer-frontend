import React, { useState } from 'react';
import { useLocation } from "react-router-dom";

import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

import { getFilterFormData, getFilterFormDataSavedMovies } from '../../utils/SearchMovies';

function SavedMovies({ isPreloader, setIsPreloader }) {
  const [isSearchError, setIsSearchError] = useState('');
  const [cards, setCards] = useState([]);
  
  const [filterFormData, setFilterFormData] = useState({textMovie: '', shortsFilms: false, cards: []});

  const location = useLocation();

  function setterFilterFormData() {
    let filterFormData;

    filterFormData = getFilterFormDataSavedMovies();
    setFilterFormData(filterFormData ? filterFormData : {textMovie: '', shortsFilms: false, cards: []});

    setCards(filterFormData ? filterFormData.cards : []); 
  }

  return (
    <main className="content section">
      <SearchForm
        setIsPreloader={setIsPreloader}
        setIsSearchError={setIsSearchError}
        setterFilterFormData={setterFilterFormData}
        setCards={setCards}
      />
      <MoviesCardList
        isPreloader={isPreloader}
        isSearchError={isSearchError}
        setIsSearchError={setIsSearchError}
        setterFilterFormData={setterFilterFormData}
        cards={cards}
        setCards={setCards}
        filterFormData={filterFormData}
        setFilterFormData={setFilterFormData}
      />

      <section className="saved-movies__devider section"></section>
    </main>
  )
}

export default SavedMovies;
