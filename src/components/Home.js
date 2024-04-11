import React from 'react';
import { Link } from 'react-router-dom';

import IconDisplay2 from './IconDisplay2.js';

//TODO: le titre de la tabulation = géré par shop => à gérer sur chaque partie
function Home() {
  return (
    <div className='general-container'>
      <div className='pierre-hometitle'>
        Portfolio de Pierre Dumas
        <div className='pierre-homesubtitle'>https://github.com/wikitimepierre/persoOC</div>
      </div>
      <div className='home-container'>

        <Link to="/1-CV/">
          <div className="pierre-card"><button class="pierre-wrap pierre-button-home pierre-button-cv">
            PIERROT<br />my Resume online<div className='pierre-fullSkill'><IconDisplay2 iconFileName="html5" /><IconDisplay2 iconFileName="css3" /><IconDisplay2 iconFileName="sass" /></div>
          </button></div></Link>

        <Link to="/3-Shop/">
          <div className="pierre-card"><button class="pierre-wrap pierre-button-home pierre-button-shop">
            SHOP<br />React Cart<div className='pierre-fullSkill'><IconDisplay2 iconFileName="react" /><IconDisplay2 iconFileName="chatGpt" /><IconDisplay2 iconFileName="photoshop" /></div>
          </button></div></Link>

        <Link to="/2-Bank/">
          <div className="pierre-card"><button class="pierre-wrap pierre-button-home pierre-button-bank">
            BANK<br />Redux Account<div className='pierre-fullSkill'><IconDisplay2 iconFileName="react" /><IconDisplay2 iconFileName="swagger" /><IconDisplay2 iconFileName="rtk" /></div>
          </button></div></Link>

        <Link to="/">
          <div className="pierre-card"><button class="pierre-wrap pierre-button-home pierre-button-wikitime">
            WIKITIME<br />surprise<div className='pierre-fullSkill'><IconDisplay2 iconFileName="question" /><IconDisplay2 iconFileName="question" /><IconDisplay2 iconFileName="question" /><IconDisplay2 iconFileName="question" /></div>
          </button></div></Link>

      </div >
    </div >
  );
}

export default Home;
