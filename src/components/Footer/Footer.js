import React from 'react';

function Footer() {
  return(
    <section className="footer section">
      <div className="footer__wrapper wrapper">
        <p className="footer__about-project">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>

        <div className="footer__stroke-line"></div>

        <div className="footer__wrapper-year-links">
          <p className="footer__year">
            © 2020
          </p>

          <div className="footer__wrapper-links">
            <a href="https://practicum.yandex.ru" className="footer__link">
              Яндекс.Практикум
            </a>
            <a href="https://github.com/GrigoryGriko" className="footer__link">
              Github
            </a>
          </div>
          
        </div>
        
      </div>
    </section>
  )
}

export default Footer;
