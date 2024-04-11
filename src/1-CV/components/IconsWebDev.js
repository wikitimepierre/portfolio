import React from 'react';
import IconDisplay from './IconDisplay.js';

function IconsWebDev() {
  const separator = <span>&nbsp;&nbsp;</span>
  return (
    <div>
      <div>Web Development: Freshman out of school level</div>
      <div className='pierre-iconAndSkill'>
        <IconDisplay iconFileName="html5" altName="HTML5" />
        <IconDisplay iconFileName="css3" altName="CSS3" />
        <IconDisplay iconFileName="sass" altName="Sass" />
        <IconDisplay iconFileName="react" altName="React" />
        <IconDisplay iconFileName="rtk" altName="RTK" />
        {/* <IconDisplay iconFileName="nodeJs" altName="Node.js" />
        <IconDisplay iconFileName="express" altName="Express" /> */}
        <IconDisplay iconFileName="mongodb" altName="MongoDB" />
        <IconDisplay iconFileName="vsCode" altName="VS Code" />
        <IconDisplay iconFileName="swagger" altName="Swagger" />
        <IconDisplay iconFileName="apiRest" altName="API Rest" />
        {/* <IconDisplay iconFileName="gitBash" altName="Git Bash" /> */}
        <IconDisplay iconFileName="gitHubCopilot" altName="GitHub Copilot" />
        <IconDisplay iconFileName="gitHub" altName="GitHub" />
      </div>
      {separator}
    </div>
  );
}

export default IconsWebDev;















