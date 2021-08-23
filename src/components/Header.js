import '../scss/style.scss';
import React from 'react';
import {
  Link,
} from 'react-router-dom';

const Header = () => (
  <div className="Header-Container">
    <h1>Math Magicians</h1>
    <nav>
      <ul className="Nav-Items">
        <li className="Nav-Item"><Link exact to="/home">Home</Link></li>
        <span className="Nav-Item">|</span>
        <li className="Nav-Item"><Link to="/calculator">Calculator</Link></li>
        <span className="Nav-Item">|</span>
        <li className="Nav-Item"><Link to="/quote">Quote</Link></li>
      </ul>
    </nav>
  </div>
);

export default Header;
