import React from 'react';

function FilterCheckbox(props) {
  console.log('shooorts ' + props.shortsFilms);

  if (props.shortsFilms === 'on') {
    console.log(1);
  } else {
    console.log(2);
  }
  return(
    <>
      <label className="search-form__checkbox-filter">
        <input 
          type="checkbox"
          id="shortsFilms"
          onChange={props.handleChange}
          defaultChecked={props.shortsFilms === 'on'}
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
