import React from "react";
//import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const DebugUserLinks = () => {
  const separator2 = <span>&nbsp; &nbsp;-&nbsp; &nbsp;</span>;

  return (
    <div>
      <Link to="/">HOME</Link>{separator2}
      <Link to="/1-CV/">PIERRE</Link>{separator2}
      <Link to="/2-Bank/">BANK</Link>{separator2}
      <Link to="/3-Shop/">SHOP</Link>{separator2}
      <Link to="/3-Shop copy/">old SHOP</Link>{separator2}
      <Link to="/4-Wikitime/">WIKITIME</Link>{separator2}
    </div>
  );
};

export default DebugUserLinks;