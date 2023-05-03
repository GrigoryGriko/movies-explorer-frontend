import React from 'react';

import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return(
    <section className="search-form section">
      <div className="search-form__wrapper wrapper">
        <form className="search-form__search-input">
          <input className="search-form_input-type" placeholder="Фильм"></input>
          <button className="search-form_search-button button-hover"></button>

          <div className="search-form_stroke-line"></div>

          <div className="search-form__filter-switch_desktop-visibility">
            <FilterCheckbox/>
          </div>
          
        </form>
          <div className="search-form__filter-switch_mobile-visibility">
            <FilterCheckbox/>
          </div>
        <div className="search-form_stroke-line-bottom"></div>
      </div>
    </section>
  )
}

export default SearchForm;
