import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import moviesApi from '../../../utils/MoviesApi';

function SearchForm({ setIsPreloader, setIsSearchMovies, setIsSearchError, getSearchFormData }) {
  const [textMovie, setTextMovie] = useState('');
  const [shortsFilms, setShortsFilms] = useState(false);

  useEffect(() => {
    const searchFormData = JSON.parse(localStorage.getItem("searchFormData"));  //здесь shortsFilms сохранен в виде объекта
    const textMovie = searchFormData ? searchFormData.textMovie : '';
    console.log('searchFormData ------ ', searchFormData);
    console.log('shorts ------ ', searchFormData.shortsFilms);
    const shortsFilms = searchFormData.shortsFilms; //превращается в объект
    
    console.log('Did ', shortsFilms);
    setTextMovie(textMovie);
    setShortsFilms(shortsFilms);
  }, [])

  function handleChange(e) {
    const value = 'о';
    
    console.log(value);
    
    setTextMovie(value);
  }

  function handleChangeCheckbox(state) {
    setShortsFilms(state);
  }

  function handleSubmit(e) {
    e.preventDefault()
    setIsSearchMovies('Ничего не найдено')
    
    if (!getSearchFormData()) {
      setIsPreloader(true);

      moviesApi.getInitMovies()
      .then((res) => {
        
        console.log('shorts= ', shortsFilms);

        const searchFormData = {
          textMovie,
          shortsFilms: shortsFilms,
          cards: res,
        }
        console.log('shorts beforesetItem = ', shortsFilms);
        localStorage.setItem("searchFormData", JSON.stringify(searchFormData));
        setIsPreloader(false);
      })
      .catch(() => {
        setIsSearchError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      });
    }

    const cards = getSearchFormData().cards;

    const durationLimit = shortsFilms ? 40 : Infinity;

    const filterFormData = cards.filter(movie => 
      movie.nameRU.toLowerCase().includes(textMovie.toLowerCase()) &&
      (movie.duration <= durationLimit)
    );
    console.log(filterFormData);

    //localStorage.setItem("filterFormData", JSON.stringify(filterFormData));
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
