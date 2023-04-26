import React from 'react';

import moviesCardListImage from '../../../images/movies-cardlist__image.jpg';

function MoviesCardList() {
  return(
    <section className="movies-cardlist section">
      <ul className="movies-cardlist__list wrapper">
        <li className="movies-cardlist__item">
          <img className="movies-cardlist__image" src={moviesCardListImage} alt="карточка фильма"/>

          <div className="movies-cardlist__action-save">Сохранить</div>

          <div className="movies-cardlist__wrapper-text">
            <h5 className="movies-cardlist__title-film">33 слова о дизайне</h5>
            <p className="movies-cardlist__duration-film">1ч 17м</p>
          </div>
        </li>

        <li className="movies-cardlist__item">
          <img className="movies-cardlist__image" src={moviesCardListImage} alt="карточка фильма"/>

          <div className="movies-cardlist__marker-saved"></div>

          <div className="movies-cardlist__wrapper-text">
            <h5 className="movies-cardlist__title-film">33 слова о дизайне</h5>
            <p className="movies-cardlist__duration-film">1ч 17м</p>
          </div>
        </li>

        <li className="movies-cardlist__item">
          <img className="movies-cardlist__image" src={moviesCardListImage} alt="карточка фильма"/>

          <div className="movies-cardlist__action-save">Сохранить</div>
          
          <div className="movies-cardlist__wrapper-text">
            <h5 className="movies-cardlist__title-film">33 слова о дизайне</h5>
            <p className="movies-cardlist__duration-film">1ч 17м</p>
          </div>
        </li>

        <li className="movies-cardlist__item">
          <img className="movies-cardlist__image" src={moviesCardListImage} alt="карточка фильма"/>
          <div className="movies-cardlist__wrapper-text">
            <h5 className="movies-cardlist__title-film">33 слова о дизайне</h5>
            <p className="movies-cardlist__duration-film">1ч 17м</p>
          </div>
        </li>

        <li className="movies-cardlist__item">
          <img className="movies-cardlist__image" src={moviesCardListImage} alt="карточка фильма"/>
          <div className="movies-cardlist__wrapper-text">
            <h5 className="movies-cardlist__title-film">33 слова о дизайне</h5>
            <p className="movies-cardlist__duration-film">1ч 17м</p>
          </div>
        </li>

        <li className="movies-cardlist__item">
          <img className="movies-cardlist__image" src={moviesCardListImage} alt="карточка фильма"/>
          <div className="movies-cardlist__wrapper-text">
            <h5 className="movies-cardlist__title-film">33 слова о дизайне</h5>
            <p className="movies-cardlist__duration-film">1ч 17м</p>
          </div>
        </li>

        <li className="movies-cardlist__item">
          <img className="movies-cardlist__image" src={moviesCardListImage} alt="карточка фильма"/>
          <div className="movies-cardlist__wrapper-text">
            <h5 className="movies-cardlist__title-film">33 слова о дизайне</h5>
            <p className="movies-cardlist__duration-film">1ч 17м</p>
          </div>
        </li>

        <li className="movies-cardlist__item">
          <img className="movies-cardlist__image" src={moviesCardListImage} alt="карточка фильма"/>
          <div className="movies-cardlist__wrapper-text">
            <h5 className="movies-cardlist__title-film">33 слова о дизайне</h5>
            <p className="movies-cardlist__duration-film">1ч 17м</p>
          </div>
        </li>

        <li className="movies-cardlist__item">
          <img className="movies-cardlist__image" src={moviesCardListImage} alt="карточка фильма"/>
          <div className="movies-cardlist__wrapper-text">
            <h5 className="movies-cardlist__title-film">33 слова о дизайне</h5>
            <p className="movies-cardlist__duration-film">1ч 17м</p>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default MoviesCardList;
