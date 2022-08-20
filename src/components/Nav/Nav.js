import React, { useState } from 'react';
import NavTopContainer from './NavTopContainer/NavTopContainer';
import Dropdown from './Dropdown/Dropdown';
import './Nav.scss';

function Nav({ color }) {
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  return (
    <nav className="nav">
      <NavTopContainer />
      <div className={`navBottomContainer ${color}`}>
        <div
          onMouseEnter={() => setIsMouseEnter(!isMouseEnter)}
          onMouseLeave={() => setIsMouseEnter(!isMouseEnter)}
        >
          <i className="fa-solid fa-bars navIcon menu" />
          {isMouseEnter && <Dropdown />}
        </div>
        <img className="logo" src="/images/Nav/logo-yellow.png" alt="logo" />
        <div className="iconLeftSide">
          <i className="fa-solid fa-user navIcon" />
          <i className="fa-solid fa-basket-shopping navIcon" />
        </div>
      </div>
    </nav>
  );
}
export default Nav;
