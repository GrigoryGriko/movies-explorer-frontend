import React from 'react';

function Promo() {
  return(
    <section className="promo section">
      <div class="promo__wrapper wrapper">
        <h1 className="promo__description">
          Учебный проект студента факультета<br></br>
          Веб-разработки.
        </h1>
        <p className="promo__text">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>

        <button className="promo__button-more" type="button">
          Узнать больше
        </button>

        <div className="promo__landing-logo"></div>
      </div>
    </section>
  )
}

export default Promo;
