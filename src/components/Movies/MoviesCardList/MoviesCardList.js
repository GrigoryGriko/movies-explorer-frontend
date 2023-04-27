import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return(
    <>
      <section className="movies-cardlist section">
        <ul className="movies-cardlist__list wrapper">
          <MoviesCard
            isSaved={false}
          />
          <MoviesCard
            isSaved={true}
          />
          <MoviesCard
            isSaved={false}
          />
          <MoviesCard
            isSaved={false}
          />
          <MoviesCard
            isSaved={false}
          />
          <MoviesCard
            isSaved={true}
          />
          <MoviesCard
            isSaved={false}
          />
          <MoviesCard
            isSaved={false}
          />
          <MoviesCard
            isSaved={true}
          />
        </ul>
      </section>

      
      <section className="movies-cardlist-more section">
        <button className="movies-cardlist-more__button-more wrapper link-hover">
          Ещё
        </button>
      </section>
    </>
  )
}

export default MoviesCardList;
