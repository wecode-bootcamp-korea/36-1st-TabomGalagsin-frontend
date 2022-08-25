import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { goToUrl } from '../../../utils.js';
import Dropdown from './Dropdown/Dropdown';
import NavCart from './NavCart/NavCart';
import './NavBottomContainer.scss';

function NavBottomContainer({ color }) {
  const navigate = useNavigate();
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [userToken] = useState(localStorage.getItem('token'));
  const cartedCount = localStorage.getItem('totalProduct');

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
            <div
              onClick={() => {
                if (!!userToken) {
                  alert('로그인 되어 있습니다 ~! ♥️♥️♥️♥️♥️♥️');
                } else {
                  goToUrl(navigate, '/login');
                }
              }}
              className="navIconWrap"
            >
              <i className="fa-solid fa-user navIcon" />
            </div>
            <div className="navIconWrap" onMouseOver={() => setIsHover(true)}>
              <i className="fa-solid fa-basket-shopping navIcon" />
              {!!cartedCount && (
                <div className="cartedCount">{cartedCount}</div>
              )}
              {isHover && <NavCart onMouse={setIsHover} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBottomContainer;
