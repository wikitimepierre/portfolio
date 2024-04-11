import React from 'react';
import IconDisplay from './IconDisplay.js';

function IconsDesign() {
  const separator = <span>&nbsp;&nbsp;</span>
  return (
    <div>
      <div>Design Tools: Beginner level</div>
      <div className='pierre-iconAndSkill'>
        <IconDisplay iconFileName="figma" altName="figma" />
        <IconDisplay iconFileName="blender" altName="blender" />
        <IconDisplay iconFileName="photoshop" altName="photoshop" />
      </div>
      {separator}
    </div>
  );
}

export default IconsDesign;
