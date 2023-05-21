import React, { useEffect, useState } from 'react';
import { withRouter, useLocation } from 'react-router-dom';

import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

import { getFilterFormData, getFilterFormDataSavedMovies, handleSubmit } from '../../../utils/SearchMovies';

function SearchForm({ setIsPreloader, setIsSearchError }) {
  const [textMovie, setTextMovie] = useState('');
  const [shortsFilms, setShortsFilms] = useState(false);
  const [isTextFormError, setIsTextFormError] = useState('');

  const location = useLocation();

  useEffect(() => {
    let filterFormData;
    if (location.pathname === '/movies') filterFormData = getFilterFormData();
    else if (location.pathname === '/saved-movies') filterFormData = getFilterFormDataSavedMovies();

    const textMovie = filterFormData ? filterFormData.textMovie : textMovie;
    const shortsFilms = filterFormData ? filterFormData.shortsFilms : shortsFilms;
    
    setTextMovie(textMovie);
    setShortsFilms(shortsFilms);
  }, [])

  function handleChange(e) {
    const value = e.target.value;
    
    console.log(value);
    
    setTextMovie(value);
  }

  function handleChangeCheckbox(state) {
    setShortsFilms(state);
  }
  
  return(
    <section className="search-form section">
      <div className="search-form__wrapper wrapper">
        <form 
          className="search-form__search-input"
          onSubmit={e => handleSubmit(
              e, 
              location,
              setIsTextFormError,
              setIsPreloader, 
              setIsSearchError, 
              shortsFilms, 
              textMovie
            )}
          >
          <input
            id="textMovie"
            className="search-form__input-type"
            placeholder="Фильм"
            value={textMovie}
            onChange={handleChange}
          >
          </input>
          <button className="search-form__search-button button-hover"></button>

          <div className="search-form__stroke-line"></div>

          <div className={"search-form__filter-switch_desktop-visibility"}>
            <FilterCheckbox
              handleChange={handleChangeCheckbox}
              shortsFilms={shortsFilms}
            />
          </div>
          
        </form>
        <div className="search-form__error-text">
          {isTextFormError}  
        </div>

        <div className="search-form__filter-switch_mobile-visibility">
          <FilterCheckbox 
            handleChange={handleChangeCheckbox}
            shortsFilms={shortsFilms}
          />
        </div>
        <div className="search-form__stroke-line-bottom"></div>
      </div>
    </section>
  )
}

export default withRouter(SearchForm);
