import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import moviesApi from '../../../utils/MoviesApi';

import { getSearchMovies, getFilterFormData } from '../../../utils/SearchMovies';

function SearchForm({ setIsPreloader, setIsSearchMovies, setIsSearchError }) {
  const [textMovie, setTextMovie] = useState('');
  const [shortsFilms, setShortsFilms] = useState(false);

  useEffect(() => {
    const filterFormData = getFilterFormData();
    const textMovie = filterFormData.textMovie;
    const shortsFilms = filterFormData.shortsFilms;
    
    console.log('Did ', shortsFilms);
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

  function handleSubmit(e) {
    e.preventDefault();
    setIsSearchMovies('Ничего не найдено');
    
    if (!getSearchMovies()) {
      setIsPreloader(true);

      moviesApi.getInitMovies()
      .then((res) => {      
        const searchMovies = res;
        localStorage.setItem("searchMovies", JSON.stringify(searchMovies));

        filterMovies();

        setIsPreloader(false);
      })
      .catch(() => {
        setIsSearchError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      });
    } else {
      setIsPreloader(true);
      filterMovies();
      setIsPreloader(false);
      console.log(getFilterFormData().cards);
    }
  }

  function filterMovies() {
    const cards = getSearchMovies();
    const durationLimit = shortsFilms ? 40 : Infinity;

    const filteredMovies = cards.filter(movie => 
      movie.nameRU.toLowerCase().includes(textMovie.toLowerCase()) &&
      (movie.duration <= durationLimit)
    );
    const filterFormData = {
      textMovie: textMovie,
      shortsFilms: shortsFilms,
      cards: filteredMovies,
    }
    localStorage.setItem("filterFormData", JSON.stringify(filterFormData));
  }
  
  return(
    <section className="search-form section">
      <div className="search-form__wrapper wrapper">
        <form 
          className="search-form__search-input"
          onSubmit={handleSubmit}
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
