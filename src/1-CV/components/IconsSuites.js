import React from 'react';
import IconDisplay from './IconDisplay.js';

function IconsSuites() {
  const separator = <span>&nbsp;&nbsp;</span>
  return (
    <div>
      <div>Office & Workspace tools: advanced level</div>
      <div className='pierre-iconAndSkill'>
        <IconDisplay iconFileName="msExcel" altName="msExcel" />
        <IconDisplay iconFileName="msPowerpoint" altName="msPowerpoint" />
        <IconDisplay iconFileName="msWord" altName="msWord" />
        <IconDisplay iconFileName="googleDocs" altName="googleDocs" />
        <IconDisplay iconFileName="googleSheets" altName="googleSheets" />
        <IconDisplay iconFileName="googleDrive" altName="googleDrive" />
        <IconDisplay iconFileName="oneDrive" altName="oneDrive" />
      </div>
      {separator}
    </div>
  );
}

export default IconsSuites;
