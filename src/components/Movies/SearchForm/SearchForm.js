import React from 'react';
import { withRouter } from 'react-router-dom';

import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import moviesApi from '../../../utils/MoviesApi';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textMovie: '',
      shortsFilms: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const searchFormData = JSON.parse(localStorage.getItem("searchFormData"));
    const textMovie = searchFormData !== null ? searchFormData.textMovie : '';
    const shortsFilms = searchFormData !== null ? searchFormData.shortsFilms : '';
    this.setState({
      textMovie: textMovie,
      shortsFilms: shortsFilms,
    });
  }
  
  handleChange(e) {
    const {id, value} = e.target;
    this.setState({
      [id]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.setIsSearchMovies('Ничего не найдено')
    this.props.setIsPreloader(true);

    moviesApi.getInitMovies()
      .then((res) => {
        const { 
          textMovie,
          shortsFilms,
        } = this.state;

        const searchFormData = {
          textMovie,
          shortsFilms: shortsFilms ? shortsFilms : 'off',
          cards: res,
        }

        localStorage.setItem("searchFormData", JSON.stringify(searchFormData));
        this.props.setIsPreloader(false);
      })
      .catch(() => {
        this.props.setIsSearchError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      });
  }
  
  render() {
    return(
      <section className="search-form section">
        <div className="search-form__wrapper wrapper">
          <form 
            className="search-form__search-input"
            onSubmit={this.handleSubmit}
            >
            <input
              id="textMovie"
              className="search-form__input-type"
              placeholder="Фильм"
              value={this.state.textMovie}
              onChange={this.handleChange}
              required>
            </input>
            <button className="search-form__search-button button-hover"></button>
  
            <div className="search-form__stroke-line"></div>
  
            <div className={"search-form__filter-switch_desktop-visibility"}>
              <FilterCheckbox
                handleChange={this.handleChange}
                shortsFilms={this.state.shortsFilms}
              />
            </div>
            
          </form>
            <div className="search-form__filter-switch_mobile-visibility">
              <FilterCheckbox 
                handleChange={this.handleChange}
                shortsFilms={this.state.shortsFilms}
              />
            </div>
          <div className="search-form__stroke-line-bottom"></div>
        </div>
      </section>
    )
  }
}

export default withRouter(SearchForm);
