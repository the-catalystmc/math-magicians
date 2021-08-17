import '../scss/style.scss';
import React from 'react';

const Header = () => (
  <div className="Header-Container">
    <h1>Math Magicians</h1>
    <ul className="Nav-Items">
      <li className="Nav-Item"><a href="fpl.com">Home</a></li>
      <span className="Nav-Item">|</span>
      <li className="Nav-Item"><a href="fpl.com">Calculator</a></li>
      <span className="Nav-Item">|</span>
      <li className="Nav-Item"><a href="fpl.com">Qoute</a></li>
    </ul>
  </div>
);

export default Header;
