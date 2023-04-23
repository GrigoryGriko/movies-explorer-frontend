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
            планирую развивать свои навыки и устроиться на работу по этой специальности.
          </p>
          <a className="aboutMe__link-to-github" href="https://github.com/GrigoryGriko">
            Github
          </a>

          <div className="aboutMe__student-avatar"></div> 
        </article>
      </div>
    </section>
  )
}

export default AboutMe;
