import React from 'react';

function Main() {
  return (
    <main className="content">
      <section className="hero section">
        <div class="hero__wrapper wrapper">
          <h1 className="hero__description">
            Учебный проект студента факультета<br></br>
            Веб-разработки.
          </h1>
          <p className="hero__text">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>

          <button className="hero__button-more" type="button">
            Узнать больше
          </button>

          <div className="hero__landing-logo"></div>
        </div>
      </section>
    </main>
  )
}

export default Main;
