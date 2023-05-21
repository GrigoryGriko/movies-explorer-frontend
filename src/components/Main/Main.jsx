import React from 'react';

import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';

function Main() {
  return (
    <main className="content section">
      <Promo/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
    </main>
  )
}

export default Main;