import React from 'react';
import { useSelector } from 'react-redux';

import CVSkills from './CVSkills';

import Officiel from '../assets/images/Pierre Dumas - Debug3.jpg';
import Officieux from '../assets/images/Pierre Dumas - Officiel3.jpg';

function CV() {
  const isDebug = useSelector((state) => state.debugCheckbox.value);
  const separator = <span>&nbsp;&nbsp;</span>;
  // TODO: aligné à gauche les textes
  return (
    < div className="w3-content w3-margin-top" style={{ maxWidth: "1400px" }}>
      {/* TODO effacer CV.html et css */}
      {/* -- The Grid -- */}
      < div className="w3-row-padding" >

        <div className="w3-third">                                                   {/* -- Left Column -- */}
          <div className="w3-white w3-text-grey w3-card-4">
            <div className="w3-display-container">                                   {/* -- photo + name */}
              {isDebug ? (<img src={Officiel} style={{ width: "100%" }} alt="Pierre Dumas" />) : (<img src={Officieux} style={{ width: "100%" }} alt="BGE2" />)}
              {/* TODO si debug <img src={Officieux} style={{ width: "100%" }} alt="BGE2" /> */}
              <div className="w3-display-bottommiddle w3-container w3-text-white">
                <h2>Pierre Dumas</h2>
              </div>
            </div>
            <div className="w3-container">                                           {/* <!-- Infos --> */}
              <div>                                                                  {/* <!-- basic info --> */}
                <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Front-End Developer</p>
                <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>den Haag, Netherlands</p>
                {/* <!--TODO mailto: --> */}
                <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>wikitime.pierre@gmail.com</p>
                {/* <!--TODO <a href="https://www.linkedin.com/in/pdumas/"> --> */}
                <p><i className="fa fa-linkedin fa-fw w3-margin-right w3-large w3-text-teal"></i>linkedin.com/in/pdumas</p>
                <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>+31 16 21 87 20</p>
              </div>
              <hr />
              <div>                                                                  {/* <!-- Interests --> */}
                <p className="w3-large w3-text-theme"><b><i className="fa fa-bolt fa-fw w3-margin-right w3-text-teal">
                </i>Interests</b></p>
                <p>Writing. My first novel is finished this month. Soon to be sent to publishers. I'm still a potential multi billion worldwide best seller.</p>
                <p>Psychology. Avid observer and selfdev practitioneer. Do what I say, not what I do.</p>
              </div>
              <hr />
              <div>                                                                  {/* <!-- Sports --> */}
                <p className="w3-large w3-text-theme"><b><i className="fa fa-trophy fa-fw w3-margin-right w3-text-teal">
                </i>Sports</b></p>
                <p>Golf - Member of the French National Team Paragolf. World Ranking: 200-300 (moves regularly).</p>
                <p>Football - Used to play on a low-amateur level but an absolute nerd anyhow.</p>
                <p>Tennis - Practiced heavily as a youngster. I don't care anymore due to old limbs and lack of French successes.</p>
              </div>
            </div>
          </div>
        </div>                                                                       {/* <!-- End Left Column --> */}

        <div className="w3-twothird">                                                {/* <!-- Right Column --> */}
          <div className="w3-container w3-card w3-white w3-margin-bottom">           {/* <!-- Work Experience --> */}
            <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
            <div className="w3-container">
              <h5 className="w3-opacity"><b>Videogames Producer, Designer & Creative Director</b></h5>
              <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Jun 1995 - Jan 2021</h6>
              <p>25 years with several responsabilities in small & huge videogame companies (Ubisoft, Electronic Arts, Take2). Funded my own company, raised money, spent it all (1M€) and failed to deliver a bug free product.</p>
            </div>
          </div>
          <div className="w3-container w3-card w3-white w3-margin-bottom">           {/* <!-- Software Skills --> */}
            <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-laptop fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Software skills</h2>
            <CVSkills />
            {separator}
          </div>

          <div className="w3-container w3-card w3-white">                            {/* <!-- Education --> */}
            <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
            <div className="w3-container">
              <div>              {/* <!-- web --> */}
                <span className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2023-2024</span>
                <span className="w3-opacity"><b>- Web Front-End Development</b></span>
                <p>
                  OpenclassNamerooms' “IT Developer” certification, registered level 5 on the European certification frameworks.
                  Create responsive web apps, interfaces with back-end, dynamic applications, optimize performance, maintain and write technical specifications.
                </p>
                <br />
              </div>
              <div>                {/* <!-- Management --> */}
                <span className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>1988-1991</span>
                <span className="w3-opacity"><b>- MBA ESC Marne la Vallée</b></span>
                <p>
                  Master of Business Administration. Intensive graduate program dedicated to the knowledge and skills in business leadership roles, focusing on strategy, finance, communication, marketing, and operations.
                </p>
              </div>
            </div>

            <hr />

            <div>                {/* <!-- Languages --> */}
              <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
              <div>                {/* <!-- French --> */}
                French (native)
                <div className="w3-light-grey w3-round-xlarge">
                  <div className="w3-round-xlarge w3-teal" style={{ height: "24px", width: "100%" }}></div>
                </div>
              </div>
              <div>                {/* <!-- English --> */}
                English (fluent both personal & professional)
                <div className="w3-light-grey w3-round-xlarge">
                  <div className="w3-round-xlarge w3-teal" style={{ height: "24px", width: "90%" }}></div>
                </div>
              </div>
              <div>                {/* <!-- German --> */}
                German (to reactivate)
                <div className="w3-light-grey w3-round-xlarge">
                  <div className="w3-round-xlarge w3-teal" style={{ height: "24px", width: "15%" }}></div>
                </div>
              </div>
              <div>                {/* <!-- Dutch --> */}
                Dutch (to practice)
                <div className="w3-light-grey w3-round-xlarge">
                  <div className="w3-round-xlarge w3-teal" style={{ height: "24px", width: "25%" }}></div>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>                                                                       {/* <!-- End Right Column --> */}

      </div >
      <div>          {/* TODO prettyfy citation + basse + w3school en petit + */}
        <br></br>
        “There is no greater fool than he who thinks himself wise.” - Marguerite de Valois
        <br />
        {/* <!--TODO --> */}
        <span style={{ fontSize: "smaller" }}><a href="https://www.w3schools.com/howto/howto_website_create_resume.asp">inspired by w3.css</a></span>
      </div>
    </div >
  );
}

export default CV;
