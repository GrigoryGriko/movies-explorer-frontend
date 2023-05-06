import React from 'react';

function FilterCheckbox() {
  return(
    <>
      <label className="search-form__checkbox-filter">
        <input type="checkbox"></input>
        <span className="search-form__checkbox-switch"></span>
      </label>
     
      <p className="search-form__filter-name">
        Короткометражки
      </p>
    </>
  )
}

export default FilterCheckbox;
