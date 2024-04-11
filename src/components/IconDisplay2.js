import React from 'react';

function IconDisplay2({ iconFileName, altName }) {
  const separator = <span>&nbsp;&nbsp;</span>;

  return (
    <div>
      <img
        className="pierre-icon"
        src={require(`../1-CV/assets/icons/resize100/${iconFileName}.png`)}
        alt={altName}
      />
      {separator}
    </div>
  );
}

export default IconDisplay2;
