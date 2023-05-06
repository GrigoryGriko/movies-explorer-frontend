import React from 'react';

import AuthBottom from '../Register/AuthBottom/AuthBottom';

function Profile() {
  return (
    <main className="content section">
      <section className="profile">
        <h2 className="profile__greeting-text">Привет, Григорий!</h2>

        <div className="profile__stroke-info profile__stroke-info_fix-size">
          <p className="profile__username-text">
            Имя
          </p>
          <p className="profile__username-data">
            Григорий
          </p>
        </div>

        <div className="profile__stroke-line profile__stroke-line_fix-size"></div>

        <div className="profile__stroke-info profile__stroke-info_fix-size">
          <p className="profile__username-text">
            E-mail
          </p>
          <p className="profile__username-data">
            griko1996@gmail.com
          </p>
        </div>

        <div className="profile__edit-button">
        <AuthBottom/>
        </div>

        <button className="profile__edit-info button-hover">
          Редактировать
        </button>
        <button className="profile__logout button-hover">
          Выйти из аккаунта
        </button>
      </section>
    </main>
  )
}

export default Profile;
