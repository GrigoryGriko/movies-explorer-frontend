import React, { useEffect, useState } from 'react';
import { withRouter, useLocation } from 'react-router-dom';

import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

import { getFilterFormData, getFilterFormDataSavedMovies, handleSubmit, initSavedMovies } from '../../../utils/SearchMovies';

function SearchForm({ setIsPreloader, setIsSearchError, setterFilterFormData, setCards, maxCountCards }) {
  const [textMovie, setTextMovie] = useState('');
  const [shortsFilms, setShortsFilms] = useState(false);
  const [isTextFormError, setIsTextFormError] = useState('');

  const location = useLocation();
  
  useEffect(() => {
    let filterFormData;
    if (location.pathname === '/movies') filterFormData = getFilterFormData();
    else if (location.pathname === '/saved-movies') {

      initSavedMovies(setIsPreloader, setIsSearchError, setCards, maxCountCards);

      filterFormData = getFilterFormDataSavedMovies();
    }
    

    const textMovie = filterFormData ? filterFormData.textMovie : textMovie;
    const shortsFilms = filterFormData ? filterFormData.shortsFilms : shortsFilms;
    
    setTextMovie(textMovie);
    setShortsFilms(shortsFilms);
  }, [maxCountCards])
  
  function handleChange(e) {
    const value = e.target.value;
    
    setTextMovie(value);
  }

  function handleChangeCheckbox(state) {
    setShortsFilms(state);
  }

  useEffect(() => {
    handleSubmit(
      false,
      location,
      setIsTextFormError,
      setIsPreloader, 
      setIsSearchError, 
      shortsFilms, 
      textMovie,
      setterFilterFormData,
    );
  }, [shortsFilms])

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
              textMovie,
              setterFilterFormData
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
              location={location}
              setIsTextFormError={setIsTextFormError}
              setIsPreloader={setIsPreloader}
              setIsSearchError={setIsSearchError} 
              shortsFilms={shortsFilms}
              textMovie={textMovie}
              setterFilterFormData={setterFilterFormData}
            />
          </div>
          
        </form>
        <div className="search-form__error-text">
          {isTextFormError}  
        </div>

        <div className="search-form__filter-switch_mobile-visibility">
          <FilterCheckbox 
            handleChange={handleChangeCheckbox}
            location={location}
            setIsTextFormError={setIsTextFormError}
            setIsPreloader={setIsPreloader}
            setIsSearchError={setIsSearchError} 
            shortsFilms={shortsFilms}
            textMovie={textMovie}
            setterFilterFormData={setterFilterFormData}
          />
        </div>
        <div className="search-form__stroke-line-bottom"></div>
      </div>
    </section>
  )
}

export default withRouter(SearchForm);
