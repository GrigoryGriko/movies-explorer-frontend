import React from 'react';

function AboutMe() {
  return(
    <section className="aboutMe section">
      <div className="aboutMe__wrapper wrapper-about-me">
        <h2 className="aboutMe__header text-header">
          Студент
        </h2>
        <div className="aboutMe__stroke-line stroke-line"></div>

        <article className="aboutMe__student-article">
          <h3 className="aboutMe__student-name">
            Григорий
          </h3>
          <h4 className="aboutMe__student-info">
            Фронтенд-разработчик, 27 лет
          </h4>
          <p className="aboutMe__student-description">
            Я родился и живу в Ростовской области, закончил геолого-географический факультет. 
            Смотрю познавательные видео, люблю заниматься в спортзале. С 2018 года работаю 
            IT-специалистом в «МАУ МФЦ». После того, как прошёл курс по веб-разработке, 
            планирую развивать свои навыки и устроиться веб-разработчиком.
          </p>
          <a className="aboutMe__link-to-github link-hover" href="https://github.com/GrigoryGriko" target="_blank" rel="noopener noreferrer">
            Github
          </a>

          <div className="aboutMe__student-avatar"></div> 
        </article>

        <p className="aboutMe__portfolio">Портфолио</p>
        
        <ul className="aboutMe__list">
          <li className="aboutMe__item">
            <a className="aboutMe__link-item link-hover" href="https://grigorygriko.github.io/how-to-learn/" target="_blank" rel="noopener noreferrer">
              <p className="aboutMe__item-name">
                Статичный сайт
              </p>

              <div className="aboutMe__item-arrow"></div>
            </a>
          </li>

          <li className="aboutMe__list-line"></li>

          <li className="aboutMe__item">
            <a className="aboutMe__link-item link-hover" href="https://grigorygriko.github.io/russian-travel/" target="_blank" rel="noopener noreferrer">
              <p className="aboutMe__item-name">
                Адаптивный сайт
              </p>

              <div className="aboutMe__item-arrow"></div>
            </a>
          </li>

          <li className="aboutMe__list-line"></li>

          <li className="aboutMe__item">
            <a className="aboutMe__link-item link-hover" href="https://grigorygriko.github.io/mesto/" target="_blank" rel="noopener noreferrer">
              <p className="aboutMe__item-name">
                Одностраничное приложение
              </p>

              <div className="aboutMe__item-arrow"></div>
            </a>
          </li>
        </ul>
       
      </div>
    </section>
  )
}

export default AboutMe;
