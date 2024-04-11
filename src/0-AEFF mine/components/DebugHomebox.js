import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/home.png';

export default function DebugHomebox() {

  return (
    <Link to="/">
      <img src={Logo} alt="Home" className="" />
    </Link>
  );
}
