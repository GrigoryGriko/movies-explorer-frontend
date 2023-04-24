import React from 'react';

function AboutMe() {
  return(
    <section className="aboutMe section">
      <div className="aboutMe__wrapper wrapper">
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
          <a className="aboutMe__link-to-github" href="https://github.com/GrigoryGriko">
            Github
          </a>

          <div className="aboutMe__student-avatar"></div> 
        </article>

        <p className="aboutMe__portfolio">Портфолио</p>
        
        <ul className="aboutMe__list">
          <a className="aboutMe__link-item" href="https://github.com/GrigoryGriko/how-to-learn">
            <li className="aboutMe__item">
              <p className="aboutMe__item-name">
                Статичный сайт
              </p>

              <div className="aboutMe__item-arrow"></div>
            </li>
          </a>

          <div className="aboutMe__list-line"></div>

          <a className="aboutMe__link-item" href="https://github.com/GrigoryGriko/russian-travel">
            <li className="aboutMe__item">
              <p className="aboutMe__item-name">
                Адаптивный сайт
              </p>

              <div className="aboutMe__item-arrow"></div>
            </li>
          </a>

          <div className="aboutMe__list-line"></div>

          <a className="aboutMe__link-item" href="https://github.com/GrigoryGriko/react-mesto-api-full-gha">
            <li className="aboutMe__item">
              <p className="aboutMe__item-name">
                Одностраничное приложение
              </p>

              <div className="aboutMe__item-arrow"></div>
            </li>
          </a>
        </ul>
       
      </div>
    </section>
  )
}

export default AboutMe;
