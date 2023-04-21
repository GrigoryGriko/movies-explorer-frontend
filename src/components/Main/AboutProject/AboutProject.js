import React from 'react';

function AboutProject() {
  return(
    <section className="aboutProject section">
      <div className="aboutProject__wrapper wrapper">
        <h2 className="aboutProject__header text-header">
          О проекте
        </h2>
        <div className="aboutProject__stroke-line stroke-line"></div>

        <div>
          <div className="aboutProject__wrapper-text-about">
            <div className="aboutProject__text-container">
              <h3 className="aboutProject__header-descript">
                Дипломный проект включал 5 этапов
              </h3>
              <p className="aboutProject__description">
                Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
              </p>
            </div>

            <div className="aboutProject__text-container">
              <h3 className="aboutProject__header-descript">
                На выполнение диплома ушло 5 недель
              </h3>
              <p className="aboutProject__description">
                У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
              </p>
            </div>
          </div>

          <div className="aboutProject__progress-bar">
            <div className="aboutProject__progress-backend">
              1 неделя

              <p className="aboutProject__progress-subtitle">
                Back-end
              </p>
            </div>

            <div className="aboutProject__progress-frontend">
              4 недели

              <p className="aboutProject__progress-subtitle">
                Front-end
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;
