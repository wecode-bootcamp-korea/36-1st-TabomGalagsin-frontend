import React, { useState } from 'react';
import Dropdown from './Dropdown/Dropdown';
import NavCart from './NavCart/NavCart';
import './NavBottomContainer.scss';

function NavBottomContainer({ color }) {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="navBottomContainer">
      <div className={`navbar ${color}`}>
        <div
          onMouseEnter={() => setIsMouseEnter(!isMouseEnter)}
          onMouseLeave={() => setIsMouseEnter(!isMouseEnter)}
        >
          <i className="fa-solid fa-bars navIcon menu" />
          {isMouseEnter && <Dropdown />}
        </div>
        <img className="logo" src="/images/Nav/logo-yellow.png" alt="logo" />
        <div className="iconLeftSide">
          <div className="navIconWrap">
            <i className="fa-solid fa-user navIcon" />
          </div>
          <div
            className="navIconWrap"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(true)}
          >
            <i className="fa-solid fa-basket-shopping navIcon" />
            {isHover ? <NavCart /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBottomContainer;
