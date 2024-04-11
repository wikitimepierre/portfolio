import React from 'react';
import { Link } from 'react-router-dom';

import IconDisplay2 from './IconDisplay2.js';

//TODO: le titre de la tabulation = géré par shop => à gérer sur chaque partie
function Home() {
  return (
    <div className='general-container'>
      <div>
        <h1>
          Portfolio de Pierre Dumas
        </h1>
        <Link to="https://github.com/wikitimepierre/persoOC" className='pierre-homesubtitle'>https://github.com/wikitimepierre/persoOC</Link>
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

      <div>
        Le projet CV est un projet de site de CV en ligne.<br />
        Il est inspiré d'un cv html (https://www.w3schools.com/howto/howto_website_create_resume.asp)<br />
        aue j'ai cherché à rendre visuellement attractif.<br />
        et que j'ai porté en REACT.<br />
        <br />
        Le projet Shop est un projet de site de vente en ligne et comprend une liste de produits et un panier de commande.<br />
        J'ai cherché à l'améliorer visuellement et à je l'ai rendu responsif.<br />
        On peut sélectionner des produits qui s'ajoutent au panier et augmentent le montant total.<br />
        Il est inspiré du P6, c'est l'un des exemples utilisé par le professeur pour expliquer React.<br />
        <br />
        Le projet Bank est un projet de gestion de compte bancaire.<br />
        Il est inspiré du P11, son objectif est de gérer le signin et le state RTK.<br />
        Ici, j'ai gardé la gestion du state qui affiché dans le menu debug.<br />
        <br />
        Le projet Wikitime est un projet personnel que je présenterai.<br />
        Pour des raisons de confidentialité et de WIP, il n'est pas disponible sur github.<br />
      </div>
    </div >
  );
}

export default Home;
