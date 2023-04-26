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

        <a href="#aboutProject" className="promo__button-more link-hover" type="button">
          Узнать больше
        </a>

        <div className="promo__landing-logo"></div>
      </div>
    </section>
  )
}

export default Promo;
