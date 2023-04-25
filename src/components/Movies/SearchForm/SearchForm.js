import React from 'react';

function SearchForm() {
  return(
    <section className="search-form section">
      <div className="search-form__wrapper wrapper">
        <form className="search-form__search-input">
          <input className="search-form_input-type" placeholder="Фильм"></input>
          <button className="search-form_search-button"></button>

          <div className="search-form_stroke-line"></div>

          <button className="search-form_filter-switch">
            <div className="search-form_switch-marker">
            </div>
          </button>
          <p className="search-form_filter-name">
            Короткометражки
          </p>
        </form>

        <div className="search-form_stroke-line-bottom"></div>
      </div>
    </section>
  )
}

export default SearchForm;
