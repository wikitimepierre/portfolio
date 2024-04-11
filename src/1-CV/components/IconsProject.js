import React from 'react';
import IconDisplay from './IconDisplay.js';

function IconsProject() {
  const separator = <span>&nbsp;&nbsp;</span>
  return (
    <div>
      <div>Team & Project Management: Pro level</div>
      <div className='pierre-iconAndSkill'>
        <IconDisplay iconFileName="jira" altName="Jira, ticketing solution, world #1 " />
        <IconDisplay iconFileName="mantisHub" altName="Mantis Hub, ticket management for bugs" />
        <IconDisplay iconFileName="slack" altName="Slack" />
        <IconDisplay iconFileName="chatGpt" altName="ChatGPT, OpenAI's LLM, property of Microsoft" />
        <IconDisplay iconFileName="googleGemini" altName="Gemini, Google's ChatGPT" />
        {/* <IconDisplay iconFileName="seo" altName="Search Engine Optimization" /> */}
      </div>
      {separator}
    </div>
  );
}

export default IconsProject;
