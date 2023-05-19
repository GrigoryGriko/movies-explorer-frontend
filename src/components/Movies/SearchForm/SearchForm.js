import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

import { getFilterFormData, handleSubmit } from '../../../utils/SearchMovies';

function SearchForm({ setIsPreloader, setIsSearchMovies, setIsSearchError }) {
  const [textMovie, setTextMovie] = useState('');
  const [shortsFilms, setShortsFilms] = useState(false);

  useEffect(() => {
    const filterFormData = getFilterFormData();
    const textMovie = filterFormData.textMovie;
    const shortsFilms = filterFormData.shortsFilms;
    
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
          onSubmit={e => handleSubmit(e, setIsSearchMovies, setIsPreloader, setIsSearchError, shortsFilms, textMovie)}
          >
          <input
            id="textMovie"
            className="search-form__input-type"
            placeholder="Фильм"
            value={textMovie}
            onChange={handleChange}
            required>
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
