import React from 'react';

import IconsWebdev from './IconsWebDev.js';
import IconsProject from './IconsProject.js';
import IconsDesign from './IconsDesign.js';
import IconsSuites from './IconsSuites.js';

function CVSkills() {
  return (
    <div>
      <div className='pierre-OtherSkills'>
        <IconsWebdev />
        <IconsProject />
        <IconsDesign />
        <IconsSuites />
      </div>
    </div >
  );
}

export default CVSkills;
// <IconsWebdev />
// <div className=''>{separator}</div>
// <div className='spacebetween'>
//   <IconsProject />
//   <div>{separator}</div>
//   <IconsDesign />
//   <div>{separator}</div>
//   <IconsSuites />
// </div >

