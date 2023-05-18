import React from 'react';

function FilterCheckbox(props) {
  console.log('shooorts ' + props.shortsFilms);

  return(
    <>
      <label className="search-form__checkbox-filter">
        <input 
          type="checkbox"
          id="shortsFilms"
          onChange={() => props.handleChange(!props.shortsFilms)}
          checked={props.shortsFilms}
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
