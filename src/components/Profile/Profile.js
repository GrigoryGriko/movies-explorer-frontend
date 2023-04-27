import React from 'react';

function Profile() {
  return (
    <section className="profile">
      <h2 className="profile__greeting-text">Привет, Григорий!</h2>

      <div className="profile__stroke-info profile_fix-size">
        <p className="profile__username-text">
          Имя
        </p>
        <p className="profile__username-data">
          Григорий
        </p>
      </div>

      <div className="profile__stroke-line profile_fix-size"></div>

      <div className="profile__stroke-info profile_fix-size">
        <p className="profile__username-text">
          E-mail
        </p>
        <p className="profile__username-data">
          griko1996@gmail.com
        </p>
      </div>

      <button className="profile__edit-info link-hover">
        Редактировать
      </button>
      <button className="profile__logout link-hover">
        Выйти из аккаунта
      </button>
    </section>
  )
}

export default Profile;
