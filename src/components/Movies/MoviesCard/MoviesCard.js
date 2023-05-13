import React from 'react';
import { Switch, Route } from 'react-router-dom';

import moviesCardListImage from '../../../images/movies-cardlist__image.jpg';


export default class MoviesCards extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSaveClick = () => {
    this.props.onCardSave(this.props.card, this.props.cardIndex);
  }

  render() {
    console.log(this.props.card);
    return(
      <>
        <li className="movies-cardlist__item">
          <img className="movies-cardlist__image" src={moviesCardListImage} alt="карточка фильма"/>
  
          <Switch>
            <Route path="/movies">
              <button 
                className={`movies-cardlist__action-save button-hover
                  ${this.props.card.isSaved ? 'movies-cardlist_disabled-element' : ''}`}
                onClick={this.handleSaveClick}
              >
                Сохранить
              </button>
  
              <button 
                className={`movies-cardlist__marker-saved button-hover
                  ${!this.props.card.isSaved ? 'movies-cardlist_disabled-element' : ''}`}
              >

              </button>
            </Route>
  
            <Route path="/saved-movies">
              <button className="movies-cardlist__action-delete button-hover"></button>
            </Route>
          </Switch>
  
          <div className="movies-cardlist__wrapper-text">
            <h5 className="movies-cardlist__title-film">{''+this.props.card.isSaved} 33 слова о дизайне</h5>
            <p className="movies-cardlist__duration-film">1ч 17м</p>
          </div>
        </li>
      </>
    );
  }
}
