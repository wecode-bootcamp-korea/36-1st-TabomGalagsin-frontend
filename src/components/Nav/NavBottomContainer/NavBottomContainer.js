import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Dropdown from './Dropdown/Dropdown';
import { goToUrl } from '../../../function';
import './NavBottomContainer.scss';

function NavBottomContainer({ color }) {
  const navigate = useNavigate();
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  return (
    <div className="navBottomContainer">
      <div className={`navbar ${color}`}>
        <div className="navIconWrapper">
          <div
            onMouseEnter={() => setIsMouseEnter(!isMouseEnter)}
            onMouseLeave={() => setIsMouseEnter(!isMouseEnter)}
          >
            <i className="fa-solid fa-bars navIcon menu" />
            {isMouseEnter && <Dropdown />}
          </div>
          <div className="linkComponent">
            <img
              className="logo"
              src="/images/Nav/logo-yellow.png"
              alt="logo"
              onClick={() => goToUrl(navigate, '/')}
            />
          </div>

          <div className="iconLeftSide">
            <i className="fa-solid fa-user navIcon" />
            <i className="fa-solid fa-basket-shopping navIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBottomContainer;
