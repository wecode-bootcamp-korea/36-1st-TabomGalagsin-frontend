import React, { useState } from 'react';
import NavTopContainer from './NavTopContainer/NavTopContainer';
import Dropdown from './Dropdown/Dropdown';
import './Nav.scss';

function Nav() {
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  return (
    <nav className="Nav">
      {/* <div on>
        <button>on</button>
        {true && <Component />}
      </div> */}

      <NavTopContainer />
      <div className="navBottomContainer">
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
