import React from 'react';
import { handleSubmit } from '../../../../utils/SearchMovies';

function FilterCheckbox({
  handleChange,
  location,
  setIsTextFormError,
  setIsPreloader, 
  setIsSearchError, 
  shortsFilms, 
  textMovie,
  setterFilterFormData
}) {
  return(
    <>
      <label className="search-form__checkbox-filter">
        <input 
          type="checkbox"
          id="shortsFilms"
          onChange={() => handleChange(!shortsFilms)}
          checked={shortsFilms}
        ></input>
        <span className="search-form__checkbox-switch"></span>
      </label>
     
      <p className="search-form__filter-name">
        Короткометражки
      </p>
    </>
  )
}

export default FilterCheckbox;
